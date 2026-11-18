/**
 * TalentXcel Revenue Operations & Lead Management System
 * Central architecture for B2B Demand Generation, Pipeline Management, and Deal Tracking.
 */

import { growthTracking } from "./growthTracking";

export const FOUNDER_EMAIL = "sanobar.jahan@talentxcel.co.in";
export const ENTERPRISE_SALES_EMAIL = "enterprise@talentxcel.co.in";
export const CORPORATE_CONTACT_EMAIL = "contact@talentxcel.co.in";
export const CAREERS_EMAIL = "careers@talentxcel.co.in";
export const INVESTORS_EMAIL = "investors@talentxcel.co.in";
export const LEGAL_EMAIL = "legal@talentxcel.co.in";
export const PRESS_EMAIL = "press@talentxcel.co.in";
export const PRIVACY_EMAIL = "privacy@talentxcel.co.in";
export const SUPPORT_EMAIL = "support@talentxcel.co.in";

export type LeadCategory =
  | "corporate_training"
  | "ai_training"
  | "it_staffing"
  | "permanent_recruitment"
  | "contract_staffing"
  | "rpo"
  | "executive_search"
  | "university_partnership"
  | "technology_consulting"
  | "general_enterprise";

export type LeadStage =
  | "new"
  | "contact_attempted"
  | "contacted"
  | "qualified"
  | "discovery_scheduled"
  | "requirement_confirmed"
  | "proposal_in_preparation"
  | "proposal_sent"
  | "negotiation"
  | "won"
  | "lost"
  | "nurture";

export interface ActivityLog {
  id: string;
  timestamp: string;
  author: string;
  action: string;
  note: string;
}

export interface Lead {
  id: string;
  referenceNumber: string; // e.g. TX-2026-8941
  category: LeadCategory;
  organization: string;
  contactPerson: string;
  designation?: string;
  email: string;
  phone: string;
  businessRequirement: string;
  specificInterests?: string[];
  headcountOrParticipants?: string;
  preferredTimeline?: string;
  budgetRange?: string;
  deliveryMode?: "onsite" | "virtual" | "hybrid" | "contingent" | "dedicated_pod";
  location?: string;
  landingPage: string;
  source: string;
  medium: string;
  campaign?: string;
  referrer?: string;
  createdAt: string;
  updatedAt: string;
  assignedOwner: string;
  stage: LeadStage;
  nextFollowUpDate?: string;
  lastContactedAt?: string;
  estimatedDealValue: number; // in INR
  proposalValue?: number; // in INR
  closedRevenue?: number; // in INR
  lostReason?: string;
  consentMetadata: {
    consentGiven: boolean;
    timestamp: string;
    ipNotice: string;
  };
  activities: ActivityLog[];
}

export interface LeadSubmissionPayload {
  category: LeadCategory;
  organization: string;
  contactPerson: string;
  designation?: string;
  email: string;
  phone: string;
  businessRequirement: string;
  specificInterests?: string[];
  headcountOrParticipants?: string;
  preferredTimeline?: string;
  budgetRange?: string;
  deliveryMode?: "onsite" | "virtual" | "hybrid" | "contingent" | "dedicated_pod";
  location?: string;
  landingPage?: string;
}

export interface PipelineMetrics {
  totalLeads: number;
  newLeadsCount: number;
  qualifiedLeadsCount: number;
  proposalsSentCount: number;
  wonDealsCount: number;
  lostDealsCount: number;
  totalPipelineValue: number; // INR
  weightedPipelineValue: number; // INR
  totalCollectedRevenue: number; // INR
  winRatePercentage: number;
  leadsByCategory: Record<LeadCategory, number>;
  leadsByStage: Record<LeadStage, number>;
}

const STORAGE_KEY = "talentxcel_revenue_leads_v2";

/**
 * Seed initial baseline leads to demonstrate operational pipeline telemetry.
 */
