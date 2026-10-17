import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import { bandLabel, priceBand, ProductCard } from "@/components/product-card";
import { categories, products } from "@/data/catalog";
import { L, useBendary } from "@/lib/store";

type ShopSearch = {
  q: string;
  cat: string;
  price: string;
  stock: string;
};

export const Route = createFileRoute("/shop")({
  validateSearch: (search: Record<string, unknown>): ShopSearch => ({
    q: typeof search.q === "string" ? search.q : "",
    cat: typeof search.cat === "string" ? search.cat : "all",
    price: typeof search.price === "string" ? search.price : "all",
    stock: typeof search.stock === "string" ? search.stock : "all",
  }),
  head: () => ({ meta: [{ title: "المتجر | El-Bendary" }] }),
  component: ShopPage,
});

function ShopPage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const lang = useBendary((s) => s.lang);

  const list = products.filter((p) => {
    const blob = `${p.nameAr} ${p.nameEn} ${p.sku}`.toLowerCase();
    if (search.q && !blob.includes(search.q.toLowerCase())) return false;
    if (search.cat !== "all" && p.category !== search.cat) return false;
    if (search.price !== "all" && priceBand(p.price) !== search.price) return false;
    if (search.stock === "in" && p.stock <= 0) return false;
    return true;
  });

  function setSearch(patch: Partial<ShopSearch>) {
    void navigate({ search: { ...search, ...patch } });
  }

  const prices = ["all", "u100", "u300", "u700", "over"];

  return (
    <Shell>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 md:grid-cols-[16rem_1fr]">
        <aside className="space-y-6">
          <div>
            <h1 className="font-display text-3xl font-extrabold">{L(lang, "الكتالوج", "Catalog")}</h1>
            <p className="mt-1 text-sm text-muted tabular-nums">
              {L(lang, `${list.length} صنفاً`, `${list.length} items`)}
            </p>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold text-muted">{L(lang, "القسم", "Category")}</p>
            <div className="flex flex-wrap gap-2">
              <Chip active={search.cat === "all"} onClick={() => setSearch({ cat: "all" })}>
                {L(lang, "الكل", "All")}
              </Chip>
              {categories.map((c) => (
                <Chip key={c.id} active={search.cat === c.id} onClick={() => setSearch({ cat: c.id })}>
                  {lang === "ar" ? c.ar : c.en}
                </Chip>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold text-muted">{L(lang, "السعر", "Price")}</p>
            <div className="flex flex-wrap gap-2">
              {prices.map((id) => (
                <Chip key={id} active={search.price === id} onClick={() => setSearch({ price: id })}>
                  {bandLabel(id, lang)}
                </Chip>
              ))}
            </div>
          </div>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={search.stock === "in"}
              onChange={(e) => setSearch({ stock: e.target.checked ? "in" : "all" })}
            />
            {L(lang, "المتاح فقط", "In stock only")}
          </label>
        </aside>
        <div>
          {list.length === 0 ? (
            <p className="rounded-card border border-line bg-surface p-8 text-muted">
              {L(lang, "لا يوجد صنف بهذه التصفية.", "Nothing matches these filters.")}
            </p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {list.map((p) => (
                <ProductCard key={p.sku} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Shell>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3 py-1.5 text-xs font-semibold ${active ? "bg-ink text-paper" : "bg-sand text-ink"}`}
    >
      {children}
    </button>
  );
}
