import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/assistant.functions-B-4Oay7G.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
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
var askPharmacist_createServerFn_handler = createServerRpc({
	id: "e178474defbcf30bb80eeeb1b11b9767836d5591a718ed5db1c5b801ea0da1ec",
	name: "askPharmacist",
	filename: "src/lib/assistant.functions.ts"
}, (opts) => askPharmacist.__executeServer(opts));
var askPharmacist = createServerFn({ method: "POST" }).validator((input) => clean(input)).handler(askPharmacist_createServerFn_handler, async ({ data }) => {
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		ok: false,
		error: "unavailable"
	};
	const system = `You are the counselling pharmacist on the El-Bendary Pharmacies desk (صيدليات البنداري, Egypt, since 1980).
Rules:
- Reply in ${data.lang === "ar" ? "Arabic" : "English"} only.
- You do not diagnose, you do not prescribe prescription-only medicines, and you do not invent doses for children, pregnancy, or chronic disease.
- For chest pain, trouble breathing, severe allergic reaction, unconsciousness, heavy bleeding, or suspected poisoning, tell the person to call Egyptian ambulance 123 now.
- For prescription items (including Healsec / omeprazole products), tell them to upload the rosheta on this site or call 01200400094.
- You may mention OTC items the chain actually shelves when relevant: Gaviscon, Vaseline, vitamin D, saline drops, thermometers. Suggest a pharmacist at the branch confirms fit.
- Keep the answer under 160 words. Plain sentences. No markdown headings. End with one short line that this is guidance, not a medical diagnosis.
- Hotline 01200400094. Complaints 01200400089. Branches in Tanta, Giza, New Cairo, 6th of October, and a seasonal North Coast counter.`;
	const res = await fetch("https://api.x.ai/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			model: "grok-4.5",
			temperature: .3,
			max_tokens: 420,
			messages: [{
				role: "system",
				content: system
			}, ...data.messages]
		})
	});
	if (!res.ok) return {
		ok: false,
		error: "upstream"
	};
	const text = (await res.json()).choices?.[0]?.message?.content?.trim() ?? "";
	if (!text) return {
		ok: false,
		error: "upstream"
	};
	return {
		ok: true,
		text
	};
});
//#endregion
export { askPharmacist_createServerFn_handler };
