import { createFileRoute } from "@tanstack/react-router"
import { PageHero } from "@/components/site/PageHero"
import { Reveal } from "@/components/site/Reveal"
import {
  ShieldCheck,
  TrendingUp,
  HeartPulse,
  GraduationCap,
  HeartHandshake,
  Venus,
  Coins,
  FlaskConical,
} from "lucide-react"

export const Route = createFileRoute("/programm")({
  head: () => ({
    meta: [
      { title: "Parteiprogramm - PSG" },
      {
        name: "description",
        content: "Das Parteiprogramm der PSG",
      },
    ],
  }),
  component: Programm,
})

const punkte = [
  {
    icon: Coins,
    n: "01",
    t: "Gerechter Lohn für ehrliche Arbeit",
    d: "Minderbemittelte sollten für ihre Arbeit nicht ausgenutzt werden. Um gerechte Entlohnung zu gewährleisten, fordern wir einen gesetzlich festgelegten Mindestsold für Soldaten und Mindestlohn für Arbeiter, der ohne Nebenerwerbe zum Leben ausreicht....",
  },
  {
    icon: ShieldCheck,
    n: "02",
    t: "Absicherung gegen soziales Abrutschen",
    d: "Wir fordern eine Grundversicherung für die Unterschicht, um einen immer tieferen Rutsch in die Armut vorzubeugen und Schutz vor wirtschaftlicher Abhängigkeit zu spenden. Ebenso setzten wir uns ein für eine Etablierung eines Unterstützungsprogramms für Krankheit, Unfall und Alter, finanziert durch Pflichtabgaben aller Bürger, bemessen nach ihren Möglichkeiten.",
  },
  {
    icon: TrendingUp,
    n: "03",
    t: "Aufstiegschancen nach Leistung",
    d: "Beförderungen im Militär und Handwerk sollen rechtlich geregelt über nachvollziehbare Prüfungen geschehen. Ebenso soll jeder Bürger durch ein funktionierendes Rechtssystem vor Unterdrückung, Ausnutzung und Erniedrigung von Vorgesetzten geschützt sein.",
  },
  {
    icon: GraduationCap,
    n: "04",
    t: "Bildung sollte kein Privileg sein",
    d: "Wir fordern die Einrichtung gebührenfreier Bildungseinrichtungen, finanziert über Abgaben der Wohlhabenderen. Kein Kind, ehelich oder nicht, sollte ohne die Fertigkeiten, die der Weg aus der Armut erfordert, ins Leben starten müssen.",
  },
  {
    icon: HeartHandshake,
    n: "05",
    t: "Niemand sollte ohne Schuld geächtet werden",
    d: "Wir sind davon überzeugt, dass die durch die eigenen Umstände der Großteil des Lebensweges eines Menschen vorbestimmt ist. Aus diesem Grund sollte niemand geächtet werden, für Umstände, an denen er keine Schuld hat. Dazu zählen wir u.a. die Gleichstellung unehelicher Kinder, was den Zugang zu Bildung, due soziale Anerkennung, etc. angeht.",
  },
  {
    icon: FlaskConical,
    n: "06",
    t: "Der Mensch ist kein Versuchsobjekt",
    d: "Wie in Woyzecks Fall klar zu erkennen war, entwickelt sich die Wissenschaft, besonders die Medizin in eine unmenschliche Richtung. Wirtschaftliche Not, darf nicht zur Einwilligung zur Selbstschädigung ausgenutzt werden. Aus diesem Grund setzen wir uns für ein Verbot bezahlter Medizinischer Experimente ohne unabhängige Aufsicht, und strengere Richtlinien für die Wissenschaft ein.",
  },
  {
    icon: HeartPulse,
    n: "07",
    t: "Medizinische Versorgung",
    d: "Wir fordern eine staatliche Krankenkasse, durch die jeder Bürger kostenlosen Zugriff auf Medizinische Versorgung erhält, zusätzlich zu der oben genannten Versicherung gegen krankheitsbedingte Arbeitsausfälle.",
  },
  {
    icon: Venus,
    n: "08",
    t: "Gleichstellung der Frau in der Gesellschaft",
    d: "Wir setzen uns ein für eine Reform des Rechts, dass es Frauen ermöglicht, selbständig zu leben und zu arbeiten, und dass die Klassifizierung des „unehelichen“ Kindes ein für alle Mal abschafft. Mehr zu diesem Thema finden sie auch auf der dedizerten Seite zu Frauenrechten.",
  },
]

