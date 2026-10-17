import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as useBendary, l as categoryName, m as money, n as L } from "./shell-DcyxnXUU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-card-cVW6mXB6.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product }) {
	const lang = useBendary((s) => s.lang);
	const add = useBendary((s) => s.addToCart);
	const name = lang === "ar" ? product.nameAr : product.nameEn;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex flex-col rounded-card border border-line bg-surface p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-start justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-wide text-red",
					children: categoryName(product.category, lang)
				}), product.rx && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-red-soft px-2 py-0.5 text-xs font-semibold text-red-deep",
					children: L(lang, "روشتة", "Rx")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/product/$sku",
				params: { sku: product.sku },
				className: "font-display text-lg font-bold leading-snug",
				children: name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted",
				children: lang === "ar" ? product.nameEn : product.nameAr
			}),
			(product.offerAr || product.offerEn) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs font-semibold text-leaf",
				children: lang === "ar" ? product.offerAr : product.offerEn
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-auto flex items-end justify-between gap-3 pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xl font-bold tabular-nums",
					children: money(product.price, lang)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: product.stock > 0 ? L(lang, `متوفر ${product.stock}`, `${product.stock} in stock`) : L(lang, "غير متوفر", "Out of stock")
				})] }), product.rx ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/prescription",
					className: "rounded-full border border-ink px-3 py-2 text-xs font-semibold",
					children: L(lang, "ارفع الروشتة", "Upload Rx")
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: product.stock <= 0,
					onClick: () => add(product.sku, 1),
					className: "rounded-full bg-ink px-3 py-2 text-xs font-semibold text-paper disabled:opacity-40",
					children: L(lang, "أضف", "Add")
				})]
			})
		]
	});
}
function priceBand(price) {
	if (price < 100) return "u100";
	if (price < 300) return "u300";
	if (price < 700) return "u700";
	return "over";
}
function bandLabel(id, lang) {
	const map = {
		all: ["كل الأسعار", "Any price"],
		u100: ["أقل من ١٠٠", "Under 100"],
		u300: ["١٠٠ – ٣٠٠", "100 – 300"],
		u700: ["٣٠٠ – ٧٠٠", "300 – 700"],
		over: ["أكثر من ٧٠٠", "Over 700"]
	};
	const pair = map[id] ?? map.all;
	return L(lang, pair[0], pair[1]);
}
//#endregion
export { bandLabel as n, priceBand as r, ProductCard as t };
