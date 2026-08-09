import { useState } from 'react'
import { PageHero } from '@/components/PageHero'
import { Section, SectionHeader } from '@/components/Section'
import { Reveal, RevealGroup, RevealItem } from '@/components/Reveal'
import { Button } from '@/components/Button'
import { CONTACT, OFFICES, LEADERSHIP } from '@/data/org'

/**
 * Contact.
 *
 * ⚠️  The form composes a `mailto:` and hands off to the visitor's mail client. There is
 * no backend on this site and no form endpoint has been provisioned, and a form that
 * silently swallows an investor enquiry is materially worse than no form at all.
 *
 * To make it a real form later, replace `handleSubmit` with a POST to the endpoint and
 * keep everything else: the fields, the labels and the validation are already right.
 */

const ENQUIRY_TYPES = [
  'CSR or corporate partnership',
  'Investment or commercial partnership',
  'Institutional or research collaboration',
  'Buying goat milk or other products',
  'Media',
  'Something else',
]

function Field({
  label,
  name,
  type = 'text',
  required = false,
  value,
  onChange,
  as = 'input',
  options,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  value: string
  onChange: (value: string) => void
  as?: 'input' | 'textarea' | 'select'
  options?: string[]
}) {
  const shared =
    'mt-2 w-full rounded-card border border-cream-edge bg-white px-4 py-3 text-body text-ink transition-colors duration-200 placeholder:text-ink-faint focus:border-forest focus:outline-none'

  return (
    <label className="block">
      <span className="text-body-sm font-semibold text-forest">
        {label}
        {required ? <span className="ml-1 text-brass">*</span> : null}
      </span>

      {as === 'textarea' ? (
        <textarea
          name={name}
          required={required}
          rows={6}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${shared} resize-y`}
        />
      ) : as === 'select' ? (
        <select
          name={name}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={shared}
        >
          <option value="">Please choose…</option>
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={shared}
        />
      )}
    </label>
  )
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    organisation: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((current) => ({ ...current, [key]: value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const body = [
      `Name: ${form.name}`,
      form.organisation ? `Organisation: ${form.organisation}` : null,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : null,
      `Enquiry: ${form.subject}`,
      '',
      form.message,
    ]
      .filter(Boolean)
      .join('\n')

    window.location.href = `mailto:${CONTACT.emails[0].address}?subject=${encodeURIComponent(
      `Website enquiry — ${form.subject || 'General'}`,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the team"
        standfirst="Three offices, and a project site you are welcome to visit."
        image="07-dairy/image5.webp"
        imageAlt="The project building at Malpur which houses the dairy"
      />

      <Section tone="cream" size="lg">
        <SectionHeader
          eyebrow="Where we are"
          heading="Mumbai, Pune, and the dairy at Malpur"
          standfirst="The third address is a working plant. If you are considering funding or partnering with this project, go and see it."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {OFFICES.map((office) => (
            <RevealItem key={office.label} className="h-full">
              <div className="card flex h-full flex-col p-8">
                <p className="eyebrow">{office.kind}</p>
                <h3 className="mt-3 text-title-md text-forest">{office.label}</h3>
                <address className="mt-4 flex-1 not-italic text-body-sm leading-relaxed text-ink-soft">
                  {office.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-14 grid gap-10 sm:grid-cols-2" delay={0.1}>
          <div>
            <h3 className="text-caption font-bold uppercase tracking-[0.16em] text-brass">
              Telephone
            </h3>
            <ul className="mt-4 space-y-2">
              {CONTACT.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="text-body text-ink transition-colors hover:text-forest"
                  >
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-caption font-bold uppercase tracking-[0.16em] text-brass">
              Email
            </h3>
            <ul className="mt-4 space-y-2">
              {CONTACT.emails.map((email) => (
                <li key={email.address}>
                  <a
                    href={`mailto:${email.address}`}
                    className="text-body text-ink transition-colors hover:text-forest"
                  >
                    {email.address}
                  </a>
                  <span className="ml-2 text-caption text-ink-faint">{email.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      <Section tone="deep" size="lg">
        <SectionHeader
          eyebrow="Enquiries"
          heading="Send us a message"
          standfirst="Investor, CSR, institutional and product enquiries all land in the same place and are answered by a person."
        />

        <Reveal className="mx-auto mt-14 max-w-2xl" delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Your name" name="name" required value={form.name} onChange={set('name')} />
              <Field
                label="Organisation"
                name="organisation"
                value={form.organisation}
                onChange={set('organisation')}
              />
              <Field
                label="Email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={set('email')}
              />
              <Field
                label="Phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={set('phone')}
              />
            </div>

            <Field
              label="What is this about?"
              name="subject"
              as="select"
              required
              options={ENQUIRY_TYPES}
              value={form.subject}
              onChange={set('subject')}
            />

            <Field
              label="Message"
              name="message"
              as="textarea"
              required
              value={form.message}
              onChange={set('message')}
            />

            <div className="flex flex-wrap items-center gap-5 pt-2">
              <Button type="submit">Send message</Button>
              <p className="text-caption text-ink-faint">
                This opens your email application with the message ready to send.
              </p>
            </div>
          </form>
        </Reveal>
      </Section>

      <Section tone="cream" size="lg">
        <SectionHeader heading="Who you will be speaking to" />

        <RevealGroup className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {LEADERSHIP.slice(0, 2).map((person) => (
            <RevealItem key={`${person.name}-${person.role}`} className="h-full">
              <div className="card flex h-full flex-col p-7">
                <h3 className="text-title-sm text-forest">{person.name}</h3>
                <p className="mt-2 text-body-sm text-ink-soft">{person.role}</p>
                <p className="mt-1 text-caption text-ink-faint">{person.org}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>
    </>
  )
}
