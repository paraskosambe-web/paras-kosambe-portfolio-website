import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { H as ArrowUpRight, P as Copy, b as LoaderCircle, d as RotateCcw, f as Plus, k as FileUp, l as Send, m as MessageCircle, o as Square, t as X, z as Bot } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ParasAI-CO2ixcmR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STORAGE_KEY = "paras-ai-conversations-v1";
var SUGGESTIONS = [
	"Explain a technical concept simply",
	"Help me debug Python code",
	"Show me Paras’s data science projects",
	"Draft a professional email"
];
function inline(text) {
	return text.split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
		if (part.startsWith("**") && part.endsWith("**")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: part.slice(2, -2) }, i);
		if (part.startsWith("`") && part.endsWith("`")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: part.slice(1, -1) }, i);
		const link = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/);
		if (link) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: link[2],
			target: "_blank",
			rel: "noreferrer",
			children: link[1]
		}, i);
		return part;
	});
}
function FormattedAnswer({ text }) {
	const lines = text.replace(/\r/g, "").split("\n");
	const blocks = [];
	for (let i = 0; i < lines.length; i++) {
		const line = lines[i] ?? "";
		const fence = line.match(/^```(.*)$/);
		if (fence) {
			const code = [];
			while (++i < lines.length && !(lines[i] ?? "").startsWith("```")) code.push(lines[i] ?? "");
			blocks.push({
				type: "code",
				lines: code,
				lang: (fence[1] ?? "").trim()
			});
			continue;
		}
		if (!line.trim()) continue;
		const heading = line.match(/^#{1,3}\s+(.+)$/);
		const bullet = line.match(/^\s*[-*+]\s+(.+)$/);
		const numbered = line.match(/^\s*\d+[.)]\s+(.+)$/);
		if (heading) blocks.push({
			type: "heading",
			lines: [heading[1] ?? ""]
		});
		else if (bullet || numbered) {
			const ordered = Boolean(numbered), previous = blocks.at(-1);
			const listItem = (bullet ?? numbered)?.[1] ?? "";
			if (previous?.type === "list" && previous.ordered === ordered) previous.lines.push(listItem);
			else blocks.push({
				type: "list",
				ordered,
				lines: [listItem]
			});
		} else {
			const previous = blocks.at(-1);
			if (previous?.type === "paragraph") previous.lines.push(line);
			else blocks.push({
				type: "paragraph",
				lines: [line]
			});
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "paras-ai-answer",
		children: blocks.map((block, i) => {
			if (block.type === "heading") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: inline(block.lines[0] ?? "") }, i);
			if (block.type === "code") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("pre", {
				className: "paras-ai-code",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: block.lang || "CODE" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => void navigator.clipboard.writeText(block.lines.join("\n")),
					"aria-label": "Copy code",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {})
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: block.lines.join("\n") })]
			}, i);
			if (block.type === "list") {
				const List = block.ordered ? "ol" : "ul";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { children: block.lines.map((item, n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: inline(item) }, n)) }, i);
			}
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: inline(block.lines.join(" ")) }, i);
		})
	});
}
function readConversations() {
	try {
		const value = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
		return Array.isArray(value) ? value : [];
	} catch {
		return [];
	}
}
function ParasAI() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [conversations, setConversations] = (0, import_react.useState)([]);
	const [activeId, setActiveId] = (0, import_react.useState)("");
	const [question, setQuestion] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [files, setFiles] = (0, import_react.useState)([]);
	const [historyOpen, setHistoryOpen] = (0, import_react.useState)(false);
	const abortRef = (0, import_react.useRef)(null);
	const inputRef = (0, import_react.useRef)(null);
	const fileRef = (0, import_react.useRef)(null);
	const conversationRef = (0, import_react.useRef)(null);
	const active = conversations.find((item) => item.id === activeId);
	const messages = active?.messages ?? [];
	(0, import_react.useEffect)(() => {
		const saved = readConversations();
		setConversations(saved);
		if (saved[0]) setActiveId(saved[0].id);
	}, []);
	(0, import_react.useEffect)(() => {
		if (conversations.length) try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(conversations.slice(0, 12)));
		} catch {}
	}, [conversations]);
	(0, import_react.useEffect)(() => {
		if (open) inputRef.current?.focus();
	}, [open]);
	(0, import_react.useEffect)(() => {
		if (conversationRef.current) conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
	}, [
		messages,
		busy,
		error
	]);
	function newConversation() {
		if (busy) return;
		const item = {
			id: crypto.randomUUID(),
			title: "New conversation",
			updated: Date.now(),
			messages: []
		};
		setConversations((previous) => [item, ...previous]);
		setActiveId(item.id);
		setError("");
		setFiles([]);
		setHistoryOpen(false);
	}
	async function sendMessage(value = question, retry = false) {
		const text = value.trim();
		if (!text && !retry || busy) return;
		const conversation = active ?? {
			id: crypto.randomUUID(),
			title: "New conversation",
			updated: Date.now(),
			messages: []
		};
		let remainingAttachmentChars = 7e3;
		const attachments = files.length ? await Promise.all(files.map(async (file) => {
			const content = (await file.text()).slice(0, remainingAttachmentChars);
			remainingAttachmentChars = Math.max(0, remainingAttachmentChars - content.length);
			return `--- ${file.name} ---\n${content}`;
		})) : [];
		const userText = retry ? "" : text + (attachments.length ? `\n\nAttached files:\n${attachments.join("\n\n")}` : "");
		const nextMessages = retry ? conversation.messages.slice(0, -1) : [...conversation.messages, {
			id: crypto.randomUUID(),
			role: "user",
			text: userText
		}];
		const visibleMessages = [...nextMessages];
		if (!retry) setQuestion("");
		setFiles([]);
		setError("");
		setActiveId(conversation.id);
		setConversations((previous) => [conversation, ...previous.filter((item) => item.id !== conversation.id)]);
		const placeholder = {
			id: crypto.randomUUID(),
			role: "assistant",
			text: ""
		};
		setConversations((previous) => previous.map((item) => item.id === conversation.id ? {
			...item,
			title: item.messages.length ? item.title : retry ? item.title : text.slice(0, 48),
			updated: Date.now(),
			messages: [...visibleMessages, placeholder]
		} : item));
		setBusy(true);
		const controller = new AbortController();
		abortRef.current = controller;
		try {
			const response = await fetch("/api/paras-ai", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({ messages: nextMessages.map(({ role, text: content }) => ({
					role,
					content
				})) }),
				signal: controller.signal
			});
			if (!response.ok) throw new Error(await response.text());
			if (response.headers.get("content-type")?.includes("application/json")) {
				const result = await response.json();
				setConversations((previous) => previous.map((item) => item.id === conversation.id ? {
					...item,
					messages: item.messages.map((message) => message.id === placeholder.id ? {
						...message,
						text: result.answer ?? "",
						...result.links ? { links: result.links } : {}
					} : message)
				} : item));
				return;
			}
			if (!response.body) throw new Error("Streaming is unavailable in this browser.");
			const reader = response.body.getReader(), decoder = new TextDecoder();
			let buffer = "";
			while (true) {
				const { value, done } = await reader.read();
				if (done) break;
				buffer += decoder.decode(value, { stream: true });
				const events = buffer.split("\n\n");
				buffer = events.pop() ?? "";
				for (const event of events) {
					const line = event.split("\n").find((part) => part.startsWith("data: "));
					if (!line) continue;
					const payload = JSON.parse(line.slice(6));
					if (payload.text || payload.links) setConversations((previous) => previous.map((item) => item.id === conversation.id ? {
						...item,
						messages: item.messages.map((message) => {
							if (message.id !== placeholder.id) return message;
							const links = payload.links ?? message.links;
							return {
								...message,
								text: message.text + (payload.text ?? ""),
								...links ? { links } : {}
							};
						})
					} : item));
				}
			}
		} catch (cause) {
			if (!controller.signal.aborted) setError(cause instanceof Error ? cause.message : "Paras AI couldn't answer just now. Please try again.");
		} finally {
			setBusy(false);
			abortRef.current = null;
			inputRef.current?.focus();
		}
	}
	function stop() {
		abortRef.current?.abort();
		abortRef.current = null;
		setBusy(false);
	}
	function submit(event) {
		event.preventDefault();
		sendMessage();
	}
	function keyDown(event) {
		if (event.key === "Enter" && !event.shiftKey) {
			event.preventDefault();
			sendMessage();
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "paras-ai-root",
		children: [open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "paras-ai-panel",
			className: "paras-ai-panel",
			role: "dialog",
			"aria-label": "Chat with Paras AI",
			"aria-modal": "false",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "paras-ai-header",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "paras-ai-brand",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "paras-ai-mark",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { "aria-hidden": "true" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "ParasAI" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "GENERAL + PORTFOLIO AI" })] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "paras-ai-header-actions",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "paras-ai-icon-button",
								type: "button",
								onClick: newConversation,
								"aria-label": "New conversation",
								title: "New conversation",
								disabled: busy,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "paras-ai-icon-button",
								type: "button",
								onClick: () => setHistoryOpen((value) => !value),
								"aria-label": "Conversation history",
								title: "Conversation history",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "paras-ai-icon-button",
								type: "button",
								onClick: () => setOpen(false),
								"aria-label": "Close chat",
								title: "Close chat",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
							})
						]
					})]
				}),
				historyOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "paras-ai-history",
					children: conversations.length ? conversations.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setActiveId(item.id);
							setHistoryOpen(false);
						},
						children: item.title
					}, item.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "No saved conversations yet." })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "paras-ai-conversation",
					ref: conversationRef,
					role: "log",
					"aria-live": "polite",
					children: [
						!messages.length && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "paras-ai-welcome",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "paras-ai-eyebrow",
									children: "GENERAL KNOWLEDGE · CODE · PORTFOLIO"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "What can I help with?" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Ask anything, work through a problem, or explore Paras’s portfolio." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "paras-ai-suggestions-label",
									children: "TRY ASKING"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "paras-ai-suggestions",
									children: SUGGESTIONS.map((suggestion) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => void sendMessage(suggestion),
										children: [suggestion, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
									}, suggestion))
								})
							]
						}),
						messages.map((message, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: `paras-ai-message paras-ai-message-${message.role}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "paras-ai-message-label",
									children: message.role === "assistant" ? "PARASAI" : "YOU"
								}),
								message.role === "assistant" ? message.text ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormattedAnswer, { text: message.text }) : busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "paras-ai-typing",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "paras-ai-spin" }), " Thinking…"]
								}) : null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: message.text }),
								message.links?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "paras-ai-links",
									children: message.links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: link.href,
										children: [link.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
									}, link.href))
								}) : null,
								message.role === "assistant" && message.text && !busy && index === messages.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "paras-ai-message-actions",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										title: "Copy response",
										onClick: () => void navigator.clipboard.writeText(message.text),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {}), " Copy"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										title: "Regenerate response",
										onClick: () => void sendMessage("", true),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {}), " Regenerate"]
									})]
								})
							]
						}, message.id)),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "paras-ai-error",
							role: "alert",
							children: error
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "paras-ai-form",
					onSubmit: submit,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "sr-only",
							htmlFor: "paras-ai-question",
							children: "Message ParasAI"
						}),
						files.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "paras-ai-attachments",
							children: files.map((file) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setFiles((items) => items.filter((item) => item !== file)),
								children: [
									file.name,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
								]
							}, `${file.name}-${file.size}`))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "paras-ai-question",
							ref: inputRef,
							value: question,
							onChange: (event) => setQuestion(event.target.value.slice(0, 4e3)),
							onKeyDown: keyDown,
							placeholder: "Ask anything…",
							rows: 1,
							maxLength: 4e3
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							ref: fileRef,
							type: "file",
							multiple: true,
							accept: ".txt,.md,.csv,.json,.py,.sql,.js,.jsx,.ts,.tsx,.html,.css,.yaml,.yml,.log",
							hidden: true,
							onChange: (event) => {
								const incoming = Array.from(event.target.files ?? []).filter((file) => file.size <= 2e5).slice(0, 4);
								setFiles((previous) => [...previous, ...incoming].slice(0, 4));
								event.currentTarget.value = "";
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "paras-ai-upload",
							"aria-label": "Attach text or code files",
							title: "Attach text or code files (max 200 KB each)",
							onClick: () => fileRef.current?.click(),
							disabled: busy,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileUp, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: busy ? "button" : "submit",
							"aria-label": busy ? "Stop generating" : "Send message",
							disabled: !busy && !question.trim() && !files.length,
							onClick: busy ? stop : void 0,
							children: busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Enter to send · Shift + Enter for a new line · Text/code files up to 200 KB" })
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: `paras-ai-launcher${open ? " is-open" : ""}`,
			onClick: () => setOpen((previous) => !previous),
			"aria-expanded": open,
			"aria-controls": "paras-ai-panel",
			"aria-label": open ? "Close ParasAI chat" : "Ask ParasAI",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "paras-ai-launcher-icon",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: open ? "Close" : "Ask ParasAI" }),
				!open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "paras-ai-launcher-arrow" })
			]
		})]
	});
}
//#endregion
export { ParasAI };
