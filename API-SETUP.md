# APIs required for final operation

- Managed PostgreSQL: users, OTP challenges, roles, ads and audit data.
- Meta WhatsApp Cloud API: real phone OTP using an approved Authentication template. Required values are listed in `.env.example`.
- Google AdSense: publisher client ID, real ad-unit slot IDs, and root `ads.txt`.
- Private object storage: required before prescription upload is enabled. Use signed URLs, file validation and malware scanning.
- Production payment gateway: required before checkout is enabled. Verify webhook signatures and implement idempotent order creation.
- Real product/inventory/order source: connect existing systems through server APIs. This pack intentionally contains no sample catalog, fake stock or fake orders.
