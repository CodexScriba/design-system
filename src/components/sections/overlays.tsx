"use client"

import { SectionWrapper } from "./section-wrapper"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  UserIcon,
  SettingsIcon,
  LogOutIcon,
  ChevronDownIcon,
} from "lucide-react"

export function OverlaysSection() {
  return (
    <SectionWrapper
      id="overlays"
      title="Overlays"
      description="Sheets, popovers, tooltips, hover cards, and dropdown menus."
    >
      <div className="space-y-10">
        {/* Sheet */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Sheet</h3>
          <div className="flex flex-wrap gap-3">
            <Sheet>
              <SheetTrigger render={<Button variant="outline" />}>
                Open Right Sheet
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Sheet Title</SheetTitle>
                  <SheetDescription>
                    This is a sheet panel that slides in from the right.
                  </SheetDescription>
                </SheetHeader>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Sheet content goes here. You can put forms, filters, or
                    detail views.
                  </p>
                </div>
              </SheetContent>
            </Sheet>
            <Sheet>
              <SheetTrigger render={<Button variant="outline" />}>
                Open Bottom Sheet
              </SheetTrigger>
              <SheetContent side="bottom">
                <SheetHeader>
                  <SheetTitle>Bottom Sheet</SheetTitle>
                  <SheetDescription>
                    Slides up from the bottom.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <Separator />

        {/* Popovers & Tooltips */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">
            Popover, Tooltip & Hover Card
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            <Popover>
              <PopoverTrigger render={<Button variant="outline" />}>
                Popover
              </PopoverTrigger>
              <PopoverContent>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Popover Content</p>
                  <p className="text-sm text-muted-foreground">
                    Place forms, filters, or any content inside a popover.
                  </p>
                </div>
              </PopoverContent>
            </Popover>

            <Tooltip>
              <TooltipTrigger render={<Button variant="outline" />}>
                Hover for Tooltip
              </TooltipTrigger>
              <TooltipContent>
                <p>This is a tooltip</p>
              </TooltipContent>
            </Tooltip>

            <HoverCard>
              <HoverCardTrigger render={<Button variant="link" />}>
                Hover Card
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="space-y-2">
                  <p className="text-sm font-medium">@designsystem</p>
                  <p className="text-sm text-muted-foreground">
                    A comprehensive collection of UI components and design
                    tokens for building consistent interfaces.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>

        <Separator />

        {/* Dropdown Menu */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">
            Dropdown Menu
          </h3>
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" />}>
              My Account <ChevronDownIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <UserIcon /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SettingsIcon /> Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOutIcon /> Log out
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </SectionWrapper>
  )
}
