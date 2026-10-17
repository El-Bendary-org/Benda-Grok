import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Shell } from "@/components/shell";
import { money } from "@/data/catalog";
import { branchById, insurers, members } from "@/data/network";
import { L, useBendary } from "@/lib/store";

export const Route = createFileRoute("/insurance")({
  head: () => ({ meta: [{ title: "التأمين | El-Bendary" }] }),
  component: InsurancePage,
});

function InsurancePage() {
  const lang = useBendary((s) => s.lang);
  const memberId = useBendary((s) => s.memberId);
  const setMember = useBendary((s) => s.setMember);
  const [typed, setTyped] = useState(memberId ?? "");
  const [error, setError] = useState("");
  const member = members.find((m) => m.id === memberId);
  const branch = member ? branchById(member.branchId) : undefined;

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const id = typed.trim().toUpperCase();
    const hit = members.find((m) => m.id === id);
    if (!hit) {
      setError(L(lang, "رقم العضوية غير معروف في العينة.", "That member id is not in the sample book."));
      setMember(null);
      return;
    }
    setError("");
    setMember(hit.id);
  }

  return (
    <Shell>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold tracking-wide text-red">{L(lang, "فاتورة مباشرة", "Direct billing")}</p>
          <h1 className="mt-2 font-display text-4xl font-extrabold">{L(lang, "دخول عضو التأمين", "Insurance member sign-in")}</h1>
          <p className="mt-3 text-muted">
            {L(
              lang,
              "أكثر من ٢٥ شركة. العينة أدناه تفتح بطاقة التغطية المحفوظة على هذا الجهاز — ليست بوابة شركة التأمين نفسها.",
              "More than 25 companies. The sample ids below open a coverage card kept on this device — not the insurer’s own portal.",
            )}
          </p>
          <form onSubmit={onSubmit} className="mt-5 flex gap-2">
            <input
              value={typed}
              onChange={(e) => setTyped(e.target.value)}
              placeholder="BND-AXA-20481"
              className="min-w-0 flex-1 rounded-full border border-line bg-surface px-4 py-2.5"
            />
            <button type="submit" className="rounded-full bg-red px-4 py-2.5 text-sm font-semibold text-paper">
              {L(lang, "دخول", "Sign in")}
            </button>
          </form>
          {error && <p className="mt-2 text-sm text-red-deep">{error}</p>}
          <ul className="mt-4 space-y-1 text-xs text-muted">
            {members.map((m) => (
              <li key={m.id}>
                <button type="button" className="underline" onClick={() => setTyped(m.id)}>
                  {m.id}
                </button>{" "}
                — {lang === "ar" ? m.nameAr : m.nameEn}
              </li>
            ))}
          </ul>
          {member && (
            <article className="mt-6 rounded-card border border-line bg-surface p-5">
              <p className="text-xs font-semibold text-red">{member.insurer}</p>
              <h2 className="font-display text-2xl font-bold">{lang === "ar" ? member.nameAr : member.nameEn}</h2>
              <p className="text-sm text-muted">{lang === "ar" ? member.planAr : member.planEn}</p>
              <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <dt className="text-muted">{L(lang, "المشاركة", "Copay")}</dt>
                  <dd className="font-semibold">{member.copay}</dd>
                </div>
                <div>
                  <dt className="text-muted">{L(lang, "المتبقي", "Remaining")}</dt>
                  <dd className="font-semibold tabular-nums">{money(member.limit - member.used, lang)}</dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-muted">{L(lang, "فرع الفاتورة المعتاد", "Usual billing branch")}</dt>
                  <dd className="font-semibold">{branch ? (lang === "ar" ? branch.nameAr : branch.nameEn) : "—"}</dd>
                </div>
              </dl>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-sand">
                <div className="h-full bg-leaf" style={{ width: `${Math.min(100, (member.used / member.limit) * 100)}%` }} />
              </div>
              <button type="button" onClick={() => setMember(null)} className="mt-4 text-sm text-muted underline">
                {L(lang, "خروج", "Sign out")}
              </button>
            </article>
          )}
        </div>
        <div>
          <h2 className="font-display text-xl font-bold">{L(lang, "شركاء ظاهرون", "Named partners")}</h2>
          <ul className="mt-3 grid grid-cols-2 gap-2">
            {insurers.map((name) => (
              <li key={name} className="rounded-2xl border border-line bg-surface px-3 py-3 text-sm font-medium">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Shell>
  );
}
