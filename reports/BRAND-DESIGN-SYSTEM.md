# TALENTXCEL BRAND DESIGN SYSTEM & TOKEN SPECIFICATION

**Brand:** TalentXcel  
**Positioning:** Integrated Technology & Talent Solutions  
**Brand Statement:** Technology That Moves Business Forward. Talent That Makes It Possible.  
**Specification Version:** 2.0 (World-Class Corporate Transformation)  
**Status:** Implemented in Codebase (`src/index.css`, `tailwind.config.ts`, `src/components/`)

---

## 1. Design Philosophy & Architectural Principles

TalentXcel’s corporate design system is inspired by the understated confidence, typographic clarity, and structural balance of world-leading global technology consultancies and enterprise software leaders.

### Key Principles:
1. **Restraint Over Decoration:** Zero gratuitous floating shapes, zero neon rainbow gradients, and zero distracting animations. Visual interest is achieved through crisp typographic hierarchy, micro-interactions, and balanced spacing.
2. **Human-Centred & Technology-Led:** Technology is presented through clear systems architecture and real delivery frameworks; human talent is presented with authentic governance without synthetic personas.
3. **Enterprise Credibility:** Contrast ratios exceed WCAG 2.1 AA standards (minimum 4.5:1 for body copy; 3:1 for large text).
4. **Cohesive Component Architecture:** Modular design tokens unified across Tailwind CSS utility classes and native CSS variables.

---

## 2. Color Palette & Semantic Design Tokens

The palette is engineered specifically for corporate and institutional decision-makers (CEOs, CHROs, CTOs, and university partners).

| Role | Token Name | Hex Code | HSL Value | Tailwind Utility | Purpose / Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Midnight Navy** | `--foreground`, `brand-navy` | `#101B32` | `221 51% 13%` | `text-brand-navy`, `bg-brand-navy` | Primary text color, executive card headers, dark container backdrops |
| **Corporate Blue** | `--primary`, `brand-blue` | `#1769E8` | `216 83% 50%` | `bg-primary`, `text-primary` | Primary corporate accent, active pills, primary buttons, focal highlights |
| **Electric Blue** | `--primary-hover`, `brand-electric` | `#3985FF` | `217 100% 61%` | `hover:bg-primary-hover`, `text-brand-electric` | Interactive button hover states, vibrant graphical accents, dark mode accents |
| **Pure White** | `--card`, `brand-white` | `#FFFFFF` | `0 0% 100%` | `bg-white`, `bg-card` | Surface card background, button text on primary surfaces |
| **Soft Background** | `--background`, `brand-soft` | `#F5F7FA` | `216 33% 98%` | `bg-brand-soft`, `bg-background` | Global page canvas, alternating section backdrops, subtle card contrasts |
| **Charcoal** | `--card-foreground`, `brand-charcoal` | `#202633` | `221 23% 16%` | `text-brand-charcoal` | Secondary headings, technical attribute labels |
| **Muted Text** | `--muted-foreground`, `brand-muted` | `#667085` | `221 13% 46%` | `text-brand-muted` | Descriptive paragraph body copy, metadata dates, breadcrumb trails |
| **Slate Border** | `--border`, `brand-slate` | `#E4E7EC` | `220 13% 90%` | `border-border`, `border-border/80` | Subtle hairline dividers, card containers, input field strokes |
| **Ecosystem Green** | `--chatr` | `#16A34A` | `142 71% 42%` | `text-emerald-600`, `bg-emerald-50` | CHATR AI ecosystem badge, active operations indicators, SLA checkmarks |
| **Ecosystem Amber** | `--learning` | `#EA580C` | `25 85% 55%` | `text-amber-700`, `bg-amber-50` | TalentXcel Learning portal indicators, academy program badges |

---

## 3. Typography Hierarchy

The typographic system utilizes **Inter** (`font-sans`), loaded with tabular numerals and clean kerning (`rlig 1, calt 1`).

```
Display / Hero Title:     text-3xl sm:text-4xl lg:text-[3.25rem] xl:text-[3.5rem] font-bold leading-[1.15] tracking-tight
Section Heading (H2):     text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight
Card Title (H3):          text-lg sm:text-xl font-bold text-brand-navy tracking-tight
Eyebrow Pill Label:       text-xs font-semibold uppercase tracking-wider
Body Large (Lead Copy):   text-base sm:text-lg text-brand-muted leading-relaxed
Body Standard (Paragraph):text-sm sm:text-base text-brand-muted leading-relaxed
Metadata / Caption:       text-xs text-brand-muted leading-normal
Mono / Domain Tags:       text-xs font-mono font-medium text-brand-muted
```

---

## 4. Elevation, Shadows & Borders

| Token | CSS Definition | Usage |
| :--- | :--- | :--- |
| **Shadow Soft** | `0 1px 3px rgba(16, 27, 50, 0.05), 0 1px 2px rgba(16, 27, 50, 0.08)` | Static cards, input controls, navigation bars |
| **Shadow Medium** | `0 4px 14px rgba(16, 27, 50, 0.07), 0 2px 6px rgba(16, 27, 50, 0.04)` | Hover states on interactive cards, mobile drawers |
| **Shadow Large** | `0 16px 36px rgba(16, 27, 50, 0.08), 0 6px 12px rgba(16, 27, 50, 0.04)` | Hero visual frame, modal overlays, dropdown menus |
| **Border Radius** | `0.625rem` (10px standard), `1rem` (16px cards), `9999px` (pills) | Cohesive geometric curvature avoiding cartoonish bubbles |

---

## 5. Interactive Components & States

1. **Buttons:**
   - **Primary:** `bg-primary hover:bg-primary-hover text-white font-semibold shadow-soft hover:shadow-medium transition-all`
   - **Secondary / Outline:** `border border-slate-300 text-brand-navy hover:bg-white hover:border-slate-400 font-semibold transition-all`
   - **Ecosystem:** Clean outline cards with subtle accent badges rather than high-saturation solid blocks.
2. **Navigation Bar:**
   - Sticky with dynamic scroll blur: `bg-white/90 backdrop-blur-md border-b border-border/80`.
   - Clear active states: `text-primary bg-primary/10 font-semibold`.
   - Subtle chevron-animated dropdown for product ecosystem.
3. **Accessibility:**
   - Focus rings: `focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`.
   - Semantic ARIA attributes on mobile menu triggers (`aria-expanded`, `aria-label`, `role="menu"`).
   - Motion safety: All CSS transitions adhere to `@media (prefers-reduced-motion: reduce)`.
