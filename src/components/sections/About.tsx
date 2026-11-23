import { Briefcase, ChefHat, CodeXml, Headset, MapPin, Sparkles, Target, type LucideIcon } from 'lucide-react'
import { about } from '../../data/cv'
import { Card } from '../ui/Card'
import { Reveal, Stagger, StaggerItem } from '../ui/Reveal'
import { Section } from '../ui/Section'

/** Icônes des infos clés, dans l'ordre de about.facts. */
const FACT_ICONS: LucideIcon[] = [MapPin, Briefcase, Sparkles]

/** Icônes des points forts, dans l'ordre de about.highlights. */
const HIGHLIGHT_ICONS: LucideIcon[] = [Headset, CodeXml, ChefHat]

/** Affiche un texte en mettant en valeur les passages entre **…**. */
function RichText({ text }: { text: string }) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-accent-light">
        {part}
      </strong>
    ) : (
      part
    ),
  )
}

export function About() {
  return (
    <Section id="a-propos" eyebrow="cat a-propos.md" title="À propos">
      <div className="grid gap-6 lg:grid-cols-[1.7fr_1fr]">
        <Reveal>
          <Card className="h-full sm:p-8">
            <p className="text-lg leading-relaxed text-text sm:text-xl">
              <RichText text={about.intro} />
            </p>

            <ul className="mt-6 space-y-4">
              {about.highlights.map((item, i) => {
                const HighlightIcon = HIGHLIGHT_ICONS[i % HIGHLIGHT_ICONS.length]
                return (
                  <li key={item.title} className="flex gap-4">
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                      <HighlightIcon className="size-[18px]" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-mono text-xs tracking-wider text-accent-light uppercase">{item.title}</p>
                      <p className="mt-1 leading-relaxed text-muted">
                        <RichText text={item.text} />
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>

            <p className="mt-6 flex gap-3 border-t border-accent/15 pt-6 leading-relaxed text-text">
              <Target className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
              <span>
                <RichText text={about.goal} />
              </span>
            </p>
          </Card>
        </Reveal>

        <Reveal delay={0.15}>
          <Card className="h-full">
            <ul className="space-y-6">
              {about.facts.map((fact, i) => {
                const FactIcon = FACT_ICONS[i % FACT_ICONS.length]
                return (
                  <li key={fact.label} className="flex gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                      <FactIcon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-mono text-xs tracking-wider text-muted uppercase">{fact.label}</p>
                      <p className="font-medium text-text">{fact.value}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </Card>
        </Reveal>
      </div>

      {/* Savoir-être */}
      <div className="mt-12">
        <Reveal>
          <h3 className="mb-4 font-mono text-sm text-accent">
            <span aria-hidden="true" className="text-muted">
              #{' '}
            </span>
            savoir_être
          </h3>
        </Reveal>
        <Stagger as="ul" className="flex flex-wrap gap-3" stagger={0.06}>
          {about.softSkills.map((skill) => (
            <StaggerItem
              as="li"
              key={skill}
              className="rounded-full border border-accent/30 bg-surface/60 px-4 py-2 text-sm text-text backdrop-blur transition-colors hover:border-accent hover:text-accent-light"
            >
              {skill}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  )
}
