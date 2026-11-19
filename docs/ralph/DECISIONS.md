# RALPH AUTONOMOUS DEVELOPMENT LOOP — ARCHITECTURAL DECISION RECORDS (ADR)

**System Reference:** `docs/ralph/DECISIONS.md`  
**Standard:** Lightweight ADR Format (Context, Decision, Consequences, Status)  
**Governance:** Reviewed & Versioned  

---

## 1. DECISION REGISTER

| ADR ID | Date | Title | Status | Impact Area |
| :--- | :--- | :--- | :--- | :--- |
| **ADR-001** | 2026-11-19 | Native Ralph Loop Integration in Antigravity | **ACCEPTED** | Workflow & Autonomous Governance |
| **ADR-002** | 2026-11-19 | 3-Iteration Automatic Pause Boundary | **ACCEPTED** | Safety & Cost Control |
| **ADR-003** | 2026-11-19 | Mandatory Empirical Verification Gate | **ACCEPTED** | Quality Assurance & Truthfulness |
| **ADR-004** | 2026-11-19 | Separation of Staging Demonstrators from Production Routes | **ACCEPTED** | Security & DPDP Compliance |

---

## 2. DETAILED DECISION RECORDS

### ADR-001: Native Ralph Loop Integration in Antigravity
* **Context:** The repository requires a structured, persistent autonomous execution system to implement complex search, UI, and revenue features incrementally without hallucinated completions or accidental regressions.
* **Decision:** Implement a native file-based Ralph framework directly within `docs/ralph/` that persists task status, iteration logs, and verification proof across agent sessions.
* **Consequences:**
  - *Positive:* Full transparency, zero opaque state, human auditability at all times.
  - *Trade-off:* Requires explicit documentation updates in each cycle, slightly increasing token overhead.

---

### ADR-002: 3-Iteration Automatic Pause Boundary
* **Context:** Autonomous development loops left unconstrained risk running excessive cycles, consuming large token budgets, or pursuing erroneous paths if an unexpected build error occurs.
* **Decision:** Enforce a strict programmatic rule where the agent executes a maximum of three discrete task iterations, pauses, and presents a structured report to the human operator for review and guidance before proceeding.
* **Consequences:**
  - *Positive:* Eliminates runaway loops; forces frequent human alignment.
  - *Trade-off:* Requires human input to continue into subsequent iteration batches.

---

### ADR-003: Mandatory Empirical Verification Gate
* **Context:** AI agents frequently assume that code edits will succeed without executing builds, tests, or live socket probes, leading to subtle runtime bugs or production regressions (e.g., historical 404 routing failures).
* **Decision:** No task in `docs/ralph/TASKS.md` may transition to `[COMPLETED]` without actual execution evidence (terminal output, status codes, assertion counts) logged in `docs/ralph/VERIFICATION.md`.
* **Consequences:**
  - *Positive:* 100% regression prevention; mathematically verified delivery.
  - *Trade-off:* Every task requires running tests or build verification commands.

---

### ADR-004: Separation of Staging Demonstrators from Production Routes
* **Context:** Internal operator tools (such as `RevenuePortal.tsx`) lack a secure server-side OAuth 2.0 / SSO backend. Exposing them in public production with client-side PINs violates security principles.
* **Decision:** Internal portals are disabled in production builds via environment guards (`import.meta.env.PROD`), rendering standard 404 responses to public visitors until full server-side authentication is deployed.
* **Consequences:**
  - *Positive:* Zero security vulnerabilities; zero leaked lead records; complete DPDP Act 2023 compliance.
  - *Trade-off:* Operators must view pipeline tools in local development mode (`VITE_ENABLE_INTERNAL_PORTAL=true`).
