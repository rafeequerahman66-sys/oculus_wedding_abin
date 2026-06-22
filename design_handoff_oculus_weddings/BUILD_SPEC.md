# Oculus Weddings — Complete Build Spec (Claude Code, one-shot)

Paste this whole file into Claude Code as the build brief. It contains everything needed to
recreate the site: stack, design tokens, fonts, every page, all copy, all data, and behavior.

A working HTML reference (`reference/Oculus Weddings.reference.html`) and all photos
(`assets/images/`) ship in this same folder — open the HTML in a browser to see the target.

---

## 0. What to build

A multi-page **fine-art wedding photography website** for **Oculus Weddings** (photographer
based in Bengaluru, shoots across India & worldwide). Warm-neutral editorial aesthetic:
cream backgrounds, deep cocoa-brown ink, bronze + script accents, elegant serif display type.

**Pages:** Home · About · Services · Portfolio (grid) · Portfolio Detail (per couple) ·
Blog (list) · Blog Detail (per article) · Contact · 404.

**Fidelity: HIGH.** Match colors, type, spacing, and copy exactly. The HTML files are design
references, not production code — rebuild them properly in the stack below (or the project's
existing stack if one exists).

### Recommended stack
- **Next.js (App Router) + React + TypeScript**, plain CSS Modules or Tailwind (your call).
- Routes: `/`, `/about`, `/services`, `/portfolio`, `/portfolio/[slug]`, `/blog`,
  `/blog/[slug]`, `/contact`, plus `not-found.tsx` for the 404.
- Images live in `/public/images/` (copy everything from `assets/images/` in this folder).
- No CMS required — content is static; model it as typed data files (see §7) so it's trivial
  to add couples/posts later.

> The reference was a single-file prototype that swapped "views" in client state. In the real
> build, make these **real routes** with real navigation — don't replicate the single-page
> view-switch.

---

## 1. Design tokens

### Colors
| Token | Hex | Use |
|---|---|---|
| `--cream` | `#F6F1EA` | Primary page background |
| `--sand` | `#ECE4D8` | Alternating section background |
| `--sand-deep` | `#F2E7D6` | CTA band background |
| `--card` | `#FBF8F3` | Light package card |
| `--ink` | `#3B342C` | Primary text, dark sections, footer, buttons |
| `--ink-soft` | `#4A4238` | Large serif body / quotes |
| `--taupe` | `#6F6557` | Body copy (Jost) |
| `--bronze` | `#B58A72` | Script accents, links, hovers, active nav underline |
| `--bronze-tint`| `#C7B49E` | Oversized italic step numbers |
| `--muted` | `#A89A85` | Uppercase labels / kickers |
| `--rule` | `#DED4C5` | Hairline dividers |
| `--rule-2` | `#C9B79C` | Divider motif strokes / input underlines |
| `--border` | `#E2D7C6` | Nav border, card borders |
| `--cream-on-dark` | `#F0E8DC` | Text on `--ink` sections |
| `--script-on-dark`| `#D9B89E` | Script accent on `--ink` sections |
| `--footer-text` | `#C8BBA9` | Footer links |
| `--lime` | `#A8C23F` | Featured-package accent (top bar, bullets, button) ONLY |

Selection: `background:#B58A72; color:#F6F1EA;`

### Typography (Google Fonts)
```
https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500&family=Pinyon+Script&display=swap
```
- **Cormorant Garamond** (serif) — all display headings, large pull-quotes, big numbers. Weights 400/500/600; italic used for quotes & step numerals.
- **Jost** (sans) — body, nav, labels, buttons. Weights 300 (body) / 400 / 500.
- **Pinyon Script** (cursive) — small decorative kickers ("let's begin", "behind the lens", the "weddings" in the logo, "softly, forever" in hero).

