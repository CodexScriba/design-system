# Quecargan Design System — AI Rules & Patterns

> **Pair with**: `design-system.json` for all token values, class names, and snippets.
> **Pair with**: `glass-rules.md` for `.card-container` usage rules (Stage / Jewel / No-Double-Glass).

---

## 1. CSS Variable Pattern

All color tokens store **bare HSL values** — consumed with `hsl(var(--token))`:
```css
--primary: 210 90% 42%;           /* definition */
color: hsl(var(--primary));        /* usage */
background: hsl(var(--primary) / 0.15); /* with alpha */
```
The `@theme inline` block bridges these to Tailwind (`text-primary`, `bg-primary/20`, etc.).
Chart tokens are pre-wrapped with `hsl()` because Recharts reads CSS variables directly.

---

## 2. Typography Rules

### The Orbitron Rule
**Orbitron is used ONCE per page** — for the single hero headline. Everything else uses Poppins: page titles, section titles, card titles, KPI numbers, body text, labels.

### Title Classes (always use these, never plain headings)
- `.title-hero` — Orbitron, responsive fluid size, gradient text
- `.title-page` — Poppins, clamped 22–32px, gradient text. Use for section headlines.
- `.title-section` — Poppins, 1.25rem, gradient text. Use for sub-sections.

### Section Header Pattern
```jsx
<h2 className="text-xs font-bold uppercase tracking-widest text-brand">CATEGORY</h2>
<h3 className="title-page">Section Title</h3>
<p className="text-sm text-muted-foreground">Description.</p>
```

---

## 3. Elevation Hierarchy (CRITICAL)

Every surface must sit at the correct visual depth. This is the #1 cause of "broken" dark mode.

### Light Mode
```
Page bg (cool blue-grey) → .card-container (frosted white) → .card (solid white) → interactive
```

### Dark Mode
```
Page bg (deep navy) → .card-container (DARKER than card) → .card (lighter, neon edge) → interactive
```

**The cardinal rule**: In dark mode, `.card-container` must always be darker than the `.card` elements inside it. Never invert this — it destroys the floating-glass illusion.

---

## 4. Dark Mode Specifics

### Cards (`.card` / `[data-slot="card"]`)
- Semi-transparent dark background with `backdrop-filter: blur(12px)`
- `1px solid` border using `--border`
- `::before` pseudo-element: 3px neon gradient top-edge (`accent → primary → accent`, 70% opacity)
- Hover: border glows cyan, card lifts 2px

### Card Containers (`.card-container`)
- Gradient from `hsl(222 45% 7% / 0.6)` — intentionally darker than card
- `::before` glow line is **hidden** (`display: none`)
- `backdrop-filter: blur(32px) saturate(120%)`

### Page Background
Layered radial gradients with cyan/purple glows over deep navy base. NOT a flat color.

### Noise Texture
SVG turbulence overlay via `body::before`, `mix-blend-mode: screen`, subtle blue tint.

---

## 5. Light Mode Specifics

### Cards
- `hsl(0 0% 100% / 0.9)` — semi-transparent white, no border
- Subtle shadow, hover lifts 3px

### Card Containers
- Gradient from white/82% to cool-blue/65% at 135°
- `::before`: 1px subtle brand-tinted top highlight
- `backdrop-filter: blur(40px) saturate(180%)`

### Page Background
Three radial gradients (blue-white tones) over a vertical linear gradient. Cool blue-grey, NOT pure white.

### Noise + Ambient Wash
Overlay noise + diagonal gradient wash add organic warmth.

---

## 6. Component Behavior

### Buttons
- `.btn-primary`: Gradient fill, inset highlight, shimmer sweep on hover, lifts 2px
- Use shadcn `<Button>` for standard buttons; `.btn-*` for custom feature CTAs
- All buttons use `--transition-smooth: cubic-bezier(0.22, 1, 0.36, 1)`

### Pill Buttons
- Glass bg with blur, `data-selected="true"` for active state
- Selected: cyan tint, glowing border, `box-shadow` glow

### Sidebar
- Blurred + saturated backdrop
- Dark mode: faint cyan right border, active items get glow shadow

---

## 7. Layout Patterns

### Spacing
- Between sections: `space-y-24`
- Inside sections: `space-y-10`
- Card grids: `gap-6`
- Use `<Separator />` between major sections

### Common Layouts
- **Feature grid**: `grid gap-6 sm:grid-cols-2 lg:grid-cols-3` with `<Card>` children
- **Glass stage**: `<div className="card-container">` wrapping a card grid
- **Split feature**: `<Card>` with `grid md:grid-cols-2` — content left, `.card-container` visual right

### Icon Containers
Rounded shapes with tinted backgrounds. Sizes: `size-9` (steps), `size-10` (cards), `size-12` (CTAs).
Patterns: `bg-primary/10 text-primary`, `bg-accent text-accent-foreground`, etc.

---

## 8. Animations

- `.stagger-in`: Apply to parent. Children fade up with 80ms stagger (max 8 children).
- `.animate-shimmer`: Infinite horizontal shimmer, 1.5s.
- All animations disabled when `prefers-reduced-motion: reduce`.

---

## 9. Hard Rules

### DO
- ✅ `hsl(var(--token))` for all colors — no hardcoded hex
- ✅ `font-sans` (Poppins) for everything except the ONE hero title
- ✅ `.card-container` to wrap card groups for depth
- ✅ `.title-page` for section headlines (auto-gradient)
- ✅ `stagger-in` on grids for entrance animations
- ✅ `text-muted-foreground` for secondary text

### DON'T
- ❌ Orbitron for anything but the single hero title
- ❌ Nest `.card-container` inside `.card-container`
- ❌ Flat white backgrounds — use tinted tokens
- ❌ Plain headings without gradient title classes
- ❌ Hardcode dark-mode colors — use token system
- ❌ Opaque card backgrounds — translucency is core
- ❌ `.card-container` lighter than `.card` in dark mode
