# TALENTXCEL 90-DAY GROWTH ACQUISITION EXECUTION ROADMAP

**Entity:** TalentXcel Services Private Limited (CIN: U85500UP2024PTC206390)  
**Corporate Headquarters:** Office 1917, 19th Floor, E-Square Building, Sector 96, Noida, UP 201301  
**Target Digital Platform:** https://talentxcel.co.in (Ecosystem: talentxcel.in, talentxcel.net, chatr.chat)  
**Operational Horizon:** November 2026 – February 2027  
**Execution Lead:** Chief Growth Officer & Multi-Platform Operating Committee  
**Document Status:** OFFICIAL MASTER 90-DAY OPERATIONAL ROADMAP  

---

## 1. Roadmap Architecture & Four Sequential Execution Phases

The 90-Day Growth Program is structured into four disciplined, non-overlapping phases:

```
+--------------------------------------------------------------------------+
|                  90-DAY MASTER GROWTH PHASING CALENDAR                   |
+--------------------------------------------------------------------------+
| PHASE 1 (Days 01–10): MEASUREMENT, AUDIT & FOUNDATION SETUP              |
| PHASE 2 (Days 11–30): CORE FOUNDATION, RESEARCH LAUNCH & DISTRIBUTION   |
| PHASE 3 (Days 31–60): SCALING WHAT WORKS & INSTITUTIONAL CO-MARKETING   |
| PHASE 4 (Days 61–90): CHANNEL OPTIMIZATION, CONVERSION & REVENUE AUDIT  |
+--------------------------------------------------------------------------+
```

---

## 2. Phase 1: Days 01–10 — Measurement, Audit & Foundation Setup

**Core Objective:** Establish technical hygiene, harden crawling rules, verify telemetry, and eliminate blockers before creating new content assets.

- [x] **Day 01–02: Ecosystem Domain & Telemetry Verification:**
  - Audit all four destination domains (`talentxcel.co.in`, `talentxcel.in`, `talentxcel.net`, `chatr.chat`).
  - Document DNS and Google Search Console requirements for `sc-domain:talentxcel.co.in`.
  - Validate Google Analytics 4 dataLayer event dispatch architecture.
- [x] **Day 03–04: Technical Crawling & Indexation Hardening:**
  - Audit and deploy hardened `public/robots.txt` (Disallowing `/revenue-portal` and `/admin`).
  - Validate exactly 20 canonical URLs in `public/sitemap.xml`.
  - Confirm self-referential canonicals across all 15 React application routes.
- [x] **Day 05–06: Spacing Harmonization & UX Verification:**
  - Complete vertical whitespace audit across all page templates.
  - Eliminate compounding section padding (reduced from 192px gap to 112px standard).
  - Verify zero console errors, zero build warnings, and mobile responsiveness.
- [x] **Day 07–08: Multi-Touch UTM Tracking Engine Deployment:**
  - Build and integrate `src/services/growthTracking.ts` to capture first/last touch attribution.
  - Connect lead capture forms so inbound campaigns attach directly to CRM records.
  - Deploy outbound ecosystem referral logger.
- [x] **Day 09–10: Growth OS Dashboard Specification:**
  - Deploy Growth OS console inside `RevenuePortal.tsx`.
  - Surface active domain statuses, UTM lead channel breakdown, and experiment registers.
  - Prepare Week 1 baseline reporting deliverables.

*Milestone Gate 1 Sign-Off: Zero mass content published until measurement foundation is 100% verified.*

---

## 3. Phase 2: Days 11–30 — Core Foundation, Research Launch & Distribution

**Core Objective:** Deploy the first original research asset, initiate founder-led executive commentary, and activate structured institutional outreach.

- [ ] **Day 11–14: Publish Cornerstone Research Asset 01:**
  - Complete and publish the *India IT Hiring & Engineering Salary Trends Report 2026–2027*.
  - Embed interactive salary benchmarks and download gates on `talentxcel.co.in` and `talentxcel.in`.
  - Attach valid JSON-LD Article/Report structured schema.
- [ ] **Day 15–18: Activate Founder-Led Thought Leadership:**
  - Launch Founder Sanobar Jahan's bi-weekly executive column on LinkedIn.
  - Release first analytical carousel: "Why 90-Day Staffing Replacement Warranties Must Replace Resume-Broker Spam".
  - Engage with tech founders, CTOs, and HR directors in comment discussions.
- [ ] **Day 19–22: Launch Short-Form Educational Video Series 01:**
  - Record and publish 4 vertical short explainers (30–60s) on YouTube Shorts and LinkedIn.
  - Focus on practical topics: ATS resume filtering, developer pod economics, DPDP Act candidate privacy.
  - Embed UTM-tagged destination links in video descriptions.
