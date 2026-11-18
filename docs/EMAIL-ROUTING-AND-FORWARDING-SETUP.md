# TALENTXCEL — ENTERPRISE EMAIL ROUTING & AUTOMATIC FORWARDING SPECIFICATION

**Corporate Entity:** TalentXcel Services Private Limited  
**Founder & Managing Director Mailbox:** `sanobar.jahan@talentxcel.co.in`  
**Corporate Desk Mailbox:** `contact@talentxcel.co.in`  
**Primary Corporate Domain:** `talentxcel.co.in`  
**Implementation Date:** November 2026

---

## 1. OBJECTIVE & EXECUTIVE DIRECTIVE

1. **Brand Credibility Preservation:**  
   All public-facing website touchpoints (navigation, footers, role cards, contact cards, terms, privacy, investor pages) must present professional, departmental corporate addresses:
   - `contact@talentxcel.co.in`
   - `careers@talentxcel.co.in`
   - `investors@talentxcel.co.in`
   - `privacy@talentxcel.co.in`
   - `legal@talentxcel.co.in`

2. **Executive Inbox Auto-Routing:**  
   Every communication initiated through the corporate website or sent directly to any corporate address must be automatically routed to Founder & Managing Director **Sanobar Jahan** at `sanobar.jahan@talentxcel.co.in`.

3. **Form Submissions Delivery:**  
   Every inquiry submitted across the site—including Partnership Inquiries (`/partnerships#partnership-form`), Corporate Training Inquiries (`/corporate-training#training-form`), IT Staffing Mandates (`/staffing-solutions#staffing-form`), University MoU Submissions (`/university-partnerships#mou-form`), and Contact Submissions (`/contact`)—must immediately compile a comprehensive enterprise specification and dispatch to `sanobar.jahan@talentxcel.co.in` (with CC to `contact@talentxcel.co.in`).

---

## 2. FRONTEND APPLICATION IMPLEMENTATION (COMPLETED)

### 2.1 LeadCaptureForm (`src/components/LeadCaptureForm.tsx`)
Used in:
- `/partnerships#partnership-form` (Bilateral MoUs, Strategic Alliances)
- `/corporate-training#training-form` (Enterprise Workforce Training, GenAI Upskilling)
- `/staffing-solutions#staffing-form` (IT Staffing, Dedicated Pods, RPO, Direct Hire)
- `/university-partnerships#mou-form` (Academic Alliances, Live-Project Academies)
- Homepage Contact / Proposal Section

**Behavior:**
1. Validates inputs and anti-spam honeypot.
2. Generates unique reference number (e.g. `TX-2026-8941`) and registers the lead in `revenueOperations`.
3. Calls `generateLeadEmailDispatch(formData, ref)`:
   - **Primary To:** `sanobar.jahan@talentxcel.co.in`
   - **Secondary CC:** `contact@talentxcel.co.in`
   - **Subject:** `[TalentXcel Lead (Ref: TX-2026-XXXX)] <Category> - <Organization>`
   - **Body:** Full structured breakdown containing Organization, Contact Name, Designation, Email, Phone, Category, Requirement Scope, Headcount/Participants, Timeline, Delivery Mode, and Timestamp.
4. Auto-triggers client email dispatch via `window.location.href = mailtoLink`.
5. Displays a confirmation view with:
   - Reference Number badge.
   - Confirmation that the lead was routed to `sanobar.jahan@talentxcel.co.in`.
   - **"Confirm Dispatch in Email App"** button (`mailto:` with prefilled body).
   - **"Copy Inquiry Details"** button (copies full structured text for pasting into webmail or messaging).

### 2.2 Contact Page (`src/pages/Contact.tsx`)
- Visible contact email card: `contact@talentxcel.co.in`
- Action link: `mailto:contact@talentxcel.co.in?cc=sanobar.jahan@talentxcel.co.in`
- Contact form submission:
  - Formats subject and full structured message payload.
  - Automatically dispatches to `sanobar.jahan@talentxcel.co.in` (CC: `contact@talentxcel.co.in`).
  - Confirmation screen provides "Confirm Dispatch in Email App" and "Copy Inquiry Text" buttons.