**Type patterns**
- Section kicker (script): Pinyon Script, ~34px, `--bronze`.
- Section title: Cormorant Garamond 500, `clamp(28px,4vw,46px)`, `letter-spacing:.05em`, `text-transform:uppercase`.
- Page H1: Cormorant Garamond 500, `clamp(32px,4.6vw,54px)`, `letter-spacing:.06em`, uppercase.
- Hero H1: Cormorant Garamond 400, `clamp(44px,7vw,86px)`, `line-height:1.02`, `letter-spacing:.02em`.
- Uppercase label/kicker (sans): Jost, 11–12px, `letter-spacing:.24–.34em`, uppercase, `--muted`.
- Body: Jost 300, 14–16px, `line-height:1.85–1.95`, `--taupe`.
- Nav item: Jost, 12px, `letter-spacing:.18em`, uppercase.
- Button label: Jost, 11px, `letter-spacing:.26em`, uppercase.

### Spacing & layout
- Section vertical padding: `clamp(70px,9vw,120px)`; page-header blocks tighter.
- Horizontal page padding: `6vw` (nav uses `5vw`).
- Content max-widths: prose `760–920px`; grids/feature rows `1080–1280px`.
- **Border radius: 0 everywhere** (sharp corners) except the small circular Instagram badge and the diamond motif. No rounded cards.
- **Shadows: none.** Separation comes from background color blocks and hairline rules.
- Buttons: rectangular, no radius, `padding:14–16px 36–44px`.

### Decorative divider motif (used atop every interior page header, hero top, 404)
A centered row, `width:min(420px,80%)` (hero/404 use `min(360px,70%)`):
```
[gradient hairline] ◇ • ◇ [gradient hairline]
```
- hairlines: `height:1px; flex:1; background:linear-gradient(90deg,transparent,#C9B79C)` (mirror the second).
- two diamonds: `7×7px; border:1px solid #B58A72; transform:rotate(45deg)`.
- center dot: `4×4px; border-radius:50%; background:#B58A72`.
- On the hero (over photo) the strokes use `rgba(246,241,234,.6/.85)` instead of bronze.

### Animations
- `@keyframes fadeUp { from{opacity:0; transform:translateY(22px)} to{opacity:1; transform:none} }` — hero content, `1.1s ease both`.
- `@keyframes fadeIn { from{opacity:0} to{opacity:1} }` — each page mount, `.5s ease both`.
- Stats count-up: see §6.
- Button hovers: bg/border/color swaps, ~`.25s` transition.

---

## 2. Brand & contact (real data — use exactly)
- **Name:** Oculus Weddings (logo: "OCULUS" in spaced uppercase Cormorant + "weddings" in Pinyon Script bronze beneath).
- **Tagline:** Fine-art wedding photography.
- **Base:** Bengaluru · available worldwide.
- **Email:** `oculusmediabisinessinfo@gmail.com` (mailto link)
- **Phone:** `+91 96566 16686` (tel:+919656616686)
- **Instagram:** `@0culuswedding` → https://www.instagram.com/0culuswedding/ (opens new tab)
- **Footer copyright:** © 2018 Oculus Weddings · Bengaluru & worldwide
- The photographer is **male** (bio is first-person; testimonials say "he").

---

## 3. Global chrome

### Nav (sticky, top:0, height 78px)
- `background:rgba(246,241,234,.92)`, `backdrop-filter:blur(10px)`, bottom border `1px solid #E2D7C6`.
- 3-column grid: left links **Home · About · Services**, centered logo (clickable → Home), right links **Portfolio · Blog** + an **Inquire** button.
- Inquire button: solid `--ink` bg, `--cream` text, hover bg `--bronze`. Padding `11px 24px`.
- Active route shows a 1px `--bronze` underline beneath the item.

### Footer (`background:#3B342C`, text `#C8BBA9`)
- Centered logo (OCULUS / weddings script), then a centered row of nav links (Home/About/Services/Portfolio/Blog/Contact), hover → `#F0E8DC`. Separated by a hairline `rgba(200,187,169,.18)`.
- Bottom row: left "© 2018 Oculus Weddings · Bengaluru & worldwide"; right a circular IG badge (34px, 1px border, hover bg `--bronze`) + a small "404" link (route to 404, mainly a demo affordance — you can drop it in production).

---

## 4. Pages & sections (copy is final — use verbatim)

