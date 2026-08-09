import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

/**
 * The banner every inner page opens with.
 *
 * A photograph, darkened enough to hold white text at full contrast, with the title
 * centred over it. This is the one place the site borrows directly from the layout of the
 * client's existing pages — he will recognise it immediately — but the photograph is a
 * real one from the project rather than a stock header, and the type is set to be read.
 *
 * The image drifts very slowly (24s ken-burns) instead of sitting still. It is the
 * cheapest possible way to make a static page feel alive, and at that duration nobody
 * consciously notices it moving.
 */

const EASE = [0.22, 1, 0.36, 1] as const

export function PageHero({
  eyebrow,
  title,
  standfirst,
  image,
  imageAlt,
  objectPosition = 'center',
}: {
  eyebrow?: string
  title: string
  standfirst?: string
  image: string
  imageAlt: string
  objectPosition?: string
}) {
  const reduced = usePrefersReducedMotion()
  const url = image.startsWith('/') ? image : `/images/${image}`

  return (
    <section className="relative isolate overflow-hidden bg-forest-deep">
      <img
        src={url}
        alt={imageAlt}
        // @ts-expect-error React 18 types omit the lowercase form; React 19 adds camelCase.
        fetchpriority="high"
        decoding="async"
        style={{ objectPosition }}
        className={`absolute inset-0 h-full w-full object-cover opacity-40 ${
          reduced ? '' : 'animate-ken-burns'
        }`}
      />

      {/* Two layers, not one: the flat wash guarantees the contrast ratio, the gradient
          keeps the top of the frame from going muddy under the fixed header. */}
      <div className="absolute inset-0 bg-forest-deep/55" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-b from-forest-deep/70 via-transparent to-forest-deep/60"
        aria-hidden
      />

      <div className="shell relative py-section-lg text-center">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          className="mx-auto max-w-measure"
        >
          {eyebrow ? (
            <p className="text-eyebrow font-bold uppercase text-brass-soft">{eyebrow}</p>
          ) : null}

          <h1 className={`text-title-hero text-cream ${eyebrow ? 'mt-4' : ''}`}>{title}</h1>

          {standfirst ? (
            <p className="mx-auto mt-6 max-w-measure-sm text-lead text-cream/85">{standfirst}</p>
          ) : null}
        </motion.div>
      </div>
    </section>
  )
}
