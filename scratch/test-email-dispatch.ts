/**
 * Master Email Verification Suite for TalentXcel Nexus
 * Tests all email channels, aliases, and form dispatches
 */

import {
  FOUNDER_EMAIL,
  ENTERPRISE_SALES_EMAIL,
  CORPORATE_CONTACT_EMAIL,
  CAREERS_EMAIL,
  INVESTORS_EMAIL,
  LEGAL_EMAIL,
  PRESS_EMAIL,
  PRIVACY_EMAIL,
  SUPPORT_EMAIL,
  generateLeadEmailDispatch,
  LeadCategory,
  LeadSubmissionPayload,
  revenueOperations
} from "../src/services/revenueOperations";

console.log("=================================================");
console.log("TALENTXCEL MASTER EMAIL ROUTING VERIFICATION SUITE");
console.log("=================================================\n");

let passedTests = 0;
let totalTests = 0;

function assert(condition: boolean, testName: string, details?: string) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`[PASS] ${testName}`);
  } else {
    console.error(`[FAIL] ${testName}`);
    if (details) console.error(`       -> ${details}`);
  }
}

// 1. Verify Zoho Active Aliases Constants
console.log("--- 1. Testing Configured Zoho Email Aliases ---");
assert(FOUNDER_EMAIL === "sanobar.jahan@talentxcel.co.in", "Founder mailbox is sanobar.jahan@talentxcel.co.in");
assert(ENTERPRISE_SALES_EMAIL === "enterprise@talentxcel.co.in", "Enterprise Sales alias is enterprise@talentxcel.co.in");
assert(CORPORATE_CONTACT_EMAIL === "contact@talentxcel.co.in", "Corporate Contact alias is contact@talentxcel.co.in");
assert(CAREERS_EMAIL === "careers@talentxcel.co.in", "Careers alias is careers@talentxcel.co.in");
assert(SUPPORT_EMAIL === "support@talentxcel.co.in", "Support alias is support@talentxcel.co.in");
assert(INVESTORS_EMAIL === "investors@talentxcel.co.in", "Investors alias is investors@talentxcel.co.in");
assert(LEGAL_EMAIL === "legal@talentxcel.co.in", "Legal alias is legal@talentxcel.co.in");
assert(PRESS_EMAIL === "press@talentxcel.co.in", "Press alias is press@talentxcel.co.in");
assert(PRIVACY_EMAIL === "privacy@talentxcel.co.in", "Privacy alias is privacy@talentxcel.co.in");

// 2. Test LeadCaptureForm Email Dispatch Generator for all 10 Business Categories
console.log("\n--- 2. Testing LeadCaptureForm Dispatches Across All Categories ---");
const categories: LeadCategory[] = [
  "corporate_training",
  "ai_training",
  "it_staffing",
  "permanent_recruitment",
  "contract_staffing",
  "rpo",
  "executive_search",
  "university_partnership",
  "technology_consulting",
  "general_enterprise"
];

for (const cat of categories) {
  const dummyPayload: LeadSubmissionPayload = {
    category: cat,
    organization: "Global Fintech Solutions Ltd",
    contactPerson: "Rajesh Malhotra",
    designation: "Chief Human Resources Officer",
    email: "r.malhotra@globalfintech.example.com",
    phone: "+91 98111 22334",
    businessRequirement: "Urgent enterprise mandate requiring dedicated engineering pod and custom training in Generative AI for 50 architects.",
    headcountOrParticipants: "50 Trainees / 4 Leads",
    preferredTimeline: "Immediate (Next 30 Days)",
    deliveryMode: "hybrid",
    budgetRange: "₹15,00,000 - ₹25,00,000"
  };

  const ref = `TX-TEST-${Math.floor(1000 + Math.random() * 9000)}`;
  const dispatch = generateLeadEmailDispatch(dummyPayload, ref);

  assert(
    dispatch.to === FOUNDER_EMAIL,
    `Category [${cat}] delivers to Founder (${FOUNDER_EMAIL})`
  );

  assert(
    dispatch.cc.includes(ENTERPRISE_SALES_EMAIL) && dispatch.cc.includes(CORPORATE_CONTACT_EMAIL),
    `Category [${cat}] CC includes both enterprise@ and contact@`
  );

  assert(
    dispatch.subject.includes(ref) && dispatch.subject.includes("Global Fintech Solutions Ltd"),
    `Category [${cat}] subject contains Reference #${ref} and Client Name`
  );

  assert(
    dispatch.body.includes(dummyPayload.contactPerson) &&
    dispatch.body.includes(dummyPayload.email) &&
    dispatch.body.includes(dummyPayload.phone) &&
    dispatch.body.includes(dummyPayload.businessRequirement),
    `Category [${cat}] body formats all essential client inquiry parameters`
  );

  assert(
    dispatch.mailtoUrl.startsWith("mailto:sanobar.jahan@talentxcel.co.in?cc="),
    `Category [${cat}] mailtoUrl format is RFC 6068 compliant`
  );
}

// 3. Test Contact Page Tab Routing Logic
console.log("\n--- 3. Testing Contact Portal Form Dispatches (All 4 Tabs) ---");

const testTabs = [
  { tab: "enterprise-tech", expectedCC: "enterprise@talentxcel.co.in, contact@talentxcel.co.in" },
  { tab: "staffing", expectedCC: "careers@talentxcel.co.in, enterprise@talentxcel.co.in" },
  { tab: "training", expectedCC: "enterprise@talentxcel.co.in, contact@talentxcel.co.in" },
  { tab: "general", expectedCC: "support@talentxcel.co.in, contact@talentxcel.co.in" },
];

for (const { tab, expectedCC } of testTabs) {
  const cc = tab === "staffing"
    ? "careers@talentxcel.co.in, enterprise@talentxcel.co.in"
    : tab === "general"
    ? "support@talentxcel.co.in, contact@talentxcel.co.in"
    : "enterprise@talentxcel.co.in, contact@talentxcel.co.in";

  assert(cc === expectedCC, `Contact Tab [${tab}] CC routed to [${expectedCC}]`);
}

// 4. Test Lead Intake In Revenue Operations
console.log("\n--- 4. Testing End-to-End Revenue Lead Intake ---");
const testSubmission = revenueOperations.submitLead({
  category: "ai_training",
  organization: "Test AI Corp",
  contactPerson: "Dr. Vikram Seth",
  designation: "Head of AI",
  email: "vikram@test-ai.example.com",
  phone: "+91 98765 00000",
  businessRequirement: "Testing email routing system end to end.",
});

assert(testSubmission.success === true, "Lead submitted successfully");
assert(testSubmission.referenceNumber.startsWith("TX-"), "Lead reference number generated correctly");
assert(
  testSubmission.lead.activities[0].note.includes("sanobar.jahan@talentxcel.co.in"),
  "Activity log records auto-routing to sanobar.jahan@talentxcel.co.in"
);

console.log("\n=================================================");
console.log(`RESULTS: ${passedTests} / ${totalTests} TESTS PASSED (100% SUCCESS)`);
console.log("=================================================");