const INITIAL_BASELINE_LEADS: Lead[] = [
  {
    id: "lead_tx_001",
    referenceNumber: "TX-2026-1042",
    category: "ai_training",
    organization: "NexGen Financial Technologies Ltd",
    contactPerson: "Rajesh Malhotra",
    designation: "Head of L&D and Human Capital",
    email: "r.malhotra@nexgenfintech.example.com",
    phone: "+91 98201 44821",
    businessRequirement: "2-Day Generative AI & Copilot Productivity Bootcamp for 65 business analysts and project managers.",
    specificInterests: ["Generative AI Workplace Productivity", "Prompt Engineering", "Security & Data Privacy"],
    headcountOrParticipants: "50-100 employees",
    preferredTimeline: "Immediate (Next 30 Days)",
    budgetRange: "₹4,50,000 - ₹6,00,000",
    deliveryMode: "hybrid",
    location: "Noida / Gurugram, India",
    landingPage: "/corporate-training/ai-training",
    source: "google_organic",
    medium: "organic_search",
    campaign: "q4_ai_workforce",
    referrer: "https://www.google.com/",
    createdAt: "2026-11-12T10:30:00Z",
    updatedAt: "2026-11-16T14:20:00Z",
    assignedOwner: "Arshid Wani (Practice Lead - L&D)",
    stage: "proposal_sent",
    nextFollowUpDate: "2026-11-20",
    lastContactedAt: "2026-11-16T14:20:00Z",
    estimatedDealValue: 550000,
    proposalValue: 520000,
    closedRevenue: 0,
    consentMetadata: {
      consentGiven: true,
      timestamp: "2026-11-12T10:30:00Z",
      ipNotice: "DPDP Act Notice Accepted"
    },
    activities: [
      {
        id: "act_001",
        timestamp: "2026-11-12T10:30:00Z",
        author: "System Intake",
        action: "Inquiry Received",
        note: "Submitted via AI Training landing page."
      },
      {
        id: "act_002",
        timestamp: "2026-11-13T11:00:00Z",
        author: "Arshid Wani",
        action: "Discovery Call Completed",
        note: "Client requires customized exercises using synthetic financial datasets. 65 participants across 2 cohorts."
      },
      {
        id: "act_003",
        timestamp: "2026-11-16T14:20:00Z",
        author: "Arshid Wani",
        action: "Proposal Dispatched",
        note: "Sent Commercial Proposal Ref TX-PROP-2026-081 for ₹5,20,000 + GST."
      }
    ]
  },
  {
    id: "lead_tx_002",
    referenceNumber: "TX-2026-1043",
    category: "it_staffing",
    organization: "SolarEdge Energy Systems India",
    contactPerson: "Pooja Varma",
    designation: "VP Engineering",
    email: "pooja.varma@solaredge-india.example.com",
    phone: "+91 97112 55920",
    businessRequirement: "Mandate for 5 Senior Microservices & Python/Go Engineers for renewable telemetry aggregation pod.",
    specificInterests: ["Python", "Golang", "Kubernetes", "Kafka", "Edge Telemetry"],
    headcountOrParticipants: "5 Engineers",
    preferredTimeline: "Joining within 45 Days",
    budgetRange: "₹18-24 LPA per engineer",
    deliveryMode: "dedicated_pod",
    location: "Noida Sector 62 / Hybrid",
    landingPage: "/staffing-solutions/it-staffing",
    source: "direct_corporate",
    medium: "website_referral",
    campaign: "enterprise_staffing",
    referrer: "https://talentxcel.co.in/case-studies",
    createdAt: "2026-11-14T09:15:00Z",
    updatedAt: "2026-11-17T16:00:00Z",
    assignedOwner: "Talent Solutions Practice Head",
    stage: "requirement_confirmed",
    nextFollowUpDate: "2026-11-21",
    lastContactedAt: "2026-11-17T16:00:00Z",
    estimatedDealValue: 1200000,
    proposalValue: 1080000,
    closedRevenue: 0,
    consentMetadata: {
      consentGiven: true,
      timestamp: "2026-11-14T09:15:00Z",
      ipNotice: "DPDP Act Notice Accepted"
    },
    activities: [
      {
        id: "act_004",
        timestamp: "2026-11-14T09:15:00Z",
        author: "System Intake",
        action: "Inquiry Received",
        note: "Inquiry submitted requesting IT Staffing & Developer pod."
      },
      {
        id: "act_005",
        timestamp: "2026-11-17T16:00:00Z",
        author: "Talent Solutions Head",
        action: "Job Spec Scoped",
        note: "Reviewed architecture specs. 5 roles approved. Contingency 8.33% commercial term under review."
      }
    ]
  },
  {
    id: "lead_tx_003",
    referenceNumber: "TX-2026-1039",
    category: "university_partnership",
    organization: "Apex Institute of Engineering & Technology",
    contactPerson: "Dr. K. S. Sundaram",
    designation: "Dean - Industry Relations & Placements",
    email: "placement.dean@apex-eng.example.edu.in",
    phone: "+91 94441 33201",
    businessRequirement: "Institutional MoU for 250 pre-final year engineering students: Live-Project AI & Full-Stack Internship Academy.",
    specificInterests: ["Campus Employability", "Live Project Internships", "Faculty Development"],
    headcountOrParticipants: "250 students",
    preferredTimeline: "Spring Semester (Jan 2027)",
    budgetRange: "Institutional Grant + Student Subsidized",
    deliveryMode: "hybrid",
    location: "Greater Noida, UP",
    landingPage: "/university-partnerships",
    source: "referral_partner",
    medium: "university_network",
    createdAt: "2026-11-08T11:45:00Z",
    updatedAt: "2026-11-15T10:00:00Z",
    assignedOwner: "Academies & Partnerships Head",
    stage: "discovery_scheduled",
    nextFollowUpDate: "2026-11-22",
    lastContactedAt: "2026-11-15T10:00:00Z",
    estimatedDealValue: 750000,
    closedRevenue: 0,
    consentMetadata: {
      consentGiven: true,
      timestamp: "2026-11-08T11:45:00Z",
      ipNotice: "DPDP Act Notice Accepted"
    },
    activities: [
      {
        id: "act_006",
        timestamp: "2026-11-08T11:45:00Z",
        author: "System Intake",
        action: "MoU Inquiry Received",
        note: "Dean requested structured syllabus review."
      }
    ]
  },
  {
    id: "lead_tx_004",
    referenceNumber: "TX-2026-1025",
    category: "permanent_recruitment",
    organization: "Krypton Global Healthcare Analytics",
    contactPerson: "Ananya Deshmukh",
    designation: "Director - Talent Acquisition",
    email: "ananya.d@kryptonhealth.example.com",
    phone: "+91 98210 99402",
    businessRequirement: "Executive search for Lead Data Engineer (HIPAA/Clinical Data Ingestion) & 2 Senior Full-Stack Specialists.",
    headcountOrParticipants: "3 Key Hires",
    preferredTimeline: "Closed & Onboarded",
    deliveryMode: "contingent",
    location: "Noida / Remote",
    landingPage: "/staffing-solutions/permanent-recruitment",
    source: "linkedin_inbound",
    medium: "social_referral",
    createdAt: "2026-10-15T14:00:00Z",
    updatedAt: "2026-11-10T12:00:00Z",
    assignedOwner: "Talent Solutions Practice Head",
    stage: "won",
    lastContactedAt: "2026-11-10T12:00:00Z",
    estimatedDealValue: 480000,
    proposalValue: 480000,
    closedRevenue: 480000,
    consentMetadata: {
      consentGiven: true,
      timestamp: "2026-10-15T14:00:00Z",
      ipNotice: "DPDP Act Notice Accepted"
    },
    activities: [
      {
        id: "act_007",
        timestamp: "2026-10-15T14:00:00Z",
        author: "System Intake",
        action: "Inquiry Received",
        note: "Direct hire mandate submitted."
      },
      {
        id: "act_008",
        timestamp: "2026-11-02T15:30:00Z",
        author: "Talent Solutions Head",
        action: "Candidates Placed & Offer Accepted",
        note: "Candidate joined Nov 02. Invoice issued."
      },
      {
        id: "act_009",
        timestamp: "2026-11-10T12:00:00Z",
        author: "Finance Operations",
        action: "Payment Collected",
        note: "Full recruitment fee of ₹4,80,000 realized via NEFT."
      }
    ]
  }
];

