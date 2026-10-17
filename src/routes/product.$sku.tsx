import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import { categoryName, findProduct, money } from "@/data/catalog";
import { L, useBendary } from "@/lib/store";

export const Route = createFileRoute("/product/$sku")({
  head: ({ params }) => ({
    meta: [{ title: `${params.sku} | El-Bendary` }],
  }),
  component: ProductPage,
});

function ProductPage() {
  const { sku } = Route.useParams();
  const lang = useBendary((s) => s.lang);
  const add = useBendary((s) => s.addToCart);
  const product = findProduct(sku);

  if (!product) {
    return (
      <Shell>
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h1 className="font-display text-3xl font-extrabold">{L(lang, "الصنف غير موجود", "Item not in the catalog")}</h1>
          <Link to="/shop" search={{ q: "", cat: "all", price: "all", stock: "all" }} className="mt-4 inline-block text-sm font-semibold text-red">
            {L(lang, "العودة للكتالوج", "Back to the catalog")}
          </Link>
        </div>
      </Shell>
    );
  }

  const name = lang === "ar" ? product.nameAr : product.nameEn;

  return (
    <Shell>
      <article className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2">
        <div className="flex min-h-72 flex-col justify-between rounded-card border border-line bg-sand p-6">
          <p className="text-xs font-semibold tracking-wide text-red">{categoryName(product.category, lang)}</p>
          <div>
            <p className="font-display text-5xl font-extrabold text-ink/15">{product.sku}</p>
            <p className="mt-2 text-sm text-muted">{L(lang, "بطاقة صرف من رف البنداري", "Bendary shelf card")}</p>
          </div>
          <p className="text-xs text-muted tabular-nums">SKU {product.sku}</p>
        </div>
        <div>
          <h1 className="font-display text-4xl font-extrabold">{name}</h1>
          <p className="mt-2 text-muted">{lang === "ar" ? product.nameEn : product.nameAr}</p>
          <p className="mt-4 text-base">{lang === "ar" ? product.blurbAr : product.blurbEn}</p>
          {(product.offerAr || product.offerEn) && (
            <p className="mt-4 inline-block rounded-full bg-leaf-soft px-3 py-1 text-sm font-semibold text-leaf">
              {lang === "ar" ? product.offerAr : product.offerEn}
            </p>
          )}
          <p className="mt-6 font-display text-4xl font-extrabold tabular-nums">{money(product.price, lang)}</p>
          <p className="mt-1 text-sm text-muted">
            {product.stock > 0
              ? L(lang, `${product.stock} على الرف`, `${product.stock} on the shelf`)
              : L(lang, "نفد من هذا الفرع التجريبي", "Out on this preview shelf")}
            {product.cold ? L(lang, " · شحن مبرد", " · cooled shipping") : ""}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {product.rx ? (
              <Link to="/prescription" className="rounded-full bg-red px-5 py-3 text-sm font-semibold text-paper">
                {L(lang, "هذا الصنف بروشتة", "This item needs a prescription")}
              </Link>
            ) : (
              <button
                type="button"
                disabled={product.stock <= 0}
                onClick={() => add(product.sku)}
                className="rounded-full bg-red px-5 py-3 text-sm font-semibold text-paper disabled:opacity-40"
              >
                {L(lang, "أضف إلى السلة", "Add to cart")}
              </button>
            )}
            <Link to="/shop" search={{ q: "", cat: product.category, price: "all", stock: "all" }} className="rounded-full border border-line px-5 py-3 text-sm font-semibold">
              {L(lang, "أصناف قريبة", "Related shelf")}
            </Link>
          </div>
        </div>
      </article>
    </Shell>
  );
}
