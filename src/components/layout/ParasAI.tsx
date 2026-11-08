import { ArrowUpRight, Bot, Copy, FileUp, LoaderCircle, MessageCircle, Plus, RotateCcw, Send, Square, X } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import type { ParasAILink } from "@/services/paras-ai";

type ChatMessage = { id: string; role: "assistant" | "user"; text: string; links?: ParasAILink[] };
type Conversation = { id: string; title: string; updated: number; messages: ChatMessage[] };
const STORAGE_KEY = "paras-ai-conversations-v1";
const SUGGESTIONS = ["Explain a technical concept simply", "Help me debug Python code", "Show me Paras’s data science projects", "Draft a professional email"];

function inline(text: string) {
  return text.split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("`") && part.endsWith("`")) return <code key={i}>{part.slice(1, -1)}</code>;
    const link = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/);
    if (link) return <a key={i} href={link[2]} target="_blank" rel="noreferrer">{link[1]}</a>;
    return part;
  });
}

function FormattedAnswer({ text }: { text: string }) {
  const lines = text.replace(/\r/g, "").split("\n");
  const blocks: Array<{ type: "paragraph" | "list" | "heading" | "code"; lines: string[]; ordered?: boolean; lang?: string }> = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i] ?? "";
    const fence = line.match(/^```(.*)$/);
    if (fence) {
      const code: string[] = [];
      while (++i < lines.length && !(lines[i] ?? "").startsWith("```")) code.push(lines[i] ?? "");
      blocks.push({ type: "code", lines: code, lang: (fence[1] ?? "").trim() }); continue;
    }
    if (!line.trim()) continue;
    const heading = line.match(/^#{1,3}\s+(.+)$/);
    const bullet = line.match(/^\s*[-*+]\s+(.+)$/);
    const numbered = line.match(/^\s*\d+[.)]\s+(.+)$/);
    if (heading) blocks.push({ type: "heading", lines: [heading[1] ?? ""] });
    else if (bullet || numbered) {
      const ordered = Boolean(numbered), previous = blocks.at(-1);
      const listItem = (bullet ?? numbered)?.[1] ?? "";
      if (previous?.type === "list" && previous.ordered === ordered) previous.lines.push(listItem);
      else blocks.push({ type: "list", ordered, lines: [listItem] });
    } else {
      const previous = blocks.at(-1);
      if (previous?.type === "paragraph") previous.lines.push(line);
      else blocks.push({ type: "paragraph", lines: [line] });
    }
  }
  return <div className="paras-ai-answer">{blocks.map((block, i) => {
    if (block.type === "heading") return <h3 key={i}>{inline(block.lines[0] ?? "")}</h3>;
    if (block.type === "code") return <pre className="paras-ai-code" key={i}><div><span>{block.lang || "CODE"}</span><button type="button" onClick={() => void navigator.clipboard.writeText(block.lines.join("\n"))} aria-label="Copy code"><Copy /></button></div><code>{block.lines.join("\n")}</code></pre>;
    if (block.type === "list") { const List = block.ordered ? "ol" : "ul"; return <List key={i}>{block.lines.map((item, n) => <li key={n}>{inline(item)}</li>)}</List>; }
    return <p key={i}>{inline(block.lines.join(" "))}</p>;
  })}</div>;
}

function readConversations(): Conversation[] {
  try { const value = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]"); return Array.isArray(value) ? value : []; } catch { return []; }
}

