import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Shell } from "@/components/shell";
import { findProduct } from "@/data/catalog";
import { batches, branchById, branches, daysUntil } from "@/data/network";
import { L, useBendary, type Role } from "@/lib/store";

export const Route = createFileRoute("/ops")({
  head: () => ({ meta: [{ title: "عمليات الفروع | El-Bendary" }] }),
  component: OpsPage,
});

const roles: { id: Role; ar: string; en: string }[] = [
  { id: "manager", ar: "مدير الفرع", en: "Branch manager" },
  { id: "pharmacist", ar: "صيدلي", en: "Pharmacist" },
  { id: "inventory", ar: "المخزون", en: "Inventory" },
  { id: "cashier", ar: "كاشير", en: "Cashier" },
  { id: "delivery", ar: "التوصيل", en: "Delivery" },
];

function OpsPage() {
  const lang = useBendary((s) => s.lang);
  const role = useBendary((s) => s.role);
  const setRole = useBendary((s) => s.setRole);
  const orders = useBendary((s) => s.orders);
  const rxs = useBendary((s) => s.rxs);
  const tenders = useBendary((s) => s.tenders);
  const conversations = useBendary((s) => s.conversations);
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  const near = batches
    .map((b) => ({ ...b, days: daysUntil(b.expiry) }))
    .sort((a, b) => a.days - b.days);

  const chart = branches.slice(0, 6).map((b) => ({
    name: lang === "ar" ? b.nameAr : b.nameEn,
    orders: orders.filter((o) => o.branchId === b.id).length + (b.main ? 4 : 1),
  }));

  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-4 py-8">
        <p className="text-xs font-semibold tracking-wide text-red">{L(lang, "عمليات الفروع", "Branch operations")}</p>
        <h1 className="mt-1 font-display text-4xl font-extrabold">{L(lang, "وردية اليوم", "Today’s shift")}</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          {L(
            lang,
            "لوحة داخلية للعينة. سجلات المرضى تبقى على هذا الجهاز. في التشغيل الحي تُحفظ مشفّرة ولا تُعرض إلا لدور الوردية.",
            "An internal sample board. Records stay on this device. In live service they are stored encrypted and shown only to the shift role.",
          )}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {roles.map((r) => (
            <button key={r.id} type="button" onClick={() => setRole(r.id)} className={`rounded-full px-3 py-1.5 text-sm font-semibold ${role === r.id ? "bg-ink text-paper" : "bg-sand"}`}>
              {L(lang, r.ar, r.en)}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Stat label={L(lang, "طلبات المتجر", "Store orders")} value={String(orders.length)} />
          <Stat label={L(lang, "روشتات", "Prescriptions")} value={String(rxs.length)} />
          <Stat label={L(lang, "محادثات مفتوحة", "Open threads")} value={String(conversations.filter((c) => c.status !== "closed").length)} />
          <Stat label={L(lang, "قرب انتهاء", "Near expiry")} value={String(near.filter((b) => b.days < 120).length)} />
        </div>

        {(role === "manager" || role === "inventory") && (
          <section className="mt-8">
            <h2 className="font-display text-2xl font-bold">{L(lang, "صرف الأقرب انتهاء أولاً", "First expiry, first out")}</h2>
            <div className="mt-3 overflow-x-auto rounded-card border border-line bg-surface">
              <table className="w-full min-w-[40rem] text-sm">
                <thead className="text-start text-xs text-muted">
                  <tr>
                    {["الصنف", "التشغيلة", "الفرع", "الكمية", "الانتهاء"].map((h, i) => (
                      <th key={h} className="px-3 py-2 font-medium">
                        {L(lang, h, ["Item", "Batch", "Branch", "Qty", "Expiry"][i])}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {near.map((b) => {
                    const product = findProduct(b.sku);
                    const branch = branchById(b.branchId);
                    const hot = b.days < 120;
                    return (
                      <tr key={b.batch} className="border-t border-line">
                        <td className="px-3 py-2">{product ? (lang === "ar" ? product.nameAr : product.nameEn) : b.sku}</td>
                        <td className="px-3 py-2 tabular-nums">{b.batch}</td>
                        <td className="px-3 py-2">{branch ? (lang === "ar" ? branch.nameAr : branch.nameEn) : b.branchId}</td>
                        <td className="px-3 py-2 tabular-nums">{b.qty}</td>
                        <td className={`px-3 py-2 tabular-nums ${hot ? "font-semibold text-red-deep" : ""}`}>
                          {b.expiry} · {b.days}d
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {role === "manager" && (
          <section className="mt-8 rounded-card border border-line bg-surface p-4">
            <h2 className="font-display text-2xl font-bold">{L(lang, "حجم الفروع", "Branch volume")}</h2>
            <div className="mt-4 h-64">
              {ready && (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chart}>
                    <XAxis dataKey="name" tick={{ fontSize: 11 }} interval={0} />
                    <YAxis allowDecimals={false} width={28} />
                    <Bar dataKey="orders" fill="var(--color-red)" radius={6} />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          </section>
        )}

        {role === "pharmacist" && (
          <section className="mt-8">
            <h2 className="font-display text-2xl font-bold">{L(lang, "طابور الروشتات", "Prescription queue")}</h2>
            <ul className="mt-3 space-y-2">
              {rxs.length === 0 && <li className="text-sm text-muted">{L(lang, "الطابور فارغ.", "The queue is clear.")}</li>}
              {rxs.map((rx) => (
                <li key={rx.id} className="rounded-2xl border border-line bg-surface px-4 py-3 text-sm">
                  <p className="font-semibold">{rx.id} · {rx.name}</p>
                  <p className="text-muted">{rx.note || L(lang, "بدون ملاحظة", "No note")} · {rx.fileName || L(lang, "بدون ملف", "no file")}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {role === "cashier" && (
          <section className="mt-8">
            <h2 className="font-display text-2xl font-bold">{L(lang, "التحصيل", "Tenders")}</h2>
            <ul className="mt-3 space-y-2">
              {tenders.map((tender) => (
                <li key={tender.id} className="flex justify-between rounded-2xl border border-line bg-surface px-4 py-3 text-sm">
                  <span>{tender.method} · {tender.ref}</span>
                  <span className="tabular-nums">{tender.amount} · {tender.status}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {role === "delivery" && (
          <section className="mt-8">
            <h2 className="font-display text-2xl font-bold">{L(lang, "في التجهيز", "Out for preparation")}</h2>
            <ul className="mt-3 space-y-2">
              {orders.length === 0 && <li className="text-sm text-muted">{L(lang, "لا طلبات توصيل بعد.", "No delivery orders yet.")}</li>}
              {orders.map((o) => {
                const branch = branchById(o.branchId);
                return (
                  <li key={o.id} className="rounded-2xl border border-line bg-surface px-4 py-3 text-sm">
                    <p className="font-semibold">{o.id} · {o.customer}</p>
                    <p className="text-muted">{o.address}، {o.city} · {branch ? (lang === "ar" ? branch.nameAr : branch.nameEn) : ""}</p>
                  </li>
                );
              })}
            </ul>
          </section>
        )}
      </div>
    </Shell>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-card border border-line bg-surface p-4">
      <p className="text-xs text-muted">{label}</p>
      <p className="mt-1 font-display text-3xl font-extrabold tabular-nums">{value}</p>
    </div>
  );
}
