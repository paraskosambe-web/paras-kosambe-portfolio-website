import { ArrowUpRight, Bot, LoaderCircle, MessageCircle, RotateCcw, Send, X } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { askParasAI } from "@/services/paras-ai.functions";
import type { ParasAILink } from "@/services/paras-ai";

type ChatMessage = {
  id: number;
  role: "assistant" | "user";
  text: string;
  links?: ParasAILink[];
};

const suggestedQuestions = [
  "Who is Paras?",
  "Show me his Data Science projects",
  "What are his AI/ML skills?",
  "Tell me about his certifications",
  "What projects has he built?",
];

export function ParasAI() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [question, setQuestion] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const nextId = useRef(1);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const conversationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const conversation = conversationRef.current;
    if (conversation) conversation.scrollTop = conversation.scrollHeight;
  }, [messages, busy, error]);

  async function sendMessage(value = question) {
    const text = value.trim();
    if (!text || busy) return;

    setQuestion("");
    setError("");
    setMessages((previous) => [...previous, { id: nextId.current++, role: "user", text }]);
    setBusy(true);

    try {
      const reply = await askParasAI({ data: { question: text } });
      setMessages((previous) => [
        ...previous,
        {
          id: nextId.current++,
          role: "assistant",
          text: reply.answer,
          links: reply.links,
        },
      ]);
    } catch (caught) {
      const message =
        caught instanceof Error
          ? caught.message
          : "Paras AI couldn’t answer just now. Please try again.";
      setError(message);
    } finally {
      setBusy(false);
      inputRef.current?.focus();
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void sendMessage();
    }
  }

  return (
    <div className="paras-ai-root">
      {open && (
        <section
          id="paras-ai-panel"
          className="paras-ai-panel"
          role="dialog"
          aria-label="Chat with Paras AI"
          aria-modal="false"
        >
          <header className="paras-ai-header">
            <div className="paras-ai-brand">
              <span className="paras-ai-mark">
                <Bot aria-hidden="true" />
              </span>
              <span>
                <strong>Paras AI</strong>
                <small>PORTFOLIO ASSISTANT</small>
              </span>
            </div>
            <div className="paras-ai-header-actions">
              <button
                className="paras-ai-icon-button"
                type="button"
                onClick={() => {
                  setMessages([]);
                  setError("");
                }}
                aria-label="Clear chat"
                title="Clear chat"
                disabled={busy}
              >
                <RotateCcw aria-hidden="true" />
              </button>
              <button
                className="paras-ai-icon-button"
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                title="Close chat"
              >
                <X aria-hidden="true" />
              </button>
            </div>
          </header>

          <div
            className="paras-ai-conversation"
            ref={conversationRef}
            role="log"
            aria-live="polite"
            aria-relevant="additions text"
          >
            {messages.length === 0 && (
              <div className="paras-ai-welcome">
                <span className="paras-ai-eyebrow">ASK ABOUT THE PORTFOLIO</span>
                <h2>How can I help?</h2>
                <p>I can share details from Paras’s current portfolio.</p>
                <span className="paras-ai-suggestions-label">QUICK QUESTIONS</span>
                <div className="paras-ai-suggestions">
                  {suggestedQuestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => void sendMessage(suggestion)}
                      disabled={busy}
                    >
                      {suggestion}
                      <ArrowUpRight aria-hidden="true" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((message) => (
              <article
                className={`paras-ai-message paras-ai-message-${message.role}`}
                key={message.id}
              >
                <span className="paras-ai-message-label">
                  {message.role === "assistant" ? "PARAS AI" : "YOU"}
                </span>
                <p>{message.text}</p>
                {message.links && message.links.length > 0 && (
                  <div className="paras-ai-links">
                    {message.links.map((link) => (
                      <a href={link.href} key={`${link.href}-${link.label}`}>
                        {link.label}
                        <ArrowUpRight aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}

            {busy && (
              <div className="paras-ai-typing" role="status">
                <LoaderCircle aria-hidden="true" />
                <span>Looking through the portfolio…</span>
              </div>
            )}
            {error && (
              <p className="paras-ai-error" role="alert">
                {error}
              </p>
            )}
          </div>

          <form className="paras-ai-form" onSubmit={submit}>
            <label className="sr-only" htmlFor="paras-ai-question">
              Ask Paras AI a question
            </label>
            <textarea
              id="paras-ai-question"
              ref={inputRef}
              value={question}
              onChange={(event) => setQuestion(event.target.value.slice(0, 600))}
              onKeyDown={handleKeyDown}
              placeholder="Ask about projects, skills, experience…"
              rows={1}
              maxLength={600}
              disabled={busy}
            />
            <button type="submit" aria-label="Send message" disabled={!question.trim() || busy}>
              {busy ? (
                <LoaderCircle aria-hidden="true" className="paras-ai-spin" />
              ) : (
                <Send aria-hidden="true" />
              )}
            </button>
            <small>Enter to send · Shift + Enter for a new line</small>
          </form>
        </section>
      )}

      <button
        type="button"
        className={`paras-ai-launcher${open ? " is-open" : ""}`}
        onClick={() => setOpen((previous) => !previous)}
        aria-expanded={open}
        aria-controls="paras-ai-panel"
        aria-label={open ? "Close Paras AI chat" : "Ask Paras AI"}
      >
        <span className="paras-ai-launcher-icon">
          {open ? <X aria-hidden="true" /> : <MessageCircle aria-hidden="true" />}
        </span>
        <span>{open ? "Close" : "Ask Paras AI"}</span>
        {!open && <ArrowUpRight className="paras-ai-launcher-arrow" aria-hidden="true" />}
      </button>
    </div>
  );
}