function Programm() {
  return (
    <>
      <PageHero
        eyebrow="Parteiprogramm"
        title="Das wollen wir ändern"
        subtitle="Welche Misstände wollen wir bekämpfen und wie?"
      />

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-20 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Unsere Gesellschaftskritik
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                t: "Die Gesellschaft straft Armut, statt sie zu beseitigen",
                d: "Woyzeck und Marie konnten aufgrund ihrer finanziellen Lage nicht heiraten. Ihr Kind war unehelich, nicht aus „Unsittlichkeit“ der Eltern, sondern aus Armut. Die Gesellschaft straft die Folgen der Armut zusätzlich, indem sie den Betroffenen mit Verachtung begegnet, und sie zum eigenen Gunste zusätzlich ausbeutet. Bildung, die häufig für einen Aufstieg notwendig ist, ist ein Privileg, das nur für die bereits Privilegierten zugänglich ist.",
              },
              {
                t: "Mangelnde Chancen für einen sozialen Aufstieg",
                d: "Wer Arm geboren wird, stirbt in der Regel auch so. Es gibt keinen vorgesehenen Weg nach oben. Im Gegenteil. Häufig halten höher Gestellte einen gezielt klein. Wie im Fall von Woyzeck, dessen materielle Not schamlos ausgenutzt, und dessen Beförderung und Anerkennung von der Gunst seiner Vorgesetzten abhingen.",
              },
              {
                t: "Fehlende soziale und finanzielle Absicherung",
                d: "Es gibt keinerlei Rücklage für Krankheitsfälle, Verletzung oder Alter. Wer nicht mehr arbeiten kann, aber auch wer hart arbeitet, jedoch nicht gerecht entlohnt wird, kann ungebremst in die Armut abrutschen, wie Woyzeck.",
              },
              {
                t: "Die benachteiligte Stellung der Frau",
                d: "Die Frau ist sowohl sozial als auch finanziell in jeder Hinsicht benachteiligt. Woyzecks Partnerin Marie, zum Beispiel, hatte überhaupt keinen rechtlichen Zugang zu Arbeit, ihre einzige Absicherung waren Männer. Der Versuch, die eigene Unabhängigkeit durchzusetzen, endet so nicht nur potenziell in finanzieller Not, sondern wird zusätzlich von der Gesellschaft verächtet. Im Fall von Marie hatte der Versuch, sich aus der männlichen Hierarchie der Unterdrückung, der schon Woyzeck unterlag, zu lösen, ihren Tod zur Folge.",
              },
            ].map((x, i) => (
              <Reveal key={x.t}>
                <article className="h-full border border-border bg-card p-8">
                  <span className="font-display text-sm font-bold tracking-widest text-bordeaux">
                    PROBLEM 0{i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">
                    {x.t}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{x.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 py-20 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Was wir ändern wollen</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-primary-foreground/85">
              <p>
                Wie planen wir diese Probleme anzugehen? <br/> Das sind unsere konkreten Forderungen:
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-20 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {punkte.map(({ icon: Icon, n, t, d }) => (
              <Reveal key={n}>
                <article className="group flex h-full flex-col border border-border bg-card p-8 transition hover:border-bordeaux hover:shadow-md">
                  <div className="flex items-start justify-between">
                    <span className="font-display text-5xl font-bold text-bordeaux/30 group-hover:text-bordeaux/60 transition">
                      {n}
                    </span>
                    <Icon className="h-7 w-7 text-bordeaux" />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">{t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
