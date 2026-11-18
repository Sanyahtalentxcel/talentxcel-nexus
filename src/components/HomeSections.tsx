import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Users2,
  GraduationCap,
  Cpu,
  MessageSquare,
  FileText,
  Building2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Briefcase,
  Layers,
  Handshake,
  Mail,
  Phone,
  MapPin,
  Clock,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Award
} from "lucide-react";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import corporateOffice from "@/assets/corporate-office.jpg";
import aiTechnology from "@/assets/ai-technology.jpg";

/* =========================================================================
   SECTION A: CORPORATE INTRODUCTION
   ========================================================================= */
export const CorporateIntroSection = () => {
  return (
    <section className="py-10 lg:py-14 bg-white border-b border-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Mission (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-slate-100 text-brand-navy px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Building2 className="h-3.5 w-3.5 text-primary" />
              <span>Section A • Corporate Purpose</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-brand-navy leading-tight tracking-tight">
              An Integrated Partner for the Modern Enterprise
            </h2>

            <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
              Founded in July 2024, TalentXcel was established to bridge a critical gap in enterprise transformation: technology initiatives frequently stall due to talent shortages, while traditional staffing agencies operate without technical depth.
            </p>

            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              By combining enterprise software engineering, specialized talent acquisition, and continuous workforce development into a unified delivery framework, TalentXcel enables global organizations to build mission-critical digital systems and the specialized teams required to run them.
            </p>

            {/* Three Foundational Pillars */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-brand-soft border border-border/70">
                <div className="text-primary font-bold text-lg mb-1">Practitioner-Led</div>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Engineered and supervised by active practitioners, ensuring authentic technical rigor.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-brand-soft border border-border/70">
                <div className="text-primary font-bold text-lg mb-1">Dual Capability</div>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Single partner for custom software engineering and specialized IT recruitment.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-brand-soft border border-border/70">
                <div className="text-primary font-bold text-lg mb-1">Strict Governance</div>
                <p className="text-xs text-brand-muted leading-relaxed">
                  High-accountability delivery adhering to SLAs, DPDP compliance, and code standards.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button asChild variant="outline" className="border-slate-300 text-brand-navy hover:bg-slate-50 font-semibold">
                <Link to="/about" className="inline-flex items-center space-x-2">
                  <span>Read Our Full Corporate Story</span>
                  <ArrowRight className="h-4 w-4 text-primary" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-large border border-border/80 bg-white">
              <img
                src={teamCollaboration}
                alt="TalentXcel Corporate Collaboration and Strategy"
                className="w-full h-80 sm:h-96 object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="p-6 bg-white border-t border-border/60">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-brand-navy">Headquartered in Noida, India</h3>
                    <p className="text-xs text-brand-muted">Operating with cross-market reach across India, EU &amp; Middle East</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   SECTION B: THREE BUSINESS PILLARS
   ========================================================================= */
export const ThreePillarsSection = () => {
  const pillars = [
    {
      id: "tech",
      icon: Code2,
      title: "Technology & AI Solutions",
      category: "Pillar 01",
      tagline: "Scalable software systems, applied artificial intelligence, and cloud engineering.",
      capabilities: [
        "Enterprise software engineering",
        "AI and machine learning integration",
        "AI-powered business automation",
        "Cloud engineering & digital transformation",
        "Application and product engineering"
      ],
      link: "/services/it-consulting-managed-services",
      badgeColor: "bg-primary/10 text-primary"
    },
    {
      id: "talent",
      icon: Users2,
      title: "Talent & Workforce Solutions",
      category: "Pillar 02",
      tagline: "High-precision IT recruitment, specialized contract pods, and scalable enterprise RPO.",
      capabilities: [
        "Specialized IT staffing & contract pods",
        "Permanent & contingent recruitment",
        "Executive search & leadership hiring",
        "Recruitment Process Outsourcing (RPO)",
        "Technical vetting & skills evaluation"
      ],
      link: "/staffing-solutions",
      badgeColor: "bg-brand-navy/10 text-brand-navy"
    },
    {
      id: "learning",
      icon: GraduationCap,
      title: "Learning & Talent Development",
      category: "Pillar 03",
      tagline: "Bridging institutional academics and corporate production through live project tracks.",
      capabilities: [
        "Corporate technical training & upskilling",
        "University partnerships & institutional MoUs",
        "Live-project internship programmes",
        "Graduate employability initiatives",
        "Continuous professional development"
      ],
      link: "/corporate-training",
      badgeColor: "bg-amber-500/10 text-amber-700"
    }
  ];

  return (
    <section className="py-10 lg:py-14 bg-brand-soft border-b border-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-10">
          <div className="inline-flex items-center space-x-2 bg-white border border-border/80 text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Section B • Core Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight mb-4">
            Three Interconnected Business Pillars
          </h2>
          <p className="text-base text-brand-muted leading-relaxed">
            TalentXcel delivers value through three specialized divisions operating independently or in harmony to address complex organizational goals.
          </p>
        </div>

        {/* Pillar Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="bg-white rounded-2xl border border-border/80 p-8 shadow-soft hover:shadow-large hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${pillar.badgeColor}`}>
                      {pillar.category}
                    </span>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-brand-navy mb-2 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-brand-muted mb-6 leading-relaxed">
                    {pillar.tagline}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-2.5 mb-8">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-charcoal">
                      Core Capabilities:
                    </p>
                    {pillar.capabilities.map((cap) => (
                      <div key={cap} className="flex items-start space-x-2.5 text-xs sm:text-sm text-brand-navy/90">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-border/60">
                  <Link
                    to={pillar.link}
                    className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-hover group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Explore Pillar Capabilities</span>
                    <ArrowRight className="h-4 w-4 ml-1.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   SECTION C: INTEGRATED PRODUCT ECOSYSTEM
   ========================================================================= */
export const EcosystemSection = () => {
  const products = [
    {
      title: "TalentXcel Platform",
      domain: "talentxcel.in",
      role: "Career & Talent Network",
      description: "AI-powered candidate discovery, reverse talent recruiting, and direct job opportunities connecting professionals with verified employers.",
      link: "https://talentxcel.in",
      external: true,
      icon: Cpu,
      badgeText: "Talent Platform",
      badgeColor: "bg-primary/10 text-primary"
    },
    {
      title: "TalentXcel Learning",
      domain: "talentxcel.net",
      role: "Education & Skills Ecosystem",
      description: "Structured technical upskilling curricula, live-project mentorship portfolios, and corporate learning management systems.",
      link: "https://talentxcel.net",
      external: true,
      icon: GraduationCap,
      badgeText: "Academy Portal",
      badgeColor: "bg-amber-500/10 text-amber-700"
    },
    {
      title: "CHATR Technology",
      domain: "chatr.chat",
      role: "Conversational AI Layer",
      description: "Enterprise conversational AI, customer interaction widgets, and intelligent real-time communication infrastructure.",
      link: "/chatr",
      external: false,
      icon: MessageSquare,
      badgeText: "AI Technology",
      badgeColor: "bg-emerald-500/10 text-emerald-700"
    }
  ];

  return (
    <section className="py-10 lg:py-14 bg-white border-b border-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-10">
          <div className="inline-flex items-center space-x-2 bg-slate-100 text-brand-navy px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="h-3.5 w-3.5 text-primary" />
            <span>Section C • Digital Platforms</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight mb-4">
            The Integrated TalentXcel Ecosystem
          </h2>
          <p className="text-base text-brand-muted leading-relaxed">
            TalentXcel operates as the parent brand, anchoring focused digital products and platforms that serve distinct facets of recruitment, learning, and AI interaction.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="bg-brand-soft rounded-2xl border border-border/80 p-7 shadow-xs hover:shadow-medium hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${p.badgeColor}`}>
                      {p.badgeText}
                    </span>
                    <span className="text-xs font-mono font-medium text-brand-muted">
                      {p.domain}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-border/60 text-primary w-fit mb-4">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-bold text-brand-navy mb-1">{p.title}</h3>
                  <div className="text-xs font-semibold text-primary mb-3">{p.role}</div>
                  <p className="text-sm text-brand-muted leading-relaxed mb-6">
                    {p.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/70">
                  {p.external ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-brand-navy hover:text-primary transition-colors"
                    >
                      <span>Explore Platform</span>
                      <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
                    </a>
                  ) : (
                    <Link
                      to={p.link}
                      className="inline-flex items-center text-sm font-semibold text-brand-navy hover:text-primary transition-colors"
                    >
                      <span>Explore Technology</span>
                      <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   SECTION D: LEADERSHIP & GOVERNANCE
   ========================================================================= */
export const LeadershipPreviewSection = () => {
  return (
    <section className="py-10 lg:py-14 bg-brand-soft border-b border-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white border border-border/80 text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-xs">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Section D • Corporate Governance</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight leading-tight">
              Led by Practitioners Committed to High Accountability
            </h2>

            <p className="text-base text-brand-muted leading-relaxed">
              We believe corporate credibility is earned through transparency and demonstrated execution. TalentXcel is led by experienced technology and workforce professionals who remain actively engaged in client delivery.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-brand-charcoal">
                  <strong>Registered Corporate Entity:</strong> Official corporate governance registered in Uttar Pradesh, India (CIN: U85500UP2024PTC206390).
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-brand-charcoal">
                  <strong>Founder-Led Governance:</strong> Founded by Sanobar Jahan with genuine practice directorates across technology, staffing, and academies.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button asChild className="bg-primary hover:bg-primary-hover text-white font-semibold">
                <Link to="/team" className="inline-flex items-center space-x-2">
                  <span>Meet Founder &amp; Leadership</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {/* Practice Governance Cards */}
            <div className="p-6 rounded-2xl bg-white border border-border/80 shadow-soft">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary w-fit mb-3">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-brand-navy text-base mb-1">Founder &amp; Executive Leadership</h3>
              <p className="text-xs text-brand-muted leading-relaxed mb-3">
                Sanobar Jahan (Founder) &amp; corporate strategy oversight across all operational verticals.
              </p>
              <div className="text-[11px] font-semibold text-primary uppercase tracking-wider">
                Founder Governance
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-border/80 shadow-soft">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary w-fit mb-3">
                <Code2 className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-brand-navy text-base mb-1">Technology &amp; AI Practice</h3>
              <p className="text-xs text-brand-muted leading-relaxed mb-3">
                Software architecture, AI solution engineering, cloud governance, and delivery assurance.
              </p>
              <div className="text-[11px] font-semibold text-primary uppercase tracking-wider">
                Engineering Practice
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-border/80 shadow-soft">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary w-fit mb-3">
                <Users2 className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-brand-navy text-base mb-1">Talent Solutions Practice</h3>
              <p className="text-xs text-brand-muted leading-relaxed mb-3">
                Specialized technical sourcing, executive search, contract staffing, and enterprise RPO.
              </p>
              <div className="text-[11px] font-semibold text-primary uppercase tracking-wider">
                Workforce Solutions
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-border/80 shadow-soft">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary w-fit mb-3">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-brand-navy text-base mb-1">Academies &amp; Partnerships</h3>
              <p className="text-xs text-brand-muted leading-relaxed mb-3">
                University MoUs, live-project internship curricula, and corporate talent upskilling.
              </p>
              <div className="text-[11px] font-semibold text-primary uppercase tracking-wider">
                Talent Development
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   SECTION E: WHY TALENTXCEL (THE INTEGRATED ADVANTAGE)
   ========================================================================= */
export const WhyTalentXcelSection = () => {
  const comparisons = [
    {
      traditional: "Disconnected staffing agencies with zero engineering depth",
      talentxcel: "Practitioner-led technical vetting conducted by active software engineers"
    },
    {
      traditional: "High candidate drop-off and unverified keyword-matched CVs",
      talentxcel: "Pre-screened, code-evaluated profiles aligned with real enterprise stack standards"
    },
    {
      traditional: "Software development vendors blind to workforce scaling constraints",
      talentxcel: "Unified partner delivering custom software pods and immediate team scaling"
    },
    {
      traditional: "Theoretical graduate training detached from production code",
      talentxcel: "Live-project academies training developers on client-grade software architectures"
    }
  ];

  return (
    <section className="py-10 lg:py-14 bg-white border-b border-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-10">
          <div className="inline-flex items-center space-x-2 bg-slate-100 text-brand-navy px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <TrendingUp className="h-3.5 w-3.5 text-primary" />
            <span>Section E • Operating Model</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight mb-4">
            The Advantage of an Integrated Delivery Model
          </h2>
          <p className="text-base text-brand-muted leading-relaxed">
            Eliminating the traditional friction between software engineering execution and specialized talent acquisition.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-border/80 overflow-hidden shadow-soft">
          <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-100/90 border-b border-border text-xs sm:text-sm font-bold uppercase tracking-wider">
            <div className="p-4 sm:p-5 text-brand-muted border-b md:border-b-0 md:border-r border-border">
              Traditional Fragmented Vendors
            </div>
            <div className="p-4 sm:p-5 text-primary">
              The TalentXcel Integrated Model
            </div>
          </div>

          <div className="divide-y divide-border/70">
            {comparisons.map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 text-sm">
                <div className="p-4 sm:p-5 bg-white text-brand-muted md:border-r border-border flex items-start space-x-2.5">
                  <span className="text-rose-500 font-bold flex-shrink-0 mt-0.5">✕</span>
                  <span>{row.traditional}</span>
                </div>
                <div className="p-4 sm:p-5 bg-brand-soft/60 text-brand-navy font-medium flex items-start space-x-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{row.talentxcel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   SECTION F: CASE STUDIES PREVIEW
   ========================================================================= */
export const CaseStudiesPreviewSection = () => {
  const cases = [
    {
      sector: "Energy & Infrastructure",
      title: "Renewable Asset Performance & Edge Analytics",
      challenge: "Real-time telemetry aggregation across 200+ distributed solar plants with legacy PLC architectures.",
      solution: "Engineered scalable telemetry microservices and deployed a 6-engineer dedicated pod for 24/7 reliability.",
      outcome: "99.98% pipeline uptime with real-time alerting under strict data integrity standards.",
      tag: "Enterprise Engineering"
    },
    {
      sector: "BFSI & Regulated Fintech",
      title: "Core Banking API Modernization & High-Volume RPO",
      challenge: "Legacy core banking integrations requiring rapid compliance scaling within 60 days.",
      solution: "RPO model filling 24 specialized microservices developers with certified banking domain expertise.",
      outcome: "100% adherence to compliance SLAs and accelerated digital lending gateway rollout.",
      tag: "Staffing & RPO"
    },
    {
      sector: "Healthcare & Life Sciences",
      title: "Clinical Data Ingestion & Patient Analytics",
      challenge: "Fragmented EHR data formats causing delayed patient diagnostic reports and compliance overhead.",
      solution: "Built automated document ingestion pipeline with DPDP Act and HIPAA-aligned access policies.",
      outcome: "65% faster document ingestion turnaround with end-to-end auditability.",
      tag: "AI & Data Solutions"
    }
  ];

  return (
    <section className="py-10 lg:py-14 bg-brand-soft border-b border-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-10">
          <div>
            <div className="inline-flex items-center space-x-2 bg-white border border-border/80 text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs">
              <Award className="h-3.5 w-3.5" />
              <span>Section F • Client Outcomes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Enterprise Delivery Case Studies
            </h2>
            <p className="text-base text-brand-muted mt-2 max-w-2xl">
              Representative delivery models highlighting our cross-industry execution and verifiable capability standards.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <Button asChild variant="outline" className="border-slate-300 text-brand-navy hover:bg-white font-semibold">
              <Link to="/case-studies" className="inline-flex items-center space-x-1.5">
                <span>View All Case Studies</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((c) => (
            <div
              key={c.title}
              className="bg-white rounded-2xl border border-border/80 p-7 shadow-soft hover:shadow-large hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-primary/10 text-primary">
                    {c.tag}
                  </span>
                  <span className="text-xs font-semibold text-brand-muted">
                    {c.sector}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-brand-navy mb-3 leading-snug">
                  {c.title}
                </h3>

                <div className="space-y-3 text-xs sm:text-sm text-brand-muted mb-6">
                  <div>
                    <strong className="text-brand-navy block text-xs uppercase tracking-wider mb-1">Challenge:</strong>
                    <p>{c.challenge}</p>
                  </div>
                  <div>
                    <strong className="text-brand-navy block text-xs uppercase tracking-wider mb-1">Delivery Solution:</strong>
                    <p>{c.solution}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border/60">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 mb-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-0.5">
                    Verified Outcome
                  </div>
                  <div className="text-xs font-semibold text-brand-navy">{c.outcome}</div>
                </div>

                <Link
                  to="/case-studies"
                  className="inline-flex items-center text-xs font-semibold text-primary hover:text-primary-hover"
                >
                  <span>Review Methodology &amp; Architecture</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   SECTION G: STRATEGIC PARTNERSHIPS
   ========================================================================= */
export const PartnershipsSection = () => {
  const alliances = [
    {
      title: "University & Academic MoUs",
      desc: "Structured institutional frameworks with premier engineering institutions for joint curriculum design, faculty development, and placement incubation.",
      features: ["Live-project internships", "Credit-aligned courses", "Direct campus pipelines"]
    },
    {
      title: "Enterprise Technology Alliances",
      desc: "Architecture alignments with major cloud platforms and developer ecosystems ensuring robust system engineering and modern deployment tooling.",
      features: ["Cloud-native infrastructure", "AI/ML engineering tooling", "Enterprise DevOps pipelines"]
    },
    {
      title: "Corporate Talent Ecosystems",
      desc: "Multi-year staffing frameworks and specialized engineering pod agreements with high-growth and established enterprise organizations.",
      features: ["Dedicated engineering pods", "SLA-backed recruitment", "Corporate upskilling tracks"]
    }
  ];

  return (
    <section className="py-10 lg:py-14 bg-white border-b border-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-10">
          <div className="inline-flex items-center space-x-2 bg-slate-100 text-brand-navy px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Handshake className="h-3.5 w-3.5 text-primary" />
            <span>Section G • Strategic Alliances</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight mb-4">
            Institutional &amp; Industry Partnerships
          </h2>
          <p className="text-base text-brand-muted leading-relaxed">
            Collaborating with leading academic institutions and enterprise technology ecosystems to foster world-class technical capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {alliances.map((a) => (
            <div
              key={a.title}
              className="p-7 rounded-2xl bg-brand-soft border border-border/80 shadow-xs hover:shadow-medium transition-all"
            >
              <h3 className="text-lg font-bold text-brand-navy mb-2">{a.title}</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-5">
                {a.desc}
              </p>
              <div className="space-y-2 border-t border-border/60 pt-4">
                {a.features.map((f) => (
                  <div key={f} className="flex items-center space-x-2 text-xs font-medium text-brand-charcoal">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="bg-primary hover:bg-primary-hover text-white font-semibold shadow-soft">
            <Link to="/partnerships" className="inline-flex items-center space-x-2">
              <span>Explore Partnership Frameworks &amp; MoUs</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   SECTION H: ENTERPRISE CONTACT & ENQUIRY PORTAL
   ========================================================================= */
export const ContactPortalSection = () => {
  return (
    <section className="py-10 lg:py-14 bg-brand-navy text-white relative overflow-hidden">
      {/* Subtle geometric lines */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Direct Inquiries (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 text-white px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Mail className="h-3.5 w-3.5 text-brand-electric" />
              <span>Section H • Enterprise Enquiry</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-white tracking-tight leading-tight">
              Let's Discuss Your Technology &amp; Workforce Goals
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Connect directly with our solution architects and practice heads to scope custom software pods, specialized IT staffing, or institutional partnerships.
            </p>

            <div className="space-y-4 pt-2">
              <a
                href="https://share.google/9XwBijGdqZx4s5NN1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3.5 group"
                title="View on Google Maps"
              >
                <div className="p-2.5 rounded-lg bg-white/10 text-brand-electric group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0 mt-0.5">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold group-hover:text-brand-electric transition-colors">
                    Corporate Headquarters (Google Maps ↗)
                  </div>
                  <div className="text-sm font-medium text-white group-hover:underline">
                    Office 1917, 19th Floor, E-Square Building, Sector 96, Noida, Uttar Pradesh, 201301, India
                  </div>
                </div>
              </a>

              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-lg bg-white/10 text-brand-electric flex-shrink-0 mt-0.5">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Executive Contact</div>
                  <a href="mailto:contact@talentxcel.co.in?cc=sanobar.jahan@talentxcel.co.in" className="text-sm font-medium text-brand-electric hover:underline">
                    contact@talentxcel.co.in
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-lg bg-white/10 text-brand-electric flex-shrink-0 mt-0.5">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Direct Telephone</div>
                  <a href="tel:+919717181609" className="text-sm font-medium text-white hover:text-brand-electric transition-colors">
                    +91 97171 81609
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-lg bg-white/10 text-brand-electric flex-shrink-0 mt-0.5">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Response SLA</div>
                  <div className="text-sm font-medium text-white">Within 24 business hours for enterprise inquiries</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Pathway Launcher (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-8 text-brand-navy shadow-large border border-slate-200">
              <h3 className="text-2xl font-bold text-brand-navy mb-2">
                Initiate an Enterprise Inquiry
              </h3>
              <p className="text-sm text-brand-muted mb-6 leading-relaxed">
                Choose the direct operational pathway that best fits your immediate organizational requirement:
              </p>

              <div className="space-y-3 mb-6">
                <Link
                  to="/contact?tab=technology"
                  className="flex items-center justify-between p-4 rounded-xl border border-border/80 hover:border-primary hover:bg-slate-50 transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Code2 className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-brand-navy group-hover:text-primary transition-colors">
                        Enterprise Software &amp; AI
                      </div>
                      <div className="text-xs text-brand-muted">
                        Scope dedicated software pods &amp; systems modernization
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-brand-muted group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>

                <Link
                  to="/contact?tab=staffing"
                  className="flex items-center justify-between p-4 rounded-xl border border-border/80 hover:border-primary hover:bg-slate-50 transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Users2 className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-brand-navy group-hover:text-primary transition-colors">
                        IT Staffing &amp; RPO Solutions
                      </div>
                      <div className="text-xs text-brand-muted">
                        Contract engineers, direct hire &amp; enterprise recruitment
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-brand-muted group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>

                <Link
                  to="/contact?tab=partnerships"
                  className="flex items-center justify-between p-4 rounded-xl border border-border/80 hover:border-primary hover:bg-slate-50 transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-brand-navy group-hover:text-primary transition-colors">
                        Academies &amp; University MoUs
                      </div>
                      <div className="text-xs text-brand-muted">
                        Institutional collaborations &amp; custom corporate training
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-brand-muted group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>
              </div>

              <Button
                asChild
                className="w-full bg-primary hover:bg-primary-hover text-white py-3.5 font-semibold shadow-soft"
                size="lg"
              >
                <Link to="/contact">Open Full Enterprise Inquiry Form</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
