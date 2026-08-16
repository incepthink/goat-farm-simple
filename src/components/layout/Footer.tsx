import { Link } from 'react-router-dom'
import { CONTACT, OFFICES, ORG } from '@/data/org'
import { NAV, NAV_CTA } from '@/data/nav'
import { AsfLogo } from '@/components/brand/AsfLogo'

/**
 * The footer.
 *
 * The client's existing footer carries one address, a row of social icons and a "designed
 * by" credit. This one carries all three offices, because the third — the dairy at Malpur —
 * is the single most persuasive line on the site: a project with a plant you can drive to
 * is not a proposal.
 *
 * Only the foundation's own registered name appears in the rule below. No associate's
 * company identifiers belong on this site — see the header of data/org.ts.
 */

const SOCIAL = [
  { label: 'Facebook', href: 'https://www.facebook.com/Annasaheb-Shinde-Foundation-105502578894107' },
  { label: 'Instagram', href: 'https://www.instagram.com/annasahebshindefoundation/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/annasaheb-shinde-foundation/' },
  { label: 'X', href: 'https://twitter.com/Annasaheb1922' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UC2_unPXXO-8B5VCbgtKyC_A/featured' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-forest text-cream">
      <div className="shell py-section">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr_1fr]">
          {/* Identity */}
          <div>
            <div className="flex items-center gap-4">
              <AsfLogo paint="current" className="h-14 shrink-0 text-cream" />
              <div>
                <p className="font-display text-title-sm text-cream">{ORG.name}</p>
                <p className="mt-1 text-caption text-cream/60">Agro &amp; Social Development</p>
              </div>
            </div>

            <p className="mt-6 max-w-measure-sm text-body-sm text-cream/70">
              {ORG.legalName}. Continuing the work of Late Shri Annasaheb Shinde — turning
              agriculture into a source of stability and dignity for rural families.
            </p>

            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-caption text-cream/70 underline-offset-4 transition-colors hover:text-brass-soft hover:underline"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h2 className="text-caption font-bold uppercase tracking-[0.16em] text-brass-soft">
              Offices
            </h2>
            <ul className="mt-6 space-y-6">
              {OFFICES.map((office) => (
                <li key={office.label}>
                  <p className="text-body-sm font-semibold text-cream">
                    {office.label}
                    <span className="ml-2 font-normal text-cream/50">{office.kind}</span>
                  </p>
                  <address className="mt-1.5 not-italic text-body-sm leading-relaxed text-cream/70">
                    {office.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach us + nav */}
          <div>
            <h2 className="text-caption font-bold uppercase tracking-[0.16em] text-brass-soft">
              Reach us
            </h2>
            <ul className="mt-6 space-y-1.5 text-body-sm text-cream/70">
              {CONTACT.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="transition-colors hover:text-brass-soft"
                  >
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-4 space-y-1.5 text-body-sm text-cream/70">
              {CONTACT.emails.map((email) => (
                <li key={email.address}>
                  <a
                    href={`mailto:${email.address}`}
                    className="transition-colors hover:text-brass-soft"
                  >
                    {email.address}
                  </a>
                  <span className="ml-2 text-caption text-cream/40">{email.label}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-caption font-bold uppercase tracking-[0.16em] text-brass-soft">
              Pages
            </h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-body-sm">
              {NAV.flatMap((item) =>
                item.children
                  ? item.children.map((c) => ({ label: c.label, to: c.to }))
                  : [{ label: item.label, to: item.to! }],
              ).map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-cream/70 transition-colors hover:text-brass-soft"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to={NAV_CTA.to}
                  className="text-cream/70 transition-colors hover:text-brass-soft"
                >
                  {NAV_CTA.label}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-cream/15 pt-7">
          <div className="flex flex-col gap-3 text-caption text-cream/45 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {ORG.legalName}. All rights reserved.
            </p>
            <p>A Section 8 non-profit company.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