### 2.3 Careers Page (`src/pages/Careers.tsx`)
- Visible email label: `careers@talentxcel.co.in`
- Direct resume submission link: `mailto:careers@talentxcel.co.in?cc=sanobar.jahan@talentxcel.co.in`
- Role card application button: `mailto:careers@talentxcel.co.in?cc=sanobar.jahan@talentxcel.co.in&subject=Application: <Role Title>`
- General profile submission button: `mailto:careers@talentxcel.co.in?cc=sanobar.jahan@talentxcel.co.in&subject=General Candidate Profile Submission`

### 2.4 Footer, Home & Policy Pages
- `src/components/Footer.tsx`: `mailto:contact@talentxcel.co.in?cc=sanobar.jahan@talentxcel.co.in`
- `src/components/HomeSections.tsx`: `mailto:contact@talentxcel.co.in?cc=sanobar.jahan@talentxcel.co.in`
- `src/pages/Investors.tsx`: `mailto:investors@talentxcel.co.in?cc=sanobar.jahan@talentxcel.co.in`
- `src/pages/Privacy.tsx`: `mailto:privacy@talentxcel.co.in?cc=sanobar.jahan@talentxcel.co.in`
- `src/pages/Terms.tsx`: `mailto:legal@talentxcel.co.in?cc=sanobar.jahan@talentxcel.co.in`

---

## 3. SERVER-LEVEL EMAIL AUTO-FORWARDING SETUP GUIDE

When an external client or prospective employee writes directly from their email client (typing `contact@talentxcel.co.in` or `careers@talentxcel.co.in`), mail server rules must automatically route the email to `sanobar.jahan@talentxcel.co.in`.

### ⭐ Primary Setup: Zoho Mail (Confirmed Active Provider)

In Zoho Mail, the best, zero-cost method is setting up **Email Aliases** on Sanobar Jahan's user account. This requires no extra paid licenses, delivers instantly to her inbox, and allows her to reply directly using those departmental addresses.

#### Method 1: Email Aliases (Fastest & 100% Free - 2 Minutes)
1. Log in to the **Zoho Mail Admin Console**:
   - India Accounts: **https://mailadmin.zoho.in**
   - Global Accounts: **https://mailadmin.zoho.com**
2. On the left navigation sidebar, click **Users**.
3. Click on **Sanobar Jahan** (`sanobar.jahan@talentxcel.co.in`).
4. Click on the **Mail Settings** tab (or **Email Accounts**).
5. In the **Email Aliases** section, click **+ Add New Alias**.
6. Add the following aliases one by one:
   - `contact` &rarr; creates `contact@talentxcel.co.in`
   - `careers` &rarr; creates `careers@talentxcel.co.in`
   - `support` &rarr; creates `support@talentxcel.co.in`
   - `partnerships` &rarr; creates `partnerships@talentxcel.co.in`
   - `investors` &rarr; creates `investors@talentxcel.co.in`
   - `privacy` &rarr; creates `privacy@talentxcel.co.in`
   - `legal` &rarr; creates `legal@talentxcel.co.in`
7. Click **Save**.
> **Result:** Any email sent to `contact@`, `careers@`, etc., immediately delivers into Sanobar Jahan's inbox. When composing or replying in Zoho Mail, she can also choose `contact@talentxcel.co.in` in the **From** dropdown.

#### Method 2: Catch-All Email (Catches Any Typo or Unassigned Address)
1. In Zoho Admin Console, click **Domains** on the left menu.
2. Click on **talentxcel.co.in**.
3. Locate **Catch-All Account** (or Shadow Account).
4. Set the destination to **`sanobar.jahan@talentxcel.co.in`**.
5. Click **Save**.
> **Result:** If anyone types `info@`, `sales@`, or mistypes any address at `@talentxcel.co.in`, it will automatically land in Sanobar Jahan's inbox.

#### Method 3: If Separate Zoho Mailboxes Already Exist
If `contact@talentxcel.co.in` was already created as an independent user:
1. In Zoho Admin Console &rarr; **Users** &rarr; click on `contact@talentxcel.co.in`.
2. Go to **Mail Settings** &rarr; **Email Forwarding**.
3. Click **+ Add Forwarding Address** and enter `sanobar.jahan@talentxcel.co.in`.
4. Click **Save**. Repeat for `careers@talentxcel.co.in`.

