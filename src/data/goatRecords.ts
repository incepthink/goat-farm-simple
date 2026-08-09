/**
 * The real per-animal record — one flock, 38 goats, transcribed from B p8.
 *
 * ⚠️  TWO COLUMNS OF THE SOURCE TABLE ARE DELIBERATELY NOT HERE.
 *
 *  - The source carries per-goat feed cost and labour cost in rupees. CLAUDE.md §5 bars
 *    publishing any rupee amount, cost per intervention, revenue, margin or milk price
 *    without client confirmation, so those columns are omitted entirely.
 *  - The source also carries the flock owner's personal mobile number. It is not here and
 *    must not be added.
 *
 * What remains — ID, age, frame, lactations and yield — is the persuasive part anyway:
 * it proves the data system is real and granular at the level of the individual animal.
 */

export type GoatRecord = {
  id: string
  ageYears: number
  heightCm: number
  weightKg: number
  /** Completed lactations. Null for animals too young to have lactated. */
  lactations: number | null
  /** Average daily yield in litres. Null where not yet recorded. */
  milkAvgL: number | null
}

export const RECORD_OWNER = {
  name: 'Manishabai Devidas Dhangar',
  village: 'Dondaicha',
  district: 'Dhule',
  source: 'B p8',
  // Consent to publish her name should be confirmed — see docs/CLIENT-QUESTIONS.md §5.
}

export const GOAT_RECORDS: GoatRecord[] = [
  { id: '104080809225', ageYears: 4, heightCm: 111, weightKg: 57, lactations: 3, milkAvgL: 1.5 },
  { id: '104080809101', ageYears: 4, heightCm: 110, weightKg: 55, lactations: 3, milkAvgL: 1.5 },
  { id: '104080809588', ageYears: 4, heightCm: 106, weightKg: 65, lactations: 3, milkAvgL: 1.5 },
  { id: '104080809988', ageYears: 4, heightCm: 103, weightKg: 51, lactations: 3, milkAvgL: 2 },
  { id: '104080809624', ageYears: 4, heightCm: 110, weightKg: 57, lactations: 3, milkAvgL: 1.5 },
  { id: '104080809692', ageYears: 4, heightCm: 98, weightKg: 49, lactations: 3, milkAvgL: 1.5 },
  { id: '104080809613', ageYears: 3, heightCm: 103, weightKg: 46, lactations: 2, milkAvgL: 1.5 },
  { id: '104080809921', ageYears: 4, heightCm: 92, weightKg: 58, lactations: 3, milkAvgL: 1.5 },
  { id: '104080809715', ageYears: 4, heightCm: 102, weightKg: 51, lactations: 3, milkAvgL: 1.5 },
  { id: '104080809590', ageYears: 4, heightCm: 92, weightKg: 46, lactations: 3, milkAvgL: 1.5 },
  { id: '104080809555', ageYears: 4, heightCm: 103, weightKg: 47, lactations: 3, milkAvgL: 2 },
  { id: '104080809214', ageYears: 4, heightCm: 102, weightKg: 53, lactations: 3, milkAvgL: 1.5 },
  { id: '104080809365', ageYears: 4, heightCm: 106, weightKg: 48, lactations: 3, milkAvgL: 1.5 },
  { id: '104080809464', ageYears: 3, heightCm: 90, weightKg: 48, lactations: 2, milkAvgL: 1.5 },
  { id: '104080809602', ageYears: 3, heightCm: 97, weightKg: 49, lactations: 2, milkAvgL: 1.5 },
  { id: '104080809737', ageYears: 3, heightCm: 100, weightKg: 45, lactations: 2, milkAvgL: 1.5 },
  { id: '104080809247', ageYears: 3, heightCm: 102, weightKg: 46, lactations: 2, milkAvgL: 2 },
  { id: '104080809841', ageYears: 3, heightCm: 92, weightKg: 43, lactations: 2, milkAvgL: 2 },
  { id: '104080809178', ageYears: 3, heightCm: 92, weightKg: 42, lactations: 2, milkAvgL: 2 },
  { id: '104080809203', ageYears: 2, heightCm: 92, weightKg: 39, lactations: 1, milkAvgL: 2 },
  { id: '104080809500', ageYears: 3, heightCm: 91, weightKg: 52, lactations: 2, milkAvgL: 1.5 },
  { id: '104080809910', ageYears: 3, heightCm: 111, weightKg: 45, lactations: 2, milkAvgL: 1.5 },
  { id: '104080809054', ageYears: 4, heightCm: 93, weightKg: 52, lactations: 3, milkAvgL: 1.5 },
  { id: '104080809577', ageYears: 3, heightCm: 100, weightKg: 47, lactations: 2, milkAvgL: 1.5 },
  { id: '104080809384', ageYears: 4, heightCm: 101, weightKg: 60, lactations: 3, milkAvgL: 2 },
  { id: '104080809668', ageYears: 4, heightCm: 110, weightKg: 51, lactations: 3, milkAvgL: 2 },
  { id: '104080809431', ageYears: 2, heightCm: 102, weightKg: 47, lactations: 1, milkAvgL: 2 },
  { id: '104080809305', ageYears: 4, heightCm: 102, weightKg: 47, lactations: 3, milkAvgL: 1.5 },
  { id: '104080809681', ageYears: 4, heightCm: 94, weightKg: 55, lactations: 3, milkAvgL: 1.5 },
  { id: '104080809442', ageYears: 4, heightCm: 107, weightKg: 51, lactations: 3, milkAvgL: 1.5 },
  { id: '104080809395', ageYears: 4, heightCm: 103, weightKg: 55, lactations: 3, milkAvgL: 1.5 },
  { id: '104080809293', ageYears: 4, heightCm: 99, weightKg: 61, lactations: 3, milkAvgL: 2 },
  { id: '104080809453', ageYears: 2, heightCm: 88, weightKg: 38, lactations: 1, milkAvgL: 2 },
  { id: '104080809316', ageYears: 3, heightCm: 97, weightKg: 55, lactations: 2, milkAvgL: 2 },
  { id: '104080809954', ageYears: 1, heightCm: 94, weightKg: 39, lactations: null, milkAvgL: null },
  { id: '104080809748', ageYears: 1, heightCm: 92, weightKg: 43, lactations: null, milkAvgL: null },
  { id: '104080809750', ageYears: 1, heightCm: 88, weightKg: 37, lactations: null, milkAvgL: null },
  { id: '104080809191', ageYears: 4, heightCm: 105, weightKg: 53, lactations: 3, milkAvgL: 1.5 },
]

/** The handful dealt out as cards on the homepage. The full table lives on /project. */
export const FEATURED_RECORDS = GOAT_RECORDS.slice(0, 6)

export const RECORD_SUMMARY = {
  count: GOAT_RECORDS.length,
  lactating: GOAT_RECORDS.filter((g) => g.lactations !== null).length,
  heaviest: Math.max(...GOAT_RECORDS.map((g) => g.weightKg)),
  tallest: Math.max(...GOAT_RECORDS.map((g) => g.heightCm)),
}