### HOME
1. **Hero** — full-bleed photo (`height:90vh; min-height:620px`), default image `rohin-jana-1.jpeg`. Dark gradient overlay `linear-gradient(180deg,rgba(40,33,27,.32),rgba(40,33,27,.12) 40%,rgba(40,33,27,.42))`. Top divider motif (light variant). Centered, color `--cream`, `fadeUp`:
   - kicker (uppercase, `.42em`): "Fine-art wedding photography"
   - H1: "Every love story / is worth keeping"
   - script line (`--script-on-dark` `#EAD9C4`, clamp 36–58px): "softly, forever"
   - outline button → Portfolio: "View the portfolio" (border `rgba(246,241,234,.6)`, hover fills cream/ink).
2. **Intro quote** (centered, cream): script "Welcome, lovely"; then Cormorant 400 `clamp(24px,3.4vw,40px)`, `--ink-soft`, max 880px: *"I'm a photographer for couples who feel more than they say — here to hold onto the glances, the laughter and the quiet in-betweens, long after the day has passed."*
3. **Offerings** (bg `--sand`): kicker "What I Offer" + title "Ways to work together". 3-col grid, each = photo (h 380px) + Cormorant title + Jost blurb + bronze "Learn more" underline-link → Services:
   - Weddings — "Full-day storytelling, from the first look to the last dance, captured with a gentle, unobtrusive eye." (img `dhanesh-steffy-2.jpeg`)
   - Engagements — "A relaxed session to celebrate the in-between chapter — and to feel at ease before the big day." (img `mahesh-athira-2.jpeg`)
   - Portraits — "Intimate, light-filled portraits for couples and families who want something timeless to keep." (img `anakha-siddharth-4.webp`)
4. **Feature** (2-col, photo left `homeFeature` h560 / text right): script "behind the lens"; title "An unhurried, / honest approach"; two paragraphs:
   - "No stiff posing, no rushing from one shot to the next. I give you room to simply be together, and quietly photograph the moments that unfold — the ones you'll actually want to remember."
   - "Based in Bengaluru, available worldwide for couples chasing light and meaning."
   - outline button → About: "My story". *(Pick any couple photo for `homeFeature`, e.g. `mahesh-athira-1.jpeg`.)*
5. **Testimonial** (bg `--ink`, text `--cream-on-dark`, centered): script `#D9B89E` "kind words"; Cormorant italic `clamp(24px,3.2vw,38px)`: *"Oculus didn't just take photographs — he gave us back the feeling of the entire day. Every time we open the album, we're right there again."*; attribution (uppercase `.26em` `#B6A892`): "Vishnu & Shilpa · Palakkad".
6. **Stats** (cream) — 4-col, count-up on scroll (see §6): **11+ Years · 10,000+ Photographs · 250+ Weddings · 6 Awards**. Numbers Cormorant 500 `clamp(46px,6vw,76px)`; labels uppercase `.26em` `--muted`.
7. **CTA** (bg `--sand-deep` `#F2E7D6`, centered): script "let's begin"; Cormorant 400 `clamp(30px,4.4vw,54px)` "Tell me about your day"; Jost line "I take a limited number of weddings each year — let's see if your date is free."; solid ink button → Contact "Get in touch".

### ABOUT
- Page header: divider motif + script "hello there" + H1 "My Story".
- **Bio** (2-col `0.85fr 1.15fr`, sticky portrait left = `photographer.jpeg`, height `min(70vh,680px)`): label "The photographer"; H2 "I never planned to become a wedding photographer." then the 5 bio paragraphs (verbatim) in §7.bioParagraphs; sign-off Pinyon Script 42px bronze "Oculus".
- **A Few Facts About Myself** (bg `--sand`): kicker "a little more" + title. 3-col, each = photo (h320) + italic Cormorant number + title + blurb:
  - 01 **Film & Digital** — "I shoot both — film for its soul, digital for its certainty. The two together feel just right." (img `fact-film-digital.png`)
  - 02 **Golden Hour** — "My favourite light is the last hour before sunset. We will plan a few minutes just for the two of you." (img `mahesh-athira-3.jpeg`)
  - 03 **Forever Curious** — "Between weddings you will find me wandering markets, chasing light and collecting old cameras." (img `anakha-siddharth-2.webp`)
