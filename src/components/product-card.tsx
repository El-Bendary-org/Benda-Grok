import { Link } from "@tanstack/react-router";
import { categoryName, money, type Product } from "@/data/catalog";
import { L, useBendary, type Lang } from "@/lib/store";

export function ProductCard({ product }: { product: Product }) {
  const lang = useBendary((s) => s.lang);
  const add = useBendary((s) => s.addToCart);
  const name = lang === "ar" ? product.nameAr : product.nameEn;
  return (
    <article className="flex flex-col rounded-card border border-line bg-surface p-4">
      <div className="mb-3 flex items-start justify-between gap-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-red">{categoryName(product.category, lang)}</p>
        {product.rx && (
          <span className="rounded-full bg-red-soft px-2 py-0.5 text-xs font-semibold text-red-deep">
            {L(lang, "روشتة", "Rx")}
          </span>
        )}
      </div>
      <Link to="/product/$sku" params={{ sku: product.sku }} className="font-display text-lg font-bold leading-snug">
        {name}
      </Link>
      <p className="mt-1 text-xs text-muted">{lang === "ar" ? product.nameEn : product.nameAr}</p>
      {(product.offerAr || product.offerEn) && (
        <p className="mt-3 text-xs font-semibold text-leaf">{lang === "ar" ? product.offerAr : product.offerEn}</p>
      )}
      <div className="mt-auto flex items-end justify-between gap-3 pt-4">
        <div>
          <p className="font-display text-xl font-bold tabular-nums">{money(product.price, lang)}</p>
          <p className="text-xs text-muted">
            {product.stock > 0
              ? L(lang, `متوفر ${product.stock}`, `${product.stock} in stock`)
              : L(lang, "غير متوفر", "Out of stock")}
          </p>
        </div>
        {product.rx ? (
          <Link to="/prescription" className="rounded-full border border-ink px-3 py-2 text-xs font-semibold">
            {L(lang, "ارفع الروشتة", "Upload Rx")}
          </Link>
        ) : (
          <button
            type="button"
            disabled={product.stock <= 0}
            onClick={() => add(product.sku, 1)}
            className="rounded-full bg-ink px-3 py-2 text-xs font-semibold text-paper disabled:opacity-40"
          >
            {L(lang, "أضف", "Add")}
          </button>
        )}
      </div>
    </article>
  );
}

export function priceBand(price: number) {
  if (price < 100) return "u100";
  if (price < 300) return "u300";
  if (price < 700) return "u700";
  return "over";
}

export function bandLabel(id: string, lang: Lang) {
  const map: Record<string, [string, string]> = {
    all: ["كل الأسعار", "Any price"],
    u100: ["أقل من ١٠٠", "Under 100"],
    u300: ["١٠٠ – ٣٠٠", "100 – 300"],
    u700: ["٣٠٠ – ٧٠٠", "300 – 700"],
    over: ["أكثر من ٧٠٠", "Over 700"],
  };
  const pair = map[id] ?? map.all;
  return L(lang, pair[0], pair[1]);
}
