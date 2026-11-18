import React, { useState, useEffect } from "react";
import NotFound from "./NotFound";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ShieldAlert,
  Download,
  Filter,
  Search,
  CheckCircle2,
  Clock,
  TrendingUp,
  DollarSign,
  Briefcase,
  Users,
  GraduationCap,
  Calendar,
  Lock,
  ArrowRight,
  RefreshCw,
  Sparkles,
  Phone,
  Mail,
  Building2,
  FileText,
  Globe,
  LineChart,
  Activity,
  ExternalLink,
  Layers,
  ShieldCheck,
  AlertTriangle
} from "lucide-react";
import {
  revenueOperations,
  generateLeadEmailDispatch,
  FOUNDER_EMAIL,
  Lead,
  LeadCategory,
  LeadStage,
  PipelineMetrics
} from "@/services/revenueOperations";
import { growthTracking, OutboundReferralEvent } from "@/services/growthTracking";

const STAGE_LABELS: Record<LeadStage, { label: string; color: string }> = {
  new: { label: "New Lead", color: "bg-blue-100 text-blue-800 border-blue-200" },
  contact_attempted: { label: "Contact Attempted", color: "bg-amber-100 text-amber-800 border-amber-200" },
  contacted: { label: "Contacted", color: "bg-purple-100 text-purple-800 border-purple-200" },
  qualified: { label: "Qualified", color: "bg-indigo-100 text-indigo-800 border-indigo-200" },
  discovery_scheduled: { label: "Discovery Scheduled", color: "bg-sky-100 text-sky-800 border-sky-200" },
  requirement_confirmed: { label: "Req Confirmed", color: "bg-cyan-100 text-cyan-800 border-cyan-200" },
  proposal_in_preparation: { label: "Proposal Prep", color: "bg-orange-100 text-orange-800 border-orange-200" },
  proposal_sent: { label: "Proposal Sent", color: "bg-amber-100 text-amber-900 border-amber-300 font-bold" },
  negotiation: { label: "Negotiation", color: "bg-pink-100 text-pink-800 border-pink-200 font-bold" },
  won: { label: "Deal Won (Closed)", color: "bg-emerald-100 text-emerald-800 border-emerald-300 font-bold" },
  lost: { label: "Deal Lost", color: "bg-rose-100 text-rose-800 border-rose-200" },
  nurture: { label: "Nurture Long-Term", color: "bg-slate-100 text-slate-800 border-slate-200" }
};

const CATEGORY_LABELS: Record<LeadCategory, string> = {
  corporate_training: "Corporate Training",
  ai_training: "AI Training & Bootcamp",
  it_staffing: "IT Staffing & Pods",
  permanent_recruitment: "Permanent Recruitment",
  contract_staffing: "Contract Staffing",
  rpo: "Enterprise RPO",
  executive_search: "Executive Search",
  university_partnership: "University MoU",
  technology_consulting: "Tech Consulting",
  general_enterprise: "General Enterprise"
};

const formatINR = (val: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(val);
};

