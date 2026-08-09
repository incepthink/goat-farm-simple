# Annasaheb Shinde Foundation — simple site

A second, deliberately conservative build of the ASF website. It is a **sibling to
`../goat-farm-frontend`, not a replacement for it** — same organisation, same content,
same stack, opposite design register.

---

## 1. Why this repo exists

`goat-farm-frontend` is an editorial, asymmetric, heavily scroll-driven site. It is well
made and it is not wrong. But the client is 65, and a site built in the visual language of
a startup landing page risks reading to him as unserious — or worse, as evidence that the
people building it do not understand who he is.

So this build exists to present the *same argument* in a register he will recognise:
centred, symmetric, generously spaced, conservative type sizes, a familiar navigation.

**Two things follow from that, and they are the whole brief:**

1. **The design is simpler. The content is not.** The reason the client commissioned a
   rebuild is that his current site fails to say what the project is. Softening the design
   must not soften the argument — this build carries the full, sourced project story.
2. **Simple does not mean static.** Motion stays, and it is meant to impress. What changes
   is its character: nothing hijacks the scroll, nothing wipes across the screen, nothing
   moves before you click it. See §5.

### The reference site

`annasahebshindefoundation.org` (its TLS certificate has expired — fetch with `curl -k`).
Roboto, a red `#ff3450` accent, centred headings with a Font Awesome icon beneath, Owl
Carousel, card grids. This build **mirrors its structure and navigation** so the client
knows where everything is, and **replaces its typography, palette and copy** entirely.

---

## 2. What the organisation actually is

**Not a goat farm.** A vertically integrated rural livelihood venture in north Maharashtra,
run by three linked entities. The full brief lives in `../goat-farm-frontend/CLAUDE.md` —
read it before writing any factual copy. The short version:

Poor shepherd families already own goats. But a goat with low yield and no reliable buyer
is **a savings account they can only close** — sold once, for meat, and gone. Make the
animal healthier *and* guarantee to buy its milk daily, and the same goat flips from a
one-time sale into recurring income. Both halves must happen at once, which is why there
are two organisations: ASF (donor-funded, farmer-facing) and IGBDPL (commercially funded,
milk and processing).

The two defensible assets: **the dairy already exists** (6 × 5,000 L chillers, testing lab,
weighing line), and **every goat is tagged and recorded twice daily**.

---

## 3. Routes

Mirrors the client's existing menu, deliberately.

| Route | Purpose |
|---|---|
| `/` | The argument, top to bottom. Aim → why they stay poor → what changes → what we do → traction → the plant → the women → projects → institutions → CTAs |
| `/annasaheb-shinde` | The biography, as dated chapters in order |
| `/patrons` | The eight patrons |
| `/core-committee` | Three-entity structure, board, executive, technical team, core committee |
| `/gallery` | Field photography, grouped, with a lightbox |
| `/events` | The timeline, January 2024 → today |
| `/csr-activity` | What CSR money buys, and what it has produced |
| `/projects/goat-milk` | The full project: breed, model, tagging, dairy, verticals, villages, forward plan |
| `/projects/indigenous-cow` | Gaolao at Arvi. **Deliberately short** — see the file header |
| `/contact` | Three offices, enquiry form |
| `/donate` | No amounts, no gateway. See the file header before touching it |

---

## 4. Content rules — these are inherited and they are not negotiable

- **All copy and figures live in `src/data/` as typed constants.** Nothing hardcoded in JSX.
- **Every statistic carries a `source`** citing document and page (`A p7 L6` = document A,
  page 7, line 6; `C s13` = document C, slide 13). This is why the site is trustworthy.
- **Do not invent numbers. Do not round up.** If it is not in `src/data/` or the source map
  at `../goat-farm-frontend/docs/CONTENT-SOURCE-MAP.md`, it does not go on the site.
- **Never publish without client confirmation:** 80G / FCRA / CSR-1 registration numbers or
  any tax-benefit claim; any rupee amount, cost, revenue, margin or milk price; any equity
  or investment-terms language; trustee or board names beyond those already listed.
- **The 9,164 litre figure stays off the site.** Its source table has no time unit — it
  could be daily, monthly or annual, a 30× ambiguity.
- **Goat milk powder is never mentioned.** It appears in none of the source documents.

### Where this build rewrote inherited copy

Three files contain condensed rewrites of text from the client's existing site. Each
explains its editorial rule in its own header — read it before adding to the file:

