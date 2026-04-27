"use client"

import { SectionWrapper } from "./section-wrapper"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Kbd } from "@/components/ui/kbd"

export function MiscSection() {
  return (
    <SectionWrapper
      id="misc"
      title="Miscellaneous"
      description="Badges, avatars, separators, skeletons, progress, accordion, spacing, and keyboard shortcuts."
    >
      <div className="space-y-10">
        {/* Badges */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">
            Badges
          </h3>
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="ghost">Ghost</Badge>
          </div>
        </div>

        <Separator />

        {/* Avatars */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">
            Avatars
          </h3>
          <div className="flex items-center gap-4">
            <Avatar className="size-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <Avatar className="size-10">
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <Avatar className="size-12">
              <AvatarFallback>CD</AvatarFallback>
            </Avatar>
            <Avatar className="size-14">
              <AvatarFallback>EF</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <Separator />

        {/* Skeleton */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">
            Skeleton Loaders
          </h3>
          <div className="flex items-center gap-4">
            <Skeleton className="size-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </div>

        <Separator />

        {/* Progress */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">
            Progress
          </h3>
          <div className="max-w-md space-y-6">
            <Progress value={25}>
              <ProgressLabel>Uploading</ProgressLabel>
              <ProgressValue />
            </Progress>
            <Progress value={60}>
              <ProgressLabel>Processing</ProgressLabel>
              <ProgressValue />
            </Progress>
            <Progress value={90}>
              <ProgressLabel>Almost done</ProgressLabel>
              <ProgressValue />
            </Progress>
          </div>
        </div>

        <Separator />

        {/* Accordion */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">
            Accordion
          </h3>
          <Accordion className="max-w-lg">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is a design system?</AccordionTrigger>
              <AccordionContent>
                A design system is a collection of reusable components and clear
                standards that can be assembled together to build any number of
                applications.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Why use design tokens?</AccordionTrigger>
              <AccordionContent>
                Design tokens are the visual design atoms — colors, typography,
                spacing. They ensure consistency and make theming easy.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How do I customize colors?</AccordionTrigger>
              <AccordionContent>
                Edit the CSS variables in globals.css. All components reference
                these tokens, so changes propagate instantly.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <Separator />

        {/* Keyboard Shortcuts */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">
            Keyboard Shortcuts
          </h3>
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <span>
              Save: <Kbd>⌘</Kbd> + <Kbd>S</Kbd>
            </span>
            <span>
              Search: <Kbd>⌘</Kbd> + <Kbd>K</Kbd>
            </span>
            <span>
              Undo: <Kbd>⌘</Kbd> + <Kbd>Z</Kbd>
            </span>
            <span>
              Toggle sidebar: <Kbd>⌘</Kbd> + <Kbd>B</Kbd>
            </span>
          </div>
        </div>

        <Separator />

        {/* Spacing Scale */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">
            Spacing Scale
          </h3>
          <div className="space-y-2">
            {[
              { px: 4, tw: "1" },
              { px: 8, tw: "2" },
              { px: 12, tw: "3" },
              { px: 16, tw: "4" },
              { px: 24, tw: "6" },
              { px: 32, tw: "8" },
              { px: 48, tw: "12" },
              { px: 64, tw: "16" },
            ].map(({ px, tw }) => (
              <div key={px} className="flex items-center gap-4">
                <span className="w-12 text-right font-mono text-xs text-muted-foreground">
                  {px}px
                </span>
                <div
                  className="h-4 rounded bg-primary"
                  style={{ width: `${px * 2}px` }}
                />
                <span className="font-mono text-xs text-muted-foreground">
                  spacing-{tw}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Separators */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">
            Separators
          </h3>
          <div className="max-w-sm space-y-4">
            <div>
              <p className="text-sm">Content above</p>
              <Separator className="my-4" />
              <p className="text-sm">Content below</p>
            </div>
            <div className="flex h-5 items-center gap-4 text-sm">
              <span>Blog</span>
              <Separator orientation="vertical" />
              <span>Docs</span>
              <Separator orientation="vertical" />
              <span>Source</span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
