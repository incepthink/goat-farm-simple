import { PageHero } from '@/components/PageHero'
import { Section, SectionHeader } from '@/components/Section'
import { Reveal, RevealGroup, RevealItem } from '@/components/Reveal'
import { ButtonLink } from '@/components/Button'
import { DONATION_TIERS, DONATE_COPY } from '@/data/donationTiers'
import { CONTACT } from '@/data/org'

/**
 * The donation page.
 *
 * ⚠️  Read this before adding anything to this page.
 *
 * Three things are deliberately absent, and each one is absent for the same reason —
 * a donation page is the single worst place on a website to publish something you have
 * not verified:
 *
 *  1. **No rupee amounts.** No cost-per-intervention figure appears in any source
 *     document. Tiers therefore render without a price rather than with a guessed one.
 *     Fill in `amount` in data/donationTiers.ts when the client confirms and the price
 *     appears here automatically.
 *  2. **No allocation percentages.** We can say what donations fund. We cannot say in
 *     what proportion, because nobody has told us.
 *  3. **No 80G, FCRA or CSR-1 claim.** The registration numbers have not been supplied,
 *     and a wrong tax-benefit claim is the kind of error that ends a CSR relationship.
 *
 * There is also no payment gateway wired up. The page routes to a direct conversation
 * instead, which is honest, and for the donation sizes this project is actually seeking —
 * CSR cheques, not ten-rupee taps — it is very likely the right flow anyway.
 */
export default function Donate() {
  const headline = DONATION_TIERS.filter((tier) => tier.headline)
  const standard = DONATION_TIERS.filter((tier) => !tier.headline)

  return (
    <>
      <PageHero
        eyebrow={DONATE_COPY.eyebrow}
        title={DONATE_COPY.heading}
        standfirst={DONATE_COPY.standfirst}
        image={DONATE_COPY.image}
        imageAlt={DONATE_COPY.imageAlt}
      />

      <Section tone="cream" size="lg">
        <SectionHeader
          eyebrow="What a donation funds"
          heading="Each of these is a real thing that happens in a village"
          standfirst="Not budget lines. Every item below maps to an intervention the project already runs."
        />

        <RevealGroup as="ul" className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {standard.map((tier) => (
            <RevealItem key={tier.id} as="li" className="h-full">
              <div className="card flex h-full flex-col p-7">
                <h3 className="text-title-sm text-forest">{tier.title}</h3>
                <p className="mt-3 flex-1 text-body-sm text-ink-soft">{tier.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section tone="deep" size="lg">
        <SectionHeader
          eyebrow="The two large asks"
          heading="What the project itself says it needs funded"
          standfirst="These two are named in the project’s own documents as requiring dedicated funding, separate from running costs."
        />

        <RevealGroup className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {headline.map((tier) => (
            <RevealItem key={tier.id} className="h-full">
              <div className="flex h-full flex-col rounded-card border-2 border-brass bg-white p-8">
                <h3 className="text-title-md text-forest">{tier.title}</h3>
                <p className="mt-4 flex-1 text-body text-ink-soft">{tier.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section tone="cream" size="lg">
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-title-md text-forest">{DONATE_COPY.allocationHeading}</h2>
            <ul className="mt-7 divide-y divide-cream-edge border-y border-cream-edge">
              {DONATE_COPY.allocation.map((item) => (
                <li key={item.label} className="py-4">
                  <p className="text-body-sm text-ink">{item.label}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-caption text-ink-faint">
              We have not published a percentage split, because no allocation breakdown exists
              in the project documents and a donation page is not the place to estimate one.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-title-md text-forest">{DONATE_COPY.trustHeading}</h2>
            <ul className="mt-7 space-y-6">
              {DONATE_COPY.trust.map((item) => (
                <li key={item.claim}>
                  <p className="text-body-sm font-semibold text-forest">{item.claim}</p>
                  <p className="mt-1.5 text-body-sm text-ink-soft">{item.detail}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section tone="forest" size="lg">
        <Reveal className="mx-auto max-w-measure text-center">
          <p className="eyebrow text-brass-soft">How to give</p>
          <h2 className="mt-4 text-title-lg text-cream">Speak to us directly</h2>
          <p className="mt-6 text-lead text-cream/80">
            We have not put a payment button on this page. Contributions to this project are
            arranged in conversation — so that you know exactly which part of the work your
            money is funding, and so that we can send you the registration and compliance
            documents your finance team will ask for.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink to={`mailto:${CONTACT.emails[0].address}`} variant="inverted">
              Email the CEO
            </ButtonLink>
            <ButtonLink
              to="/contact"
              variant="outline-inverted"
            >
              {DONATE_COPY.csrCta}
            </ButtonLink>
          </div>

          <p className="mt-10 text-caption text-cream/50">
            {DONATE_COPY.csrLine} Corporate and CSR contributions are handled by the same team.
          </p>
        </Reveal>
      </Section>
    </>
  )
}
