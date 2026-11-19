# RALPH AUTONOMOUS DEVELOPMENT LOOP — VERIFICATION REGISTER

**System Reference:** `docs/ralph/VERIFICATION.md`  
**Standard:** Empirical Execution Only • Zero Fabricated Proof  
**Current Phase:** Phase 0 Setup & Initialization  

---

## 1. EVIDENCE CLASSIFICATION STANDARDS

Every technical claim, test result, and performance metric must carry one of five standardized evidence tags:

| Label | Definition | Accepted Verification Source |
| :--- | :--- | :--- |
| **`[VERIFIED]`** | Directly observed in an executed test, socket probe, or terminal command. | Terminal output with exit code 0; HTTP status response; AST output. |
| **`[ESTIMATED]`** | Derived from third-party estimation tools or industry benchmarks. | SEO tool search volume; competitor traffic estimation models. |
| **`[INFERRED]`** | A logical deduction supported by verified primary evidence. | Architectural extrapolation from codebase structure or logs. |
| **`[UNVERIFIED]`**| Requires external access, user credentials, or pending API integration.| Google Search Console raw data prior to direct account export. |
| **`[NOT APPLICABLE]`**| The verification test does not apply to the component or architecture.| Supabase RLS tests on repositories without Supabase dependencies. |

---

## 2. STANDARD VERIFICATION TEST SUITE

The repository maintains the following repeatable test commands that must be executed during Ralph cycles:

```
+---------------------------------------------------------------------------------------------------------+
| RALPH STANDARD VERIFICATION BATTERY                                                                    |
+----------------------+------------------------------------+---------------------------------------------+
| Verification Domain  | Command Executed                   | Acceptance Criteria                         |
+----------------------+------------------------------------+---------------------------------------------+
| 1. TypeScript Build  | npm run build                      | Exit code 0; Vite transforms all modules;   |
|                      |                                    | zero bundle compilation errors.             |
| 2. Code Linting      | npm run lint                       | Exit code 0; 0 errors; fast-refresh only.   |
| 3. Email & Routing   | npx tsx scratch/test-email-dispatch.ts | 66 / 66 assertions pass (100% success). |
| 4. Local Route Probe | python scratch/test_routes.py      | 15 / 15 routes return HTTP 200 with root div|
| 5. Live Production   | python scratch/verify_all_production.py | 15 / 15 live routes return HTTP 200 OK.|
+----------------------+------------------------------------+---------------------------------------------+
```

---

## 3. VERIFICATION EXECUTION LEDGER

### Initial Setup Verification (Phase 0)
- **Date:** November 19, 2026
- **Scope:** Ralph framework documentation creation and structure integrity.

```text
================================================================================
RALPH SETUP INTEGRITY VERIFICATION
================================================================================
[PASS] docs/ralph/PRD.md exists and contains 10 operating rules
[PASS] docs/ralph/TASKS.md exists and contains task backlog and status taxonomy
[PASS] docs/ralph/PROGRESS.md exists and tracks autonomous development budget (0/3 executed)
[PASS] docs/ralph/DECISIONS.md exists and documents ADR-001 through ADR-004
[PASS] docs/ralph/VERIFICATION.md exists and establishes empirical testing battery
[PASS] Application source code (src/) is 100% unmodified
[PASS] Production infrastructure configuration is 100% unmodified
[PASS] Zero database migrations executed
[PASS] Git working tree status confirmed clean
================================================================================
STATUS: 9 / 9 VERIFICATIONS PASSED (READY FOR HUMAN AUTHORIZATION)
================================================================================
```

### RALPH-TASK-010 Verification (Iteration 1)
- **Date:** November 19, 2026
- **Scope:** Page-Level Schema.org JSON-LD Enrichment across 5 pages (`CorporateTraining.tsx`, `StaffingSolutions.tsx`, `UniversityPartnerships.tsx`, `Team.tsx`, `Index.tsx`).
- **Branch:** `ralph/task-010-schema-enrichment`
- **Battery Results:**

