import { CountUp } from './CountUp'
import { RevealGroup, RevealItem } from './Reveal'
import type { Stat as StatType } from '@/data/types'

/**
 * Statistics.
 *
 * The count-up is the one piece of showy motion the site allows itself, and it is
 * allowed because it is doing a job: it makes the reader watch the number arrive, which
 * is the difference between reading "4,000 goats tagged" and registering it.
 *
 * Figures are always tabular (see .tnum in globals.css) so nothing reflows while counting.
 */

export function StatTile({ stat, inverted = false }: { stat: StatType; inverted?: boolean }) {
  return (
    <div
      className={`flex h-full flex-col rounded-card border px-6 py-8 text-center ${
        inverted ? 'border-cream/15 bg-forest-deep/40' : 'border-cream-edge bg-white shadow-card'
      }`}
    >
      <p className={`font-display text-stat ${inverted ? 'text-brass-soft' : 'text-forest'}`}>
        <CountUp
          value={stat.value}
          decimals={stat.decimals ?? 0}
          prefix={stat.prefix ?? ''}
          suffix={stat.suffix ?? ''}
        />
      </p>

      <p
        className={`mt-3 text-body-sm font-semibold ${inverted ? 'text-cream' : 'text-ink'}`}
      >
        {stat.label}
      </p>

      {stat.note ? (
        <p className={`mt-2 text-caption ${inverted ? 'text-cream/60' : 'text-ink-faint'}`}>
          {stat.note}
        </p>
      ) : null}
    </div>
  )
}

export function StatGrid({
  stats,
  inverted = false,
  columns = 3,
  className,
}: {
  stats: StatType[]
  inverted?: boolean
  columns?: 2 | 3 | 4
  className?: string
}) {
  const cols =
    columns === 2
      ? 'sm:grid-cols-2'
      : columns === 4
        ? 'sm:grid-cols-2 lg:grid-cols-4'
        : 'sm:grid-cols-2 lg:grid-cols-3'

  return (
    <RevealGroup className={`grid grid-cols-1 gap-4 ${cols} ${className ?? ''}`}>
      {stats.map((stat) => (
        <RevealItem key={stat.label} className="h-full">
          <StatTile stat={stat} inverted={inverted} />
        </RevealItem>
      ))}
    </RevealGroup>
  )
}
