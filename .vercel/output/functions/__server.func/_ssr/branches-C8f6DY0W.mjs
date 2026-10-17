import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, X as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Phone, m as MapPin } from "../_libs/lucide-react.mjs";
import { g as useBendary, n as L, o as branches, r as Shell } from "./shell-DcyxnXUU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/branches-C8f6DY0W.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BranchesPage() {
	const lang = useBendary((s) => s.lang);
	const [region, setRegion] = (0, import_react.useState)("all");
	const list = branches.filter((b) => region === "all" || b.region === region);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-extrabold",
				children: L(lang, "الفروع", "Branches")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-muted",
				children: L(lang, "العناوين المنشورة لفروع البنداري. الخط الموحّد يؤكد أقرب وردية إذا تغيّر دوام فرع.", "Published Bendary counters. The hotline confirms the nearest shift if a branch’s hours change.")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 flex flex-wrap gap-2",
				children: [
					[
						"all",
						"الكل",
						"All"
					],
					[
						"tanta",
						"طنطا",
						"Tanta"
					],
					[
						"cairo",
						"القاهرة والجيزة",
						"Cairo & Giza"
					],
					[
						"coast",
						"الساحل",
						"Coast"
					]
				].map(([id, ar, en]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setRegion(id),
					className: `rounded-full px-3 py-1.5 text-sm font-semibold ${region === id ? "bg-ink text-paper" : "bg-sand"}`,
					children: L(lang, ar, en)
				}, id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-4 md:grid-cols-2",
				children: list.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-card border border-line bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold text-red",
								children: lang === "ar" ? b.cityAr : b.cityEn
							}), b.main && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold text-leaf",
								children: L(lang, "الفرع الرئيسي", "Main branch")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-2xl font-bold",
							children: lang === "ar" ? b.nameAr : b.nameEn
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 flex gap-2 text-sm text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0" }), lang === "ar" ? b.addressAr : b.addressEn]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm",
							children: lang === "ar" ? b.hoursAr : b.hoursEn
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-wrap gap-2 text-sm",
							children: [
								b.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `tel:${b.phone}`,
									className: "inline-flex items-center gap-1 rounded-full border border-line px-3 py-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3.5" }), b.phone]
								}),
								b.phone2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${b.phone2}`,
									className: "rounded-full border border-line px-3 py-1.5",
									children: b.phone2
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `https://wa.me/${b.whatsapp}`,
									className: "rounded-full bg-leaf px-3 py-1.5 font-semibold text-paper",
									children: "WhatsApp"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: b.maps,
									className: "rounded-full border border-line px-3 py-1.5",
									children: L(lang, "الخريطة", "Map")
								})
							]
						})
					]
				}, b.id))
			})
		]
	}) });
}
//#endregion
export { BranchesPage as component };
