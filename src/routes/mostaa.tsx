import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/shell";
import type { ChannelType } from "@/data/desk";
import { L, useBendary } from "@/lib/store";

export const Route = createFileRoute("/mostaa")({
  head: () => ({
    meta: [{ title: "MoSTaa-ChaT | El-Bendary" }],
  }),
  component: MostaaPage,
});

const typeLabel: Record<ChannelType, [string, string]> = {
  whatsapp: ["واتساب", "WhatsApp"],
  messenger: ["ماسنجر", "Messenger"],
  instagram: ["إنستجرام", "Instagram"],
  web: ["الموقع", "Web"],
  voice: ["صوت", "Voice"],
  sms: ["رسائل", "SMS"],
};

function MostaaPage() {
  const lang = useBendary((s) => s.lang);
  const channels = useBendary((s) => s.channels);
  const conversations = useBendary((s) => s.conversations);
  const tenders = useBendary((s) => s.tenders);
  const toggle = useBendary((s) => s.toggleChannel);
  const reply = useBendary((s) => s.reply);
  const setAssignee = useBendary((s) => s.setAssignee);
  const setStatus = useBendary((s) => s.setConvoStatus);
  const markTender = useBendary((s) => s.markTender);
  const [tab, setTab] = useState<"inbox" | "channels" | "payments">("inbox");
  const [filter, setFilter] = useState<string>("all");
  const [active, setActive] = useState(conversations[0]?.id ?? "");
  const [draft, setDraft] = useState("");

  const visible = conversations.filter((c) => filter === "all" || c.channelId === filter);
  const current = conversations.find((c) => c.id === active) ?? visible[0];
  const channel = channels.find((c) => c.id === current?.channelId);

  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-red">MOSTAA-CHAT · BENDARY WORKSPACE</p>
            <h1 className="mt-1 font-display text-4xl font-extrabold">{L(lang, "مكتب القنوات", "Omnichannel desk")}</h1>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              {L(
                lang,
                "مساحة صيدليات البنداري داخل MoSTaa-ChaT. شات الموقع والطلبات والروشتات تصل هنا. ربط واتساب للأعمال وماسنجر وإنستجرام والصوت يتم بمفاتيح ميتا وTwilio عند الإطلاق.",
                "El-Bendary’s workspace inside MoSTaa-ChaT. Website chat, orders, and prescriptions arrive here. WhatsApp Business, Messenger, Instagram, and voice attach with Meta and Twilio keys at launch.",
              )}
            </p>
          </div>
          <div className="flex gap-2">
            {(["inbox", "channels", "payments"] as const).map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => setTab(id)}
                className={`rounded-full px-3 py-1.5 text-sm font-semibold ${tab === id ? "bg-ink text-paper" : "bg-sand"}`}
              >
                {L(lang, { inbox: "الوارد", channels: "القنوات", payments: "المدفوعات" }[id], { inbox: "Inbox", channels: "Channels", payments: "Payments" }[id])}
              </button>
            ))}
          </div>
        </div>

        {tab === "channels" && (
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {channels.map((c) => (
              <li key={c.id} className="flex items-center justify-between gap-3 rounded-card border border-line bg-surface p-4">
                <div>
                  <p className="text-xs font-semibold text-red">{L(lang, typeLabel[c.type][0], typeLabel[c.type][1])}</p>
                  <p className="font-semibold">{lang === "ar" ? c.nameAr : c.nameEn}</p>
                  <p className="text-sm text-muted">{c.handle}</p>
                  <p className="text-xs text-muted">{c.status === "live" ? L(lang, "متصل بالمعاينة", "Connected in preview") : L(lang, "بانتظار مفاتيح الإطلاق", "Waiting on launch keys")}</p>
                </div>
                <button type="button" onClick={() => toggle(c.id)} className={`rounded-full px-3 py-1.5 text-xs font-semibold ${c.enabled ? "bg-leaf text-paper" : "bg-sand"}`}>
                  {c.enabled ? L(lang, "يعمل", "On") : L(lang, "متوقف", "Off")}
                </button>
              </li>
            ))}
          </ul>
        )}

        {tab === "payments" && (
          <ul className="mt-6 space-y-2">
            {tenders.map((tender) => (
              <li key={tender.id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-surface px-4 py-3">
                <div>
                  <p className="font-semibold">{tender.method} · {tender.ref}</p>
                  <p className="text-sm text-muted">{lang === "ar" ? tender.noteAr : tender.noteEn}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="tabular-nums font-semibold">{tender.amount} {L(lang, "ج.م", "EGP")}</span>
                  <button
                    type="button"
                    onClick={() => markTender(tender.id, tender.status === "paid" ? "pending" : "paid")}
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${tender.status === "paid" ? "bg-leaf-soft text-leaf" : "bg-red-soft text-red-deep"}`}
                  >
                    {tender.status === "paid" ? L(lang, "مدفوع", "Paid") : L(lang, "بانتظار التأكيد", "Pending")}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        {tab === "inbox" && (
          <div className="mt-6 grid gap-3 md:grid-cols-[16rem_1fr]">
            <div className="rounded-card border border-line bg-surface">
              <div className="flex gap-1 overflow-x-auto border-b border-line p-2">
                <Filter id="all" current={filter} set={setFilter} label={L(lang, "الكل", "All")} />
                {channels.filter((c) => c.enabled).map((c) => (
                  <Filter key={c.id} id={c.id} current={filter} set={setFilter} label={L(lang, typeLabel[c.type][0], typeLabel[c.type][1])} />
                ))}
              </div>
              <ul className="max-h-[32rem] overflow-y-auto">
                {visible.map((c) => (
                  <li key={c.id}>
                    <button
                      type="button"
                      onClick={() => setActive(c.id)}
                      className={`block w-full px-3 py-3 text-start ${current?.id === c.id ? "bg-sand" : ""}`}
                    >
                      <p className="text-sm font-semibold">{c.customer}</p>
                      <p className="truncate text-xs text-muted">{lang === "ar" ? c.topicAr : c.topicEn}</p>
                    </button>
                  </li>
                ))}
                {visible.length === 0 && <li className="p-4 text-sm text-muted">{L(lang, "لا رسائل.", "No threads.")}</li>}
              </ul>
            </div>
            {current && (
              <section className="flex min-h-[32rem] flex-col rounded-card border border-line bg-surface">
                <header className="flex flex-wrap items-center justify-between gap-2 border-b border-line px-4 py-3">
                  <div>
                    <p className="font-semibold">{current.customer}</p>
                    <p className="text-xs text-muted">
                      {channel ? (lang === "ar" ? channel.nameAr : channel.nameEn) : ""} · {lang === "ar" ? current.topicAr : current.topicEn}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button type="button" onClick={() => setAssignee(current.id, "مي")} className="rounded-full bg-sand px-3 py-1 text-xs font-semibold">
                      {current.assignee ? current.assignee : L(lang, "إسناد إلى مي", "Assign Mai")}
                    </button>
                    <button
                      type="button"
                      onClick={() => setStatus(current.id, current.status === "closed" ? "open" : "closed")}
                      className="rounded-full bg-sand px-3 py-1 text-xs font-semibold"
                    >
                      {current.status === "closed" ? L(lang, "إعادة فتح", "Reopen") : L(lang, "إغلاق", "Close")}
                    </button>
                  </div>
                </header>
                <div className="flex-1 space-y-2 overflow-y-auto bg-paper p-4">
                  {current.messages.map((m) => (
                    <div key={m.id} className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${m.direction === "in" ? "bg-surface" : "ms-auto bg-ink text-paper"}`}>
                      <p>{m.text}</p>
                      <p className={`mt-1 text-xs ${m.direction === "in" ? "text-muted" : "text-sand"}`}>{m.sender}</p>
                    </div>
                  ))}
                </div>
                <form
                  className="flex gap-2 border-t border-line p-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!draft.trim()) return;
                    reply(current.id, draft.trim());
                    setDraft("");
                  }}
                >
                  <input
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    placeholder={L(lang, "رد الصيدلي", "Pharmacist reply")}
                    className="min-w-0 flex-1 rounded-full border border-line bg-paper px-4 py-2.5 text-sm"
                  />
                  <button type="submit" className="rounded-full bg-red px-4 py-2 text-sm font-semibold text-paper">
                    {L(lang, "إرسال", "Send")}
                  </button>
                </form>
              </section>
            )}
          </div>
        )}
      </div>
    </Shell>
  );
}

function Filter({ id, current, set, label }: { id: string; current: string; set: (id: string) => void; label: string }) {
  return (
    <button type="button" onClick={() => set(id)} className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${current === id ? "bg-ink text-paper" : "text-muted"}`}>
      {label}
    </button>
  );
}
