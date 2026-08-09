/**
 * The Annasaheb Shinde biography page.
 *
 * Condensed and reordered from the existing site's `about_us.html`, which runs ten
 * headed sections of largely repeating prose.
 *
 * Two of those ten have been dropped rather than rewritten: "GOAT BREEDING" and
 * "CATTLE BREEDING". Neither mentions Annasaheb. They are general descriptions of Sirohi
 * goats and of dairy breeds in Ahmednagar, dropped into the middle of a biography, and
 * they are the clearest single example of why the current site fails to say anything —
 * a page about a man's life ends on two paragraphs listing the milk-fat content of Jersey
 * cattle. The breed material belongs on the project pages, where it now lives.
 *
 * Everything retained is a claim the original made about him.
 */

export const LEGACY_HERO = {
  eyebrow: '1922 – 1993',
  name: 'Annasaheb Shinde',
  title: 'The father of India’s food security',
  standfirst:
    'A Member of Parliament for the Kopergaon constituency, fifteen years a minister in the Food & Agriculture Ministry, and one of the architects of the Green Revolution. He inherited a country that could not feed itself and left one that could.',
  /**
   * The banner stays a field photograph even now that we hold a portrait of Annasaheb.
   * `PageHero` runs its image at 40% opacity under two forest washes, which is what makes
   * white type readable over it — and which would turn a portrait on a white ground into a
   * grey slab with a face in it. The portrait gets its own plate below the fold instead.
   */
  image: '11-community/B_p06_01.webp',
  imageAlt: 'Farmland in the districts the foundation works in',
}

/**
 * The portrait, supplied by the client and used on the existing site's about page.
 *
 * It arrives as a cutout on a pure white ground, 1469 × 530, with the subject occupying
 * x 440–975 — a little over a third of the frame, and cropped at the chest by the bottom
 * edge. Two decisions follow:
 *
 *  · It is cropped to its subject in CSS, not re-cut as a file. `objectPosition` below is
 *    the horizontal centre of that bounding box expressed as a percentage of the source,
 *    so a cleaner or higher-resolution original remains a straight file swap.
 *  · It is rendered with `blend`, so the white ground multiplies down to the tile colour
 *    rather than sitting in the page as a white rectangle.
 *
 * Still worth asking the client for: a higher-resolution original, and ideally an archive
 * photograph of him in office rather than a cutout.
 */
export const LEGACY_PORTRAIT = {
  src: '/images/annasaheb.png',
  alt: 'Annasaheb Shinde',
  objectPosition: '47% 50%',
}

export const LEGACY_PULL = {
  quote: 'Jai Jawan, Jai Kisan.',
  attribution: 'Lal Bahadur Shastri, 1965 — the mandate under which Annasaheb worked',
}

export type LegacyChapter = {
  id: string
  kicker: string
  heading: string
  body: string[]
}

export const LEGACY_CHAPTERS: LegacyChapter[] = [
  {
    id: 'cooperative',
    kicker: 'Before Parliament',
    heading: 'The cooperative model',
    body: [
      'In 1961 Annasaheb was Chairman of the Maharashtra State Co-operative Sugar Factories Federation and Vice-Chairman of the Pravara Co-operative Sugar Factory. Under his leadership the cooperative sugar model in Maharashtra became the country’s clearest demonstration that farmers organising together could build industry at scale.',
      'He understood what he had on his hands. Rather than treat it as a state success, he set about showing it to the nation — with Prime Minister Jawaharlal Nehru as the audience that mattered — as a blueprint that could be repeated anywhere.',
    ],
  },
  {
    id: 'parliament',
    kicker: '1962',
    heading: 'Elected from Kopergaon',
    body: [
      'Annasaheb entered the Lok Sabha in 1962 from the Kopergaon constituency, now Shirdi, and was inducted into the cabinet as a Minister in the Agriculture Ministry.',
      'He arrived with no prior legislative experience. What he had instead — a firm command of English, an exacting work ethic, sincerity and an even temper — made an impression on the House and on the press quickly enough that it stopped being a disadvantage.',
    ],
  },
  {
    id: 'crisis',
    kicker: 'The problem he was handed',
    heading: 'A country that could not feed itself',
    body: [
      'Indian agriculture in the early 1960s was in a genuinely dire condition. Food production had been stuck at around 72 million tonnes for more than a decade, against a population that had not stopped growing. The Food & Agriculture Minister of the day, S. K. Patil, said so publicly.',
      'That admission is the measure of the situation. The country was not managing a shortfall; it was reliant on imported grain to avoid famine, and everyone in the ministry knew it.',
    ],
  },
  {
    id: 'shastri',
    kicker: '1964',
    heading: 'Shastri’s mandate',
    body: [
      'Lal Bahadur Shastri became Prime Minister in June 1964 with the food shortage as his central concern. He coined the slogan the country still knows — “Jai Jawan, Jai Kisan”, hail the soldier, hail the farmer — putting the man in the field alongside the man at the border.',
      'He gave the Agriculture Ministry an unambiguous instruction: take every measure necessary to raise food productivity. Annasaheb was the minister who had to carry it out.',
    ],
  },
  {
    id: 'green-revolution',
    kicker: 'The late 1960s',
    heading: 'The Green Revolution',
    body: [
      'What followed was a coordinated programme of improved seed, fertiliser, irrigation and modern practice, pushed through under Annasaheb’s leadership with Shastri’s unwavering backing.',
      'The results were immediate and they were large. Food production rose sharply, the shortages eased, and the foundation was laid for the agricultural growth of the decades that followed. India stopped being a country that imported its food.',
    ],
  },
  {
    id: 'character',
    kicker: 'Fifteen years in the ministry',
    heading: 'Strength and character',
    body: [
      'His fifteen years in the Food and Agriculture Ministry were spent in a turbulent Parliament, answering for starvation deaths and for shortages of sugar, milk, fertiliser and pesticide. These were not technical questions. They were asked by members whose constituents were going without.',
      'He answered them for a decade and a half. That is the legacy the foundation carries: not a policy, but a way of treating rural distress as something to be worked on directly, in the place it happens, for as long as it takes.',
    ],
  },
]

export const LEGACY_TO_TODAY = {
  heading: 'Sixty years on, the same brief',
  body: [
    'The foundation named for him works on the same problem in the same state, using the animal those families already own. A goat instead of a hectare of wheat, and a milk chiller instead of a fertiliser depot — but the argument has not changed. Give a rural family a productive asset and a reliable buyer, and it stops being poor.',
    'That is the work described across the rest of this site.',
  ],
  cta: { label: 'See the project at Malpur', to: '/projects/goat-milk' },
}
