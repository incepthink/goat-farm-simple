import { PageHero } from '@/components/PageHero'
import { Section, SectionHeader } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { PersonGrid } from '@/components/PersonCard'
import { ENTITIES, IGBDPL_IDENTIFIERS } from '@/data/org'
import { COMMITTEE_GROUPS } from '@/data/people'

/**
 * The core committee page also carries the three-entity structure.
 *
 * That structure is the single most confusing thing about this organisation from the
 * outside — a non-profit, a private limited company and an affiliated enterprise, with
 * one man holding a senior post in two of them. It is not an irregularity, it is the
 * design: donor money cannot fund a milk business and investor money will not fund
 * veterinary camps. Saying so here, next to the names, is what stops it looking like
 * something being glossed over.
 */
export default function CoreCommittee() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="The people who run it"
        standfirst="A governing board, an executive team, a veterinary and genetics faculty, and an advisory committee across business, law and finance."
        image="10-institutional/image14.webp"
        imageAlt="Foundation representatives at an official meeting"
      />

      <Section tone="cream" size="lg">
        <SectionHeader
          eyebrow="How it is organised"
          heading="Three entities, because the work has two halves"
          standfirst="Farmer-facing work earns nothing and must be funded by donors. Milk collection and processing is a business and must be funded commercially. Trying to do both inside one balance sheet is where projects like this usually fail."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {ENTITIES.map((entity, i) => (
            <Reveal key={entity.abbr} delay={i * 0.08} className="h-full">
              <div className="flex h-full flex-col rounded-card border border-cream-edge bg-white p-8 shadow-card">
                <p className="font-display text-title-md text-forest">{entity.abbr}</p>
                <p className="mt-2 text-caption text-ink-faint">{entity.name}</p>

                <dl className="mt-6 space-y-3 border-t border-cream-edge pt-6">
                  <div>
                    <dt className="text-caption uppercase tracking-wide text-ink-faint">Type</dt>
                    <dd className="mt-0.5 text-body-sm text-ink">{entity.type}</dd>
                  </div>
                  <div>
                    <dt className="text-caption uppercase tracking-wide text-ink-faint">
                      Funded by
                    </dt>
                    <dd className="mt-0.5 text-body-sm text-ink">{entity.funding}</dd>
                  </div>
                </dl>

                <p className="mt-6 flex-1 text-body-sm text-ink-soft">{entity.role}</p>

                {entity.abbr === 'IGBDPL' ? (
                  <p className="mt-5 text-source text-ink-faint">
                    CIN {IGBDPL_IDENTIFIERS.cin} · GST {IGBDPL_IDENTIFIERS.gstin}
                  </p>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {COMMITTEE_GROUPS.map((group, i) => (
        <Section key={group.title} tone={i % 2 === 0 ? 'deep' : 'cream'} size="lg">
          <SectionHeader heading={group.title} standfirst={group.blurb} />
          <div className="mt-14">
            <PersonGrid people={group.people} columns={3} />
          </div>
        </Section>
      ))}
    </>
  )
}
