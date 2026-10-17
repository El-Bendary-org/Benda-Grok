import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Shell } from "@/components/shell";
import { branches } from "@/data/network";
import { L, useBendary } from "@/lib/store";

export const Route = createFileRoute("/prescription")({
  head: () => ({ meta: [{ title: "الروشتة | El-Bendary" }] }),
  component: RxPage,
});

function RxPage() {
  const lang = useBendary((s) => s.lang);
  const addRx = useBendary((s) => s.addRx);
  const rxs = useBendary((s) => s.rxs);
  const [done, setDone] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
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
    const rx = addRx({ name, phone, branchId, note, fileName });
    setDone(rx.id);
    setError("");
    e.currentTarget.reset();
    setFileName("");
  }

  return (
    <Shell>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold tracking-wide text-red">{L(lang, "صرف بروشتة", "Dispensing")}</p>
          <h1 className="mt-2 font-display text-4xl font-extrabold">{L(lang, "ارفع الروشتة.", "Upload the rosheta.")}</h1>
          <p className="mt-3 text-muted">
            {L(
              lang,
              "الصورة تصل إلى طابور MoSTaa-ChaT. صيدلي الوردية يراجعها قبل أي تجهيز. لا يُصرف دواء بوصفة من الشات وحده.",
              "The image lands in the MoSTaa-ChaT queue. The pharmacist on shift reviews it before anything is prepared. Chat alone never dispenses a prescription medicine.",
            )}
          </p>
          <form onSubmit={onSubmit} className="mt-6 space-y-3">
            <label className="block text-sm">
              <span className="mb-1 block font-medium">{L(lang, "الاسم", "Name")}</span>
              <input name="name" className="w-full rounded-xl border border-line bg-surface px-3 py-2.5" />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium">{L(lang, "الهاتف", "Phone")}</span>
              <input name="phone" className="w-full rounded-xl border border-line bg-surface px-3 py-2.5" />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium">{L(lang, "الفرع", "Branch")}</span>
              <select name="branch" className="w-full rounded-xl border border-line bg-surface px-3 py-2.5" defaultValue="galaa-1">
                {branches.map((b) => (
                  <option key={b.id} value={b.id}>
                    {lang === "ar" ? b.nameAr : b.nameEn}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium">{L(lang, "صورة الروشتة", "Prescription image")}</span>
              <input
                type="file"
                accept="image/*,.pdf"
                className="w-full text-sm"
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
              />
              {fileName && <span className="mt-1 block text-xs text-muted">{fileName}</span>}
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium">{L(lang, "ملاحظات", "Notes")}</span>
              <textarea name="note" rows={3} className="w-full rounded-xl border border-line bg-surface px-3 py-2.5" />
            </label>
            {error && <p className="text-sm text-red-deep">{error}</p>}
            <button type="submit" className="rounded-full bg-red px-5 py-3 text-sm font-semibold text-paper">
              {L(lang, "إرسال للصيدلي", "Send to the pharmacist")}
            </button>
          </form>
          {done && (
            <p className="mt-4 rounded-2xl bg-leaf-soft px-4 py-3 text-sm text-leaf">
              {L(lang, `تم الاستلام ${done}. تابعها من المكتب أو من التتبع.`, `Received ${done}. Follow it on the desk or tracking.`)}{" "}
              <Link to="/mostaa" className="font-semibold underline">
                MoSTaa-ChaT
              </Link>
            </p>
          )}
        </div>
        <aside>
          <h2 className="font-display text-xl font-bold">{L(lang, "طلباتك على هذا الجهاز", "Requests on this device")}</h2>
          <ul className="mt-3 space-y-2">
            {rxs.length === 0 && <li className="text-sm text-muted">{L(lang, "لا توجد روشتات بعد.", "No prescriptions yet.")}</li>}
            {rxs.map((rx) => (
              <li key={rx.id} className="rounded-2xl border border-line bg-surface px-4 py-3 text-sm">
                <p className="font-semibold">{rx.id}</p>
                <p className="text-muted">
                  {rx.name} · {rx.fileName || L(lang, "بدون ملف", "no file")}
                </p>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Shell>
  );
}
