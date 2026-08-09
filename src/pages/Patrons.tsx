import { PageHero } from '@/components/PageHero'
import { Section } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { PersonGrid } from '@/components/PersonCard'
import { ButtonLink } from '@/components/Button'
import { PATRONS, PATRONS_INTRO } from '@/data/people'

export default function Patrons() {
  return (
    <>
      <PageHero
        eyebrow={PATRONS_INTRO.eyebrow}
        title={PATRONS_INTRO.heading}
        standfirst={PATRONS_INTRO.standfirst}
        image="10-institutional/image13.webp"
        imageAlt="A meeting between foundation representatives and institutional partners"
      />

      <Section tone="cream" size="lg">
        <PersonGrid people={PATRONS} columns={3} />

        <Reveal className="mt-16 text-center" delay={0.1}>
          <p className="mx-auto max-w-measure-sm text-body-sm text-ink-soft">
            The people who run the foundation day to day — the board, the executive team and
            the veterinary scientists behind the breeding programme — are listed separately.
          </p>
          <div className="mt-7">
            <ButtonLink to="/core-committee" variant="secondary">
              The core committee
            </ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
