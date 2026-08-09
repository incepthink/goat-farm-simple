import { Section } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { ButtonLink } from '@/components/Button'

export default function NotFound() {
  return (
    <Section tone="cream" size="lg">
      <Reveal className="mx-auto max-w-measure py-section text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-4 text-title-lg text-forest">We could not find that page</h1>
        <p className="mt-6 text-lead text-ink-soft">
          The link may be out of date, or the page may have moved during the site rebuild.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink to="/">Back to the homepage</ButtonLink>
          <ButtonLink to="/contact" variant="secondary">
            Contact us
          </ButtonLink>
        </div>
      </Reveal>
    </Section>
  )
}
