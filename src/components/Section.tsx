import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Reveal } from './Reveal'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

/**
 * The section wrapper and its heading block.
 *
 * The client's existing site puts a centred heading above every section with a small
 * icon beneath it. That convention is kept — it is the single strongest signal that this
 * is the same organisation's site — but the icon is replaced by a short rule that draws
 * itself in when the heading enters the viewport. It does the same job of marking the
 * heading, without the clip-art register of a Font Awesome glyph in a circle.
 */

type Tone = 'cream' | 'deep' | 'forest'

const TONE: Record<Tone, string> = {
  cream: 'bg-cream text-ink',
  deep: 'bg-cream-deep text-ink',
  forest: 'bg-forest text-cream',
}

export function Section({
  children,
  tone = 'cream',
  id,
  className,
  size = 'default',
  labelledBy,
}: {
  children: ReactNode
  tone?: Tone
  id?: string
  className?: string
  size?: 'default' | 'lg' | 'sm'
  labelledBy?: string
}) {
  const pad =
    size === 'lg' ? 'py-section-lg' : size === 'sm' ? 'py-section sm:py-12' : 'py-section'

  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`${TONE[tone]} ${pad} ${className ?? ''}`}
    >
      <div className="shell">{children}</div>
    </section>
  )
}

/** The animated rule that sits under every section heading. */
function Rule({ inverted = false }: { inverted?: boolean }) {
  const reduced = usePrefersReducedMotion()
  const color = inverted ? 'bg-brass-soft' : 'bg-brass'

  if (reduced) {
    return <span className={`mt-6 block h-px w-16 ${color}`} aria-hidden />
  }

  return (
    <motion.span
      aria-hidden
      className={`mt-6 block h-px ${color}`}
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: '4rem', opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
    />
  )
}

export function SectionHeader({
  eyebrow,
  heading,
  standfirst,
  id,
  align = 'center',
  inverted = false,
  as: Tag = 'h2',
}: {
  eyebrow?: string
  heading: string
  standfirst?: string
  id?: string
  align?: 'center' | 'left'
  inverted?: boolean
  as?: 'h1' | 'h2' | 'h3'
}) {
  const centred = align === 'center'

  return (
    <Reveal className={centred ? 'mx-auto max-w-measure text-center' : 'max-w-measure'}>
      {eyebrow ? (
        <p className={`eyebrow ${inverted ? 'text-brass-soft' : ''}`}>{eyebrow}</p>
      ) : null}

      <Tag
        id={id}
        className={`text-title-lg ${eyebrow ? 'mt-4' : ''} ${inverted ? 'text-cream' : 'text-forest'}`}
      >
        {heading}
      </Tag>

      <span className={centred ? 'flex justify-center' : 'block'}>
        <Rule inverted={inverted} />
      </span>

      {standfirst ? (
        <p
          className={`mt-6 text-lead ${inverted ? 'text-cream/80' : 'text-ink-soft'} ${
            centred ? 'mx-auto' : ''
          }`}
        >
          {standfirst}
        </p>
      ) : null}
    </Reveal>
  )
}

/** A small citation line. Every figure on the site carries one. */
export function Source({ children, inverted = false }: { children: ReactNode; inverted?: boolean }) {
  return (
    <span className={`text-source ${inverted ? 'text-cream/45' : 'text-ink-faint'}`}>
      {children}
    </span>
  )
}
