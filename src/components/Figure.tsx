import { useCallback, useState } from 'react'

/**
 * Every photograph on the site goes through here.
 *
 * Two things it guarantees:
 *  · A fixed aspect ratio from the design system, so replacing a photograph with better
 *    photography later is a file swap and not a re-layout.
 *  · An explicit lazy/async loading posture. A large share of this audience — district
 *    officials, government staff, rural stakeholders — is on a mid-range Android over a
 *    slow connection.
 *
 * The hover zoom is 1.03 over 700ms. It is deliberately almost imperceptible: enough that
 * the page feels alive under the cursor, not so much that it feels like a shopping site.
 */

type Ratio = 'portrait' | 'portrait-tall' | 'landscape' | 'wide' | 'panorama' | 'square'

const RATIO: Record<Ratio, string> = {
  portrait: 'aspect-portrait',
  'portrait-tall': 'aspect-portrait-tall',
  landscape: 'aspect-landscape',
  wide: 'aspect-wide',
  panorama: 'aspect-panorama',
  square: 'aspect-square',
}

export function Figure({
  src,
  alt,
  ratio = 'landscape',
  caption,
  className,
  priority = false,
  zoom = true,
  objectPosition,
}: {
  /** Path under /images, e.g. "07-dairy/image41.webp". Absolute paths pass through. */
  src: string
  alt: string
  ratio?: Ratio
  caption?: string
  className?: string
  /** Set on the one above-the-fold image per page; everything else stays lazy. */
  priority?: boolean
  zoom?: boolean
  objectPosition?: string
}) {
  const [loaded, setLoaded] = useState(false)
  const url = src.startsWith('/') ? src : `/images/${src}`

  /**
   * The fade-in is gated on `loaded`, and `onLoad` alone is not enough to set it.
   *
   * A cached image can finish decoding before React attaches the handler, in which case
   * the event has already fired and nothing will ever set `loaded` — the image stays at
   * opacity-0 and the tile renders blank. It does not show up on a cold first visit,
   * only on a revisit, which is the worst way to find a bug like this.
   *
   * So the ref checks `complete` at attach time as well.
   */
  const ref = useCallback((node: HTMLImageElement | null) => {
    if (node?.complete) setLoaded(true)
  }, [])

  return (
    <figure className={className}>
      <div
        className={`group relative overflow-hidden rounded-card border border-cream-edge bg-cream-deep ${RATIO[ratio]}`}
      >
        <img
          ref={ref}
          src={url}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          style={objectPosition ? { objectPosition } : undefined}
          className={`h-full w-full object-cover transition-[transform,opacity] duration-700 ease-calm ${
            loaded ? 'opacity-100' : 'opacity-0'
          } ${zoom ? 'group-hover:scale-[1.03]' : ''}`}
        />
      </div>

      {caption ? (
        <figcaption className="mt-3 text-caption text-ink-faint">{caption}</figcaption>
      ) : null}
    </figure>
  )
}

/**
 * The slot used where a photograph genuinely does not exist — the urine distillation
 * unit, for instance. Saying so is better than reaching for a stock image or silently
 * dropping the item: it tells the client exactly what to go and photograph.
 */
export function PhotoPending({
  label,
  ratio = 'landscape',
  className,
}: {
  label: string
  ratio?: Ratio
  className?: string
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-card border border-dashed border-cream-edge bg-cream-deep px-6 text-center ${RATIO[ratio]} ${
        className ?? ''
      }`}
    >
      <span className="text-caption text-ink-faint">{label}</span>
    </div>
  )
}
