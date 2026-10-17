import { Link } from "@tanstack/react-router";
import { Globe, MessageCircle, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { AdSlot } from "./AdSlot";
import { brand, whatsappLink } from "@/data/brand";

export function SiteFooter() {
  return (
    <footer className="mt-14 bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <AdSlot zone="footer-strip" variant="strip" label="إعلان أسفل الصفحة" />
      </div>
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-4">
        <div className="space-y-3">
          <Logo />
          <p className="text-sm text-navy-foreground/80">
            صيدليات البنداري (EL-BENDARY PHARMACIES) — ٤٥ عاماً من الخبرة والرعاية منذ ١٩٨٠،
            أكثر من ١٥ فرعاً في خدمتك على مدار الساعة.
          </p>
        </div>

        <div className="space-y-2 text-sm">
          <h3 className="text-base font-bold text-brand">البوابات</h3>
          <Link to="/store" className="block hover:text-brand">
            المتجر الإلكتروني
          </Link>
          <Link to="/branches" className="block hover:text-brand">
            دليل الفروع
          </Link>
          <Link to="/track" className="block hover:text-brand">
            تتبع الطلبات
          </Link>
          <Link to="/assistant" className="block hover:text-brand">
            المساعد الصيدلي الذكي
          </Link>
          <Link to="/ops" className="block hover:text-brand">
            بوابة الفريق والعمليات
          </Link>
        </div>

        <div className="space-y-2 text-sm">
          <h3 className="text-base font-bold text-brand">تواصل معنا</h3>
          <a href={`tel:${brand.hotline}`} className="flex items-center gap-2">
            <Phone className="size-4 text-brand" /> الخط الساخن {brand.hotline}
          </a>
          <a href={`tel:${brand.complaints}`} className="flex items-center gap-2">
            <Phone className="size-4 text-brand" /> شكاوى واقتراحات {brand.complaints}
          </a>
          <a
            href={whatsappLink(brand.branchesWhatsapp, "السلام عليكم، محتاج مساعدة من صيدليات البنداري")}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2"
          >
            <MessageCircle className="size-4 text-pharm" /> واتساب الفروع {brand.branchesWhatsapp}
          </a>
          <a
            href={`https://${brand.website}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2"
          >
            <Globe className="size-4 text-brand" /> {brand.website}
          </a>
        </div>

        <div className="space-y-2 text-sm">
          <h3 className="text-base font-bold text-brand">طرق الدفع</h3>
          <p>الدفع عند الاستلام</p>
          <p>فيزا / ماستركارد</p>
          <p>محافظ الهاتف (فودافون كاش وغيرها)</p>
          <p>إنستا باي</p>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-navy-foreground/80">
        © {new Date().getFullYear()} صيدليات البنداري — EL-BENDARY PHARMACIES · {brand.copyright}
        © {new date ().getFullYear()} Devoloped BY MoSTa - let's live Future Now . {brand.copyrght}
      </div>
    </footer>
  );
}
