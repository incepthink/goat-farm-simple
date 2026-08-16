/**
 * Navigation mirrors the structure of the client's existing site, deliberately.
 *
 * He knows where things live. Changing the *content* is the whole brief; changing where
 * he has to click to find it as well would make the rebuild feel like a different
 * organisation rather than a better-presented one.
 */

export type NavItem = {
  label: string
  to?: string
  children?: { label: string; to: string }[]
}

export const NAV: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Annasaheb Shinde', to: '/annasaheb-shinde' },
  {
    label: 'About Us',
    children: [
      { label: 'Patrons', to: '/patrons' },
      { label: 'Core Committee', to: '/core-committee' },
      { label: 'Gallery', to: '/gallery' },
    ],
  },
  { label: 'Events', to: '/events' },
  { label: 'CSR Activity', to: '/csr-activity' },
  {
    label: 'Projects',
    children: [
      { label: 'Goat Milk Project', to: '/projects/goat-milk' },
      { label: 'Indigenous Cow Project', to: '/projects/indigenous-cow' },
    ],
  },
  { label: 'Contact', to: '/contact' },
]

/** Rendered separately, as the one filled button in the header. */
export const NAV_CTA = { label: 'Donate', to: '/donate' }

export const PAGE_META: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Annasaheb Shinde Foundation — Agro & Social Development',
    description:
      'A goat is a savings account rural families are forced to liquidate. We make the animal healthier and make sure its milk is bought daily, at a better rate. 4,000 goats tagged across 17 villages in north Maharashtra.',
  },
  '/annasaheb-shinde': {
    title: 'Annasaheb Shinde — Father of India’s Food Security',
    description:
      'Parliamentarian, fifteen years in the Food & Agriculture Ministry, and an architect of India’s Green Revolution. The life the foundation is named for.',
  },
  '/patrons': {
    title: 'Patrons — Annasaheb Shinde Foundation',
    description:
      'The foundation’s patrons: leaders in agriculture, commerce, banking and public administration.',
  },
  '/core-committee': {
    title: 'Core Committee — Annasaheb Shinde Foundation',
    description:
      'The board of directors, the technical team and the executive team behind the foundation’s work.',
  },
  '/gallery': {
    title: 'Gallery — Annasaheb Shinde Foundation',
    description: 'Field photography from the villages, the dairy, the health camps and the flocks.',
  },
  '/events': {
    title: 'Events — Annasaheb Shinde Foundation',
    description:
      'Health camps, health card distribution, the public announcement and the commissioning of the distillation unit — from January 2024 onward.',
  },
  '/csr-activity': {
    title: 'CSR Activity — Annasaheb Shinde Foundation',
    description:
      'What corporate social responsibility funding pays for at Malpur, what it has already produced, and how it is accounted for.',
  },
  '/projects/goat-milk': {
    title: 'Goat Milk & Breed Development Project — Malpur, Dhule',
    description:
      'The model, the Zalawadi breed, the built dairy, the tagging system and the four verticals. 4,000 goats tagged across 17 villages.',
  },
  '/projects/indigenous-cow': {
    title: 'Indigenous Cow Project — Arvi, Wardha',
    description:
      'Gaolao breed development and milk production in Wardha district, through farmer producer companies at village level.',
  },
  '/contact': {
    title: 'Contact — Annasaheb Shinde Foundation',
    description:
      'Three offices — Mumbai, Pune and the project site at Malpur, Dhule. CSR, institutional and partnership enquiries.',
  },
  '/donate': {
    title: 'Donate — Annasaheb Shinde Foundation',
    description:
      'Fund tagging, health cards, veterinary camps, training and the laboratory — the field work that earns the foundation nothing and makes everything else possible.',
  },
}
