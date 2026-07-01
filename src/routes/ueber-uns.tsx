import { createFileRoute } from "@tanstack/react-router"
import { PageHero } from "@/components/site/PageHero"
import { Reveal } from "@/components/site/Reveal"

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: "Über uns - PSG" },
      {
        name: "description",
        content: "Was ist die PSG und wo kommt sie her?",
      },
    ],
  }),
  component: UeberUns,
})

function UeberUns() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title="Eine Bewegung entstand aus dem Leid der Unterschicht."
        subtitle="Wir haben die Partei für Soziale Gerechtigkeit gegründet, weil wir es nicht ertragen wollten, wie Menschen wie Franz Woyzeck an ihren Verhältnissen zugrunde gehen."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-4 py-20 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Entstehungsgeschichte
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/85">
              <p>
                Am 15. Mai 1824 gründeten wir in einer kleinen hessischen Garnisonsstadt die Partei
                für Soziale Gerechtigkeit (PSG) als Reaktion auf soziale Missstände, welche
                ultimativ im Mordfall seiner Partnerin durch Franz Woyzeck zusammenliefen. Von
                diesem Zeitpunkt an haben wir nicht aufgegeben auf unsere Ziele für eine gerechtere
                Gesellschaft hinzuarbeiten.
              </p>
              <p>
                Die Tat von Woyzeck war sehr einschneidend in das Zusammenleben unseres Dorfes. Doch
                sie hat uns auch an diverse Missstände erinnert, die wir zuvor nicht wirklich
                beachtet haben. Die brutale Tat von Woyzeck war es schließlich, die uns endgültig zum
                Handeln motiviert hat.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <Reveal>
            {" "}
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Unser Verhältnis zu Woyzeck
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/85">
              <p>
                Zunächst ist es wichtig, unsere Sicht auf Woyzeck zu verstehen. Obwohl wir uns oft
                explizit auf Woyzeck beziehen, sehen wir ihn keinesfalls als Vorbild.
              </p>
              <p>
                Seine Tat ist nicht vertretbar und ein klares Beispiel eben der Verachtung, gegen
                die wir uns einsetzen. Jedoch ist es nicht weit hergeholt, zum Teil auch seine
                Umstände für die Tat verantwortlich zu machen. Unser Ziel ist es nicht, Woyzeck zu
                verherrlichen, sondern ihn als Veranschaulichung für die Missstände unserer
                Gesellschaft zu betrachten. Unser Ziel ist es, durch die Behebung jener, zukünftige
                Fälle wie den von Woyzeck zu verhindern.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-5 lg:px-8">
          <Reveal className="lg:col-span-2">
            <img
              src="https://www.dhm.de/lemo/fileadmin/medien/lemo/images/95003869.jpg?v=1410284391"
              alt="Bild von Franz Woyzeck"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full border border-border object-cover"
            />
            <p className="mt-3 text-xs italic text-muted-foreground">
              Verwunderter französischer Soldat - Wilhelm Trübner, München 1871
            </p>
          </Reveal>
          <div className="space-y-10 lg:col-span-3">
            <Reveal>
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                Was verdeutlicht Woyzeck?
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-foreground/85">
                <p>
                  Franz Woyzeck war ein einfacher Soldat. Er lebte mit seiner Partnerin Marie
                  zusammen, mit der er ein uneheliches Kind hatte. Da sein Lohn als einfacher
                  Soldat, wie für so viele andere, jedoch nicht ausreichte, um für seine Familie zu
                  sorgen, musste er zusätzlich Nebenjobs annehmen.
                </p>
                <p>
                  Woyzecks Leben war geprägt von sozialer Ungleichheit und Ausbeutung. Vorgesetzte
                  und Autoritäten behandelten ihn mit Geringschätzung und nutzen seine
                  wirtschaftliche Not aus. Seine Gesundheit spielte für die Autoritäten keine Rolle.
                  Statt Unterstützung erfuhr er Demütigung, während Armut, fehlende soziale
                  Absicherung und mangelnde gesellschaftliche Anerkennung ihn in den Abgrund zogen.
                </p>
                <p>
                  So war er z.B. gezwungen, sich bei seinem Doktor unmenschlichen Experimenten zu
                  unterziehen, wobei er sich monatelang nur von Erbsen ernähren durfte. Durch all
                  dies verschlechterte sich sein geistlicher Zustand, den er in seinem Geständnis
                  letztendlich für den Mord verantwortlich machte.
                </p>
                <p>
                  Ob man dies nun glaubt oder nicht, es ist wahrscheinlich, dass seine Tat durch
                  soziale Absicherungen, gerechte Entlohnung und einen rechtlichen Schutz vor
                  Ausbeutung und Machtmissbrauch verhindert worden wäre.
                </p>
                <p>
                  Die genannten sozialen Missstände, und viele mehr, betrafen Woyzeck, doch er ist
                  nicht der einzige. Viele andere, unter anderem wir selbst und unser Umfeld,
                  vielleicht auch Sie, sind betroffen. Für diese Menschen wollten wir uns
                  einsetzen.
                </p>
                <p>
                  Am 15. Mai 1824 gründeten wir deswegen in unserer kleinen hessischen Garnisonsstadt
                  offiziell die PSG. Von nun an sind wir auf Ihre Unterstützung angewiesen um unsere
                  Vorstellungen zum Ziel zu führen.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
