import { RevealGroup, RevealItem } from './Reveal'
import type { PersonEntry } from '@/data/people'

/**
 * A person card.
 *
 * The portraits came from the client's existing site and vary in crop, colour and
 * quality. Forcing all of them into one square slot with object-cover is what keeps a
 * grid of them looking like a set rather than a scrapbook — and it means better portraits
 * can be dropped in one at a time without the rows going ragged.
 *
 * `bio: null` renders name and role alone. See the note in data/people.ts: several people
 * have a photograph on the existing site and no description anywhere, and inventing one
 * for a named individual is not a thing we do.
 */

export function PersonCard({ person }: { person: PersonEntry }) {
  return (
    <article className="card card-hover flex h-full flex-col overflow-hidden">
      <div className="aspect-square w-full overflow-hidden bg-cream-deep">
        {person.image ? (
          <img
            src={person.image}
            alt={`Portrait of ${person.name}`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top"
          />
        ) : (
          /* Monogram fallback. Set to read as a deliberate placeholder rather than a
             broken image — a faint letter on a tinted panel, with the honorific stripped
             so "Dr. Abdul Samad" gives A and not D. */
          <div className="flex h-full w-full items-center justify-center bg-forest-wash">
            <span className="font-display text-stat text-forest/25">
              {person.name.replace(/^(Mr\.?|Mrs\.?|Dr\.?|Shri|Hon’ble)\s+/i, '').charAt(0)}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-title-sm text-forest">{person.name}</h3>
        <p className="mt-1.5 text-caption font-semibold uppercase tracking-wide text-brass">
          {person.role}
        </p>
        {person.bio ? (
          <p className="mt-4 text-body-sm text-ink-soft">{person.bio}</p>
        ) : null}
      </div>
    </article>
  )
}

export function PersonGrid({
  people,
  columns = 3,
}: {
  people: PersonEntry[]
  columns?: 2 | 3 | 4
}) {
  const cols =
    columns === 2
      ? 'sm:grid-cols-2'
      : columns === 4
        ? 'sm:grid-cols-2 lg:grid-cols-4'
        : 'sm:grid-cols-2 lg:grid-cols-3'

  return (
    <RevealGroup className={`grid grid-cols-1 gap-6 ${cols}`}>
      {people.map((person) => (
        <RevealItem key={`${person.name}-${person.role}`} className="h-full">
          <PersonCard person={person} />
        </RevealItem>
      ))}
    </RevealGroup>
  )
}
