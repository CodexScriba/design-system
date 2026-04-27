"use client"

import { SectionWrapper } from "./section-wrapper"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function FormControlsSection() {
  return (
    <SectionWrapper
      id="forms"
      title="Form Controls"
      description="Inputs, selects, checkboxes, radios, switches, sliders, and textareas."
    >
      <div className="max-w-2xl space-y-10">
        {/* Text Inputs */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">
            Text Inputs
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="input-default">Default Input</Label>
              <Input id="input-default" placeholder="Type something..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="input-disabled">Disabled Input</Label>
              <Input
                id="input-disabled"
                placeholder="Disabled"
                disabled
              />
            </div>
          </div>
        </div>

        <Separator />

        {/* Textarea */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">
            Textarea
          </h3>
          <div className="space-y-2">
            <Label htmlFor="textarea-default">Message</Label>
            <Textarea
              id="textarea-default"
              placeholder="Write your message here..."
            />
          </div>
        </div>

        <Separator />

        {/* Select */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Select</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>Default Select</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option-1">Option 1</SelectItem>
                  <SelectItem value="option-2">Option 2</SelectItem>
                  <SelectItem value="option-3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <Separator />

        {/* Checkboxes & Radios */}
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground">
              Checkboxes
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Checkbox id="check-1" defaultChecked />
                <Label htmlFor="check-1">Checked</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="check-2" />
                <Label htmlFor="check-2">Unchecked</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="check-3" disabled />
                <Label htmlFor="check-3" className="text-muted-foreground">
                  Disabled
                </Label>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground">
              Radio Group
            </h3>
            <RadioGroup defaultValue="option-1">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="option-1" id="radio-1" />
                <Label htmlFor="radio-1">Option A</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="option-2" id="radio-2" />
                <Label htmlFor="radio-2">Option B</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="option-3" id="radio-3" />
                <Label htmlFor="radio-3">Option C</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <Separator />

        {/* Switch */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Switch</h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Switch id="switch-1" defaultChecked />
              <Label htmlFor="switch-1">Notifications enabled</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch id="switch-2" />
              <Label htmlFor="switch-2">Marketing emails</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch id="switch-3" disabled />
              <Label htmlFor="switch-3" className="text-muted-foreground">
                Disabled switch
              </Label>
            </div>
          </div>
        </div>

        <Separator />

        {/* Slider */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Slider</h3>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Volume</Label>
              <Slider defaultValue={[50]} max={100} step={1} />
            </div>
            <div className="space-y-2">
              <Label>Range</Label>
              <Slider defaultValue={[25, 75]} max={100} step={1} />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
