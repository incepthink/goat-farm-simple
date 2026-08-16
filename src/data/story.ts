import type { Fact, Sourced, Stat } from './types'

/* ────────────────────────────────────────────────────────────────────────────
 * BEAT 1 — Hero
 * ──────────────────────────────────────────────────────────────────────────── */

export const HERO = {
  eyebrow: 'Malpur · Dhule · Maharashtra',
  /** Split across lines deliberately — the mask reveal animates per word. */
  headline: 'A goat is the only savings a family has. We stopped them having to sell it.',
  standfirst:
    'Shepherd families in north Maharashtra already own goats. But a goat with low yield and no reliable buyer is a savings account you can only close — sold once, for meat, and gone. We make the animal healthier, and our associates buy its milk every single day, at a rate better than the local one. The same goat becomes an income.',
  scrollCue: 'Scroll',
  image: '01-hero/A_p01_01.webp',
  imageAlt:
    'A boy carrying a young goat kid across his shoulders through a green field near Malpur',
}

/* ────────────────────────────────────────────────────────────────────────────
 * BEAT 2 — The situation
 *
 * ⚠️  This section is DELIBERATELY STILL. No parallax, no counters, no scroll
 *     effects. See CLAUDE.md §3. Do not animate these numbers.
 * ──────────────────────────────────────────────────────────────────────────── */

export const SITUATION = {
  eyebrow: 'The situation',
  heading: 'Half of India depends on agriculture. It has not been kind to them.',
  facts: [
    {
      figure: '400,000',
      body: 'farmers lost to suicide between 1995 and 2018 — forty-eight every day.',
      source: 'A p4 L8–9',
    },
    {
      figure: '4,248',
      body:
        'in Maharashtra alone between 2018 and 2022. Fifteen per cent of the national total, from one state.',
      source: 'A p4 L10–11',
    },
    {
      figure: '< 2 acres',
      body:
        'is what defines a small and marginal farmer. Land that size cannot absorb a bad season.',
      source: 'A p4 L15',
    },
  ],
  closing:
    'Agriculture contributes fifteen per cent of GDP and supports nearly half the population. The gap between those two numbers is the problem this project exists inside.',
  closingSource: 'A p4 L2–4',
}

/* ────────────────────────────────────────────────────────────────────────────
 * BEAT 3 — Why goats
 * ──────────────────────────────────────────────────────────────────────────── */

export const WHY_GOATS = {
  eyebrow: 'Why goats',
  heading: 'The poor man’s cow',
  standfirst:
    'India is the world’s largest producer of goat milk and home to 150 million goats. Goats are resilient and multipurpose — milk, meat, manure. A family that owns nothing else usually owns a goat.',
  standfirstSource: 'A p4 L25–26',
  turn:
    'And yet the people who rear them stay poor. Not for one reason — for four, and they compound.',
  barriers: [
    {
      term: 'Kids die',
      detail:
        'High mortality among newborn kids. The animal that should have compounded into a flock never survives its first months.',
      source: 'A p4 L29–32',
    },
    {
      term: 'Yields stay low',
      detail:
        'Without nutrition, clean water or veterinary care, a goat produces a fraction of what it could.',
      source: 'A p4 L29–32',
    },
    {
      term: 'Nobody buys the milk',
      detail:
        'No market linkage. Milk that cannot be sold reliably is not income — it is just milk.',
      source: 'A p4 L29–32',
    },
    {
      term: 'The family keeps moving',
      detail:
        'Nomadic life follows the grazing. It also prevents children reaching a school and families reaching a clinic.',
      source: 'A p4 L29–32',
    },
  ] satisfies Fact[],
  consequence:
    'So the only way left to get money out of a goat is to sell the animal itself. One payment. Asset gone. The family is poorer the day after than the day before.',
  consequenceNote: 'The mechanism this project exists to break.',
}

export const GOAT_MILK_BENEFITS: Fact[] = [
  {
    term: 'Closest to human milk',
    detail: 'Easily digestible and rich in oligosaccharides, which makes it suitable for infants.',
    source: 'A p5 L3–10',
  },
  {
    term: 'High nutritional value',
    detail: 'Vitamins A, D and B12, with calcium, phosphorus and magnesium.',
    source: 'A p5 L3–10',
  },
  {
    term: 'Lower in lactose',
    detail: 'Tolerated by many people with mild lactose intolerance.',
    source: 'A p5 L3–10',
  },
  {
    term: 'Supports recovery',
    detail: 'Described in the literature as supporting recovery in tuberculosis patients.',
    source: 'A p5 L3–10',
  },
  {
    term: 'A health drink',
    detail: 'Associated with stronger immunity and general well-being.',
    source: 'A p5 L3–10',
  },
  {
    term: 'Cosmetic uses',
    detail: 'Rich in lactic acid, vitamins and minerals; used in skin preparations.',
    source: 'A p5 L3–10',
  },
]

