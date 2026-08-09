import type { Milestone } from './types'

export const TIMELINE_INTRO = {
  eyebrow: 'The journey',
  heading: 'January 2024 to today',
  standfirst: 'Nineteen months, in the order it happened.',
}

export const TIMELINE: Milestone[] = [
  {
    date: '1 January 2024',
    iso: '2024-01-01',
    title: 'Phase one begins',
    detail:
      'Backward integration starts — selection and tagging of goats with records, health check-ups, deworming and vaccination, feed supply, hygienic sheds, and training for women farmers.',
    image: '05-field-work/B_p07_00.webp',
    imageAlt: 'A livestock supervisor recording flock details in a village',
    source: 'A p10 L2, A p9 L10–38',
  },
  {
    date: 'March–April 2025',
    iso: '2025-03-15',
    title: 'Summer health camps',
    detail:
      'Run with MAFSU — four veterinarians and four postgraduate students from Akola, across all 17 villages. Ninety women flock owners took part.',
    image: '09-events/image31.webp',
    imageAlt: 'Veterinarians examining goats at a village health camp',
    source: 'A p10 L15–20',
  },
  {
    date: '10 April 2025',
    iso: '2025-04-10',
    title: 'Health card distribution',
    detail:
      'The Zalawadi goat health checkup and health card distribution camp. Health cards have now been prepared for over 3,000 goats.',
    image: '09-events/image32.webp',
    imageAlt: 'Health cards being distributed to flock owners at the April 2025 camp',
    source: 'C s11, A p10 L19',
  },
  {
    date: '29 April 2025',
    iso: '2025-04-29',
    title: 'The project is announced publicly',
    detail: 'The public announcement of the Goat Milk and Breed Development Project.',
    image: '09-events/image35.webp',
    imageAlt: 'The public announcement event for the project in April 2025',
    source: 'C s11',
  },
  {
    date: '15 July 2025',
    iso: '2025-07-15',
    title: 'Urine distillation unit starts',
    detail:
      'The goat urine distillation unit begins operating, opening the fourth vertical — organic pesticide.',
    image: '09-events/image46.webp',
    imageAlt: 'The goat urine distillation unit at Malpur',
    source: 'C s11',
  },
  {
    date: 'Ongoing',
    title: 'Daily milk delivery from Malpur',
    detail:
      'Everyday delivery of Zalawadi goat milk begins from Malpur — the point at which the model stops being a plan and starts being a transaction that repeats.',
    image: '07-dairy/image49.webp',
    imageAlt: 'A goat milk delivery vehicle loaded and leaving Malpur',
    source: 'C s14',
  },
]

/** Institutional visits, kept separate so they do not crowd the operational timeline. */
export const VISITS: Milestone[] = [
  {
    date: '2025',
    title: 'State Bank of India visits the project office',
    detail: 'SBI officers visited the project office at Malpur.',
    source: 'C s13',
  },
]

export const PHASES = [
  {
    n: 'Phase 1',
    years: 'Year 1 & 2',
    title: 'Backward integration',
    focus: 'Health, feed, genetics, breeding training, social support',
    activities: [
      'Selection and tagging of good goat breeds, with records',
      'Regular health check-ups, deworming, vaccination and veterinary care',
      'Feed analysis and supply chain establishment',
      'Hygienic goat sheds',
      'Training women farmers in management, artificial insemination and breeding support',
      'Pregnancy and delivery support, and newborn kid care',
    ],
    source: 'A p9 L10–38',
  },
  {
    n: 'Phase 2',
    years: 'Year 2 & 3',
    title: 'Milk enhancement & processing',
    focus: 'Production — milk, urine, manure',
    activities: [
      'Training farmers in hygienic milking',
      'Safe collection, quality check, weighing and transport',
      'Storage in bulk milk coolers and chilling',
      'Pasteurisation and packaging',
      'Development of value-added products',
      'Refrigeration and storage for distribution',
    ],
    source: 'A p9 L10–38',
  },
  {
    n: 'Phase 3',
    years: 'Year 2 onwards',
    title: 'Forward linkage',
    focus: 'Market linkages — authentication, authorisation, marketing support',
    activities: [
      'Product certification and approvals',
      'Branding, marketing and sales channels',
      'Promotion via local shops, fairs, cooperatives and online platforms',
      'Building distribution networks for milk and by-products',
    ],
    source: 'A p9 L10–38',
  },
  {
    n: 'Long-term pillar',
    years: 'Year 3 to 12',
    title: 'Genetic improvement',
    focus: 'Gradual breed improvement',
    activities: [
      'Disease resistance, higher yield and adaptability, improved gradually',
      'Selection driven by the per-animal records built from year one',
    ],
    source: 'A p9 L10–38',
  },
]
