import { Link } from "@tanstack/react-router";
import { Menu, Phone, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { brand } from "@/data/brand";
import { useCartStore } from "@/stores/cartStore";

const publicNav = [
  { to: "/", label: "الرئيسية" },
  { to: "/store", label: "المتجر" },
  { to: "/branches", label: "الفروع" },
  { to: "/track", label: "تتبع الطلب" },
  { to: "/assistant", label: "المساعد الذكي" },
] as const;

const staffNav = [
  { to: "/ops", label: "لوحة العمليات" },
  { to: "/ops/inventory", label: "المخزون" },
  { to: "/ops/purchasing", label: "المشتريات" },
  { to: "/ops/hr", label: "الطاقم" },
  { to: "/ops/sop", label: "الإجراءات" },
  { to: "/ops/dispatch", label: "التوصيل" },
  { to: "/ops/inbox", label: "مركز الاتصال" },
  { to: "/ops/import", label: "استيراد المنتجات" },
] as const;

export function SiteHeader({ area = "public" }: { area?: "public" | "staff" }) {
  const [openMenu, setOpenMenu] = useState(false);
  const setOpen = useCartStore((s) => s.setOpen);
  const count = useCartStore((s) => s.items.reduce((n, i) => n + i.quantity, 0));
  const cart = { setOpen, count };
  const nav = area === "staff" ? staffNav : publicNav;

  return (
    <header className="sticky top-0 z-40 border-b bg-card/95 backdrop-blur">
      <div className="bg-navy text-navy-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-1.5 text-xs">
          <p>
            صيدليات البنداري · EL-BENDARY PHARMACIES — خدمة ٢٤ ساعة وتوصيل لكل الفروع
          </p>
          <div className="flex items-center gap-4">
            <a href={`tel:${brand.hotline}`} className="flex items-center gap-1 font-bold">
              <Phone className="size-3.5 text-brand" /> {brand.hotline}
            </a>
            <span className="hidden sm:inline">شكاوى: {brand.complaints}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "bg-accent text-brand" }}
              className="rounded-lg px-3 py-2 text-sm font-bold text-foreground/80 transition hover:bg-accent hover:text-brand"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to={area === "staff" ? "/" : "/ops"}
            className="hidden rounded-lg border px-3 py-2 text-xs font-bold sm:block"
          >
            {area === "staff" ? "الموقع العام" : "بوابة الفريق"}
          </Link>
          <button
            onClick={() => cart.setOpen(true)}
            className="relative rounded-lg bg-brand px-3 py-2 text-brand-foreground"
            aria-label="سلة المشتريات"
          >
            <ShoppingCart className="size-4" />
            {cart.count > 0 && (
              <span className="absolute -top-1 -left-1 rounded-full bg-navy px-1.5 text-[10px] font-bold text-navy-foreground">
                {cart.count}
              </span>
            )}
          </button>
          <button
            className="rounded-lg border p-2 lg:hidden"
            onClick={() => setOpenMenu((v) => !v)}
            aria-label="القائمة"
          >
            {openMenu ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {openMenu && (
        <nav className="grid gap-1 border-t px-4 py-3 lg:hidden">
          {[...publicNav, ...staffNav].map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpenMenu(false)}
              className="rounded-lg px-3 py-2 text-sm font-bold hover:bg-accent"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
