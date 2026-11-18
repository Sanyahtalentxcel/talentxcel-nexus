import React, { useState, useEffect } from "react";
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
  FileText
} from "lucide-react";
import {
  revenueOperations,
  Lead,
  LeadCategory,
  LeadStage,
  PipelineMetrics
} from "@/services/revenueOperations";

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

const RevenuePortal = () => {
  // Simple session authentication gate
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [authError, setAuthError] = useState("");

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
  };

  useEffect(() => {
    // Check if session pin already validated
    const storedAuth = sessionStorage.getItem("tx_revenue_auth");
    if (storedAuth === "valid_session") {
      setIsAuthenticated(true);
      refreshData();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Authorized administrative operational key
    if (pinInput === "talentxcel2026") {
      sessionStorage.setItem("tx_revenue_auth", "valid_session");
      setIsAuthenticated(true);
      setAuthError("");
      refreshData();
    } else {
      setAuthError("Invalid access credentials. Unauthorized access is monitored and logged.");
    }
  };

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

  // Login Gate View
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-100 flex flex-col justify-between">
        <Navbar />
        <div className="flex-1 flex items-center justify-center p-4">
          <Card className="max-w-md w-full p-8 border-border shadow-large bg-white">
            <div className="text-center mb-6">
              <div className="p-3 bg-brand-navy text-white rounded-2xl w-fit mx-auto mb-3">
                <Lock className="h-6 w-6 text-brand-electric" />
              </div>
              <h2 className="text-2xl font-bold text-brand-navy">Revenue Operations Desk</h2>
              <p className="text-xs text-brand-muted mt-1">
                Restricted access for TalentXcel executive partners and authorized practice heads.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Input
                  type="password"
                  placeholder="Enter Corporate Access Key"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  className="h-11 text-center text-sm font-mono tracking-widest"
                  autoFocus
                />
                {authError && <p className="text-xs text-rose-500 mt-1.5 text-center">{authError}</p>}
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white font-semibold h-11">
                Authenticate &amp; Access Pipeline
              </Button>

              <p className="text-[11px] text-center text-brand-muted pt-2">
                Protected by DPDP Act 2023 Access Protocols • TalentXcel Noida HQ
              </p>
            </form>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

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

export default RevenuePortal;
