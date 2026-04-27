"use client"

import { SectionWrapper } from "./section-wrapper"
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
  Pie,
  PieChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
} from "recharts"

const barData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
]

const lineData = [
  { month: "Jan", revenue: 4000, expenses: 2400 },
  { month: "Feb", revenue: 3000, expenses: 1398 },
  { month: "Mar", revenue: 5000, expenses: 3800 },
  { month: "Apr", revenue: 2780, expenses: 3908 },
  { month: "May", revenue: 1890, expenses: 4800 },
  { month: "Jun", revenue: 3390, expenses: 3800 },
]

const pieData = [
  { name: "Desktop", value: 55 },
  { name: "Mobile", value: 30 },
  { name: "Tablet", value: 10 },
  { name: "Other", value: 5 },
]

const barConfig: ChartConfig = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
  mobile: { label: "Mobile", color: "var(--chart-2)" },
}

const lineConfig: ChartConfig = {
  revenue: { label: "Revenue", color: "var(--chart-1)" },
  expenses: { label: "Expenses", color: "var(--chart-3)" },
}

const pieConfig: ChartConfig = {
  Desktop: { label: "Desktop", color: "var(--chart-1)" },
  Mobile: { label: "Mobile", color: "var(--chart-2)" },
  Tablet: { label: "Tablet", color: "var(--chart-3)" },
  Other: { label: "Other", color: "var(--chart-4)" },
}

const PIE_COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
]

export function ChartsSection() {
  return (
    <SectionWrapper
      id="charts"
      title="Charts & Graphs"
      description="Bar, line, and pie charts using chart-1 through chart-5 tokens."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Bar Chart */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-muted-foreground">
            Bar Chart
          </h3>
          <ChartContainer config={barConfig} className="h-[300px] w-full">
            <BarChart data={barData}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar
                dataKey="desktop"
                fill="var(--color-desktop)"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="mobile"
                fill="var(--color-mobile)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </div>

        {/* Line Chart */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-muted-foreground">
            Line Chart
          </h3>
          <ChartContainer config={lineConfig} className="h-[300px] w-full">
            <LineChart data={lineData}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="var(--color-revenue)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="expenses"
                stroke="var(--color-expenses)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </div>

        {/* Pie Chart */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-muted-foreground">
            Pie / Donut Chart
          </h3>
          <ChartContainer config={pieConfig} className="h-[300px] w-full">
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                innerRadius={60}
                strokeWidth={2}
              >
                {pieData.map((_entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={PIE_COLORS[index % PIE_COLORS.length]}
                  />
                ))}
              </Pie>
              <ChartLegend content={<ChartLegendContent nameKey="name" />} />
            </PieChart>
          </ChartContainer>
        </div>
      </div>
    </SectionWrapper>
  )
}
