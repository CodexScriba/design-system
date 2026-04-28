"use client"

import { Navbar } from "@/components/navbar"
import { Toaster } from "@/components/ui/sonner"
import { ColorPaletteSection } from "@/components/sections/color-palette"
import { TypographySection } from "@/components/sections/typography"
import { ButtonsSection } from "@/components/sections/buttons"
import { FormControlsSection } from "@/components/sections/form-controls"
import { CardsSection } from "@/components/sections/cards"
import { IconsSection } from "@/components/sections/icons"
import { AlertsSection } from "@/components/sections/alerts"
import { TablesSection } from "@/components/sections/tables"
import { ListsSection } from "@/components/sections/lists"
import { ChartsSection } from "@/components/sections/charts"
import { NavigationSection } from "@/components/sections/navigation"
import { OverlaysSection } from "@/components/sections/overlays"
import { MiscSection } from "@/components/sections/misc"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 pb-24 sm:px-6">
        <div className="py-12">
          <h1 className="title-page">
            Design System — quecargan
          </h1>
          <p className="mt-2 max-w-2xl text-lg text-muted-foreground">
            The quecargan palette applied to every shadcn/ui component. Swap the
            tokens in <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">globals.css</code> and
            watch everything update instantly.
          </p>
        </div>

        <Separator />

        <ColorPaletteSection />
        <Separator />
        <TypographySection />
        <Separator />
        <ButtonsSection />
        <Separator />
        <FormControlsSection />
        <Separator />
        <CardsSection />
        <Separator />
        <IconsSection />
        <Separator />
        <AlertsSection />
        <Separator />
        <TablesSection />
        <Separator />
        <ListsSection />
        <Separator />
        <ChartsSection />
        <Separator />
        <NavigationSection />
        <Separator />
        <OverlaysSection />
        <Separator />
        <MiscSection />
      </main>
      <Toaster />
    </>
  )
}
