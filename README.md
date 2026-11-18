# TalentXcel Nexus — Corporate Website

Official corporate website repository for **TalentXcel** ([talentxcel.co.in](https://talentxcel.co.in)).

TalentXcel operates as an integrated technology and workforce solutions company, providing enterprise software engineering, artificial intelligence automation, specialized IT staffing, and corporate talent academies.

---

## 1. Overview & Business Positioning

TalentXcel brings together three interconnected business pillars:
1. **Technology & AI Solutions:** Enterprise software engineering, AI/ML systems, intelligent process automation, and cloud infrastructure.
2. **Talent & Workforce Solutions:** Specialized IT staffing, permanent recruitment, contract augmentation, executive search, and Recruitment Process Outsourcing (RPO).
3. **Learning & Talent Development:** Corporate technology training, university partnerships, and internship production academies.

### Ecosystem Hierarchy
- **[talentxcel.co.in](https://talentxcel.co.in):** Parent corporate identity, enterprise solutions, governance, and investor relations.
- **[talentxcel.in](https://talentxcel.in):** Career, recruitment, and candidate talent marketplace platform.
- **[talentxcel.net](https://talentxcel.net):** Learning portal and professional skill-development ecosystem.
- **[chatr.chat](https://chatr.chat):** Real-time conversational AI and communication layer.

---

## 2. Technology Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite 5 (independent React SWC plugin)
- **Styling:** Tailwind CSS, PostCSS, class-variance-authority
- **UI Components:** Radix UI primitives, Lucide React icons
- **Routing:** React Router DOM (v6) with route-level code splitting (`React.lazy` + `Suspense`)
- **Metadata & SEO:** React Helmet Async, Schema.org JSON-LD
- **State & Query:** TanStack React Query

---

## 3. Local Development Setup

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation
```bash
# Clone repository
git clone https://github.com/Sanyahtalentxcel/talentxcel-nexus.git
cd talentxcel-nexus

# Install dependencies
npm install

# Start local development server
npm run dev
```

The development server will bind to `http://localhost:8080/` by default.

---

## 4. Production Build & Verification

```bash
# Type check and build production bundle
npm run build

# Preview production build locally
npm run preview
```

Output is emitted to the `dist/` directory.

### Performance & Code Splitting
Route components are split dynamically via `React.lazy()` to optimize initial bundle sizes, reducing the initial JavaScript payload to well under standard mobile thresholds.

---

## 5. Single Page Application (SPA) Hosting

To ensure that direct navigation to subpaths (e.g. `/about`, `/services`, `/contact`) resolves without 404 errors, the repository includes native rewrite configurations:

- **Netlify:** `public/_redirects` (`/*  /index.html  200`)
- **Vercel:** `vercel.json` rewrite configuration
- **GitHub Pages / Static Servers:** `public/404.html` fallback redirect

---

## 6. Environment Variables

Copy `.env.example` to `.env.local` for local customizations:

```env
VITE_APP_ENV=production
VITE_SITE_URL=https://talentxcel.co.in
VITE_CONTACT_API_ENDPOINT=
```

---

## 7. Governance & Contribution Policy

- **Branching:** Feature and maintenance work must be developed on dedicated topic branches (e.g., `chore/*`, `feat/*`).
- **Evidence-First Publishing:** No unverified metrics, fake employee profiles, or fabricated case studies may be published. Unverified statutory or commercial claims must be submitted to the corporate governance desk.
- **Independence:** The codebase operates independently of third-party website builders. All builds and assets are self-contained.

---

## 8. Corporate Contact & Inquiries

- **Corporate Desk:** `contact@talentxcel.co.in`
- **Careers:** `careers@talentxcel.co.in`
- **Investor Relations:** `investors@talentxcel.co.in`
- **Office Location:** Plot C, ESquare Building, Sector-45, Noida, Uttar Pradesh 201301, India
