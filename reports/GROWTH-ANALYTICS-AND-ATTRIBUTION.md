# TALENTXCEL GROWTH ANALYTICS, INSTRUMENTATION & ATTRIBUTION ARCHITECTURE

**Entity:** TalentXcel Services Private Limited (CIN: U85500UP2024PTC206390)  
**Corporate Headquarters:** Office 1917, 19th Floor, E-Square Building, Sector 96, Noida, UP 201301  
**Target Digital Platform:** https://talentxcel.co.in (Ecosystem: talentxcel.in, talentxcel.net, chatr.chat)  
**Date:** November 2026  
**Auditor:** Revenue Operations & Growth Telemetry Architect  
**Document Status:** OFFICIAL PRODUCTION OPERATING PROCEDURE  

---

## 1. Principles of Truthful Growth Analytics

In strict adherence to executive instructions:
1. **Zero Synthetic Metric Generation:** Unconnected analytics streams must never be mocked with fabricated graphs, fake users, or artificial bounce rates. If a metric is uninstrumented, it is explicitly reported as `[Awaiting Connection]`.
2. **Multi-Touch Pipeline Attribution:** Inbound commercial leads must reflect true journey origins (First Touch, Last Touch, and Assisted Touchpoints).
3. **Statutory Privacy Compliance:** All analytics implementations adhere to the Digital Personal Data Protection Act, 2023 (DPDP Act, India). Zero unhashed personal data is transmitted to analytics dataLayers.

---

## 2. Central Growth OS KPI Taxonomy

The TalentXcel Growth OS organizes telemetry into five distinct measurement tiers:

### 2.1 Tier 1: Traffic & Audience KPIs
- **Unique Users:** Total deduplicated visitors across a 30-day reporting window.
- **Sessions:** Total visits initiated.
- **Engaged Sessions:** Visits lasting > 10 seconds or viewing 2+ pages.
- **Traffic Channels:** Organic Search, Social, Referral, Direct, Ecosystem Internal.
- **New vs. Returning Visitor Ratio:** Baseline target 70% New / 30% Returning.

### 2.2 Tier 2: Search Engine KPIs (via GSC API)
- **Total Organic Impressions:** Aggregate search result appearances on Google.
- **Total Organic Clicks:** Verified search clicks entering `talentxcel.co.in`.
- **Average Organic CTR:** Percentage of impressions converted to clicks.
- **Average Ranking Position:** Blended rank across top 100 commercial queries.
- **Indexed URL Count:** Total valid canonical pages indexed in Google Search.

### 2.3 Tier 3: Content & Research KPIs
- **Article Pageviews:** Total readership per research asset.
- **Average Scroll Depth:** Percentage of readers reaching bottom conversion CTA.
- **Research Download Completions:** Downloads of PDF syllabus or research summaries.
- **Assisted Conversions:** Number of lead submissions preceded by content consumption.

### 2.4 Tier 4: Platform & Ecosystem Referral KPIs
- **Outbound Referral Clicks to `talentxcel.in`:** Candidate portal discovery.
- **Outbound Referral Clicks to `talentxcel.net`:** Academic academy discovery.
- **Outbound Referral Clicks to `chatr.chat`:** Product launches.
- **Ecosystem Inbound Traffic:** Referrals received back from sister domains.

### 2.5 Tier 5: Commercial Pipeline & Revenue KPIs
- **Inbound Inquiries (Raw Leads):** Total form submissions recorded in `revenueOperations.ts`.
- **Qualified Enterprise Leads (MQLs):** B2B decision-makers with confirmed commercial intent.
- **Discovery Calls Scheduled:** Formal introductory calls with practice directors.
- **Proposals Dispatched:** Formal statements of work (SOWs) and commercial rate cards issued.
- **Closed Won Contracts:** Signed contracts with realized revenue collected.
- **Customer Acquisition Cost (CAC):** Total acquisition spend divided by won deals.

---

## 3. GA4 Custom Event Taxonomy Specification

To be activated upon injection of `VITE_GA4_MEASUREMENT_ID` in production:

```javascript
// 1. Commercial Lead Form Submission
gtag('event', 'generate_lead', {
  lead_category: 'corporate_training', // 'it_staffing' | 'university_partnership'
  lead_reference: 'TX-2026-8941',
  estimated_deal_value: 400000,
  currency: 'INR',
  acquisition_source: 'linkedin_thought_leadership'
});

// 2. Outbound Ecosystem Referral Click
gtag('event', 'ecosystem_outbound_click', {
  destination_domain: 'talentxcel.in',
  originating_page: '/careers',
  context_campaign: 'careers_job_board'
});

// 3. Research Report Download
gtag('event', 'file_download', {
  file_name: 'india_it_hiring_trends_2026.pdf',
  file_category: 'original_research',
  link_text: 'Download Full Research Report'
});

// 4. Partner MoU Inquiry
gtag('event', 'institutional_inquiry', {
  institution_type: 'engineering_college',
  program_interest: 'credit_aligned_ai_elective'
});
```

---

## 4. Multi-Touch Attribution Engine Architecture

Implemented inside `src/services/growthTracking.ts` and connected to `src/services/revenueOperations.ts`:

```
+--------------------------------------------------------------------------+
|                     MULTI-TOUCH ATTRIBUTION DATA MODEL                   |
+--------------------------------------------------------------------------+
| 1. First Touch:   Recorded in localStorage upon initial visitor arrival. |
| 2. Last Touch:    Recorded in sessionStorage from active session UTMs.   |
| 3. Conversion:    Attached to the Lead Record on form submission:        |
|                   - source: 'google' | 'linkedin' | 'referral' | 'direct'|
|                   - medium: 'organic' | 'social' | 'mou' | 'cpc'         |
|                   - campaign: 'q1_hiring_report' | 'ai_bootcamp_launch'  |
|                   - landingPage: '/corporate-training'                   |
|                   - referrer: 'https://linkedin.com'                     |
+--------------------------------------------------------------------------+
```

---

## 5. DPDP Act 2023 Statutory Privacy Controls

1. **Zero Client PII in Logs:** IP addresses are truncated at server edge; no email addresses or phone numbers are embedded in query strings or public logs.
2. **Explicit Affirmative Consent:** Lead capture forms mandate affirmative acknowledgment of data processing terms before form submission.
3. **Internal Operator Security:** The Revenue and Growth dashboard is protected by an administrative PIN barrier with local session expiration.
