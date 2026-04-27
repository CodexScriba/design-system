"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts"
import {
  TrendingUpIcon,
  TrendingDownIcon,
  EyeIcon,
  MousePointerClickIcon,
  ClockIcon,
  UsersIcon,
  GlobeIcon,
  ArrowUpRightIcon,
  CalendarIcon,
  FilterIcon,
  DownloadIcon,
  MoreHorizontalIcon,
  CircleIcon,
  ArrowRightIcon,
} from "lucide-react"

const trafficData = [
  { date: "Jan", visitors: 12400, pageviews: 34200, sessions: 18600 },
  { date: "Feb", visitors: 14800, pageviews: 38100, sessions: 21300 },
  { date: "Mar", visitors: 13200, pageviews: 35700, sessions: 19800 },
  { date: "Apr", visitors: 17600, pageviews: 45200, sessions: 24100 },
  { date: "May", visitors: 21300, pageviews: 52800, sessions: 28700 },
  { date: "Jun", visitors: 19800, pageviews: 48900, sessions: 26400 },
]

const conversionData = [
  { date: "Mon", signups: 42, purchases: 18 },
  { date: "Tue", signups: 56, purchases: 24 },
  { date: "Wed", signups: 38, purchases: 15 },
  { date: "Thu", signups: 64, purchases: 31 },
  { date: "Fri", signups: 71, purchases: 38 },
  { date: "Sat", signups: 29, purchases: 12 },
  { date: "Sun", signups: 22, purchases: 9 },
]

const trafficConfig: ChartConfig = {
  visitors: { label: "Visitors", color: "var(--chart-1)" },
  pageviews: { label: "Pageviews", color: "var(--chart-2)" },
  sessions: { label: "Sessions", color: "var(--chart-3)" },
}

const conversionConfig: ChartConfig = {
  signups: { label: "Signups", color: "var(--chart-1)" },
  purchases: { label: "Purchases", color: "var(--chart-4)" },
}

const TOP_PAGES = [
  { path: "/", title: "Home", views: "24,312", change: "+12.3%", up: true },
  { path: "/pricing", title: "Pricing", views: "18,204", change: "+8.1%", up: true },
  { path: "/docs", title: "Documentation", views: "12,847", change: "+24.6%", up: true },
  { path: "/blog/launch", title: "Launch Post", views: "9,631", change: "-3.2%", up: false },
  { path: "/signup", title: "Sign Up", views: "7,429", change: "+5.7%", up: true },
]

const TOP_SOURCES = [
  { source: "Google", visitors: "32,410", pct: 42 },
  { source: "Direct", visitors: "18,230", pct: 24 },
  { source: "Twitter / X", visitors: "11,640", pct: 15 },
  { source: "GitHub", visitors: "8,920", pct: 12 },
  { source: "Other", visitors: "5,340", pct: 7 },
]

