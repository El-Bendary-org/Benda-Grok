import { PageShell } from "@/components/PageShell";
import { OpsTabs } from "@/components/OpsTabs";
import { OpsGuard, type OpsSection } from "@/lib/rbac";

export function OpsDenied({ section }: { section: OpsSection }) {
  return (
    <PageShell
      area="staff"
      title="صلاحيات الوصول"
      subtitle="نظام الأدوار — صيدليات البنداري (EL-BENDARY PHARMACIES)"
    >
      <OpsTabs />
      <OpsGuard section={section}>{null}</OpsGuard>
    </PageShell>
  );
}