class RevenueOperationsEngine {
  private leads: Lead[] = [];

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage() {
    try {
      if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          this.leads = JSON.parse(stored);
          return;
        }
      }
      this.leads = INITIAL_BASELINE_LEADS;
      this.persist();
    } catch {
      this.leads = INITIAL_BASELINE_LEADS;
    }
  }

  private persist() {
    try {
      if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.leads));
      }
    } catch (err) {
      console.error("Failed to persist revenue leads:", err);
    }
  }

  public getLeads(): Lead[] {
    return [...this.leads].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  public getLeadById(id: string): Lead | undefined {
    return this.leads.find((l) => l.id === id);
  }

  public submitLead(payload: LeadSubmissionPayload): {
    success: boolean;
    referenceNumber: string;
    lead: Lead;
  } {
    // Generate unique random reference number
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const year = new Date().getFullYear();
    const referenceNumber = `TX-${year}-${randomSuffix}`;
    const id = `lead_${Date.now()}_${randomSuffix}`;
    const now = new Date().toISOString();

    // Parse URL params or retrieve active session attribution
    let utmSource = "direct_web";
    let utmMedium = "organic";
    let utmCampaign = "none";
    if (typeof window !== "undefined") {
      const attr = growthTracking.getAttribution();
      utmSource = attr.source || "direct_web";
      utmMedium = attr.medium || "organic";
      utmCampaign = attr.campaign || "website_conversion";
    }

    // Default deal estimates based on category
    let estimatedDealValue = 250000;
    if (payload.category === "ai_training" || payload.category === "corporate_training") {
      estimatedDealValue = 400000;
    } else if (payload.category === "it_staffing" || payload.category === "rpo") {
      estimatedDealValue = 850000;
    } else if (payload.category === "executive_search") {
      estimatedDealValue = 600000;
    } else if (payload.category === "university_partnership") {
      estimatedDealValue = 500000;
    }

    const newLead: Lead = {
      id,
      referenceNumber,
      category: payload.category,
      organization: payload.organization,
      contactPerson: payload.contactPerson,
      designation: payload.designation || "Business Decision Maker",
      email: payload.email,
      phone: payload.phone,
      businessRequirement: payload.businessRequirement,
      specificInterests: payload.specificInterests || [],
      headcountOrParticipants: payload.headcountOrParticipants || "Under Scoping",
      preferredTimeline: payload.preferredTimeline || "Immediate (1-3 months)",
      budgetRange: payload.budgetRange || "To be discussed",
      deliveryMode: payload.deliveryMode || "hybrid",
      location: payload.location || "India / Global",
      landingPage: payload.landingPage || (typeof window !== "undefined" ? window.location.pathname : "/"),
      source: utmSource,
      medium: utmMedium,
      campaign: utmCampaign,
      referrer: typeof document !== "undefined" ? document.referrer || "direct" : "direct",
      createdAt: now,
      updatedAt: now,
      assignedOwner: "Unassigned Queue (Noida Ops)",
      stage: "new",
      estimatedDealValue,
      consentMetadata: {
        consentGiven: true,
        timestamp: now,
        ipNotice: "DPDP Act Consent Registered"
      },
      activities: [
        {
          id: `act_${Date.now()}`,
          timestamp: now,
          author: "System Intake",
          action: "Lead Submitted & Routed",
          note: `New inquiry submitted for ${payload.category} by ${payload.contactPerson} (${payload.organization}). Auto-routed to ${FOUNDER_EMAIL} (CC: ${CORPORATE_CONTACT_EMAIL}).`
        }
      ]
    };

    this.leads.unshift(newLead);
    this.persist();

    // Trigger async optional webhook / mailto dispatch
    this.dispatchWebhook(newLead);

    return {
      success: true,
      referenceNumber,
      lead: newLead
    };
  }

  private dispatchWebhook(lead: Lead) {
    const apiEndpoint =
      typeof import.meta !== "undefined" && import.meta.env
        ? import.meta.env.VITE_CONTACT_API_ENDPOINT
        : undefined;
    if (apiEndpoint && typeof fetch !== "undefined") {
      try {
        fetch(apiEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...lead,
            routedTo: FOUNDER_EMAIL,
            cc: CORPORATE_CONTACT_EMAIL,
          })
        }).catch((err) => console.warn("Webhook dispatch fallback:", err));
      } catch (err) {
        console.warn("Webhook network issue:", err);
      }
    }
  }

  public updateLeadStage(
    id: string,
    newStage: LeadStage,
    note?: string,
    author: string = "Revenue Ops"
  ): boolean {
    const lead = this.leads.find((l) => l.id === id);
    if (!lead) return false;

    const oldStage = lead.stage;
    lead.stage = newStage;
    lead.updatedAt = new Date().toISOString();

    if (newStage === "won" && !lead.closedRevenue && lead.proposalValue) {
      lead.closedRevenue = lead.proposalValue;
    }

    lead.activities.push({
      id: `act_${Date.now()}`,
      timestamp: new Date().toISOString(),
      author,
      action: `Stage Changed: ${oldStage} -> ${newStage}`,
      note: note || `Stage updated to ${newStage}`
    });

    this.persist();
    return true;
  }

  public updateLeadDetails(
    id: string,
    updates: Partial<Pick<Lead, "assignedOwner" | "nextFollowUpDate" | "estimatedDealValue" | "proposalValue" | "closedRevenue" | "lostReason">>,
    author: string = "Revenue Ops"
  ): boolean {
    const lead = this.leads.find((l) => l.id === id);
    if (!lead) return false;

    Object.assign(lead, updates, { updatedAt: new Date().toISOString() });
    lead.activities.push({
      id: `act_${Date.now()}`,
      timestamp: new Date().toISOString(),
      author,
      action: "Lead Details Updated",
      note: `Updated attributes: ${Object.keys(updates).join(", ")}`
    });

    this.persist();
    return true;
  }

  public addActivityNote(id: string, note: string, author: string = "Revenue Ops"): boolean {
    const lead = this.leads.find((l) => l.id === id);
    if (!lead) return false;

    lead.activities.push({
      id: `act_${Date.now()}`,
      timestamp: new Date().toISOString(),
      author,
      action: "Note Added",
      note
    });
    lead.updatedAt = new Date().toISOString();
    this.persist();
    return true;
  }

  public getPipelineMetrics(): PipelineMetrics {
    const totalLeads = this.leads.length;
    let newLeadsCount = 0;
    let qualifiedLeadsCount = 0;
    let proposalsSentCount = 0;
    let wonDealsCount = 0;
    let lostDealsCount = 0;
    let totalPipelineValue = 0;
    let weightedPipelineValue = 0;
    let totalCollectedRevenue = 0;

    const leadsByCategory: Record<LeadCategory, number> = {
      corporate_training: 0,
      ai_training: 0,
      it_staffing: 0,
      permanent_recruitment: 0,
      contract_staffing: 0,
      rpo: 0,
      executive_search: 0,
      university_partnership: 0,
      technology_consulting: 0,
      general_enterprise: 0
    };

    const leadsByStage: Record<LeadStage, number> = {
      new: 0,
      contact_attempted: 0,
      contacted: 0,
      qualified: 0,
      discovery_scheduled: 0,
      requirement_confirmed: 0,
      proposal_in_preparation: 0,
      proposal_sent: 0,
      negotiation: 0,
      won: 0,
      lost: 0,
      nurture: 0
    };

    // Stage weights for pipeline forecasting
    const stageWeights: Record<LeadStage, number> = {
      new: 0.1,
      contact_attempted: 0.15,
      contacted: 0.2,
      qualified: 0.4,
      discovery_scheduled: 0.5,
      requirement_confirmed: 0.65,
      proposal_in_preparation: 0.7,
      proposal_sent: 0.8,
      negotiation: 0.9,
      won: 1.0,
      lost: 0.0,
      nurture: 0.05
    };

    this.leads.forEach((l) => {
      // Categories
      if (leadsByCategory[l.category] !== undefined) {
        leadsByCategory[l.category]++;
      }
      // Stages
      if (leadsByStage[l.stage] !== undefined) {
        leadsByStage[l.stage]++;
      }

      if (l.stage === "new") newLeadsCount++;
      if (l.stage === "qualified") qualifiedLeadsCount++;
      if (l.stage === "proposal_sent" || l.stage === "negotiation") proposalsSentCount++;
      if (l.stage === "won") wonDealsCount++;
      if (l.stage === "lost") lostDealsCount++;

      // Financials
      if (l.stage !== "lost") {
        const val = l.proposalValue || l.estimatedDealValue || 0;
        totalPipelineValue += val;
        weightedPipelineValue += val * (stageWeights[l.stage] || 0.1);
      }

      if (l.closedRevenue) {
        totalCollectedRevenue += l.closedRevenue;
      }
    });

    const closedAttempts = wonDealsCount + lostDealsCount;
    const winRatePercentage = closedAttempts > 0 ? Math.round((wonDealsCount / closedAttempts) * 100) : 0;

    return {
      totalLeads,
      newLeadsCount,
      qualifiedLeadsCount,
      proposalsSentCount,
      wonDealsCount,
      lostDealsCount,
      totalPipelineValue,
      weightedPipelineValue: Math.round(weightedPipelineValue),
      totalCollectedRevenue,
      winRatePercentage,
      leadsByCategory,
      leadsByStage
    };
  }

  public exportLeadsCSV(): string {
    const headers = [
      "Reference Number",
      "Category",
      "Organization",
      "Contact Person",
      "Designation",
      "Email",
      "Phone",
      "Stage",
      "Assigned Owner",
      "Estimated Deal Value (INR)",
      "Proposal Value (INR)",
      "Closed Revenue (INR)",
      "Next Follow-Up",
      "Source",
      "Medium",
      "Campaign",
      "Created At"
    ];

    const rows = this.leads.map((l) => [
      `"${l.referenceNumber}"`,
      `"${l.category}"`,
      `"${l.organization.replace(/"/g, '""')}"`,
      `"${l.contactPerson.replace(/"/g, '""')}"`,
      `"${(l.designation || "").replace(/"/g, '""')}"`,
      `"${l.email}"`,
      `"${l.phone}"`,
      `"${l.stage}"`,
      `"${l.assignedOwner}"`,
      l.estimatedDealValue || 0,
      l.proposalValue || 0,
      l.closedRevenue || 0,
      `"${l.nextFollowUpDate || ""}"`,
      `"${l.source}"`,
      `"${l.medium}"`,
      `"${l.campaign || ""}"`,
      `"${l.createdAt}"`
    ]);

    return [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
  }
}

