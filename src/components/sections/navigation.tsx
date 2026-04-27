"use client"

import { SectionWrapper } from "./section-wrapper"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

export function NavigationSection() {
  return (
    <SectionWrapper
      id="navigation"
      title="Navigation"
      description="Breadcrumbs, pagination, and tabs."
    >
      <div className="space-y-10">
        {/* Breadcrumbs */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">
            Breadcrumbs
          </h3>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Products</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Current Page</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <Separator />

        {/* Pagination */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">
            Pagination
          </h3>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

        <Separator />

        {/* Tabs */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">
            Tabs (Default)
          </h3>
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTrigger value="tab1">Account</TabsTrigger>
              <TabsTrigger value="tab2">Password</TabsTrigger>
              <TabsTrigger value="tab3">Notifications</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <p className="p-4 text-sm text-muted-foreground">
                Manage your account settings and preferences here.
              </p>
            </TabsContent>
            <TabsContent value="tab2">
              <p className="p-4 text-sm text-muted-foreground">
                Change your password and security settings.
              </p>
            </TabsContent>
            <TabsContent value="tab3">
              <p className="p-4 text-sm text-muted-foreground">
                Configure notification preferences and channels.
              </p>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">
            Tabs (Line Variant)
          </h3>
          <Tabs defaultValue="overview">
            <TabsList variant="line">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <p className="p-4 text-sm text-muted-foreground">
                Overview content with key metrics and summaries.
              </p>
            </TabsContent>
            <TabsContent value="analytics">
              <p className="p-4 text-sm text-muted-foreground">
                Detailed analytics and data visualizations.
              </p>
            </TabsContent>
            <TabsContent value="reports">
              <p className="p-4 text-sm text-muted-foreground">
                Generated reports and export options.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </SectionWrapper>
  )
}
