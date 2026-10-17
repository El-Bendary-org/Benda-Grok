import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import {
  Headphones,
  Menu,
  MessageCircle,
  Phone,
  Search,
  ShoppingBag,
  Upload,
  X,
} from "lucide-react";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { COMPLAINTS, HOTLINE } from "@/data/network";
import { cartCount, L, useBendary } from "@/lib/store";
import { ChatWidget } from "@/components/chat-widget";

const links = [
  { to: "/shop", ar: "المتجر", en: "Shop" },
  { to: "/branches", ar: "الفروع", en: "Branches" },
  { to: "/prescription", ar: "الروشتة", en: "Prescription" },
  { to: "/insurance", ar: "التأمين", en: "Insurance" },
  { to: "/track", ar: "التتبع", en: "Track" },
  { to: "/assistant", ar: "الصيدلي", en: "Pharmacist" },
  { to: "/mostaa", ar: "MoSTaa-ChaT", en: "MoSTaa-ChaT" },
] as const;

export function Shell({ children }: { children: ReactNode }) {
  const lang = useBendary((s) => s.lang);
  const setLang = useBendary((s) => s.setLang);
  const cart = useBendary((s) => s.cart);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const count = cartCount(cart);
  const ar = lang === "ar";

  useEffect(() => {
    void useBendary.persist.rehydrate();
  }, []);

  useEffect(() => {
    document.documentElement.lang = ar ? "ar" : "en";
    document.documentElement.dir = ar ? "rtl" : "ltr";
  }, [ar]);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  function onSearch(e: FormEvent) {
    e.preventDefault();
    void navigate({ to: "/shop", search: { q, cat: "all", price: "all", stock: "all" } });
  }

  return (
    <div dir={ar ? "rtl" : "ltr"} className="min-h-screen bg-paper text-ink">
      <div className="bg-ink text-paper">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a href={`tel:${HOTLINE}`} className="inline-flex items-center gap-1.5 font-medium">
              <Phone className="size-3.5" aria-hidden />
              {L(lang, "الخط الساخن", "Hotline")} {HOTLINE}
            </a>
            <a href={`tel:${COMPLAINTS}`} className="inline-flex items-center gap-1.5 text-sand">
              <Headphones className="size-3.5" aria-hidden />
              {L(lang, "شكاوى", "Complaints")} {COMPLAINTS}
            </a>
          </div>
          <p className="text-sand">{L(lang, "توصيل مبرد ٢٤/٧ · منذ ١٩٨٠", "Cooled delivery 24/7 · since 1980")}</p>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <Link to="/" className="flex shrink-0 items-center gap-2">
            <img src="/brand/logo.png" alt="El-Bendary Pharmacies" className="h-12 w-auto" />
          </Link>

          <form onSubmit={onSearch} className="hidden min-w-0 flex-1 md:block">
            <label className="relative block">
              <span className="sr-only">{L(lang, "بحث", "Search")}</span>
              <Search className="pointer-events-none absolute inset-y-0 start-3 my-auto size-4 text-muted" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={L(lang, "ابحث عن دواء أو مستحضر أو جهاز", "Search a medicine, care product, or device")}
                className="w-full rounded-full border border-line bg-paper py-2.5 ps-10 pe-4 text-sm outline-none"
              />
            </label>
          </form>

          <div className="ms-auto flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setLang(ar ? "en" : "ar")}
              className="rounded-full border border-line px-3 py-2 text-xs font-semibold"
            >
              {ar ? "EN" : "عربي"}
            </button>
            <Link
              to="/prescription"
              className="hidden items-center gap-1.5 rounded-full border border-line px-3 py-2 text-sm font-semibold sm:inline-flex"
            >
              <Upload className="size-4 text-red" />
              {L(lang, "روشتة", "Rosheta")}
            </Link>
            <Link
              to="/cart"
              className="relative inline-flex items-center gap-1.5 rounded-full bg-red px-3 py-2 text-sm font-semibold text-paper"
            >
              <ShoppingBag className="size-4" />
              <span className="hidden sm:inline">{L(lang, "السلة", "Cart")}</span>
              {count > 0 && (
                <span className="absolute -top-1.5 -end-1.5 grid size-5 place-items-center rounded-full bg-ink text-xs text-paper tabular-nums">
                  {count}
                </span>
              )}
            </Link>
            <button
              type="button"
              className="grid size-10 place-items-center rounded-full border border-line md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? L(lang, "إغلاق القائمة", "Close menu") : L(lang, "فتح القائمة", "Open menu")}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        <nav className="mx-auto hidden max-w-6xl gap-1 px-4 pb-3 md:flex">
          {links.map((item) => {
            const active = path === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                search={item.to === "/shop" ? { q: "", cat: "all", price: "all", stock: "all" } : undefined}
                className={`rounded-full px-3 py-1.5 text-sm font-medium ${active ? "bg-ink text-paper" : "text-ink hover:bg-sand"}`}
              >
                {ar ? item.ar : item.en}
              </Link>
            );
          })}
          <Link to="/ops" className="ms-auto rounded-full px-3 py-1.5 text-sm text-muted hover:bg-sand">
            {L(lang, "بوابة الفريق", "Team desk")}
          </Link>
        </nav>

        {open && (
          <div className="border-t border-line bg-surface px-4 py-3 md:hidden">
            <form onSubmit={onSearch} className="mb-3">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={L(lang, "بحث في الكتالوج", "Search the catalog")}
                className="w-full rounded-full border border-line bg-paper px-4 py-2.5 text-sm"
              />
            </form>
            <div className="grid gap-1">
              {links.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  search={item.to === "/shop" ? { q: "", cat: "all", price: "all", stock: "all" } : undefined}
                  className="rounded-xl px-3 py-2.5 text-sm font-semibold hover:bg-sand"
                >
                  {ar ? item.ar : item.en}
                </Link>
              ))}
              <Link to="/ops" className="rounded-xl px-3 py-2.5 text-sm text-muted">
                {L(lang, "بوابة الفريق", "Team desk")}
              </Link>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="mt-16 border-t border-line bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <img src="/brand/logo.png" alt="" className="mb-4 h-16 w-auto rounded-xl bg-paper p-1" />
            <p className="max-w-md text-sm text-sand">
              {L(
                lang,
                "صيدليات البنداري. صحتك وصحة عائلتك أولويتنا منذ عام ١٩٨٠. أدوية أصلية، توصيل مبرد، وروشتة تُراجعها صيدلية لا خوارزمية وحدها.",
                "El-Bendary Pharmacies. Your health, and your family's, has been the priority since 1980. Authentic stock, cooled delivery, and a pharmacist on the prescription — not an algorithm alone.",
              )}
            </p>
          </div>
          <div className="text-sm">
            <p className="mb-3 font-display font-bold">{L(lang, "تواصل", "Contact")}</p>
            <ul className="space-y-2 text-sand">
              <li>
                <a href={`tel:${HOTLINE}`}>{HOTLINE}</a>
              </li>
              <li>
                <a href={`tel:${COMPLAINTS}`}>{L(lang, "شكاوى", "Complaints")} {COMPLAINTS}</a>
              </li>
              <li>
                <a href="https://bendaryph.com">bendaryph.com</a>
              </li>
              <li>
                <a href="https://www.instagram.com/elbendary_pharmacy1980/">@elbendary_pharmacy1980</a>
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <p className="mb-3 font-display font-bold">MoSTaa-ChaT</p>
            <p className="text-sand">
              {L(
                lang,
                "مكتب القنوات الموحّد للبنداري: واتساب، اتصال، إنستجرام، ماسنجر، وشات الموقع في طابور واحد.",
                "Bendary's unified desk: WhatsApp, voice, Instagram, Messenger, and the website in one queue.",
              )}
            </p>
            <Link to="/mostaa" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-paper">
              <MessageCircle className="size-4 text-red" />
              {L(lang, "افتح المكتب", "Open the desk")}
            </Link>
          </div>
        </div>
        <div className="border-t border-red-deep/40 px-4 py-4 text-center text-xs text-sand">
          {L(lang, "صيدليات البنداري © ٢٠٢٦ · رعاية من القلب", "El-Bendary Pharmacies © 2026")}
        </div>
      </footer>
      <ChatWidget />
    </div>
  );
}
