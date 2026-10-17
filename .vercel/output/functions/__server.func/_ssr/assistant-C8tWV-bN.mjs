import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, X as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { g as useBendary, n as L, r as Shell } from "./shell-DcyxnXUU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/assistant-C8tWV-bN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var MAX_CHARS = 800;
function clean(input) {
	if (!input || typeof input !== "object") throw new Error("Invalid request");
	const raw = input;
	const lang = raw.lang === "en" ? "en" : "ar";
	if (!Array.isArray(raw.messages) || raw.messages.length === 0) throw new Error("Write a question first");
	const messages = [];
	for (const item of raw.messages.slice(-6)) {
		if (!item || typeof item !== "object") continue;
		const turn = item;
		const role = turn.role === "assistant" ? "assistant" : "user";
		const content = typeof turn.content === "string" ? turn.content.trim().slice(0, MAX_CHARS) : "";
		if (!content) continue;
		messages.push({
			role,
			content
		});
	}
	if (!messages.some((m) => m.role === "user")) throw new Error("Write a question first");
	return {
		lang,
		messages
	};
}
var askPharmacist = createServerFn({ method: "POST" }).validator((input) => clean(input)).handler(createSsrRpc("e178474defbcf30bb80eeeb1b11b9767836d5591a718ed5db1c5b801ea0da1ec"));
var prompts = {
	ar: [
		"عندي حموضة بعد الأكل، إيه المتاح من غير روشتة؟",
		"طفلي أنفه مسدود، هل النقط الملحية مناسبة؟",
		"عايز أرفع روشتة هيلسيك، أعمل إيه؟"
	],
	en: [
		"Heartburn after meals — what is on the shelf without a prescription?",
		"My child’s nose is blocked. Are saline drops reasonable?",
		"I need Healsec. How do I send the prescription?"
	]
};
function AssistantPage() {
	const lang = useBendary((s) => s.lang);
	const [messages, setMessages] = (0, import_react.useState)([]);
	const [text, setText] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	async function ask(content) {
		const next = [...messages, {
			role: "user",
			content
		}];
		setMessages(next);
		setText("");
		setBusy(true);
		setError("");
		try {
			const res = await askPharmacist({ data: {
				lang,
				messages: next
			} });
			if (!res.ok) {
				setError(res.error === "unavailable" ? L(lang, "المساعد غير متاح في هذه البيئة. اتصل بالخط الساخن 01200400094.", "The assistant is not available in this environment. Call 01200400094.") : L(lang, "تعذر الرد الآن. حاول مرة واحدة بعد قليل.", "The desk could not answer. Try once more shortly."));
				return;
			}
			setMessages([...next, {
				role: "assistant",
				content: res.text
			}]);
		} catch {
			setError(L(lang, "تعذر الاتصال بالمساعد.", "Could not reach the assistant."));
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-wide text-red",
				children: L(lang, "إرشاد لا تشخيص", "Guidance, not a diagnosis")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-extrabold",
				children: L(lang, "الصيدلي على المكتب", "Pharmacist on the desk")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: L(lang, "يسأل عن الأصناف المتاحة ويحوّل الروشتة والطوارئ للبشر. في ضيق التنفس أو ألم الصدر اتصل بـ ١٢٣.", "It can talk through shelf items and sends prescriptions and emergencies to people. For trouble breathing or chest pain, call 123.")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: prompts[lang].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: busy,
					onClick: () => void ask(p),
					className: "rounded-full bg-sand px-3 py-1.5 text-start text-xs font-medium",
					children: p
				}, p))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 space-y-3",
				children: [
					messages.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `max-w-[90%] rounded-2xl px-4 py-3 text-sm ${m.role === "user" ? "ms-auto bg-ink text-paper" : "bg-surface border border-line"}`,
						children: m.content
					}, i)),
					busy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: L(lang, "الصيدلي يراجع…", "The pharmacist is reading…")
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-red-deep",
						children: error
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-4 flex gap-2",
				onSubmit: (e) => {
					e.preventDefault();
					if (text.trim() && !busy) ask(text.trim());
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: text,
					onChange: (e) => setText(e.target.value),
					maxLength: 800,
					placeholder: L(lang, "سؤالك للصيدلي", "Your question"),
					className: "min-w-0 flex-1 rounded-full border border-line bg-surface px-4 py-2.5"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: busy || !text.trim(),
					className: "rounded-full bg-red px-4 py-2.5 text-sm font-semibold text-paper disabled:opacity-40",
					children: L(lang, "إرسال", "Send")
				})]
			})
		]
	}) });
}
//#endregion
export { AssistantPage as component };
