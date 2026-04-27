import { cn } from "@/lib/utils"

export function SectionWrapper({
  id,
  title,
  description,
  className,
  children,
}: {
  id: string
  title: string
  description?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className={cn("scroll-mt-16 py-12", className)}>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {description && (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      {children}
    </section>
  )
}
