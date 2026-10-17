import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, X as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as branchById, g as useBendary, m as money, n as L, r as Shell } from "./shell-DcyxnXUU.mjs";
import { r as Route$1 } from "./router-B7yE-vBD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/track-7Y9uylZu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var steps = [
	"confirmed",
	"preparing",
	"out",
	"delivered"
];
function TrackPage() {
	const lang = useBendary((s) => s.lang);
	const search = Route$1.useSearch();
	const orders = useBendary((s) => s.orders);
	const [typed, setTyped] = (0, import_react.useState)(search.id);
	const order = orders.find((o) => o.id.toLowerCase() === (typed || search.id).trim().toLowerCase());
	const branch = order ? branchById(order.branchId) : void 0;
	const active = order ? steps.indexOf(order.status) : -1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-extrabold",
				children: L(lang, "تتبع الطلب", "Track an order")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-5 flex gap-2",
				onSubmit: (e) => {
					e.preventDefault();
					setTyped(typed.trim().toUpperCase());
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: typed,
					onChange: (e) => setTyped(e.target.value),
					placeholder: "BND-0000",
					className: "min-w-0 flex-1 rounded-full border border-line bg-surface px-4 py-2.5"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-paper",
					children: L(lang, "ابحث", "Find")
				})]
			}),
			!order && (typed || search.id) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted",
				children: L(lang, "لا طلب بهذا الرقم على هذا الجهاز.", "No order with that number on this device.")
			}),
			orders.length > 0 && !order && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 flex flex-wrap gap-2",
				children: orders.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTyped(o.id),
					className: "rounded-full bg-sand px-3 py-1 text-xs font-semibold",
					children: o.id
				}) }, o.id))
			}),
			order && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "mt-6 rounded-card border border-line bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold text-red",
						children: order.ref
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-bold",
						children: order.id
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							order.customer,
							" · ",
							branch ? lang === "ar" ? branch.nameAr : branch.nameEn : order.branchId
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-5 grid grid-cols-4 gap-2 text-center text-xs",
						children: steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: `rounded-xl px-2 py-3 ${i <= active ? "bg-ink text-paper" : "bg-sand text-muted"}`,
							children: L(lang, [
								"تأكد",
								"يُجهَّز",
								"في الطريق",
								"وصل"
							][i], [
								"Confirmed",
								"Preparing",
								"On the way",
								"Delivered"
							][i])
						}, step))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-1 text-sm",
						children: order.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								lang === "ar" ? item.nameAr : item.nameEn,
								" × ",
								item.qty
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: money(item.price * item.qty, lang)
							})]
						}, item.sku))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 font-semibold tabular-nums",
						children: [
							L(lang, "الإجمالي", "Total"),
							" ",
							money(order.total, lang),
							" · ",
							order.method
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted",
						children: [
							order.address,
							"، ",
							order.city
						]
					})
				]
			})
		]
	}) });
}
//#endregion
export { TrackPage as component };
