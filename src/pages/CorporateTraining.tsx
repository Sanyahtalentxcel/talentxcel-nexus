import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import {
  GraduationCap,
  Sparkles,
  Brain,
  Code2,
  Users2,
  Building2,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  Target,
  Award,
  BookOpen,
  Briefcase,
  HelpCircle,
  FileCheck,
  Calculator,
} from "lucide-react";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import trainingSession from "@/assets/training-session.jpg";
import modernWorkspace from "@/assets/modern-workspace.jpg";

const CorporateTraining = () => {
  const location = useLocation();

  // Active programme tabs
  const programmes = [
    {
      id: "ai-productivity",
      badge: "Offer 01 • Executive Workshop",
      title: "Generative AI & Enterprise Workplace Productivity",
      duration: "1 to 2 Days (Bootcamp)",
      audience: "Knowledge workers, business analysts, managers, operations teams",
      overview:
        "Practical hands-on enablement transforming routine business tasks with Generative AI, prompt engineering, and automated knowledge workflows.",
      modules: [
        "Generative AI Fundamentals & Corporate Data Privacy (DPDP Guardrails)",
        "Prompt Engineering for Business Communications & Strategic Drafting",
        "Automating Analysis: Excel, Financial Syntheses & Document Summarization",
        "AI for Sales, Marketing Content & Client Presentation Engineering",
        "Designing Safe Internal AI Operating Guidelines & Tool Whitelisting"
      ],
      delivery: "Onsite in Noida / Delhi NCR or Live Virtual Cohort",
      outcome: "Immediate 3-5 hours weekly productivity gain per knowledge employee."
    },
    {
      id: "ai-enablement",
      badge: "Offer 02 • Departmental Programme",
      title: "Corporate AI Enablement & Functional Transformation",
      duration: "4 to 6 Weeks (Modular)",
      audience: "Cross-functional teams: HR, Sales, Operations, Finance, IT",
      overview:
        "Comprehensive departmental curriculum embedding applied AI workflows into daily functional team processes and operational systems.",
      modules: [
        "AI for HR & Recruitment: Resume parsing, screening & interview synthesis",
        "AI for Sales & Business Development: Lead scoring & personalized outreach",
        "AI for Finance: Invoice validation, variance reconciliation & reporting",
        "AI for Operations: Automated document processing & workflow orchestration",
        "Executive AI Governance: Risk mitigation, ethics, and copyright compliance"
      ],
      delivery: "Hybrid: Bi-weekly interactive labs + hands-on capstone projects",
      outcome: "Production-ready departmental AI workflows with measurable ROI."
    },
    {
      id: "technical-training",
      badge: "Offer 03 • Engineering Academy",
      title: "Technical & Cloud Engineering Upskilling",
      duration: "8 to 12 Weeks (Deep Track)",
      audience: "Software developers, QA teams, systems engineers, cloud practitioners",
      overview:
        "Practitioner-led technical transformation upgrading legacy software developers to modern Full-Stack, Cloud-Native, and Applied AI architectures.",
      modules: [
        "Modern Full-Stack: TypeScript, React, Next.js, and Node.js microservices",
        "Cloud & DevOps: AWS / Azure cloud architectures, Docker, Kubernetes & CI/CD",
        "Applied AI Engineering: Python, PyTorch, LangChain, Vector DBs & LLMs",
        "Microservices Architecture & System Scalability under high loads",
        "Secure Coding Practices, OWASP Top 10 & API Security Compliance"
      ],
      delivery: "Live client-grade codebases with senior engineering code reviews",
      outcome: "Developers deployed directly onto production enterprise roadmaps."
    },
    {
      id: "leadership",
      badge: "Offer 04 • Executive Leadership",
      title: "Leadership & High-Performance Team Management",
      duration: "3 to 5 Days (Executive Retreat)",
      audience: "Engineering managers, newly promoted tech leads, VP candidates",
      overview:
        "Transitioning high-performing individual contributors into strategic engineering leaders capable of driving business outcomes and retaining top talent.",
      modules: [
        "First-Time Engineering Manager Transition & Mindset Shift",
        "Strategic Delegation, Code Review Cadence & Performance Management",
        "Cross-Functional Stakeholder Communication (Bridging Tech & CXOs)",
        "Conflict Resolution, Retaining Top Talent & Mitigating Burnout",
        "Outcome-Driven Roadmap Prioritization & Technical Debt Management"
      ],
      delivery: "Executive interactive workshops + 1-on-1 coaching sessions",
      outcome: "Confident managers who elevate engineering morale and output."
    },
    {
      id: "university-employability",
      badge: "Offer 05 • Institutional Track",
      title: "University & Graduate Employability Academy",
      duration: "1 Semester (120 Hours)",
      audience: "Final year engineering students, MCA/B.Tech candidates",
      overview:
        "Bridging the acute divide between theoretical academic syllabi and enterprise production engineering through live project mentorship.",
      modules: [
        "Production Codebase Immersion: Git workflows, PRs & code reviews",
        "Enterprise Data Structures & Algorithmic Problem Solving",
        "Full-Stack Web & Cloud Deployment on Real Production Servers",
        "Technical Whiteboard Interview Preparation & Mock Panel Interviews",
        "Professional Workplace Communication & Corporate Etiquette"
      ],
      delivery: "Campus labs + virtual mentorship by active industry practitioners",
      outcome: "Day-one billable graduates with 85%+ campus placement readiness."
    }
  ];

  const [activeProgramme, setActiveProgramme] = useState(programmes[0]);

  const faqs = [
    {
      q: "Can the training curriculum be customized to our internal software stack?",
      a: "Yes. All corporate training tracks begin with a discovery scoping session. We tailor the exercises, tool selections, and case studies to your exact technology stack, internal guidelines, and security requirements."
    },
    {
      q: "Who conducts the corporate training sessions?",
      a: "All programmes are led by active engineering practitioners and industry experts with real-world delivery experience—not full-time theoretical trainers."
    },
    {
      q: "What delivery formats are supported?",
      a: "We support onsite workshops at your corporate offices, dedicated sessions at our Noida executive facility, live interactive virtual cohorts, and hybrid formats."
    },
    {
      q: "How does the quotation and commercial engagement work?",
      a: "We offer quotation-based enterprise pricing tailored to cohort size, custom exercises, and duration. We frequently start with a paid pilot workshop before expanding to departmental or organization-wide engagements."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Corporate Training & Workforce AI Enablement | TalentXcel</title>
        <meta
          name="description"
          content="Enterprise workforce learning and AI capability development. Upskill your employees with Generative AI productivity bootcamps, cloud engineering tracks, and leadership academies."
        />
        <meta
          name="keywords"
          content="Corporate training India, AI training for employees, Generative AI corporate training, technical upskilling, leadership development, employee upskilling Noida Delhi NCR"
        />
        <link rel="canonical" href="https://talentxcel.co.in/corporate-training" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://talentxcel.co.in"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://talentxcel.co.in/services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Corporate Training",
                "item": "https://talentxcel.co.in/corporate-training"
              }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "@id": "https://talentxcel.co.in/corporate-training#genai-bootcamp",
            "name": "Generative AI & Enterprise Workplace Productivity",
            "description": "Practical hands-on enablement transforming routine business tasks with Generative AI, prompt engineering, and automated knowledge workflows.",
            "provider": {
              "@type": "Organization",
              "@id": "https://talentxcel.co.in/#organization",
              "name": "TalentXcel Services Private Limited",
              "url": "https://talentxcel.co.in"
            },
            "courseMode": ["onsite", "online", "blended"],
            "courseWorkload": "PT16H",
            "timeRequired": "P2D",
            "offers": {
              "@type": "Offer",
              "category": "Corporate Quote",
              "price": "0",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": "https://talentxcel.co.in/corporate-training"
            }
          })}
        </script>
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-brand-soft pt-10 pb-12 lg:pt-12 lg:pb-14 border-b border-border/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                  <GraduationCap className="h-3.5 w-3.5" />
                  <span>Corporate Learning &amp; Workforce Development</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy leading-tight tracking-tight">
                  Build a Workforce Ready for the{" "}
                  <span className="text-primary block sm:inline">Next Generation of Work.</span>
                </h1>

                <p className="text-base sm:text-lg text-brand-muted leading-relaxed max-w-xl">
                  TalentXcel partners with forward-thinking enterprises, HR leaders, and universities to deliver practical AI adoption, technical engineering excellence, and measurable workforce capability.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Button
                    size="lg"
                    asChild
                    className="bg-primary hover:bg-primary-hover text-white font-semibold shadow-soft"
                  >
                    <a href="#training-form">Request a Training Proposal</a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="border-slate-300 text-brand-navy hover:bg-white"
                  >
                    <a href="#programmes">Explore Programme Portfolio</a>
                  </Button>
                </div>

                {/* Key Metrics Pill Bar */}
                <div className="pt-6 border-t border-border/80 grid grid-cols-3 gap-4 text-xs text-brand-muted">
                  <div>
                    <div className="font-bold text-base text-brand-navy">100%</div>
                    <div>Practitioner-Led Instruction</div>
                  </div>
                  <div>
                    <div className="font-bold text-base text-brand-navy">3-5 Hrs</div>
                    <div>Weekly Output Gain per Employee</div>
                  </div>
                  <div>
                    <div className="font-bold text-base text-brand-navy">SLA-Backed</div>
                    <div>Custom Curriculum Scoping</div>
                  </div>
                </div>
              </div>

              {/* Visual Frame */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-large border border-border/80 bg-white">
                  <img
                    src={trainingSession}
                    alt="TalentXcel Corporate Training Workshop"
                    className="w-full h-80 sm:h-96 object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-brand-electric">
                      Enterprise Learning Architecture
                    </span>
                    <h3 className="text-base font-bold text-white mt-1">
                      From Pilot Bootcamps to Organization-Wide Upskilling
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Salary & Skill Premium Banner */}
        <section className="py-6 bg-slate-100/70 border-b border-border/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-slate-900 to-brand-navy rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
                  <Calculator className="h-3.5 w-3.5" />
                  <span>2026–2027 Skill Premium Intelligence</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Generative AI Skills Command a +22% Compensation Premium
                </h3>
                <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Explore how AI enablement, prompt engineering, and cloud upskilling increase employee productivity and benchmark market values.
                </p>
              </div>
              <div className="shrink-0">
                <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold py-6 px-6 text-sm">
                  <Link to="/salary-calculator">
                    Explore Skill Multipliers
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Programme Portfolio Navigator */}
        <section id="programmes" className="py-10 lg:py-14 bg-white border-b border-border/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <div className="inline-flex items-center space-x-2 bg-slate-100 text-brand-navy px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
                <BookOpen className="h-3.5 w-3.5 text-primary" />
                <span>Commercial Training Portfolio</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight mb-3">
                Targeted Workforce Programmes Built for Real ROI
              </h2>
              <p className="text-base text-brand-muted leading-relaxed">
                Choose from introductory executive workshops, deep technical bootcamps, or customized departmental curricula.
              </p>
            </div>

            {/* Program Selection Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {programmes.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActiveProgramme(p)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeProgramme.id === p.id
                      ? "bg-primary text-white shadow-soft"
                      : "bg-slate-100 text-brand-muted hover:bg-slate-200/80 hover:text-brand-navy"
                  }`}
                >
                  {p.title.split("&")[0].trim()}
                </button>
              ))}
            </div>

            {/* Selected Program Showcase Card */}
            <div className="max-w-5xl mx-auto bg-brand-soft rounded-3xl border border-border/80 p-6 sm:p-8 lg:p-10 shadow-medium">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/70 pb-5 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-primary/10 text-primary">
                    {activeProgramme.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy mt-2">
                    {activeProgramme.title}
                  </h3>
                </div>
                <div className="text-left md:text-right">
                  <div className="text-xs uppercase tracking-wider text-brand-muted font-bold">Standard Format</div>
                  <div className="text-base font-bold text-primary">{activeProgramme.duration}</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-2">
                    Target Audience
                  </h4>
                  <p className="text-sm text-brand-muted leading-relaxed mb-6">
                    {activeProgramme.audience}
                  </p>

                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-2">
                    Programme Overview
                  </h4>
                  <p className="text-sm text-brand-muted leading-relaxed mb-6">
                    {activeProgramme.overview}
                  </p>

                  <div className="p-4 rounded-xl bg-white border border-border/70 text-xs text-brand-navy space-y-1">
                    <div><strong>Delivery Modality:</strong> {activeProgramme.delivery}</div>
                    <div className="text-emerald-700 font-semibold">
                      <strong>Expected Outcome:</strong> {activeProgramme.outcome}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-3">
                    Core Curriculum Modules
                  </h4>
                  <div className="space-y-3">
                    {activeProgramme.modules.map((m, idx) => (
                      <div key={idx} className="flex items-start space-x-3 p-3 rounded-xl bg-white border border-border/60 text-xs sm:text-sm text-brand-navy">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center pt-4 border-t border-border/70">
                <Button asChild size="lg" className="bg-primary hover:bg-primary-hover text-white font-semibold">
                  <a href="#training-form">Scope This Programme for Your Team</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Form Section */}
        <section id="training-form" className="py-10 lg:py-14 bg-brand-soft border-b border-border/70">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <LeadCaptureForm
              initialCategory="corporate_training"
              title="Request a Corporate Training Proposal or Pilot"
              subtitle="Schedule a consultation with our Learning & Development practice directors in Noida."
              buttonText="Request Custom Training Proposal"
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-10 lg:py-14 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm text-brand-muted">
                Key operational and commercial details for corporate L&amp;D buyers.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((f, i) => (
                <div key={i} className="p-6 rounded-2xl bg-brand-soft border border-border/70">
                  <h4 className="text-base font-bold text-brand-navy mb-2">{f.q}</h4>
                  <p className="text-sm text-brand-muted leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CorporateTraining;
