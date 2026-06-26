import { createFileRoute } from "@tanstack/react-router"
import { PageHero } from "@/components/site/PageHero"

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt - PSG" },
      { name: "description", content: "Nehmen sie Kontak zu uns auf" },
    ],
  }),
  component: Kontakt,
})

function Kontakt() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Sprechen sie mit uns"
        subtitle="Wir freuen uns auf ihre Fragen. Unter den folgenden Addressen sind wir (nicht wirklich) zu erreichen:"
      >
        <div className="mt-10 grid max-w-xl gap-4 text-primary-foreground/90">
          <div>
            <p className="text-sm font-semibold text-primary-foreground/70">Parteisitz</p>
            <p>Am Marktplatz 3, 12345 Garnisonsstadt</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-primary-foreground/70">E-Mail</p>
            <p>kontakt@partei-soziale-gerechtigkeit.de</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-primary-foreground/70">Telefon</p>
            <p>+49 000 0000000</p>
          </div>
        </div>
      </PageHero>
    </>
  )
}