export const revenueOperations = new RevenueOperationsEngine();

export const getLeadCategoryLabel = (category: LeadCategory): string => {
  const map: Record<LeadCategory, string> = {
    corporate_training: "Corporate Workforce Training",
    ai_training: "AI & Generative AI Training",
    it_staffing: "Specialized IT Staffing & Pods",
    permanent_recruitment: "Permanent Recruitment & Direct Hire",
    contract_staffing: "Contract Staffing",
    rpo: "Recruitment Process Outsourcing (RPO)",
    executive_search: "Executive & Leadership Search",
    university_partnership: "University Partnership & Institutional MoU",
    technology_consulting: "Enterprise Technology Consulting",
    general_enterprise: "General Enterprise Inquiry",
  };
  return map[category] || category;
};

export interface LeadEmailDispatch {
  to: string;
  cc: string;
  subject: string;
  body: string;
  mailtoUrl: string;
}

export const generateLeadEmailDispatch = (
  lead: LeadSubmissionPayload | Lead,
  referenceNumber?: string
): LeadEmailDispatch => {
  const categoryLabel = getLeadCategoryLabel(lead.category);
  const refText = referenceNumber ? ` (Ref: ${referenceNumber})` : "";
  const subject = `[TalentXcel Lead${refText}] ${categoryLabel} - ${lead.organization}`;

  const body = 
`TALENTXCEL ENTERPRISE INQUIRY NOTIFICATION
=====================================================
Executive Recipient: Founder & Managing Director Desk
Primary: ${FOUNDER_EMAIL}
Department CC: ${ENTERPRISE_SALES_EMAIL}, ${CORPORATE_CONTACT_EMAIL}
=====================================================

REFERENCE NUMBER: ${referenceNumber || "PENDING"}
ENGAGEMENT CATEGORY: ${categoryLabel}

CLIENT / INSTITUTION DETAILS:
- Organization: ${lead.organization}
- Contact Person: ${lead.contactPerson}
- Designation: ${lead.designation || "Not Specified"}
- Business Email: ${lead.email}
- Telephone / Mobile: ${lead.phone}

REQUIREMENT SCOPE & OBJECTIVES:
${lead.businessRequirement}

DELIVERY & PARAMETERS:
- Participants / Vacancies Needed: ${lead.headcountOrParticipants || "Under Scoping"}
- Expected Timeline: ${lead.preferredTimeline || "Immediate (Next 30 Days)"}
- Delivery Mode: ${lead.deliveryMode || "hybrid"}
- Budget Range: ${lead.budgetRange || "Under Scoping"}

SOURCE ATTRIBUTION:
- Source URL: ${typeof window !== "undefined" ? window.location.href : "Website Lead Intake"}
- Timestamp: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
=====================================================
Strict DPDP Act Confidentiality Enforced.
TalentXcel Services Private Limited | Noida Headquarters`;

  const to = FOUNDER_EMAIL;
  const cc = `${ENTERPRISE_SALES_EMAIL}, ${CORPORATE_CONTACT_EMAIL}`;
  const mailtoUrl = `mailto:${to}?cc=${encodeURIComponent(cc)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return {
    to,
    cc,
    subject,
    body,
    mailtoUrl
  };
};
