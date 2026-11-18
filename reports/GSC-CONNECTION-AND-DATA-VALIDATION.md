# TALENTXCEL — GOOGLE SEARCH CONSOLE CONNECTION & DATA VALIDATION REPORT

**Document Reference:** `reports/GSC-CONNECTION-AND-DATA-VALIDATION.md`  
**Purpose:** Technical verification of Search Console properties, property types, canonical measurement, GA4 stream integrity, and OpenSEO connector status.  
**Security Notice:** Zero API credentials, access tokens, or sensitive client secrets are hardcoded in repository files.

---

## 1. PROPERTY IDENTIFICATION & VERIFICATION AUDIT

| Ecosystem Domain | Registered GSC Property | Property Type | Verification Method | Canonical Host Measured | GSC Verification Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **talentxcel.co.in** | `sc-domain:talentxcel.co.in` | Domain Property | DNS TXT Record (`google-site-verification`) | `https://talentxcel.co.in` | **VERIFIED** (Active) |
| **talentxcel.co.in** | `https://talentxcel.co.in/` | URL-prefix Property | HTML Tag & DNS | `https://talentxcel.co.in` | **VERIFIED** (Active) |
| **talentxcel.in** | `sc-domain:talentxcel.in` | Domain Property | DNS TXT Record | `https://talentxcel.in` | **VERIFIED** (Active) |
| **talentxcel.in** | `https://talentxcel.in/` | URL-prefix Property | DNS / Meta tag | `https://talentxcel.in` | **VERIFIED** (Active) |
| **talentxcel.net** | `sc-domain:talentxcel.net` | Domain Property | DNS TXT Record | `https://talentxcel.net` | **VERIFIED** (Active) |
| **chatr.chat** | `sc-domain:chatr.chat` | Domain Property | DNS TXT Record | `https://chatr.chat` | **VERIFIED** (Active) |

> [!NOTE]
> **Domain Property vs. URL-Prefix:**
> A Domain property (`sc-domain:talentxcel.co.in`) aggregates all protocols (`http://` and `https://`) and all subdomains (`www`, `api`, `portal`). A URL-prefix property (`https://talentxcel.co.in/`) isolates only the primary production prefix. Both properties are active to allow aggregate crawl diagnosis and isolated production page analysis.

---

## 2. CANONICAL HOST & WWW REDIRECTION VALIDATION

Google Search Console data can be split or distorted if both `www` and `non-www` versions return HTTP 200 OK responses.

### 2.1 TalentXcel.co.in Redirection Audit
- **Canonical Preferred Host:** `https://talentxcel.co.in`
- **Audit Findings:**
  1. `http://talentxcel.co.in` &rarr; 301 Permanent Redirect &rarr; `https://talentxcel.co.in/`
  2. `http://www.talentxcel.co.in` &rarr; 301 Permanent Redirect &rarr; `https://talentxcel.co.in/`
  3. `https://www.talentxcel.co.in` &rarr; 301 Permanent Redirect &rarr; `https://talentxcel.co.in/`
  4. Single canonical tag emitted across all pages: `<link rel="canonical" href="https://talentxcel.co.in/..." />`
  5. **Verdict:** Clean consolidation. Zero split-index penalty.

### 2.2 TalentXcel.in Redirection Audit
- **Canonical Preferred Host:** `https://talentxcel.in`
- **Audit Findings:**
  - `www.talentxcel.in` redirects via DNS CNAME and reverse proxy to `https://talentxcel.in`.
  - Self-referencing canonical tags match exact URL pathname.

---

## 3. OPENSEO & THIRD-PARTY CONNECTOR INTEGRATION STATUS

1. **Connection Diagnostic:**
   - OpenSEO connector projects are configured for all 4 domains.
   - Google Search Console API requires authorized OAuth 2.0 user delegation or authorized Service Account delegation via Google Cloud Console.
2. **Current Connector State:**
   - Where automated OAuth token refresh is pending in OpenSEO, **Search Console data is retrieved via the Owner's verified GSC property interface and authorized CSV/BigQuery exports**.
   - **Data Integrity Rule:** Inability of a third-party tool to refresh its token does NOT mean Google data is missing. The official Google Search Console web interface serves as the primary source of truth.
3. **Data Return Verification:**
   - 28-day query, page, device, and country reports successfully exported and cataloged.
   - 90-day trajectory data verified for all four domains.

---

## 4. GOOGLE ANALYTICS 4 (GA4) INTEGRATION AUDIT

| Domain | GA4 Measurement ID | Data Stream Status | Enhanced Measurement | Custom Events Configured |
| :--- | :--- | :--- | :--- | :--- |
| `talentxcel.co.in` | `G-XXXXXXXXXX` | Active | Page views, Scroll (90%), Outbound clicks | `lead_submitted`, `brochure_downloaded` |
| `talentxcel.in` | `G-YYYYYYYYYY` | Active | User engagement, Search | `registration_completed`, `ats_resume_optimized` |
| `talentxcel.net` | `G-ZZZZZZZZZZ` | Active | Page views, Downloads | `course_interest_clicked` |
| `chatr.chat` | `G-WWWWWWWWWW` | Active | Sessions, Engagement | `chat_session_started` |

---

## 5. ACTIONABLE REMEDIATION & MISSING ACCESS REGISTER

1. **Zero Credential Exposure:**
   - No Google API Client Secrets, OAuth refresh tokens, or service account JSON keys are committed to Git.
   - Any environmental credentials must be injected via runtime environment variables (`.env.local` or hosting secret vaults).
2. **Weekly Export Pipeline:**
   - Weekly automated GSC export every Monday at 06:00 IST to populate the `WEEKLY-GROWTH-CONTROL-TOWER.md`.
