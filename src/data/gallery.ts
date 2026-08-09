import { IMAGES_WITH_GPS_STAMP } from './story'

/**
 * /gallery groupings.
 *
 * Built from manifest categories rather than a hand-listed file per image, so that new
 * photography dropped into a folder appears without a code change.
 *
 * Two exclusions are enforced in code, not by hoping nobody picks the wrong file:
 *  · Files with a burned-in GPS Map Camera stamp or camera timestamp.
 *  · 10-institutional, in its entirety. Institutional photography is rationed to /about
 *    (CLAUDE.md §6, image rule 1) — a gallery is exactly where thirteen photographs of
 *    men in meeting rooms would swamp six of the women who own the flocks.
 */

export const EXCLUDED_FILES: string[] = [
  ...IMAGES_WITH_GPS_STAMP,
  '04-women/B_p07_06.webp', // burned-in camera timestamp, lower right
  '12-maps/image6.webp', // reference material for the schematic, not photography
  '12-maps/B_p04_00.webp',
  '02-logos/A_p01_02.webp',
  '02-logos/image4.webp',
  '01-hero/A_p01_01.webp', // already the hero
]

export const GALLERY_GROUPS: { cat: string; title: string; blurb: string }[] = [
  {
    cat: '04-women',
    title: 'The flock owners',
    blurb: 'Ninety-three per cent of the flock owners in this project are women.',
  },
  {
    cat: '03-goats',
    title: 'The animals',
    blurb: 'Zalawadi does, kids and village flocks across the seventeen villages.',
  },
  {
    cat: '05-field-work',
    title: 'Field work',
    blurb:
      'Livestock supervisors recording flock data, and veterinarians examining animals in the villages.',
  },
  {
    cat: '07-dairy',
    title: 'The dairy',
    blurb: 'The built plant at Malpur — chillers, laboratory, weighing line and distribution.',
  },
  {
    cat: '09-events',
    title: 'Camps and events',
    blurb: 'Health camps, health card distribution, and the public announcement of the project.',
  },
  {
    cat: '11-community',
    title: 'The villages',
    blurb: 'Village meetings and homes across Dhule and Nandurbar.',
  },
  {
    cat: '08-feed',
    title: 'Feed',
    blurb: 'The silage machine and prepared feed produced on site.',
  },
  {
    cat: '06-tagging',
    title: 'Tagging',
    blurb: 'Every goat in the area of operation carries a unique digital ID.',
  },
]

export const GALLERY_NOTE =
  'These photographs were taken by project staff in the field. They are working records rather than commissioned photography, and their resolution reflects that.'
