# El-Bendary Pharmacies Ecosystem Platform — Build Plan

Arabic-first (RTL) platform for صيدليات البنداري (Bendar, since 1980), with five connected portals, the real branch directory, and demo data pre-filled everywhere.

## Brand foundation

- The uploaded Bendar logo used in the header, footer, and loading screen.
- Colors: signature red (#C0392B / #E53935), dark navy/black, white cards, pharmacy green badges.
- Cairo + Tajawal Arabic fonts, full right-to-left layout.
- Hotline 01200400094 · Complaints 01200400089 · Branches WhatsApp 01200400461 · bendaryph.com.
- Footer: Dr. Mostafa El-mourabea (@Most-Pharm) · Build By ♥ To All Pharmacists.
- No partner portal, investor, or sponsorship pages anywhere.
- Each page carries 8 clearly marked ad slots (top strip, in-hero, two mid-page, spotlight, sidebar, pre-footer, footer strip).

## 1. Main site (home)

- Hero with the brand story and stats: 15+ branches, 45 years, 24/7 delivery.
- Branch directory with all branches from your screenshots — Mohandeseen, El Galaa 1/2/3, Borsa, Al Ashraf, Kafr Essam, Saeed, El Maared, Alex Agricultural Rd, El Mohafza — each with its real phone numbers (tap to call), Google Maps link, and WhatsApp button.
- Prescription upload that opens WhatsApp, plus a quick order form.
- Insurance partners section (12 Egyptian companies, direct billing noted).
- Payment strip: cash on delivery, Visa/Mastercard, phone wallets, InstaPay.

## 2. Online store

- Arabic categories: أدوية، العناية بالبشرة، الأم والطفل، مكملات غذائية، أجهزة طبية، عناية شخصية.
- Products seeded from your Excel template (it holds 3 sample rows — Panadol Advance, Klavox 1g, Vichy Mineral 89); I will add ~40 more realistic Egyptian products across the categories so the store looks complete. Tell me if you'd rather send the full product file instead.
- Search, category and price filters, product detail cards, cart drawer with quantity controls.
- Checkout with COD / card / wallet / InstaPay choice and prescription attachment.
- Admin bulk import screen that accepts an Excel/CSV file matching your template columns and previews rows before adding them.

## 3. Operations system (staff)

- HQ and branch dashboard: sales charts, stock KPIs, branch comparison.
- Inventory movement: وارد، صادر، تحويلات بين الفروع، تنبيهات النواقص.
- Purchasing: suppliers, invoices, purchase orders.
- SOP library for pharmacists and assistants.
- HR: staff list, shifts, attendance, assignments.
- Printable receipt and delivery dispatch flow.

## 4. Order tracking

- Public tracker: enter an order code and see the visual stages تم الاستلام → قيد التأكيد → جاري التجهيز → خرج مع المندوب → تم التسليم (demo codes shown on the page).
- Staff view: assign riders, update statuses.

## 5. Communications hub + AI pharmacist

- Unified inbox mixing WhatsApp, phone, Facebook, Instagram, and web chat conversations with quick replies and ticket statuses.
- AI Pharmacist with two modes: Pharmacist Coworker (interactions, contraindications, dosing, Egyptian alternatives) and Customer Assistant (products, order status, branch finder), answering in Arabic.

## Navigation

Public area (home, store, tracking, AI assistant for customers) and a clearly separated staff area (operations, purchasing, HR, SOP, inbox, admin import) with cross-portal shortcuts on every page.

## Technical notes

- TanStack Start routes per portal; RTL set on the document root; fonts loaded from Google Fonts in the root head.
- Design tokens (brand red, navy, green, radii, shadows) defined in `src/styles.css`; shadcn components restyled from those tokens.
- Logo uploaded via Lovable Assets and imported as a pointer.
- Store, cart, orders, inventory, HR, and inbox run on typed mock data modules plus React state/localStorage — no backend account needed, so everything is demo-ready immediately. The AI pharmacist needs Lovable Cloud AI to give real answers; I will wire it to Lovable AI in a follow-up step unless you want a scripted demo assistant instead.
- Excel/CSV import parsed in the browser (SheetJS) for the admin tool.

## Build order

1. Tokens, fonts, logo, layout shells, ad-slot component, navigation.
2. Home page with branches, insurance, payments, forms.
3. Store, cart, checkout, admin import.
4. Order tracking (public + staff).
5. Operations (dashboard, inventory, purchasing, SOP, HR, dispatch, receipts).
6. Communications hub and AI pharmacist.
