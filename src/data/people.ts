/**
 * Patrons, board, technical team, executive team and core committee.
 *
 * ── On the copy ──────────────────────────────────────────────────────────────
 * Every bio here is a condensed rewrite of the text on the client's existing site.
 * The originals run 150–250 words each and are padded with speculation — "likely plays a
 * crucial role", "would have been instrumental", "may have enabled her to". That padding
 * is a large part of why the current site fails to say what these people actually did:
 * eight paragraphs of hedging reads as having nothing to report.
 *
 * The rule applied throughout: keep every checkable fact (post held, institution,
 * qualification, named award, named programme), drop every sentence that speculates about
 * what someone's expertise "could" contribute. Nothing has been added that was not in the
 * original text.
 *
 * ── On the photographs ───────────────────────────────────────────────────────
 * Sourced from the client's existing site (public/images/13-people). They are small, and
 * several are visibly compressed. Ask the client for originals — see the note in
 * docs/CLIENT-QUESTIONS.md.
 *
 * `bio: null` means the existing site carries a photograph and a name for that person but
 * no description at all. Do not invent one. The page renders name and role only.
 */

export type PersonEntry = {
  name: string
  /** The line under the name — post, institution or qualification. */
  role: string
  bio: string | null
  image: string | null
}

const P = '/images/13-people'

/* ────────────────────────────────────────────────────────────────────────────
 * Patrons
 * ──────────────────────────────────────────────────────────────────────────── */

export const PATRONS_INTRO = {
  eyebrow: 'The patrons',
  heading: 'The people who lend this work their name',
  standfirst:
    'The foundation’s patrons are senior figures in agriculture, commerce, banking and public administration. Their association is the reason a project run out of a village in Dhule can reach a national institution and be answered.',
}

export const PATRONS: PersonEntry[] = [
  {
    name: 'Hon’ble Shri Sharad Pawar',
    role: 'Former Union Minister of Agriculture',
    bio: 'A defining figure in Maharashtra and national politics, with a career built on agriculture, rural development and social welfare.',
    image: `${P}/casess-1.png`,
  },
  {
    name: 'Shri Suresh Prabhu',
    role: 'Former Union Minister; India’s Sherpa to the G7 and G20',
    bio: 'Has led reform in railways, commerce and aviation, and represented India in international forums and global organisations.',
    image: `${P}/casess-2.jpg`,
  },
  {
    name: 'Shri Sunil Lal Bahadur Shastri',
    role: 'Public representative',
    bio: 'A committed advocate for farmers, carrying forward his father Lal Bahadur Shastri’s call of “Jai Jawan, Jai Kisan”.',
    image: `${P}/casess-3.jpg`,
  },
  {
    name: 'Shri Balasaheb Thorat',
    role: 'Former Minister of Agriculture, Maharashtra',
    bio: 'Worked on agricultural productivity, farmer welfare and rural livelihoods across Maharashtra as Agriculture Minister.',
    image: `${P}/casess-4.jpg`,
  },
  {
    name: 'Padma Vibhushan Dr. Raj S. Paroda',
    role: 'Former Director General, ICAR; Secretary, DARE',
    bio: 'An agricultural scientist and administrator whose work reshaped Indian agricultural research and development, and with it the country’s food security.',
    image: `${P}/casess-5.jpg`,
  },
  {
    name: 'Dr. Yashwant Thorat',
    role: 'Former Chairman & Managing Director, NABARD',
    bio: 'Led the National Bank for Agriculture and Rural Development, where his work centred on rural development, agricultural finance and inclusive growth.',
    image: `${P}/casess-6.jpg`,
  },
  {
    name: 'Shri Mehmood Khan',
    role: 'Senior executive, Unilever',
    bio: 'Has held leadership roles at Unilever in innovation, research and development, and corporate strategy, with a focus on sustainability.',
    image: `${P}/casess-7.jpg`,
  },
  {
    name: 'Shri Ajit Jain',
    role: 'Jain Irrigation Group',
    bio: 'Leadership at Jain Irrigation Systems Limited, whose irrigation technology and agricultural solutions are used across India and internationally.',
    image: `${P}/casess-8.jpg`,
  },
]

