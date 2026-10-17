import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as useBendary, m as money, n as L, r as Shell, s as cartDetailed } from "./shell-DcyxnXUU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-Dj53UYfr.js
var import_jsx_runtime = require_jsx_runtime();
function CartPage() {
	const lang = useBendary((s) => s.lang);
	const cart = useBendary((s) => s.cart);
	const setQty = useBendary((s) => s.setQty);
	const lines = cartDetailed(cart);
	const total = lines.reduce((n, l) => n + l.line, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl font-extrabold",
			children: L(lang, "السلة", "Cart")
		}), lines.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 rounded-card border border-line bg-surface p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted",
				children: L(lang, "السلة فارغة.", "The cart is empty.")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/shop",
				search: {
					q: "",
					cat: "all",
					price: "all",
					stock: "all"
				},
				className: "mt-4 inline-block text-sm font-semibold text-red",
				children: L(lang, "إلى الكتالوج", "To the catalog")
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 space-y-3",
			children: [
				lines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 rounded-card border border-line bg-surface p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold",
						children: lang === "ar" ? l.product.nameAr : l.product.nameEn
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted tabular-nums",
						children: money(l.product.price, lang)
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "grid size-9 place-items-center rounded-full border border-line",
								onClick: () => setQty(l.sku, l.qty - 1),
								"aria-label": "-",
								children: "−"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-6 text-center tabular-nums",
								children: l.qty
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "grid size-9 place-items-center rounded-full border border-line",
								onClick: () => setQty(l.sku, l.qty + 1),
								"aria-label": "+",
								children: "+"
							})
						]
					})]
				}, l.sku)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: L(lang, "الإجمالي", "Total")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-extrabold tabular-nums",
						children: money(total, lang)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/checkout",
					className: "inline-flex rounded-full bg-red px-5 py-3 text-sm font-semibold text-paper",
					children: L(lang, "إتمام الطلب", "Checkout")
				})
			]
		})]
	}) });
}
//#endregion
export { CartPage as component };
