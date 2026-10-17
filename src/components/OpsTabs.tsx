import { Link } from "@tanstack/react-router";
import { RoleSwitcher, useRole, type OpsSection } from "@/lib/rbac";

const tabs: { to: string; label: string; section: OpsSection }[] = [
  { to: "/ops", label: "اللوحة الرئيسية", section: "dashboard" },
  { to: "/ops/inventory", label: "المخزون", section: "inventory" },
  { to: "/ops/purchasing", label: "المشتريات", section: "purchasing" },
  { to: "/ops/import", label: "استيراد المنتجات", section: "import" },
  { to: "/ops/sync", label: "المزامنة (Pharmasyst)", section: "sync" },
  { to: "/ops/inbox", label: "مركز الاتصال", section: "inbox" },
  { to: "/ops/dispatch", label: "التوصيل", section: "dispatch" },
  { to: "/ops/sop", label: "الإجراءات", section: "sop" },
  { to: "/ops/hr", label: "الطاقم", section: "hr" },
];

export function OpsTabs() {
  const { can, info, scopedBranch } = useRole();

  return (
    <div className="space-y-3">
      <nav className="flex flex-wrap gap-2 rounded-2xl border bg-card p-2 shadow-card">
        {tabs.map((t) => {
          const allowed = can(t.section);
          return (
            <Link
              key={t.to}
              to={t.to}
              activeOptions={{ exact: t.to === "/ops" }}
              activeProps={{ className: "bg-brand text-brand-foreground shadow-card" }}
              className={`rounded-xl px-3 py-2 text-sm font-bold transition-all duration-200 ${
                allowed
                  ? "text-foreground/80 hover:bg-accent hover:text-brand"
                  : "text-muted-foreground/60 hover:bg-muted"
              }`}
              title={allowed ? undefined : "غير متاح لدورك الحالي"}
            >
              {t.label}
              {!allowed && <span className="ms-1 text-[10px]">🔒</span>}
            </Link>
          );
        })}
      </nav>

      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border bg-card/60 px-3 py-2">
        <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-brand">
          {info.labelAr} · {info.labelEn}
          {scopedBranch ? ` · فرع ${scopedBranch}` : " · كل الفروع"}
        </span>
        <RoleSwitcher />
      </div>
    </div>
  );
}