- **Your Story, My Lens** (2-col, text left / photo right `aboutLens` h520): script "together"; H2 "Your Story, My Lens"; para "From the first nervous hello to the last dance, I'm there as a quiet witness — never directing the day, only catching it as it truly happens. Let's make something you'll hand down for generations."; outline button → Contact "Work with me". *(Use any couple photo for `aboutLens`.)*

### SERVICES
- Page header: divider + script "the experience" + H1 "Wedding Packages".
- Subline (centered, max 560): "Bride & Groom — both-side coverage. Booking now open for April–October."
- **Packages** — 3 cards (data in §7.packages). Each card: kicker, Cormorant name, events line (`min-height:36px`), hairline, then **Crew / Output / Complimentary** groups (label + bulleted items, bullets are 4px lime dots), hairline, **Enquire** button → Contact. **No prices shown.** The middle card ("Both-Side Signature") is the **featured** variant: dark `--ink` bg, light text, a 3px `--lime` top bar, lime kicker/labels, and a solid lime button.
- **What to Expect** (bg `--sand`): kicker "how it works" + title. 4-col steps (italic Cormorant numerals): see §7.steps.
- **Any Queries?** (cream, max 920): label "Good to know" + title. FAQ list, each item separated by top hairline `--rule`: see §7.faqs.

### PORTFOLIO (grid)
- Page header: divider + script "selected works" + H1 "Highlights & Works".
- 3-col grid of 8 couple cards. Each = photo (fixed aspect ratio per couple) + Cormorant name (23px) + uppercase place label. Click → that couple's Portfolio Detail. Cards & cover images in §7.couples (`gridCover`, `gridRatio`).

### PORTFOLIO DETAIL (per couple, `/portfolio/[slug]`)
- Page header: divider + script `kicker` + H1 `couple` + uppercase `place`.
- Centered hero photo (max 560px wide, aspect = couple `hero`).
- Centered italic Cormorant intro (`clamp(22px,2.8vw,32px)`, max 720).
- 2-col grid of the **remaining** photos (photos[1..], each aspect = couple `pair`). Show exactly the photos provided — no padding/repeats.
- Quote band (bg `--ink`): script "in their words" + italic Cormorant `quote`.
- Outline button → Portfolio: "Back to portfolio".

### BLOG (list)
- Page header: divider + script "from the journal" + H1 "Latest Stories".
- Stacked list (max 1080, gap clamp 40–70). Each post = alternating-friendly 2-col (photo / text): category·date (bronze uppercase), Cormorant title `clamp(26px,3.2vw,38px)`, Jost excerpt, "Read the story" underline. Click → Blog Detail. Data in §7.blog.

### BLOG DETAIL (`/blog/[slug]`)
- Page header: divider + category·date + H1 title + "Words & photos by Oculus Weddings".
- Body column (max 760): cover photo (aspect `coverRatio`) → Cormorant `lead` (`clamp(18px,2.2vw,23px)`) → Jost `body1` → mid photo (aspect `midRatio`) → centered italic `quote` between top+bottom hairlines → Jost `body2` → outline button → Blog "More stories".

### CONTACT
- Page header: divider + script "say hello" + H1 "Get in Touch".
- 2-col: **form** left, photo right (`contactImg`, min-height 520; use any couple photo).
  - Intro: "Tell me a little about you and your day. I take a limited number of weddings each year, so do reach out early — I'd love to be part of it."
  - Fields (underline-only inputs: transparent bg, no border except 1px `--rule-2` bottom, no radius): **Your names** + **Email** (2-col row), **Wedding date & place**, **Tell me your story** (textarea rows=4, no resize). Solid ink **Send enquiry** button. Wire to a real handler / form action in production (the reference is non-functional).
- **Contact band** (bg `--sand`): 3-col centered — **Email** `oculusmediabisinessinfo@gmail.com` (mailto), **Call** `+91 96566 16686` (tel), **Follow** `@0culuswedding` (IG, new tab). Each value is Cormorant 22px with a bronze underline-on-hover.

