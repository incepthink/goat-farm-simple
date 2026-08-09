import type { Person, Sourced } from './types'

export const ORG = {
  name: 'Annasaheb Shinde Foundation',
  legalName: 'Annasaheb Shinde Foundation for Agro & Social Development',
  shortName: 'ASF',
  tagline: 'Empowering women and marginal farmers through sustainable livelihoods',
  taglineSource: 'A p1 L4–5',
  projectName: 'Goat Milk and Breed Development Project',
  projectLocation: 'Village Malpur, Tal. Sindkheda, Dist. Dhule, Maharashtra',
  projectLocationSource: 'B p1 L6–7',
} as const

/** The three linked entities. This structure is the whole reason the model works. */
export const ENTITIES: (Sourced & {
  abbr: string
  name: string
  type: string
  role: string
  funding: string
})[] = [
  {
    abbr: 'ASF',
    name: 'Annasaheb Shinde Foundation for Agro & Social Development',
    type: 'Section 8 non-profit',
    role: 'Ground implementation — farmer mobilisation, training, veterinary care, tagging, and women’s empowerment. The on-ground social implementer, and the link between government programmes and the families themselves.',
    funding: 'Donor and CSR funded',
    source: 'A p3 L18, A p8 L22–24',
  },
  {
    abbr: 'IGBDPL',
    name: 'Indigenous Goat Breed Development Pvt. Ltd.',
    type: 'Private limited company',
    role: 'Commercial execution — goat milk collection, processing, cold chain management, feed supply, and establishing farmer market linkages.',
    funding: 'Commercially funded',
    source: 'A p8 L16–18',
  },
  {
    abbr: 'AJAMESH',
    name: 'AJAMESH',
    type: 'ASF-affiliated enterprise',
    role: 'Auxiliary income streams beyond milk — manure, urine-based pesticides and organic by-products.',
    funding: 'Enterprise revenue',
    source: 'A p8 L19–21',
  },
]

export const IGBDPL_IDENTIFIERS = {
  cin: 'U01100PN2022PTC209861',
  gstin: '27AAGCI5953D1ZI',
  source: 'C s1',
} as const

export const LEADERSHIP: Person[] = [
  {
    name: 'Mr. Anil Annasaheb Shinde',
    role: 'Chief Executive Officer',
    org: 'Annasaheb Shinde Foundation',
    source: 'B p9',
  },
  {
    name: 'Mr. Kiran Shreekant Patwardhan',
    role: 'Chief Operating Officer',
    org: 'Annasaheb Shinde Foundation',
    source: 'B p9',
  },
  {
    // Not an error — the same person holds both posts, so roles are labelled by entity.
    name: 'Mr. Kiran Shreekant Patwardhan',
    role: 'Chief Executive Officer',
    org: 'Indigenous Goat Breed Development Pvt. Ltd.',
    source: 'C s15',
  },
]

export const LEGACY = {
  name: 'Annasaheb Shinde',
  descriptor: 'Parliamentarian, and a father of India’s Green Revolution',
  body: 'The foundation carries the name of the late Annasaheb Shinde, a respected Parliamentarian who played a pivotal role in India’s food security system and its agricultural revolution. His vision was to transform agriculture into a source of stability and dignity for rural families. That is the same brief, sixty years on, applied to the animal those families already own.',
  source: 'A p3 L22–24, B p1 L8–9',
}

export const OFFICES = [
  {
    label: 'Mumbai',
    kind: 'Registered office',
    lines: ['G-102, Maheshwari Nagar', 'Kondivita Road No. 16', 'Andheri East, Mumbai 400093'],
    source: 'B p1 L2',
  },
  {
    label: 'Pune',
    kind: 'Office',
    lines: ['Alankar Bhavan', '1132/2, Fergusson College Road', 'Pune 411016'],
    source: 'B p1 L3',
  },
  {
    label: 'Malpur',
    kind: 'Project site & dairy',
    lines: [
      'Goat Dairy, Amravati Dam Road',
      'Village Malpur, Sindkheda',
      'Dist. Dhule, Maharashtra 425408',
    ],
    source: 'C s15',
  },
]

export const CONTACT = {
  phones: ['+91 99207 88947', '+91 77090 10407', '+91 94230 12256'],
  phonesSource: 'B p1 L4, C s15',
  emails: [
    { address: 'ceoasf23@gmail.com', label: 'CEO, ASF' },
    { address: 'cooasf22@gmail.com', label: 'COO, ASF' },
    { address: 'igbdpl22@gmail.com', label: 'IGBDPL' },
  ],
  emailsSource: 'B p1 L5, C s15',
}

export const SDGS: Sourced & { goals: { number: number; title: string }[] } = {
  goals: [
    { number: 1, title: 'No poverty' },
    { number: 2, title: 'Zero hunger' },
    { number: 5, title: 'Gender equality' },
    { number: 8, title: 'Decent work and economic growth' },
  ],
  source: 'A p3 L16',
}
