import { PageHero } from '@/components/PageHero'
import { Section, SectionHeader } from '@/components/Section'
import { Reveal, RevealGroup, RevealItem } from '@/components/Reveal'
import { StatGrid } from '@/components/Stat'
import { Figure, PhotoPending } from '@/components/Figure'
import { ButtonLink } from '@/components/Button'
import { BREED, MODEL, TAGGING, DAIRY, VERTICALS, VERTICALS_INTRO } from '@/data/story'
import { FUTURE, TRACTION, AS_OF } from '@/data/traction'
import { SURVEYED_VILLAGES } from '@/data/villages'

/**
 * The goat milk project in full — the page for anyone who wants the detail behind the
 * homepage.
 *
 * Order matters and is not arbitrary: the animal, then the model, then the data system,
 * then the plant, then the products, then the villages, then where it goes. Each section
 * is a precondition for the one after it.
 */
export default function GoatMilkProject() {
  return (
    <>
      <PageHero
        eyebrow="Malpur · Sindkheda · Dist. Dhule"
        title="Goat Milk &amp; Breed Development"
        standfirst="Four thousand tagged goats, one hundred and ten families, seventeen villages, and a dairy that already exists."
        image="03-goats/B_p07_04.webp"
        imageAlt="A flock of Zalawadi goats in a village pen"
      />

      <Section tone="cream" size="lg">
        <StatGrid stats={TRACTION.slice(0, 3)} columns={3} />
        <Reveal className="mt-8 text-center">
          <p className="text-caption text-ink-faint">As of {AS_OF}.</p>
        </Reveal>
      </Section>

      {/* The animal */}
      <Section tone="deep" size="lg">
        <SectionHeader
          eyebrow={BREED.eyebrow}
          heading={BREED.heading}
          standfirst={BREED.standfirst}
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Figure src={BREED.image} alt={BREED.imageAlt} ratio="landscape" />
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="font-display text-title-md text-forest">The {BREED.name}</h3>
            <dl className="mt-6 divide-y divide-cream-edge border-y border-cream-edge">
              {[...BREED.weights, BREED.adaptability].map((fact) => (
                <div key={fact.term} className="flex items-baseline justify-between gap-6 py-3.5">
                  <dt className="text-body-sm text-ink-soft">{fact.term}</dt>
                  <dd className="text-body-sm font-semibold text-forest">{fact.detail}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="mt-14">
          <StatGrid stats={BREED.stats} columns={4} />
        </div>
      </Section>

      {/* The six interventions */}
      <Section tone="cream" size="lg">
        <SectionHeader
          eyebrow={MODEL.eyebrow}
          heading={MODEL.interventionsHeading}
          standfirst={MODEL.standfirst}
        />

        <RevealGroup as="ul" className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MODEL.interventions.map((item) => (
            <RevealItem key={item.term} as="li" className="h-full">
              <div className="flex h-full flex-col rounded-card bg-cream-deep p-7">
                <h3 className="text-title-sm text-forest">{item.term}</h3>
                <p className="mt-3 flex-1 text-body-sm text-ink-soft">{item.detail}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* Tagging & data */}
      <Section tone="forest" size="lg">
        <SectionHeader
          eyebrow={TAGGING.eyebrow}
          heading={TAGGING.heading}
          standfirst={TAGGING.standfirst}
          inverted
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Figure src={TAGGING.image} alt={TAGGING.imageAlt} ratio="landscape" />
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="font-display text-title-md text-cream">What is tracked, per animal</h3>
            <ul className="mt-6 flex flex-wrap gap-2">
              {TAGGING.monitoring.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-cream/20 px-4 py-1.5 text-caption text-cream/80"
                >
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-8 border-l-2 border-brass-soft pl-5 text-body text-cream/85">
              {TAGGING.moat}
            </p>
          </Reveal>
        </div>

        {/* The honesty note. It stays. A project that tells you which part of its system
            is still manual is a project you can believe about the parts that are not. */}
        <Reveal className="mx-auto mt-14 max-w-measure rounded-card border border-cream/15 bg-forest-deep/40 p-8 text-center">
          <p className="font-display text-title-sm text-cream">“{TAGGING.honesty.text}”</p>
          <p className="mt-3 text-caption text-cream/55">
            {TAGGING.honesty.attribution}
          </p>
        </Reveal>
      </Section>

      {/* The dairy */}
      <Section tone="cream" size="lg">
        <SectionHeader eyebrow={DAIRY.eyebrow} heading={DAIRY.heading} standfirst={DAIRY.standfirst} />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DAIRY.gallery.map((photo) => (
            <RevealItem key={photo.file}>
              <Figure src={photo.file} alt={photo.alt} ratio="square" />
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mx-auto mt-14 max-w-measure text-center" delay={0.1}>
          <h3 className="font-display text-title-md text-forest">{DAIRY.facility.heading}</h3>
          <p className="mt-4 text-lead text-ink-soft">{DAIRY.facility.body}</p>
        </Reveal>
      </Section>

      {/* Four verticals */}
      <Section tone="deep" size="lg">
        <SectionHeader
          eyebrow={VERTICALS_INTRO.eyebrow}
          heading={VERTICALS_INTRO.heading}
          standfirst={VERTICALS_INTRO.standfirst}
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {VERTICALS.map((vertical) => (
            <RevealItem key={vertical.slug} className="h-full">
              <article className="flex h-full flex-col">
                {vertical.image ? (
                  <Figure src={vertical.image} alt={vertical.imageAlt} ratio="landscape" />
                ) : (
                  <PhotoPending label="No photograph of this unit yet" ratio="landscape" />
                )}

                <h3 className="mt-5 text-title-sm text-forest">{vertical.name}</h3>
                <p className="mt-1 text-caption uppercase tracking-wide text-brass">
                  {vertical.line}
                </p>
                <p className="mt-3 flex-1 text-body-sm text-ink-soft">{vertical.detail}</p>
                <p className="mt-4 text-caption text-ink-faint">{vertical.status}</p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* Villages */}
      <Section tone="cream" size="lg">
        <SectionHeader
          eyebrow="Where"
          heading="The villages"
          standfirst="Seventeen villages across Dhule and Nandurbar, and growing. Thirteen of them have been formally surveyed — flock owners, animals and distance from the dairy at Malpur."
        />

        <Reveal className="mt-12 overflow-x-auto" delay={0.1}>
          <table className="w-full min-w-[34rem] border-collapse text-body-sm">
            <caption className="sr-only">
              Surveyed villages with flock owners, goats and distance from Malpur
            </caption>
            <thead>
              <tr className="border-b border-forest/25 text-left">
                <th scope="col" className="py-3 pr-4 font-semibold text-forest">Village</th>
                <th scope="col" className="py-3 pr-4 font-semibold text-forest">District</th>
                <th scope="col" className="py-3 pr-4 text-right font-semibold text-forest">
                  Flock owners
                </th>
                <th scope="col" className="py-3 pr-4 text-right font-semibold text-forest">Goats</th>
                <th scope="col" className="py-3 text-right font-semibold text-forest">
                  Distance
                </th>
              </tr>
            </thead>
            <tbody className="tnum">
              {SURVEYED_VILLAGES.map((village) => (
                <tr key={village.name} className="border-b border-cream-edge">
                  <td className="py-3 pr-4 font-medium text-ink">{village.name}</td>
                  <td className="py-3 pr-4 text-ink-soft">{village.district}</td>
                  <td className="py-3 pr-4 text-right text-ink-soft">
                    {village.flockOwners ?? '—'}
                  </td>
                  <td className="py-3 pr-4 text-right text-ink-soft">{village.goats ?? '—'}</td>
                  <td className="py-3 text-right text-ink-soft">
                    {village.distanceKm != null ? `${village.distanceKm} km` : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </Section>

      {/* Where it goes */}
      <Section tone="forest" size="lg">
        <SectionHeader
          eyebrow={FUTURE.eyebrow}
          heading={FUTURE.heading}
          standfirst={FUTURE.standfirst}
          inverted
        />

        <div className="mt-14">
          <StatGrid stats={FUTURE.targets} inverted columns={3} />
        </div>

        <Reveal className="mx-auto mt-14 max-w-3xl" delay={0.1}>
          <h3 className="text-center font-display text-title-md text-cream">
            {FUTURE.volumeUnit}
          </h3>
          <ul className="mt-8 divide-y divide-cream/15 border-y border-cream/15">
            {FUTURE.volumes.map((volume) => (
              <li key={volume.year} className="flex items-baseline justify-between gap-6 py-4">
                <span className="text-body-sm text-cream/70">{volume.year}</span>
                <span className="tnum font-display text-title-md text-brass-soft">
                  {volume.from === volume.to
                    ? volume.to.toLocaleString('en-IN')
                    : `${volume.from.toLocaleString('en-IN')} → ${volume.to.toLocaleString('en-IN')}`}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mx-auto mt-14 max-w-measure text-center" delay={0.15}>
          <h3 className="font-display text-title-md text-cream">{FUTURE.genetics.heading}</h3>
          <p className="mt-4 text-lead text-cream/80">{FUTURE.genetics.body}</p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink to="/donate" variant="inverted">
              Support this work
            </ButtonLink>
            <ButtonLink
              to="/contact"
              variant="outline-inverted"
            >
              Partner with us
            </ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
