import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/shell";
import { money } from "@/data/catalog";
import { branchById } from "@/data/network";
import { L, useBendary } from "@/lib/store";

type TrackSearch = { id: string };

export const Route = createFileRoute("/track")({
  validateSearch: (search: Record<string, unknown>): TrackSearch => ({
    id: typeof search.id === "string" ? search.id : "",
  }),
  head: () => ({ meta: [{ title: "تتبع الطلب | El-Bendary" }] }),
  component: TrackPage,
});

const steps = ["confirmed", "preparing", "out", "delivered"] as const;

function TrackPage() {
  const lang = useBendary((s) => s.lang);
  const search = Route.useSearch();
  const orders = useBendary((s) => s.orders);
  const [typed, setTyped] = useState(search.id);

  const order = orders.find((o) => o.id.toLowerCase() === (typed || search.id).trim().toLowerCase());
  const branch = order ? branchById(order.branchId) : undefined;
  const active = order ? steps.indexOf(order.status) : -1;

  return (
    <Shell>
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="font-display text-4xl font-extrabold">{L(lang, "تتبع الطلب", "Track an order")}</h1>
        <form
          className="mt-5 flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            setTyped(typed.trim().toUpperCase());
          }}
        >
          <input
            value={typed}
            onChange={(e) => setTyped(e.target.value)}
            placeholder="BND-0000"
            className="min-w-0 flex-1 rounded-full border border-line bg-surface px-4 py-2.5"
          />
          <button type="submit" className="rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-paper">
            {L(lang, "ابحث", "Find")}
          </button>
        </form>
        {!order && (typed || search.id) && (
          <p className="mt-4 text-sm text-muted">{L(lang, "لا طلب بهذا الرقم على هذا الجهاز.", "No order with that number on this device.")}</p>
        )}
        {orders.length > 0 && !order && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {orders.map((o) => (
              <li key={o.id}>
                <button type="button" onClick={() => setTyped(o.id)} className="rounded-full bg-sand px-3 py-1 text-xs font-semibold">
                  {o.id}
                </button>
              </li>
            ))}
          </ul>
        )}
        {order && (
          <article className="mt-6 rounded-card border border-line bg-surface p-5">
            <p className="text-xs font-semibold text-red">{order.ref}</p>
            <h2 className="font-display text-2xl font-bold">{order.id}</h2>
            <p className="text-sm text-muted">
              {order.customer} · {branch ? (lang === "ar" ? branch.nameAr : branch.nameEn) : order.branchId}
            </p>
            <ol className="mt-5 grid grid-cols-4 gap-2 text-center text-xs">
              {steps.map((step, i) => (
                <li key={step} className={`rounded-xl px-2 py-3 ${i <= active ? "bg-ink text-paper" : "bg-sand text-muted"}`}>
                  {L(
                    lang,
                    ["تأكد", "يُجهَّز", "في الطريق", "وصل"][i],
                    ["Confirmed", "Preparing", "On the way", "Delivered"][i],
                  )}
                </li>
              ))}
            </ol>
            <ul className="mt-4 space-y-1 text-sm">
              {order.items.map((item) => (
                <li key={item.sku} className="flex justify-between">
                  <span>
                    {lang === "ar" ? item.nameAr : item.nameEn} × {item.qty}
                  </span>
                  <span className="tabular-nums">{money(item.price * item.qty, lang)}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 font-semibold tabular-nums">
              {L(lang, "الإجمالي", "Total")} {money(order.total, lang)} · {order.method}
            </p>
            <p className="mt-2 text-sm text-muted">
              {order.address}، {order.city}
            </p>
          </article>
        )}
      </div>
    </Shell>
  );
}
