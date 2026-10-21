# Copy map and ASAP steps

Copy the entire extracted folder over the repository root. Every file already has its final repository-relative path.

1. Create branch: `git checkout -b modernization/v4.1`.
2. Back up the database and Vercel environment settings.
3. Copy all files from this pack into the repo root.
4. Run `npm install`.
5. Copy `.env.example` to `.env.local`; fill only real secrets.
6. Run `npx prisma migrate dev --name phone_staff_ads`. For production use the reviewed generated migration with `npx prisma migrate deploy`.
7. Copy `staff-template.example.csv` to `staff-template.csv`. Add the 200 real individual addresses. Add `admin@bendaryph.com,Administrator,SUPER_ADMIN`.
8. Run `npm run staff:import -- staff-template.csv`. Securely distribute the generated temporary passwords, force change, then delete both CSVs. Never commit them.
9. Configure the approved WhatsApp Authentication template and real Cloud API values. Test with a real opted-in phone.
10. When the AdSense ID arrives, set `NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-...`; copy `public/ads.txt.example` to `public/ads.txt` and replace the numeric publisher ID.
11. Create actual units in AdSense and enter their real slot IDs at `/admin/ads`.
12. Deploy Preview, test customer OTP, each staff role, `/admin/ads`, then promote.

No products, users, ads, OTP values, orders or branch records are fabricated in this pack. Empty integrations stay empty.