- [ ] **Day 23–26: Institutional University Outreach (Cohort 1):**
  - Compile directory of 30 accredited engineering deans and TPOs in Delhi-NCR and Western UP.
  - Dispatch structured MoU overview packet and Credit-Aligned AI Elective syllabus.
  - Schedule introductory virtual briefings with interested college leadership.
- [ ] **Day 27–30: Mid-Month Experiment Review & Conversion Audit:**
  - Evaluate lead form submission rates on `/corporate-training` and `/staffing-solutions`.
  - Triage first inbound enterprise inquiries inside the Revenue Operations portal.
  - Adjust CTA wording and form fields based on preliminary drop-off patterns.

*Milestone Gate 2 Sign-Off: Minimum 1 research report live, 4 videos distributed, 10 college deans briefed.*

---

## 4. Phase 3: Days 31–60 — Scaling What Works & Institutional Co-Marketing

**Core Objective:** Double down on highest-converting acquisition channels, secure initial institutional MoUs, and publish Research Asset 02.

- [ ] **Day 31–35: Publish Cornerstone Research Asset 02:**
  - Release the *India Corporate AI Skills Readiness Benchmark*.
  - Distribute findings across HR networks, LinkedIn, and national business journalists.
  - Host a 45-minute live executive webinar: "Reclaiming 3–5 Hours Weekly per Employee with Enterprise GenAI".
- [ ] **Day 36–42: Formalize First Institutional Campus MoUs:**
  - Execute bilateral agreements with initial partner engineering colleges.
  - Co-publish official MoU announcements on college `.ac.in` portals linking to TalentXcel.
  - Launch student candidate registration drives on `talentxcel.net` and `talentxcel.in`.
- [ ] **Day 43–48: Expand High-Intent Commercial Keyword Clusters:**
  - Author and publish deep pillar guides for `corporate ai training india` and `dedicated developer pods`.
  - Implement structured FAQ accordions with Schema.org FAQPage JSON-LD.
  - Cross-link related solution scenarios from `/case-studies`.
- [ ] **Day 49–54: Launch Opt-in Corporate L&D Executive Newsletter:**
  - Deliver inaugural edition of *The TalentXcel Engineering & Workforce Dispatch*.
  - Distribute to opt-in enterprise contacts, client alumni, and partner HR leads.
- [ ] **Day 55–60: Controlled Paid Search Acquisition Pilot (Subject to Owner Approval):**
  - Run initial Google Search Ads test strictly on high-intent commercial terms (e.g., "hire dedicated developer pods noida", "corporate ai workshop delhi ncr").
  - Budget capped at pre-approved trial tier; verify cost-per-qualified-lead (target < ₹3,500/MQL).

*Milestone Gate 3 Sign-Off: First institutional MoU executed, 1 live webinar hosted, paid test evaluated.*

---

## 5. Phase 4: Days 61–90 — Channel Optimization, Conversion & Revenue Audit

**Core Objective:** Eliminate underperforming channels, maximize conversion velocity on high-impression pages, and audit realized revenue.

- [ ] **Day 61–68: Comprehensive Channel Attribution & ROI Review:**
  - Extract multi-touch attribution data from `revenueOperations.ts` and connected analytics.
  - Identify top 3 highest-converting channels by realized revenue (not vanity traffic).
  - Reallocate time and editorial resources away from low-yield social platforms.
- [ ] **Day 69–75: Search Engine Optimization & CTR Refinement:**
  - Identify pages with high impressions but low CTR in Google Search Console.
  - Rewrite meta titles and descriptions to improve click-through rates.
  - Optimize pages with high clicks but weak conversion (form field reductions, trust badge additions).
- [ ] **Day 76–82: Scale Institutional & Employer Referrals:**
  - Launch semester internship hackathons across partner engineering campuses.
  - Expand Preferred Vendor List (PVL) outreach with established enterprise employers.
  - Review cross-domain referral volumes to `talentxcel.in` and `talentxcel.net`.
- [ ] **Day 83–90: Master 90-Day Growth & Revenue Audit:**
  - Calculate total unique visitors, search impressions, organic clicks, and outbound referrals.
  - Triage all enterprise leads: count total proposals sent, won contracts, and realized collected revenue.
  - Formulate the Q2–Q4 Scale Strategy targeting sustainable 100,000+ monthly visits across the ecosystem.

*Milestone Gate 4 Sign-Off: Formal presentation of realized business growth and revenue ROI to company leadership.*