- `src/data/people.ts` — patron and committee bios, stripped of speculative padding.
  `bio: null` means the existing site has a photo and a name but no description. **Do not
  invent one for a named individual.**
- `src/data/legacy.ts` — the biography. Two of the original's ten sections were dropped
  because neither mentions Annasaheb.
- `src/pages/IndigenousCowProject.tsx` — short on purpose. No source documents exist for Arvi.

---

## 5. Design system

**"Institutional Warm."** Deep forest green sampled from the client's own laurel mark, warm
cream paper, one brass accent. Tokens in `tailwind.config.ts` — **no arbitrary hex in JSX.**

| | This build | `goat-farm-frontend` |
|---|---|---|
| Layout | Centred, symmetric | Asymmetric editorial grid |
| Largest type | `3.5rem` | `8.5rem` |
| Shell width | `75rem` | `90rem` |
| Section heading | Centred, with a rule that draws in | Left, word-by-word mask reveal |
| Page transition | 0.5s fade + 8px rise | Full-screen curtain wipe |
| Cursor | Default | Custom magnetic |

### Motion — what is allowed

Lenis smooth scroll site-wide (the single biggest "expensive site" signal, and it costs the
reader nothing). Fade-up reveals on section entry. Staggered card groups. Count-up on
statistics — the one showy piece, allowed because it makes the reader *watch the number
arrive*. Bars that draw to their value. A 24-second ken-burns drift on hero photographs.
1.03 image zoom on hover.

**Not allowed:** scroll-jacking, pinned sections, horizontal scroll hijack, curtain
transitions, magnetic cursors, anything that moves before you click it.

**`prefers-reduced-motion` is honoured everywhere** — via the CSS block in `globals.css`
*and* via `usePrefersReducedMotion` inside each animated component, which renders the plain
element rather than a Framer wrapper.

### Two traps, both already hit once

1. **Never override a variant's colour through `className`.** `variant="secondary"` plus
   `className="text-cream"` puts both `text-forest` and `text-cream` on the element,
   stylesheet order decides, and the button renders dark-on-dark — present in the DOM,
   invisible on the page. Add a variant instead (`outline-inverted` exists for this).
2. **Gating a fade on `onLoad` alone leaves cached images blank.** A cached image can
   finish decoding before React attaches the handler. `Figure` checks `img.complete` in a
   ref callback as well. It only reproduces on a *revisit*.

---

## 6. Stack

Vite · React 18 · TypeScript · Tailwind 3 · React Router 6 · Framer Motion · GSAP · Lenis.
Dependencies are identical to `goat-farm-frontend` so the two repos stay in lockstep.

```
src/
  components/        # Section, Reveal, CountUp, Figure, Stat, PersonCard, PageHero, Button
    layout/          # Header, Footer, PageShell
    brand/           # AsfLogo, AsfLockup
  data/              # ALL content as typed constants
  hooks/
  pages/             # one per route
  styles/
public/images/       # the curated library + 13-people/ from the reference site
```

```bash
npm run dev        # vite
npm run build      # tsc -b && vite build
npm run typecheck
```

---

## 7. Assets

`public/images/` — the 76-image curated library, copied from `goat-farm-frontend`, plus
`13-people/` (30 portraits scraped from the client's existing site — small and compressed;
ask for originals).

- **Every image slot uses a named aspect ratio** from the design system, so better
  photography is a file swap and not a redesign. Go through `<Figure>`.
- **Ration the institutional photos.** Thirteen images of men in meeting rooms exist and
  six of the women who own 93% of the flocks. Institutional photography appears on page
  headers only; `10-institutional` is excluded from the gallery in code.
- **`IMAGES_WITH_GPS_STAMP` in `src/data/story.ts` is enforced, not advisory.** Files with a
  burned-in GPS Map Camera stamp must not appear in any layout.

### Open asks for the client

1. A photograph of Annasaheb Shinde. The page about him currently has none.
2. Clean originals of the GPS-stamped files, especially `07-dairy/image48` (distribution).
3. Higher-resolution portraits for the patrons and committee.
4. Confirmed donation amounts, and the registration numbers.
5. Source material for the Arvi / Gaolao project.

---

## 8. Verifying a change

`npm run build` passing is not verification. Take a screenshot and look at it — both
defects in §5 were invisible to the typechecker and to the build, and both were found by
rendering the page and looking at the picture.
