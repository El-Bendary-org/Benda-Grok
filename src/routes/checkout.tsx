import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Shell } from "@/components/shell";
import { money } from "@/data/catalog";
import { branches } from "@/data/network";
import { cartDetailed, L, useBendary, type PayMethod } from "@/lib/store";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "الدفع | El-Bendary" }] }),
  component: CheckoutPage,
});

const methods: { id: PayMethod; ar: string; en: string; hintAr: string; hintEn: string }[] = [
  { id: "instapay", ar: "إنستاباي", en: "Instapay", hintAr: "مرجع تحويل يُراجع في المكتب", hintEn: "Transfer reference reviewed on the desk" },
  { id: "fawry", ar: "فوري", en: "Fawry", hintAr: "كود دفع يُولَّد مع الطلب", hintEn: "A pay code is issued with the order" },
  { id: "paymob", ar: "باي موب", en: "Paymob", hintAr: "بطاقة عبر بوابة باي موب", hintEn: "Card via the Paymob gateway" },
  { id: "vodafone", ar: "فودافون كاش", en: "Vodafone Cash", hintAr: "محفظة الموبايل", hintEn: "Mobile wallet" },
  { id: "cod", ar: "الدفع عند الاستلام", en: "Cash on delivery", hintAr: "للطلبات داخل نطاق الفرع", hintEn: "Inside the branch delivery zone" },
];

function CheckoutPage() {
  const lang = useBendary((s) => s.lang);
  const cart = useBendary((s) => s.cart);
  const place = useBendary((s) => s.placeOrder);
  const lines = cartDetailed(cart);
  const total = lines.reduce((n, l) => n + l.line, 0);
  const navigate = useNavigate();
  const [method, setMethod] = useState<PayMethod>("instapay");
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (lines.length === 0) return;
    const data = new FormData(e.currentTarget);
    const customer = String(data.get("customer") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const address = String(data.get("address") || "").trim();
    const city = String(data.get("city") || "").trim();
    const branchId = String(data.get("branch") || "");
    const note = String(data.get("note") || "").trim();
    if (customer.length < 2 || phone.length < 8 || address.length < 4) {
      setError(L(lang, "أكمل الاسم والهاتف والعنوان.", "Name, phone, and address are required."));
      return;
    }
    const order = place({
      items: lines.map((l) => ({
        sku: l.sku,
        nameAr: l.product.nameAr,
        nameEn: l.product.nameEn,
        qty: l.qty,
        price: l.product.price,
      })),
      total,
      method,
      branchId,
      customer,
      phone,
      address,
      city,
      note,
    });
    void navigate({ to: "/track", search: { id: order.id } });
  }

  return (
    <Shell>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[1fr_18rem]">
        <form onSubmit={onSubmit} className="space-y-4">
          <h1 className="font-display text-4xl font-extrabold">{L(lang, "إتمام الطلب", "Checkout")}</h1>
          <p className="text-sm text-muted">
            {L(
              lang,
              "هذه معاينة. لا يُخصم مبلغ حقيقي. المرجع يُحفظ على جهازك ويظهر في مكتب MoSTaa-ChaT.",
              "This is a preview. No real charge is made. The reference stays on this device and appears on the MoSTaa-ChaT desk.",
            )}
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field name="customer" label={L(lang, "الاسم", "Name")} />
            <Field name="phone" label={L(lang, "الهاتف", "Phone")} />
            <Field name="city" label={L(lang, "المدينة", "City")} />
            <label className="block text-sm">
              <span className="mb-1 block font-medium">{L(lang, "فرع التجهيز", "Fulfilling branch")}</span>
              <select name="branch" className="w-full rounded-xl border border-line bg-surface px-3 py-2.5" defaultValue="galaa-1">
                {branches.map((b) => (
                  <option key={b.id} value={b.id}>
                    {lang === "ar" ? `${b.nameAr} — ${b.cityAr}` : `${b.nameEn} — ${b.cityEn}`}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm sm:col-span-2">
              <span className="mb-1 block font-medium">{L(lang, "العنوان", "Address")}</span>
              <input name="address" className="w-full rounded-xl border border-line bg-surface px-3 py-2.5" />
            </label>
            <label className="block text-sm sm:col-span-2">
              <span className="mb-1 block font-medium">{L(lang, "ملاحظة للصيدلي", "Note for the pharmacist")}</span>
              <textarea name="note" rows={3} className="w-full rounded-xl border border-line bg-surface px-3 py-2.5" />
            </label>
          </div>
          <fieldset>
            <legend className="mb-2 text-sm font-medium">{L(lang, "طريقة الدفع", "Payment")}</legend>
            <div className="grid gap-2">
              {methods.map((m) => (
                <label key={m.id} className={`flex cursor-pointer items-start gap-3 rounded-2xl border px-3 py-3 ${method === m.id ? "border-red bg-red-soft" : "border-line bg-surface"}`}>
                  <input type="radio" name="method" checked={method === m.id} onChange={() => setMethod(m.id)} className="mt-1" />
                  <span>
                    <span className="block font-semibold">{L(lang, m.ar, m.en)}</span>
                    <span className="text-xs text-muted">{L(lang, m.hintAr, m.hintEn)}</span>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
          {error && <p className="text-sm text-red-deep">{error}</p>}
          <button type="submit" disabled={lines.length === 0} className="rounded-full bg-red px-5 py-3 text-sm font-semibold text-paper disabled:opacity-40">
            {L(lang, "تأكيد الطلب", "Place order")}
          </button>
        </form>
        <aside className="h-fit rounded-card border border-line bg-surface p-4">
          <p className="text-sm font-semibold">{L(lang, "ملخص", "Summary")}</p>
          <ul className="mt-3 space-y-2 text-sm">
            {lines.map((l) => (
              <li key={l.sku} className="flex justify-between gap-3">
                <span>
                  {lang === "ar" ? l.product.nameAr : l.product.nameEn} × {l.qty}
                </span>
                <span className="tabular-nums">{money(l.line, lang)}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 flex justify-between font-display text-xl font-bold">
            <span>{L(lang, "الإجمالي", "Total")}</span>
            <span className="tabular-nums">{money(total, lang)}</span>
          </p>
        </aside>
      </div>
    </Shell>
  );
}

function Field({ name, label }: { name: string; label: string }) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block font-medium">{label}</span>
      <input name={name} className="w-full rounded-xl border border-line bg-surface px-3 py-2.5" />
    </label>
  );
}
