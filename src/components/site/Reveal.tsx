import type { ReactNode } from "react"
import { useReveal } from "@/hooks/use-reveal"
import { cn } from "@/lib/utils"

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={cn("fade-up", className)}>
      {children}
    </div>
  )
}
