---
name: "Eleni Chasioti Portfolio"
description: "A confident systems designer portfolio for product, engineering, and spatial-computing work."
colors:
  canvas: "#fafafa"
  surface: "#ffffff"
  ink: "#111111"
  ink-secondary: "#555555"
  ink-muted: "#999999"
  border-soft: "#0000000f"
  border-strong: "#0000001f"
  accent-soft: "#1111110f"
typography:
  display:
    fontFamily: "Instrument Serif, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.75rem, 6vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(2rem, 5vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0"
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "5": "1.25rem"
  "6": "1.5rem"
  "8": "2rem"
  "10": "2.5rem"
  "12": "3rem"
  "16": "4rem"
  "20": "5rem"
  "24": "6rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: "0.65rem 1.4rem"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.65rem 1.4rem"
  tag:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "0.25rem 0.75rem"
---

# Design System: Eleni Chasioti Portfolio

## 1. Overview

**Creative North Star: "Confident Systems Designer"**

The portfolio should feel like the work of someone who can understand a complex system, give it structure, and make it legible. The core visual language is crisp and professional: strong hierarchy, purposeful imagery, restrained surfaces, and creative moments that demonstrate judgment.

Light layering is welcome when it helps establish hierarchy. Effects should remain selective. Avoid default portfolio-generator styling, decorative glass panels, repetitive card grids, and repeated visual scaffolding that competes with the projects.

**Key Characteristics:**
- Confident hierarchy that helps recruiters scan quickly.
- Tactile, assured interactions with compact radii and clear states.
- Lightly layered surfaces with controlled shadows.
- Project imagery and case-study detail as the main visual evidence.
- Creative treatments used to explain systems, not decorate empty space.

## 2. Colors

The palette is a restrained monochrome foundation. Project imagery and poster compositions carry color while the portfolio shell stays quiet and precise.

### Primary
- **Carbon Ink** (`#111111`): Primary text, dark buttons, active states, and high-confidence accents.

### Neutral
- **Studio Canvas** (`#fafafa`): Default page background.
- **Clean Surface** (`#ffffff`): Raised surfaces and content areas.
- **Measured Gray** (`#555555`): Supporting body text.
- **Quiet Gray** (`#999999`): Metadata only, with contrast verified against its background.
- **Soft Rule** (`#0000000f`): Dividers and subtle boundaries.
- **Firm Rule** (`#0000001f`): Interactive borders and stronger separation.

### Named Rules
**The Project Color Rule.** The shell remains restrained so each case study can carry its own palette without visual competition.

## 3. Typography

**Display Font:** Instrument Serif (with Georgia fallback)
**Body Font:** Inter (with system sans-serif fallbacks)

**Character:** The pairing balances a human, expressive signature with a practical interface voice. Instrument Serif is reserved for moments of identity; Inter carries navigation, labels, body copy, and systems information.

### Hierarchy
- **Display** (400, `clamp(2.75rem, 6vw, 4.5rem)`, 1.05): Signature name and selective editorial headings.
- **Headline** (600, `clamp(2rem, 5vw, 4.5rem)`, 1.2): Strong section hierarchy and page titles.
- **Title** (600, `1.25rem` to `1.75rem`, 1.3): Project and content titles.
- **Body** (400, `1rem`, 1.7): Descriptions and case-study prose. Keep long reading measures within 65-75 characters.
- **Label** (600, `0.6875rem`, short uppercase only): Metadata, compact navigation, and occasional section cues.

### Named Rules
**The Signature Type Rule.** Use the serif sparingly. It is a signature, not a default treatment for every heading.

## 4. Elevation

The portfolio is lightly layered. Most surfaces should remain flat at rest, separated by spacing, background tone, and a soft rule. Small shadows may support interactive lift or image framing. Diffuse glass effects should be rare and purposeful.

### Shadow Vocabulary
- **Small Lift** (`0 2px 8px rgba(0, 0, 0, 0.04)`): Hover feedback and compact interactive elements.
- **Medium Lift** (`0 4px 16px rgba(0, 0, 0, 0.06)`): Select image frames and raised content.
- **Large Lift** (`0 8px 32px rgba(0, 0, 0, 0.08)`): Reserved for moments that clearly need visual depth.

### Named Rules
**The Light Layer Rule.** Use one quiet layer before reaching for glass, blur, or a larger shadow.

## 5. Components

### Buttons
- **Shape:** Compact rectangular controls with a small radius (`6px`).
- **Primary:** Carbon Ink background, Clean Surface text, and `0.65rem 1.4rem` padding.
- **Hover / Focus:** Use a small lift, strong visible focus state, and quick easing. Keep the movement subtle.
- **Secondary / Ghost:** Secondary buttons use a firm border; ghost actions rely on text and a deliberate underline state.

### Chips
- **Style:** Compact full-pill metadata with Carbon Ink text over a soft ink tint.
- **State:** Use chips for short classifications, not as decorative filler.

### Cards / Containers
- **Corner Style:** Prefer square corners or compact radii. Use `10px` to `16px` only where the content benefits from containment.
- **Background:** Clean Surface on Studio Canvas.
- **Shadow Strategy:** Flat by default; add Small Lift or Medium Lift where hierarchy needs support.
- **Border:** Use Soft Rule or Firm Rule for structure.
- **Internal Padding:** Follow the spacing scale, usually `1rem` to `2rem`.

### Navigation
- **Style:** Compact sticky navigation with restrained uppercase labels, a monogram, clear active state, and a direct mobile menu.
- **States:** Preserve keyboard focus, hover feedback, and readable contrast.

### Project Posters
- **Style:** Animated compositions act as compact project previews. They can carry richer palettes and bolder motion than the site shell while remaining legible.

## 6. Do's and Don'ts

### Do:
- **Do** prioritize work samples, screenshots, and project detail as evidence.
- **Do** use confident type scale and spacing so recruiters can scan before reading deeply.
- **Do** keep surface layering light and tactile with controlled borders, shadows, and hover states.
- **Do** verify WCAG 2.2 AA contrast, focus states, touch targets, semantic structure, and reduced-motion fallbacks.
- **Do** let each case study use its own project-specific color world within the restrained shell.

### Don't:
- **Don't** make this look like an AI slop website: avoid generic template compositions and visual decisions copied from a default portfolio generator.
- **Don't** use repetitive card grids when a stronger composition or clearer content structure would work better.
- **Don't** use gratuitous glassmorphism, purple or blue gradients, or decorative effects without purpose.
- **Don't** repeat tiny uppercase labels or numbered markers as automatic scaffolding across every section.
- **Don't** let creative treatments compete with the projects or make complex systems harder to understand.
