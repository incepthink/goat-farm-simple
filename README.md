# Annasaheb Shinde Foundation — simple site

A conservative, institutional-register build of the ASF website. Same organisation, same
content, same stack as [`../goat-farm-frontend`](../goat-farm-frontend) — deliberately
different design register.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # tsc -b && vite build → dist/
npm run preview
npm run typecheck
```

Deploys to Vercel as a static build (`vercel.json` handles SPA rewrites and cache headers).

---

## What this is

`goat-farm-frontend` is editorial and heavily scroll-driven. This build presents the same
argument in a register a 65-year-old client reads as serious: centred and symmetric,
conservative type sizes, a navigation that mirrors the one he already has on
`annasahebshindefoundation.org`.

**The design is simpler. The content is not.** The reason for the rebuild is that the
current site does not say what the project is — so this build carries the full, sourced
project story, and every figure on it cites the document it came from.

**Simple does not mean static.** Lenis smooth scroll, fade-up reveals, staggered cards,
count-up statistics, bars that draw to their value, a slow ken-burns drift on hero
photographs. What is banned is anything that fights the reader: no scroll-jacking, no
curtain wipes, no magnetic cursors. All of it honours `prefers-reduced-motion`.

## Pages

`/` · `/annasaheb-shinde` · `/patrons` · `/core-committee` · `/gallery` · `/events` ·
`/csr-activity` · `/projects/goat-milk` · `/projects/indigenous-cow` · `/contact` · `/donate`

## Structure

```
src/
  components/     Section, Reveal, CountUp, Figure, Stat, PersonCard, PageHero, Button
    layout/       Header, Footer, PageShell
    brand/        AsfLogo, AsfLockup
  data/           ALL copy and figures, as typed constants
  hooks/
  pages/          one per route
  styles/
public/images/    curated photo library + 13-people/ portraits
```

## Before you change anything

Read [`CLAUDE.md`](CLAUDE.md). The rules that matter most:

- **All copy lives in `src/data/`.** Nothing hardcoded in JSX.
- **Every statistic carries a `source`.** No source, no publication.
- **Never publish** registration numbers, tax-benefit claims, rupee amounts or investment
  terms without written client confirmation.
- **Never override a button variant's colour via `className`** — add a variant. Doing it
  the other way renders dark-on-dark and looks fine in code review.
- **Take a screenshot and look at it.** A green build proves nothing about what the page
  looks like; both bugs found during this build were invisible to `tsc` and to Vite.

## Known gaps — things to ask the client for

1. A photograph of Annasaheb Shinde. The biography page has none.
2. Confirmed donation amounts. Every tier currently renders without a price by design.
3. Registration numbers (Section 8 / CSR-1 / 80G) — no tax-benefit claim appears anywhere.
4. Clean originals for the GPS-stamped photographs, especially the distribution vehicle.
5. Real portraits for Dr. Abdul Samad and Dr. Deepak Kadoo — the existing site uses stock
   avatars for both, so this build shows a monogram instead.
6. Source material for the Gaolao / Arvi project, which is why that page is short.
