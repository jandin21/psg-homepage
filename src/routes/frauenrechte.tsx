import { createFileRoute } from "@tanstack/react-router"
import { PageHero } from "@/components/site/PageHero"
import { Reveal } from "@/components/site/Reveal"

export const Route = createFileRoute("/frauenrechte")({
  head: () => ({
    meta: [
      { title: "Frauenrechte - PSG" },
      {
        name: "description",
        content: "Unsere Position zu Frauenrechten",
      },
    ],
  }),
  component: Frauenrechte,
})

const themen = [
  {
    t: "Verbesserung der politischen Stellung von Frauen",
    d: "Ohne eigenes Gehalt ist keine Freiheit möglich. Deshalb fordern wir, dass Frauen legal arbeiten, und eigenes Einkommen verdienen dürfen. Ebenso soll ihnen eigenes Eigentum und eine eigene Stimme in der Politik gestattet werden. Besonders setzen wir uns dafür ein, dass Frauen auch das Recht bekommen vor Gericht zu sprechen, um sich gegen Unterdrückung und Verachtung, zu verteidigen, genauso wie wir es auch für Männer vorgesehen haben.",
  },
  {
    t: "Gesellschaftliche Gelichstellung von Frau und Mann",
    d: "Die Gesellschaft drängt Frauen in Abhängigkeit und verurteilt sie dann dafür. Wir fordern, dass alleinerziehende Mütter vom Staat unterstützt werden und nicht verurteilt. Frauen haben das Recht auf freie Partnerwahl, wie es Männern offensteht, und das Recht, ein selbstbestimmtes Leben zu führen.",
  },
  {
    t: "Gleiche Maßstäbe für Frau und Mann",
    d: "Wir fordern gleiche moralische Maßstäbe für Frauen und Männer. Die Gesellschaft verlangt von Frauen Treue und Tugend, oft ohne denselben Maßstab auch an Männer anzulegen. Wie Marie also verurteil und geächtet wurde, so sollte es auch dem Tambourmajor widerfahren sein, oder andersherum. Deshalb setzen wir und dafür ein, dass die gesellschaftliche und gesetzliche Wertung von Untreue, unehelichen Verhältnissen, etc. für Männer und Frauen gleich ausfällt....",
  },
]

function Frauenrechte() {
  return (
    <>
      <PageHero
        eyebrow="Frauenrechte"
        title="Marie war kein Einzelfall"
        subtitle="
        Es ist unschwer zu erkennen, dass Frauen in unsere heutige Gesellschaftsordnung benachteiligt sind.
        Wir beziehen uns zu einem Großteil auf Missstände, die beide Geschlechter in etwa gleich betreffen, doch die Frau ist zusätzlich benachteiligt.
        Auch diesem Thema wollen wir uns mit höchster Dringlichkeit annhemen, weshalb wir ihm eine eigene Seite widmen.
        "
      />

      <section className="bg-secondary">
        <div className="mx-auto max-w-4xl px-4 py-20 lg:px-8">
          <Reveal>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
              Der Fall Marie
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/85">
              <p>
                Marie ist jung alleinerziehend mit einem unehrlichen Kind und hat kein eigenes Geld.
                Sie ist vollständig von Woyzeck abhängig, der selbst kaum über die Runden kommt und
                sie emotional komplett vernachlässigt. Das ist kein Einzelschicksal. Frauen in
                unserer Zeit haben schlicht keine andere Wahl. Sie haben kein Recht auf eigenes
                Eigentum, kein Recht auf Arbeit, keine Absicherung ohne einen Mann. Wer keinen Mann
                hat ist schutzlos.
              </p>
              <p>
                Als der Tambourmajor auftaucht, bringt er ihr etwas mit, das sie noch nie hatte:
                Aufmerksamkeit, ein Paar Ohrringe, das Gefühl, gesehen zu werden. Was zunächst nach
                Verführung klingt, war aber für Marie ein Ausweg. Vielleicht der einzige, den sie je
                haben wird.
              </p>
              <p>
                Danach wird sie von allen verurteilen; Woyzeck, der Hauptmann, die Nachbarinnen.
                Aber niemand stellt die eigentliche Frage: Was hat die Gesellschaft aus Marie
                gemacht, bevor der Tambourmajor überhaupt aufgetaucht ist?
              </p>
              <p>
                Sie wurde nicht schwach geboren. Sie wurde in Schwäche gezwungen und für ihren
                Ausbruchsversuch bestraft. Selbst über ihren Tod durfte sie nicht wählen. Im Veruch,
                Marie und allen anderen Frauen gerecht zu werden, stellen wir deswegen folgende
                Forderungen:
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-4 py-20 lg:px-8">
          <div className="space-y-6">
            {themen.map((x) => (
              <Reveal key={x.t}>
                <article className="border border-border bg-card p-8 transition hover:border-bordeaux">
                  <h3 className="font-display text-2xl font-semibold text-foreground">{x.t}</h3>
                  <p className="mt-3 text-base leading-relaxed text-foreground/80">{x.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
