import logo from "@/assets/bendar-logo.jpg.asset.json";
import { brand } from "@/data/brand";

export function Logo({ size = 48, showText = true }: { size?: number; showText?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={logo.url}
        alt="شعار صيدليات البنداري - EL-BENDARY PHARMACIES"
        width={size}
        height={size}
        className="rounded-lg bg-white object-contain p-0.5"
        style={{ width: size, height: size }}
      />
      {showText && (
        <div className="leading-tight">
          <p className="text-base font-extrabold">{brand.nameAr}</p>
          <p className="text-[10px] tracking-widest text-brand">
            EL-BENDARY PHARMACIES · SINCE 1980
          </p>
        </div>
      )}
    </div>
  );
}
