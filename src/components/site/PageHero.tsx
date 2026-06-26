import type { ReactNode } from "react"

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  children?: ReactNode
}) {
  return (
    <section className="border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-28">
        {eyebrow && (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-bordeaux">
            <span className="text-primary-foreground/60">{">"} </span>
            <span style={{ color: "oklch(0.7 0.15 25)" }}>{eyebrow}</span>
          </p>
        )}
        <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.05] md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}
