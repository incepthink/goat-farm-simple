import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV, NAV_CTA, type NavItem } from '@/data/nav'
import { CONTACT } from '@/data/org'
import { AsfLockup } from '@/components/brand/AsfLogo'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

/**
 * The header.
 *
 * Two tiers, matching the convention of the institutional sites this audience reads: a
 * thin utility strip carrying a phone number and an email, and the main bar beneath it.
 * The utility strip retracts on scroll and the main bar stays — so the page gains room
 * as you read, without the nav ever going away.
 *
 * Dropdowns open on hover for pointers and on click for everything else, and they are
 * real <button aria-expanded> elements with keyboard and Escape handling. The client's
 * existing site uses CSS :hover only, which is unusable on the phone he will inevitably
 * show it on.
 */

const EASE = [0.22, 1, 0.36, 1] as const

function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}

function DesktopItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  // Close on route change — otherwise the panel hangs open over the new page.
  useEffect(() => setOpen(false), [location.pathname])

  useEffect(() => {
    if (!open) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onClick = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false)
    }

    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [open])

  // whitespace-nowrap is load-bearing: without it "Annasaheb Shinde" and "CSR Activity"
  // wrap onto two lines inside the 72px bar and the whole nav goes ragged.
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative whitespace-nowrap py-2 text-[0.72rem] font-semibold uppercase tracking-[0.08em] transition-colors duration-300 ${
      isActive ? 'text-brass' : 'text-forest hover:text-brass'
    }`

  if (!item.children) {
    return (
      <NavLink to={item.to!} className={linkClass} end={item.to === '/'}>
        {({ isActive }) => (
          <>
            {item.label}
            {isActive ? (
              <motion.span
                layoutId="nav-underline"
                className="absolute -bottom-0.5 left-0 right-0 h-px bg-brass"
                transition={{ duration: 0.4, ease: EASE }}
              />
            ) : null}
          </>
        )}
      </NavLink>
    )
  }

  const childActive = item.children.some((c) => location.pathname === c.to)

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1.5 whitespace-nowrap py-2 text-[0.72rem] font-semibold uppercase tracking-[0.08em] transition-colors duration-300 ${
          childActive || open ? 'text-brass' : 'text-forest hover:text-brass'
        }`}
      >
        {item.label}
        <svg
          viewBox="0 0 10 6"
          aria-hidden
          className={`h-1.5 w-2.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: EASE }}
            className="absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-3"
          >
            <div className="overflow-hidden rounded-card border border-cream-edge bg-white shadow-card">
              {item.children.map((child) => (
                <NavLink
                  key={child.to}
                  to={child.to}
                  className={({ isActive }) =>
                    `block border-b border-cream-edge px-5 py-3.5 text-body-sm transition-colors duration-200 last:border-b-0 ${
                      isActive
                        ? 'bg-forest-wash text-forest'
                        : 'text-ink-soft hover:bg-cream-deep hover:text-forest'
                    }`
                  }
                >
                  {child.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const reduced = usePrefersReducedMotion()

  // Lock the body while the sheet is open, and restore on close.
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-40 overflow-y-auto bg-cream pt-[var(--header-h,108px)] xl:hidden"
        >
          <nav className="shell pb-16 pt-8" aria-label="Main">
            <ul className="divide-y divide-cream-edge border-y border-cream-edge">
              {NAV.map((item) =>
                item.children ? (
                  <li key={item.label} className="py-5">
                    <p className="eyebrow">{item.label}</p>
                    <ul className="mt-3 space-y-3">
                      {item.children.map((child) => (
                        <li key={child.to}>
                          <Link
                            to={child.to}
                            onClick={onClose}
                            className="font-display text-title-md text-forest"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={item.to}>
                    <Link
                      to={item.to!}
                      onClick={onClose}
                      className="block py-5 font-display text-title-md text-forest"
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>

            <Link
              to={NAV_CTA.to}
              onClick={onClose}
              className="mt-8 flex items-center justify-center rounded-card bg-forest px-7 py-4 text-body-sm font-semibold text-cream"
            >
              {NAV_CTA.label}
            </Link>

            <div className="mt-10 space-y-1 text-body-sm text-ink-soft">
              <p>
                <a href={`tel:${CONTACT.phones[0].replace(/\s/g, '')}`}>{CONTACT.phones[0]}</a>
              </p>
              <p>
                <a href={`mailto:${CONTACT.emails[0].address}`}>{CONTACT.emails[0].address}</a>
              </p>
            </div>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export function Header() {
  const scrolled = useScrolled()
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setMenuOpen(false), [location.pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility strip — retracts on scroll. Height, not display, so it animates. */}
      <motion.div
        aria-hidden={scrolled}
        initial={false}
        animate={{ height: scrolled ? 0 : 36, opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="overflow-hidden bg-forest text-cream"
      >
        <div className="shell-wide flex h-9 items-center justify-between text-[0.7rem] tracking-wide">
          <p className="text-cream/75">Malpur · Dhule · Maharashtra</p>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${CONTACT.phones[0].replace(/\s/g, '')}`}
              className="text-cream/85 transition-colors hover:text-brass-soft"
            >
              {CONTACT.phones[0]}
            </a>
            <a
              href={`mailto:${CONTACT.emails[0].address}`}
              className="hidden text-cream/85 transition-colors hover:text-brass-soft sm:block"
            >
              {CONTACT.emails[0].address}
            </a>
          </div>
        </div>
      </motion.div>

      <div
        className={`border-b transition-all duration-500 ease-calm ${
          scrolled
            ? 'border-cream-edge bg-cream/95 backdrop-blur-sm'
            : 'border-transparent bg-cream'
        }`}
      >
        <div className="shell-wide flex h-[72px] items-center justify-between gap-6">
          <Link to="/" aria-label="Annasaheb Shinde Foundation — home">
            <AsfLockup />
          </Link>

          <nav className="hidden items-center gap-6 xl:flex" aria-label="Main">
            {NAV.map((item) => (
              <DesktopItem key={item.label} item={item} />
            ))}
            <Link
              to={NAV_CTA.to}
              className="whitespace-nowrap rounded-card bg-forest px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-cream transition-colors duration-300 hover:bg-forest-soft"
            >
              {NAV_CTA.label}
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 xl:hidden"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="block h-px w-6 bg-forest"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="block h-px w-6 bg-forest"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="block h-px w-6 bg-forest"
            />
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}
