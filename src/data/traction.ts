import type { Sourced, Stat, WomenPhoto } from './types'

/** The date every traction figure below is measured to. Always shown with the numbers. */
export const AS_OF = '31 May 2025'
export const AS_OF_SOURCE = 'A p10 L2'

/* ────────────────────────────────────────────────────────────────────────────
 * BEAT 9 — Traction
 * ──────────────────────────────────────────────────────────────────────────── */

export const TRACTION_INTRO = {
  eyebrow: `Where it stands · as of ${AS_OF}`,
  heading: 'What has actually happened so far',
  standfirst:
    'Phase one began on 1 January 2024. Everything below is what existed seventeen months later — not a projection.',
  source: AS_OF_SOURCE,
}

export const TRACTION: Stat[] = [
  { value: 4000, label: 'goats tagged', source: 'A p10 L5' },
  /**
   * The source reads "4,000 Goats tagged, from an average of 110 families" (A p10 L5).
   * Both halves of that sentence were previously on the page — the count here and the
   * same figure again as a note on the goats tile — so 110 appeared twice and was
   * explained neither time. The note now sits on this tile only, and says what the
   * households are: the owners of the 4,000 above.
   */
  { value: 110, label: 'shepherd families', note: 'The households those 4,000 goats belong to', source: 'A p10 L5' },
  { value: 17, label: 'villages', note: 'Across 2 districts, and growing', source: 'A p10 L6–7' },
  { value: 500, label: 'people impacted', source: 'A p10 L6–7' },
  { value: 25, label: 'direct jobs created', source: 'A p10 L11' },
  { value: 3000, suffix: '+', label: 'health cards prepared', source: 'A p10 L19' },
]

/** Shown as before → after pairs with a drawn bar, not as count-ups. */
export const GAINS: (Sourced & {
  metric: string
  from: string
  to: string
  /** 0–1, the proportion of the bar filled before and after. */
  fromPct: number
  toPct: number
  direction: 'up' | 'down'
  summary: string
})[] = [
  {
    metric: 'Kid mortality',
    from: 'Baseline',
    to: 'Down ~50%',
    fromPct: 1,
    toPct: 0.5,
    direction: 'down',
    summary: 'Mortality rates have been successfully reduced by nearly half.',
    source: 'A p7 L6',
  },
  {
    metric: 'Milk yield',
    from: 'Baseline',
    to: '+15–20%',
    fromPct: 0.62,
    toPct: 0.75,
    direction: 'up',
    summary: 'A steady rise of fifteen to twenty per cent.',
    source: 'A p7 L10',
  },
  {
    metric: 'Deliveries per year',
    from: '1',
    to: 'up to 3',
    fromPct: 0.33,
    toPct: 1,
    direction: 'up',
    summary: 'From one delivery a year to as many as three, within two years.',
    source: 'A p7 L4–5',
  },
  {
    metric: 'Kids per delivery',
    from: '2',
    to: '2–3',
    fromPct: 0.66,
    toPct: 1,
    direction: 'up',
    summary: 'Increased from two to between two and three.',
    source: 'A p7 L8–9',
  },
]

export const TRAINING: Stat[] = [
  /** "the 110 flocks", definite article: these are the same 110 households as TRACTION above. */
  { value: 10, label: 'Livestock Supervisors trained', note: 'Six of them manage the 110 flocks between them', source: 'A p10 L21–22' },
  { value: 90, label: 'women flock owners at health camps', source: 'A p10 L15–20' },
]

/* ────────────────────────────────────────────────────────────────────────────
 * BEAT 10 — The women
 * ──────────────────────────────────────────────────────────────────────────── */

