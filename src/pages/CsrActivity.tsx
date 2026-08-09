import { PageHero } from '@/components/PageHero'
import { Section, SectionHeader, Source } from '@/components/Section'
import { Reveal, RevealGroup, RevealItem } from '@/components/Reveal'
import { StatGrid } from '@/components/Stat'
import { ButtonLink } from '@/components/Button'
import { TRACTION, TRAINING, AS_OF, GAINS } from '@/data/traction'
import { SDGS } from '@/data/org'

/**
 * The CSR page.
 *
 * This is the page a corporate CSR head lands on, and they want three things in this
 * order: what does the money buy, what has it produced so far, and can I account for it
 * to my board. So the page is evidence first and appeal last — the opposite of how the
 * existing site's CSR page is arranged.
 *
 * ⚠️  No 80G, FCRA or CSR-1 registration number appears here, and no tax-benefit claim is
 * made, because none has been confirmed by the client. Those are exactly the claims a CSR
 * team will verify, and a wrong one costs more than a missing one. See the note below,
 * which is written to be replaced rather than deleted.
 */

const WHAT_IT_FUNDS = [
  {
    term: 'Tagging and health cards',
    detail:
      'A unique digital ID per animal and a health card that travels with it. This is the unit the entire data system is built from — without it there is no per-animal record and no genetic selection later.',
  },
  {
    term: 'Veterinary camps',
    detail:
      'Run with MAFSU — veterinarians and postgraduate students spending a full day in a village, examining every animal. The March–April 2025 round covered all seventeen villages.',
  },
  {
    term: 'Training',
    detail:
      'Livestock Supervisors drawn from the villages themselves, trained to record flock data and manage the health programme. Ten trained so far; six manage the 110 flocks between them.',
  },
  {
    term: 'Feed, water and shelter',
    detail:
      'Subsidised fodder, balanced feed, clean water and hygienic sheds. Shelter and nutrition are where kid mortality is won or lost.',
  },
]

export default function CsrActivity() {
  return (
    <>
      <PageHero
        eyebrow="CSR"
        title="What corporate funding pays for here"
        standfirst="The non-revenue half of the project — the half that makes the commercial half possible, and the half no business model will ever fund."
        image="09-events/image31.webp"
        imageAlt="Veterinarians examining goats at a village health camp with MAFSU"
      />

      <Section tone="cream" size="lg">
        <SectionHeader
          eyebrow="The case"
          heading="Two organisations, because the work has two halves"
          standfirst="Making a goat healthier earns a family nothing unless someone buys the extra milk — and a milk business needs healthy animals to buy from. The commercial arm can fund the second half. Nothing but donor and CSR money will ever fund the first."
        />
      </Section>

      <Section tone="deep" size="lg">
        <SectionHeader heading="What the money buys" />

        <RevealGroup as="ul" className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {WHAT_IT_FUNDS.map((item) => (
            <RevealItem key={item.term} as="li" className="h-full">
              <div className="card flex h-full flex-col p-7">
                <h3 className="text-title-sm text-forest">{item.term}</h3>
                <p className="mt-3 text-body-sm text-ink-soft">{item.detail}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section tone="cream" size="lg">
        <SectionHeader
          eyebrow={`As of ${AS_OF}`}
          heading="What it has produced"
          standfirst="Not projections. This is what existed seventeen months after phase one began."
        />

        <div className="mt-14">
          <StatGrid stats={[...TRACTION, ...TRAINING]} columns={4} />
        </div>

        <Reveal className="mx-auto mt-16 max-w-3xl" delay={0.1}>
          <h3 className="text-center font-display text-title-md text-forest">
            And what changed for the animals
          </h3>
          <dl className="mt-8 divide-y divide-cream-edge border-y border-cream-edge">
            {GAINS.map((gain) => (
              <div key={gain.metric} className="flex items-baseline justify-between gap-6 py-4">
                <dt className="text-body-sm text-ink-soft">{gain.metric}</dt>
                <dd className="text-right">
                  <span className="font-display text-title-sm text-forest">{gain.to}</span>
                  <span className="ml-3 text-source text-ink-faint">{gain.source}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Section>

      <Section tone="forest" size="lg">
        <SectionHeader
          eyebrow="Alignment"
          heading="Sustainable Development Goals"
          standfirst="The four the project is aligned to, for CSR reporting."
          inverted
        />

        <RevealGroup className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-5 lg:grid-cols-4">
          {SDGS.goals.map((goal) => (
            <RevealItem key={goal.number}>
              <div className="flex h-full flex-col items-center rounded-card border border-cream/15 bg-forest-deep/40 px-5 py-8 text-center">
                <span className="font-display text-stat text-brass-soft">{goal.number}</span>
                <span className="mt-3 text-body-sm text-cream/80">{goal.title}</span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-8 text-center" delay={0.1}>
          <Source inverted>{SDGS.source}</Source>
        </Reveal>
      </Section>

      <Section tone="cream" size="lg">
        <Reveal className="mx-auto max-w-measure rounded-card border border-cream-edge bg-cream-deep p-8 text-center sm:p-10">
          <p className="eyebrow">Compliance</p>
          <h2 className="mt-4 text-title-md text-forest">
            Registration details on request
          </h2>
          <p className="mt-4 text-body text-ink-soft">
            Section 8 registration, CSR-1 and any applicable tax-exemption details are shared
            directly with prospective CSR partners rather than published here. Write to us and
            the documents come back the same way.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ButtonLink to="/contact" variant="primary">
              Talk to the team
            </ButtonLink>
            <ButtonLink to="/donate" variant="secondary">
              Support this work
            </ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
