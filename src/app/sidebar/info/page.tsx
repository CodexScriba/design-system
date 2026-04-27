"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  TerminalIcon,
  InfoIcon,
  AlertTriangleIcon,
  LightbulbIcon,
  BookOpenIcon,
  ChevronRightIcon,
  ThumbsUpIcon,
  ThumbsDownIcon,
} from "lucide-react"

export default function InformationPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 pb-16">
      {/* ═══ Breadcrumbs & Header ═══ */}
      <div className="space-y-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/sidebar">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Documentation</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Getting Started Guide</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Getting Started with Acme
            </h1>
            <Badge variant="secondary" className="ml-2">v2.0</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            Learn how to initialize your project, configure the CLI, and deploy your first application to the edge.
          </p>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <BookOpenIcon className="size-4" />
            <span>5 min read</span>
          </div>
          <span>•</span>
          <span>Last updated: October 24, 2023</span>
        </div>
      </div>

      <Separator />

      <div className="flex flex-col-reverse gap-8 md:flex-row md:items-start">
        {/* ═══ Main Article Content ═══ */}
        <article className="flex-1 space-y-8">
          {/* Introduction */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Introduction</h2>
            <p className="leading-7">
              Acme is a powerful platform that allows you to deploy scalable applications with zero configuration. This guide will walk you through setting up a new project, understanding our core concepts, and pushing your code live.
            </p>
            <Alert>
              <InfoIcon className="size-4" />
              <AlertTitle>Prerequisites</AlertTitle>
              <AlertDescription>
                Before you begin, ensure you have Node.js version 18.x or higher installed, and a GitHub account to link your repositories.
              </AlertDescription>
            </Alert>
          </div>

          {/* Step 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">1. Installation</h2>
            <p className="leading-7">
              The fastest way to start is by using our global CLI tool. Open your terminal and run the following command to install the Acme CLI globally on your machine:
            </p>
            <div className="relative rounded-lg bg-muted p-4 font-mono text-sm ring-1 ring-foreground/10">
              <span className="select-none text-muted-foreground">$ </span>
              <span className="text-foreground">npm install -g acme-cli</span>
              <Button size="icon-sm" variant="ghost" className="absolute right-2 top-2 h-6 w-6">
                <TerminalIcon className="size-3" />
              </Button>
            </div>
            <p className="leading-7">
              Once installed, you can verify the installation by checking the version number. Run <kbd className="rounded-md border bg-muted px-1.5 py-0.5 font-mono text-xs font-medium text-foreground shadow-sm">acme --version</kbd>.
            </p>
          </div>

          {/* Step 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">2. Project Initialization</h2>
            <p className="leading-7">
              Navigate to your project directory and initialize Acme. This will create an <code className="rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground">acme.config.json</code> file in your root folder.
            </p>
            
            <Alert variant="destructive" className="bg-destructive/5 text-destructive border-destructive/20">
              <AlertTriangleIcon className="size-4" />
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>
                Do not commit your <code className="bg-destructive/10 text-destructive">.acme/credentials</code> file to version control. Ensure it is added to your <code className="bg-destructive/10 text-destructive">.gitignore</code> immediately.
              </AlertDescription>
            </Alert>

            <ul className="my-6 ml-6 list-disc space-y-2 [&>li]:mt-2 text-muted-foreground">
              <li><strong className="font-semibold text-foreground">Build Settings:</strong> Configure your build command and output directory.</li>
              <li><strong className="font-semibold text-foreground">Environment Variables:</strong> Define secrets and public keys securely.</li>
              <li><strong className="font-semibold text-foreground">Routing:</strong> Set up custom redirects and rewrites.</li>
            </ul>
          </div>

          {/* Pro Tip Callout */}
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
            <div className="flex gap-4">
              <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                <LightbulbIcon className="size-4" />
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-foreground">Pro Tip: Environment Branching</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  You can map specific Git branches to different environments in your dashboard. For example, map the <code>main</code> branch to Production, and <code>staging</code> to your Preview environment.
                </p>
              </div>
            </div>
          </div>

          <Separator />

          {/* FAQ Accordion */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Frequently Asked Questions</h2>
            <Accordion type="single" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What happens if my build fails?</AccordionTrigger>
                <AccordionContent>
                  If a build fails, the deployment is cancelled automatically. Your previous successful deployment will remain active, ensuring zero downtime for your users. You can inspect the build logs in your dashboard.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I use a custom domain?</AccordionTrigger>
                <AccordionContent>
                  Yes! Custom domains are supported on all plans. You can configure them in the Project Settings tab. We also automatically provision and renew SSL certificates for you.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How do I rollback to a previous version?</AccordionTrigger>
                <AccordionContent>
                  Navigate to your project's "Deployments" tab, find the specific deployment you want to revert to, click the options menu (three dots), and select "Rollback to this version".
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Feedback */}
          <div className="flex items-center justify-between rounded-lg border bg-card p-4">
            <span className="text-sm font-medium">Was this article helpful?</span>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <ThumbsUpIcon className="mr-2 size-3.5" /> Yes
              </Button>
              <Button variant="outline" size="sm">
                <ThumbsDownIcon className="mr-2 size-3.5" /> No
              </Button>
            </div>
          </div>
        </article>

        {/* ═══ Right Sidebar (Table of Contents / Related) ═══ */}
        <aside className="w-full shrink-0 space-y-6 md:sticky md:top-6 md:w-64">
          <Card className="bg-muted/30 shadow-none border-foreground/5">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">On this page</CardTitle>
            </CardHeader>
            <CardContent>
              <nav className="flex flex-col space-y-1 text-sm">
                <a href="#" className="font-medium text-foreground hover:underline">Introduction</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors pl-4">Prerequisites</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">1. Installation</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">2. Project Initialization</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Frequently Asked Questions</a>
              </nav>
            </CardContent>
          </Card>

          <Card className="shadow-none">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Related Articles</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col space-y-3 text-sm">
                <li>
                  <a href="#" className="group flex items-center justify-between text-muted-foreground hover:text-foreground transition-colors">
                    <span>Configuring Custom Domains</span>
                    <ChevronRightIcon className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center justify-between text-muted-foreground hover:text-foreground transition-colors">
                    <span>Using Environment Variables</span>
                    <ChevronRightIcon className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center justify-between text-muted-foreground hover:text-foreground transition-colors">
                    <span>Advanced Routing Options</span>
                    <ChevronRightIcon className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="rounded-xl border bg-card p-4">
            <h4 className="text-sm font-semibold">Need help?</h4>
            <p className="mt-1 mb-3 text-xs text-muted-foreground">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <Button variant="secondary" size="sm" className="w-full">
              Contact Support
            </Button>
          </div>
        </aside>
      </div>
    </div>
  )
}
