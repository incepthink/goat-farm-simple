/**
 * Donation tiers.
 *
 * ⚠️  EVERY AMOUNT BELOW IS A PLACEHOLDER.
 *
 * No rupee figure for any intervention appears in any source document, and CLAUDE.md §5
 * forbids guessing one in JSX. So amounts live here as `null` and the UI renders the tier
 * without a price rather than inventing one. Fill in `amount` when the client confirms
 * costs and the price appears everywhere automatically.
 *
 * Each tier maps to a real intervention that the documents describe — that mapping is the
 * part that is sourced, and it is what makes the page honest in the meantime.
 */

export type DonationTier = {
  id: string
  title: string
  body: string
  /** ₹, one-time. null until the client confirms — see docs/CLIENT-QUESTIONS.md §1. */
  amount: number | null // TODO: client to confirm
  source: string
  /** The two the documents themselves flag as needing dedicated funding. */
  headline?: boolean
}

export const DONATION_TIERS: DonationTier[] = [
  {
    id: 'tag-one-goat',
    title: 'Tag and health-card one goat',
    body:
      'A unique digital ID, a health card, and the animal enters the twice-daily record from that day on. This is the unit the entire system is built from.',
    amount: null, // TODO: client to confirm
    source: 'A p10 L5, A p10 L19',
  },
  {
    id: 'flock-year',
    title: 'A family’s flock for a year',
    body:
      'Subsidised fodder and balanced feed, clean water, regular veterinary access, deworming and vaccination — for one family’s whole flock, for twelve months.',
    amount: null, // TODO: client to confirm
    source: 'A p6 L23–24',
  },
  {
    id: 'shed',
    title: 'One hygienic goat shed',
    body:
      'A dedicated shelter with proper feeding and resting areas. Shelter is where kid mortality is won or lost.',
    amount: null, // TODO: client to confirm
    source: 'A p6 L25',
  },
  {
    id: 'health-camp',
    title: 'One village health camp',
    body:
      'The MAFSU model — veterinarians and postgraduate students, a full day in one village, examining every animal and issuing health cards. Ninety women attended the last round.',
    amount: null, // TODO: client to confirm
    source: 'A p10 L15–20',
  },
  {
    id: 'supervisor',
    title: 'Train one Livestock Supervisor',
    body:
      'Ten have been trained so far and six of them manage 110 flocks between them. A supervisor is what turns a scattered set of households into a system that can be measured.',
    amount: null, // TODO: client to confirm
    source: 'A p10 L21–22, B p2 L6–8',
  },
  {
    id: 'laboratory',
    title: 'The laboratory',
    body:
      'The headline ask. The project’s own profile describes the funding required to set up the laboratory as substantial, and names it as a distinct requirement rather than part of general costs.',
    amount: null, // TODO: client to confirm
    source: 'B p3 L1–6',
    headline: true,
  },
  {
    id: 'ai-programme',
    title: 'The artificial insemination programme',
    body:
      'Semen collection and AI — described in the documents as an independent project that will need specific funding. It is the step that turns three years of per-animal data into better animals.',
    amount: null, // TODO: client to confirm
    source: 'B p2 L38–40',
    headline: true,
  },
]

/** Preset buttons on the custom-amount selector. Also placeholders. */
export const SUGGESTED_AMOUNTS: number[] | null = null // TODO: client to confirm

export const DONATE_COPY = {
  eyebrow: 'Support this work',
  heading: 'Fund the work that earns nothing',
  standfirst:
    'Tagging, health cards, veterinary camps, training and the laboratory produce no income. They are also what make a family’s goat worth more, and its milk worth buying. That work is funded by donors, and by nothing else.',
  image: '05-field-work/B_p05_05.webp',
  imageAlt: 'A veterinarian crouched in the dirt examining a goat during a village health camp',
  allocationHeading: 'Where it goes',
  allocation: [
    { label: 'Animal health — camps, vaccination, deworming, health cards', source: 'A p6 L23–29' },
    { label: 'Nutrition — subsidised fodder, silage, mineral supplementation', source: 'A p6 L23–29' },
    { label: 'Infrastructure — hygienic sheds and feeding areas', source: 'A p6 L23–29' },
    { label: 'Training — Livestock Supervisors and women flock owners', source: 'A p10 L21–22' },
    { label: 'Laboratory and breeding programme', source: 'B p3 L1–6, B p2 L38–40' },
  ],
  /**
   * ⚠️  No percentage split is published. No allocation breakdown exists in the source
   * documents, and inventing one on a donation page would be the worst possible place to
   * guess. The list above says what donations fund, not in what proportion.
   */
  trustHeading: 'What we can tell you',
  trust: [
    {
      /**
       * First, and it stays first. A donor should not have to infer which organisation
       * they are giving to — this site is the foundation's alone, and the sentence that
       * says so belongs at the top of the trust list, not implied by the letterhead.
       */
      claim: 'You are donating to the Annasaheb Shinde Foundation',
      detail:
        'A Section 8 non-profit, registered for agro and social development. Contributions fund the foundation’s own field work — animal health, nutrition, training, tagging and the laboratory.',
      source: 'A p3 L18',
    },
    {
      claim: 'Endorsed by two District Collectors',
      detail:
        'Endorsements from the District Collectors of Nandurbar — a designated Aspirational District — and Dhule.',
      source: 'A p3 L25–26',
    },
    {
      claim: 'Aligned to SDGs 1, 2, 5 and 8',
      detail: 'No poverty, zero hunger, gender equality, and decent work and economic growth.',
      source: 'A p3 L16',
    },
    {
      claim: 'Every figure on this site is traceable',
      detail:
        'Each statistic cites the document and page it came from. Where two documents disagreed, we say so rather than picking the better number.',
      source: 'docs/CONTENT-SOURCE-MAP.md',
    },
  ],
  /**
   * ⚠️  NO 80G / FCRA / CSR-1 CLAIM APPEARS ANYWHERE ON THIS PAGE.
   * The registration numbers have not been supplied and CLAUDE.md §5 forbids any
   * tax-benefit claim without them. Do not add "80G eligible" to this page — add the
   * numbers to this file first, then the copy.
   */
  taxNote: null as string | null,
  csrLine: 'Making a corporate contribution?',
  csrCta: 'Talk to us directly',
}
