import { useEffect, useState } from 'react'

const QUERY = '(max-width: 767px)'

/**
 * Mobile ships a lighter motion variant. A large share of this audience — district officials,
 * government staff, rural stakeholders — is on mid-range Android (CLAUDE.md §7).
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window === 'undefined' ? false : window.matchMedia(QUERY).matches,
  )

  useEffect(() => {
    const mql = window.matchMedia(QUERY)
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return isMobile
}
