# El-Bendary Connected Platform — Production Upgrade Plan

Build one professional Arabic-first ecosystem for **صيدليات البنداري (EL-BENDARY PHARMACIES)**, using the existing corporate, store, customer, and operations work as the foundation rather than replacing it with disconnected demos.

## Customer experience

- Refine the corporate and investor pages into a cohesive premium experience, preserving the official red/navy/green identity and 46-year campaign.
- Add Corporate and Investors to the public header and footer; keep staff tools out of the main customer navigation.
- Connect every branch card to ordering, directions, calling, WhatsApp, and the appropriate customer journey.
- Replace the isolated registration concept with a branded customer account flow: email/password and Google sign-in, registration, profile, saved addresses, preferred branch, health information, and order history.
- Make the public experience installable on iPhone and Android with Arabic RTL mobile navigation and app-like behavior.

## Commerce

- Move products, cart, checkout, prescriptions, and orders from browser-only demo storage to Lovable Cloud.
- Keep the current Arabic catalog filters and cart experience, while making inventory availability and completed orders persistent.
- Connect checkout to the signed-in customer when available, retain guest ordering where appropriate, and create real trackable order codes.
- Keep payment choices clearly marked by actual availability; do not represent card, wallet, or InstaPay processing as live until a payment provider is connected.

## Operations

- Protect staff pages with real accounts and server-validated roles: HQ Admin, Branch Manager, Pharmacist, and Inventory Officer.
- Add a usable pharmacy POS flow that records a sale, its line items, payment method, branch, cashier, and resulting inventory movement.
- Replace mock dashboard figures with database-backed inventory, orders, sales, shifts, and staff summaries.
- Keep branch managers and pharmacists restricted to their assigned branch; keep import and external synchronization HQ-only.

## Pharmasyst adapter

- Create a server-only Pharmasyst adapter with configurable base URL/authentication, safe health checks, sync runs, item-level audit logs, and retry handling.
- Never expose credentials in browser code or logs, and never report a successful connection without a verified provider response.
- Until official API documentation and credentials are supplied, show an explicit “awaiting configuration” state while retaining useful local inventory and import workflows.
- Prepare a verified webhook endpoint only if the official contract requires one.

## Mobile and domains

- Deliver the website as a polished installable PWA now, and expose the same authenticated data model/server functions needed by a later separate React Native repository.
- Keep `/store` and `/ops` fully functional in this project. Custom subdomains such as `shop.bendaryph.com` and `ops.bendaryph.com` require DNS/domain setup after the app is ready; no current DNS record exists for either.

## Technical details

- Add Lovable Cloud schema with explicit grants and row-level policies for profiles, addresses, user roles, branches, products, branch stock, carts, orders, order items, prescriptions, staff/shifts, POS sales, inventory movements, and synchronization logs.
- Seed the existing branch and product demo data in migrations so the first screen remains populated.
- Use authenticated server functions for private data and narrow public reads for catalog/branch content.
- Store roles only in a dedicated role table and validate privileged actions on the server.
- Preserve the existing TanStack route structure and semantic design tokens; use separate routes with unique metadata.
- Add PWA manifest/icons and safe offline shell behavior without caching account, checkout, or OAuth traffic.

## Verification

- Test registration, sign-in, account state, catalog/cart/checkout/tracking, POS inventory changes, role boundaries, import, and Pharmasyst unconfigured/error states end to end.
- Smoke-test Corporate, Investors, Store, Customer Account, and Operations in Arabic RTL on desktop and mobile.
- Verify all header/footer/branch links and ensure every content route has unique metadata.

## External inputs still required

- Official Pharmasyst API documentation, base URL, authentication method, and credentials are required to activate live synchronization.
- A payment provider account is required before electronic payment methods can process money.
- App Store and Google Play delivery later requires a separate React Native/Expo project plus the respective developer accounts.
