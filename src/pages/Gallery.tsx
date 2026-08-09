import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { PageHero } from '@/components/PageHero'
import { Section, SectionHeader } from '@/components/Section'
import { RevealGroup, RevealItem } from '@/components/Reveal'
import { GALLERY_GROUPS, GALLERY_NOTE, EXCLUDED_FILES } from '@/data/gallery'
import manifest from '@/data/manifest.json'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

/**
 * The gallery.
 *
 * Built from the image manifest rather than a hand-listed file per photograph, so new
 * photography dropped into a folder appears without a code change. Two exclusions are
 * enforced in code rather than by hoping nobody picks the wrong file: images that still
 * carry a burned-in GPS Map Camera stamp, and the institutional folder in its entirety —
 * thirteen photographs of men in meeting rooms would swamp six of the women who own the
 * flocks. See data/gallery.ts.
 *
 * The lightbox is a plain dialog: click to open, Escape or click-outside to close, arrow
 * keys to move. No pinch-zoom, no thumbnails strip, no slideshow.
 */

/** Only the two fields the gallery reads. The manifest carries more; we do not need it. */
type ManifestEntry = { cat: string; file: string }

const EASE = [0.22, 1, 0.36, 1] as const

function Lightbox({
  images,
  index,
  onClose,
  onMove,
}: {
  images: string[]
  index: number
  onClose: () => void
  onMove: (next: number) => void
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onMove((index + 1) % images.length)
      if (e.key === 'ArrowLeft') onMove((index - 1 + images.length) % images.length)
    }
    document.addEventListener('keydown', onKey)

    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [index, images.length, onClose, onMove])

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Photograph"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-forest-deep/95 p-4 sm:p-10"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center text-cream/70 transition-colors hover:text-cream"
      >
        <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden>
          <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </button>

      <motion.img
        key={images[index]}
        src={`/images/${images[index]}`}
        alt=""
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
        className="max-h-full max-w-full rounded-card object-contain"
      />

      <p className="absolute bottom-5 left-0 right-0 text-center text-caption text-cream/50">
        {index + 1} / {images.length}
      </p>
    </motion.div>
  )
}

export default function Gallery() {
  const reduced = usePrefersReducedMotion()
  const [open, setOpen] = useState<{ files: string[]; index: number } | null>(null)

  const byCategory = useMemo(() => {
    const entries = manifest as ManifestEntry[]
    const map = new Map<string, string[]>()

    for (const entry of entries) {
      if (EXCLUDED_FILES.includes(entry.file)) continue
      const list = map.get(entry.cat) ?? []
      list.push(entry.file)
      map.set(entry.cat, list)
    }

    return map
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="The work, photographed where it happens"
        standfirst="Villages, flocks, health camps and the dairy at Malpur."
        image="09-events/image31.webp"
        imageAlt="Veterinarians examining goats at a village health camp"
      />

      {GALLERY_GROUPS.map((group, i) => {
        const files = byCategory.get(group.cat) ?? []
        if (files.length === 0) return null

        return (
          <Section key={group.cat} tone={i % 2 === 0 ? 'cream' : 'deep'} size="lg">
            <SectionHeader heading={group.title} standfirst={group.blurb} />

            <RevealGroup className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {files.map((file, index) => (
                <RevealItem key={file}>
                  <button
                    type="button"
                    onClick={() => setOpen({ files, index })}
                    className="group block w-full overflow-hidden rounded-card border border-cream-edge bg-cream-deep"
                  >
                    <span className="block aspect-square w-full overflow-hidden">
                      <img
                        src={`/images/${file}`}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className={`h-full w-full object-cover transition-transform duration-700 ease-calm ${
                          reduced ? '' : 'group-hover:scale-105'
                        }`}
                      />
                    </span>
                  </button>
                </RevealItem>
              ))}
            </RevealGroup>
          </Section>
        )
      })}

      <Section tone="forest" size="sm">
        <p className="mx-auto max-w-measure text-center text-body-sm text-cream/60">
          {GALLERY_NOTE}
        </p>
      </Section>

      <AnimatePresence>
        {open ? (
          <Lightbox
            images={open.files}
            index={open.index}
            onClose={() => setOpen(null)}
            onMove={(index) => setOpen((current) => (current ? { ...current, index } : null))}
          />
        ) : null}
      </AnimatePresence>
    </>
  )
}
