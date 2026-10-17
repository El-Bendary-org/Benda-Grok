import { MessageCircle, Send, X } from "lucide-react";
import { useState } from "react";
import { L, useBendary } from "@/lib/store";

export function ChatWidget() {
  const lang = useBendary((s) => s.lang);
  const visitor = useBendary((s) => s.visitor);
  const setVisitor = useBendary((s) => s.setVisitor);
  const thread = useBendary((s) => s.conversations.find((c) => c.id === "c-web-visitor"));
  const ensureWebThread = useBendary((s) => s.ensureWebThread);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  function send() {
    const body = text.trim();
    if (!body) return;
    ensureWebThread(visitor.trim() || L(lang, "زائر الموقع", "Website visitor"), body);
    setText("");
  }

  return (
    <div className="fixed bottom-4 end-4 z-50 flex flex-col items-end gap-2">
      {open && (
        <div className="flex h-[28rem] w-[min(100vw-2rem,22rem)] flex-col overflow-hidden rounded-card border border-line bg-surface shadow-xl">
          <div className="flex items-center justify-between bg-ink px-4 py-3 text-paper">
            <div>
              <p className="font-display text-sm font-bold">MoSTaa-ChaT</p>
              <p className="text-xs text-sand">{L(lang, "شات صيدليات البنداري", "El-Bendary live desk")}</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label={L(lang, "إغلاق", "Close")}>
              <X className="size-4" />
            </button>
          </div>
          <div className="flex-1 space-y-2 overflow-y-auto bg-paper p-3">
            <p className="rounded-xl bg-sand px-3 py-2 text-xs text-muted">
              {L(
                lang,
                "اكتب طلبك. يظهر فوراً في مكتب MoSTaa-ChaT مع واتساب والاتصال.",
                "Write your request. It lands instantly on the MoSTaa-ChaT desk with WhatsApp and voice.",
              )}
            </p>
            {thread?.messages.map((m) => (
              <div
                key={m.id}
                className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${m.direction === "in" ? "bg-surface text-ink" : "ms-auto bg-red text-paper"}`}
              >
                {m.text}
              </div>
            ))}
          </div>
          <div className="space-y-2 border-t border-line p-3">
            <input
              value={visitor}
              onChange={(e) => setVisitor(e.target.value)}
              placeholder={L(lang, "اسمك", "Your name")}
              className="w-full rounded-xl border border-line bg-paper px-3 py-2 text-sm"
            />
            <div className="flex gap-2">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") send();
                }}
                placeholder={L(lang, "رسالتك للصيدلي", "Message the pharmacist")}
                className="min-w-0 flex-1 rounded-xl border border-line bg-paper px-3 py-2 text-sm"
              />
              <button type="button" onClick={send} className="grid size-10 place-items-center rounded-xl bg-red text-paper" aria-label={L(lang, "إرسال", "Send")}>
                <Send className="size-4" />
              </button>
            </div>
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-full bg-red px-4 py-3 text-sm font-semibold text-paper shadow-lg"
      >
        <MessageCircle className="size-4" />
        {L(lang, "كلّم البنداري", "Talk to Bendary")}
      </button>
    </div>
  );
}
