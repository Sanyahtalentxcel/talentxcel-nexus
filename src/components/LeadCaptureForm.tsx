import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CheckCircle2,
  ShieldCheck,
  Send,
  Sparkles,
  PhoneCall,
  Clock,
  ArrowRight,
  FileCheck,
  Mail,
  Copy
} from "lucide-react";
import {
  revenueOperations,
  generateLeadEmailDispatch,
  LeadEmailDispatch,
  FOUNDER_EMAIL,
  CORPORATE_CONTACT_EMAIL,
  LeadCategory,
  LeadSubmissionPayload
} from "@/services/revenueOperations";

interface LeadCaptureFormProps {
  initialCategory?: LeadCategory;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  className?: string;
  onSuccess?: (referenceNumber: string) => void;
}

export const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({
  initialCategory = "corporate_training",
  title = "Request an Enterprise Proposal or Discovery Call",
  subtitle = "Directly connected to our practice directors in Noida. Response guaranteed within 24 business hours.",
  buttonText = "Submit Enterprise Inquiry",
  className = "",
  onSuccess
}) => {
  const [formData, setFormData] = useState<LeadSubmissionPayload>({
    category: initialCategory,
    organization: "",
    contactPerson: "",
    designation: "",
    email: "",
    phone: "",
    businessRequirement: "",
    headcountOrParticipants: "",
    preferredTimeline: "Immediate (Next 30 Days)",
    deliveryMode: "hybrid",
    budgetRange: "Under Scoping"
  });

  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [mailDispatch, setMailDispatch] = useState<LeadEmailDispatch | null>(null);
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.organization.trim()) errs.organization = "Organization name is required.";
    if (!formData.contactPerson.trim()) errs.contactPerson = "Contact person name is required.";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = "Valid business email is required.";
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errs.phone = "Valid telephone or mobile number is required.";
    }
    if (!formData.businessRequirement.trim() || formData.businessRequirement.length < 15) {
      errs.businessRequirement = "Please provide at least 15 characters describing your requirement.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleCopyDetails = () => {
    if (!mailDispatch) return;
    navigator.clipboard.writeText(mailDispatch.body);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // Silent spam block

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const res = revenueOperations.submitLead(formData);
      if (res.success) {
        setSubmittedRef(res.referenceNumber);
        const dispatch = generateLeadEmailDispatch(formData, res.referenceNumber);
        setMailDispatch(dispatch);

        // Auto-direct email client dispatch to Founder & Managing Director
        try {
          window.location.href = dispatch.mailtoUrl;
        } catch (dispatchErr) {
          console.warn("Mail client auto-launch suppressed by browser:", dispatchErr);
        }

        if (onSuccess) onSuccess(res.referenceNumber);
      }
    } catch (err) {
      console.error("Submission failed:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submittedRef && mailDispatch) {
    return (
      <div className={`p-6 sm:p-8 bg-white border border-emerald-300 rounded-2xl shadow-medium text-center space-y-4 ${className}`}>
        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl w-fit mx-auto">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-semibold uppercase tracking-wider font-mono">
          <FileCheck className="h-3.5 w-3.5" />
          <span>Ref #{submittedRef}</span>
        </div>
        <h3 className="text-2xl font-bold text-brand-navy">
          Inquiry Successfully Registered
        </h3>
        <p className="text-sm text-brand-muted max-w-md mx-auto leading-relaxed">
          Your requirement has been logged in our central registry and routed directly to the Executive Leadership &amp; Operations Desk at <strong>{FOUNDER_EMAIL}</strong> (CC: {CORPORATE_CONTACT_EMAIL}). A practice specialist will follow up with <strong>{formData.email}</strong> within 24 business hours.
        </p>

        {/* Executive Routing Confirmation Card */}
        <div className="bg-emerald-50/80 border border-emerald-200/90 rounded-xl p-3.5 sm:p-4 text-xs text-emerald-950 text-left space-y-1.5">
          <div className="font-semibold flex items-center gap-1.5 text-emerald-900">
            <ShieldCheck className="h-4 w-4 text-emerald-700 flex-shrink-0" />
            <span>Executive Mail Delivery Configured</span>
          </div>
          <p className="text-[11.5px] leading-relaxed text-emerald-900/90">
            Primary Recipient: <span className="font-mono font-semibold">{FOUNDER_EMAIL}</span> (Founder &amp; MD Desk)
            <br />
            Secondary CC: <span className="font-mono font-semibold">{CORPORATE_CONTACT_EMAIL}</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href={mailDispatch.mailtoUrl}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-soft hover:shadow-medium transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span>Confirm Dispatch in Email App</span>
          </a>
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopyDetails}
            className="w-full sm:w-auto text-xs sm:text-sm"
          >
            {copied ? (
              <>
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 mr-1.5" />
                <span>Inquiry Summary Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 mr-1.5" />
                <span>Copy Inquiry Details</span>
              </>
            )}
          </Button>
        </div>

        <div className="pt-4 border-t border-slate-200 grid sm:grid-cols-2 gap-3 text-xs text-brand-muted text-left">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-primary flex-shrink-0" />
            <span>SLA: 24-Hour Executive Review</span>
          </div>
          <div className="flex items-center space-x-2">
            <ShieldCheck className="h-4 w-4 text-primary flex-shrink-0" />
            <span>DPDP Act Confidentiality Enforced</span>
          </div>
        </div>

        <div className="pt-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setSubmittedRef(null);
              setMailDispatch(null);
              setFormData({
                category: initialCategory,
                organization: "",
                contactPerson: "",
                designation: "",
                email: "",
                phone: "",
                businessRequirement: "",
                headcountOrParticipants: "",
                preferredTimeline: "Immediate (Next 30 Days)",
                deliveryMode: "hybrid",
                budgetRange: "Under Scoping"
              });
            }}
          >
            Submit Another Inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white border border-border/80 rounded-2xl p-6 sm:p-8 shadow-large ${className}`}>
      <div className="mb-6">
        <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Commercial Demand Desk</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-brand-navy tracking-tight">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-brand-muted mt-1 leading-relaxed">
          {subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Anti-spam honeypot */}
        <input
          type="text"
          name="work_role_verification"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="category" className="text-xs font-semibold text-brand-charcoal">
              Engagement Category *
            </Label>
            <Select
              value={formData.category}
              onValueChange={(val) => setFormData({ ...formData, category: val as LeadCategory })}
            >
              <SelectTrigger id="category" className="text-xs sm:text-sm h-10">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="corporate_training">Corporate Workforce Training</SelectItem>
                <SelectItem value="ai_training">AI &amp; Generative AI Training</SelectItem>
                <SelectItem value="it_staffing">Specialized IT Staffing &amp; Pods</SelectItem>
                <SelectItem value="permanent_recruitment">Permanent Recruitment &amp; Direct Hire</SelectItem>
                <SelectItem value="rpo">Recruitment Process Outsourcing (RPO)</SelectItem>
                <SelectItem value="executive_search">Executive &amp; Leadership Search</SelectItem>
                <SelectItem value="university_partnership">University &amp; Institutional MoU</SelectItem>
                <SelectItem value="technology_consulting">Enterprise Technology Consulting</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="organization" className="text-xs font-semibold text-brand-charcoal">
              Company / Institution Name *
            </Label>
            <Input
              id="organization"
              placeholder="e.g. Acme Enterprises Ltd"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              className={`h-10 text-xs sm:text-sm ${errors.organization ? "border-rose-500" : ""}`}
            />
            {errors.organization && <p className="text-[11px] text-rose-500">{errors.organization}</p>}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="contactPerson" className="text-xs font-semibold text-brand-charcoal">
              Contact Person Full Name *
            </Label>
            <Input
              id="contactPerson"
              placeholder="e.g. Ananya Sharma"
              value={formData.contactPerson}
              onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
              className={`h-10 text-xs sm:text-sm ${errors.contactPerson ? "border-rose-500" : ""}`}
            />
            {errors.contactPerson && <p className="text-[11px] text-rose-500">{errors.contactPerson}</p>}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="designation" className="text-xs font-semibold text-brand-charcoal">
              Designation / Role
            </Label>
            <Input
              id="designation"
              placeholder="e.g. Head of Talent / VP Engineering / TPO"
              value={formData.designation}
              onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
              className="h-10 text-xs sm:text-sm"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-xs font-semibold text-brand-charcoal">
              Business Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="e.g. a.sharma@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`h-10 text-xs sm:text-sm ${errors.email ? "border-rose-500" : ""}`}
            />
            {errors.email && <p className="text-[11px] text-rose-500">{errors.email}</p>}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="phone" className="text-xs font-semibold text-brand-charcoal">
              Telephone / Mobile Number *
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="e.g. +91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`h-10 text-xs sm:text-sm ${errors.phone ? "border-rose-500" : ""}`}
            />
            {errors.phone && <p className="text-[11px] text-rose-500">{errors.phone}</p>}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="headcount" className="text-xs font-semibold text-brand-charcoal">
              Participants / Vacancies Needed
            </Label>
            <Input
              id="headcount"
              placeholder="e.g. 25-50 trainees, 4 developers, 1 CTO"
              value={formData.headcountOrParticipants}
              onChange={(e) => setFormData({ ...formData, headcountOrParticipants: e.target.value })}
              className="h-10 text-xs sm:text-sm"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="timeline" className="text-xs font-semibold text-brand-charcoal">
              Expected Timeline
            </Label>
            <Select
              value={formData.preferredTimeline}
              onValueChange={(val) => setFormData({ ...formData, preferredTimeline: val })}
            >
              <SelectTrigger id="timeline" className="text-xs sm:text-sm h-10">
                <SelectValue placeholder="Select Timeline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Immediate (Next 30 Days)">Immediate (Next 30 Days)</SelectItem>
                <SelectItem value="Next Quarter (1-3 Months)">Next Quarter (1-3 Months)</SelectItem>
                <SelectItem value="Future Planning (3-6 Months)">Future Planning (3-6 Months)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="requirement" className="text-xs font-semibold text-brand-charcoal">
            Requirement Scope &amp; Target Objectives *
          </Label>
          <Textarea
            id="requirement"
            rows={3}
            placeholder="Please detail your specific technical stack, learning modules, hiring criteria, or institutional scope..."
            value={formData.businessRequirement}
            onChange={(e) => setFormData({ ...formData, businessRequirement: e.target.value })}
            className={`text-xs sm:text-sm ${errors.businessRequirement ? "border-rose-500" : ""}`}
          />
          {errors.businessRequirement && (
            <p className="text-[11px] text-rose-500">{errors.businessRequirement}</p>
          )}
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary-hover text-white py-3 font-semibold shadow-soft hover:shadow-medium transition-all"
          >
            {isSubmitting ? (
              <span className="flex items-center space-x-2">
                <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                <span>Registering Inquiry...</span>
              </span>
            ) : (
              <span className="flex items-center space-x-2">
                <span>{buttonText}</span>
                <ArrowRight className="h-4 w-4" />
              </span>
            )}
          </Button>
        </div>

        <div className="pt-2 text-center text-[11px] text-brand-muted flex items-center justify-center space-x-2">
          <ShieldCheck className="h-3.5 w-3.5 text-primary flex-shrink-0" />
          <span>Strict DPDP Act confidentiality. No spam. Direct executive response.</span>
        </div>
      </form>
    </div>
  );
};
