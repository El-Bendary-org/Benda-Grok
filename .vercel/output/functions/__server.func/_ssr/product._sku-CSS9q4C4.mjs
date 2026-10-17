import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as findProduct, g as useBendary, l as categoryName, m as money, n as L, r as Shell } from "./shell-DcyxnXUU.mjs";
import { n as Route } from "./router-B7yE-vBD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._sku-CSS9q4C4.js
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { sku } = Route.useParams();
	const lang = useBendary((s) => s.lang);
	const add = useBendary((s) => s.addToCart);
	const product = findProduct(sku);
	if (!product) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl font-extrabold",
			children: L(lang, "الصنف غير موجود", "Item not in the catalog")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/shop",
			search: {
				q: "",
				cat: "all",
				price: "all",
				stock: "all"
			},
			className: "mt-4 inline-block text-sm font-semibold text-red",
			children: L(lang, "العودة للكتالوج", "Back to the catalog")
		})]
	}) });
	const name = lang === "ar" ? product.nameAr : product.nameEn;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-72 flex-col justify-between rounded-card border border-line bg-sand p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-wide text-red",
					children: categoryName(product.category, lang)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-5xl font-extrabold text-ink/15",
					children: product.sku
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: L(lang, "بطاقة صرف من رف البنداري", "Bendary shelf card")
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted tabular-nums",
					children: ["SKU ", product.sku]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-extrabold",
				children: name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: lang === "ar" ? product.nameEn : product.nameAr
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base",
				children: lang === "ar" ? product.blurbAr : product.blurbEn
			}),
			(product.offerAr || product.offerEn) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 inline-block rounded-full bg-leaf-soft px-3 py-1 text-sm font-semibold text-leaf",
				children: lang === "ar" ? product.offerAr : product.offerEn
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 font-display text-4xl font-extrabold tabular-nums",
				children: money(product.price, lang)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-muted",
				children: [product.stock > 0 ? L(lang, `${product.stock} على الرف`, `${product.stock} on the shelf`) : L(lang, "نفد من هذا الفرع التجريبي", "Out on this preview shelf"), product.cold ? L(lang, " · شحن مبرد", " · cooled shipping") : ""]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-3",
				children: [product.rx ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/prescription",
					className: "rounded-full bg-red px-5 py-3 text-sm font-semibold text-paper",
					children: L(lang, "هذا الصنف بروشتة", "This item needs a prescription")
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: product.stock <= 0,
					onClick: () => add(product.sku),
					className: "rounded-full bg-red px-5 py-3 text-sm font-semibold text-paper disabled:opacity-40",
					children: L(lang, "أضف إلى السلة", "Add to cart")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					search: {
						q: "",
						cat: product.category,
						price: "all",
						stock: "all"
					},
					className: "rounded-full border border-line px-5 py-3 text-sm font-semibold",
					children: L(lang, "أصناف قريبة", "Related shelf")
				})]
			})
		] })]
	}) });
}
//#endregion
export { ProductPage as component };
