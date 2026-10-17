import { Megaphone } from "lucide-react";

type Props = {
  zone: string;
  label?: string;
  variant?: "strip" | "box" | "wide" | "spotlight";
  className?: string;
};

const heights = {
  strip: "h-16",
  box: "h-56",
  wide: "h-28",
  spotlight: "h-40",
};

export function AdSlot({ zone, label, variant = "wide", className = "" }: Props) {
  return (
    <div
      data-ad-zone={zone}
      className={`flex ${heights[variant]} w-full items-center justify-center gap-3 rounded-xl border border-dashed border-brand/40 bg-accent/60 px-4 text-center ${className}`}
    >
      <Megaphone className="size-5 shrink-0 text-brand" />
      <div className="leading-tight">
        <p className="text-sm font-bold text-brand">{label ?? "مساحة إعلانية"}</p>
        <p className="text-[11px] text-muted-foreground">
          Ad Zone: {zone} — متاحة لإعلانات الشركاء الدوائيين
        </p>
      </div>
    </div>
  );
}
