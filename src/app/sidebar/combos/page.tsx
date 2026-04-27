"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  ZapIcon,
  ShieldIcon,
  HeartIcon,
  StarIcon,
  RocketIcon,
  TargetIcon,
  TrophyIcon,
  SparklesIcon,
  FlameIcon,
  CrownIcon,
  GemIcon,
  SunIcon,
  MoonIcon,
  CloudIcon,
  DropletIcon,
  LeafIcon,
  MountainIcon,
  WavesIcon,
  BoltIcon,
  CircleCheckIcon,
  CircleXIcon,
  CircleAlertIcon,
  InfoIcon,
  UsersIcon,
  MailIcon,
  BellIcon,
  SettingsIcon,
  HomeIcon,
  CalendarIcon,
  FolderIcon,
  FileTextIcon,
  LinkIcon,
} from "lucide-react"

const ICON_BG_COMBOS = [
  { label: "primary / primary-fg", bg: "bg-primary", text: "text-primary-foreground", icon: ZapIcon },
  { label: "secondary / secondary-fg", bg: "bg-secondary", text: "text-secondary-foreground", icon: ShieldIcon },
  { label: "muted / muted-fg", bg: "bg-muted", text: "text-muted-foreground", icon: SettingsIcon },
  { label: "accent / accent-fg", bg: "bg-accent", text: "text-accent-foreground", icon: StarIcon },
  { label: "destructive/10 / destructive", bg: "bg-destructive/10", text: "text-destructive", icon: FlameIcon },
  { label: "primary/10 / primary", bg: "bg-primary/10", text: "text-primary", icon: HeartIcon },
  { label: "primary/20 / primary", bg: "bg-primary/20", text: "text-primary", icon: RocketIcon },
  { label: "secondary / foreground", bg: "bg-secondary", text: "text-foreground", icon: TargetIcon },
  { label: "card / foreground", bg: "bg-card", text: "text-card-foreground", icon: HomeIcon },
  { label: "muted / foreground", bg: "bg-muted", text: "text-foreground", icon: TrophyIcon },
  { label: "destructive/20 / destructive", bg: "bg-destructive/20", text: "text-destructive", icon: CircleXIcon },
  { label: "foreground / background", bg: "bg-foreground", text: "text-background", icon: CrownIcon },
]

const SHAPE_COMBOS = [
  { shape: "rounded-lg", label: "Rounded Lg" },
  { shape: "rounded-full", label: "Circle" },
  { shape: "rounded-md", label: "Rounded Md" },
  { shape: "rounded-sm", label: "Rounded Sm" },
]

const SIZE_COMBOS = [
  { size: "size-7", iconSize: "size-3.5", label: "28px" },
  { size: "size-8", iconSize: "size-4", label: "32px" },
  { size: "size-9", iconSize: "size-4", label: "36px" },
  { size: "size-10", iconSize: "size-5", label: "40px" },
  { size: "size-12", iconSize: "size-5", label: "48px" },
  { size: "size-14", iconSize: "size-6", label: "56px" },
]

const BADGE_ON_ICON_COMBOS = [
  { bg: "bg-primary", text: "text-primary-foreground", badge: "default", icon: ZapIcon },
  { bg: "bg-secondary", text: "text-secondary-foreground", badge: "secondary", icon: StarIcon },
  { bg: "bg-muted", text: "text-muted-foreground", badge: "outline", icon: BellIcon },
  { bg: "bg-destructive/10", text: "text-destructive", badge: "destructive", icon: CircleAlertIcon },
]

const STATUS_COMBOS = [
  { label: "Active", icon: CircleCheckIcon, bg: "bg-primary/10", text: "text-primary", badgeVariant: "default" as const },
  { label: "Warning", icon: CircleAlertIcon, bg: "bg-destructive/10", text: "text-destructive", badgeVariant: "destructive" as const },
  { label: "Info", icon: InfoIcon, bg: "bg-secondary", text: "text-secondary-foreground", badgeVariant: "secondary" as const },
  { label: "Inactive", icon: CircleXIcon, bg: "bg-muted", text: "text-muted-foreground", badgeVariant: "outline" as const },
]