### 404 (`not-found.tsx`)
- Divider motif + giant "404" (Cormorant 400 `clamp(90px,16vw,180px)`, color `#D8C6B4`) + script "oh dear" + H1 "This page has wandered off" + para "The link may be broken, or the page may have moved. Let's get you back to somewhere lovely." + solid ink button → Home "Back home".

---

## 5. Interactions & behavior
- **Routing:** every nav/footer link, every couple card, every blog card, and every CTA navigates to a real route. Scroll to top on navigation.
- **Hovers:** outline buttons invert to ink bg / cream text; solid ink buttons → bronze bg; links gain a bronze underline; nav active item keeps a persistent bronze underline; IG badge fills bronze.
- **Page enter:** wrap each page body in the `fadeIn .5s` animation; hero content uses `fadeUp 1.1s`.
- **Responsive:** below ~900px, collapse 2-col feature/contact/bio rows to single column, 3/4-col grids to 2 then 1, and provide a mobile nav (hamburger → drawer) since the desktop nav has many items. Keep `clamp()` type scales.

## 6. Stats count-up (exact)
On the stats grid, when it scrolls into view (IntersectionObserver, threshold 0.4, fire once):
for each number animate 0→target over **1700ms**, easing `easeOutCubic` `t => 1 - (1-t)^3`,
render `Math.round(value).toLocaleString('en-US') + suffix` each frame, settle on the exact target.
Targets/suffixes: `{11,'+'} {10000,'+'} {250,'+'} {6,''}` with labels Years / Photographs / Weddings / Awards. Comma formatting matters ("10,000+"). Respect `prefers-reduced-motion` (snap to final).

---

## 7. Content data (model as typed files)

### bioParagraphs (About, in order)
1. "Like many creative journeys, mine began with a simple curiosity. What started as an interest in cameras and visual storytelling gradually became a passion for capturing real moments and genuine emotions. I found myself drawn to the power of photographs and films — the ability to freeze a moment in time and preserve memories that would otherwise fade."
2. "In the early days, I spent countless hours learning, experimenting, and documenting everyday life. With every project, I became more fascinated by the emotions behind the lens rather than the technical side of the camera itself."
3. "My path into wedding photography and videography happened almost unexpectedly. An opportunity to capture a wedding introduced me to a world filled with love, family, emotions, and once-in-a-lifetime moments. Watching a couple relive their wedding day through my work made me realize that this was more than a profession — it was a responsibility and a privilege."
4. "Since then, weddings have become my canvas for storytelling. Every celebration is unique, every couple has a different journey, and every wedding offers moments that can never be repeated. My goal is not just to create beautiful images and films, but to preserve the feelings, connections, and memories that make each story special."
5. "Today, I am grateful to do what I love — capturing genuine moments and turning them into timeless memories that couples and families can cherish for generations."

### couples (Portfolio + Detail) — order as listed
Each: slug, couple, place (grid label), kicker, intro, quote, gridCover, gridRatio, heroRatio, pairRatio, photos[].
Detail hero = photos[0]; detail grid = photos[1..]; gridCover may differ from photos[0].

1. **vishnu** — Vishnu & Shilpa · grid "Palakkad, Kerala" · detail place "Palakkad, Kerala · 2025" · kicker "a celebration"
   - intro: "Backwaters at first light, jasmine in her hair, and the sea breaking behind them. Vishnu and Shilpa's Palakkad celebration was pure, unhurried joy."
   - quote: "We forgot the camera was even there. And then we saw the photos, and cried all over again."
   - gridCover `vishnu-shilpa-4.jpeg`, gridRatio `1080/1437`, heroRatio `1080/1350`, pairRatio `1080/1437`
   - photos: vishnu-shilpa-1.webp, -4.jpeg, -3.jpeg, -2.webp, -5.jpeg, -6.jpeg, -7.jpeg, -8.jpeg, -9.jpeg, -10.jpeg, -11.jpeg, -12.webp, -13.webp
2. **mahesh** — Mahesh & Athira · "Trivandrum, Kerala" · "· 2025" · kicker "a love story"
   - intro: "Golden light spilling through the hills above Trivandrum, and two people who never quite stopped laughing. An afternoon that felt like a held breath."
   - quote: "It felt less like a shoot and more like a walk with an old friend. The photos still make us grin."
   - gridCover `mahesh-athira-1.jpeg`, gridRatio `1080/1440`, hero/pair `1080/1440`
   - photos: mahesh-athira-1…6.jpeg
