import { lazy, Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PageShell } from '@/components/layout/PageShell'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import Home from '@/pages/Home'

// The homepage ships in the main bundle — it is where almost everyone lands.
// Everything else is split; most visitors never request it.
const AnnasahebShinde = lazy(() => import('@/pages/AnnasahebShinde'))
const Patrons = lazy(() => import('@/pages/Patrons'))
const CoreCommittee = lazy(() => import('@/pages/CoreCommittee'))
const Gallery = lazy(() => import('@/pages/Gallery'))
const Events = lazy(() => import('@/pages/Events'))
const CsrActivity = lazy(() => import('@/pages/CsrActivity'))
const GoatMilkProject = lazy(() => import('@/pages/GoatMilkProject'))
const IndigenousCowProject = lazy(() => import('@/pages/IndigenousCowProject'))
const Contact = lazy(() => import('@/pages/Contact'))
const Donate = lazy(() => import('@/pages/Donate'))

const NotFound = lazy(() => import('@/pages/NotFound'))

const ROUTES: { path: string; element: React.ReactNode }[] = [
  { path: '/', element: <Home /> },
  { path: '/annasaheb-shinde', element: <AnnasahebShinde /> },
  { path: '/patrons', element: <Patrons /> },
  { path: '/core-committee', element: <CoreCommittee /> },
  { path: '/gallery', element: <Gallery /> },
  { path: '/events', element: <Events /> },
  { path: '/csr-activity', element: <CsrActivity /> },
  { path: '/projects/goat-milk', element: <GoatMilkProject /> },
  { path: '/projects/indigenous-cow', element: <IndigenousCowProject /> },
  { path: '/contact', element: <Contact /> },
  { path: '/donate', element: <Donate /> },
  { path: '*', element: <NotFound /> },
]

export default function App() {
  const location = useLocation()
  useSmoothScroll()

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-card focus:bg-forest focus:px-5 focus:py-3 focus:text-cream"
      >
        Skip to content
      </a>

      <Header />

      <Suspense fallback={<div className="min-h-screen" aria-busy="true" />}>
        <Routes location={location} key={location.pathname}>
          {ROUTES.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<PageShell>{route.element}</PageShell>}
            />
          ))}
        </Routes>
      </Suspense>

      <Footer />
    </>
  )
}
