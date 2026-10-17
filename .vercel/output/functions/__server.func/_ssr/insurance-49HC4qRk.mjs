import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, X as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as branchById, f as insurers, g as useBendary, m as money, n as L, p as members, r as Shell } from "./shell-DcyxnXUU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/insurance-49HC4qRk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function InsurancePage() {
	const lang = useBendary((s) => s.lang);
	const memberId = useBendary((s) => s.memberId);
	const setMember = useBendary((s) => s.setMember);
	const [typed, setTyped] = (0, import_react.useState)(memberId ?? "");
	const [error, setError] = (0, import_react.useState)("");
	const member = members.find((m) => m.id === memberId);
	const branch = member ? branchById(member.branchId) : void 0;
	function onSubmit(e) {
		e.preventDefault();
		const id = typed.trim().toUpperCase();
		const hit = members.find((m) => m.id === id);
		if (!hit) {
			setError(L(lang, "رقم العضوية غير معروف في العينة.", "That member id is not in the sample book."));
			setMember(null);
			return;
		}
		setError("");
		setMember(hit.id);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-wide text-red",
				children: L(lang, "فاتورة مباشرة", "Direct billing")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-extrabold",
				children: L(lang, "دخول عضو التأمين", "Insurance member sign-in")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: L(lang, "أكثر من ٢٥ شركة. العينة أدناه تفتح بطاقة التغطية المحفوظة على هذا الجهاز — ليست بوابة شركة التأمين نفسها.", "More than 25 companies. The sample ids below open a coverage card kept on this device — not the insurer’s own portal.")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "mt-5 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: typed,
					onChange: (e) => setTyped(e.target.value),
					placeholder: "BND-AXA-20481",
					className: "min-w-0 flex-1 rounded-full border border-line bg-surface px-4 py-2.5"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "rounded-full bg-red px-4 py-2.5 text-sm font-semibold text-paper",
					children: L(lang, "دخول", "Sign in")
				})]
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-red-deep",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-1 text-xs text-muted",
				children: members.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "underline",
						onClick: () => setTyped(m.id),
						children: m.id
					}),
					" ",
					"— ",
					lang === "ar" ? m.nameAr : m.nameEn
				] }, m.id))
			}),
			member && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "mt-6 rounded-card border border-line bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold text-red",
						children: member.insurer
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-bold",
						children: lang === "ar" ? member.nameAr : member.nameEn
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: lang === "ar" ? member.planAr : member.planEn
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-4 grid grid-cols-2 gap-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: L(lang, "المشاركة", "Copay")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "font-semibold",
								children: member.copay
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: L(lang, "المتبقي", "Remaining")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "font-semibold tabular-nums",
								children: money(member.limit - member.used, lang)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted",
									children: L(lang, "فرع الفاتورة المعتاد", "Usual billing branch")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-semibold",
									children: branch ? lang === "ar" ? branch.nameAr : branch.nameEn : "—"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 h-2 overflow-hidden rounded-full bg-sand",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full bg-leaf",
							style: { width: `${Math.min(100, member.used / member.limit * 100)}%` }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setMember(null),
						className: "mt-4 text-sm text-muted underline",
						children: L(lang, "خروج", "Sign out")
					})
				]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-xl font-bold",
			children: L(lang, "شركاء ظاهرون", "Named partners")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 grid grid-cols-2 gap-2",
			children: insurers.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "rounded-2xl border border-line bg-surface px-3 py-3 text-sm font-medium",
				children: name
			}, name))
		})] })]
	}) });
}
//#endregion
export { InsurancePage as component };
