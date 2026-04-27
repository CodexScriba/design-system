"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { PanelLeftIcon } from "lucide-react"

const NAV_SECTIONS = [
  { id: "colors", label: "Colors" },
  { id: "typography", label: "Type" },
  { id: "buttons", label: "Buttons" },
  { id: "forms", label: "Forms" },
  { id: "cards", label: "Cards" },
  { id: "icons", label: "Icons" },
  { id: "alerts", label: "Alerts" },
  { id: "tables", label: "Tables" },
  { id: "lists", label: "Lists" },
  { id: "charts", label: "Charts" },
  { id: "navigation", label: "Nav" },
  { id: "overlays", label: "Overlays" },
  { id: "misc", label: "Misc" },
]

export function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-12 max-w-7xl items-center gap-4 px-4 sm:px-6">
        {/* Logo / Title */}
        <Link href="/" className="flex shrink-0 items-center gap-2 text-sm font-semibold">
          Design System
        </Link>

        {/* Section Links (only on home) */}
        {isHome && (
          <nav className="no-scrollbar flex flex-1 items-center gap-1 overflow-x-auto px-2">
            {NAV_SECTIONS.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="shrink-0 rounded-md px-2 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {section.label}
              </a>
            ))}
          </nav>
        )}

        {/* Spacer when not on home */}
        {!isHome && <div className="flex-1" />}

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Link
            href="/sidebar"
            className={cn(
              "flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground",
              pathname === "/sidebar" && "text-foreground"
            )}
          >
            <PanelLeftIcon className="size-3.5" />
            Sidebar
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
