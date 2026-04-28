"use client"

import { SectionWrapper } from "./section-wrapper"
import { Button } from "@/components/ui/button"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Separator } from "@/components/ui/separator"
import {
  PlusIcon,
  DownloadIcon,
  TrashIcon,
  MailIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  Loader2Icon,
} from "lucide-react"

export function ButtonsSection() {
  return (
    <SectionWrapper
      id="buttons"
      title="Buttons & Actions"
      description="All button variants, sizes, and states."
    >
      <div className="space-y-10">
        {/* Variants */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Variants</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>

        <Separator />

        {/* Sizes */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Sizes</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon"><PlusIcon /></Button>
            <Button size="icon-sm"><PlusIcon /></Button>
            <Button size="icon-xs"><PlusIcon /></Button>
            <Button size="icon-lg"><PlusIcon /></Button>
          </div>
        </div>

        <Separator />

        {/* With Icons */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">
            With Icons
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            <Button>
              <MailIcon data-icon="inline-start" /> Send Email
            </Button>
            <Button variant="outline">
              <DownloadIcon data-icon="inline-start" /> Download
            </Button>
            <Button variant="destructive">
              <TrashIcon data-icon="inline-start" /> Delete
            </Button>
            <Button variant="secondary">
              Upload <PlusIcon data-icon="inline-end" />
            </Button>
          </div>
        </div>

        <Separator />

        {/* States */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">States</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Button disabled>Disabled</Button>
            <Button variant="outline" disabled>
              Disabled Outline
            </Button>
            <Button disabled>
              <Loader2Icon className="animate-spin" /> Loading...
            </Button>
          </div>
        </div>

        <Separator />

        {/* Toggle & Toggle Group */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">
            Toggle & Toggle Group
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            <Toggle aria-label="Toggle bold">
              <BoldIcon />
            </Toggle>
            <ToggleGroup type="multiple">
              <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <BoldIcon />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <ItalicIcon />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Toggle underline">
                <UnderlineIcon />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>

        <Separator />

        {/* Custom Variants */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">
            Custom Variants (CSS classes)
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            <button className="btn-primary px-5 py-2.5 text-sm font-medium">
              btn-primary
            </button>
            <button className="btn-secondary px-5 py-2.5 text-sm font-medium">
              btn-secondary
            </button>
            <button className="btn-ghost px-5 py-2.5 text-sm font-medium">
              btn-ghost
            </button>
            <button className="btn-destructive px-5 py-2.5 text-sm font-medium">
              btn-destructive
            </button>
            <button className="pill-button">
              Pill Button
            </button>
            <button className="pill-button" data-selected="true">
              Pill (Selected)
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
