import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'
import { useIsMobile } from './useIsMobile'

gsap.registerPlugin(ScrollTrigger)

let lenisInstance: Lenis | null = null

/** Exposed so anchor links and the mobile menu can jump without fighting Lenis. */
export function scrollToElement(target: string | HTMLElement, offset = 0) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset })
    return
  }
  const el = typeof target === 'string' ? document.querySelector(target) : target
  el?.scrollIntoView({ behavior: 'auto', block: 'start' })
}

export function stopScroll() {
  lenisInstance?.stop()
}

export function startScroll() {
  lenisInstance?.start()
}

/**
 * Site-wide smooth scroll, mounted once at the app root.
 *
 * Lenis drives GSAP's ScrollTrigger from the same rAF loop — running two independent loops
 * is what makes smooth-scroll sites feel like the pinned sections lag behind the content.
 *
 * Disabled entirely under prefers-reduced-motion, where hijacking the scroll is precisely
 * the thing being asked for less of.
 */
export function useSmoothScroll() {
  const reduced = usePrefersReducedMotion()
  const isMobile = useIsMobile()

  useEffect(() => {
    if (reduced) {
      ScrollTrigger.refresh()
      return
    }

    const lenis = new Lenis({
      duration: isMobile ? 0.8 : 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // Touch devices keep native inertia; overriding it feels broken on Android.
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1.6,
    })
    lenisInstance = lenis

    lenis.on('scroll', ScrollTrigger.update)

    const raf = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    ScrollTrigger.refresh()

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
      lenisInstance = null
    }
  }, [reduced, isMobile])
}
