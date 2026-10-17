import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { CartDrawer } from "./CartDrawer";
import { AdSlot } from "./AdSlot";

export function PageShell({
  children,
  area = "public",
  title,
  subtitle,
  topAdZone = "top-strip",
}: {
  children: ReactNode;
  area?: "public" | "staff";
  title?: string;
  subtitle?: string;
  topAdZone?: string;
}) {
  return (
    <div className="min-h-screen">
      <SiteHeader area={area} />
      <div className="mx-auto max-w-7xl px-4 pt-4">
        <AdSlot zone={topAdZone} variant="strip" label="إعلان أعلى الصفحة" />
      </div>
      {title && (
        <div className="mx-auto max-w-7xl px-4 pt-6">
          <h1 className="text-3xl font-extrabold text-navy dark:text-foreground">{title}</h1>
          {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
        </div>
      )}
      <main className="mx-auto max-w-7xl px-4 py-6">{children}</main>
      <SiteFooter />
      <CartDrawer />
    </div>
  );
}