const FEATURE_CARDS = [
  {
    title: "Lightning Fast",
    description: "Optimized for speed with edge computing",
    icon: ZapIcon,
    iconBg: "bg-primary/10 text-primary",
  },
  {
    title: "Secure by Default",
    description: "Enterprise-grade security built in",
    icon: ShieldIcon,
    iconBg: "bg-secondary text-secondary-foreground",
  },
  {
    title: "Global Scale",
    description: "Deploy anywhere with auto-scaling",
    icon: GemIcon,
    iconBg: "bg-accent text-accent-foreground",
  },
  {
    title: "Smart Analytics",
    description: "Real-time insights and dashboards",
    icon: SparklesIcon,
    iconBg: "bg-muted text-foreground",
  },
  {
    title: "Team Collaboration",
    description: "Built for teams of any size",
    icon: UsersIcon,
    iconBg: "bg-primary/20 text-primary",
  },
  {
    title: "Always Available",
    description: "99.99% uptime guarantee",
    icon: RocketIcon,
    iconBg: "bg-destructive/10 text-destructive",
  },
]

export default function CombosPage() {
  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Color &amp; Icon Combinations
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          See how icons, backgrounds, badges, and text colors interact with each
          other across your design tokens.
        </p>
      </div>

      {/* ─── Icon + Background Grid ─── */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Icon + Background Combos</h2>
          <p className="text-sm text-muted-foreground">
            Every combination of icon foreground with background token.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {ICON_BG_COMBOS.map((combo) => (
            <div
              key={combo.label}
              className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center"
            >
              <div
                className={`flex size-12 items-center justify-center rounded-xl ${combo.bg} ${combo.text}`}
              >
                <combo.icon className="size-5" />
              </div>
              <p className="text-[10px] leading-tight text-muted-foreground">
                {combo.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* ─── Shape Variations ─── */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Shape Variations</h2>
          <p className="text-sm text-muted-foreground">
            Same icon+bg combo with different border radii.
          </p>
        </div>
        <div className="flex flex-wrap items-end gap-6">
          {SHAPE_COMBOS.map((shape) => (
            <div key={shape.label} className="flex flex-col items-center gap-2">
              <div
                className={`flex size-12 items-center justify-center bg-primary text-primary-foreground ${shape.shape}`}
              >
                <ZapIcon className="size-5" />
              </div>
              <span className="text-xs text-muted-foreground">
                {shape.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* ─── Size Scale ─── */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Size Scale</h2>
          <p className="text-sm text-muted-foreground">
            Icon containers from small to large.
          </p>
        </div>
        <div className="flex flex-wrap items-end gap-4">
          {SIZE_COMBOS.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2">
              <div
                className={`flex items-center justify-center rounded-lg bg-primary/10 text-primary ${s.size}`}
              >
                <StarIcon className={s.iconSize} />
              </div>
              <span className="font-mono text-[10px] text-muted-foreground">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* ─── Status Indicators ─── */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Status Indicators</h2>
          <p className="text-sm text-muted-foreground">
            Icon + background + badge combinations for status states.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {STATUS_COMBOS.map((status) => (
            <div
              key={status.label}
              className="flex items-center gap-3 rounded-lg border p-3"
            >
              <div
                className={`flex size-9 items-center justify-center rounded-full ${status.bg} ${status.text}`}
              >
                <status.icon className="size-4" />
              </div>
              <div>
                <p className="text-sm font-medium">{status.label}</p>
                <Badge variant={status.badgeVariant} className="mt-1">
                  {status.label}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* ─── Feature Cards with Icon Combos ─── */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Feature Cards</h2>
          <p className="text-sm text-muted-foreground">
            How icon+background combos look inside real card layouts.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURE_CARDS.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <div
                  className={`mb-2 flex size-10 items-center justify-center rounded-lg ${feature.iconBg}`}
                >
                  <feature.icon className="size-5" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="h-auto p-0 text-sm">
                  Learn more →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* ─── Nav-style Icon List ─── */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Nav-Style Icon List</h2>
          <p className="text-sm text-muted-foreground">
            Icon containers used in navigation or list contexts.
          </p>
        </div>
        <div className="max-w-md space-y-1">
          {[
            { icon: HomeIcon, label: "Home", bg: "bg-primary/10 text-primary", active: true },
            { icon: FolderIcon, label: "Projects", bg: "bg-secondary text-secondary-foreground", active: false },
            { icon: CalendarIcon, label: "Calendar", bg: "bg-accent text-accent-foreground", active: false },
            { icon: MailIcon, label: "Messages", bg: "bg-muted text-muted-foreground", active: false, badge: "12" },
            { icon: FileTextIcon, label: "Documents", bg: "bg-primary/20 text-primary", active: false },
            { icon: LinkIcon, label: "Integrations", bg: "bg-destructive/10 text-destructive", active: false },
          ].map((item) => (
            <button
              key={item.label}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
                item.active
                  ? "bg-muted font-medium"
                  : "hover:bg-muted/50"
              }`}
            >
              <div
                className={`flex size-8 items-center justify-center rounded-lg ${item.bg}`}
              >
                <item.icon className="size-4" />
              </div>
              <span className="flex-1 text-sm">{item.label}</span>
              {item.badge && (
                <Badge variant="secondary">{item.badge}</Badge>
              )}
            </button>
          ))}
        </div>
      </section>

      <Separator />

      {/* ─── Inline Icon + Text Combos ─── */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Inline Icon + Text Colors</h2>
          <p className="text-sm text-muted-foreground">
            How icons look alongside text in different color contexts.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { label: "foreground", className: "text-foreground" },
            { label: "muted-foreground", className: "text-muted-foreground" },
            { label: "primary", className: "text-primary" },
            { label: "destructive", className: "text-destructive" },
            { label: "primary (on primary/10 bg)", className: "text-primary bg-primary/10 rounded-lg p-3" },
            { label: "destructive (on destructive/10 bg)", className: "text-destructive bg-destructive/10 rounded-lg p-3" },
          ].map((variant) => (
            <div
              key={variant.label}
              className={`flex items-center gap-3 ${variant.className}`}
            >
              <StarIcon className="size-5 shrink-0" />
              <span className="text-sm font-medium">
                {variant.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* ─── Full Combo Matrix ─── */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Background × Icon Color Matrix</h2>
          <p className="text-sm text-muted-foreground">
            Every background paired with every icon color to test contrast.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="text-xs">
            <thead>
              <tr>
                <th className="p-2 text-left text-muted-foreground">bg ↓ / icon →</th>
                {["foreground", "primary", "muted-fg", "destructive", "background"].map((c) => (
                  <th key={c} className="p-2 text-center text-muted-foreground">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { label: "primary", bg: "bg-primary" },
                { label: "secondary", bg: "bg-secondary" },
                { label: "muted", bg: "bg-muted" },
                { label: "accent", bg: "bg-accent" },
                { label: "card", bg: "bg-card" },
                { label: "destructive/10", bg: "bg-destructive/10" },
                { label: "foreground", bg: "bg-foreground" },
              ].map((row) => (
                <tr key={row.label}>
                  <td className="p-2 font-mono text-muted-foreground">
                    {row.label}
                  </td>
                  {[
                    "text-foreground",
                    "text-primary",
                    "text-muted-foreground",
                    "text-destructive",
                    "text-background",
                  ].map((textClass) => (
                    <td key={textClass} className="p-2 text-center">
                      <div
                        className={`mx-auto flex size-9 items-center justify-center rounded-lg ${row.bg} ${textClass}`}
                      >
                        <ZapIcon className="size-4" />
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