/* ────────────────────────────────────────────────────────────────────────────
 * Board of Directors
 * ──────────────────────────────────────────────────────────────────────────── */

export const BOARD: PersonEntry[] = [
  {
    name: 'Mr. Ashok Annasaheb Shinde',
    role: 'Director · MS Agricultural Engineering, Michigan University, USA',
    bio: 'Brings an agricultural engineering background to the foundation’s work on rural development.',
    image: `${P}/director-11.png`,
  },
  {
    name: 'Mr. Dilip Annasaheb Shinde',
    role: 'Director · LLM, constitutional law',
    bio: 'A constitutional law expert. Provides the foundation’s legal guidance and oversight.',
    image: `${P}/director-22.png`,
  },
  {
    name: 'Mrs. Vijaya Dande',
    role: 'Director · Founder Director, Sandipani School, Nagpur',
    bio: 'Founder Director of the Sandipani School in Nagpur, with a long record in education and community development.',
    image: `${P}/director-33.png`,
  },
]

/* ────────────────────────────────────────────────────────────────────────────
 * Technical team — the scientific credibility of the whole project
 * ──────────────────────────────────────────────────────────────────────────── */

export const TECHNICAL: PersonEntry[] = [
  {
    name: 'Dr. Syed Ali',
    role: 'Technical-in-charge, ASF · Animal genetics',
    bio: 'The first Indian scientist to become a member of the International Embryo Transfer Society. Cloned camels in Abu Dhabi at the camel embryo transfer laboratory of H.H. Sheikh Mohammed bin Rashid Al Maktoum, achieving second-generation births.',
    image: `${P}/blog-Dr__Syed_Ali.jpg`,
  },
  {
    name: 'Dr. Arun Sirothia',
    role: 'Retired Professor & Head, Animal Genetics and Breeding, MAFSU Nagpur',
    bio: 'Works on conserving Nagpuri buffaloes and Gaolao cows. Recently honoured by the National Bureau of Animal Genetic Resources, SEVA and the Honey Bee Network.',
    image: `${P}/blog-Dr__Arun_Sirothia.jpg`,
  },
  {
    name: 'Dr. Abdul Samad',
    role: 'Former Dean, Bombay Veterinary College; Director of Instructions, MAFSU Nagpur',
    bio: 'Awarded the Dr. Arun Sangani First Prize in 2009 for nanotechnology drug research, and the Distinguished Veterinarian Award of the Indian Association for the Advancement of Veterinary Research.',
    /**
     * The existing site fills this slot with `image/blog/2.jpg`, a 360×240 generic stock
     * avatar — not a photograph of Dr. Samad. Publishing a stranger's face under a named
     * scientist's name is worse than publishing no face, so this renders the initial
     * fallback instead. Same for Dr. Kadoo below (`blog/1.jpg`). Ask the client for real
     * portraits.
     */
    image: null,
  },
  {
    name: 'Dr. Deepak S. Kale',
    role: 'Assistant Professor & Head, Animal Genetics and Breeding',
    bio: 'PhD with a post-doctoral fellowship from the Centre for Cellular and Molecular Biology. Principal investigator on “Effect of Candidate Genes on Milk Production Traits in Gaolao Cattle”, and formerly a Senior Research Fellow at ICAR-NDRI.',
    image: `${P}/blog-Dr__Deepak_Kale.jpg`,
  },
  {
    name: 'Dr. Kirty Sirothia',
    role: 'Retired Associate Professor of Veterinary Pathology, Nagpur Veterinary College, MAFSU',
    bio: 'A PhD in veterinary pathology with a further qualification in sociology — teaching, research and diagnostic pathology across both.',
    image: `${P}/blog-Dr__Kirty_Sirothia.jpg`,
  },
  {
    name: 'Dr. Deepak Kadoo',
    role: 'Animal Husbandry Project Coordinator, Pedigree Selection Programme for Gaolao breed, RGM–NDDB',
    bio: 'Coordinates pedigree selection for the Gaolao breed. Previously worked at grassroots level across districts of Maharashtra, introducing the Mahila Sanghatika and Prerika roles under SGSY.',
    image: null, // stock avatar on the existing site — see the note on Dr. Abdul Samad
  },
]