---

### Alternative Email Providers Reference (Google Workspace / cPanel / M365)

### Option A: Google Workspace (Recommended Enterprise Setup)
1. Log into **Google Admin Console** (`admin.google.com`) as Super Administrator.
2. Navigate to: **Apps** > **Google Workspace** > **Gmail** > **Routing** (or **Default Routing**).
3. Under **Default Routing**, click **Configure** or **Add Rule**:
   - **Specify emails to affect:** Select *Single recipient* (e.g. `contact@talentxcel.co.in`).
   - **Also deliver to:** Check *Add more recipients* > Click **Add** > Enter `sanobar.jahan@talentxcel.co.in`.
   - **Save** the rule.
4. Repeat for:
   - `careers@talentxcel.co.in`
   - `support@talentxcel.co.in`
   - `partnerships@talentxcel.co.in`
   - `investors@talentxcel.co.in`
5. *Alternative (Using Email Aliases):*
   - Go to **Directory** > **Users** > Click on user **Sanobar Jahan** (`sanobar.jahan@talentxcel.co.in`).
   - Click **Add alternate emails (Email aliases)**.
   - Add:
     - `contact`
     - `careers`
     - `support`
     - `partnerships`
     - `investors`
   - Click **Save**. All incoming messages to these addresses now land directly in Sanobar Jahan's inbox with zero delay and no duplicate accounts.

### Option B: cPanel / Hostinger / Webmail
1. Log into your hosting **cPanel**.
2. Under the **Email** section, click on **Forwarders** (Email Forwarding).
3. Click **Add Forwarder**:
   - **Address to Forward:** `contact` (Domain: `talentxcel.co.in`)
   - **Destination:** Select *Forward to Email Address* and enter `sanobar.jahan@talentxcel.co.in`.
   - Click **Add Forwarder**.
4. Repeat for:
   - `careers` -> `sanobar.jahan@talentxcel.co.in`
   - `support` -> `sanobar.jahan@talentxcel.co.in`
   - `partnerships` -> `sanobar.jahan@talentxcel.co.in`
   - `investors` -> `sanobar.jahan@talentxcel.co.in`
5. Under **Default Address** (Catch-all), you may also optionally set any unrouted `@talentxcel.co.in` emails to forward to `sanobar.jahan@talentxcel.co.in`.

### Option C: Microsoft 365 (Exchange Online)
1. Log into **Microsoft 365 admin center** (`admin.microsoft.com`).
2. Go to **Users** > **Active Users** > Select **Sanobar Jahan**.
3. Under **Account** > **Aliases**, click **Manage username and email**.
4. Add aliases for `contact`, `careers`, `support`, `partnerships`, and save.
5. *Or via Exchange Admin Center (EAC):*
   - Go to **Mail flow** > **Rules** > Add a new rule:
   - "If the message is sent to `contact@talentxcel.co.in` or `careers@talentxcel.co.in`"
   - "Do the following: Bcc the message to `sanobar.jahan@talentxcel.co.in`".

### Option D: Zoho Mail
1. Log into **Zoho Mail Control Panel** (`mailadmin.zoho.in` or `.com`).
2. Go to **User Management** > Select **Sanobar Jahan**.
3. Select **Mail Accounts** > Click **Add New Alias**.
4. Add `contact@talentxcel.co.in`, `careers@talentxcel.co.in`, `support@talentxcel.co.in`.
5. Click **Save**.

---

## 4. VERIFICATION CHECKLIST

- [x] Visible email addresses remain departmental (`contact@`, `careers@`, etc.).
- [x] All mailto links include `cc=sanobar.jahan@talentxcel.co.in`.
- [x] `LeadCaptureForm` triggers email compilation to `sanobar.jahan@talentxcel.co.in` (CC: `contact@talentxcel.co.in`).
- [x] `LeadCaptureForm` success view displays verification badge and fallback direct email launch button.
- [x] `Contact.tsx` dispatches inquiries to `sanobar.jahan@talentxcel.co.in` (CC: `contact@talentxcel.co.in`).
- [x] Careers page application links route to `careers@` with CC to `sanobar.jahan@`.
- [x] Server-level forwarding documented for Google Workspace, cPanel, M365, and Zoho.
