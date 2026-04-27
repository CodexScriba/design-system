"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import {
  ZapIcon,
  ShieldCheckIcon,
  BarChart3Icon,
  LayersIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  SparklesIcon,
  GlobeIcon,
  UsersIcon,
  ClockIcon,
  HeadphonesIcon,
  ChevronRightIcon,
  PlayIcon,
} from "lucide-react"

const FEATURES = [
  {
    icon: ZapIcon,
    iconBg: "bg-primary/10 text-primary",
    title: "Blazing Fast",
    description:
      "Deploy globally with edge computing. Sub-50ms response times anywhere in the world.",
  },
  {
    icon: ShieldCheckIcon,
    iconBg: "bg-secondary text-secondary-foreground",
    title: "Enterprise Security",
    description:
      "SOC 2 compliant with end-to-end encryption, SSO, and role-based access controls.",
  },
  {
    icon: BarChart3Icon,
    iconBg: "bg-accent text-accent-foreground",
    title: "Real-Time Analytics",
    description:
      "Understand your users with live dashboards, funnels, and custom event tracking.",
  },
  {
    icon: LayersIcon,
    iconBg: "bg-muted text-foreground",
    title: "Modular Architecture",
    description:
      "Pick only what you need. Every module is independent and composable.",
  },
  {
    icon: GlobeIcon,
    iconBg: "bg-primary/20 text-primary",
    title: "Multi-Region",
    description:
      "Automatic failover across regions. Your data stays where your users are.",
  },
  {
    icon: SparklesIcon,
    iconBg: "bg-destructive/10 text-destructive",
    title: "AI-Powered",
    description:
      "Built-in machine learning for smart suggestions, anomaly detection, and automation.",
  },
]

const PLANS = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "For side projects and experimentation.",
    features: [
      "Up to 3 projects",
      "1,000 events/month",
      "Community support",
      "Basic analytics",
    ],
    cta: "Get Started Free",
    variant: "outline" as const,
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For growing teams shipping real products.",
    features: [
      "Unlimited projects",
      "100,000 events/month",
      "Priority support",
      "Advanced analytics",
      "Custom domains",
      "Team collaboration",
    ],
    cta: "Start Free Trial",
    variant: "default" as const,
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with advanced needs.",
    features: [
      "Everything in Pro",
      "Unlimited events",
      "Dedicated CSM",
      "SLA guarantee",
      "SSO & SCIM",
      "Custom contracts",
    ],
    cta: "Contact Sales",
    variant: "outline" as const,
    highlight: false,
  },
]

const TESTIMONIALS = [
  {
    quote:
      "We migrated our entire stack in a weekend. The developer experience is unmatched — everything just works.",
    name: "Sarah Chen",
    role: "CTO at Streamline",
    avatar: "SC",
  },
  {
    quote:
      "The analytics alone paid for itself in the first month. We finally understand where our users drop off.",
    name: "Marcus Rivera",
    role: "Head of Product at NovaPay",
    avatar: "MR",
  },
  {
    quote:
      "Security compliance used to take us months. With Acme, we were SOC 2 ready on day one.",
    name: "Aisha Patel",
    role: "VP Engineering at Helix",
    avatar: "AP",
  },
]

const STATS = [
  { value: "99.99%", label: "Uptime SLA" },
  { value: "50ms", label: "Avg. Response" },
  { value: "10K+", label: "Companies" },
  { value: "2M+", label: "Deployments" },
]

const LOGOS = [
  "Streamline",
  "NovaPay",
  "Helix",
  "Arclight",
  "Baseform",
  "Vectrix",
]