/* ────────────────────────────────────────────────────────────────────────────
 * BEAT 4 — The Zalawadi goat
 * ──────────────────────────────────────────────────────────────────────────── */

export const BREED = {
  eyebrow: 'The animal',
  name: 'Zalawadi',
  heading: 'One hundred and fifty years in these hills. Nobody has ever improved it.',
  standfirst:
    'The Zalawadi is an indigenous breed from Gujarat, reared across north Maharashtra for more than 150 years. It is already well suited to this agro-climatic zone. No systematic effort has ever been made to improve it — which is precisely why there is so much headroom.',
  standfirstSource: 'A p6 L6–7, B p1 L15–18',
  image: '03-goats/image7.webp',
  imageAlt: 'A Zalawadi goat photographed in side profile against a brick wall',
  stats: [
    {
      value: 2.15,
      decimals: 2,
      label: 'kg of milk per day',
      note: 'Range of 2–2.15 kg, over a 200-day lactation cycle',
      source: 'A p6 L8',
    },
    { value: 55, suffix: '%', label: 'of births are twins', note: 'With 2% triplets', source: 'A p6 L10–11' },
    { value: 11, label: 'month kidding interval', note: 'Average', source: 'A p6 L10–11' },
    { value: 12, label: 'year lifespan', note: 'Average', source: 'A p6 L13' },
  ] satisfies Stat[],
  weights: [
    { term: 'Males', detail: '40 kg', source: 'A p6 L9' },
    { term: 'Females', detail: '34 kg', source: 'A p6 L9' },
  ] satisfies Fact[],
  adaptability: {
    term: 'Adaptability',
    detail: 'Thrives across diverse Indian climates.',
    source: 'A p6 L12',
  } satisfies Fact,
}

/* ────────────────────────────────────────────────────────────────────────────
 * BEAT 5 — The model
 * ──────────────────────────────────────────────────────────────────────────── */

export const MODEL = {
  eyebrow: 'The model',
  heading: 'Four things, all at once, or none of it works',
  standfirst:
    'Making a goat healthier only earns a family anything if someone reliably buys the extra milk. And a milk buyer needs healthy, high-yielding goats to buy from in the first place. Neither half works without the other, so the foundation does both: it improves the animal, and it brings the buyer.',
  pillars: [
    {
      n: '01',
      term: 'Health',
      detail:
        'Regular veterinary access, deworming, disease prevention and vaccination. Hygienic sheds with dedicated feeding and resting areas.',
      source: 'A p6 L23–29',
    },
    {
      n: '02',
      term: 'Feed',
      detail:
        'Subsidised fodder, balanced meals and clean water. Silage produced on site, plus calcium and mineral supplementation.',
      source: 'A p6 L23–29, B p1 L21–23',
    },
    {
      n: '03',
      term: 'Genetics',
      detail:
        'Superior males, and scientific breeding using artificial insemination. Embryo transfer and IVF follow, once the data can identify which animals to multiply.',
      source: 'A p6 L23–29, B p1 L21–23',
    },
    {
      n: '04',
      term: 'A guaranteed buyer',
      detail:
        'Market linkage for milk, meat and manure. Our associates collect daily and pay above the local rate — the piece that converts a healthier animal into money arriving on a predictable day.',
      source: 'A p6 L23–29',
    },
  ],
  flipHeading: 'What changes',
  flip: {
    before: 'Sell the animal',
    beforeDetail: 'One payment. The asset is gone and the family is poorer.',
    after: 'Sell the milk',
    afterDetail:
      'Collected daily, weighed, tested and paid for. The asset stays, and it keeps producing.',
  },
  interventionsHeading: 'The six interventions',
  interventions: [
    { term: 'Nutrition and water', detail: 'Subsidised fodder, balanced meals, clean water supply.', source: 'A p6 L23–29' },
    { term: 'Healthcare', detail: 'Regular vet access, deworming, disease prevention and vaccination.', source: 'A p6 L23–29' },
    { term: 'Infrastructure', detail: 'Hygienic sheds, dedicated feeding and resting areas, hygienic milking practice.', source: 'A p6 L23–29' },
    { term: 'Breeding and genetics', detail: 'Superior male goats and scientific breeding using artificial insemination.', source: 'A p6 L23–29' },
    { term: 'Income through manure', detail: 'A goat manure collection system, for additional earnings.', source: 'A p6 L23–29' },
    { term: 'Market linkages', detail: 'Buyers and vendors established for goat milk and meat.', source: 'A p6 L23–29' },
  ] satisfies Fact[],
}