3. **rohin** — Rohin & Jana · "Bangalore" · "Bangalore · 2026" · kicker "a grand affair"
   - intro: "Palace columns, a sweep of crimson, and a couple made for the frame. Rohin and Jana turned Bangalore into pure cinema."
   - quote: "They told us to simply feel grand — and somehow we did. Every photo looks like a film still."
   - gridCover `rohin-jana-1.jpeg`, gridRatio `1080/1440`, hero/pair `1080/1440`
   - photos: rohin-jana-1…6.jpeg
4. **yadu** — Yadu & Aswathy · "Trivandrum, Kerala" · "· 2025" · kicker "a quiet bloom"
   - intro: "Ivy-green walls, lotus ponds, and a love that needed no prompting. Yadu and Aswathy moved through Trivandrum like the morning belonged to them."
   - quote: "Every frame feels like a moment we actually lived. That is the magic — nothing felt staged."
   - gridCover `yadu-aswathy-1.webp`, gridRatio `1080/1350`, hero/pair `1080/1350`
   - photos: yadu-aswathy-1…6.webp
5. **arjun** — Arjun & Aparnna · "Trivandrum, Kerala" · "· 2023" · kicker "gold & grace"
   - intro: "Kanjivaram silk, temple gold, and the warm hush of a traditional Kerala wedding. Arjun and Aparnna wore their heritage like a second skin."
   - quote: "They captured the rituals, the laughter with the cooks, every tiny detail of our day. Heirloom photographs, truly."
   - gridCover `arjun-aparnna-4.jpeg`, gridRatio `1080/1350`, hero/pair `1080/1350`
   - photos: arjun-aparnna-1…6.jpeg
6. **anakha** — Anakha & Siddharth · "Ernakulam, Kerala" · "Ernakulam, Kerala · 2025" · kicker "a city in black"
   - intro: "Fort Kochi at golden hour — peeling ochre walls, painted birds in flight, and a couple in elegant black moving through the old city like it was built for them."
   - quote: "Every street, every wall became part of our story. They saw the city the way we felt it."
   - gridCover `anakha-siddharth-1.webp`, gridRatio `1080/1440`, hero/pair `1080/1440`
   - photos: anakha-siddharth-1…5.webp
7. **soorya** — Soorya & Nithun · "Trivandrum, Kerala" · "· 2025" · kicker "sacred vows"
   - intro: "Lotus garlands, temple gold, and a forehead kiss before the deities. Soorya and Nithun's muhurtham was tender, sacred, and overflowing with tradition."
   - quote: "They held the holiest moments of our wedding so gently. We will treasure these forever."
   - gridCover `soorya-nithun-2.jpeg`, gridRatio `1080/1344`, hero/pair `1080/1344`
   - photos: soorya-nithun-1.jpeg, soorya-nithun-2.jpeg
8. **dhanesh** — Dhanesh & Steffy · "Kottayam, Kerala" · "Kottayam, Kerala · 2022" · kicker "in white"
   - intro: "Soft window light, a lace veil, and a bouquet held close. Dhanesh and Steffy's Kottayam wedding was timeless monochrome — quiet, classic, and full of grace."
   - quote: "The black-and-white frames feel like they belong in a film. Pure elegance, exactly as we hoped."
   - gridCover `dhanesh-steffy-2.jpeg`, gridRatio `1080/1344`, hero/pair `1080/1344`
   - photos: dhanesh-steffy-1.jpeg, dhanesh-steffy-2.jpeg, dhanesh-steffy-3.jpeg

### packages (Services) — prices stored but NOT rendered
Common: each has `kicker, name, events, featured, sections[{label, items[]}]`. Bullets = lime dots.
1. **Both-Side Essential** — kicker "Package 01" · events "Wedding Eve & Wedding Day" · featured:false
   - Crew: 1 Photographer + 1 Videographer (Bride Side) / 1 Photographer + 1 Videographer (Groom Side) / Traditional & Candid Photography / Traditional & Candid Videography
   - Output: Highlight (1080P Full HDQ) / Wedding Reel (1080P Full HDQ) / Full Function Videos (1080P Full HDQ) / 2 Set 100-Page Album / Soft Copies
   - Complimentary: 4 Set Photo Frame / Calendar / Mini Book
