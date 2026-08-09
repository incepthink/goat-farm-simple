import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Section, SectionHeader, Source } from '@/components/Section'
import { Reveal, RevealGroup, RevealItem } from '@/components/Reveal'
import { StatGrid } from '@/components/Stat'
import { Figure } from '@/components/Figure'
import { ButtonLink } from '@/components/Button'
import { CountUp } from '@/components/CountUp'
import { HERO, WHY_GOATS, MODEL, DAIRY } from '@/data/story'
import { TRACTION, TRACTION_INTRO, GAINS, WOMEN, AS_OF } from '@/data/traction'
import { PARTNERS, PARTNERS_INTRO } from '@/data/partners'
import { PATRONS } from '@/data/people'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

/**
 * The homepage.
 *
 * The brief for this rebuild was not "make it prettier" — it was that the existing site
 * does not convey what the project is. So the page is organised as an argument rather
 * than as a set of blocks:
 *
 *   the aim → why rearers stay poor → what changes → what we do → what has happened →
 *   the plant → the women → the projects → who stands behind it → what you can do
 *
 * Someone who reads only the headings should come away able to explain the project to
 * somebody else. That is the test.
 */

const EASE = [0.22, 1, 0.36, 1] as const

/* ── 1. Hero ──────────────────────────────────────────────────────────────── */

function Hero() {
  const reduced = usePrefersReducedMotion()

  return (
    <section className="relative isolate flex min-h-[min(78vh,42rem)] items-center overflow-hidden bg-forest-deep">
      <img
        src={`/images/${HERO.image}`}
        alt={HERO.imageAlt}
        // @ts-expect-error React 18 types omit the lowercase form; React 19 adds camelCase.
        fetchpriority="high"
        decoding="async"
        className={`absolute inset-0 h-full w-full object-cover object-center opacity-45 ${
          reduced ? '' : 'animate-ken-burns'
        }`}
      />
      <div className="absolute inset-0 bg-forest-deep/50" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-b from-forest-deep/75 via-forest-deep/20 to-forest-deep/75"
        aria-hidden
      />

      <div className="shell relative py-section-lg text-center">
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          className="text-eyebrow font-bold uppercase text-brass-soft"
        >
          {HERO.eyebrow}
        </motion.p>

        <motion.h1
          initial={reduced ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.22 }}
          className="mx-auto mt-6 max-w-measure text-title-hero text-cream"
        >
          {HERO.headline}
        </motion.h1>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.38 }}
          className="mx-auto mt-7 max-w-measure text-lead text-cream/85"
        >
          {HERO.standfirst}
        </motion.p>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <ButtonLink to="/projects/goat-milk" variant="inverted">
            See the project
          </ButtonLink>
          <ButtonLink
            to="/donate"
            variant="outline-inverted"
          >
            Support this work
          </ButtonLink>
        </motion.div>
      </div>
    </section>
  )
}

/* ── 2. The aim ───────────────────────────────────────────────────────────── */

/**
 * The section the existing site calls "AIM". It kept the word and replaced the paragraph:
 * the original is a single sentence about eco-friendly use of natural resources and
 * women's self-help groups, which is true of several hundred organisations. This says the
 * specific thing this one does, in the fewest words it can be said in.
 */
