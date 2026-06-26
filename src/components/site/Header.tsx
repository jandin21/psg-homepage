import { Link } from "@tanstack/react-router"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Logo } from "./Logo"

const nav = [
  { to: "/", label: "Startseite" },
  { to: "/ueber-uns", label: "Über uns" },
  { to: "/programm", label: "Parteiprogramm" },
  { to: "/frauenrechte", label: "Frauenrechte" },
  { to: "/kontakt", label: "Kontakt" },
] as const

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-foreground data-[status=active]:text-bordeaux data-[status=active]:bg-secondary"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/mitglied-werden"
            className="ml-2 inline-flex items-center rounded-sm bg-bordeaux px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
          >
            Mitglied werden
          </Link>
        </nav>
        <button
          className="lg:hidden rounded-md border border-border p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground/80 data-[status=active]:text-bordeaux"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
