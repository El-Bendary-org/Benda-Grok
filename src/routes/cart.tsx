import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import { money } from "@/data/catalog";
import { cartDetailed, L, useBendary } from "@/lib/store";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "السلة | El-Bendary" }] }),
  component: CartPage,
});

function CartPage() {
  const lang = useBendary((s) => s.lang);
  const cart = useBendary((s) => s.cart);
  const setQty = useBendary((s) => s.setQty);
  const lines = cartDetailed(cart);
  const total = lines.reduce((n, l) => n + l.line, 0);

  return (
    <Shell>
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="font-display text-4xl font-extrabold">{L(lang, "السلة", "Cart")}</h1>
        {lines.length === 0 ? (
          <div className="mt-6 rounded-card border border-line bg-surface p-8">
            <p className="text-muted">{L(lang, "السلة فارغة.", "The cart is empty.")}</p>
            <Link to="/shop" search={{ q: "", cat: "all", price: "all", stock: "all" }} className="mt-4 inline-block text-sm font-semibold text-red">
              {L(lang, "إلى الكتالوج", "To the catalog")}
            </Link>
          </div>
        ) : (
          <div className="mt-6 space-y-3">
            {lines.map((l) => (
              <div key={l.sku} className="flex items-center justify-between gap-3 rounded-card border border-line bg-surface p-4">
                <div>
                  <p className="font-semibold">{lang === "ar" ? l.product.nameAr : l.product.nameEn}</p>
                  <p className="text-sm text-muted tabular-nums">{money(l.product.price, lang)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button type="button" className="grid size-9 place-items-center rounded-full border border-line" onClick={() => setQty(l.sku, l.qty - 1)} aria-label="-">
                    −
                  </button>
                  <span className="w-6 text-center tabular-nums">{l.qty}</span>
                  <button type="button" className="grid size-9 place-items-center rounded-full border border-line" onClick={() => setQty(l.sku, l.qty + 1)} aria-label="+">
                    +
                  </button>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between pt-2">
              <p className="text-sm text-muted">{L(lang, "الإجمالي", "Total")}</p>
              <p className="font-display text-2xl font-extrabold tabular-nums">{money(total, lang)}</p>
            </div>
            <Link to="/checkout" className="inline-flex rounded-full bg-red px-5 py-3 text-sm font-semibold text-paper">
              {L(lang, "إتمام الطلب", "Checkout")}
            </Link>
          </div>
        )}
      </div>
    </Shell>
  );
}
