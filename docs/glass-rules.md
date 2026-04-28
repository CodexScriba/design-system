# Glass Design Rules (.card-container)

The `.card-container` is a versatile glassmorphism utility that provides depth and premium polish to the interface. To maintain a clean and professional look, follow these rules for its application.

## 1. The "Stage" Rule (Macro-Container)
**Use as a wrapper** for major sections or groups of related content.
- **Context**: Grouping the "3 Steps" process or a "Pricing" grid.
- **Effect**: It creates a unified "platform" that anchors multiple smaller elements.
- **Hierarchy**: `Page Background` → `.card-container` (Stage) → `.card` (Content).

## 2. The "Jewel" Rule (Micro-Container)
**Use as an internal element** to highlight specific visuals, interactive demos, or high-tech features.
- **Context**: A dashboard preview inside a feature card, or a code snippet showcase.
- **Effect**: It acts as a "window" or a "stage-within-a-stage," signaling that the content inside is special or more advanced.
- **Hierarchy**: `Page Background` → `.card` (Container) → `.card-container` (Jewel).

## 3. The "No Double-Glass" Rule
**Never nest** a `.card-container` directly inside another `.card-container`.
- **Reason**: Layering multiple backdrop-blurs leads to a "muddy" or "milky" appearance that loses sharpness and visual clarity.
- **Alternative**: Use a standard `.card` or a simple tinted `div` if you need a container inside a glass stage.

## 4. Lighting & Direction
- Always ensure the **Highlight** (top-left) matches the global light source of the page.
- In **Dark Mode**, the glass should feel like a "dark pool" with a faint edge light, rather than a milky overlay.
