import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

const EASE_OUT = (t: number) => 1 - Math.pow(1 - t, 3)

/**
 * Count-up for statistics. Renders tabular figures throughout so the number never
 * reflows while counting — a proportional-figure count-up jitters, which reads as cheap
 * on exactly the numbers that have to look credible.
 *
 * Under reduced motion the final value renders immediately.
 */
export function CountUp({
  value,
  duration = 1600,
  decimals = 0,
  prefix = '',
  suffix = '',
  className,
}: {
  value: number
  duration?: number
  decimals?: number
  prefix?: string
  suffix?: string
  className?: string
}) {
  const reduced = usePrefersReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState(reduced ? value : 0)

  useEffect(() => {
    if (reduced) {
      setDisplay(value)
      return
    }
    if (!inView) return

    let frame = 0
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration)
      setDisplay(value * EASE_OUT(progress))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value, duration, reduced])

  const formatted = display.toLocaleString('en-IN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <span ref={ref} className={`tnum ${className ?? ''}`}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}
