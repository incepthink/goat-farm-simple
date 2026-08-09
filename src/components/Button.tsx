import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

/**
 * Buttons.
 *
 * No magnetic cursor, no hover-fill sweep, no scale-on-press. A button that moves before
 * you click it is the most common "modern site" tell there is. These change colour and
 * lift a hairline's worth, and nothing else.
 */

/**
 * `inverted` and `outline-inverted` are the two that go on a dark ground.
 *
 * They exist as named variants rather than as `variant="secondary"` plus a className of
 * cream overrides, because that approach silently fails: `text-forest` and `text-cream`
 * are the same Tailwind property, source order in the stylesheet decides the winner, and
 * the button renders dark-green-on-dark-green — present in the DOM and invisible on the
 * page. Never override a variant's colour through className; add a variant.
 */
type Variant = 'primary' | 'secondary' | 'ghost' | 'inverted' | 'outline-inverted'

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-card px-7 py-3.5 text-body-sm font-semibold tracking-wide transition-colors duration-300 ease-calm'

const VARIANTS: Record<Variant, string> = {
  primary: 'bg-forest text-cream hover:bg-forest-soft',
  secondary:
    'border border-forest/25 bg-transparent text-forest hover:border-forest hover:bg-forest-wash',
  ghost: 'text-brass underline underline-offset-4 hover:text-brass-deep px-0 py-0',
  inverted: 'bg-brass-soft text-forest-deep hover:bg-cream',
  'outline-inverted':
    'border border-cream/40 bg-transparent text-cream hover:border-cream hover:bg-cream/10',
}

type Props = {
  children: ReactNode
  variant?: Variant
  className?: string
}

export function ButtonLink({
  to,
  children,
  variant = 'primary',
  className,
}: Props & { to: string }) {
  const external = to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('tel:')

  if (external) {
    return (
      <a
        href={to}
        className={`${BASE} ${VARIANTS[variant]} ${className ?? ''}`}
        {...(to.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <Link to={to} className={`${BASE} ${VARIANTS[variant]} ${className ?? ''}`}>
      {children}
    </Link>
  )
}

export function Button({
  children,
  variant = 'primary',
  className,
  type = 'button',
  disabled,
  onClick,
}: Props & {
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${BASE} ${VARIANTS[variant]} disabled:cursor-not-allowed disabled:opacity-50 ${
        className ?? ''
      }`}
    >
      {children}
    </button>
  )
}
