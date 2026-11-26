# Supplier and Inventory Management

## What you’ll get

- A public home page with supplier cards. Opening a card shows the supplier’s products and services, with stock levels and reorder indicators for physical products.
- An admin area for managing suppliers, catalog details, and stock movements. Anyone can browse supplier and stock details; only the designated super-admin account can make changes.
- Email/password sign-in with basic user profiles. The home page starts empty rather than displaying made-up supplier records.

## Build approach

- Add Supabase tables for profiles, user roles, suppliers, catalog items, and inventory history.
- Allow public browsing of supplier and product/service stock details, and reserve all edits for the administrator role. Assign that role only after the specified email is verified, including for an existing matching account.
- Keep stock changes and their history together as one protected operation, and record who made each change.
- Add the sign-in, supplier home, supplier detail, and admin screens using the project’s existing TanStack and design-system setup.

## Technical details

- Use explicit table grants and row-level policies; public access is limited to supplier/catalog browsing, users can edit only their own profile, and only the database-controlled signup flow can assign roles.
- Include both product and service catalog entries. Physical products carry quantity and reorder fields; services carry a service rate.
- Use a responsive supplier detail panel and admin forms for supplier, item, and stock management.
- Keep `/` public for supplier browsing and add public sign-in/reset pages plus protected admin routing.

## Validation

- Run the app’s routing tests and verify the home, supplier details, sign-in, and admin views in the preview.
- Check the latest build and runtime logs. A real account is needed to verify the signed-in flows end to end.

Supplier and stock browsing is public; administrative changes remain restricted to the designated super-admin account.