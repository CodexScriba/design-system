"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Bar, BarChart, XAxis, CartesianGrid } from "recharts"
import {
  TrendingUpIcon,
  TrendingDownIcon,
  UsersIcon,
  DollarSignIcon,
  ShoppingCartIcon,
  ActivityIcon,
  ArrowUpRightIcon,
  MoreHorizontalIcon,
  CalendarIcon,
  ClockIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  FileTextIcon,
} from "lucide-react"

const chartData = [
  { day: "Mon", revenue: 4200, orders: 32 },
  { day: "Tue", revenue: 3800, orders: 28 },
  { day: "Wed", revenue: 5100, orders: 41 },
  { day: "Thu", revenue: 4600, orders: 35 },
  { day: "Fri", revenue: 6200, orders: 52 },
  { day: "Sat", revenue: 3400, orders: 24 },
  { day: "Sun", revenue: 2900, orders: 19 },
]

const chartConfig: ChartConfig = {
  revenue: { label: "Revenue", color: "var(--chart-1)" },
  orders: { label: "Orders", color: "var(--chart-2)" },
}

const RECENT_ACTIVITY = [
  {
    user: "AK",
    name: "Alex Kim",
    action: "placed an order",
    detail: "#ORD-7821",
    time: "2 min ago",
    icon: ShoppingCartIcon,
    iconBg: "bg-primary/10 text-primary",
  },
  {
    user: "MJ",
    name: "Maria Johnson",
    action: "completed payment",
    detail: "$1,240.00",
    time: "12 min ago",
    icon: DollarSignIcon,
    iconBg: "bg-chart-1/20 text-chart-2",
  },
  {
    user: "TS",
    name: "Tom Smith",
    action: "signed up",
    detail: "Pro plan",
    time: "34 min ago",
    icon: UsersIcon,
    iconBg: "bg-secondary text-secondary-foreground",
  },
  {
    user: "LW",
    name: "Lisa Wang",
    action: "submitted a ticket",
    detail: "#TKT-459",
    time: "1 hour ago",
    icon: FileTextIcon,
    iconBg: "bg-muted text-muted-foreground",
  },
  {
    user: "RB",
    name: "Ryan Brown",
    action: "left a review",
    detail: "★★★★★",
    time: "2 hours ago",
    icon: CheckCircleIcon,
    iconBg: "bg-primary/10 text-primary",
  },
]

