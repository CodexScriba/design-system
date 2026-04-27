import { SectionWrapper } from "./section-wrapper"
import { Separator } from "@/components/ui/separator"

export function TypographySection() {
  return (
    <SectionWrapper
      id="typography"
      title="Typography"
      description="Heading hierarchy, paragraph styles, and inline text formatting."
    >
      <div className="space-y-10">
        {/* Headings */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Headings</h3>
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight">
              H1 — The quick brown fox
            </h1>
            <h2 className="text-3xl font-semibold tracking-tight">
              H2 — jumps over the lazy dog
            </h2>
            <h3 className="text-2xl font-semibold tracking-tight">
              H3 — Pack my box with five
            </h3>
            <h4 className="text-xl font-semibold tracking-tight">
              H4 — dozen liquor jugs
            </h4>
            <h5 className="text-lg font-semibold tracking-tight">
              H5 — How vexingly quick
            </h5>
            <h6 className="text-base font-semibold tracking-tight">
              H6 — daft zebras jump
            </h6>
          </div>
        </div>

        <Separator />

        {/* Paragraph Styles */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">
            Paragraph Styles
          </h3>
          <div className="max-w-2xl space-y-4">
            <p className="text-xl text-muted-foreground">
              Lead text — A design system is a collection of reusable components,
              guided by clear standards, that can be assembled to build any
              number of applications.
            </p>
            <p className="text-base leading-7">
              Default paragraph — The goal is not to build a rigid set of
              rules, but to create a flexible system that empowers designers and
              developers to build consistent, high-quality user interfaces
              quickly and efficiently.
            </p>
            <p className="text-sm text-muted-foreground">
              Small / Muted — Additional context or secondary information that
              supports the main content without competing for attention.
            </p>
            <p className="text-lg font-semibold">
              Large text — Used for important callouts or emphasis.
            </p>
          </div>
        </div>

        <Separator />

        {/* Inline Styles */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">
            Inline Styles
          </h3>
          <div className="max-w-2xl space-y-3 text-sm">
            <p>
              This is a <strong>bold</strong> word and an <em>italic</em> word.
            </p>
            <p>
              Here is some <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">inline code</code> within a sentence.
            </p>
            <p>
              Visit the{" "}
              <a
                href="#"
                className="font-medium text-primary underline underline-offset-4"
              >
                documentation link
              </a>{" "}
              for more details.
            </p>
            <blockquote className="border-l-2 pl-6 italic text-muted-foreground">
              &ldquo;Design is not just what it looks like and feels like.
              Design is how it works.&rdquo; — Steve Jobs
            </blockquote>
          </div>
        </div>

        <Separator />

        {/* Font Comparison */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">
            Font Comparison
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground">
                font-sans (Geist)
              </p>
              <p className="font-sans text-lg">
                ABCDEFGHIJKLM<br />
                NOPQRSTUVWXYZ<br />
                abcdefghijklm<br />
                nopqrstuvwxyz<br />
                0123456789
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground">
                font-mono (Geist Mono)
              </p>
              <p className="font-mono text-lg">
                ABCDEFGHIJKLM<br />
                NOPQRSTUVWXYZ<br />
                abcdefghijklm<br />
                nopqrstuvwxyz<br />
                0123456789
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
