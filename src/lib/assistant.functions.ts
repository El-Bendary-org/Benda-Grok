import { createServerFn } from "@tanstack/react-start";

type Turn = { role: "user" | "assistant"; content: string };

const MAX_TURNS = 6;
const MAX_CHARS = 800;

function clean(input: unknown): { lang: "ar" | "en"; messages: Turn[] } {
  if (!input || typeof input !== "object") {
    throw new Error("Invalid request");
  }
  const raw = input as { lang?: unknown; messages?: unknown };
  const lang = raw.lang === "en" ? "en" : "ar";
  if (!Array.isArray(raw.messages) || raw.messages.length === 0) {
    throw new Error("Write a question first");
  }
  const messages: Turn[] = [];
  for (const item of raw.messages.slice(-MAX_TURNS)) {
    if (!item || typeof item !== "object") continue;
    const turn = item as { role?: unknown; content?: unknown };
    const role = turn.role === "assistant" ? "assistant" : "user";
    const content = typeof turn.content === "string" ? turn.content.trim().slice(0, MAX_CHARS) : "";
    if (!content) continue;
    messages.push({ role, content });
  }
  if (!messages.some((m) => m.role === "user")) throw new Error("Write a question first");
  return { lang, messages };
}

export const askPharmacist = createServerFn({ method: "POST" })
  .validator((input: unknown) => clean(input))
  .handler(async ({ data }) => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) {
      return { ok: false as const, error: "unavailable" as const };
    }

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
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-4.5",
        temperature: 0.3,
        max_tokens: 420,
        messages: [{ role: "system", content: system }, ...data.messages],
      }),
    });

    if (!res.ok) {
      return { ok: false as const, error: "upstream" as const };
    }
    const body = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const text = body.choices?.[0]?.message?.content?.trim() ?? "";
    if (!text) return { ok: false as const, error: "upstream" as const };
    return { ok: true as const, text };
  });
