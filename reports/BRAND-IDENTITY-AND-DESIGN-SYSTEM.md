# TalentXcel Corporate Brand Identity & Design System
**Document Version:** 2.0  
**Brand:** TalentXcel  
**Core Descriptor:** Integrated Technology & Talent Solutions  
**Date:** November 2026

---

## 1. Brand Philosophy & Essence

TalentXcel operates at the critical nexus of modern enterprise engineering and human capital mobility. We reject the false dichotomy between pure-play software consulting and transactional recruitment staffing. In an economy increasingly shaped by artificial intelligence and distributed engineering, enterprise capability depends on the continuous interplay of **robust digital architecture** and **exceptional talent**.

### The Core Brand Idea
> **"Technology That Moves Business Forward. Talent That Makes It Possible."**

### Brand Attributes & Emotional Impact
The visual and verbal identity must evoke six essential feelings in any corporate executive, CHRO, CTO, enterprise procurement officer, or university leader:
1. **Premium & Confident:** Authoritative, disciplined, modern, and poised.
2. **Technology-Led:** Grounded in enterprise architecture, AI systems, and modern cloud patterns.
3. **Human-Centred:** Respecting the ambitions of engineers, professionals, and students.
4. **Transparent & Trustworthy:** Evidence before claims; absolute authenticity in leadership and capabilities.
5. **International:** Scalable delivery across India, Europe, and the Middle East.
6. **Enterprise-Ready:** Rigorous SLAs, data governance, and operational dependability.

---

## 2. Color Palette & Systematic Token Architecture

The TalentXcel color system pairs deep institutional blues with crisp structural slates and purposeful accents, creating an intellectual, calm, and high-trust corporate aesthetic.

```
+-----------------------------------------------------------------------------------+
| TALENTXCEL COLOR PALETTE                                                          |
+-----------------------------------------------------------------------------------+
| Primary Blue      | HSL 214, 95%, 45%  | #0B63E5 | Primary Brand & Headings       |
| Deep Navy         | HSL 222, 47%, 11%  | #0F172A | Dark Surface & High-Contrast   |
| Pure Background   | HSL 0, 0%, 99%     | #FCFCFC | Canvas & Negative Space        |
| Secondary Slate   | HSL 210, 10%, 96%  | #F1F3F5 | Elevated Cards & Containers    |
| Text Muted        | HSL 214, 12%, 45%  | #64748B | Subtitles & Secondary Copy     |
| Border Light      | HSL 214, 12%, 92%  | #E2E8F0 | Crisp Structural Dividers      |
| Vibrant Accent    | HSL 25, 85%, 55%   | #EB681E | CTAs & Innovation Highlights   |
| Ecosystem Green   | HSL 142, 71%, 45%  | #22C55E | CHATR Layer & Positive Metric  |
+-----------------------------------------------------------------------------------+
```

### Contrast & Ergonomics
- Text meets **WCAG 2.1 AA** contrast requirements (minimum 4.5:1 for body copy and 3.0:1 for large display headers).
- Light and Dark modes are supported through HSL CSS variable tokens mapped dynamically across cards, borders, text, and interactive states.

---

## 3. Typography System

The typography is built around **Inter** paired with clean system sans fallbacks, styled with OpenType typographic features (`"rlig" 1, "calt" 1`) to deliver crisp geometric clarity at all viewport resolutions.

### Type Hierarchy
| Scale Element | Font Size | Line Height | Tracking | Weight | Semantic Role |
|---|---|---|---|---|---|
| **Display 1 (Hero)** | 3.75rem – 4.5rem (60–72px) | 1.08 | -0.025em | Bold (700) | Hero Headline |
| **Heading 1 (H1)** | 2.5rem – 3.25rem (40–52px) | 1.15 | -0.02em | Bold (700) | Page Title |
| **Heading 2 (H2)** | 1.875rem – 2.25rem (30–36px) | 1.25 | -0.015em | Bold (700) | Section Header |
| **Heading 3 (H3)** | 1.25rem – 1.5rem (20–24px) | 1.35 | -0.01em | SemiBold (600) | Card & Feature Title |
| **Body Large** | 1.125rem (18px) | 1.6 | normal | Regular (400) | Lead / Subtitle Copy |
| **Body Standard** | 0.9375rem – 1.0rem (15–16px) | 1.65 | normal | Regular (400) | Paragraph & Article |
| **Body Small** | 0.8125rem – 0.875rem (13–14px) | 1.5 | normal | Medium (500) | Card Meta & Details |
| **Micro / Overline** | 0.75rem (12px) | 1.4 | +0.05em | SemiBold (600) | Category Badges (UPPERCASE) |

---

## 4. Component Design Standards

### A. Buttons & Interactive Controls
- **Default (Primary):** Solid TalentXcel Blue (`hsl(214, 95%, 45%)`) with high-contrast white text, subtle hover lift, and focus ring.
- **Secondary / Outline:** 1px border (`border-border/80`) with soft background hover transition (`hover:bg-primary/5 hover:text-primary`).
- **Platform Button:** Slate neutral with external link icon indicator for ecosystem portals.
- **Hero Glass:** Translucent backdrop blur for hero gradients (`bg-white/10 backdrop-blur-md border-white/20`).
- **Touch Target:** Minimum 44px height across all mobile viewports.

### B. Cards & Elevation
- **Card Surface:** `bg-card` with 1px border (`border-border/60`).
- **Shadow Scale:**
  - `shadow-soft`: Subdued depth for resting cards.
  - `shadow-medium`: Interactive hover state elevation (`hover:-translate-y-1 hover:shadow-medium`).
  - `shadow-large`: Floating modals, dropdowns, and key visual assets.
- **Corner Radius:** Standardized `1.5rem` (`rounded-2xl` and `rounded-3xl`) for balanced geometric flow.

### C. Badges & Indicators
- Category overlines styled as rounded pills:
  `inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider`.

---

## 5. Photography & Imagery Standards

1. **Authentic Imagery Priority:** Real leadership portraits, genuine corporate activities, and documented engineering/academic events are prioritized.
2. **Illustrative & Abstract Assets:** Where photographic documentation is pending, use high-resolution abstract architectural or engineering graphics.
3. **No Deceptive Stock Photos:** Never present stock photographs as specific TalentXcel executives, founders, or proprietary office facilities.
4. **Aspect Ratios:** Standardized `16:9` for section showcases, `4:3` for cards, and `1:1` for portraits/monograms.

---

## 6. Ecosystem Branding Consistency

```
                                  TALENTXCEL CORPORATE
                                   (talentxcel.co.in)
                                            |
        +-----------------------------------+-----------------------------------+
        |                                   |                                   |
        v                                   v                                   v
+-----------------------+       +-----------------------+       +-----------------------+
|  TALENTXCEL PLATFORM  |       |  TALENTXCEL LEARNING  |       |       CHATR AI        |
|    (talentxcel.in)    |       |   (talentxcel.net)    |       |     (chatr.chat)      |
+-----------------------+       +-----------------------+       +-----------------------+
| Talent Marketplace    |       | Academy & Upskilling  |       | AI Communications     |
| Blue & Slate Accents  |       | Academic Deep Blue    |       | Signature Brand Green |
+-----------------------+       +-----------------------+       +-----------------------+
```

Each ecosystem product maintains operational distinctiveness while adhering to the parent brand's typographic and structural standards.
