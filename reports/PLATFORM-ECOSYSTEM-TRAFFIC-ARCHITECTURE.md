# TALENTXCEL MULTI-PLATFORM ECOSYSTEM TRAFFIC & CONVERSION ARCHITECTURE

**Entity:** TalentXcel Services Private Limited (CIN: U85500UP2024PTC206390)  
**Corporate Headquarters:** Office 1917, 19th Floor, E-Square Building, Sector 96, Noida, UP 201301  
**Target Digital Platform:** https://talentxcel.co.in (Ecosystem: talentxcel.in, talentxcel.net, chatr.chat)  
**Date:** November 2026  
**Auditor:** Multi-Platform Enterprise Architect & Systems Integration Lead  
**Document Status:** OFFICIAL PRODUCTION OPERATING PROCEDURE  

---

## 1. Architectural Boundaries: Four Independent Ecosystem Destinations

To achieve maximum search discoverability and conversion efficiency, TalentXcel maintains **strict audience boundaries** across its four digital properties. We never publish duplicate text or mirror entire sites:

```
+-----------------------------------------------------------------------------------------+
|                           TALENTXCEL ECOSYSTEM DOMAIN MATRIX                            |
+-----------------------------------------------------------------------------------------+
| DOMAIN                | PRIMARY AUDIENCE           | PRIMARY CONVERSION GOAL             |
+-----------------------+----------------------------+-------------------------------------+
| talentxcel.co.in      | Enterprise CXOs, HR, Deans | Training Proposals, Staffing MSAs   |
| talentxcel.in         | Candidates & Job Seekers   | Candidate Signups, Job Applications |
| talentxcel.net        | Students & Tech Learners   | Course Enrollments, Skill Badges    |
| chatr.chat (/chatr)   | Business & Team Users      | Web Client Launch, App Downloads    |
+-----------------------------------------------------------------------------------------+
```

---

## 2. Contextual Cross-Domain Referral Pathways

Traffic moves between domains through **natural contextual touchpoints** rather than forced reciprocal link blocks:

### Pathway 01: Corporate Careers -> Candidate Portal (`talentxcel.in`)
- **Origin:** `https://talentxcel.co.in/careers` (or `/case-studies`)
- **Context:** An engineering candidate reads about TalentXcel's culture, active focus requisitions, or technical case studies.
- **Referral Anchor:** "Explore All Active Openings on TalentXcel Candidate Portal ↗"
- **Destination URL:** `https://talentxcel.in/?utm_source=talentxcel_corp&utm_medium=ecosystem_referral&utm_campaign=careers_job_board`
- **Result:** Candidate transitions seamlessly from corporate employer brand to live candidate application workflow.

### Pathway 02: University Partnerships -> Learning Hub (`talentxcel.net`)
- **Origin:** `https://talentxcel.co.in/university-partnerships`
- **Context:** A university engineering student or faculty dean explores curriculum frameworks.
- **Referral Anchor:** "Access Co-Branded Coursework & Innovation Lab Portal ↗"
- **Destination URL:** `https://talentxcel.net/?utm_source=talentxcel_corp&utm_medium=ecosystem_referral&utm_campaign=university_academic_portal`
- **Result:** Direct transition to student enrollment and sandbox environments.

### Pathway 03: Candidate Job Board -> Corporate Staffing Mandate (`talentxcel.co.in`)
- **Origin:** `https://talentxcel.in` (Employer / Recruiter tab)
- **Context:** An enterprise employer seeking full-service contingent recruitment or managed pods rather than self-service job postings.
- **Referral Anchor:** "Engage Dedicated Engineering Pods & Executive Search via TalentXcel Corporate ↗"
- **Destination URL:** `https://talentxcel.co.in/staffing-solutions?utm_source=talentxcel_in&utm_medium=ecosystem_referral&utm_campaign=employer_portal_upsell`
- **Result:** High-value B2B conversion onto our corporate staffing desk.

### Pathway 04: Corporate Solutions -> Secure Communications Layer (`chatr.chat`)
- **Origin:** `https://talentxcel.co.in/chatr` (and `/services/it-consulting-managed-services`)
- **Context:** Enterprise decision-makers evaluating zero-trust business messaging infrastructure.
- **Referral Anchor:** "Launch CHATR Web Client ↗"
- **Destination URL:** `https://chatr.chat/?utm_source=talentxcel_corp&utm_medium=ecosystem_referral&utm_campaign=chatr_web_launch`
- **Result:** Immediate product trial and adoption.

---

## 3. Standardized Multi-Touch UTM Parameter Taxonomy

To ensure flawless source attribution without cross-domain analytics contamination, all internal and external campaigns must adhere to the standardized taxonomy:

```
https://[domain]/?utm_source=[source]&utm_medium=[medium]&utm_campaign=[campaign]&utm_content=[content]
```

### Approved Taxonomy Values:

| Parameter | Allowed Values | Description / Example |
| :--- | :--- | :--- |
| `utm_source` | `talentxcel_corp`, `talentxcel_in`, `talentxcel_net`, `google`, `linkedin`, `x_twitter`, `partner_university` | The originating property or marketing network. |
| `utm_medium` | `ecosystem_referral`, `organic_search`, `social_thought_leadership`, `email_newsletter`, `bilateral_mou` | The acquisition channel mechanism. |
| `utm_campaign` | `ai_enablement_launch`, `dev_pods_launch`, `campus_mou_drive`, `q1_hiring_report`, `chatr_enterprise_rollout` | Specific campaign objective identifier. |
| `utm_content` | `header_cta`, `in_text_link`, `footer_badge`, `founder_post`, `infographic_download` | Granular location or creative variant on the originating page. |

---

## 4. Cross-Domain Tracking & Attribution Implementation

1. **Client-Side Engine:** Implemented via `src/services/growthTracking.ts`.
2. **Session Persistence:** When a user lands on `talentxcel.co.in` via an external campaign, the UTM parameters are stored in `sessionStorage` under `tx_growth_session_attribution`.
3. **Lead Form Hook:** When the user completes any `LeadCaptureForm`, the initial UTM parameters are automatically injected into the lead record in `revenueOperations.ts`.
4. **Outbound Logger:** Outbound clicks to sister domains trigger `growthTracking.logOutboundReferral()`, recording the event timestamp, context, and destination in local storage for administrative reporting.
5. **DPDP Compliance:** No personal identity data (email, name, phone) is ever passed in URL query parameters across domains.