2. **Both-Side Signature** — kicker "Package 02" · events "Wedding Eve / Engagement Eve, Engagement Day & Wedding Day" · **featured:true** (dark card, lime accents)
   - Crew: (same 4 as Essential)
   - Output: Engagement + Wedding Combined Highlight (1080P) / Engagement Reel (1080P Full HDQ) / Wedding Reel (1080P Full HDQ) / Full Function Videos (1080P Full HDQ) / 2 Set 100-Page Album / Soft Copies
   - Complimentary: 4 Set Photo Frame / Calendar / Mini Book
3. **Both-Side Premium** — kicker "Package 03 · Premium" · events "Pre-Wedding · Engagement & Wedding — Photography & Cinematography" · featured:false
   - Crew: 1 Photographer + 1 Cinematography (Bride Side) / 1 Photographer + 1 Cinematography (Groom Side) / 1 Drone / Traditional & Candid Photography / Traditional & Candid Cinematography
   - Output: Engagement + Wedding Combined Highlight (1080P) / Engagement Reel (1080P Full HDQ) / Wedding Reel (1080P Full HDQ) / Full Function Videos (1080P Full HDQ) / 2 Set 120-Page Premium Album / Soft Copies
   - Complimentary: 4 Set Photo Frame / Calendar / 2 Mini Book

### steps (Services — What to Expect)
1. Say Hello — "Reach out and tell me about your day. We chat over coffee — in person or on a call."
2. Plan Together — "I help shape a timeline that lets the day breathe, with light and ease in mind."
3. The Day — "I arrive early and stay close, quietly catching the moments as they happen."
4. Heirlooms — "Your gallery arrives within weeks, followed by a hand-bound album to treasure."

### faqs (Services)
- How far in advance should we book? — "Most couples reach out 9 to 14 months ahead. I take a limited number of weddings each year to give every one my full attention."
- Do you travel? — "Always. I am based in Bengaluru but photograph weddings across India and around the world — travel is quoted simply and transparently."
- When will we see our photos? — "A sneak peek lands within a week of the wedding, and your full gallery follows within four to six weeks."
- What is your shooting style? — "Documentary at heart, with soft, true-to-life colour. I direct gently when it helps, but mostly I let the day lead."

### blog — each: slug, cat, date, title, excerpt, listImg, coverImg, coverRatio, midImg, midRatio, lead, body1, quote, body2
1. **bl1** Real Weddings · December 2025 · "Vishnu & Shilpa: A Palakkad Celebration in Full Bloom"
   - excerpt: "Temple bells, jasmine garlands and a courtyard full of family. A traditional Kerala wedding photographed exactly as it unfolded."
   - listImg `vishnu-shilpa-4.jpeg`, cover `vishnu-shilpa-1.webp` (1080/1350), mid `vishnu-shilpa-7.jpeg` (1080/1440)
   - lead: "There is a particular stillness to a Kerala morning before a wedding begins — the scent of jasmine, the hush before the melam, the family moving softly through the courtyard. Vishnu and Shilpa's day began exactly there."
   - body1: "The ceremony unfolded without hurry. Elders blessed the couple, the nadaswaram rose and fell, and somewhere a grandmother wiped away a quiet tear. I spent most of it a few steps back, simply watching for the moments that mattered — the ones no one thinks to pose for."
   - quote: "We forgot the camera was even there. And then we saw the photos, and cried all over again."
   - body2: "By the time the sadya was served and the last guests lingered over payasam, the light had gone soft and golden. These are the frames we live for — unguarded, warm, and entirely theirs."
