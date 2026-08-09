/**
 * Every factual constant on this site carries a `source`.
 *
 * Citation format follows docs/CONTENT-SOURCE-MAP.md:
 *   A = ASF Proposal (1 Oct 2025) · B = Malpur Project Profile · C = IGBDPL Profile deck
 *   "A p7 L6" = document A, page 7, line 6. "C s13" = document C, slide 13.
 *
 * If a value has no source it does not go on the site (CLAUDE.md §4).
 */
export type Sourced = {
  source: string
}

export type Stat = Sourced & {
  /** Numeric value the count-up animates to. */
  value: number
  label: string
  prefix?: string
  suffix?: string
  decimals?: number
  /** Shown under the figure where the number needs qualifying, e.g. an as-of date. */
  note?: string
}

export type Fact = Sourced & {
  term: string
  detail: string
}

export type Milestone = Sourced & {
  date: string
  /** Sort key. Undated entries sort last. */
  iso?: string
  title: string
  detail: string
  image?: string
  imageAlt?: string
}

export type Village = Sourced & {
  name: string
  district: 'Dhule' | 'Nandurbar'
  /** Distance from Malpur in km, from the B p5 survey table. */
  distanceKm?: number
  flockOwners?: number
  goats?: number
}

export type Partner = Sourced & {
  name: string
  abbr: string
  location?: string
  role: string
}

export type Person = Sourced & {
  name: string
  role: string
  org?: string
}

/**
 * A frame in the flock-owners gallery.
 *
 * `ratio` travels with the photograph rather than with the slot, because these source
 * frames genuinely differ — two are 9:16 vertical stills and cropping them into a shared
 * landscape slot destroys them (see WOMEN.gallery in traction.ts). It only ever takes a
 * design-system token, so replacing a photograph stays a file swap.
 *
 * The first entry is the lead: it runs large beside the pull-quote. The rest flow into a
 * balanced column layout that accommodates their differing heights.
 */
export type WomenPhoto = {
  file: string
  alt: string
  ratio: 'portrait' | 'portrait-tall' | 'landscape' | 'square'
  caption?: string
}