/* ────────────────────────────────────────────────────────────────────────────
 * Executive team
 * ──────────────────────────────────────────────────────────────────────────── */

export const EXECUTIVE: PersonEntry[] = [
  {
    name: 'Mr. Anil Annasaheb Shinde',
    role: 'Chief Executive Officer',
    bio: 'An entrepreneur at both rural and urban level, with working knowledge of animal husbandry development. Leads the foundation.',
    image: `${P}/executive-1.png`,
  },
  {
    name: 'Mr. Kiran Shreekant Patwardhan',
    role: 'Chief Operating Officer',
    bio: 'Works across solid waste management, the rural economy, women’s empowerment and animal husbandry development.',
    image: `${P}/blog-Mr__Kiran_patwardhan.jpg`,
  },
]

/* ────────────────────────────────────────────────────────────────────────────
 * Managing core committee
 * ──────────────────────────────────────────────────────────────────────────── */

export const CORE_COMMITTEE: PersonEntry[] = [
  {
    name: 'Sachin Itkar',
    role: 'Advisor and facilitator',
    bio: 'Advises Indian and overseas corporates on India access, government relations and strategy.',
    image: `${P}/core-1.jpg`,
  },
  {
    name: 'Sachin Phadtare',
    role: 'CMD, Neogroup of Companies',
    bio: 'A bachelor’s in management studies specialising in marketing and a master’s specialising in finance. Founded Neogreen Adworld Pvt Ltd in 2020, and heads Neogroup across hi-tech farming, real estate, banking and finance, IT and hospitality.',
    image: `${P}/core-2.jpg`,
  },
  { name: 'Dr. Shivangi Pawar', role: 'Core committee', bio: null, image: `${P}/core-3.jpg` },
  { name: 'Mr. Abhinao Godse', role: 'Core committee', bio: null, image: `${P}/core-4.jpg` },
  {
    name: 'Tanveer M. S. Nizam',
    role: 'BA, LLM',
    bio: null,
    image: `${P}/core-5.jpg`,
  },
  {
    name: 'Advocate Sunil Bapurao Rawade',
    role: 'Advocate',
    bio: null,
    image: `${P}/core-6.jpg`,
  },
  {
    name: 'Digant Chib',
    role: 'Head of Business Development, Ojasattvic Sciences',
    bio: 'Business development across the agro sector, international trade and consumer markets — a 25% rise in international sales and 30% growth in business opportunities. Postgraduate Certification in Product Management from IIM Indore, and a BBA from the American University in Dubai.',
    image: `${P}/core-7.jpg`,
  },
  {
    name: 'Dr. Prashant Konduskar',
    role: 'Founder, COO',
    bio: null,
    image: `${P}/core-8.jpg`,
  },
  { name: 'Chetan Shetty', role: 'Core committee', bio: null, image: `${P}/core-9.jpg` },
  { name: 'Dr. G. Rathinavelu', role: 'Core committee', bio: null, image: `${P}/core-10.jpg` },
  {
    name: 'Sundaresan Nandyal',
    role: 'Business and startup specialist',
    bio: 'Thirty years in sales, strategy and business transformation across telecom, banking and agri-inputs, on products including money transfers, wallets and digital payments. Has worked with Torrent Pharma, Usha International, Reliance Infocomm and Megasoft, and with startups including Suvidhaa Inforserve, PayNearby, EasyPay and Kan Biosys.',
    image: `${P}/core-11.jpg`,
  },
]

export const COMMITTEE_GROUPS: { title: string; blurb: string; people: PersonEntry[] }[] = [
  {
    title: 'Board of Directors',
    blurb: 'The governing board of the Annasaheb Shinde Foundation.',
    people: BOARD,
  },
  {
    title: 'Executive Team',
    blurb: 'Day-to-day leadership of the foundation.',
    people: EXECUTIVE,
  },
  {
    title: 'Technical Team',
    blurb:
      'Veterinary science, animal genetics and breeding. This is the group that makes a claim about genetic improvement something other than an aspiration.',
    people: TECHNICAL,
  },
  {
    title: 'Managing Core Committee',
    blurb: 'Advisors across business, law, finance and rural enterprise.',
    people: CORE_COMMITTEE,
  },
]
