import { PageHero } from '@/components/PageHero'
import { Section, SectionHeader } from '@/components/Section'
import { Reveal, RevealGroup, RevealItem } from '@/components/Reveal'
import { ButtonLink } from '@/components/Button'

/**
 * The Gaolao cow project at Arvi, Wardha.
 *
 * ⚠️  This page is deliberately short.
 *
 * Everything here is drawn from the client's existing site, which is the only source we
 * have for this project — there is no proposal document, no survey table, no photography
 * and no traction figures, the way there is for Malpur. So the page says what is known
 * and stops, rather than padding to match the length of the goat project page.
 *
 * When the client supplies material for Arvi, this page should get the same treatment as
 * /projects/goat-milk: numbers with sources, real photographs, and a named timeline.
 * See docs/CLIENT-QUESTIONS.md.
 */

const WHY_GAOLAO = [
  {
    term: 'Suited to Vidarbha',
    detail:
      'The Gaolao is indigenous to the region and already adapted to its agro-climatic conditions — the same starting advantage the Zalawadi goat has at Malpur.',
  },
  {
    term: 'Dual purpose',
    detail:
      'Reared for both milk and draught, which means the animal earns in more than one way and is not dependent on a single market.',
  },
  {
    term: 'Farmer-owned companies',
    detail:
      'Gaolao Breed Development Farmer Producer Co. Ltd. at Bhivapur Heti, so improvement in the breed accrues to the farmers rearing it rather than to an intermediary.',
  },
  {
    term: 'Conserving the breed',
    detail:
      'Indigenous cattle breeds are being displaced by crossbreeding. Developing the Gaolao commercially is what gives farmers a reason to keep it.',
  },
]

export default function IndigenousCowProject() {
  return (
    <>
      <PageHero
        eyebrow="Arvi · Dist. Wardha · Maharashtra"
        title="Indigenous Gaolao Cow Breeding &amp; Milk"
        standfirst="The same model as Malpur, applied to an indigenous cattle breed in Vidarbha — breed development, and farmer producer companies at village level."
        image="11-community/B_p06_03.webp"
        imageAlt="A village in the districts the foundation works in"
      />

      <Section tone="cream" size="lg">
        <SectionHeader
          eyebrow="The project"
          heading="Developing the Gaolao breed at Arvi"
        />

        <Reveal className="mx-auto mt-10 max-w-measure" delay={0.1}>
          <div className="prose-asf">
            <p>
              Arvi, in Wardha district, is the foundation’s second breed development
              programme. It focuses on the Gaolao — an indigenous cow well suited to the
              agro-climatic conditions of Vidarbha, and valued for both milk and draught.
            </p>
            <p>
              The argument is the one this organisation makes everywhere: poor farmers in
              the region already keep these animals. What they lack is genetic improvement,
              reliable animal husbandry support and a route to market. Provide those three
              and animal husbandry becomes a sustainable source of income rather than a
              subsistence activity.
            </p>
            <p>
              The vehicle is a farmer producer company —{' '}
              <strong className="font-semibold text-ink">
                Gaolao Breed Development Farmer Producer Co. Ltd.
              </strong>
              , at the nearby village of Bhivapur Heti — so the farmers rearing the breed
              own the enterprise built around it.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="deep" size="lg">
        <SectionHeader heading="Why this breed" />

        <RevealGroup as="ul" className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {WHY_GAOLAO.map((item) => (
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
        <Reveal className="mx-auto max-w-measure rounded-card border border-cream-edge bg-cream-deep p-8 text-center sm:p-10">
          <p className="eyebrow">A note on this page</p>
          <p className="mt-4 text-body text-ink-soft">
            The goat project at Malpur is documented in detail — surveyed villages, per-animal
            records, commissioned infrastructure and figures traced to source. The Gaolao
            programme is at an earlier stage and we are not going to present it as though it
            were further along than it is.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ButtonLink to="/projects/goat-milk" variant="primary">
              See the Malpur project
            </ButtonLink>
            <ButtonLink to="/contact" variant="secondary">
              Ask about Arvi
            </ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
