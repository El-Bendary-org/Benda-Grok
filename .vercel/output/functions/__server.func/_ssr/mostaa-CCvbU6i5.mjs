import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, X as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as useBendary, n as L, r as Shell } from "./shell-DcyxnXUU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mostaa-CCvbU6i5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var typeLabel = {
	whatsapp: ["واتساب", "WhatsApp"],
	messenger: ["ماسنجر", "Messenger"],
	instagram: ["إنستجرام", "Instagram"],
	web: ["الموقع", "Web"],
	voice: ["صوت", "Voice"],
	sms: ["رسائل", "SMS"]
};
function MostaaPage() {
	const lang = useBendary((s) => s.lang);
	const channels = useBendary((s) => s.channels);
	const conversations = useBendary((s) => s.conversations);
	const tenders = useBendary((s) => s.tenders);
	const toggle = useBendary((s) => s.toggleChannel);
	const reply = useBendary((s) => s.reply);
	const setAssignee = useBendary((s) => s.setAssignee);
	const setStatus = useBendary((s) => s.setConvoStatus);
	const markTender = useBendary((s) => s.markTender);
	const [tab, setTab] = (0, import_react.useState)("inbox");
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [active, setActive] = (0, import_react.useState)(conversations[0]?.id ?? "");
	const [draft, setDraft] = (0, import_react.useState)("");
	const visible = conversations.filter((c) => filter === "all" || c.channelId === filter);
	const current = conversations.find((c) => c.id === active) ?? visible[0];
	const channel = channels.find((c) => c.id === current?.channelId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-[0.16em] text-red",
						children: "MOSTAA-CHAT · BENDARY WORKSPACE"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 font-display text-4xl font-extrabold",
						children: L(lang, "مكتب القنوات", "Omnichannel desk")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-sm text-muted",
						children: L(lang, "مساحة صيدليات البنداري داخل MoSTaa-ChaT. شات الموقع والطلبات والروشتات تصل هنا. ربط واتساب للأعمال وماسنجر وإنستجرام والصوت يتم بمفاتيح ميتا وTwilio عند الإطلاق.", "El-Bendary’s workspace inside MoSTaa-ChaT. Website chat, orders, and prescriptions arrive here. WhatsApp Business, Messenger, Instagram, and voice attach with Meta and Twilio keys at launch.")
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-2",
					children: [
						"inbox",
						"channels",
						"payments"
					].map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setTab(id),
						className: `rounded-full px-3 py-1.5 text-sm font-semibold ${tab === id ? "bg-ink text-paper" : "bg-sand"}`,
						children: L(lang, {
							inbox: "الوارد",
							channels: "القنوات",
							payments: "المدفوعات"
						}[id], {
							inbox: "Inbox",
							channels: "Channels",
							payments: "Payments"
						}[id])
					}, id))
				})]
			}),
			tab === "channels" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 grid gap-3 md:grid-cols-2",
				children: channels.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center justify-between gap-3 rounded-card border border-line bg-surface p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold text-red",
							children: L(lang, typeLabel[c.type][0], typeLabel[c.type][1])
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold",
							children: lang === "ar" ? c.nameAr : c.nameEn
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: c.handle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: c.status === "live" ? L(lang, "متصل بالمعاينة", "Connected in preview") : L(lang, "بانتظار مفاتيح الإطلاق", "Waiting on launch keys")
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => toggle(c.id),
						className: `rounded-full px-3 py-1.5 text-xs font-semibold ${c.enabled ? "bg-leaf text-paper" : "bg-sand"}`,
						children: c.enabled ? L(lang, "يعمل", "On") : L(lang, "متوقف", "Off")
					})]
				}, c.id))
			}),
			tab === "payments" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-2",
				children: tenders.map((tender) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-surface px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-semibold",
						children: [
							tender.method,
							" · ",
							tender.ref
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: lang === "ar" ? tender.noteAr : tender.noteEn
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "tabular-nums font-semibold",
							children: [
								tender.amount,
								" ",
								L(lang, "ج.م", "EGP")
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => markTender(tender.id, tender.status === "paid" ? "pending" : "paid"),
							className: `rounded-full px-3 py-1 text-xs font-semibold ${tender.status === "paid" ? "bg-leaf-soft text-leaf" : "bg-red-soft text-red-deep"}`,
							children: tender.status === "paid" ? L(lang, "مدفوع", "Paid") : L(lang, "بانتظار التأكيد", "Pending")
						})]
					})]
				}, tender.id))
			}),
			tab === "inbox" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-3 md:grid-cols-[16rem_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-card border border-line bg-surface",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-1 overflow-x-auto border-b border-line p-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Filter, {
							id: "all",
							current: filter,
							set: setFilter,
							label: L(lang, "الكل", "All")
						}), channels.filter((c) => c.enabled).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Filter, {
							id: c.id,
							current: filter,
							set: setFilter,
							label: L(lang, typeLabel[c.type][0], typeLabel[c.type][1])
						}, c.id))]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "max-h-[32rem] overflow-y-auto",
						children: [visible.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActive(c.id),
							className: `block w-full px-3 py-3 text-start ${current?.id === c.id ? "bg-sand" : ""}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold",
								children: c.customer
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-xs text-muted",
								children: lang === "ar" ? c.topicAr : c.topicEn
							})]
						}) }, c.id)), visible.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "p-4 text-sm text-muted",
							children: L(lang, "لا رسائل.", "No threads.")
						})]
					})]
				}), current && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "flex min-h-[32rem] flex-col rounded-card border border-line bg-surface",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
							className: "flex flex-wrap items-center justify-between gap-2 border-b border-line px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: current.customer
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted",
								children: [
									channel ? lang === "ar" ? channel.nameAr : channel.nameEn : "",
									" · ",
									lang === "ar" ? current.topicAr : current.topicEn
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setAssignee(current.id, "مي"),
									className: "rounded-full bg-sand px-3 py-1 text-xs font-semibold",
									children: current.assignee ? current.assignee : L(lang, "إسناد إلى مي", "Assign Mai")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setStatus(current.id, current.status === "closed" ? "open" : "closed"),
									className: "rounded-full bg-sand px-3 py-1 text-xs font-semibold",
									children: current.status === "closed" ? L(lang, "إعادة فتح", "Reopen") : L(lang, "إغلاق", "Close")
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex-1 space-y-2 overflow-y-auto bg-paper p-4",
							children: current.messages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `max-w-[80%] rounded-2xl px-3 py-2 text-sm ${m.direction === "in" ? "bg-surface" : "ms-auto bg-ink text-paper"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: m.text }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `mt-1 text-xs ${m.direction === "in" ? "text-muted" : "text-sand"}`,
									children: m.sender
								})]
							}, m.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "flex gap-2 border-t border-line p-3",
							onSubmit: (e) => {
								e.preventDefault();
								if (!draft.trim()) return;
								reply(current.id, draft.trim());
								setDraft("");
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: draft,
								onChange: (e) => setDraft(e.target.value),
								placeholder: L(lang, "رد الصيدلي", "Pharmacist reply"),
								className: "min-w-0 flex-1 rounded-full border border-line bg-paper px-4 py-2.5 text-sm"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "rounded-full bg-red px-4 py-2 text-sm font-semibold text-paper",
								children: L(lang, "إرسال", "Send")
							})]
						})
					]
				})]
			})
		]
	}) });
}
function Filter({ id, current, set, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: () => set(id),
		className: `shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${current === id ? "bg-ink text-paper" : "text-muted"}`,
		children: label
	});
}
//#endregion
export { MostaaPage as component };
