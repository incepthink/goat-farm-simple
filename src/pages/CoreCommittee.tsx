import { PageHero } from '@/components/PageHero'
import { Section, SectionHeader } from '@/components/Section'
import { PersonGrid } from '@/components/PersonCard'
import { COMMITTEE_GROUPS } from '@/data/people'

/**
 * The people who run the foundation, in four groups.
 *
 * This page used to open with a three-entity org chart — a non-profit, a private company
 * and an affiliated enterprise, side by side. It was removed on the client's instruction:
 * this site is the foundation's alone. Do not reintroduce an org-structure section here.
 * See the header of data/org.ts.
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

      {COMMITTEE_GROUPS.map((group, i) => (
        <Section key={group.title} tone={i % 2 === 0 ? 'cream' : 'deep'} size="lg">
          <SectionHeader heading={group.title} standfirst={group.blurb} />
          <div className="mt-14">
            <PersonGrid people={group.people} columns={3} />
          </div>
        </Section>
      ))}
    </>
  )
}
