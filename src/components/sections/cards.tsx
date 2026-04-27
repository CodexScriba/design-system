import { SectionWrapper } from "./section-wrapper"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ImageIcon, ArrowRightIcon } from "lucide-react"

export function CardsSection() {
  return (
    <SectionWrapper
      id="cards"
      title="Cards & Containers"
      description="Card variants and grid layouts."
    >
      <div className="space-y-10">
        {/* Card Grid */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">
            Card Grid
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Default Card */}
            <Card>
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
                <CardDescription>
                  A basic card with header and content.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This card uses the default card background and foreground
                  tokens from your design system.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="outline" className="w-full">
                  Action <ArrowRightIcon data-icon="inline-end" />
                </Button>
              </CardFooter>
            </Card>

            {/* Card with Badge */}
            <Card>
              <CardHeader>
                <CardTitle>
                  With Badge <Badge variant="secondary" className="ml-2">New</Badge>
                </CardTitle>
                <CardDescription>
                  Cards can contain badges and other elements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button size="sm" className="w-full">
                  Continue
                </Button>
              </CardFooter>
            </Card>

            {/* Card with Image Placeholder */}
            <Card>
              <div className="flex h-32 items-center justify-center bg-muted">
                <ImageIcon className="size-8 text-muted-foreground" />
              </div>
              <CardHeader>
                <CardTitle>Image Card</CardTitle>
                <CardDescription>
                  Card with an image placeholder area.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Replace the placeholder with any image component.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Card Container */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">
            Card Container (subtle background)
          </h3>
          <div className="rounded-xl bg-muted/50 p-6 ring-1 ring-foreground/5">
            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Nested Card A</CardTitle>
                  <CardDescription>Inside a card container.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    The container uses a muted background to create visual
                    depth.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Nested Card B</CardTitle>
                  <CardDescription>Same container, different card.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This pattern helps group related cards together.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Small Size Cards */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">
            Small Size Cards
          </h3>
          <div className="grid gap-3 sm:grid-cols-3">
            <Card size="sm">
              <CardHeader>
                <CardTitle>Compact Card</CardTitle>
                <CardDescription>Less padding for dense UIs.</CardDescription>
              </CardHeader>
            </Card>
            <Card size="sm">
              <CardHeader>
                <CardTitle>Stat Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">2,847</p>
                <p className="text-xs text-muted-foreground">Total users</p>
              </CardContent>
            </Card>
            <Card size="sm">
              <CardHeader>
                <CardTitle>Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">$12.4k</p>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
