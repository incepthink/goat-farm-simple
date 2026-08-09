import { PageHero } from '@/components/PageHero'
import { Section, SectionHeader } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { ButtonLink } from '@/components/Button'
import { Figure } from '@/components/Figure'
import {
  LEGACY_HERO,
  LEGACY_PORTRAIT,
  LEGACY_PULL,
  LEGACY_CHAPTERS,
  LEGACY_TO_TODAY,
} from '@/data/legacy'

/**
 * The biography.
 *
 * Set as a single narrow column of chapters in date order, each with a date kicker in the
 * margin. The existing site sets ten equally-weighted headed blocks with no sequence, so
 * the reader cannot tell whether "GREEN REVOLUTION" comes before or after "FARMERS FIRST".
 * A life has an order; showing it is most of the work here.
 */
export default function AnnasahebShinde() {
  return (
    <>
      <PageHero
        eyebrow={LEGACY_HERO.eyebrow}
        title={LEGACY_HERO.name}
        standfirst={LEGACY_HERO.title}
        image={LEGACY_HERO.image}
        imageAlt={LEGACY_HERO.imageAlt}
      />

      <Section tone="cream" size="lg">
        {/* The portrait opens the page, centred and alone, before a word of biography.
            The existing site leads its about page with the same photograph; keeping it
            first here is the clearest signal to the client that this is his page. */}
        <Reveal className="mx-auto max-w-sm">
          <Figure
            src={LEGACY_PORTRAIT.src}
            alt={LEGACY_PORTRAIT.alt}
            ratio="square"
            objectPosition={LEGACY_PORTRAIT.objectPosition}
            blend
            zoom={false}
            priority
          />
        </Reveal>

        <Reveal className="mx-auto mt-14 max-w-measure text-center" delay={0.1}>
          <p className="text-lead text-ink-soft">{LEGACY_HERO.standfirst}</p>
        </Reveal>

        <Reveal className="mx-auto mt-14 max-w-measure" delay={0.15}>
          <blockquote className="border-l-2 border-brass pl-6 sm:pl-8">
            <p className="font-display text-title-lg text-forest">{LEGACY_PULL.quote}</p>
            <footer className="mt-4 text-caption text-ink-faint">
              {LEGACY_PULL.attribution}
            </footer>
          </blockquote>
        </Reveal>
      </Section>

      <Section tone="deep" size="lg">
        <div className="mx-auto max-w-4xl">
          {LEGACY_CHAPTERS.map((chapter, i) => (
            <Reveal
              key={chapter.id}
              as="section"
              className={`grid gap-6 sm:grid-cols-[8rem_1fr] sm:gap-10 ${
                i === 0 ? '' : 'mt-14 border-t border-cream-edge pt-14'
              }`}
            >
              <p className="eyebrow pt-1.5">{chapter.kicker}</p>

              <div>
                <h2 className="text-title-md text-forest">{chapter.heading}</h2>
                <div className="prose-asf mt-5">
                  {chapter.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="forest" size="lg">
        <SectionHeader
          eyebrow="The foundation"
          heading={LEGACY_TO_TODAY.heading}
          inverted
        />

        <Reveal className="mx-auto mt-8 max-w-measure text-center" delay={0.1}>
          {LEGACY_TO_TODAY.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mt-5 text-lead text-cream/80 first:mt-0">
              {paragraph}
            </p>
          ))}

          <div className="mt-10">
            <ButtonLink to={LEGACY_TO_TODAY.cta.to} variant="inverted">
              {LEGACY_TO_TODAY.cta.label}
            </ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
