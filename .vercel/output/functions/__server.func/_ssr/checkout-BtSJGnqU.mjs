import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, X as require_react, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as useBendary, m as money, n as L, o as branches, r as Shell, s as cartDetailed } from "./shell-DcyxnXUU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-BtSJGnqU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var methods = [
	{
		id: "instapay",
		ar: "إنستاباي",
		en: "Instapay",
		hintAr: "مرجع تحويل يُراجع في المكتب",
		hintEn: "Transfer reference reviewed on the desk"
	},
	{
		id: "fawry",
		ar: "فوري",
		en: "Fawry",
		hintAr: "كود دفع يُولَّد مع الطلب",
		hintEn: "A pay code is issued with the order"
	},
	{
		id: "paymob",
		ar: "باي موب",
		en: "Paymob",
		hintAr: "بطاقة عبر بوابة باي موب",
		hintEn: "Card via the Paymob gateway"
	},
	{
		id: "vodafone",
		ar: "فودافون كاش",
		en: "Vodafone Cash",
		hintAr: "محفظة الموبايل",
		hintEn: "Mobile wallet"
	},
	{
		id: "cod",
		ar: "الدفع عند الاستلام",
		en: "Cash on delivery",
		hintAr: "للطلبات داخل نطاق الفرع",
		hintEn: "Inside the branch delivery zone"
	}
];
function CheckoutPage() {
	const lang = useBendary((s) => s.lang);
	const cart = useBendary((s) => s.cart);
	const place = useBendary((s) => s.placeOrder);
	const lines = cartDetailed(cart);
	const total = lines.reduce((n, l) => n + l.line, 0);
	const navigate = useNavigate();
	const [method, setMethod] = (0, import_react.useState)("instapay");
	const [error, setError] = (0, import_react.useState)("");
	function onSubmit(e) {
		e.preventDefault();
		if (lines.length === 0) return;
		const data = new FormData(e.currentTarget);
		const customer = String(data.get("customer") || "").trim();
		const phone = String(data.get("phone") || "").trim();
		const address = String(data.get("address") || "").trim();
		const city = String(data.get("city") || "").trim();
		const branchId = String(data.get("branch") || "");
		const note = String(data.get("note") || "").trim();
		if (customer.length < 2 || phone.length < 8 || address.length < 4) {
			setError(L(lang, "أكمل الاسم والهاتف والعنوان.", "Name, phone, and address are required."));
			return;
		}
		const order = place({
			items: lines.map((l) => ({
				sku: l.sku,
				nameAr: l.product.nameAr,
				nameEn: l.product.nameEn,
				qty: l.qty,
				price: l.product.price
			})),
			total,
			method,
			branchId,
			customer,
			phone,
			address,
			city,
			note
		});
		navigate({
			to: "/track",
			search: { id: order.id }
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[1fr_18rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl font-extrabold",
					children: L(lang, "إتمام الطلب", "Checkout")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: L(lang, "هذه معاينة. لا يُخصم مبلغ حقيقي. المرجع يُحفظ على جهازك ويظهر في مكتب MoSTaa-ChaT.", "This is a preview. No real charge is made. The reference stays on this device and appears on the MoSTaa-ChaT desk.")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "customer",
							label: L(lang, "الاسم", "Name")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "phone",
							label: L(lang, "الهاتف", "Phone")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "city",
							label: L(lang, "المدينة", "City")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-1 block font-medium",
								children: L(lang, "فرع التجهيز", "Fulfilling branch")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								name: "branch",
								className: "w-full rounded-xl border border-line bg-surface px-3 py-2.5",
								defaultValue: "galaa-1",
								children: branches.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: b.id,
									children: lang === "ar" ? `${b.nameAr} — ${b.cityAr}` : `${b.nameEn} — ${b.cityEn}`
								}, b.id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-1 block font-medium",
								children: L(lang, "العنوان", "Address")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "address",
								className: "w-full rounded-xl border border-line bg-surface px-3 py-2.5"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-1 block font-medium",
								children: L(lang, "ملاحظة للصيدلي", "Note for the pharmacist")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "note",
								rows: 3,
								className: "w-full rounded-xl border border-line bg-surface px-3 py-2.5"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
					className: "mb-2 text-sm font-medium",
					children: L(lang, "طريقة الدفع", "Payment")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-2",
					children: methods.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: `flex cursor-pointer items-start gap-3 rounded-2xl border px-3 py-3 ${method === m.id ? "border-red bg-red-soft" : "border-line bg-surface"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "radio",
							name: "method",
							checked: method === m.id,
							onChange: () => setMethod(m.id),
							className: "mt-1"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-semibold",
							children: L(lang, m.ar, m.en)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted",
							children: L(lang, m.hintAr, m.hintEn)
						})] })]
					}, m.id))
				})] }),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-red-deep",
					children: error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: lines.length === 0,
					className: "rounded-full bg-red px-5 py-3 text-sm font-semibold text-paper disabled:opacity-40",
					children: L(lang, "تأكيد الطلب", "Place order")
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "h-fit rounded-card border border-line bg-surface p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: L(lang, "ملخص", "Summary")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: lines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							lang === "ar" ? l.product.nameAr : l.product.nameEn,
							" × ",
							l.qty
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums",
							children: money(l.line, lang)
						})]
					}, l.sku))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 flex justify-between font-display text-xl font-bold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: L(lang, "الإجمالي", "Total") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular-nums",
						children: money(total, lang)
					})]
				})
			]
		})]
	}) });
}
function Field({ name, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1 block font-medium",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			name,
			className: "w-full rounded-xl border border-line bg-surface px-3 py-2.5"
		})]
	});
}
//#endregion
export { CheckoutPage as component };
