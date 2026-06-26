import { Link } from "@tanstack/react-router"
import { Logo } from "./Logo"

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <Logo light />
          <p className="text-sm leading-relaxed opacity-80">
            Dies ist eine fiktive Partei aus der Welt des Dramenfragments "Woyzeck" von Georg
            Büchner, entstanden im Rahmen eines Schulprojekts.
            <br />
            Es handelt sich nicht um eine echte Partei, nicht wundern!
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider opacity-70">Partei</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/ueber-uns" className="opacity-90 hover:opacity-100 hover:underline">
                Über uns
              </Link>
            </li>
            <li>
              <Link to="/programm" className="opacity-90 hover:opacity-100 hover:underline">
                Parteiprogramm
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider opacity-70">Themen</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/frauenrechte" className="opacity-90 hover:opacity-100 hover:underline">
                Frauenrechte
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider opacity-70">
            Mitmachen
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/kontakt" className="opacity-90 hover:opacity-100 hover:underline">
                Kontakt
              </Link>
            </li>
            <li>
              <Link to="/kontakt" className="opacity-90 hover:opacity-100 hover:underline">
                Mitglied werden
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