const RevenuePortalContent = () => {
  const [activeTab, setActiveTab] = useState<"pipeline" | "growth_os">("pipeline");
  const [outboundReferrals, setOutboundReferrals] = useState<OutboundReferralEvent[]>([]);

  // Leads & Pipeline Data
  const [leads, setLeads] = useState<Lead[]>([]);
  const [metrics, setMetrics] = useState<PipelineMetrics | null>(null);

  // Filters
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStage, setSelectedStage] = useState<string>("all");

  // Selected Lead for Detail Modal
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [newNote, setNewNote] = useState("");
  const [newOwner, setNewOwner] = useState("");
  const [newFollowUp, setNewFollowUp] = useState("");
  const [newProposalVal, setNewProposalVal] = useState("");
  const [newClosedVal, setNewClosedVal] = useState("");

  const refreshData = () => {
    setLeads(revenueOperations.getLeads());
    setMetrics(revenueOperations.getPipelineMetrics());
    setOutboundReferrals(growthTracking.getOutboundReferrals());
  };

  useEffect(() => {
    refreshData();
  }, []);

  const handleStageChange = (newStage: LeadStage) => {
    if (!selectedLead) return;
    revenueOperations.updateLeadStage(selectedLead.id, newStage, `Stage updated to ${newStage}`);
    refreshData();
    setSelectedLead(revenueOperations.getLeadById(selectedLead.id) || null);
  };

  const handleSaveDetails = () => {
    if (!selectedLead) return;
    const updates: Partial<Lead> = {};
    if (newOwner.trim()) updates.assignedOwner = newOwner.trim();
    if (newFollowUp.trim()) updates.nextFollowUpDate = newFollowUp.trim();
    if (newProposalVal.trim()) updates.proposalValue = Number(newProposalVal);
    if (newClosedVal.trim()) updates.closedRevenue = Number(newClosedVal);

    revenueOperations.updateLeadDetails(selectedLead.id, updates);
    if (newNote.trim()) {
      revenueOperations.addActivityNote(selectedLead.id, newNote.trim());
      setNewNote("");
    }
    refreshData();
    setSelectedLead(revenueOperations.getLeadById(selectedLead.id) || null);
  };

  const handleExportCSV = () => {
    const csvContent = revenueOperations.exportLeadsCSV();
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `TalentXcel_Pipeline_Export_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtered Leads
  const filteredLeads = leads.filter((l) => {
    const matchesSearch =
      l.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.contactPerson.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.referenceNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === "all" || l.category === selectedCategory;
    const matchesStage = selectedStage === "all" || l.stage === selectedStage;

    return matchesSearch && matchesCategory && matchesStage;
  });


  return (
    <div className="min-h-screen bg-brand-soft">
      <Navbar />

      <main className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Security Environment Transparency Banner */}
        <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3">
          <ShieldAlert className="h-5 w-5 text-amber-700 flex-shrink-0 mt-0.5" />
          <div className="text-xs leading-relaxed">
            <strong>Internal Operator Staging Interface:</strong> This dashboard is operating in client-side demonstrator mode for local inquiry triage and pipeline simulation. In compliance with enterprise security and the Indian DPDP Act 2023, production multi-user operations require migration to authenticated server sessions (OAuth 2.0 / SSO) with database Row-Level Security (RLS). Do not process unencrypted sensitive financial or personal data.
          </div>
        </div>

        {/* Top Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Live Operations Engine</span>
            </div>
            <h1 className="text-3xl font-bold text-brand-navy tracking-tight">
              Revenue Operations &amp; Lead Management Portal
            </h1>
            <p className="text-xs sm:text-sm text-brand-muted mt-0.5">
              Accountable sales pipeline, deal stage tracking, proposal values, and realized revenue.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={refreshData}
              className="border-slate-300 text-brand-navy hover:bg-white"
            >
              <RefreshCw className="h-4 w-4 mr-1.5" /> Refresh
            </Button>
            <Button
              size="sm"
              onClick={handleExportCSV}
              className="bg-primary hover:bg-primary-hover text-white font-semibold"
            >
              <Download className="h-4 w-4 mr-1.5" /> Export Pipeline (CSV)
            </Button>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="flex border-b border-border/80 mb-8 bg-white/60 p-1.5 rounded-xl border border-slate-200 shadow-soft">
          <button
            onClick={() => setActiveTab("pipeline")}
            className={`flex-1 flex items-center justify-center space-x-2 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "pipeline"
                ? "bg-primary text-white shadow-soft"
                : "text-brand-muted hover:text-brand-navy hover:bg-slate-100"
            }`}
          >
            <Briefcase className="h-4 w-4" />
            <span>Commercial Lead Pipeline</span>
          </button>
          <button
            onClick={() => setActiveTab("growth_os")}
            className={`flex-1 flex items-center justify-center space-x-2 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "growth_os"
                ? "bg-primary text-white shadow-soft"
                : "text-brand-muted hover:text-brand-navy hover:bg-slate-100"
            }`}
          >
            <LineChart className="h-4 w-4" />
            <span>90-Day Growth &amp; Traffic OS</span>
          </button>
        </div>

        {activeTab === "pipeline" ? (
          <>

        {/* Executive KPI Grid */}
        {metrics && (
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            <Card className="p-5 border-border/80 bg-white shadow-soft">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-muted mb-1">
                Active Enquiries
              </div>
              <div className="text-2xl font-bold text-brand-navy">{metrics.totalLeads}</div>
              <div className="text-[11px] text-emerald-700 font-semibold mt-1">
                {metrics.newLeadsCount} New unassigned
              </div>
            </Card>

            <Card className="p-5 border-border/80 bg-white shadow-soft">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-muted mb-1">
                Total Pipeline Value
              </div>
              <div className="text-2xl font-bold text-brand-navy">
                {formatINR(metrics.totalPipelineValue)}
              </div>
              <div className="text-[11px] text-brand-muted mt-1">Gross unweighted value</div>
            </Card>

            <Card className="p-5 border-border/80 bg-white shadow-soft">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-muted mb-1">
                Weighted Forecast
              </div>
              <div className="text-2xl font-bold text-primary">
                {formatINR(metrics.weightedPipelineValue)}
              </div>
              <div className="text-[11px] text-brand-muted mt-1">Probability-adjusted</div>
            </Card>

            <Card className="p-5 border-border/80 bg-white shadow-soft">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-muted mb-1">
                Realized Revenue
              </div>
              <div className="text-2xl font-bold text-emerald-600">
                {formatINR(metrics.totalCollectedRevenue)}
              </div>
              <div className="text-[11px] text-brand-muted mt-1">Collected &amp; invoiced</div>
            </Card>

            <Card className="p-5 border-border/80 bg-white shadow-soft">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-muted mb-1">
                Deal Win Rate
              </div>
              <div className="text-2xl font-bold text-brand-navy">{metrics.winRatePercentage}%</div>
              <div className="text-[11px] text-brand-muted mt-1">
                {metrics.wonDealsCount} Won • {metrics.lostDealsCount} Lost
              </div>
            </Card>
          </div>
        )}

        {/* Filter Controls Bar */}
        <Card className="p-4 border-border/80 bg-white shadow-soft mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
            {/* Search */}
            <div className="sm:col-span-5 relative">
              <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted" />
              <Input
                placeholder="Search by company, person, email or ref..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 h-10 text-xs sm:text-sm"
              />
            </div>

            {/* Category Filter */}
            <div className="sm:col-span-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="h-10 text-xs sm:text-sm">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Service Categories</SelectItem>
                  {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
                    <SelectItem key={key} value={key}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Stage Filter */}
            <div className="sm:col-span-3">
              <Select value={selectedStage} onValueChange={setSelectedStage}>
                <SelectTrigger className="h-10 text-xs sm:text-sm">
                  <SelectValue placeholder="All Stages" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Stages</SelectItem>
                  {Object.entries(STAGE_LABELS).map(([key, { label }]) => (
                    <SelectItem key={key} value={key}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* Leads Table */}
        <Card className="border-border/80 bg-white shadow-soft overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-border/80 text-[11px] font-bold uppercase tracking-wider text-brand-muted">
                <tr>
                  <th className="py-3.5 px-4">Ref #</th>
                  <th className="py-3.5 px-4">Company / Contact</th>
                  <th className="py-3.5 px-4">Service Category</th>
                  <th className="py-3.5 px-4">Stage</th>
                  <th className="py-3.5 px-4">Deal Value</th>
                  <th className="py-3.5 px-4">Assigned Owner</th>
                  <th className="py-3.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-brand-muted">
                      No leads matching the selected filter criteria.
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead) => {
                    const stageConfig = STAGE_LABELS[lead.stage] || {
                      label: lead.stage,
                      color: "bg-gray-100 text-gray-800",
                    };
                    return (
                      <tr key={lead.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3.5 px-4 font-mono font-semibold text-primary">
                          {lead.referenceNumber}
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="font-bold text-brand-navy">{lead.organization}</div>
                          <div className="text-xs text-brand-muted">
                            {lead.contactPerson} {lead.designation ? `(${lead.designation})` : ""}
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="font-medium text-brand-charcoal text-xs">
                            {CATEGORY_LABELS[lead.category] || lead.category}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <span
                            className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${stageConfig.color}`}
                          >
                            {stageConfig.label}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-semibold text-brand-navy">
                          {formatINR(lead.proposalValue || lead.estimatedDealValue || 0)}
                        </td>
                        <td className="py-3.5 px-4 text-xs text-brand-muted">
                          {lead.assignedOwner}
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              setSelectedLead(lead);
                              setNewOwner(lead.assignedOwner || "");
                              setNewFollowUp(lead.nextFollowUpDate || "");
                              setNewProposalVal(lead.proposalValue?.toString() || "");
                              setNewClosedVal(lead.closedRevenue?.toString() || "");
                            }}
                            className="h-8 text-xs font-semibold border-slate-300"
                          >
                            Manage
                          </Button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </>
    ) : (
      /* Growth & Traffic OS View */
      <div className="space-y-8">
        {/* Telemetry & Attribution Status Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-5 border-border/80 bg-white shadow-soft">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                Google Search Console
              </span>
              <Badge variant="outline" className="bg-amber-50 text-amber-800 border-amber-300 text-[10px]">
                Awaiting Credentials
              </Badge>
            </div>
            <div className="text-lg font-bold text-brand-navy">Property sc-domain</div>
            <p className="text-xs text-brand-muted mt-1 leading-relaxed">
              Domain DNS verification ready. Connect GSC Service Account API to ingest daily clicks, impressions &amp; SERP position.
            </p>
          </Card>

          <Card className="p-5 border-border/80 bg-white shadow-soft">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                Google Analytics 4
              </span>
              <Badge variant="outline" className="bg-amber-50 text-amber-800 border-amber-300 text-[10px]">
                Stream Unconfigured
              </Badge>
            </div>
            <div className="text-lg font-bold text-brand-navy">G-Measurement ID</div>
            <p className="text-xs text-brand-muted mt-1 leading-relaxed">
              Client dataLayer initialized. Supply <code>VITE_GA4_MEASUREMENT_ID</code> to stream live sessions &amp; bounce events.
            </p>
          </Card>

          <Card className="p-5 border-border/80 bg-white shadow-soft">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                Multi-Touch UTM
              </span>
              <Badge variant="outline" className="bg-emerald-50 text-emerald-800 border-emerald-300 text-[10px]">
                Active In-App
              </Badge>
            </div>
            <div className="text-lg font-bold text-emerald-700">Client Engine Live</div>
            <p className="text-xs text-brand-muted mt-1 leading-relaxed">
              Session attribution captures <code>utm_source</code>, <code>utm_medium</code>, and campaign tags on all incoming links.
            </p>
          </Card>

          <Card className="p-5 border-border/80 bg-white shadow-soft">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                Robots &amp; Sitemaps
              </span>
              <Badge variant="outline" className="bg-emerald-50 text-emerald-800 border-emerald-300 text-[10px]">
                Hardened
              </Badge>
            </div>
            <div className="text-lg font-bold text-brand-navy">20 Core URLs</div>
            <p className="text-xs text-brand-muted mt-1 leading-relaxed">
              Indexed routes protected; <code>/revenue-portal</code> and <code>/admin</code> disallowed from search crawling.
            </p>
          </Card>
        </div>

        {/* Ecosystem Distribution Hub */}
        <Card className="p-6 border-border/80 bg-white shadow-soft">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/60 mb-4">
            <div>
              <h3 className="text-xl font-bold text-brand-navy">TalentXcel Connected Ecosystem Routing</h3>
              <p className="text-xs text-brand-muted">
                Verified status and outbound referral links across all 4 production ecosystem destinations.
              </p>
            </div>
            <Badge variant="secondary" className="text-xs">
              4 Active Domains
            </Badge>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                name: "TalentXcel Corporate",
                domain: "https://talentxcel.co.in",
                role: "Corporate HQ & B2B Inquiries",
                type: "Internal Application"
              },
              {
                name: "TalentXcel Jobs",
                domain: "https://talentxcel.in",
                role: "Candidate Job Portal & Profiles",
                type: "Outbound Referral"
              },
              {
                name: "TalentXcel Academy",
                domain: "https://talentxcel.net",
                role: "Learning Hub & Certifications",
                type: "Outbound Referral"
              },
              {
                name: "CHATR Enterprise",
                domain: "https://chatr.chat",
                role: "Secure AI Communication Layer",
                type: "Outbound Referral"
              }
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-border/70 bg-slate-50/60 space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-brand-navy font-bold">{item.name}</span>
                  <span className="font-mono text-[10px] text-primary">{item.type}</span>
                </div>
                <div className="text-xs text-brand-muted">{item.role}</div>
                <div className="pt-2">
                  <a
                    href={growthTracking.buildEcosystemUrl(item.domain, "growth_portal_test")}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      growthTracking.logOutboundReferral(
                        item.domain.includes(".in")
                          ? "talentxcel.in"
                          : item.domain.includes(".net")
                          ? "talentxcel.net"
                          : "chatr.chat",
                        item.domain,
                        "Growth Dashboard Check"
                      )
                    }
                    className="inline-flex items-center text-xs font-semibold text-primary hover:underline"
                  >
                    <span>{item.domain.replace("https://", "")}</span>
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Inbound Lead Channel Attribution Register */}
        <Card className="p-6 border-border/80 bg-white shadow-soft">
          <h3 className="text-xl font-bold text-brand-navy mb-1">Commercial Lead Acquisition Channels</h3>
          <p className="text-xs text-brand-muted mb-4">
            Real-time attribution captured from incoming customer inquiries across corporate campaigns.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-border/80 bg-slate-50/80 text-[11px] font-bold uppercase tracking-wider text-brand-navy">
                  <th className="py-2.5 px-3">Lead Ref</th>
                  <th className="py-2.5 px-3">Organization</th>
                  <th className="py-2.5 px-3">Acquisition Source</th>
                  <th className="py-2.5 px-3">Medium</th>
                  <th className="py-2.5 px-3">Campaign Tag</th>
                  <th className="py-2.5 px-3">Landing Route</th>
                  <th className="py-2.5 px-3 font-semibold">Pipeline Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {leads.map((l) => (
                  <tr key={l.id} className="hover:bg-slate-50/60">
                    <td className="py-2 px-3 font-mono text-primary font-bold">{l.referenceNumber}</td>
                    <td className="py-2 px-3 font-semibold text-brand-navy">{l.organization}</td>
                    <td className="py-2 px-3">
                      <span className="font-mono text-xs bg-slate-100 px-2 py-0.5 rounded text-slate-700">
                        {l.source}
                      </span>
                    </td>
                    <td className="py-2 px-3 text-xs text-brand-muted">{l.medium}</td>
                    <td className="py-2 px-3 text-xs text-brand-muted">{l.campaign || "none"}</td>
                    <td className="py-2 px-3 font-mono text-xs text-brand-muted">{l.landingPage}</td>
                    <td className="py-2 px-3 font-semibold text-brand-navy">
                      {formatINR(l.proposalValue || l.estimatedDealValue || 0)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Growth Experiments Register */}
        <Card className="p-6 border-border/80 bg-white shadow-soft">
          <div className="flex items-center justify-between pb-4 border-b border-border/60 mb-4">
            <div>
              <h3 className="text-xl font-bold text-brand-navy">Active 90-Day Growth Experiments</h3>
              <p className="text-xs text-brand-muted">
                Structured hypotheses, measurement windows, and primary conversion targets.
              </p>
            </div>
            <Badge variant="outline" className="text-xs">
              Phase 1: Days 1–10
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-4 text-xs">
            {[
              {
                id: "EXP-001",
                title: "Corporate Training Lead Form Conversion",
                channel: "Direct Organic Search",
                hypothesis: "Placing verified 4-Stage Practitioner Vetting and 3-5 hr weekly output gain stats above lead form will increase proposal requests by 25%.",
                kpi: "Lead Submission Rate (%)",
                status: "Running (Phase 1 Baseline)"
              },
              {
                id: "EXP-002",
                title: "Founder-Led Authority on LinkedIn",
                channel: "Organic Social / LinkedIn",
                hypothesis: "Bi-weekly thought leadership by Sanobar Jahan linking to India IT Hiring Trends Report will drive 150+ high-intent corporate inquiries.",
                kpi: "Inbound Referral Leads",
                status: "Scheduled (Days 11–30)"
              },
              {
                id: "EXP-003",
                title: "University MoU Syllabus Preview Download",
                channel: "Direct Institutional Outreach",
                hypothesis: "Providing direct download of Credit-Aligned AI Elective Syllabus will improve dean meeting bookings from 8% to 18%.",
                kpi: "Discovery Meetings Booked",
                status: "Design Phase"
              },
              {
                id: "EXP-004",
                title: "Ecosystem Candidate Job Board Cross-Referral",
                channel: "Internal Ecosystem Routing",
                hypothesis: "Contextual job links on Careers and Case Studies pages will direct 500+ qualified candidate views to talentxcel.in monthly.",
                kpi: "Outbound Referral Clicks",
                status: "Instrumented & Active"
              }
            ].map((exp) => (
              <div key={exp.id} className="p-4 rounded-xl border border-border/70 bg-slate-50/50 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-primary">{exp.id}</span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    {exp.status}
                  </span>
                </div>
                <div className="font-bold text-brand-navy text-sm">{exp.title}</div>
                <p className="text-brand-muted leading-relaxed">{exp.hypothesis}</p>
                <div className="pt-2 flex items-center justify-between text-[11px] border-t border-border/60 text-brand-muted">
                  <span>Channel: <strong className="text-brand-navy">{exp.channel}</strong></span>
                  <span>Target KPI: <strong className="text-primary">{exp.kpi}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    )}

        {/* Lead Details & Operations Modal */}
        <Dialog open={!!selectedLead} onOpenChange={(open) => !open && setSelectedLead(null)}>
          {selectedLead && (
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white p-6 sm:p-8">
              <DialogHeader className="border-b border-border/80 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-md">
                    {selectedLead.referenceNumber}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold border ${
                      STAGE_LABELS[selectedLead.stage].color
                    }`}
                  >
                    {STAGE_LABELS[selectedLead.stage].label}
                  </span>
                </div>
                <DialogTitle className="text-2xl font-bold text-brand-navy">
                  {selectedLead.organization}
                </DialogTitle>
                <p className="text-xs text-brand-muted">
                  Intake Category: <strong>{CATEGORY_LABELS[selectedLead.category]}</strong> • Created on{" "}
                  {new Date(selectedLead.createdAt).toLocaleDateString()}
                </p>
              </DialogHeader>

              {/* Main Lead Details Grid */}
              <div className="grid sm:grid-cols-2 gap-4 py-4 text-xs sm:text-sm">
                <div className="space-y-2 p-4 rounded-xl bg-slate-50 border border-border/60">
                  <div className="font-bold text-brand-charcoal uppercase tracking-wider text-[11px]">
                    Prospect Credentials
                  </div>
                  <div>
                    <strong>Contact Person:</strong> {selectedLead.contactPerson}
                  </div>
                  <div>
                    <strong>Role / Title:</strong> {selectedLead.designation || "Not provided"}
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Mail className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    <a href={`mailto:${selectedLead.email}`} className="text-primary hover:underline">
                      {selectedLead.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Phone className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    <a href={`tel:${selectedLead.phone}`} className="text-primary hover:underline">
                      {selectedLead.phone}
                    </a>
                  </div>
                  <div>
                    <strong>Location:</strong> {selectedLead.location || "N/A"}
                  </div>
                  <div className="pt-2">
                    <a
                      href={generateLeadEmailDispatch(selectedLead, selectedLead.referenceNumber).mailtoUrl}
                      className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary hover:underline bg-primary/10 px-2.5 py-1.5 rounded-lg border border-primary/20"
                    >
                      <Mail className="h-3 w-3" />
                      <span>Forward to Founder ({FOUNDER_EMAIL})</span>
                    </a>
                  </div>
                </div>

                <div className="space-y-2 p-4 rounded-xl bg-slate-50 border border-border/60">
                  <div className="font-bold text-brand-charcoal uppercase tracking-wider text-[11px]">
                    Commercial Scope
                  </div>
                  <div>
                    <strong>Participants / Scale:</strong>{" "}
                    {selectedLead.headcountOrParticipants || "Under Scoping"}
                  </div>
                  <div>
                    <strong>Preferred Timeline:</strong> {selectedLead.preferredTimeline}
                  </div>
                  <div>
                    <strong>Delivery Mode:</strong> {selectedLead.deliveryMode || "Hybrid"}
                  </div>
                  <div>
                    <strong>Source / Channel:</strong> {selectedLead.source} ({selectedLead.medium})
                  </div>
                  <div>
                    <strong>Landing Route:</strong> {selectedLead.landingPage}
                  </div>
                </div>
              </div>

              {/* Business Requirement Narrative */}
              <div className="p-4 rounded-xl bg-brand-soft border border-border/70 mb-4">
                <div className="text-[11px] font-bold uppercase tracking-wider text-brand-muted mb-1">
                  Submitted Business Requirement
                </div>
                <p className="text-xs sm:text-sm text-brand-navy leading-relaxed">
                  {selectedLead.businessRequirement}
                </p>
              </div>

              {/* Operations Control Bar: Stage Progression */}
              <div className="border-t border-border/80 pt-4 mb-4">
                <div className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-2">
                  Update Deal Stage
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {Object.entries(STAGE_LABELS).map(([stgKey, { label }]) => (
                    <Button
                      key={stgKey}
                      size="sm"
                      variant={selectedLead.stage === stgKey ? "default" : "outline"}
                      onClick={() => handleStageChange(stgKey as LeadStage)}
                      className={`text-[11px] h-7 px-2.5 ${
                        selectedLead.stage === stgKey
                          ? "bg-primary text-white"
                          : "border-slate-300 text-brand-muted hover:text-brand-navy"
                      }`}
                    >
                      {label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Operations Editable Form */}
              <div className="grid sm:grid-cols-2 gap-4 border-t border-border/80 pt-4 mb-4 text-xs sm:text-sm">
                <div>
                  <label className="block text-[11px] font-bold text-brand-muted uppercase mb-1">
                    Assigned Account Owner
                  </label>
                  <Input
                    value={newOwner}
                    onChange={(e) => setNewOwner(e.target.value)}
                    placeholder="e.g. Arshid Wani / Staffing Head"
                    className="h-9 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-brand-muted uppercase mb-1">
                    Next Follow-Up Date (YYYY-MM-DD)
                  </label>
                  <Input
                    type="date"
                    value={newFollowUp}
                    onChange={(e) => setNewFollowUp(e.target.value)}
                    className="h-9 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-brand-muted uppercase mb-1">
                    Proposal Value (INR)
                  </label>
                  <Input
                    type="number"
                    value={newProposalVal}
                    onChange={(e) => setNewProposalVal(e.target.value)}
                    placeholder="e.g. 520000"
                    className="h-9 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-brand-muted uppercase mb-1">
                    Realized / Collected Revenue (INR)
                  </label>
                  <Input
                    type="number"
                    value={newClosedVal}
                    onChange={(e) => setNewClosedVal(e.target.value)}
                    placeholder="e.g. 480000"
                    className="h-9 text-xs"
                  />
                </div>
              </div>

              {/* Note / Activity Input */}
              <div className="space-y-2 mb-6">
                <label className="block text-[11px] font-bold text-brand-muted uppercase">
                  Add Activity / Discovery Call Note
                </label>
                <Textarea
                  rows={2}
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  placeholder="Record summary of client call, contract terms, or next steps..."
                  className="text-xs"
                />
                <Button
                  size="sm"
                  onClick={handleSaveDetails}
                  className="bg-brand-navy hover:bg-brand-charcoal text-white text-xs font-semibold"
                >
                  Save Updates &amp; Log Note
                </Button>
              </div>

              {/* Activity History Breadcrumbs */}
              <div className="border-t border-border/80 pt-4">
                <div className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-3">
                  Engagement Audit History
                </div>
                <div className="space-y-2.5 max-h-48 overflow-y-auto">
                  {selectedLead.activities.map((act) => (
                    <div
                      key={act.id}
                      className="p-3 rounded-lg bg-slate-50 border border-border/50 text-xs"
                    >
                      <div className="flex items-center justify-between font-semibold text-brand-navy mb-1">
                        <span>{act.action}</span>
                        <span className="text-[10px] text-brand-muted">
                          {new Date(act.timestamp).toLocaleString()} • {act.author}
                        </span>
                      </div>
                      <p className="text-brand-muted">{act.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </main>

      <Footer />
    </div>
  );
};

const RevenuePortal = () => {
  // Security Guard: Disable internal operator portal in public production
  // Access requires authenticated server-side OAuth 2.0 / SSO session
  if (import.meta.env.PROD || import.meta.env.VITE_ENABLE_INTERNAL_PORTAL !== "true") {
    return <NotFound />;
  }

  return <RevenuePortalContent />;
};

export default RevenuePortal;