export default function LandingPage() {
  return (
    <div className="space-y-24">
      {/* ═══════════════════════════════════════
          HERO SECTION
         ═══════════════════════════════════════ */}
      <section className="space-y-8 pt-8 text-center">
        <Badge variant="secondary" className="mx-auto">
          <SparklesIcon className="size-3" /> Now with AI-Powered Insights
        </Badge>

        <div className="mx-auto max-w-3xl space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Ship faster with the platform{" "}
            <span className="text-primary">built for modern teams</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Acme gives your team the infrastructure, analytics, and security
            tooling to go from idea to production in hours — not weeks. Trusted
            by 10,000+ companies worldwide.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3">
          <Button size="lg">
            Start Building <ArrowRightIcon />
          </Button>
          <Button variant="outline" size="lg">
            <PlayIcon className="size-4" /> Watch Demo
          </Button>
        </div>

        {/* Stats Bar */}
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          LOGOS / SOCIAL PROOF
         ═══════════════════════════════════════ */}
      <section className="space-y-4 text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by industry leaders
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {LOGOS.map((logo) => (
            <span
              key={logo}
              className="text-lg font-semibold text-muted-foreground/50"
            >
              {logo}
            </span>
          ))}
        </div>
      </section>

      <Separator />

      {/* ═══════════════════════════════════════
          FEATURES SECTION
         ═══════════════════════════════════════ */}
      <section className="space-y-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Everything you need to ship with confidence
          </h2>
          <p className="mt-2 text-muted-foreground">
            A complete platform so you can focus on building your product — not
            maintaining infrastructure.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <div
                  className={`mb-1 flex size-10 items-center justify-center rounded-lg ${feature.iconBg}`}
                >
                  <feature.icon className="size-5" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* ═══════════════════════════════════════
          HOW IT WORKS (Card Container)
         ═══════════════════════════════════════ */}
      <section className="space-y-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Up and running in 3 steps
          </h2>
          <p className="mt-2 text-muted-foreground">
            No config headaches. No vendor lock-in. Just results.
          </p>
        </div>

        <div className="rounded-2xl bg-muted/50 p-6 ring-1 ring-foreground/5 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Connect your repo",
                description:
                  "Link your GitHub, GitLab, or Bitbucket repository. We detect your framework automatically.",
                icon: LayersIcon,
                iconBg: "bg-primary text-primary-foreground",
              },
              {
                step: "02",
                title: "Configure & deploy",
                description:
                  "Set your environment variables and hit deploy. We handle builds, CDN, and SSL.",
                icon: ZapIcon,
                iconBg: "bg-primary text-primary-foreground",
              },
              {
                step: "03",
                title: "Monitor & scale",
                description:
                  "Real-time metrics, alerts, and auto-scaling out of the box. No ops team required.",
                icon: BarChart3Icon,
                iconBg: "bg-primary text-primary-foreground",
              },
            ].map((item) => (
              <Card key={item.step} className="border-0 bg-card shadow-none">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex size-9 items-center justify-center rounded-full ${item.iconBg}`}
                    >
                      <item.icon className="size-4" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">
                      Step {item.step}
                    </span>
                  </div>
                  <CardTitle className="mt-2">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* ═══════════════════════════════════════
          HIGHLIGHT SECTION (Split card)
         ═══════════════════════════════════════ */}
      <section>
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left: Content */}
            <div className="flex flex-col justify-center p-8">
              <Badge variant="outline" className="mb-4 w-fit">
                New
              </Badge>
              <h2 className="text-2xl font-bold tracking-tight">
                AI-powered anomaly detection
              </h2>
              <p className="mt-2 text-muted-foreground">
                Our ML engine monitors your metrics 24/7 and alerts you before
                problems become incidents. Reduce MTTR by 73% on average.
              </p>
              <ul className="mt-6 space-y-2">
                {[
                  "Automatic baseline learning",
                  "Slack & PagerDuty integration",
                  "Root cause suggestions",
                  "Zero false-positive guarantee",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircleIcon className="size-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button>
                  Learn More <ChevronRightIcon />
                </Button>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="flex items-center justify-center bg-muted/50 p-8">
              <div className="w-full max-w-xs space-y-4">
                {/* Fake mini dashboard */}
                <div className="rounded-lg bg-card p-4 ring-1 ring-foreground/5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Error Rate</span>
                    <Badge variant="destructive">↑ 340%</Badge>
                  </div>
                  <p className="mt-1 text-2xl font-bold">2.4%</p>
                  <p className="text-xs text-muted-foreground">
                    Anomaly detected 3 min ago
                  </p>
                </div>
                <div className="rounded-lg bg-card p-4 ring-1 ring-foreground/5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Latency P99</span>
                    <Badge variant="secondary">Normal</Badge>
                  </div>
                  <p className="mt-1 text-2xl font-bold">48ms</p>
                  <p className="text-xs text-muted-foreground">
                    Within expected range
                  </p>
                </div>
                <div className="rounded-lg bg-card p-4 ring-1 ring-foreground/5">
                  <div className="flex items-center gap-2">
                    <div className="flex size-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <SparklesIcon className="size-3.5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium">AI Suggestion</p>
                      <p className="text-xs text-muted-foreground">
                        Rollback deploy #847 →
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <Separator />

      {/* ═══════════════════════════════════════
          TESTIMONIALS
         ═══════════════════════════════════════ */}
      <section className="space-y-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Loved by engineering teams
          </h2>
          <p className="mt-2 text-muted-foreground">
            Don&apos;t take our word for it — hear from the teams building with
            Acme.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <Card key={t.name}>
              <CardContent className="pt-6">
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon
                      key={i}
                      className="size-3.5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </CardContent>
              <CardFooter className="gap-3">
                <Avatar className="size-8">
                  <AvatarFallback className="text-xs">{t.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* ═══════════════════════════════════════
          PRICING
         ═══════════════════════════════════════ */}
      <section className="space-y-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="mt-2 text-muted-foreground">
            Start free, upgrade when you&apos;re ready. No surprise charges.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {PLANS.map((plan) => (
            <Card
              key={plan.name}
              className={plan.highlight ? "ring-2 ring-primary" : ""}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{plan.name}</CardTitle>
                  {plan.highlight && <Badge>Popular</Badge>}
                </div>
                <div className="mt-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">
                    {plan.period}
                  </span>
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircleIcon className="size-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant={plan.variant} className="w-full">
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* ═══════════════════════════════════════
          FAQ / SUPPORT SECTION
         ═══════════════════════════════════════ */}
      <section className="space-y-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Still have questions?
          </h2>
          <p className="mt-2 text-muted-foreground">
            Our team is here to help you get started.
          </p>
        </div>

        <div className="rounded-2xl bg-muted/50 p-6 ring-1 ring-foreground/5 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: HeadphonesIcon,
                iconBg: "bg-primary/10 text-primary",
                title: "Talk to Sales",
                description: "Get a personalized demo for your team.",
                cta: "Book a Call",
              },
              {
                icon: UsersIcon,
                iconBg: "bg-secondary text-secondary-foreground",
                title: "Community",
                description: "Join 5,000+ developers on Discord.",
                cta: "Join Discord",
              },
              {
                icon: ClockIcon,
                iconBg: "bg-accent text-accent-foreground",
                title: "24/7 Support",
                description: "Priority support with <1hr response time.",
                cta: "Contact Us",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center gap-3 rounded-xl bg-card p-6 text-center ring-1 ring-foreground/5"
              >
                <div
                  className={`flex size-12 items-center justify-center rounded-full ${item.iconBg}`}
                >
                  <item.icon className="size-5" />
                </div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
                <Button variant="outline" size="sm" className="mt-auto">
                  {item.cta} <ChevronRightIcon />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* ═══════════════════════════════════════
          CTA / NEWSLETTER
         ═══════════════════════════════════════ */}
      <section className="pb-12">
        <Card className="overflow-hidden text-center">
          <CardContent className="py-12">
            <div className="mx-auto max-w-xl space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">
                Ready to start building?
              </h2>
              <p className="text-muted-foreground">
                Join 10,000+ teams already shipping faster with Acme. Free
                forever for small projects.
              </p>
              <div className="mx-auto flex max-w-sm gap-2">
                <Input placeholder="Enter your email" type="email" />
                <Button>Get Started</Button>
              </div>
              <p className="text-xs text-muted-foreground">
                No credit card required · Free tier available ·{" "}
                <a href="#" className="underline underline-offset-4">
                  Terms apply
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
