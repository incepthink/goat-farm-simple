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

/**
 * ⚠️  This site is the foundation's, and only the foundation's.
 *
 * The organisation works alongside commercial buyers — "our associates" — who collect the
 * milk daily and pay above the local rate. That relationship is what turns a healthier
 * goat into recurring income, so it is named in the copy. The associates themselves are
 * not: no company names, no CINs, no equity or investment language, and nothing on this
 * site that could read as soliciting investment rather than donations.
 *
 * An earlier build presented three linked entities side by side. It was removed on the
 * client's instruction, and it should not come back.
 */
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
  ],
  emailsSource: 'B p1 L5',
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