export function ParasAI() {
  const [open, setOpen] = useState(false);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeId, setActiveId] = useState("");
  const [question, setQuestion] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [historyOpen, setHistoryOpen] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const conversationRef = useRef<HTMLDivElement>(null);
  const active = conversations.find((item) => item.id === activeId);
  const messages = active?.messages ?? [];

  useEffect(() => { const saved = readConversations(); setConversations(saved); if (saved[0]) setActiveId(saved[0].id); }, []);
  useEffect(() => { if (conversations.length) { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(conversations.slice(0, 12))); } catch { /* Chat remains usable when browser storage is full or disabled. */ } } }, [conversations]);
  useEffect(() => { if (open) inputRef.current?.focus(); }, [open]);
  useEffect(() => { if (conversationRef.current) conversationRef.current.scrollTop = conversationRef.current.scrollHeight; }, [messages, busy, error]);

  function newConversation() {
    if (busy) return;
    const item: Conversation = { id: crypto.randomUUID(), title: "New conversation", updated: Date.now(), messages: [] };
    setConversations((previous) => [item, ...previous]); setActiveId(item.id); setError(""); setFiles([]); setHistoryOpen(false);
  }

  async function sendMessage(value = question, retry = false) {
    const text = value.trim(); if ((!text && !retry) || busy) return;
    const conversation = active ?? { id: crypto.randomUUID(), title: "New conversation", updated: Date.now(), messages: [] };
    let remainingAttachmentChars = 7000;
    const attachments = files.length ? await Promise.all(files.map(async (file) => {
      const content = (await file.text()).slice(0, remainingAttachmentChars);
      remainingAttachmentChars = Math.max(0, remainingAttachmentChars - content.length);
      return `--- ${file.name} ---\n${content}`;
    })) : [];
    const userText = retry ? "" : text + (attachments.length ? `\n\nAttached files:\n${attachments.join("\n\n")}` : "");
    const nextMessages = retry ? conversation.messages.slice(0, -1) : [...conversation.messages, { id: crypto.randomUUID(), role: "user" as const, text: userText }];
    const visibleMessages = [...nextMessages];
    if (!retry) setQuestion(""); setFiles([]); setError(""); setActiveId(conversation.id);
    setConversations((previous) => [conversation, ...previous.filter((item) => item.id !== conversation.id)]);
    const placeholder: ChatMessage = { id: crypto.randomUUID(), role: "assistant", text: "" };
    setConversations((previous) => previous.map((item) => item.id === conversation.id ? { ...item, title: item.messages.length ? item.title : (retry ? item.title : text.slice(0, 48)), updated: Date.now(), messages: [...visibleMessages, placeholder] } : item));
    setBusy(true);
    const controller = new AbortController(); abortRef.current = controller;
    try {
      const response = await fetch("/api/paras-ai", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ messages: nextMessages.map(({ role, text: content }) => ({ role, content })) }), signal: controller.signal });
      if (!response.ok) throw new Error(await response.text());
      if (response.headers.get("content-type")?.includes("application/json")) {
        const result = await response.json() as { answer?: string; links?: ParasAILink[] };
        setConversations((previous) => previous.map((item) => item.id === conversation.id ? { ...item, messages: item.messages.map((message) => message.id === placeholder.id ? { ...message, text: result.answer ?? "", ...(result.links ? { links: result.links } : {}) } : message) } : item));
        return;
      }
      if (!response.body) throw new Error("Streaming is unavailable in this browser.");
      const reader = response.body.getReader(), decoder = new TextDecoder(); let buffer = "";
      while (true) {
        const { value, done } = await reader.read(); if (done) break;
        buffer += decoder.decode(value, { stream: true }); const events = buffer.split("\n\n"); buffer = events.pop() ?? "";
        for (const event of events) {
          const line = event.split("\n").find((part) => part.startsWith("data: ")); if (!line) continue;
          const payload = JSON.parse(line.slice(6)) as { text?: string; done?: boolean; links?: ParasAILink[] };
          if (payload.text || payload.links) setConversations((previous) => previous.map((item) => item.id === conversation.id ? { ...item, messages: item.messages.map((message) => {
            if (message.id !== placeholder.id) return message;
            const links = payload.links ?? message.links;
            return { ...message, text: message.text + (payload.text ?? ""), ...(links ? { links } : {}) };
          }) } : item));
        }
      }
    } catch (cause) { if (!controller.signal.aborted) setError(cause instanceof Error ? cause.message : "Paras AI couldn't answer just now. Please try again."); }
    finally { setBusy(false); abortRef.current = null; inputRef.current?.focus(); }
  }

  function stop() { abortRef.current?.abort(); abortRef.current = null; setBusy(false); }
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); void sendMessage(); }
  function keyDown(event: KeyboardEvent<HTMLTextAreaElement>) { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); void sendMessage(); } }

  return <div className="paras-ai-root">
    {open && <section id="paras-ai-panel" className="paras-ai-panel" role="dialog" aria-label="Chat with Paras AI" aria-modal="false">
      <header className="paras-ai-header"><div className="paras-ai-brand"><span className="paras-ai-mark"><Bot aria-hidden="true" /></span><span><strong>ParasAI</strong><small>GENERAL + PORTFOLIO AI</small></span></div><div className="paras-ai-header-actions">
        <button className="paras-ai-icon-button" type="button" onClick={newConversation} aria-label="New conversation" title="New conversation" disabled={busy}><Plus /></button>
        <button className="paras-ai-icon-button" type="button" onClick={() => setHistoryOpen((value) => !value)} aria-label="Conversation history" title="Conversation history"><RotateCcw /></button>
        <button className="paras-ai-icon-button" type="button" onClick={() => setOpen(false)} aria-label="Close chat" title="Close chat"><X /></button>
      </div></header>
      {historyOpen && <div className="paras-ai-history">{conversations.length ? conversations.map((item) => <button type="button" key={item.id} onClick={() => { setActiveId(item.id); setHistoryOpen(false); }}>{item.title}</button>) : <span>No saved conversations yet.</span>}</div>}
      <div className="paras-ai-conversation" ref={conversationRef} role="log" aria-live="polite">
        {!messages.length && <div className="paras-ai-welcome"><span className="paras-ai-eyebrow">GENERAL KNOWLEDGE · CODE · PORTFOLIO</span><h2>What can I help with?</h2><p>Ask anything, work through a problem, or explore Paras’s portfolio.</p><span className="paras-ai-suggestions-label">TRY ASKING</span><div className="paras-ai-suggestions">{SUGGESTIONS.map((suggestion) => <button key={suggestion} type="button" onClick={() => void sendMessage(suggestion)}>{suggestion}<ArrowUpRight /></button>)}</div></div>}
        {messages.map((message, index) => <article className={`paras-ai-message paras-ai-message-${message.role}`} key={message.id}><span className="paras-ai-message-label">{message.role === "assistant" ? "PARASAI" : "YOU"}</span>{message.role === "assistant" ? (message.text ? <FormattedAnswer text={message.text} /> : busy ? <span className="paras-ai-typing"><LoaderCircle className="paras-ai-spin" /> Thinking…</span> : null) : <p>{message.text}</p>}{message.links?.length ? <div className="paras-ai-links">{message.links.map((link) => <a href={link.href} key={link.href}>{link.label}<ArrowUpRight /></a>)}</div> : null}{message.role === "assistant" && message.text && !busy && index === messages.length - 1 && <div className="paras-ai-message-actions"><button type="button" title="Copy response" onClick={() => void navigator.clipboard.writeText(message.text)}><Copy /> Copy</button><button type="button" title="Regenerate response" onClick={() => void sendMessage("", true)}><RotateCcw /> Regenerate</button></div>}</article>)}
        {error && <p className="paras-ai-error" role="alert">{error}</p>}
      </div>
      <form className="paras-ai-form" onSubmit={submit}><label className="sr-only" htmlFor="paras-ai-question">Message ParasAI</label>
        {files.length > 0 && <div className="paras-ai-attachments">{files.map((file) => <button type="button" key={`${file.name}-${file.size}`} onClick={() => setFiles((items) => items.filter((item) => item !== file))}>{file.name} <X /></button>)}</div>}
        <textarea id="paras-ai-question" ref={inputRef} value={question} onChange={(event) => setQuestion(event.target.value.slice(0, 4000))} onKeyDown={keyDown} placeholder="Ask anything…" rows={1} maxLength={4000} />
        <input ref={fileRef} type="file" multiple accept=".txt,.md,.csv,.json,.py,.sql,.js,.jsx,.ts,.tsx,.html,.css,.yaml,.yml,.log" hidden onChange={(event) => { const incoming = Array.from(event.target.files ?? []).filter((file) => file.size <= 200_000).slice(0, 4); setFiles((previous) => [...previous, ...incoming].slice(0, 4)); event.currentTarget.value = ""; }} />
        <button type="button" className="paras-ai-upload" aria-label="Attach text or code files" title="Attach text or code files (max 200 KB each)" onClick={() => fileRef.current?.click()} disabled={busy}><FileUp /></button>
        <button type={busy ? "button" : "submit"} aria-label={busy ? "Stop generating" : "Send message"} disabled={!busy && !question.trim() && !files.length} onClick={busy ? stop : undefined}>{busy ? <Square /> : <Send />}</button>
        <small>Enter to send · Shift + Enter for a new line · Text/code files up to 200 KB</small>
      </form>
    </section>}
    <button type="button" className={`paras-ai-launcher${open ? " is-open" : ""}`} onClick={() => setOpen((previous) => !previous)} aria-expanded={open} aria-controls="paras-ai-panel" aria-label={open ? "Close ParasAI chat" : "Ask ParasAI"}><span className="paras-ai-launcher-icon">{open ? <X /> : <MessageCircle />}</span><span>{open ? "Close" : "Ask ParasAI"}</span>{!open && <ArrowUpRight className="paras-ai-launcher-arrow" />}</button>
  </div>;
}