/* ────────────────────────────────────────────────────────────────────────────
 * BEAT 6 — Tagging & data
 * ──────────────────────────────────────────────────────────────────────────── */

export const TAGGING = {
  eyebrow: 'Tagging & data',
  heading: 'Every goat has a number. Every number has a history.',
  standfirst:
    'With the support of the Maharashtra Animal Husbandry Department, every Zalawadi goat in the area of operation is tagged with a unique digital ID. Milking data is collected twice a day, for every flock, and stored in scientific chart format.',
  standfirstSource: 'B p2 L13–14, B p2 L33',
  image: '06-tagging/image27.webp',
  imageAlt: 'A hand holding a numbered ear tag before it is fitted to a goat',
  /**
   * Sits directly above the goat-ID cards. Without it the cards read as six anonymous
   * numbers — the reader has to be told, in plain words, that each card is one animal.
   */
  recordsLead: {
    heading: 'What one goat’s record looks like',
    body:
      'The number at the top of each card is that animal’s ear tag. Everything under it — age, weight, completed lactations, average daily yield — is what has been recorded against that tag since the day it was fitted.',
    /** Completed in the section with the flock owner and village. */
    provenance: 'These six are from one flock of',
  },
  honesty: {
    text:
      'Right now this is a manually driven system. We are on our way to integrating it digitally.',
    attribution: 'Project’s Proposal',
    source: 'A p9 L7',
  },
  /** The eleven things tracked per animal. */
  monitoring: [
    'Disease prevention',
    'Medical care',
    'Health tracking',
    'Nutrition',
    'Reproduction',
    'Kid care',
    'Milking practices',
    'Milk quality',
    'Genetic improvement',
    'Breeding monitoring',
    'Mortality tracking',
  ],
  monitoringSource: 'A p8 L29–33, A p9 L1–6',
  moat:
    'Three years of per-animal milking records is what makes genetic selection possible at all. You cannot multiply your best animals until you can prove which ones they are.',
}

/* ────────────────────────────────────────────────────────────────────────────
 * BEAT 7 — The dairy
 * ──────────────────────────────────────────────────────────────────────────── */

/**
 * The dairy is NOT the foundation's, and the copy here must never imply that it is.
 *
 * The plant belongs to an associate. What the foundation did was secure the linkage — which
 * is the persuasive fact anyway: the families have a working buyer to deliver to, today,
 * not a proposal. Describe the facility, never claim it. The building paragraph below is a
 * separate thing and it *is* the foundation's: it is the long-leased premises with the
 * training hall, dormitories and distillation room.
 */
export const DAIRY = {
  eyebrow: 'The dairy',
  heading: 'The milk has somewhere to go, every day',
  standfirst:
    'Most projects asking for money are a proposal. The milk from these flocks goes to a working plant on the Amravati Dam Road at Malpur — commissioned, staffed and running.',
  spec: [
    { term: '6 × 5,000 L', detail: 'Bulk milk chillers — 30,000 litres of chilling capacity', source: 'C s13' },
    { term: 'Testing laboratory', detail: 'A full laboratory set up for all types of milk testing', source: 'C s13' },
    { term: 'Weighing line', detail: 'Conveyor belt, computerised weighing machine and dump tank', source: 'C s13' },
    { term: '125 KVA', detail: 'Generator, plus hot water boiler and complete air conditioning', source: 'C s13' },
  ] satisfies Fact[],
  promise: {
    heading: 'Quality · Quantity · Consistency',
    body: 'The three aspects the milk collection operation is run against.',
    source: 'C s4',
  },
  /**
   * Alt text describes what is actually in each frame — checked against the files, not
   * assumed from the folder name. 07-dairy/image49 is excluded: it still carries a
   * burned-in GPS Map Camera stamp. See IMAGES_WITH_GPS_STAMP below.
   */
  gallery: [
    { file: '07-dairy/image42.webp', alt: 'Staff standing beside the bulk milk chiller tanks at Malpur' },
    { file: '07-dairy/image41.webp', alt: 'Stainless steel tanks in the dairy plant room at Malpur' },
    { file: '07-dairy/image45.webp', alt: 'The stainless steel dump tank in the milk reception area' },
    { file: '07-dairy/image44.webp', alt: 'The interior of the dairy building, fitted out for processing' },
    { file: '07-dairy/image43.webp', alt: 'The generator installed to keep the chillers running through power cuts' },
    { file: '07-dairy/image47.webp', alt: 'Water storage feeding the dairy building' },
    { file: '07-dairy/image5.webp', alt: 'The project building at Malpur which houses the dairy' },
    // image48 (the delivery vehicle) is NOT here — see IMAGES_WITH_GPS_STAMP below. It is
    // the one photograph of distribution we own and it would be a good addition to this
    // row; ask the client for a clean original rather than re-adding the stamped file.
  ],
  facility: {
    heading: 'The building',
    body:
      'Leased long-term: project office, dairy section, training hall, two dormitories, rooms for visiting trainers, kitchen, caretaker quarters, a urine distillation room, feed and milk storage, and a floor held back for expansion.',
    source: 'A p10 L28–36, A p11 L1–9',
  },
}