```text
================================================================================
RALPH-TASK-010 EXECUTION EVIDENCE
================================================================================
1. Schema Integrity & Linkage Test (npx tsx scratch/test_schema_integrity.ts):
   [PASS] index.html: Authoritative Organization schema (@id: https://talentxcel.co.in/#organization)
   [PASS] Index.tsx: WebSite schema linked to publisher #organization (zero duplicate Organization)
   [PASS] CorporateTraining.tsx: Course schema (#genai-bootcamp) linked to provider #organization
   [PASS] StaffingSolutions.tsx: Service schema (#it-staffing) linked to provider #organization
   [PASS] UniversityPartnerships.tsx: Program schema (#campus-employability) linked to #organization
   [PASS] Team.tsx: Person schema (#founder) linked to worksFor #organization & verified portrait
   [PASS] Verified image confirmed at public/assets/sanobar-jahan-founder.jpg (426,276 bytes)
   STATUS: 6 / 6 CHECKS PASSED (EXIT CODE 0)

2. Vite Production Build (npm run build):
   ✓ 1763 modules transformed.
   ✓ Built in 13.56s.
   STATUS: SUCCESS (EXIT CODE 0)

3. Code Quality & Linting (npm run lint):
   ✓ 0 errors, 7 fast-refresh warnings in pre-existing UI primitives.
   STATUS: SUCCESS (EXIT CODE 0)

4. Email & Revenue Routing Regression Suite (npx tsx scratch/test-email-dispatch.ts):
   ✓ 66 / 66 assertions passed (100% success rate).
   STATUS: SUCCESS (EXIT CODE 0)
================================================================================
STATUS: ALL GATES PASSED (AWAITING OPERATOR COMMIT APPROVAL)
================================================================================
```

### RALPH-TASK-010 Forensic Verification (Iteration 2)
- **Date:** November 19, 2026
- **Scope:** Independent read-only forensic audit across 10 evaluation criteria (Schema.org terms, `@id` graph linkage, Google Search Central compatibility, SSR head rendering, live image resolution).
- **Branch:** `ralph/task-010-schema-enrichment`
- **Battery Results:**

```text
================================================================================
RALPH-TASK-010 FORENSIC AUDIT EVIDENCE (ITERATION 2)
================================================================================
1. Schema.org Term & Property Audit (scratch/check_schema_terms.py):
   [FAIL - HIGH] index.html uses "headquarters": HTTP 404 on Schema.org (valid: "address")
   [PASS] "address": HTTP 200 on Schema.org
   [PASS] "Course", "courseMode", "courseWorkload", "timeRequired": HTTP 200 on Schema.org
   [PASS] "Service", "offers", "hasOfferCatalog", "areaServed": HTTP 200 on Schema.org
   [PASS] "EducationalOccupationalProgram", "programType", "occupationalCategory": HTTP 200
   [PASS] "Person", "jobTitle", "worksFor", "knowsAbout": HTTP 200 on Schema.org

2. Sitelinks Searchbox & Google Compatibility (scratch/check_google_course.py):
   [FAIL - HIGH] Index.tsx declares SearchAction pointing to /services?q=...
                 Services.tsx has no search input or query parameter handling.
                 Google Sitelinks Searchbox was officially deprecated globally in Nov 2024.
   [INFO - MED]  Course Rich Results require at least 3 courses or ItemList carousel.
                 Service has no dedicated Google rich-result badge (semantic/graph only).

3. Live Image Resolution & Identity Verification:
   [PASS] https://talentxcel.co.in/assets/sanobar-jahan-founder.jpg
          HTTP 200 OK, image/jpeg, 426,276 bytes. Matches Team.tsx founder image.

4. SSR / React-Helmet Head Emission Audit (scratch/print_helmet_script.tsx):
   [PASS] Dynamic <script data-rh="true" type="application/ld+json"> rendered cleanly.

5. Regression & Quality Battery:
   [PASS] Vite Build: exit 0 (12.27s)
   [PASS] ESLint: exit 0 (0 errors)
   [PASS] Email Routing: 66 / 66 passed (100%)
================================================================================
STATUS: FORENSIC AUDIT COMPLETE (AWAITING OPERATOR DIRECTION FOR ITERATION 3)
================================================================================
```

