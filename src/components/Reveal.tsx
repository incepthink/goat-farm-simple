import { Fragment, type ReactNode } from 'react'
import { motion, type Variants } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

type Direction = 'up' | 'none'

const EASE = [0.22, 1, 0.36, 1] as const

/**
 * The site's one scroll-reveal primitive. Everything that arrives on scroll uses this,
 * so timing stays consistent across all fifteen beats rather than being tuned per section.
 *
 * Under reduced motion it renders a plain element — no wrapper animation at all.
 */
export function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className,
  as = 'div',
  amount = 0.25,
  once = true,
}: {
  children: ReactNode
  delay?: number
  direction?: Direction
  className?: string
  as?: 'div' | 'section' | 'li' | 'span' | 'p'
  amount?: number
  once?: boolean
}) {
  const reduced = usePrefersReducedMotion()
  const Tag = motion[as]

  if (reduced) {
    const Plain = as
    return <Plain className={className}>{children}</Plain>
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: direction === 'up' ? 26 : 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.85, delay, ease: EASE }}
    >
      {children}
    </Tag>
  )
}

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
}

/**
 * Stagger container — children must be <RevealItem>.
 * Used by the barrier list, the four verticals and the goat-ID cards.
 */
export function RevealGroup({
  children,
  className,
  as = 'div',
  amount = 0.2,
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'ul' | 'ol'
  amount?: number
}) {
  const reduced = usePrefersReducedMotion()
  const Tag = motion[as]

  if (reduced) {
    const Plain = as
    return <Plain className={className}>{children}</Plain>
  }

  return (
    <Tag
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </Tag>
  )
}

export function RevealItem({
  children,
  className,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'li' | 'article'
}) {
  const reduced = usePrefersReducedMotion()
  const Tag = motion[as]

  if (reduced) {
    const Plain = as
    return <Plain className={className}>{children}</Plain>
  }

  return (
    <Tag className={className} variants={itemVariants}>
      {children}
    </Tag>
  )
}

/**
 * Word-by-word mask reveal — the hero headline, and section headings that need weight.
 * Each word sits in an overflow-hidden box and rises into it.
 *
 * The real text is rendered once for screen readers; the animated copy is aria-hidden,
 * so assistive tech never sees the per-word fragmentation.
 */
export function MaskReveal({
  text,
  className,
  wordClassName,
  delay = 0,
  as: Tag = 'h2',
  id,
}: {
  text: string
  className?: string
  wordClassName?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p'
  /** Needed wherever a section points at this heading with aria-labelledby. */
  id?: string
}) {
  const reduced = usePrefersReducedMotion()
  const words = text.split(' ')

  if (reduced) {
    return (
      <Tag id={id} className={className}>
        {text}
      </Tag>
    )
  }

  return (
    <Tag id={id} className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.055, delayChildren: delay } },
        }}
      >
        {words.map((word, i) => (
          <Fragment key={`${word}-${i}`}>
            {/* pb/-mb pair: display line-heights are below 1, so descenders (g, y, p)
                fall outside the line box and the mask would clip them. The padding gives
                them room, the equal negative margin keeps the box's layout size — and
                so the align-bottom alignment — exactly as it was. */}
            <span className="-mb-[0.24em] inline-block overflow-hidden pb-[0.24em] align-bottom">
              <motion.span
                className={`inline-block ${wordClassName ?? ''}`}
                variants={{
                  /* 135%, not 110% — the mask's descender padding extends its visible
                     area below the word, so the resting position has to clear that too. */
                  hidden: { y: '135%' },
                  show: { y: '0%', transition: { duration: 0.95, ease: EASE } },
                }}
              >
                {word}
              </motion.span>
            </span>
            {/* The space sits between the word boxes, not inside them — a trailing space
                inside an inline-block is trimmed, which runs every word together. */}
            {i < words.length - 1 ? ' ' : null}
          </Fragment>
        ))}
      </motion.span>
    </Tag>
  )
}