/* ────────────────────────────────────────────────────────────────────────────
 * BEAT 8 — Four verticals
 * ──────────────────────────────────────────────────────────────────────────── */

/**
 * Files that still carry a burned-in "GPS Map Camera" location stamp, despite the asset
 * audit reporting these as cropped. Verified by eye against the rendered files. Do not
 * use any of them in a layout — the stamp reads as an unfinished site.
 *
 * Listed rather than deleted so that nobody re-adds them, and so the client can be asked
 * for clean originals (docs/CLIENT-QUESTIONS.md §4).
 */
export const IMAGES_WITH_GPS_STAMP = [
  '03-goats/image22.webp',
  '03-goats/image24.webp',
  '03-goats/image25.webp',
  '03-goats/image29.webp',
  '03-goats/image30.webp',
  '05-field-work/image28.webp',
  '07-dairy/image49.webp',
  /**
   * Added during the simple-site build: the stamp sits in the lower-right corner and is
   * clearly legible at gallery size. It was previously in the dairy row on this site and
   * was caught by looking at a rendered screenshot, not by reading the audit — which is
   * the only way this class of defect ever gets caught.
   */
  '07-dairy/image48.webp',
  '09-events/image46.webp',
] as const

export type Vertical = Sourced & {
  slug: string
  name: string
  line: string
  detail: string
  /** Null where no photograph of this exists — renders a PhotoPending slot instead. */
  image: string | null
  imageAlt: string
  status: string
}

export const VERTICALS: Vertical[] = [
  {
    slug: 'milk',
    name: 'Goat milk',
    line: 'What the family sells daily',
    detail:
      'Collected twice daily from tagged flocks, weighed, tested at every draw, chilled and transported. Positioned as an immunity booster with higher nutritional and medicinal value and a lower fat proportion than cow milk.',
    image: '04-women/image39.webp',
    imageAlt: 'A woman milking a goat at a collection point',
    status: 'Daily delivery running from Malpur',
    source: 'C s12, C s14',
  },
  {
    slug: 'feed',
    name: 'Goat feed',
    line: 'Silage and supplementation',
    detail:
      'A feed unit producing silage on site, alongside nutritious feed, calcium and mineral mixture — the input that makes the yield improvement possible in the first place.',
    // The silage itself, not the machine that made it (08-feed/B_p05_00): at card size a
    // handful of feed reads as feed, where three men beside a baler reads as a photo call.
    image: '08-feed/B_p05_03.webp',
    imageAlt: 'A handful of silage produced by the feed unit at Malpur',
    status: 'Silage machine operating',
    source: 'C s14, B p1 L21–23',
  },
  {
    slug: 'fertilizer',
    name: 'Fertilizer',
    line: 'From goat dung',
    detail:
      'A manure collection system turning what the flock already produces into an organic input — and into a second income line for the family, separate from milk.',
    image: '03-goats/B_p07_04.webp',
    imageAlt: 'A flock in its village pen — where the manure is collected',
    status: 'Collection system in place',
    source: 'C s14, A p6 L23–29',
  },
  {
    slug: 'pesticide',
    name: 'Pesticide',
    line: 'From goat urine',
    detail:
      'A distillation unit producing urine-based organic pesticide. Commissioned in July 2025 and running in a dedicated room at the Malpur facility.',
    // No photograph of the distillation unit exists in the library. The one image filed
    // under its launch is a project signboard, and still carries a GPS stamp.
    image: null,
    imageAlt: '',
    status: 'Unit commissioned July 2025',
    source: 'C s14, C s11',
  },
]

export const VERTICALS_INTRO = {
  eyebrow: 'Four verticals',
  heading: 'Everything the animal produces has somewhere to go',
  standfirst:
    'Milk is what the family sells every day. But a goat also produces dung and urine, and it has to eat — so the foundation runs three more lines that turn what would otherwise be waste into income, and cut what a family spends on feed.',
  source: 'C s14',
}
