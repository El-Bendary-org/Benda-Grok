import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/shell";
import { askPharmacist } from "@/lib/assistant.functions";
import { L, useBendary } from "@/lib/store";

export const Route = createFileRoute("/assistant")({
  head: () => ({ meta: [{ title: "الصيدلي | El-Bendary" }] }),
  component: AssistantPage,
});

type Bubble = { role: "user" | "assistant"; content: string };

const prompts = {
  ar: ["عندي حموضة بعد الأكل، إيه المتاح من غير روشتة؟", "طفلي أنفه مسدود، هل النقط الملحية مناسبة؟", "عايز أرفع روشتة هيلسيك، أعمل إيه؟"],
  en: ["Heartburn after meals — what is on the shelf without a prescription?", "My child’s nose is blocked. Are saline drops reasonable?", "I need Healsec. How do I send the prescription?"],
};

function AssistantPage() {
  const lang = useBendary((s) => s.lang);
  const [messages, setMessages] = useState<Bubble[]>([]);
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function ask(content: string) {
    const next = [...messages, { role: "user" as const, content }];
    setMessages(next);
    setText("");
    setBusy(true);
    setError("");
    try {
      const res = await askPharmacist({ data: { lang, messages: next } });
      if (!res.ok) {
        setError(
          res.error === "unavailable"
            ? L(lang, "المساعد غير متاح في هذه البيئة. اتصل بالخط الساخن 01200400094.", "The assistant is not available in this environment. Call 01200400094.")
            : L(lang, "تعذر الرد الآن. حاول مرة واحدة بعد قليل.", "The desk could not answer. Try once more shortly."),
        );
        return;
      }
      setMessages([...next, { role: "assistant", content: res.text }]);
    } catch {
      setError(L(lang, "تعذر الاتصال بالمساعد.", "Could not reach the assistant."));
    } finally {
      setBusy(false);
    }
  }

  return (
    <Shell>
      <div className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-xs font-semibold tracking-wide text-red">{L(lang, "إرشاد لا تشخيص", "Guidance, not a diagnosis")}</p>
        <h1 className="mt-2 font-display text-4xl font-extrabold">{L(lang, "الصيدلي على المكتب", "Pharmacist on the desk")}</h1>
        <p className="mt-3 text-sm text-muted">
          {L(
            lang,
            "يسأل عن الأصناف المتاحة ويحوّل الروشتة والطوارئ للبشر. في ضيق التنفس أو ألم الصدر اتصل بـ ١٢٣.",
            "It can talk through shelf items and sends prescriptions and emergencies to people. For trouble breathing or chest pain, call 123.",
          )}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {prompts[lang].map((p) => (
            <button key={p} type="button" disabled={busy} onClick={() => void ask(p)} className="rounded-full bg-sand px-3 py-1.5 text-start text-xs font-medium">
              {p}
            </button>
          ))}
        </div>
        <div className="mt-6 space-y-3">
          {messages.map((m, i) => (
            <div key={i} className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm ${m.role === "user" ? "ms-auto bg-ink text-paper" : "bg-surface border border-line"}`}>
              {m.content}
            </div>
          ))}
          {busy && <p className="text-sm text-muted">{L(lang, "الصيدلي يراجع…", "The pharmacist is reading…")}</p>}
          {error && <p className="text-sm text-red-deep">{error}</p>}
        </div>
        <form
          className="mt-4 flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            if (text.trim() && !busy) void ask(text.trim());
          }}
        >
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={800}
            placeholder={L(lang, "سؤالك للصيدلي", "Your question")}
            className="min-w-0 flex-1 rounded-full border border-line bg-surface px-4 py-2.5"
          />
          <button type="submit" disabled={busy || !text.trim()} className="rounded-full bg-red px-4 py-2.5 text-sm font-semibold text-paper disabled:opacity-40">
            {L(lang, "إرسال", "Send")}
          </button>
        </form>
      </div>
    </Shell>
  );
}
