import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Shell } from "@/components/shell";
import { branches } from "@/data/network";
import { L, useBendary } from "@/lib/store";

export const Route = createFileRoute("/branches")({
  head: () => ({ meta: [{ title: "الفروع | El-Bendary" }] }),
  component: BranchesPage,
});

function BranchesPage() {
  const lang = useBendary((s) => s.lang);
  const [region, setRegion] = useState<"all" | "tanta" | "cairo" | "coast">("all");
  const list = branches.filter((b) => region === "all" || b.region === region);
  const filters = [
    ["all", "الكل", "All"],
    ["tanta", "طنطا", "Tanta"],
    ["cairo", "القاهرة والجيزة", "Cairo & Giza"],
    ["coast", "الساحل", "Coast"],
  ] as const;

  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="font-display text-4xl font-extrabold">{L(lang, "الفروع", "Branches")}</h1>
        <p className="mt-2 max-w-2xl text-muted">
          {L(
            lang,
            "العناوين المنشورة لفروع البنداري. الخط الموحّد يؤكد أقرب وردية إذا تغيّر دوام فرع.",
            "Published Bendary counters. The hotline confirms the nearest shift if a branch’s hours change.",
          )}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {filters.map(([id, ar, en]) => (
            <button
              key={id}
              type="button"
              onClick={() => setRegion(id)}
              className={`rounded-full px-3 py-1.5 text-sm font-semibold ${region === id ? "bg-ink text-paper" : "bg-sand"}`}
            >
              {L(lang, ar, en)}
            </button>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {list.map((b) => (
            <article key={b.id} className="rounded-card border border-line bg-surface p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold text-red">{lang === "ar" ? b.cityAr : b.cityEn}</p>
                {b.main && <span className="text-xs font-semibold text-leaf">{L(lang, "الفرع الرئيسي", "Main branch")}</span>}
              </div>
              <h2 className="mt-1 font-display text-2xl font-bold">{lang === "ar" ? b.nameAr : b.nameEn}</h2>
              <p className="mt-2 flex gap-2 text-sm text-muted">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                {lang === "ar" ? b.addressAr : b.addressEn}
              </p>
              <p className="mt-2 text-sm">{lang === "ar" ? b.hoursAr : b.hoursEn}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                {b.phone && (
                  <a href={`tel:${b.phone}`} className="inline-flex items-center gap-1 rounded-full border border-line px-3 py-1.5">
                    <Phone className="size-3.5" />
                    {b.phone}
                  </a>
                )}
                {b.phone2 && (
                  <a href={`tel:${b.phone2}`} className="rounded-full border border-line px-3 py-1.5">
                    {b.phone2}
                  </a>
                )}
                <a
                  href={`https://wa.me/${b.whatsapp}`}
                  className="rounded-full bg-leaf px-3 py-1.5 font-semibold text-paper"
                >
                  WhatsApp
                </a>
                <a href={b.maps} className="rounded-full border border-line px-3 py-1.5">
                  {L(lang, "الخريطة", "Map")}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Shell>
  );
}
