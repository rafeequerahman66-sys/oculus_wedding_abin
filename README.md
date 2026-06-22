# Oculus Weddings

Fine-art wedding photography website for **Oculus Weddings** (Bengaluru · available worldwide).
Built from `design_handoff_oculus_weddings/BUILD_SPEC.md` — warm-neutral editorial aesthetic,
cream backgrounds, cocoa ink, bronze + script accents, sharp corners, no shadows.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- Plain global CSS with design tokens (`app/globals.css`) — no UI framework
- Fonts: Cormorant Garamond, Jost, Pinyon Script (Google Fonts)
- Static content modelled as typed data files in `lib/`
- Images in `public/images/`

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all routes prerendered)
npm start        # serve the production build
```

## Routes

| Route | Page |
|---|---|
| `/` | Home — hero, intro, offerings, feature, testimonial, animated stats, CTA |
| `/about` | My Story — bio, "A Few Facts", "Your Story, My Lens" |
| `/services` | Wedding Packages, What to Expect, FAQs |
| `/portfolio` | Grid of 8 couples |
| `/portfolio/[slug]` | Per-couple detail (vishnu, mahesh, rohin, yadu, arjun, anakha, soorya, dhanesh) |
| `/blog` | Latest Stories list |
| `/blog/[slug]` | Article (bl1–bl4) |
| `/contact` | Enquiry form + contact band |
| `not-found.tsx` | 404 |

## Structure

```
app/            routes + globals.css + layout (nav/footer chrome, fonts, metadata)
components/     Nav, Footer, Logo, PageHeader, DividerMotif, Photo, Stats, ContactForm
lib/            site.ts, couples.ts, packages.ts, blog.ts, home.ts  (typed content)
public/images/  all photography
```

To add a couple or post, append to `lib/couples.ts` / `lib/blog.ts` — routes and static
params are generated from the data.

## Production TODO

- **Contact form** (`components/ContactForm.tsx`) shows a confirmation but does not send.
  Wire it to a server action, an `/api/enquiry` route, or a form service.
- Package prices live in `lib/packages.ts` only if added later — per spec they are **not** rendered.
- Set the real production domain in `app/layout.tsx` (`metadataBase`).

The bundled `design_handoff_oculus_weddings/` is the original brief + visual reference; it is
not part of the app and can be removed once the build is signed off.
