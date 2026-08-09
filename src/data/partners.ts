import type { Partner, Person } from './types'

export const PARTNERS_INTRO = {
  eyebrow: 'Who is behind it',
  heading: 'The institutions that make this checkable',
  standfirst:
    'Breed improvement claims are only worth anything if someone independent is standing behind the protocol. These are the bodies that designed it, support it, and can be asked about it.',
}

export const PARTNERS: Partner[] = [
  {
    name: 'Maharashtra Animal & Fishery Sciences University',
    abbr: 'MAFSU',
    location: 'Nagpur',
    role: 'Leads the technical, social and commercial protocols, and designs the health, feed and genetic programmes.',
    source: 'A p8 L2–4',
  },
  {
    name: 'ICAR — Central Institute for Research on Goats',
    abbr: 'ICAR-CIRG',
    location: 'Mathura',
    role: 'National-level research and conservation. Supports goat breed improvement and elite buck distribution.',
    source: 'A p8 L5–6',
  },
  {
    name: 'ICAR — Central Sheep & Wool Research Institute',
    abbr: 'ICAR-CSWRI',
    location: 'Jaipur',
    role: 'Research association on breed development.',
    source: 'B p9',
  },
  {
    name: 'ICAR — Central Institute for Research on Cattle',
    abbr: 'ICAR-CIRC',
    location: 'Meerut',
    role: 'Research association on breed development.',
    source: 'B p9',
  },
  {
    name: 'Animal Husbandry Department, Government of Maharashtra',
    abbr: 'AHD Maharashtra',
    role: 'Execution support for central and state government policy, government resolutions and subsidies — and the partner supporting the tagging of every Zalawadi goat in the area of operation.',
    source: 'A p8 L7–9, B p2 L13–14',
  },
  {
    name: 'District Collectors, Dhule & Nandurbar',
    abbr: 'District Administration',
    role: 'The administrative body for implementation of livelihood requirements at district level. Nandurbar is a designated Aspirational District.',
    source: 'A p8 L10–11, A p3 L25–26',
  },
  {
    name: 'BAIF Development Research Foundation',
    abbr: 'BAIF',
    location: 'Pune',
    role: 'Hands-on training in animal husbandry and agriculture.',
    source: 'A p8 L12–15',
  },
  {
    name: 'Bharatiya Krushak Samaj',
    abbr: 'BKS',
    role: 'Partner institution.',
    source: 'C s8',
  },
]

export const NAMED_INDIVIDUALS: Person[] = [
  { name: 'Dr. Niteen Patil', role: 'Vice Chancellor', org: 'MAFSU', source: 'C s9, B p5' },
  { name: 'Padma Shree Dr. Raj Paroda', role: 'Agricultural scientist', source: 'C s9' },
  { name: 'Dr. Manish Kumar Chatli', role: 'Director', org: 'ICAR-CIRG', source: 'C s9, B p9' },
  { name: 'Dr. Umesh Singh', role: 'Director', org: 'ICAR-CIRC', source: 'B p9' },
  { name: 'Dr. Arunkumar Tomar', role: 'Director', org: 'ICAR-CSWRI', source: 'B p9' },
  { name: 'Dr. Manoj Aware', role: 'BAIF, Pune', source: 'B p5, B p9' },
  { name: 'Shri Mahadev Kokate', role: 'Hon’ble Minister, Agriculture', source: 'C s9' },
]

/**
 * Institutional photography is rationed to this one strip plus one section on /about.
 * We hold 13 images of officials in meeting rooms and 6 of the women who own 93% of the
 * flocks — building from what is most plentiful would produce a site about handshakes.
 * See CLAUDE.md §6, image rule 1.
 */
export const INSTITUTIONAL_IMAGES = [
  { file: '10-institutional/image38.webp', alt: 'A memorandum of understanding being signed with a partner institution' },
  { file: '10-institutional/image19.webp', alt: 'Project representatives meeting officials from a partner institution' },
  { file: '10-institutional/B_p09_02.webp', alt: 'An official meeting about the goat breed development project' },
  { file: '10-institutional/image13.webp', alt: 'A handover ceremony with institutional partners' },
]