function Aim() {
  return (
    <Section tone="cream" size="lg" labelledBy="aim-heading">
      <SectionHeader
        id="aim-heading"
        eyebrow="Our aim"
        heading="Turn a goat from a savings account into a salary"
      />

      <Reveal className="mx-auto mt-10 max-w-measure text-center" delay={0.1}>
        <p className="text-lead text-ink-soft">
          A shepherd family in north Maharashtra already owns goats. But with low yield and
          nobody reliably buying the milk, the only way to get money out of a goat is to sell
          the animal. One payment, and the asset is gone — the family is poorer the day after
          than the day before.
        </p>
        <p className="mt-5 text-lead text-ink-soft">
          We do two things at once, because neither works alone. We make the animal
          healthier — veterinary care, feed, breeding, a health card per goat. And we
          guarantee to buy its milk, every single day, at a chilling plant we have already
          built. The same goat stops being something you sell and becomes something that
          pays you.
        </p>
      </Reveal>

      <Reveal className="mx-auto mt-12 max-w-3xl" delay={0.2}>
        <div className="grid gap-px overflow-hidden rounded-card border border-cream-edge bg-cream-edge sm:grid-cols-2">
          <div className="bg-white px-8 py-9 text-center">
            <p className="eyebrow text-ink-faint">Before</p>
            <p className="mt-4 font-display text-title-md text-ink">{MODEL.flip.before}</p>
            <p className="mt-3 text-body-sm text-ink-soft">{MODEL.flip.beforeDetail}</p>
          </div>
          <div className="bg-forest-wash px-8 py-9 text-center">
            <p className="eyebrow">After</p>
            <p className="mt-4 font-display text-title-md text-forest">{MODEL.flip.after}</p>
            <p className="mt-3 text-body-sm text-ink-soft">{MODEL.flip.afterDetail}</p>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

/* ── 3. Why they stay poor ────────────────────────────────────────────────── */

function Barriers() {
  return (
    <Section tone="deep" size="lg" labelledBy="barriers-heading">
      <SectionHeader
        id="barriers-heading"
        eyebrow={WHY_GOATS.eyebrow}
        heading="India has 150 million goats. The people who rear them are still poor."
        standfirst={WHY_GOATS.standfirst}
      />

      <Reveal className="mx-auto mt-8 max-w-measure text-center">
        <p className="text-lead font-semibold text-forest">{WHY_GOATS.turn}</p>
      </Reveal>

      <RevealGroup
        as="ol"
        className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2"
      >
        {WHY_GOATS.barriers.map((barrier, i) => (
          <RevealItem
            key={barrier.term}
            as="li"
            className="card flex h-full flex-col p-7 text-left"
          >
            <span className="font-display text-title-md text-brass">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-3 text-title-sm text-forest">{barrier.term}</h3>
            <p className="mt-3 flex-1 text-body-sm text-ink-soft">{barrier.detail}</p>
            <p className="mt-5">
              <Source>{barrier.source}</Source>
            </p>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal className="mx-auto mt-12 max-w-measure text-center" delay={0.1}>
        <p className="text-lead text-ink">{WHY_GOATS.consequence}</p>
      </Reveal>
    </Section>
  )
}

/* ── 4. What we do ────────────────────────────────────────────────────────── */

function Model() {
  return (
    <Section tone="cream" size="lg" labelledBy="model-heading">
      <SectionHeader
        id="model-heading"
        eyebrow={MODEL.eyebrow}
        heading={MODEL.heading}
        standfirst={MODEL.standfirst}
      />

      <RevealGroup className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {MODEL.pillars.map((pillar) => (
          <RevealItem key={pillar.n} className="h-full">
            <div className="flex h-full flex-col border-t-2 border-brass pt-6">
              <span className="font-display text-title-md text-brass">{pillar.n}</span>
              <h3 className="mt-2 text-title-sm text-forest">{pillar.term}</h3>
              <p className="mt-3 flex-1 text-body-sm text-ink-soft">{pillar.detail}</p>
              <p className="mt-5">
                <Source>{pillar.source}</Source>
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal className="mt-14 text-center" delay={0.15}>
        <ButtonLink to="/projects/goat-milk" variant="secondary">
          How the whole model works
        </ButtonLink>
      </Reveal>
    </Section>
  )
}

/* ── 5. Traction ──────────────────────────────────────────────────────────── */

/** The before/after bars. The fill draws in on scroll — a measurement being taken. */
function GainBar({
  gain,
  index,
}: {
  gain: (typeof GAINS)[number]
  index: number
}) {
  const reduced = usePrefersReducedMotion()

  return (
    <li className="border-t border-cream/15 py-6 first:border-t-0 sm:py-7">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="text-title-sm text-cream">{gain.metric}</h3>
        <p className="font-display text-stat-sm text-brass-soft">{gain.to}</p>
      </div>

      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-cream/10">
        {reduced ? (
          <span
            className="block h-full rounded-full bg-brass-soft"
            style={{ width: `${gain.toPct * 100}%` }}
          />
        ) : (
          <motion.span
            className="block h-full rounded-full bg-brass-soft"
            initial={{ width: `${gain.fromPct * 100}%`, opacity: 0.35 }}
            whileInView={{ width: `${gain.toPct * 100}%`, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.15 + index * 0.12 }}
          />
        )}
      </div>

      <p className="mt-3 text-body-sm text-cream/70">{gain.summary}</p>
      <p className="mt-2">
        <Source inverted>{gain.source}</Source>
      </p>
    </li>
  )
}

function Traction() {
  return (
    <Section tone="forest" size="lg" labelledBy="traction-heading">
      <SectionHeader
        id="traction-heading"
        eyebrow={TRACTION_INTRO.eyebrow}
        heading={TRACTION_INTRO.heading}
        standfirst={TRACTION_INTRO.standfirst}
        inverted
      />

      <StatGrid stats={TRACTION} inverted columns={3} className="mt-14" />

      <Reveal className="mx-auto mt-16 max-w-3xl">
        <h3 className="text-center font-display text-title-md text-cream">
          What changed for the animals
        </h3>
        <ul className="mt-8">
          {GAINS.map((gain, i) => (
            <GainBar key={gain.metric} gain={gain} index={i} />
          ))}
        </ul>
      </Reveal>

      <Reveal className="mt-12 text-center" delay={0.1}>
        <p className="text-caption text-cream/50">All figures as of {AS_OF}.</p>
      </Reveal>
    </Section>
  )
}

/* ── 6. The dairy ─────────────────────────────────────────────────────────── */

function Dairy() {
  return (
    <Section tone="cream" size="lg" labelledBy="dairy-heading">
      <SectionHeader
        id="dairy-heading"
        eyebrow={DAIRY.eyebrow}
        heading="The plant is already built"
        standfirst={DAIRY.standfirst}
      />

      <Reveal className="mt-12" delay={0.1}>
        <Figure
          src={DAIRY.gallery[0].file}
          alt={DAIRY.gallery[0].alt}
          ratio="panorama"
          caption="The bulk milk chillers at Malpur — 30,000 litres of chilling capacity, commissioned and staffed."
        />
      </Reveal>

      <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {DAIRY.spec.map((item) => (
          <RevealItem key={item.term} className="h-full">
            <div className="flex h-full flex-col rounded-card bg-cream-deep p-7">
              <p className="font-display text-title-md text-forest">{item.term}</p>
              <p className="mt-3 flex-1 text-body-sm text-ink-soft">{item.detail}</p>
              <p className="mt-5">
                <Source>{item.source}</Source>
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  )
}

/* ── 7. The women ─────────────────────────────────────────────────────────── */

function Women() {
  return (
    <Section tone="deep" size="lg" labelledBy="women-heading">
      <SectionHeader
        id="women-heading"
        eyebrow={WOMEN.eyebrow}
        heading={WOMEN.heading}
      />

      <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <Figure
            src={WOMEN.gallery[1].file}
            alt={WOMEN.gallery[1].alt}
            ratio="landscape"
            caption={WOMEN.gallery[1].caption}
          />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-display text-stat text-brass">
            <CountUp value={WOMEN.stat.value} suffix={WOMEN.stat.suffix} />
          </p>
          <p className="mt-2 text-title-sm text-forest">{WOMEN.stat.label}</p>

          {WOMEN.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mt-5 text-body text-ink-soft">
              {paragraph}
            </p>
          ))}

          <p className="mt-7 border-l-2 border-brass pl-5 font-display text-title-sm text-forest">
            {WOMEN.turn}
          </p>

          <p className="mt-5">
            <Source>{WOMEN.bodySource}</Source>
          </p>
        </Reveal>
      </div>
    </Section>
  )
}

/* ── 8. Our projects ──────────────────────────────────────────────────────── */

const PROJECT_CARDS = [
  {
    to: '/projects/goat-milk',
    eyebrow: 'Malpur · Dhule',
    title: 'Goat Milk & Breed Development',
    body: 'The Zalawadi goat, tagged and recorded twice daily, with a built dairy buying the milk. 4,000 goats across 17 villages, and the project this site is mostly about.',
    image: '03-goats/image7.webp',
    imageAlt: 'A Zalawadi goat photographed in side profile',
  },
  {
    to: '/projects/indigenous-cow',
    eyebrow: 'Arvi · Wardha',
    title: 'Indigenous Gaolao Cow Breeding',
    body: 'Developing the Gaolao breed — a dual-purpose indigenous cow suited to the Vidarbha climate — through farmer producer companies at village level.',
    image: '11-community/B_p06_00.webp',
    imageAlt: 'A village meeting in one of the project districts',
  },
]

function Projects() {
  return (
    <Section tone="cream" size="lg" labelledBy="projects-heading">
      <SectionHeader
        id="projects-heading"
        eyebrow="Our projects"
        heading="Two breeds, one argument"
        standfirst="Both projects start from the same premise: a rural family already owns a productive animal, and what it lacks is health, genetics and a buyer."
      />

      <RevealGroup className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {PROJECT_CARDS.map((project) => (
          <RevealItem key={project.to} className="h-full">
            <Link
              to={project.to}
              className="group flex h-full flex-col overflow-hidden rounded-card border border-cream-edge bg-white shadow-card transition-all duration-500 ease-calm hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="aspect-landscape w-full overflow-hidden bg-cream-deep">
                <img
                  src={`/images/${project.image}`}
                  alt={project.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-calm group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <p className="eyebrow">{project.eyebrow}</p>
                <h3 className="mt-3 text-title-md text-forest">{project.title}</h3>
                <p className="mt-4 flex-1 text-body-sm text-ink-soft">{project.body}</p>
                <span className="mt-6 text-body-sm font-semibold text-brass underline-offset-4 group-hover:underline">
                  Read more
                </span>
              </div>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  )
}

/* ── 9. Who stands behind it ──────────────────────────────────────────────── */

function Institutions() {
  return (
    <Section tone="deep" size="lg" labelledBy="partners-heading">
      <SectionHeader
        id="partners-heading"
        eyebrow={PARTNERS_INTRO.eyebrow}
        heading={PARTNERS_INTRO.heading}
        standfirst={PARTNERS_INTRO.standfirst}
      />

      <RevealGroup as="ul" className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        {PARTNERS.map((partner) => (
          <RevealItem key={partner.abbr} as="li" className="h-full">
            <div className="flex h-full flex-col rounded-card border border-cream-edge bg-white p-7">
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="text-title-sm text-forest">{partner.abbr}</h3>
                {partner.location ? (
                  <span className="text-caption text-ink-faint">{partner.location}</span>
                ) : null}
              </div>
              <p className="mt-1 text-caption text-ink-faint">{partner.name}</p>
              <p className="mt-4 flex-1 text-body-sm text-ink-soft">{partner.role}</p>
              <p className="mt-5">
                <Source>{partner.source}</Source>
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal className="mt-16">
        <h3 className="text-center font-display text-title-md text-forest">Our patrons</h3>
        <p className="mx-auto mt-3 max-w-measure-sm text-center text-body-sm text-ink-soft">
          Senior figures in agriculture, commerce, banking and administration who lend the
          foundation their name.
        </p>
      </Reveal>

      <RevealGroup className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
        {PATRONS.slice(0, 4).map((patron) => (
          <RevealItem key={patron.name}>
            <div className="text-center">
              <div className="mx-auto aspect-square w-full max-w-[9rem] overflow-hidden rounded-full border border-cream-edge bg-cream-deep">
                {patron.image ? (
                  <img
                    src={patron.image}
                    alt={`Portrait of ${patron.name}`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top"
                  />
                ) : null}
              </div>
              <p className="mt-4 text-body-sm font-semibold text-forest">{patron.name}</p>
              <p className="mt-1 text-caption text-ink-faint">{patron.role}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal className="mt-12 text-center" delay={0.1}>
        <ButtonLink to="/patrons" variant="secondary">
          All patrons and the core committee
        </ButtonLink>
      </Reveal>
    </Section>
  )
}

/* ── 10. Closing ──────────────────────────────────────────────────────────── */

function Closing() {
  return (
    <Section tone="forest" size="lg" labelledBy="closing-heading">
      <SectionHeader
        id="closing-heading"
        eyebrow="What you can do"
        heading="Two ways to be part of this"
        standfirst="A CSR head and a commercial partner are looking at the same evidence. Only the last step differs."
        inverted
      />

      <RevealGroup className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
        <RevealItem className="h-full">
          <div className="flex h-full flex-col rounded-card border border-cream/15 bg-forest-deep/40 p-8 text-center">
            <h3 className="text-title-md text-cream">Support this work</h3>
            <p className="mt-4 flex-1 text-body-sm text-cream/70">
              Fund the non-profit half — tagging, health cards, veterinary camps, training and
              the laboratory. This is the work with no revenue attached, and it is what makes
              the other half possible.
            </p>
            <div className="mt-7">
              <ButtonLink to="/donate" variant="inverted">
                Donate
              </ButtonLink>
            </div>
          </div>
        </RevealItem>

        <RevealItem className="h-full">
          <div className="flex h-full flex-col rounded-card border border-cream/15 bg-forest-deep/40 p-8 text-center">
            <h3 className="text-title-md text-cream">Partner with us</h3>
            <p className="mt-4 flex-1 text-body-sm text-cream/70">
              Corporate CSR, institutional collaboration or commercial partnership across
              milk, feed, fertilizer and pesticide. Talk to the team directly.
            </p>
            <div className="mt-7">
              <ButtonLink
                to="/contact"
                variant="outline-inverted"
              >
                Get in touch
              </ButtonLink>
            </div>
          </div>
        </RevealItem>
      </RevealGroup>
    </Section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Aim />
      <Barriers />
      <Model />
      <Traction />
      <Dairy />
      <Women />
      <Projects />
      <Institutions />
      <Closing />
    </>
  )
}
