import { PageHero } from '@/components/PageHero'
import { Section, SectionHeader } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { Figure } from '@/components/Figure'
import { TIMELINE, TIMELINE_INTRO } from '@/data/timeline'

/**
 * Events, as a vertical timeline in date order.
 *
 * The existing site files these under "EVENTS" as an undated carousel, which means the
 * reader cannot tell whether the project started last month or five years ago. Dates are
 * the entire point of this page: nineteen months of continuous, verifiable activity is
 * the strongest thing the organisation has to show, and a carousel hides it.
 */
export default function Events() {
  return (
    <>
      <PageHero
        eyebrow={TIMELINE_INTRO.eyebrow}
        title={TIMELINE_INTRO.heading}
        standfirst={TIMELINE_INTRO.standfirst}
        image="09-events/image32.webp"
        imageAlt="Health cards being distributed to flock owners"
      />

      <Section tone="cream" size="lg">
        <SectionHeader
          eyebrow="Milestones"
          heading="What has happened, in the order it happened"
          standfirst="Phase one began on 1 January 2024. Everything below is dated and has photographs behind it."
        />

        <ol className="mx-auto mt-16 max-w-4xl">
          {TIMELINE.map((milestone, i) => (
            <Reveal
              key={milestone.title}
              as="li"
              className={`relative grid gap-6 sm:grid-cols-[9rem_1fr] sm:gap-10 ${
                i === 0 ? '' : 'mt-12 border-t border-cream-edge pt-12'
              }`}
            >
              <div>
                <p className="eyebrow">{milestone.date}</p>
              </div>

              <div>
                <h3 className="text-title-md text-forest">{milestone.title}</h3>
                <p className="mt-4 text-lead text-ink-soft">{milestone.detail}</p>

                {milestone.image ? (
                  <Figure
                    src={milestone.image}
                    alt={milestone.imageAlt ?? ''}
                    ratio="landscape"
                    className="mt-7"
                  />
                ) : null}
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>
    </>
  )
}
