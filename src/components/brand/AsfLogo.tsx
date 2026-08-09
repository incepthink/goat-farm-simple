/**
 * The ASF mark — the client's real logo.
 *
 * Source file: public/images/02-logos/logo-png.png (1763×1571, 879 KB). That file is far too
 * heavy to put in a header, so two derivatives are committed beside it, trimmed to the mark's
 * alpha bounding box and downscaled:
 *
 *   asf-mark.png     240×231   34 KB   — 1x, and the mask source
 *   asf-mark@2x.png  480×461   91 KB   — 2x for hi-dpi
 *
 * Regenerate with scripts/build-logo.ps1 if the client supplies a better original.
 *
 * The artwork is a *flat single-colour silhouette* — every visible pixel is #004402, the rest
 * is transparent. That is what makes `paint="current"` possible: masking the alpha channel and
 * filling with currentColor reproduces the mark exactly, letterforms and all, in any colour.
 * It is the only way the logo can sit on the dark ground of the footer or on the hero
 * photograph, where the brand green would disappear. On light ground use `paint="brand"`
 * (the default), which serves the real pixels in the real colour.
 *
 * The mark contains the organisation's name inside the wreath. At header size that text is
 * texture rather than words, which is why AsfLockup still sets the name as real text beside it.
 */

const MARK = {
  src: '/images/02-logos/asf-mark.png',
  src2x: '/images/02-logos/asf-mark@2x.png',
  width: 240,
  height: 231,
} as const

const RATIO = `${MARK.width} / ${MARK.height}`

export function AsfLogo({
  paint = 'brand',
  className,
  title = 'Annasaheb Shinde Foundation',
}: {
  /** `brand` serves the real artwork; `current` masks it and fills with currentColor. */
  paint?: 'brand' | 'current'
  /** Set the height only — width follows the mark's aspect ratio. */
  className?: string
  title?: string
}) {
  if (paint === 'current') {
    return (
      <span
        role="img"
        aria-label={title}
        className={className}
        style={{
          display: 'inline-block',
          aspectRatio: RATIO,
          backgroundColor: 'currentColor',
          WebkitMaskImage: `url(${MARK.src})`,
          maskImage: `url(${MARK.src})`,
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
        }}
      />
    )
  }

  return (
    <img
      src={MARK.src}
      srcSet={`${MARK.src} 1x, ${MARK.src2x} 2x`}
      alt={title}
      width={MARK.width}
      height={MARK.height}
      decoding="async"
      className={className}
      style={{ aspectRatio: RATIO }}
    />
  )
}

/**
 * Header and footer lockup — the mark beside the name.
 *
 * Always masked rather than served as an image, so the colour is a class: the header sits
 * over the hero photograph at the top of the homepage and on cream once scrolled, and an
 * <img>-to-mask swap mid-transition would flicker.
 */
export function AsfLockup({
  className,
  inverted = false,
}: {
  className?: string
  inverted?: boolean
}) {
  return (
    <span className={`flex items-center gap-3 ${className ?? ''}`}>
      <AsfLogo
        paint="current"
        className={`h-12 shrink-0 transition-colors duration-500 ease-calm ${
          inverted ? 'text-cream' : 'text-forest'
        }`}
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[0.98rem] font-semibold ${
            inverted ? 'text-cream' : 'text-forest'
          }`}
        >
          Annasaheb Shinde Foundation
        </span>
        <span
          className={`mt-1.5 text-[0.58rem] uppercase tracking-[0.16em] ${
            inverted ? 'text-cream/65' : 'text-ink-faint'
          }`}
        >
          Agro &amp; Social Development
        </span>
      </span>
    </span>
  )
}
