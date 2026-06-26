import { createFileRoute, Link } from "@tanstack/react-router"
import { ArrowRight, Scale, TrendingUp, HeartHandshake } from "lucide-react"
import { Reveal } from "@/components/site/Reveal"

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Startseite - PSG" },
      {
        name: "description",
        content: "Startseite der Partei für Soziale Gerechtigkeit",
      },
    ],
  }),
  component: Index,
})

const pillars = [
  {
    icon: Scale,
    title: "Gerechtigkeit",
    text: "Ein Gerechter Lohn für ehrliche Arbeit, eine Gerechte Verteilung von Wohlstand und ein Rechtssystem, das einen Schutz vor Ausnutzung bietet.",
  },
  {
    icon: TrendingUp,
    title: "Soziale Aufstiegschancen",
    text: "Eine Grundversicherung für die Unterschicht, um einen immer tieferen Rutsch in die Armut vorzubeugen, einen expliziten Schutz vor wirtschaftlicher und sozialer Abhängigkeit und die Bekämpfung der benachteiligten Stellung der Frau in der Gesellschaft.",
  },
  {
    icon: HeartHandshake,
    title: "Würde und Freiheit",
    text: "Gewährleistung der Menschenwürde aller Bürgerinnen und Bürger unabhängig von Vermögen, Herkunft, etc. und die Sicherung wichtiger Grundsätze, wie demokratischer Mitbestimmung, Bürgerrechte und Meinungsfreiheit.",
  },
]

function Index() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src="https://static.spektrum.de/fm/912/f2000x857/woyzeck_GR009680_top.jpg"
          alt="Historische Darstellung einer Stadt im 19. Jahrhundert mit Soldaten und Arbeiterinnen"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-40">
          <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.02] text-primary-foreground md:text-7xl">
            Die Partei für soziale
            <br />
            <span className="text-bordeaux-light">Gerechtigkeit</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/85 md:text-xl">
            Wir kämpfen gegen Armut, Machtmissbrauch und soziale Ungleichheit.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/programm"
              className="inline-flex items-center gap-2 rounded-sm bg-bordeaux px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition hover:opacity-90"
            >
              Unser Parteiprogramm <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bordeaux">
              Wer wir sind
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Wir kämpfen für die Schwachen
            </h2>
          </Reveal>
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-foreground/85">
              <p>
                Anlass für die Gründung der PSG war u.a. das Schicksal von Franz Woyzeck. Während
                wir seine Taten unweigerlich verurteilen, erkennen wir auch seine Umstände an,
                welche die Tat zwar nicht rechtfertigen, jedoch den Ansporn für sie gaben.
              </p>
              <p>
                Woyzeck ist ein bekanntes Beispiel für etwas, das im ganzen Land vor sich geht:
                Menschen, die täglich für einen Hungerlohn arbeiten, und dennoch in der Gesellschaft
                unsichtbar geworden sind.
              </p>
              <p>
                Wir glauben, dass eben diese Menschen besondere Unterstützung verdient haben. Wer
                arm ist, ist nicht weniger Mensch, wer eine unzureichende Bildung erhalten hat, ist
                nicht weniger Wert, und wer Autoritäten untersteht, verdient Schutz statt
                Verachtung. Dieser Problemstellung will sich die PSG annehmen. Wir kämpfen für eine
                bessere Welt, in der Schicksale wie Franz Woyzeck unmöglich sind.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-24">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bordeaux">
              Unsere Grundwerte
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
              Die drei Säulen unserer Politik
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map(({ icon: Icon, title, text }) => (
              <Reveal key={title}>
                <article className="group h-full border border-border bg-card p-8 transition hover:border-bordeaux">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center bg-primary text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
