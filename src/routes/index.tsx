import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Building2,
  Clock,
  MapPin,
  ShieldCheck,
  Snowflake,
  Stethoscope,
  Truck,
  Upload,
} from "lucide-react";
import { Shell } from "@/components/shell";
import { ProductCard } from "@/components/product-card";
import { products } from "@/data/catalog";
import { branches, HOTLINE, insurers } from "@/data/network";
import { L, useBendary } from "@/lib/store";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "صيدليات البنداري | El-Bendary Pharmacies" },
      {
        name: "description",
        content:
          "El-Bendary Pharmacies since 1980. Cooled 24/7 delivery, prescription upload, insurance billing, and the MoSTaa-ChaT omnichannel desk.",
      },
    ],
  }),
  component: Home,
});

const featured = ["LV-SET", "CPX-01", "GA", "0071491", "DEV-02", "CLR-05"];

function Home() {
  const lang = useBendary((s) => s.lang);
  const offers = products.filter((p) => p.offerAr);

  return (
    <Shell>
      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-16">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-red">
            EL-BENDARY · SINCE 1980
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold md:text-6xl">
            {L(lang, "صحتك وصحة عائلتك أولويتنا.", "Your family’s health, kept close.")}
          </h1>
          <p className="mt-4 max-w-xl text-base text-muted md:text-lg">
            {L(
              lang,
              "بدأت الحكاية عام ١٩٨٠ بصيدلية في طنطا. اليوم أكثر من ١٥ فرعاً بين طنطا والقاهرة والساحل، مخزون يغطي نواقص الدواء، وتوصيل مبرد حتى باب البيت.",
              "One counter in Tanta in 1980. Today more than 15 branches across Tanta, Cairo, and the coast — shortage cover, and cooled delivery to the door.",
            )}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/shop"
              search={{ q: "", cat: "all", price: "all", stock: "all" }}
              className="rounded-full bg-red px-5 py-3 text-sm font-semibold text-paper"
            >
              {L(lang, "تسوق الكتالوج", "Browse the catalog")}
            </Link>
            <Link
              to="/prescription"
              className="inline-flex items-center gap-2 rounded-full border border-ink px-5 py-3 text-sm font-semibold"
            >
              <Upload className="size-4" />
              {L(lang, "ارفع الروشتة", "Upload a prescription")}
            </Link>
            <Link to="/mostaa" className="inline-flex items-center gap-1 rounded-full px-3 py-3 text-sm font-semibold text-red-deep">
              MoSTaa-ChaT
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
        <div className="relative">
          <img
            src="/brand/hero.jpg"
            alt={L(lang, "هاون البنداري على رخام الصيدلية", "Bendary mortar on the pharmacy marble")}
            className="h-80 w-full rounded-card object-cover md:h-[28rem]"
          />
          <div className="absolute bottom-4 start-4 end-4 rounded-2xl bg-surface/95 p-4 backdrop-blur md:end-auto md:max-w-xs">
            <p className="text-xs font-semibold text-red">{L(lang, "الخط الموحّد", "One number")}</p>
            <a href={`tel:${HOTLINE}`} className="font-display text-2xl font-extrabold tabular-nums">
              {HOTLINE}
            </a>
            <p className="text-xs text-muted">{L(lang, "طلب · واتساب · متابعة", "Order · WhatsApp · follow-up")}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
          {[
            ["٤٦", "46", "عاماً من الثقة", "years of trust"],
            ["+١٥", "15+", "فرعاً في الخدمة", "branches open"],
            ["٢٤/٧", "24/7", "توصيل مبرد", "cooled delivery"],
            ["+٢٥", "25+", "شركة تأمين", "insurers"],
          ].map(([arN, enN, arL, enL]) => (
            <div key={enL} className="border-line px-4 py-6 md:border-s first:border-s-0">
              <dt className="font-display text-3xl font-extrabold tabular-nums">{L(lang, arN, enN)}</dt>
              <dd className="text-sm text-muted">{L(lang, arL, enL)}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-wide text-red">{L(lang, "احتفال ٤٦ سنة", "46-year offers")}</p>
            <h2 className="mt-1 font-display text-3xl font-extrabold">{L(lang, "العروض الجارية", "On the counter now")}</h2>
          </div>
          <Link to="/shop" search={{ q: "", cat: "all", price: "all", stock: "all" }} className="text-sm font-semibold">
            {L(lang, "كل الكتالوج", "Full catalog")}
          </Link>
        </div>
        <ul className="divide-y divide-line overflow-hidden rounded-card border border-line bg-surface">
          {offers.map((p) => (
            <li key={p.sku}>
              <Link to="/product/$sku" params={{ sku: p.sku }} className="flex items-center justify-between gap-4 px-4 py-4 hover:bg-paper">
                <div>
                  <p className="font-semibold">{lang === "ar" ? p.nameAr : p.nameEn}</p>
                  <p className="text-sm text-muted">{lang === "ar" ? p.nameEn : p.nameAr}</p>
                </div>
                <p className="shrink-0 text-sm font-semibold text-leaf">{lang === "ar" ? p.offerAr : p.offerEn}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto grid max-w-6xl gap-3 px-4 md:grid-cols-3">
        {[
          { icon: Truck, to: "/shop" as const, ar: "المتجر", en: "The shop", dAr: "أسعار الرف، تصفية بالقسم والسعر، ودفع بإنستاباي وفوري وفودافون كاش.", dEn: "Shelf prices, filters, Instapay, Fawry, and Vodafone Cash." },
          { icon: MapPin, to: "/branches" as const, ar: "الفروع", en: "Branches", dAr: "طنطا، المهندسين، التجمع، أكتوبر، والساحل. واتساب كل فرع.", dEn: "Tanta, Mohandessin, New Cairo, October, and the coast." },
          { icon: Stethoscope, to: "/assistant" as const, ar: "الصيدلي الذكي", en: "Pharmacist desk", dAr: "إرشاد دوائي بلغة واضحة، والروشتة تبقى للصيدة البشرية.", dEn: "Plain-language guidance. Prescriptions stay with a human pharmacist." },
        ].map((item) => (
          <Link key={item.en} to={item.to} search={item.to === "/shop" ? { q: "", cat: "all", price: "all", stock: "all" } : undefined} className="rounded-card border border-line bg-surface p-5">
            <item.icon className="size-5 text-red" />
            <h3 className="mt-4 font-display text-xl font-bold">{L(lang, item.ar, item.en)}</h3>
            <p className="mt-2 text-sm text-muted">{L(lang, item.dAr, item.dEn)}</p>
          </Link>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-display text-3xl font-extrabold">{L(lang, "من الأرفف", "From the shelves")}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products
            .filter((p) => featured.includes(p.sku))
            .map((p) => (
              <ProductCard key={p.sku} product={p} />
            ))}
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-red">MOSTAA-CHAT</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">
              {L(lang, "كل قناة. طابور واحد.", "Every channel. One queue.")}
            </h2>
            <p className="mt-3 max-w-xl text-sand">
              {L(
                lang,
                "موقع البنداري موصول بمكتب MoSTaa-ChaT: واتساب الطلبات، واتساب الفروع، مركز الاتصال، الشكاوى، إنستجرام، ماسنجر، وشات الزائر. الرد من المكتب يصل لصاحب الرسالة.",
                "The Bendary site is wired into MoSTaa-ChaT: order WhatsApp, branch WhatsApp, the call center, complaints, Instagram, Messenger, and the visitor chat. A reply from the desk reaches the person who wrote.",
              )}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/mostaa" className="rounded-full bg-red px-5 py-3 text-sm font-semibold text-paper">
                {L(lang, "ادخل مكتب القنوات", "Enter the desk")}
              </Link>
              <Link to="/ops" className="rounded-full border border-sand/40 px-5 py-3 text-sm font-semibold">
                {L(lang, "عمليات الفروع", "Branch operations")}
              </Link>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {[
              ["WhatsApp", "01200400094"],
              ["Branches", "01200400461"],
              ["Voice", "01200400094"],
              ["Instagram", "@elbendary_pharmacy1980"],
            ].map(([name, handle]) => (
              <li key={name} className="rounded-2xl border border-sand/20 px-3 py-3">
                <p className="text-xs text-sand">{name}</p>
                <p className="mt-1 font-semibold break-all">{handle}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="story" className="mx-auto grid max-w-6xl gap-6 px-4 py-14 md:grid-cols-3">
        {[
          { icon: ShieldCheck, ar: "دواء أصلي", en: "Authentic stock", dAr: "أصناف مضمونة من رف الصيدلية، لا من سوق رمادي.", dEn: "Shelf stock you can trace to the branch, not a grey market." },
          { icon: Snowflake, ar: "سلسلة تبريد", en: "Cold chain", dAr: "التوصيل المبرد للأصناف التي لا تحتمل حرارة الطريق.", dEn: "Cooled runs for anything that should not sit in a hot car." },
          { icon: Clock, ar: "صيدلي في الوردية", en: "A pharmacist on shift", dAr: "الروشتة تُراجع قبل الصرف. المساعد يوضح ولا يصرف بدل الصيدلي.", dEn: "Prescriptions are checked before they leave. The assistant explains; it does not replace the pharmacist." },
        ].map((item) => (
          <div key={item.en} className="rounded-card border border-line bg-surface p-5">
            <item.icon className="size-5 text-leaf" />
            <h3 className="mt-4 font-display text-xl font-bold">{L(lang, item.ar, item.en)}</h3>
            <p className="mt-2 text-sm text-muted">{L(lang, item.dAr, item.dEn)}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-4">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="font-display text-3xl font-extrabold">{L(lang, "فروع قريبة", "Nearby counters")}</h2>
          <Link to="/branches" className="text-sm font-semibold">
            {L(lang, "الدليل", "Directory")}
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {branches.slice(0, 3).map((b) => (
            <article key={b.id} className="rounded-card border border-line bg-surface p-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-red">
                <Building2 className="size-3.5" />
                {lang === "ar" ? b.cityAr : b.cityEn}
              </div>
              <h3 className="mt-2 font-display text-lg font-bold">{lang === "ar" ? b.nameAr : b.nameEn}</h3>
              <p className="mt-1 text-sm text-muted">{lang === "ar" ? b.addressAr : b.addressEn}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <p className="text-xs font-semibold text-muted">{L(lang, "فاتورة مباشرة مع أكثر من ٢٥ شريكاً، منهم", "Direct billing with 25+ partners, including")}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {insurers.map((name) => (
            <li key={name} className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm">
              {name}
            </li>
          ))}
        </ul>
        <Link to="/insurance" className="mt-4 inline-block text-sm font-semibold text-red-deep">
          {L(lang, "دخول عضو التأمين", "Member sign-in")}
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <div className="rounded-card border border-dashed border-line bg-sand/60 px-4 py-5 text-sm text-muted">
          {L(
            lang,
            "موضع شراكة دوائية — متاح لشركاء البنداري بدل الإعلان العشوائي. لا نعرض إعلانات خارجية على صفحات الدواء.",
            "A reserved placement for Bendary’s pharmaceutical partners. Drug pages stay free of outside advertising.",
          )}
        </div>
      </section>
    </Shell>
  );
}