const RECENT_EVENTS = [
  { user: "SC", name: "Sarah C.", action: "Signed up", plan: "Pro", time: "2m ago" },
  { user: "JL", name: "James L.", action: "Upgraded", plan: "Enterprise", time: "8m ago" },
  { user: "MK", name: "Maya K.", action: "Signed up", plan: "Starter", time: "15m ago" },
  { user: "RD", name: "Robert D.", action: "Churned", plan: "Pro", time: "23m ago" },
  { user: "AP", name: "Aisha P.", action: "Signed up", plan: "Pro", time: "31m ago" },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      {/* ═══ Page Header ═══ */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Traffic, conversions, and audience insights for acme.io
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <CalendarIcon className="size-3.5" /> Last 30 days
          </Button>
          <Button variant="outline" size="sm">
            <FilterIcon className="size-3.5" /> Filter
          </Button>
          <Button variant="outline" size="sm">
            <DownloadIcon className="size-3.5" /> Export
          </Button>
        </div>
      </div>

      {/* ═══ KPI Row ═══ */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            label: "Unique Visitors",
            value: "76,540",
            change: "+14.2%",
            up: true,
            icon: UsersIcon,
            iconBg: "bg-primary/10 text-primary",
          },
          {
            label: "Pageviews",
            value: "254,900",
            change: "+8.7%",
            up: true,
            icon: EyeIcon,
            iconBg: "bg-secondary text-secondary-foreground",
          },
          {
            label: "Avg. Session",
            value: "4m 32s",
            change: "-2.1%",
            up: false,
            icon: ClockIcon,
            iconBg: "bg-accent text-accent-foreground",
          },
          {
            label: "Conversion Rate",
            value: "3.24%",
            change: "+0.8%",
            up: true,
            icon: MousePointerClickIcon,
            iconBg: "bg-muted text-foreground",
          },
        ].map((kpi) => (
          <Card key={kpi.label}>
            <CardHeader>
              <CardDescription>{kpi.label}</CardDescription>
              <CardAction>
                <div
                  className={`flex size-9 items-center justify-center rounded-lg ${kpi.iconBg}`}
                >
                  <kpi.icon className="size-4" />
                </div>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{kpi.value}</p>
              <p className="mt-1 flex items-center gap-1 text-xs">
                {kpi.up ? (
                  <TrendingUpIcon className="size-3 text-primary" />
                ) : (
                  <TrendingDownIcon className="size-3 text-destructive" />
                )}
                <span className={kpi.up ? "text-primary" : "text-destructive"}>
                  {kpi.change}
                </span>
                <span className="text-muted-foreground">vs last period</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ═══ Charts Row ═══ */}
      <div className="grid gap-4 lg:grid-cols-5">
        {/* Traffic Chart */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Traffic Overview</CardTitle>
            <CardDescription>
              Visitors, pageviews, and sessions over time
            </CardDescription>
            <CardAction>
              <Button variant="ghost" size="icon-sm">
                <MoreHorizontalIcon />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={trafficConfig}
              className="h-[280px] w-full"
            >
              <LineChart data={trafficData}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="date" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Line
                  type="monotone"
                  dataKey="visitors"
                  stroke="var(--color-visitors)"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="pageviews"
                  stroke="var(--color-pageviews)"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="sessions"
                  stroke="var(--color-sessions)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Top Sources */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Top Sources</CardTitle>
            <CardDescription>Where your traffic comes from</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {TOP_SOURCES.map((src) => (
                <div key={src.source} className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="flex size-7 items-center justify-center rounded-full bg-muted">
                        <GlobeIcon className="size-3.5 text-muted-foreground" />
                      </div>
                      <span className="font-medium">{src.source}</span>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">
                      {src.visitors}
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${src.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ═══ Bottom Row ═══ */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Top Pages */}
        <Card>
          <CardHeader>
            <CardTitle>Top Pages</CardTitle>
            <CardDescription>Most visited pages this period</CardDescription>
            <CardAction>
              <Button variant="link" size="sm">
                View All <ArrowRightIcon />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Page</TableHead>
                  <TableHead className="text-right">Views</TableHead>
                  <TableHead className="text-right">Change</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {TOP_PAGES.map((page) => (
                  <TableRow key={page.path}>
                    <TableCell>
                      <div>
                        <p className="text-sm font-medium">{page.title}</p>
                        <p className="font-mono text-xs text-muted-foreground">
                          {page.path}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-mono text-sm">
                      {page.views}
                    </TableCell>
                    <TableCell className="text-right">
                      <span
                        className={`flex items-center justify-end gap-1 text-xs font-medium ${
                          page.up ? "text-primary" : "text-destructive"
                        }`}
                      >
                        {page.up ? (
                          <TrendingUpIcon className="size-3" />
                        ) : (
                          <TrendingDownIcon className="size-3" />
                        )}
                        {page.change}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Conversions + Live Feed */}
        <div className="space-y-4">
          {/* Conversion Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Conversions</CardTitle>
              <CardDescription>Signups and purchases this week</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={conversionConfig}
                className="h-[180px] w-full"
              >
                <BarChart data={conversionData}>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="date" tickLine={false} axisLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar
                    dataKey="signups"
                    fill="var(--color-signups)"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="purchases"
                    fill="var(--color-purchases)"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Live Feed */}
          <Card>
            <CardHeader>
              <CardTitle>
                <span className="flex items-center gap-2">
                  <CircleIcon className="size-2 fill-primary text-primary animate-pulse" />
                  Live Feed
                </span>
              </CardTitle>
              <CardDescription>Real-time user activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {RECENT_EVENTS.map((evt, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Avatar className="size-7">
                      <AvatarFallback className="text-[10px]">
                        {evt.user}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 text-sm">
                      <span className="font-medium">{evt.name}</span>{" "}
                      <span className="text-muted-foreground">{evt.action}</span>
                    </div>
                    <Badge
                      variant={
                        evt.action === "Churned"
                          ? "destructive"
                          : evt.plan === "Enterprise"
                            ? "default"
                            : "secondary"
                      }
                    >
                      {evt.plan}
                    </Badge>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {evt.time}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="w-full">
                View all events <ArrowUpRightIcon />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
