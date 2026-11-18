import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Users2,
  Code2,
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Search,
  Building2,
  Layers,
  Award,
  Zap,
  Clock,
  HelpCircle
} from "lucide-react";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import modernWorkspace from "@/assets/modern-workspace.jpg";
import corporateOffice from "@/assets/corporate-office.jpg";

const StaffingSolutions = () => {
  const models = [
    {
      id: "permanent-recruitment",
      badge: "Model 01 • Direct Hire",
      title: "Permanent Recruitment & Specialized Contingency",
      turnaround: "7 to 14 Business Days",
      target: "Fast-scaling tech companies & established enterprises seeking permanent engineering talent",
      overview:
        "Precision hiring across senior engineers, software architects, and product leads. Every candidate undergoes rigorous code evaluations before profile submission.",
      benefits: [
        "Practitioner-led technical vetting (Zero resume-broker keyword spam)",
        "Standard contingency engagement: fees payable only upon successful joining",
        "90-Day replacement guarantee backed by formal commercial SLAs",
        "Comprehensive background verification and past credential checks"
      ],
      idealFor: "Senior Full-Stack, AI/ML Engineers, Cloud Architects, and Engineering Managers."
    },
    {
      id: "it-staffing",
      badge: "Model 02 • Specialized Pods",
      title: "IT Staffing & Dedicated Engineering Pods",
      turnaround: "48 to 72 Hours for Pre-Screened Pods",
      target: "Enterprises needing rapid project scaling, specialized technology pods, or urgent surge capacity",
      overview:
        "Deploy cohesive pods of vetted software engineers, QA leads, and cloud architects working as a direct extension of your core engineering team.",
      benefits: [
        "Pre-screened talent pools in React, Node, Python, Golang, and Cloud DevOps",
        "Flexible scaling: expand or contract pod headcount based on sprint milestones",
        "Complete intellectual property (IP) assignment and NDA compliance",
        "Direct alignment with client Agile/Scrum rituals and Jira workflows"
      ],
      idealFor: "SaaS product rebuilds, migration sprints, and MVP acceleration."
    },
    {
      id: "rpo",
      badge: "Model 03 • Enterprise RPO",
      title: "Recruitment Process Outsourcing (RPO)",
      turnaround: "Long-Term Dedicated SLA",
      target: "Mid-to-large enterprises with high-volume technical hiring mandates (20+ annual hires)",
      overview:
        "Full or modular outsourcing of your technical recruitment operations. We embed dedicated talent acquisition pods, employer branding, and pipeline automation.",
      benefits: [
        "Dedicated full-time technical recruiters embedded into your hiring cadence",
        "Reduced Cost-Per-Hire (up to 35% reduction compared to traditional agency fees)",
        "Standardized candidate experience and rigorous SLA performance dashboards",
        "Custom ATS integration and automated candidate pipeline tracking"
      ],
      idealFor: "Rapid enterprise expansion, new tech center setup, or seasonal hiring surges."
    },
    {
      id: "executive-search",
      badge: "Model 04 • C-Suite Search",
      title: "Executive & Strategic Leadership Search",
      turnaround: "Confidential Retained Cadence",
      target: "Boards, Founders, and CEOs hiring VP of Engineering, CTO, and Practice Directors",
      overview:
        "Discreet, research-driven search for transformational technology leadership. We evaluate executive track records, cultural resilience, and strategic architecture capability.",
      benefits: [
        "Strictly confidential market mapping and targeted passive candidate outreach",
        "Comprehensive leadership competency assessments and architectural interviews",
        "Detailed reference audits with past corporate board members and peers",
        "Structured compensation negotiation and transition advisory"
      ],
      idealFor: "CTO, VP of Engineering, Chief Information Security Officer (CISO), Head of Product."
    }
  ];

  const [activeModel, setActiveModel] = useState(models[0]);

  const sectors = [
    { title: "Technology & SaaS", desc: "Full-Stack, Applied AI, Cloud Architecture, DevOps & SRE" },
    { title: "BFSI & Regulated Fintech", desc: "Core Banking APIs, Cyber Compliance, Quantitative Analytics" },
    { title: "Energy & Infrastructure", desc: "Telemetry Microservices, SCADA/PLC Data Pipelines, Grid Tech" },
    { title: "Healthcare & Life Sciences", desc: "Clinical Data Ingestion, EHR Systems, HIPAA/DPDP Architecture" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>IT Staffing & Enterprise Recruitment Solutions | TalentXcel</title>
        <meta
          name="description"
          content="Enterprise IT staffing, permanent recruitment, dedicated developer pods, and RPO solutions. Vetted by active software engineers for zero-guesswork hiring."
        />
        <meta
          name="keywords"
          content="IT staffing services India, IT recruitment Noida, permanent recruitment agency, contract staffing, RPO services, developer staffing Noida Delhi NCR"
        />
        <link rel="canonical" href="https://talentxcel.co.in/staffing-solutions" />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-brand-soft pt-14 pb-20 border-b border-border/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                  <Users2 className="h-3.5 w-3.5" />
                  <span>Talent &amp; Workforce Solutions</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy leading-tight tracking-tight">
                  Precision IT Hiring &amp;{" "}
                  <span className="text-primary block sm:inline">Dedicated Developer Pods.</span>
                </h1>

                <p className="text-base sm:text-lg text-brand-muted leading-relaxed max-w-xl">
                  Stop sifting through unvetted keyword resumes. TalentXcel combines active practitioner code evaluations with flexible commercial staffing models to fill critical engineering roles fast.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Button
                    size="lg"
                    asChild
                    className="bg-primary hover:bg-primary-hover text-white font-semibold shadow-soft"
                  >
                    <a href="#staffing-form">Submit a Hiring Mandate</a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="border-slate-300 text-brand-navy hover:bg-white"
                  >
                    <a href="#models">Explore Engagement Models</a>
                  </Button>
                </div>

                {/* Proof Pills */}
                <div className="pt-6 border-t border-border/80 grid grid-cols-3 gap-4 text-xs text-brand-muted">
                  <div>
                    <div className="font-bold text-base text-brand-navy">48-72 Hrs</div>
                    <div>Average Sourcing Turnaround</div>
                  </div>
                  <div>
                    <div className="font-bold text-base text-brand-navy">100%</div>
                    <div>Practitioner Code Vetted</div>
                  </div>
                  <div>
                    <div className="font-bold text-base text-brand-navy">90-Day</div>
                    <div>Replacement Guarantee</div>
                  </div>
                </div>
              </div>

              {/* Visual Showcase */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-large border border-border/80 bg-white">
                  <img
                    src={modernWorkspace}
                    alt="TalentXcel Dedicated IT Engineering Pod"
                    className="w-full h-80 sm:h-96 object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-brand-electric">
                      Accountable Engineering Delivery
                    </span>
                    <h3 className="text-base font-bold text-white mt-1">
                      From Individual Senior Hires to Complete Dedicated Pods
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Engagement Models Showcase */}
        <section id="models" className="py-16 lg:py-24 bg-white border-b border-border/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center space-x-2 bg-slate-100 text-brand-navy px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
                <Briefcase className="h-3.5 w-3.5 text-primary" />
                <span>Commercial Hiring Structures</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight mb-4">
                Tailored Staffing Models for Every Organizational Stage
              </h2>
              <p className="text-base text-brand-muted leading-relaxed">
                Whether you need a confidential executive hire, contingent developers, or an embedded recruitment pod.
              </p>
            </div>

            {/* Model Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {models.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setActiveModel(m)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeModel.id === m.id
                      ? "bg-primary text-white shadow-soft"
                      : "bg-slate-100 text-brand-muted hover:bg-slate-200/80 hover:text-brand-navy"
                  }`}
                >
                  {m.title.split("&")[0].trim()}
                </button>
              ))}
            </div>

            {/* Selected Model Card */}
            <div className="max-w-5xl mx-auto bg-brand-soft rounded-3xl border border-border/80 p-8 sm:p-12 shadow-medium">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/70 pb-6 mb-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-primary/10 text-primary">
                    {activeModel.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy mt-2">
                    {activeModel.title}
                  </h3>
                </div>
                <div className="text-left md:text-right">
                  <div className="text-xs uppercase tracking-wider text-brand-muted font-bold">Standard SLA</div>
                  <div className="text-base font-bold text-primary">{activeModel.turnaround}</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-2">
                    Target Enterprise Profile
                  </h4>
                  <p className="text-sm text-brand-muted leading-relaxed mb-6">
                    {activeModel.target}
                  </p>

                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-2">
                    Model Overview
                  </h4>
                  <p className="text-sm text-brand-muted leading-relaxed mb-6">
                    {activeModel.overview}
                  </p>

                  <div className="p-4 rounded-xl bg-white border border-border/70 text-xs text-brand-navy">
                    <strong>Recommended Scope:</strong> {activeModel.idealFor}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-3">
                    Commercial &amp; Operational Benefits
                  </h4>
                  <div className="space-y-3">
                    {activeModel.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-start space-x-3 p-3 rounded-xl bg-white border border-border/60 text-xs sm:text-sm text-brand-navy">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center pt-4 border-t border-border/70">
                <Button asChild size="lg" className="bg-primary hover:bg-primary-hover text-white font-semibold">
                  <a href="#staffing-form">Initiate Mandate for This Model</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 4-Stage Vetting Process */}
        <section className="py-16 lg:py-20 bg-brand-soft border-b border-border/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight mb-3">
                Our 4-Stage Practitioner Vetting Framework
              </h2>
              <p className="text-sm text-brand-muted">
                How we eliminate bad hires and deliver production-ready engineers.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Domain Sourcing",
                  desc: "Active discovery across our proprietary TalentXcel network and curated industry channels."
                },
                {
                  step: "02",
                  title: "Practitioner Code Review",
                  desc: "Live algorithmic problem solving and architecture interviews conducted by senior engineers."
                },
                {
                  step: "03",
                  title: "Behavioral & Cultural Fit",
                  desc: "Evaluating communication, teamwork resilience, and alignment with your engineering rituals."
                },
                {
                  step: "04",
                  title: "Onboarding & SLA",
                  desc: "Seamless contract onboarding backed by a formal 90-day replacement commitment."
                }
              ].map((s) => (
                <div key={s.step} className="p-6 rounded-2xl bg-white border border-border/80 shadow-soft">
                  <div className="text-2xl font-bold font-mono text-primary mb-2">{s.step}</div>
                  <h4 className="text-base font-bold text-brand-navy mb-2">{s.title}</h4>
                  <p className="text-xs text-brand-muted leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sector Focus Grid */}
        <section className="py-16 bg-white border-b border-border/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="text-xl font-bold text-brand-navy mb-2">Core Industry Specializations</h3>
              <p className="text-xs sm:text-sm text-brand-muted">Deep domain understanding across high-impact sectors.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {sectors.map((sec) => (
                <div key={sec.title} className="p-5 rounded-xl bg-brand-soft border border-border/70">
                  <h4 className="font-bold text-sm text-brand-navy mb-1">{sec.title}</h4>
                  <p className="text-xs text-brand-muted leading-relaxed">{sec.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Intake Section */}
        <section id="staffing-form" className="py-16 lg:py-24 bg-brand-soft">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <LeadCaptureForm
              initialCategory="it_staffing"
              title="Submit Your Hiring Mandate or Staffing Requirement"
              subtitle="Connect directly with our Talent Solutions practice heads in Noida."
              buttonText="Submit Hiring Mandate"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StaffingSolutions;
