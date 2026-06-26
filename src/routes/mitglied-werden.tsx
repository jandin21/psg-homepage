import { createFileRoute } from "@tanstack/react-router"
import { PageHero } from "@/components/site/PageHero"
import { Reveal } from "@/components/site/Reveal"
import { useState } from "react"
import { Send } from "lucide-react"

export const Route = createFileRoute("/mitglied-werden")({
  head: () => ({
    meta: [
      { title: "Mitglied werden - PSG" },
      {
        name: "description",
        content: "Formular zum Mitgliedsantrag bei der Partei für Soziale Gerechtigkeit",
      },
    ],
  }),
  component: MitgliedWerden,
})

function MitgliedWerden() {
  const [sent, setSent] = useState(false)

  return (
    <>
      <PageHero
        eyebrow="Mitglied werden"
        title="Werden Sie Teil der Partei für Soziale Gerechtigkeit"
        subtitle=""
      />

      <section className="bg-background">
        <div className="mx-auto max-w-4xl py-20">
          <Reveal>
            <form
              className="space-y-5 border border-border bg-card p-8"
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
            >
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Formular für den Mitgliedschaftsantrag
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Vorname *
                  </label>
                  <input
                    name="firstName"
                    required
                    className="w-full border border-input bg-background px-4 py-3 text-sm focus:border-bordeaux focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Nachname *
                  </label>
                  <input
                    name="lastName"
                    required
                    className="w-full border border-input bg-background px-4 py-3 text-sm focus:border-bordeaux focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    E-Mail-Adresse *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full border border-input bg-background px-4 py-3 text-sm focus:border-bordeaux focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Telefon</label>
                  <input
                    name="phone"
                    className="w-full border border-input bg-background px-4 py-3 text-sm focus:border-bordeaux focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Beruf</label>
                  <input
                    name="job"
                    className="w-full border border-input bg-background px-4 py-3 text-sm focus:border-bordeaux focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Wohnort</label>
                  <input
                    name="city"
                    className="w-full border border-input bg-background px-4 py-3 text-sm focus:border-bordeaux focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Warum möchten Sie Mitglied werden?
                </label>
                <textarea
                  rows={4}
                  className="w-full border border-input bg-background px-4 py-3 text-sm focus:border-bordeaux focus:outline-none"
                />
              </div>
              <button className="inline-flex items-center gap-2 bg-bordeaux px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
                <Send className="h-4 w-4" /> Beitritt anfragen
              </button>
              {sent && (
                <p className="text-sm text-bordeaux">
                  Vielen Dank für ihre Anfrage! Wir werden uns in Kürze bei ihnen melden.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
