import type { Config } from 'tailwindcss'

/**
 * Design tokens — "Institutional Warm".
 *
 * The sibling build (goat-farm-frontend) is an editorial, asymmetric, heavily
 * scroll-driven site. This one is deliberately the opposite in *layout* while keeping
 * the same craft in execution: centred, symmetric, generously spaced, conservative type
 * sizes. It should read like a well-made institutional publication, not a startup page.
 *
 * Motion is NOT reduced — it is the calm kind. See src/components/Reveal.tsx.
 *
 * Rules enforced by this file:
 *  - No arbitrary hex values in JSX. Every colour on the site is named here.
 *  - `brass` is the single accent, reserved for CTAs, rules and data highlights.
 *  - Every image slot uses one of the named aspect ratios, so better photography is a
 *    file swap rather than a redesign.
 */
const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Ground — warm paper, never pure white
        cream: {
          DEFAULT: '#FBF8F2', // page background
          deep: '#F3EDE1', // alternating bands, recessed panels
          edge: '#E2D9C7', // hairlines, dividers, card borders
        },
        // The institutional colour. Sampled from the client's own laurel mark (#004402)
        // and lifted just enough to hold body-weight text at 4.5:1 on cream.
        forest: {
          DEFAULT: '#1F4029', // headers, footer, dark bands
          deep: '#152B1C', // the darkest ground
          soft: '#3A6144', // hover states on dark
          wash: '#E7EEE8', // tint backgrounds only
        },
        // Ink
        ink: {
          DEFAULT: '#26231E', // body text
          soft: '#4E483F', // secondary text
          faint: '#7C7365', // captions, metadata, source citations
        },
        /**
         * The single accent — CTAs, section rules and data highlights.
         * Warm brass rather than a saturated brand colour: it sits beside the forest
         * green without competing, and it reads as considered rather than loud.
         */
        brass: {
          DEFAULT: '#9A6E24',
          deep: '#7C5719', // hover / pressed
          soft: '#C9A24E', // on the dark ground
          wash: '#F5EBD6', // tint backgrounds only
        },
      },
      fontFamily: {
        // Serif for headings — set at moderate sizes and normal tracking, not display-huge.
        display: ['"Fraunces Variable"', 'Fraunces', 'Georgia', 'serif'],
        sans: ['"Manrope Variable"', 'Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        /**
         * A deliberately conservative scale. The sibling site tops out at 8.5rem; this
         * one tops out at 3.5rem. Large type is the loudest "modern" signal there is,
         * and this audience reads it as shouting.
         */
        'title-hero': ['clamp(2rem, 4.2vw, 3.5rem)', { lineHeight: '1.14', letterSpacing: '-0.012em' }],
        'title-lg': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.18', letterSpacing: '-0.01em' }],
        'title-md': ['clamp(1.375rem, 2vw, 1.75rem)', { lineHeight: '1.25', letterSpacing: '-0.005em' }],
        'title-sm': ['1.1875rem', { lineHeight: '1.35' }],
        // Statistics — the one place a large size is earned
        stat: ['clamp(2.25rem, 4vw, 3.25rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'stat-sm': ['1.75rem', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
        lead: ['clamp(1.0625rem, 1.2vw, 1.1875rem)', { lineHeight: '1.7' }],
        body: ['1rem', { lineHeight: '1.75' }],
        'body-sm': ['0.9375rem', { lineHeight: '1.7' }],
        eyebrow: ['0.6875rem', { lineHeight: '1.2', letterSpacing: '0.18em' }],
        caption: ['0.8125rem', { lineHeight: '1.5' }],
        source: ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      },
      spacing: {
        section: 'clamp(3.5rem, 7vh, 6rem)',
        'section-lg': 'clamp(5rem, 10vh, 8rem)',
        gutter: 'clamp(1.25rem, 4vw, 3rem)',
      },
      maxWidth: {
        measure: '68ch',
        'measure-sm': '54ch',
        shell: '75rem', // narrower than the sibling site — a page, not a canvas
        'shell-wide': '82rem',
      },
      aspectRatio: {
        portrait: '3 / 4',
        'portrait-tall': '2 / 3',
        landscape: '3 / 2',
        wide: '16 / 9',
        panorama: '21 / 9',
        square: '1 / 1',
      },
      borderRadius: {
        card: '3px',
      },
      boxShadow: {
        // One shadow, used only to lift cards off the cream. Never for decoration.
        card: '0 1px 2px rgba(38, 35, 30, 0.04), 0 8px 24px -12px rgba(38, 35, 30, 0.12)',
        'card-hover': '0 2px 4px rgba(38, 35, 30, 0.05), 0 16px 36px -14px rgba(38, 35, 30, 0.18)',
      },
      transitionTimingFunction: {
        calm: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'marquee-x': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'ken-burns': {
          from: { transform: 'scale(1.06) translate3d(0, 0, 0)' },
          to: { transform: 'scale(1.14) translate3d(-1.2%, -1.4%, 0)' },
        },
      },
      animation: {
        marquee: 'marquee-x 50s linear infinite',
        'ken-burns': 'ken-burns 24s ease-out forwards',
      },
    },
  },
  plugins: [],
}

export default config
