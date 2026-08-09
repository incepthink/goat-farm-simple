import { useEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PAGE_META } from '@/data/nav'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

/**
 * Route wrapper: scroll reset, document title and description, and the page transition.
 *
 * The transition is a short cross-fade with a few pixels of rise. The sibling site uses a
 * full-screen curtain wipe; here that would be the loudest thing on the site and it would
 * be loud on every single click. A page that simply appears, calmly, is the right register
 * — and it still reads as considered rather than as a plain document load.
 */

const EASE = [0.22, 1, 0.36, 1] as const

function useDocumentMeta(pathname: string) {
  useEffect(() => {
    const meta = PAGE_META[pathname]
    if (!meta) return

    document.title = meta.title

    const tag = document.querySelector('meta[name="description"]')
    if (tag) tag.setAttribute('content', meta.description)
  }, [pathname])
}

export function PageShell({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const reduced = usePrefersReducedMotion()

  useDocumentMeta(pathname)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  if (reduced) {
    // pt matches the header's resting height (36px strip + 72px bar).
    return (
      <main id="main" className="pt-[108px]">
        {children}
      </main>
    )
  }

  return (
    <motion.main
      id="main"
      className="pt-[108px]"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      {children}
    </motion.main>
  )
}
