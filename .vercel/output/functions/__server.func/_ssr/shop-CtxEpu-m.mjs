import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as categories, g as useBendary, h as products, n as L, r as Shell } from "./shell-DcyxnXUU.mjs";
import { i as Route$2 } from "./router-B7yE-vBD.mjs";
import { n as bandLabel, r as priceBand, t as ProductCard } from "./product-card-cVW6mXB6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-CtxEpu-m.js
var import_jsx_runtime = require_jsx_runtime();
function ShopPage() {
	const search = Route$2.useSearch();
	const navigate = Route$2.useNavigate();
	const lang = useBendary((s) => s.lang);
	const list = products.filter((p) => {
		const blob = `${p.nameAr} ${p.nameEn} ${p.sku}`.toLowerCase();
		if (search.q && !blob.includes(search.q.toLowerCase())) return false;
		if (search.cat !== "all" && p.category !== search.cat) return false;
		if (search.price !== "all" && priceBand(p.price) !== search.price) return false;
		if (search.stock === "in" && p.stock <= 0) return false;
		return true;
	});
	function setSearch(patch) {
		navigate({ search: {
			...search,
			...patch
		} });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-8 px-4 py-8 md:grid-cols-[16rem_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-extrabold",
					children: L(lang, "الكتالوج", "Catalog")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted tabular-nums",
					children: L(lang, `${list.length} صنفاً`, `${list.length} items`)
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-xs font-semibold text-muted",
					children: L(lang, "القسم", "Category")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						active: search.cat === "all",
						onClick: () => setSearch({ cat: "all" }),
						children: L(lang, "الكل", "All")
					}), categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						active: search.cat === c.id,
						onClick: () => setSearch({ cat: c.id }),
						children: lang === "ar" ? c.ar : c.en
					}, c.id))]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-xs font-semibold text-muted",
					children: L(lang, "السعر", "Price")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						"all",
						"u100",
						"u300",
						"u700",
						"over"
					].map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						active: search.price === id,
						onClick: () => setSearch({ price: id }),
						children: bandLabel(id, lang)
					}, id))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: search.stock === "in",
						onChange: (e) => setSearch({ stock: e.target.checked ? "in" : "all" })
					}), L(lang, "المتاح فقط", "In stock only")]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "rounded-card border border-line bg-surface p-8 text-muted",
			children: L(lang, "لا يوجد صنف بهذه التصفية.", "Nothing matches these filters.")
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
			children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.sku))
		}) })]
	}) });
}
function Chip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: `rounded-full px-3 py-1.5 text-xs font-semibold ${active ? "bg-ink text-paper" : "bg-sand text-ink"}`,
		children
	});
}
//#endregion
export { ShopPage as component };
