import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, X as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as useBendary, n as L, o as branches, r as Shell } from "./shell-DcyxnXUU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/prescription-BzbRtwes.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function RxPage() {
	const lang = useBendary((s) => s.lang);
	const addRx = useBendary((s) => s.addRx);
	const rxs = useBendary((s) => s.rxs);
	const [done, setDone] = (0, import_react.useState)(null);
	const [fileName, setFileName] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	function onSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const name = String(data.get("name") || "").trim();
		const phone = String(data.get("phone") || "").trim();
		const branchId = String(data.get("branch") || "galaa-1");
		const note = String(data.get("note") || "").trim();
		if (name.length < 2 || phone.length < 8) {
			setError(L(lang, "الاسم والهاتف مطلوبان.", "Name and phone are required."));
			return;
		}
		const rx = addRx({
			name,
			phone,
			branchId,
			note,
			fileName
		});
		setDone(rx.id);
		setError("");
		e.currentTarget.reset();
		setFileName("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-wide text-red",
				children: L(lang, "صرف بروشتة", "Dispensing")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-extrabold",
				children: L(lang, "ارفع الروشتة.", "Upload the rosheta.")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: L(lang, "الصورة تصل إلى طابور MoSTaa-ChaT. صيدلي الوردية يراجعها قبل أي تجهيز. لا يُصرف دواء بوصفة من الشات وحده.", "The image lands in the MoSTaa-ChaT queue. The pharmacist on shift reviews it before anything is prepared. Chat alone never dispenses a prescription medicine.")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "mt-6 space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1 block font-medium",
							children: L(lang, "الاسم", "Name")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "name",
							className: "w-full rounded-xl border border-line bg-surface px-3 py-2.5"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1 block font-medium",
							children: L(lang, "الهاتف", "Phone")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "phone",
							className: "w-full rounded-xl border border-line bg-surface px-3 py-2.5"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1 block font-medium",
							children: L(lang, "الفرع", "Branch")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							name: "branch",
							className: "w-full rounded-xl border border-line bg-surface px-3 py-2.5",
							defaultValue: "galaa-1",
							children: branches.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: b.id,
								children: lang === "ar" ? b.nameAr : b.nameEn
							}, b.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-1 block font-medium",
								children: L(lang, "صورة الروشتة", "Prescription image")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "file",
								accept: "image/*,.pdf",
								className: "w-full text-sm",
								onChange: (e) => setFileName(e.target.files?.[0]?.name ?? "")
							}),
							fileName && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-xs text-muted",
								children: fileName
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1 block font-medium",
							children: L(lang, "ملاحظات", "Notes")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							name: "note",
							rows: 3,
							className: "w-full rounded-xl border border-line bg-surface px-3 py-2.5"
						})]
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-red-deep",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "rounded-full bg-red px-5 py-3 text-sm font-semibold text-paper",
						children: L(lang, "إرسال للصيدلي", "Send to the pharmacist")
					})
				]
			}),
			done && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 rounded-2xl bg-leaf-soft px-4 py-3 text-sm text-leaf",
				children: [
					L(lang, `تم الاستلام ${done}. تابعها من المكتب أو من التتبع.`, `Received ${done}. Follow it on the desk or tracking.`),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/mostaa",
						className: "font-semibold underline",
						children: "MoSTaa-ChaT"
					})
				]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-xl font-bold",
			children: L(lang, "طلباتك على هذا الجهاز", "Requests on this device")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "mt-3 space-y-2",
			children: [rxs.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "text-sm text-muted",
				children: L(lang, "لا توجد روشتات بعد.", "No prescriptions yet.")
			}), rxs.map((rx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-2xl border border-line bg-surface px-4 py-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold",
					children: rx.id
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-muted",
					children: [
						rx.name,
						" · ",
						rx.fileName || L(lang, "بدون ملف", "no file")
					]
				})]
			}, rx.id))]
		})] })]
	}) });
}
//#endregion
export { RxPage as component };
