import type { Village } from './types'

/**
 * ⚠️  Two things about this file.
 *
 * 1. The milk column of the source table (B p5) is headed only "Milk (Liters)" with NO
 *    time unit. It could be daily, monthly or annual — a 30× ambiguity — so the litre
 *    figures, and the 9,164 total, are deliberately absent from this file and from the
 *    site. See CLAUDE.md §5 and docs/CLIENT-QUESTIONS.md §3.
 *
 * 2. `distanceKm` is real, from B p5. `bearing` is NOT — no coordinates exist in any
 *    source document. The map is therefore drawn as a distance schematic: rings are to
 *    scale, bearings are chosen for legibility and are labelled as such in the UI.
 *    If the client supplies GPS coordinates, this becomes a real map.
 *
 * Spellings follow C s3 where the two documents disagree (Balsane not Balsana,
 * Lamkani not Lamkhani, Shewade not Shevade, Salve not Salwe).
 */

export const VILLAGE_TABLE_SOURCE = 'B p5'

/**
 * The 13 villages surveyed in the B p5 table, with real flock and distance data.
 *
 * `bearing` is a layout value, not a geographic one. The Dhule villages are spread across
 * the 20°–246° arc and the Nandurbar villages across 270°–330°, spaced far enough apart
 * that their labels do not collide at the plotted radius. Distance is the only spatial
 * fact here, and it is the only one drawn to scale.
 */
export const SURVEYED_VILLAGES: (Village & { bearing: number })[] = [
  { name: 'Malpur', district: 'Dhule', distanceKm: 2, flockOwners: 8, goats: 500, bearing: 0, source: 'B p5' },
  { name: 'Dondaicha', district: 'Dhule', distanceKm: 7, flockOwners: 8, goats: 300, bearing: 20, source: 'B p5' },
  { name: 'Karle', district: 'Dhule', distanceKm: 8, flockOwners: 11, goats: 382, bearing: 50, source: 'B p5' },
  { name: 'Balsane', district: 'Dhule', distanceKm: 15, flockOwners: 7, goats: 180, bearing: 78, source: 'B p5' },
  { name: 'Tavkheda', district: 'Dhule', distanceKm: 19, flockOwners: 7, goats: 245, bearing: 106, source: 'B p5' },
  { name: 'Shewade', district: 'Dhule', distanceKm: 29, flockOwners: 9, goats: 459, bearing: 134, source: 'B p5' },
  { name: 'Chimthane', district: 'Dhule', distanceKm: 29, flockOwners: 7, goats: 350, bearing: 162, source: 'B p5' },
  { name: 'Lamkani', district: 'Dhule', distanceKm: 35, flockOwners: 9, goats: 620, bearing: 190, source: 'B p5' },
  { name: 'Vavad', district: 'Dhule', distanceKm: 35, flockOwners: 8, goats: 280, bearing: 218, source: 'B p5' },
  { name: 'Arave', district: 'Dhule', distanceKm: 37, flockOwners: 10, goats: 621, bearing: 246, source: 'B p5' },
  { name: 'Khokrale', district: 'Nandurbar', distanceKm: 9, flockOwners: 5, goats: 260, bearing: 272, source: 'B p5' },
  { name: 'Shanimandal', district: 'Nandurbar', distanceKm: 25, flockOwners: 12, goats: 470, bearing: 302, source: 'B p5' },
  { name: 'Vaindane', district: 'Nandurbar', distanceKm: 9, flockOwners: 10, goats: 312, bearing: 332, source: 'B p5' },
]

/**
 * Villages named in C s3 that are part of the project but do not appear in the B p5
 * survey table — so they carry no flock or distance figures.
 */
export const ADDITIONAL_VILLAGES: Village[] = [
  { name: 'Hatti', district: 'Dhule', source: 'C s3' },
  { name: 'Kharde', district: 'Dhule', source: 'C s3' },
  { name: 'Anjanvihire', district: 'Dhule', source: 'C s3' },
  { name: 'Salve', district: 'Dhule', source: 'C s3' },
  { name: 'Ghotane', district: 'Nandurbar', source: 'C s3' },
]

export const ALL_VILLAGES: Village[] = [...SURVEYED_VILLAGES, ...ADDITIONAL_VILLAGES]

export const VILLAGE_TOTALS = {
  surveyedVillages: SURVEYED_VILLAGES.length,
  flockOwners: SURVEYED_VILLAGES.reduce((n, v) => n + (v.flockOwners ?? 0), 0),
  goats: SURVEYED_VILLAGES.reduce((n, v) => n + (v.goats ?? 0), 0),
  source: 'B p5',
}

export const MAP = {
  eyebrow: 'The area of operation',
  heading: 'Everything inside thirty kilometres of the dairy',
  standfirst:
    'Villages were selected within a 30 km periphery of Malpur — close enough that milk collected in the morning reaches the chillers while it is still cold. Seventeen are in the project; thirteen of them have been surveyed flock by flock, and those are the ones plotted here.',
  standfirstSource: 'B p2 L3–4, B p5, C s3',
  /** Shown beneath the diagram. Being explicit about this is the point. */
  schematicNote:
    'Schematic. Distance from Malpur is to scale; compass bearings are indicative, as no survey coordinates exist in the source documents.',
  ringsKm: [10, 20, 30, 40],
  /**
   * Note on the goat count: the B p5 survey totals 4,979 goats present across 13
   * villages. The headline figure of 4,000 is goats *tagged* as of 31 May 2025.
   * Different measures, different dates — the UI says so rather than reconciling them.
   */
  countNote:
    'The survey counts goats present in each village. The headline figure of 4,000 counts goats tagged as of 31 May 2025 — a different measure, taken on a different date.',
  countNoteSource: 'B p5, A p10 L5',
}