2. **bl2** Tips · November 2025 · "What to Wear for Your Pre-Wedding Shoot"
   - excerpt: "A few gentle thoughts on colour, fabric and comfort — so you look like yourselves, only a little more cinematic."
   - listImg `yadu-aswathy-2.webp`, cover `yadu-aswathy-1.webp` (1080/1350), mid `yadu-aswathy-4.webp` (1080/1350)
   - lead: "The question I hear most often is also the simplest to answer: wear what makes you feel like the best version of yourselves. A pre-wedding shoot is not a fashion shoot — it is a portrait of the two of you, together."
   - body1: "Lean towards soft, earthy tones — ivories, ochres, deep greens and muted reds photograph beautifully against Kerala's landscapes. Avoid loud logos and harsh neons; they pull the eye away from your faces. Flowing fabrics catch the breeze and the light, and movement always makes for the most romantic frames."
   - quote: "When you are comfortable, it shows — and comfort is the most photogenic thing in the world."
   - body2: "Bring one considered change of outfit, keep accessories gentle, and trust us with the rest. We will find the light, the location and the quiet moments. You just have to be together."
3. **bl3** Notes · October 2025 · "Golden Hour in Kerala: Why Timing Is Everything"
   - excerpt: "The difference between a lovely photograph and an unforgettable one is often just twenty minutes of light. Here is how we plan for it."
   - listImg `mahesh-athira-2.jpeg`, cover `mahesh-athira-1.jpeg` (1080/1440), mid `mahesh-athira-4.jpeg` (1080/1440)
   - lead: "There is an hour, just after sunrise and again before sunset, when the light in Kerala turns to honey. Skin glows, shadows soften, and even the most ordinary backdrop becomes cinematic. We plan entire shoots around it."
   - body1: "Harsh midday sun is the enemy of romance — it flattens faces and squints eyes. So we wake early, or we wait for the day to cool. Twenty minutes of the right light will always outshine two hours of the wrong kind."
   - quote: "The difference between a lovely photograph and an unforgettable one is often just the time of day."
   - body2: "If you are planning your timeline, talk to us before you lock the muhurtham and the portraits. A little foresight gives us that golden window — and gives you photographs that feel lit from within."
4. **bl4** Real Weddings · September 2025 · "Anakha & Siddharth: A Fort Kochi Love Story in Black"
   - excerpt: "Ochre walls, painted murals and two people in elegant black. A city wedding shoot through the old streets of Kochi."
   - listImg `anakha-siddharth-1.webp`, cover `anakha-siddharth-2.webp` (1080/1440), mid `anakha-siddharth-3.webp` (1080/1440)
   - lead: "Fort Kochi at golden hour is a photographer's dream — peeling ochre walls, painted murals, fishing nets against the sky. Anakha and Siddharth moved through the old city in elegant black, and it felt like the streets had been waiting for them."
   - body1: "We wandered without a shot list. A quiet doorway here, a burst of colour there, a glance exchanged while a cycle rattled past. The city did half the work; the two of them did the rest."
   - quote: "Every street, every wall became part of our story. They saw the city the way we felt it."
   - body2: "As the light dropped over the harbour, we found our last frame against a painted wall, the couple framed in shadow and gold. A wedding shoot that felt less like a session and more like an evening walk through a city in love."

### offerings images & misc
- Home feature image: any couple photo (reference used `mahesh-athira-1.jpeg`). About "Your Story" + Contact photos: any couple photo. About portrait: `photographer.jpeg`.

---

## 8. Assets
All photos are in `assets/images/` (copy to `/public/images/`). Portrait wedding photos are
~1080px wide (3:4 / 4:5 / ~5:6). `fact-film-digital.png` is a landscape AI still-life.
`photographer.jpeg` is the about portrait. `hero.mp4` exists but the hero is now a **still image**
(`rohin-jana-1.jpeg`) — ignore the video. There is no logo file; the logo is pure type
(Cormorant + Pinyon Script). The diamond divider and IG icon are inline SVG/CSS (no asset).

## 9. Files in this bundle
- `BUILD_SPEC.md` — this document (the brief).
- `reference/Oculus Weddings.reference.html` — the visual reference prototype. Open in a browser.
- `assets/images/` — every photo used.

Build it cleanly in the recommended stack, match the spec's tokens and copy exactly, and wire
the contact form + routes for production. The bundled HTML is a reference only — do not ship it.
