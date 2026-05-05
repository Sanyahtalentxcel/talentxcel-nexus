import { useState } from "react";
import { MessageSquare, X, Send, Sparkles, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

type Msg = { role: "user" | "assistant"; content: string };

const suggestions = [
  "What does TalentXcel do?",
  "How does AI hiring work?",
  "Tell me about Chatr",
  "How can I hire developers?",
];

const canned: Record<string, string> = {
  "what does talentxcel do":
    "TalentXcel is an AI-first talent infrastructure company. We build software, AI and blockchain systems, and run a global hiring & career ecosystem.",
  "how does ai hiring work":
    "Our engine matches candidates to roles using skills, context and intent — not just keywords. Reverse hiring lets companies discover talent automatically.",
  "tell me about chatr":
    "Chatr is our AI communication layer — voice AI, real-time chat and assistants. It powers conversational experiences across the TalentXcel ecosystem.",
  "how can i hire developers":
    "You can hire AI-vetted engineers on-demand. Head to the Build With Us section or contact us to scope your team.",
};

const reply = (q: string) => {
  const k = q.toLowerCase().trim();
  for (const key of Object.keys(canned)) if (k.includes(key)) return canned[key];
  return "Great question. Our team can walk you through it — try the Book Demo button, or visit chatr.chat for the full AI assistant experience.";
};

const ChatrAssistant = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content: "Hi 👋 I'm the Chatr assistant. Ask me anything about TalentXcel, hiring, or our platform.",
    },
  ]);

  const send = (text: string) => {
    const t = text.trim();
    if (!t) return;
    setMessages((m) => [...m, { role: "user", content: t }, { role: "assistant", content: reply(t) }]);
    setInput("");
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open Chatr assistant"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-chatr text-chatr-foreground hover:bg-chatr-hover shadow-large rounded-full pl-4 pr-5 py-3 transition-all hover:scale-105 active:scale-95 animate-fade-in"
        >
          <MessageSquare className="h-5 w-5" />
          <span className="font-semibold text-sm">Ask Chatr</span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
        </button>
      )}

      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[min(380px,calc(100vw-2rem))] h-[min(560px,calc(100vh-3rem))] bg-card border border-border rounded-2xl shadow-large flex flex-col overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-chatr to-chatr-hover text-chatr-foreground">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-white/20 rounded-lg">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <div className="font-semibold text-sm">Chatr Assistant</div>
                <div className="text-[11px] opacity-80">Powered by TalentXcel AI</div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-muted/30">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-card border border-border rounded-bl-sm"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {messages.length === 1 && (
              <div className="pt-2 space-y-2">
                <div className="text-[11px] uppercase tracking-wide text-muted-foreground font-medium">
                  Try asking
                </div>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="text-xs px-3 py-1.5 bg-card border border-border rounded-full hover:border-chatr hover:text-chatr transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="p-3 border-t border-border bg-card flex items-center gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything…"
              className="flex-1 bg-muted/50 border border-border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-chatr"
            />
            <button
              type="submit"
              aria-label="Send"
              className="p-2 bg-chatr text-chatr-foreground rounded-xl hover:bg-chatr-hover transition-colors disabled:opacity-50"
              disabled={!input.trim()}
            >
              <Send className="h-4 w-4" />
            </button>
          </form>

          <a
            href="https://chatr.chat"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-[11px] text-center text-muted-foreground hover:text-chatr border-t border-border bg-card flex items-center justify-center gap-1"
          >
            Open full Chatr experience <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      )}
    </>
  );
};

export default ChatrAssistant;