export const WOMEN = {
  eyebrow: 'The flock owners',
  stat: { value: 93, suffix: '%', label: 'of flock owners are women', source: 'A p6 L17' } satisfies Stat,
  heading: 'They already run this. The project just pays them for it.',
  body: [
    'Women are the backbone of the sector. They are skilled and dedicated caregivers of the flock, familiar with every aspect of its management — and they are also, in an agrarian crisis, the worst sufferers.',
    'The project places women at the heart of the initiative rather than at the edge of it — the training, the health camps and the health cards are all built around them.',
  ],
  bodySource: 'A p6 L17–21',
  /**
   * The pull-quote — the promise the section is making, which disappeared when it was set
   * as the tail of a body paragraph.
   *
   * The second body paragraph above previously ended on this same sentence. It was cut
   * there rather than here: running both put the identical clause twice within 400px.
   */
  turn: 'Moving them from rearing goats to running the enterprise built around them.',
  turnSource: 'A p6 L19–21',

  /**
   * Every usable frame of the women who own 93% of the flocks — six, up from five, with no
   * new photography. See docs/HOMEPAGE-CONDENSE-PLAN.md §5.
   *
   * Two were recovered rather than commissioned:
   *   · B_p07_06 was previously excluded for a burned-in camera timestamp. It has been
   *     cropped (558×378 → 558×340), which is the same cleaning already applied to the
   *     rest of the library, and the manifest records it.
   *   · B_p05_02 was a thumbnail in the old activity row. It is the only image in the
   *     entire library that holds both halves of the thesis in one frame — the women AND
   *     the plant — so it now opens the grid.
   *
   * The first entry is the lead and runs large beside the pull-quote.
   *
   * ⚠️  `ratio` is per-frame and it matters. image39 and image40 are 720×1281 — 9:16
   * vertical stills. They were previously rendered at `landscape` (3:2) with
   * object-center, which showed roughly 28% of the frame taken from the middle, cropping
   * out the hands, the udder and the bucket in both. They are the only photographs the
   * project owns of its own core transaction. They must stay at `portrait-tall`.
   *
   * Ratios are still only ever design-system tokens (CLAUDE.md §6 rule 2). The variety
   * comes from choosing a different token per slot, never from inventing one, so better
   * photography remains a file swap.
   */
  gallery: [
    {
      file: '04-women/image39.webp',
      alt: 'A flock owner crouched in the road, milking a black goat by hand into a steel bucket',
      ratio: 'portrait-tall',
      caption: 'The transaction the whole project turns on, photographed by field staff.',
    },
    {
      file: '04-women/B_p05_02.webp',
      alt: 'Nine women in saris standing inside the Malpur dairy beside a bulk milk chiller',
      ratio: 'landscape',
      caption: 'Flock owners inside the dairy their milk goes to.',
    },
    {
      file: '04-women/B_p06_07.webp',
      alt: 'A woman in a pink sari standing among her flock beneath a shelter',
      ratio: 'portrait',
    },
    {
      file: '04-women/B_p06_08.webp',
      alt: 'A woman in a pink sari outside a thatched home in one of the project villages',
      ratio: 'portrait',
    },
    {
      file: '04-women/B_p07_06.webp',
      alt: 'Two women in bright saris feeding a pen of black Zalawadi goats',
      ratio: 'landscape',
    },
    {
      file: '04-women/image40.webp',
      alt: 'A flock owner milking her goat at the village collection point',
      ratio: 'portrait-tall',
    },
  ] satisfies WomenPhoto[],

  gapNote:
    'These photographs were taken by field staff. We do not yet have portraits of named flock owners — the most persuasive images this project could own.',
}

/* ────────────────────────────────────────────────────────────────────────────
 * BEAT 14 — Where it goes
 * ──────────────────────────────────────────────────────────────────────────── */

export const FUTURE = {
  eyebrow: 'Where it goes',
  heading: 'The next two years, and then the next ten',
  standfirst:
    'The systems and the staff already exist. That is what makes the expansion arithmetic rather than invention.',
  standfirstSource: 'A p12',
  /**
   * The three-year litres-per-day ramp that used to sit here has been removed. It was a
   * commercial volume projection belonging to the buying side, and this site is the
   * foundation's. The targets below are the foundation's own outcomes — animals, villages,
   * families — and they are what expansion means here.
   */
  targets: [
    { value: 6000, label: 'more goats tagged', note: 'Benefitting 600+ families and over 3,000 individuals', source: 'A p11 L20–21' },
    { value: 30, label: 'villages across two districts', note: 'Within the next two years', source: 'A p11 L22' },
    { value: 200, label: 'additional livelihoods', note: 'Across the value chain', source: 'A p11' },
  ] satisfies Stat[],
  genetics: {
    heading: 'The long-term pillar',
    body:
      'Genetic improvement runs from year three to year twelve — gradual gains in disease resistance, yield and adaptability, selected from the per-animal records the tagging system has been building since day one.',
    source: 'A p9 L10–38, B p3 L8',
  },
  dataBuild: [
    { year: 'Year 1', detail: '6,000 goats digitised', source: 'B p3 L8' },
    { year: 'Year 2', detail: '12,000 goats digitised', source: 'B p3 L8' },
    { year: 'Year 3', detail: 'Performing-goat data preserved and analysed', source: 'B p3 L8' },
    { year: 'Year 3+', detail: 'Embryo transfer selection begins', source: 'B p3 L8' },
  ],
}

/* ────────────────────────────────────────────────────────────────────────────
 * BEAT 15 — Two buttons
 * ──────────────────────────────────────────────────────────────────────────── */

export const CLOSING = {
  heading: 'Two ways to be part of this',
  standfirst:
    'A CSR head and an institutional partner are looking at the same evidence. Only the last step differs.',
  donate: {
    title: 'Support this work',
    body:
      'Fund tagging, health cards, veterinary camps, training and the laboratory. None of it earns the foundation anything. All of it is what makes a family’s goat worth more, and its milk worth buying.',
    cta: 'Support this work',
    to: '/donate',
  },
  partner: {
    title: 'Partner with us',
    body:
      'Corporate CSR, institutional collaboration or research partnership on breed development, animal health and rural livelihoods. Talk to the team directly.',
    cta: 'Partner with us',
    to: '/contact',
  },
  /**
   * No proposal PDF is published — see docs/CLIENT-QUESTIONS.md §2. When the client
   * supplies a public-facing one-pager, add it to /public and set this.
   */
  proposalPdf: null as { href: string; label: string } | null,
}
