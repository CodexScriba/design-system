import { SectionWrapper } from "./section-wrapper"
import { Separator } from "@/components/ui/separator"

export function ListsSection() {
  return (
    <SectionWrapper
      id="lists"
      title="Lists"
      description="Ordered, unordered, nested, and description lists."
    >
      <div className="max-w-2xl space-y-10">
        <div className="grid gap-8 sm:grid-cols-2">
          {/* Unordered */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground">
              Unordered List
            </h3>
            <ul className="list-disc space-y-1.5 pl-6 text-sm">
              <li>First item in the list</li>
              <li>Second item with more detail</li>
              <li>
                Third item with nested
                <ul className="mt-1.5 list-disc space-y-1 pl-6 text-muted-foreground">
                  <li>Nested item A</li>
                  <li>Nested item B</li>
                  <li>Nested item C</li>
                </ul>
              </li>
              <li>Fourth item</li>
            </ul>
          </div>

          {/* Ordered */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground">
              Ordered List
            </h3>
            <ol className="list-decimal space-y-1.5 pl-6 text-sm">
              <li>Set up your environment</li>
              <li>Install dependencies</li>
              <li>
                Configure the project
                <ol className="mt-1.5 list-decimal space-y-1 pl-6 text-muted-foreground">
                  <li>Create config file</li>
                  <li>Set environment variables</li>
                </ol>
              </li>
              <li>Run the development server</li>
            </ol>
          </div>
        </div>

        <Separator />

        {/* Description List */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-muted-foreground">
            Description List
          </h3>
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="font-medium">Component Library</dt>
              <dd className="mt-0.5 text-muted-foreground">
                A collection of reusable UI components built with consistent
                design patterns.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Design Tokens</dt>
              <dd className="mt-0.5 text-muted-foreground">
                Named entities that store visual design attributes like colors,
                spacing, and typography.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Theme</dt>
              <dd className="mt-0.5 text-muted-foreground">
                A set of design tokens that can be swapped to change the
                overall look and feel.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </SectionWrapper>
  )
}
