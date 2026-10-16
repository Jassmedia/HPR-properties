# HPR Properties: Website

Static website built with [Astro](https://astro.build). No backend is connected yet. Search and filters run in the browser, and enquiry forms hand the details to WhatsApp or the visitor's email app (nothing is stored on the site).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static site to dist/
```

## Sitemap

| Page | Route | Status |
|---|---|---|
| Home | `/` | Built |
| Properties: Buy / Rent / Off-Plan / Featured | `/properties?purpose=…` | Built |
| Property detail | `/properties/[slug]` | Built |
| About Us | `/about` | Built |
| Our Services | `/services` | Built |
| Dubai Areas | `/areas` | Built |
| Invest in Dubai | `/invest-in-dubai` | Built |
| Founder & Team | `/founder` | Built |
| Contact Us | `/contact` | Built |
| Privacy Policy / Terms | `/privacy-policy`, `/terms` | Built |
| Airbnb / Holiday Homes | `/holiday-homes` | **Unpublished**: enable `features.holidayHomes` in `src/data/site.ts` only once confirmed |

## Homepage section order

Header → Hero → Property search → Categories → Featured properties → Why HPR → About preview → Services → Dubai locations → How it works → Founder → Testimonials (hidden until genuine reviews exist) → FAQs → Contact CTA → Footer

## Design system (`src/styles/global.css`)

- **Base:** white `#ffffff`, charcoal `#16181b`, warm neutral `#f6f4f0`, hairline `#e7e4de`
- **Accents (logo):** yellow `#fff200` (small marks only), teal `#1597a3` (text-safe variant `#0d6f79`)
- **Type:** Poppins (headings), Inter (body)
- **Radius** 8/14/22px; pill buttons; 4:3 property images

## Where content lives

- `src/data/site.ts`: contact details, socials, feature switches, `isDraft`
- `src/data/properties.ts`: **sample listings** (each flagged `sample: true`)
- `src/data/home.ts`: categories, services, areas, steps, FAQs, testimonials, founder

## Founder photo

Save the original photo into the project, then run:

```bash
node scripts/process-founder.mjs path/to/photo.jpg
```

This writes `public/images/founder.webp`: a 4:5 crop with a gentle tone correction and no facial edits. Then set `founder.photo` to `'/images/founder.webp'` in `src/data/home.ts`.

## Needed from HPR Properties before launch

- [ ] Confirm email spelling (`hyderabadproperty@gmail.com`) and exact office address
- [x] Founder name (Rishi Keshava)
- [ ] Founder photo file and approved biography
- [ ] Official social media URLs (only WhatsApp is shown now)
- [ ] Verified listings, photos, prices and availability
- [ ] Confirm which Dubai areas to feature
- [ ] Confirm Airbnb / Holiday Homes and Property Management services
- [ ] Licensing / advertising disclosures (RERA / ORN / permit numbers)
- [ ] Final domain (set `site` in `astro.config.mjs`)
- [ ] Form delivery target (inbox / CRM)

Placeholder photography is from Unsplash (free licence). Replace it with HPR's own photos where available.
