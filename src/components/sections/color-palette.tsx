"use client"

import { SectionWrapper } from "./section-wrapper"

const TOKEN_GROUPS = [
  {
    label: "Core",
    tokens: [
      { name: "background", var: "var(--background)" },
      { name: "foreground", var: "var(--foreground)" },
    ],
  },
  {
    label: "Brand",
    tokens: [
      { name: "primary", var: "var(--primary)" },
      { name: "primary-foreground", var: "var(--primary-foreground)" },
      { name: "secondary", var: "var(--secondary)" },
      { name: "secondary-foreground", var: "var(--secondary-foreground)" },
      { name: "brand", var: "var(--brand)" },
      { name: "brand-foreground", var: "var(--brand-foreground)" },
      { name: "title-blue", var: "var(--title-blue)" },
      { name: "dark-blue", var: "var(--dark-blue)" },
    ],
  },
  {
    label: "Semantic",
    tokens: [
      { name: "muted", var: "var(--muted)" },
      { name: "muted-foreground", var: "var(--muted-foreground)" },
      { name: "accent", var: "var(--accent)" },
      { name: "accent-foreground", var: "var(--accent-foreground)" },
      { name: "destructive", var: "var(--destructive)" },
    ],
  },
  {
    label: "UI",
    tokens: [
      { name: "card", var: "var(--card)" },
      { name: "card-foreground", var: "var(--card-foreground)" },
      { name: "popover", var: "var(--popover)" },
      { name: "popover-foreground", var: "var(--popover-foreground)" },
      { name: "border", var: "var(--border)" },
      { name: "input", var: "var(--input)" },
      { name: "ring", var: "var(--ring)" },
    ],
  },
  {
    label: "Glass",
    tokens: [
      { name: "glass-highlight", var: "var(--glass-highlight)" },
      { name: "glass-surface", var: "var(--glass-surface)" },
      { name: "glass-tint", var: "var(--glass-tint)" },
      { name: "glass-border", var: "var(--glass-border)" },
    ],
  },
  {
    label: "Shadows",
    tokens: [
      { name: "shadow-soft", var: "var(--shadow-soft)" },
      { name: "shadow-hover", var: "var(--shadow-hover)" },
      { name: "surface-shadow", var: "var(--surface-shadow)" },
    ],
  },
  {
    label: "Charts",
    tokens: [
      { name: "chart-1", var: "var(--chart-1)" },
      { name: "chart-2", var: "var(--chart-2)" },
      { name: "chart-3", var: "var(--chart-3)" },
      { name: "chart-4", var: "var(--chart-4)" },
      { name: "chart-5", var: "var(--chart-5)" },
    ],
  },
  {
    label: "Sidebar",
    tokens: [
      { name: "sidebar", var: "var(--sidebar)" },
      { name: "sidebar-foreground", var: "var(--sidebar-foreground)" },
      { name: "sidebar-primary", var: "var(--sidebar-primary)" },
      { name: "sidebar-accent", var: "var(--sidebar-accent)" },
      { name: "sidebar-border", var: "var(--sidebar-border)" },
    ],
  },
]

export function ColorPaletteSection() {
  return (
    <SectionWrapper
      id="colors"
      title="Color Palette"
      description="All semantic design tokens from globals.css — quecargan palette. Swap values and everything updates."
    >
      <div className="space-y-8">
        {TOKEN_GROUPS.map((group) => (
          <div key={group.label}>
            <h3 className="mb-3 text-sm font-medium text-muted-foreground">
              {group.label}
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {group.tokens.map((token) => (
                <div key={token.name} className="space-y-1.5">
                  <div
                    className="h-16 w-full rounded-lg ring-1 ring-foreground/10"
                    style={{ backgroundColor: token.var }}
                  />
                  <p className="truncate font-mono text-xs text-muted-foreground">
                    {token.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
