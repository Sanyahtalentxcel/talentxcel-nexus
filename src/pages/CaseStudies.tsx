import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Zap, 
  Layers, 
  LineChart, 
  Briefcase 
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const caseStudiesData = [
  {
    id: "energy-iot-cloud",
    sector: "Renewable Energy & Utilities",
    title: "Distributed Grid Telemetry & Cloud Engineering Pod",
    client: "Authorized CleanTech Enterprise Client (India)",
    challenge: "Client required real-time ingestion of operational telemetry from over 150 solar and wind substations across India into a high-availability cloud monitoring platform, while facing an acute internal shortage of senior DevOps and distributed systems architects.",
    solution: "TalentXcel deployed a dual-engine engagement: our software engineering practice designed a resilient cloud ingestion pipeline on AWS utilizing Kafka, Node.js microservices, and TimescaleDB, while our talent solutions practice staffed three specialized senior DevOps engineers into a dedicated client delivery pod.",
    deliveryApproach: "Agile 2-week sprint cycles with automated CI/CD validation, zero-downtime blue/green deployment strategy, and dedicated SLA management.",
    technologies: ["AWS", "Node.js", "Apache Kafka", "TimescaleDB", "Docker", "Terraform"],
    services: ["Cloud Architecture", "Enterprise Software Engineering", "IT Staff Augmentation"],
    outcomes: [
      "Telemetry ingestion latency reduced by 42%",
      "Complete platform deployed 6 weeks ahead of projected milestone",
      "Zero telemetry data loss across 180 consecutive operating days",
      "Seamless knowledge transfer and retention across client engineering staff"
    ],
    governance: "Published under mutual enterprise NDA & service agreement."
  },
  {
    id: "bfsi-kyc-automation",
    sector: "Banking, Financial Services & Insurance (BFSI)",
    title: "AI-Powered Document Verification & Compliance Staffing",
    client: "Leading Digital Lending & NBFC Institution (India)",
    challenge: "Client experienced severe customer onboarding bottlenecks due to manual verification of unstructured financial documents and regulatory identity verification, resulting in high customer drop-off during peak lending cycles.",
    solution: "Engineered an intelligent optical parsing and automated verification microservice integrating computer vision and NLP models to extract and validate KYC documents in real time. Augmented the client's risk team with five vetted data engineers and quality analysts.",
    deliveryApproach: "Compliance-first design adhering to RBI digital onboarding guidelines, end-to-end payload encryption, and automated anomaly detection.",
    technologies: ["Python", "FastAPI", "PyTorch", "OCR / Vision AI", "PostgreSQL", "Redis"],
    services: ["AI Automation", "Application Development", "Permanent Recruitment & Staffing"],
    outcomes: [
      "Document processing turnaround time reduced from 24 hours to under 30 minutes",
      "Verification accuracy improved to 99.4%",
      "Customer onboarding drop-off rate decreased by 28%",
      "100% compliance audit clearance on automated KYC logs"
    ],
    governance: "Authorized anonymized case study pursuant to client NDA."
  },
  {
    id: "healthcare-ehr-migration",
    sector: "Healthcare & Life Sciences",
    title: "Clinical Data Modernization & Specialized Tech Sourcing",
    client: "Multi-Specialty Diagnostics & Healthcare Network",
    challenge: "Legacy electronic medical records (EMR) system suffered from slow query performance, security vulnerabilities, and inability to integrate with modern web and mobile patient portals, threatening compliance with Indian healthcare data standards.",
    solution: "Designed a microservices-based clinical data API gateway with strict role-based access control, and sourced three specialized full-stack healthcare IT engineers to execute the data cutover.",
    deliveryApproach: "Rigorous staging environment testing with synthetic patient datasets, zero-downtime database migration, and full audit logging.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "FHIR Standards", "Kubernetes"],
    services: ["IT Consulting", "Database Migration", "Specialized Technical Staffing"],
    outcomes: [
      "Diagnostic query response times improved by 35%",
      "Zero data corruption or downtime during multi-terabyte cutover",
      "Unified REST API enabled seamless mobile application launch",
      "Comprehensive data privacy compliance under DPDP Act"
    ],
    governance: "Published under mutual enterprise NDA & service agreement."
  },
  {
    id: "saas-engineering-academy",
    sector: "Enterprise Software & SaaS",
    title: "Rapid Full-Stack MVP Engineering & Academy Pipeline",
    client: "High-Growth B2B Workflow Automation Startup",
    challenge: "Client needed to build and launch an enterprise-grade workflow automation dashboard within 90 days to satisfy investor milestone criteria, while simultaneously constructing a sustainable pipeline of junior and mid-level engineers.",
    solution: "TalentXcel's software engineering practice architected and delivered the core MVP platform on React, TypeScript, and serverless backends, while our Learning Academy inducted four top interns into a live-project track to take over long-term maintenance.",
    deliveryApproach: "Pair programming, automated testing suites (Jest, Playwright), and daily asynchronous standups with client leadership.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Serverless", "GraphQL", "AWS Lambda"],
    services: ["Product Engineering", "Learning & Academy Tracks", "Hire-Train-Deploy"],
    outcomes: [
      "MVP delivered and validated in production in 78 days (12 days ahead of schedule)",
      "All 4 academy engineers successfully transitioned into full-time roles with client",
      "Client secured follow-on enterprise seed funding based on working prototype",
      "Substantially reduced total cost of talent acquisition"
    ],
    governance: "Authorized anonymized case study pursuant to commercial SOW."
  }
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Enterprise Case Studies | TalentXcel Client Outcomes</title>
        <meta
          name="description"
          content="Explore real enterprise outcomes delivered by TalentXcel across Renewable Energy, BFSI, Healthcare, and SaaS. Proven software engineering and workforce solutions."
        />
        <meta
          name="keywords"
          content="TalentXcel case studies, enterprise software delivery, IT staffing case studies, AI automation outcomes, cloud engineering results India"
        />
        <link rel="canonical" href="https://talentxcel.co.in/case-studies" />
      </Helmet>
      
      <Navbar />

      <main className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              <Briefcase className="h-4 w-4" /> Enterprise Proof &amp; Client Outcomes
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Proven Outcomes Across <span className="bg-gradient-primary bg-clip-text text-transparent">Critical Sectors</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore how TalentXcel brings together technology engineering, specialized IT staffing, and workforce academies to solve high-stakes challenges for enterprise clients.
            </p>
          </div>

          {/* Sector Filter / Overview Banner */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {[
              { label: "Energy & Utilities", count: "Smart Grid Ingestion" },
              { label: "BFSI & Fintech", count: "Automated KYC AI" },
              { label: "Healthcare & Life Sciences", count: "EHR Modernization" },
              { label: "Enterprise SaaS", count: "MVP & Academy Scaling" },
            ].map((s, idx) => (
              <div key={idx} className="p-4 bg-muted/30 border border-border/60 rounded-xl text-center">
                <div className="font-bold text-sm text-foreground mb-1">{s.label}</div>
                <div className="text-xs text-primary font-medium">{s.count}</div>
              </div>
            ))}
          </div>

          {/* Case Studies Detailed Grid */}
          <div className="space-y-12 mb-20">
            {caseStudiesData.map((study) => (
              <Card key={study.id} className="p-8 lg:p-10 border-border/80 hover:shadow-medium transition-all">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6 pb-6 border-b border-border/60">
                  <div>
                    <Badge variant="secondary" className="mb-2 text-xs">
                      {study.sector}
                    </Badge>
                    <h2 className="text-2xl font-bold text-foreground">{study.title}</h2>
                    <p className="text-xs text-muted-foreground mt-1 font-mono">
                      Client Profile: {study.client}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 lg:justify-end">
                    {study.services.map((service, sIdx) => (
                      <Badge key={sIdx} variant="outline" className="text-xs bg-primary/5 text-primary border-primary/20">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xs uppercase tracking-wider text-primary font-bold mb-1">
                        The Business Challenge
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs uppercase tracking-wider text-accent font-bold mb-1">
                        Our Solution Delivered
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {study.solution}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs uppercase tracking-wider text-foreground font-bold mb-1">
                        Delivery Methodology
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {study.deliveryApproach}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 bg-muted/20 p-6 rounded-2xl border border-border/50">
                    <h3 className="text-xs uppercase tracking-wider text-foreground font-bold mb-2 flex items-center gap-1.5">
                      <LineChart className="h-4 w-4 text-primary" /> Measurable Client Outcomes
                    </h3>
                    <div className="space-y-2.5">
                      {study.outcomes.map((outcome, oIdx) => (
                        <div key={oIdx} className="flex items-start gap-2 text-sm text-foreground/90">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-border/60">
                      <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                        Technologies Deployed
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {study.technologies.map((tech, tIdx) => (
                          <span key={tIdx} className="text-xs bg-card px-2 py-1 rounded border border-border/60 font-mono text-muted-foreground">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border/40 text-xs text-muted-foreground">
                  <span className="italic">Governance: {study.governance}</span>
                  <Button size="sm" asChild>
                    <Link to="/contact">
                      Request Similar Engagement Scope <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <section className="bg-gradient-hero text-white rounded-3xl p-10 lg:p-14 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 tracking-tight">Ready to Discuss Your Project Challenge?</h2>
              <p className="text-base text-white/90 mb-8 max-w-xl mx-auto leading-relaxed">
                Whether you need specialized software architects, dedicated developer pods, or complete enterprise staffing, our solution architects will tailor a roadmap.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">Discuss an Enterprise Solution</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10" asChild>
                  <Link to="/services">Explore All Capabilities</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudies;
