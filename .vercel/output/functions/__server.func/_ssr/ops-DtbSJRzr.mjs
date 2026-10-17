import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, X as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as branchById, d as findProduct, g as useBendary, i as batches, n as L, o as branches, r as Shell, u as daysUntil } from "./shell-DcyxnXUU.mjs";
import { a as ResponsiveContainer, i as Bar, n as YAxis, r as XAxis, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ops-DtbSJRzr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var roles = [
	{
		id: "manager",
		ar: "مدير الفرع",
		en: "Branch manager"
	},
	{
		id: "pharmacist",
		ar: "صيدلي",
		en: "Pharmacist"
	},
	{
		id: "inventory",
		ar: "المخزون",
		en: "Inventory"
	},
	{
		id: "cashier",
		ar: "كاشير",
		en: "Cashier"
	},
	{
		id: "delivery",
		ar: "التوصيل",
		en: "Delivery"
	}
];
function OpsPage() {
	const lang = useBendary((s) => s.lang);
	const role = useBendary((s) => s.role);
	const setRole = useBendary((s) => s.setRole);
	const orders = useBendary((s) => s.orders);
	const rxs = useBendary((s) => s.rxs);
	const tenders = useBendary((s) => s.tenders);
	const conversations = useBendary((s) => s.conversations);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setReady(true), []);
	const near = batches.map((b) => ({
		...b,
		days: daysUntil(b.expiry)
	})).sort((a, b) => a.days - b.days);
	const chart = branches.slice(0, 6).map((b) => ({
		name: lang === "ar" ? b.nameAr : b.nameEn,
		orders: orders.filter((o) => o.branchId === b.id).length + (b.main ? 4 : 1)
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-wide text-red",
				children: L(lang, "عمليات الفروع", "Branch operations")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 font-display text-4xl font-extrabold",
				children: L(lang, "وردية اليوم", "Today’s shift")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-sm text-muted",
				children: L(lang, "لوحة داخلية للعينة. سجلات المرضى تبقى على هذا الجهاز. في التشغيل الحي تُحفظ مشفّرة ولا تُعرض إلا لدور الوردية.", "An internal sample board. Records stay on this device. In live service they are stored encrypted and shown only to the shift role.")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: roles.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setRole(r.id),
					className: `rounded-full px-3 py-1.5 text-sm font-semibold ${role === r.id ? "bg-ink text-paper" : "bg-sand"}`,
					children: L(lang, r.ar, r.en)
				}, r.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: L(lang, "طلبات المتجر", "Store orders"),
						value: String(orders.length)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: L(lang, "روشتات", "Prescriptions"),
						value: String(rxs.length)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: L(lang, "محادثات مفتوحة", "Open threads"),
						value: String(conversations.filter((c) => c.status !== "closed").length)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: L(lang, "قرب انتهاء", "Near expiry"),
						value: String(near.filter((b) => b.days < 120).length)
					})
				]
			}),
			(role === "manager" || role === "inventory") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-bold",
					children: L(lang, "صرف الأقرب انتهاء أولاً", "First expiry, first out")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 overflow-x-auto rounded-card border border-line bg-surface",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[40rem] text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "text-start text-xs text-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: [
								"الصنف",
								"التشغيلة",
								"الفرع",
								"الكمية",
								"الانتهاء"
							].map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2 font-medium",
								children: L(lang, h, [
									"Item",
									"Batch",
									"Branch",
									"Qty",
									"Expiry"
								][i])
							}, h)) })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: near.map((b) => {
							const product = findProduct(b.sku);
							const branch = branchById(b.branchId);
							const hot = b.days < 120;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-t border-line",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2",
										children: product ? lang === "ar" ? product.nameAr : product.nameEn : b.sku
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2 tabular-nums",
										children: b.batch
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2",
										children: branch ? lang === "ar" ? branch.nameAr : branch.nameEn : b.branchId
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2 tabular-nums",
										children: b.qty
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: `px-3 py-2 tabular-nums ${hot ? "font-semibold text-red-deep" : ""}`,
										children: [
											b.expiry,
											" · ",
											b.days,
											"d"
										]
									})
								]
							}, b.batch);
						}) })]
					})
				})]
			}),
			role === "manager" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 rounded-card border border-line bg-surface p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-bold",
					children: L(lang, "حجم الفروع", "Branch volume")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 h-64",
					children: ready && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							data: chart,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "name",
									tick: { fontSize: 11 },
									interval: 0
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									allowDecimals: false,
									width: 28
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "orders",
									fill: "var(--color-red)",
									radius: 6
								})
							]
						})
					})
				})]
			}),
			role === "pharmacist" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-bold",
					children: L(lang, "طابور الروشتات", "Prescription queue")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2",
					children: [rxs.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-sm text-muted",
						children: L(lang, "الطابور فارغ.", "The queue is clear.")
					}), rxs.map((rx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-2xl border border-line bg-surface px-4 py-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-semibold",
							children: [
								rx.id,
								" · ",
								rx.name
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-muted",
							children: [
								rx.note || L(lang, "بدون ملاحظة", "No note"),
								" · ",
								rx.fileName || L(lang, "بدون ملف", "no file")
							]
						})]
					}, rx.id))]
				})]
			}),
			role === "cashier" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-bold",
					children: L(lang, "التحصيل", "Tenders")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2",
					children: tenders.map((tender) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between rounded-2xl border border-line bg-surface px-4 py-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							tender.method,
							" · ",
							tender.ref
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "tabular-nums",
							children: [
								tender.amount,
								" · ",
								tender.status
							]
						})]
					}, tender.id))
				})]
			}),
			role === "delivery" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-bold",
					children: L(lang, "في التجهيز", "Out for preparation")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2",
					children: [orders.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-sm text-muted",
						children: L(lang, "لا طلبات توصيل بعد.", "No delivery orders yet.")
					}), orders.map((o) => {
						const branch = branchById(o.branchId);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-2xl border border-line bg-surface px-4 py-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-semibold",
								children: [
									o.id,
									" · ",
									o.customer
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-muted",
								children: [
									o.address,
									"، ",
									o.city,
									" · ",
									branch ? lang === "ar" ? branch.nameAr : branch.nameEn : ""
								]
							})]
						}, o.id);
					})]
				})]
			})
		]
	}) });
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-card border border-line bg-surface p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 font-display text-3xl font-extrabold tabular-nums",
			children: value
		})]
	});
}
//#endregion
export { OpsPage as component };