const TASKS = [
  { label: "Review Q4 financials", status: "In Progress", priority: "High" },
  { label: "Update privacy policy", status: "Todo", priority: "Medium" },
  { label: "Deploy v2.4 release", status: "Done", priority: "High" },
  { label: "Onboard new vendor", status: "In Progress", priority: "Low" },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Welcome back, Jane. Here&apos;s what&apos;s happening today.
        </p>
      </div>

      {/* Stat Cards Row */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Total Revenue",
            value: "$45,231",
            change: "+20.1%",
            trending: "up",
            icon: DollarSignIcon,
            iconBg: "bg-primary/10 text-primary",
          },
          {
            title: "Active Users",
            value: "2,338",
            change: "+12.5%",
            trending: "up",
            icon: UsersIcon,
            iconBg: "bg-secondary text-secondary-foreground",
          },
          {
            title: "Orders",
            value: "1,429",
            change: "-3.2%",
            trending: "down",
            icon: ShoppingCartIcon,
            iconBg: "bg-muted text-muted-foreground",
          },
          {
            title: "Conversion",
            value: "3.24%",
            change: "+0.8%",
            trending: "up",
            icon: ActivityIcon,
            iconBg: "bg-accent text-accent-foreground",
          },
        ].map((stat) => (
          <Card key={stat.title}>
            <CardHeader>
              <CardDescription>{stat.title}</CardDescription>
              <CardAction>
                <div
                  className={`flex size-9 items-center justify-center rounded-lg ${stat.iconBg}`}
                >
                  <stat.icon className="size-4" />
                </div>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="mt-1 flex items-center gap-1 text-xs">
                {stat.trending === "up" ? (
                  <TrendingUpIcon className="size-3 text-primary" />
                ) : (
                  <TrendingDownIcon className="size-3 text-destructive" />
                )}
                <span
                  className={
                    stat.trending === "up"
                      ? "text-primary"
                      : "text-destructive"
                  }
                >
                  {stat.change}
                </span>
                <span className="text-muted-foreground">vs last month</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart + Activity */}
      <div className="grid gap-4 lg:grid-cols-5">
        {/* Chart Card */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Weekly Revenue</CardTitle>
            <CardDescription>Revenue and orders this week</CardDescription>
            <CardAction>
              <Button variant="ghost" size="icon-sm">
                <MoreHorizontalIcon />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[260px] w-full">
              <BarChart data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="day" tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar
                  dataKey="revenue"
                  fill="var(--color-revenue)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions from your team</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {RECENT_ACTIVITY.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className={`flex size-8 shrink-0 items-center justify-center rounded-full ${item.iconBg}`}
                  >
                    <item.icon className="size-3.5" />
                  </div>
                  <div className="flex-1 space-y-0.5">
                    <p className="text-sm">
                      <span className="font-medium">{item.name}</span>{" "}
                      <span className="text-muted-foreground">
                        {item.action}
                      </span>
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-muted-foreground">
                        {item.detail}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        · {item.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full">
              View all activity <ArrowUpRightIcon />
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Bottom Row: Tasks + Upcoming */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Tasks Card */}
        <Card>
          <CardHeader>
            <CardTitle>Tasks</CardTitle>
            <CardDescription>Your current to-do items</CardDescription>
            <CardAction>
              <Button size="sm">Add Task</Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {TASKS.map((task, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-2 rounded-lg border p-3"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex size-7 items-center justify-center rounded-full ${
                        task.status === "Done"
                          ? "bg-primary/10 text-primary"
                          : task.status === "In Progress"
                            ? "bg-accent text-accent-foreground"
                            : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {task.status === "Done" ? (
                        <CheckCircleIcon className="size-3.5" />
                      ) : task.status === "In Progress" ? (
                        <ClockIcon className="size-3.5" />
                      ) : (
                        <AlertCircleIcon className="size-3.5" />
                      )}
                    </div>
                    <span
                      className={`text-sm ${task.status === "Done" ? "text-muted-foreground line-through" : ""}`}
                    >
                      {task.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        task.priority === "High"
                          ? "destructive"
                          : task.priority === "Medium"
                            ? "outline"
                            : "secondary"
                      }
                    >
                      {task.priority}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Card (Card Container pattern) */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Team Performance</CardTitle>
              <CardDescription>
                Progress toward quarterly goals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                {[
                  { label: "Revenue Target", value: 78 },
                  { label: "User Growth", value: 92 },
                  { label: "NPS Score", value: 65 },
                  { label: "Support SLA", value: 88 },
                ].map((item) => (
                  <Progress key={item.label} value={item.value}>
                    <ProgressLabel>{item.label}</ProgressLabel>
                    <ProgressValue />
                  </Progress>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions (small cards in container) */}
          <div className="rounded-xl bg-muted/50 p-4 ring-1 ring-foreground/5">
            <p className="mb-3 text-xs font-medium text-muted-foreground">
              Quick Actions
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { icon: CalendarIcon, label: "Schedule Meeting", bg: "bg-primary/10 text-primary" },
                { icon: FileTextIcon, label: "Create Report", bg: "bg-secondary text-secondary-foreground" },
                { icon: UsersIcon, label: "Invite Member", bg: "bg-accent text-accent-foreground" },
                { icon: ShoppingCartIcon, label: "New Order", bg: "bg-muted text-foreground" },
              ].map((action) => (
                <button
                  key={action.label}
                  className="flex items-center gap-2 rounded-lg bg-card p-3 text-left ring-1 ring-foreground/5 transition-colors hover:bg-muted"
                >
                  <div
                    className={`flex size-8 items-center justify-center rounded-lg ${action.bg}`}
                  >
                    <action.icon className="size-4" />
                  </div>
                  <span className="text-xs font-medium">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
