export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-10 w-10">
        <div className="absolute inset-0 rounded-sm bg-bordeaux" />
        <div className="absolute inset-0 flex items-center justify-center font-display text-lg font-bold text-primary-foreground">
          PSG
        </div>
      </div>
      <div
        className={`flex flex-col leading-tight ${light ? "text-primary-foreground" : "text-foreground"}`}
      >
        <span className="text-g opacity-80">Partei für Soziale Gerechtigkeit</span>
      </div>
    </div>
  )
}