### RALPH-TASK-010 Release Candidate Verification (Iteration 3)
- **Date:** November 19, 2026
- **Scope:** Final remediation and 10-point release candidate validation battery.
- **Branch:** `ralph/task-010-schema-enrichment`
- **Battery Results:**

```text
================================================================================
RALPH-TASK-010 RELEASE CANDIDATE VERIFICATION (ITERATION 3)
================================================================================
1. Schema.org Vocabulary Validation:
   [PASS] index.html: "headquarters" eliminated; official "address" property active
   [PASS] index.html: services mapped to valid "knowsAbout" array
   [PASS] All entity types and properties confirmed HTTP 200 on schema.org

2. JSON-LD Syntax Validation (scratch/test_schema_integrity.ts):
   [PASS] index.html: Valid JSON-LD (Organization #organization)
   [PASS] Index.tsx: Valid JSON-LD (WebSite #website, publisher #organization)
   [PASS] CorporateTraining.tsx: Valid JSON-LD (Course #genai-bootcamp)
   [PASS] StaffingSolutions.tsx: Valid JSON-LD (Service #it-staffing)
   [PASS] UniversityPartnerships.tsx: Valid JSON-LD (Program #campus-employability)
   [PASS] Team.tsx: Valid JSON-LD (Person #founder)
   STATUS: 6 / 6 BLOCKS SYNTACTICALLY VALID (EXIT CODE 0)

3. Google Search Central Compatibility Review:
   [PASS] Deprecated & non-functional potentialAction (SearchAction) eliminated
   [PASS] Inline entity labels (@type, name, url) added to all #organization references
   [PASS] Course & Service expectations aligned with semantic Knowledge Graph policies

4. Canonical URL Consistency:
   [PASS] 100% verified across all pages (https://talentxcel.co.in/*)

5. Duplicate Entity Detection:
   [PASS] Zero conflicting/duplicate root Organization declarations across subpages

6. Rendered HTML JSON-LD Verification (scratch/print_helmet_script.tsx):
   [PASS] Dynamic <script data-rh="true" type="application/ld+json"> emitted cleanly

7. Founder Image Resolution:
   [PASS] https://talentxcel.co.in/assets/sanobar-jahan-founder.jpg -> HTTP 200 OK (426,276 B)

8. Visible Content vs. Structured Data Parity:
   [PASS] 100% agreement with page copy; zero fabricated claims or credentials

9. Full Production Build (npm run build):
   ✓ 1763 modules transformed.
   ✓ Built in 19.78s.
   STATUS: SUCCESS (EXIT CODE 0)

10. Full Lint & Regression Battery:
   [PASS] npm run lint: 0 errors across entire repository (EXIT CODE 0)
   [PASS] scratch/test-email-dispatch.ts: 66 / 66 tests passed (100% SUCCESS, EXIT CODE 0)
================================================================================
STATUS: VERIFIED — AWAITING HUMAN COMMIT APPROVAL
================================================================================
```

---

## 4. ANOMALY & REGRESSION ESCALATION PROTOCOL

If any verification test fails during a future autonomous iteration:
1. **Immediate Halt:** Do not proceed to subsequent tasks.
2. **Failure Capture:** Copy the exact error stack trace, command output, and file path into `docs/ralph/PROGRESS.md`.
3. **Bounded Self-Correction:** The agent may make **one targeted attempt** to resolve the regression within the active iteration.
4. **Escalation:** If the self-correction fails, mark the task as `[BLOCKED]`, pause the loop, and report the blocking defect to the human operator.
