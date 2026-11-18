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
  Briefcase,
  Info,
  Code2,
  FileCheck2
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const solutionScenarios = [
  {
    id: "energy-iot-cloud",
    scenarioType: "Illustrative Energy Technology Scenario",
    sector: "Renewable Energy & Utilities",
    title: "Distributed Grid Telemetry & Cloud Engineering Pod",
    overview: "Architectural blueprint for real-time telemetry ingestion from distributed substations into high-availability cloud monitoring clusters, supported by dedicated DevOps engineering pods.",
    businessContext: "Industrial energy operators frequently struggle with real-time ingestion latency and telemetry dropouts when scaling monitoring across geographically dispersed solar and wind installations, compounded by an acute shortage of senior distributed systems engineers.",
    solutionFramework: "A dual-capability engagement model: software architects design a resilient event-driven cloud ingestion pipeline on AWS utilizing Kafka, Node.js microservices, and TimescaleDB, while the talent practice staffs dedicated, pre-screened DevOps engineers to manage deployment and cluster health.",
    deliveryMethodology: "Agile 2-week sprint cycles with automated CI/CD pipeline validation, containerized Docker environments, and infrastructure-as-code via Terraform.",
    technologies: ["AWS", "Node.js", "Apache Kafka", "TimescaleDB", "Docker", "Terraform"],
    capabilitiesIntegrated: ["Cloud Architecture", "Enterprise Software Engineering", "Specialized IT Staffing"],
    deliverables: [
      "Fault-tolerant, high-throughput telemetry ingestion pipeline",
      "Decoupled microservices architecture with automated blue/green deployment",
      "Unified operational telemetry dashboard with zero single points of failure",
      "Structured documentation, repository handover, and team upskilling"
    ],
    transparencyNote: "Illustrative domain capability scenario representing TalentXcel engineering frameworks."
  },
  {
    id: "bfsi-kyc-automation",
    scenarioType: "Illustrative Financial Services Scenario",
    sector: "Banking, Financial Services & Insurance (BFSI)",
    title: "Intelligent Document Parsing & Compliance Staffing Pod",
    overview: "High-security workflow automation framework for financial institutions to parse, validate, and verify unstructured customer documentation while maintaining statutory data isolation.",
    businessContext: "Digital lending platforms and financial enterprises face operational bottlenecks during customer onboarding due to manual document review, leading to delayed turnaround and potential regulatory non-compliance.",
    solutionFramework: "Deployment of an intelligent optical parsing and automated verification microservice integrating computer vision and NLP models to extract and validate KYC data, augmented by a specialized pod of vetted data engineers and quality analysts.",
    deliveryMethodology: "Compliance-first architecture adhering to Indian statutory digital onboarding mandates, end-to-end payload encryption at rest and in transit, and immutable audit logs.",
    technologies: ["Python", "FastAPI", "PyTorch", "OCR / Vision AI", "PostgreSQL", "Redis"],
    capabilitiesIntegrated: ["AI Automation", "Application Development", "Technical Talent Sourcing"],
    deliverables: [
      "Automated document classification and optical text extraction pipeline",
      "Real-time validation microservice integrated via secure RESTful APIs",
      "Role-based administrative verification portal with complete audit trails",
      "Full compliance alignment with DPDP Act 2023 data processing requirements"
    ],
    transparencyNote: "Illustrative domain capability scenario representing TalentXcel engineering frameworks."
  },
  {
    id: "healthcare-ehr-migration",
    scenarioType: "Illustrative Healthcare Technology Scenario",
    sector: "Healthcare & Life Sciences",
    title: "Clinical Data Modernization & Secure API Gateway",
    overview: "Data modernization architecture migrating legacy clinical data stores to modern microservices with strict role-based access control and healthcare interoperability standards.",
    businessContext: "Healthcare networks frequently contend with legacy electronic health record systems that suffer from slow database queries, tight architectural coupling, and an inability to interface securely with modern mobile and web portals.",
    solutionFramework: "Design of a microservices-based clinical data API gateway with strict role-based access control and containerized services, supported by technical sourcing of specialized healthcare IT developers.",
    deliveryMethodology: "Staged data migration utilizing synthetic datasets for rigorous pre-production testing, zero-downtime database migration strategies, and automated regression testing.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "FHIR Standards", "Kubernetes"],
    capabilitiesIntegrated: ["IT Consulting", "Database Modernization", "Specialized Technical Staffing"],
    deliverables: [
      "Modernized RESTful and GraphQL API gateway for clinical records",
      "Zero-downtime cutover plan with comprehensive data integrity validation",
      "Granular role-based access control (RBAC) ensuring patient privacy",
      "Production-ready Kubernetes deployment manifests and monitoring instrumentation"
    ],
    transparencyNote: "Illustrative domain capability scenario representing TalentXcel engineering frameworks."
  },
  {
    id: "saas-engineering-academy",
    scenarioType: "Illustrative Enterprise Software Scenario",
    sector: "Enterprise Software & SaaS",
    title: "Cloud-Native Workflow Automation & Engineering Pod",
    overview: "Accelerated full-stack product engineering pod paired with a structured technical academy track to ensure long-term architecture ownership and sustainable talent pipelines.",
    businessContext: "Fast-scaling SaaS enterprises often require rapid MVP delivery to capture emerging enterprise markets, while simultaneously needing to build a sustainable internal engineering bench without exorbitant recruiting markups.",
    solutionFramework: "TalentXcel's software engineering practice delivers the core architecture on React, TypeScript, and cloud-native backends, while our Learning Academy inducts pre-screened junior engineers into a live-project track to absorb system architecture for ongoing maintenance.",
    deliveryMethodology: "Test-driven development, automated CI/CD pipelines (GitHub Actions, Playwright), and daily asynchronous sprint cadence.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "AWS"],
    capabilitiesIntegrated: ["Product Engineering", "Dedicated Engineering Pod", "Workforce Academy Track"],
    deliverables: [
      "Production-grade enterprise SaaS application architecture",
      "Comprehensive end-to-end automated testing suite with high code coverage",
      "Continuous deployment pipeline with automated staging environments",
      "Trained, pre-onboarded junior engineering squad ready for internal absorption"
    ],
    transparencyNote: "Illustrative domain capability scenario representing TalentXcel engineering frameworks."
  }
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Technology Capabilities & Solution Scenarios | TalentXcel Corporate</title>
        <meta
          name="description"
          content="Explore TalentXcel's technical capabilities, architecture blueprints, and solution scenarios across Renewable Energy, BFSI, Healthcare, and SaaS."
        />
        <meta
          name="keywords"
          content="TalentXcel solution scenarios, technical capabilities, enterprise software architecture, cloud telemetry, IT staffing frameworks Noida"
        />
        <link rel="canonical" href="https://talentxcel.co.in/case-studies" />
      </Helmet>
      
      <Navbar />

      <main className="flex-1 py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-3 border border-primary/20">
              <Code2 className="h-4 w-4" /> Technical Capability &amp; Domain Architecture
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground">
              Technology Capabilities &amp; <span className="bg-gradient-primary bg-clip-text text-transparent">Solution Scenarios</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Explore how TalentXcel structures solutions across critical enterprise domains. The following illustrative scenarios demonstrate our engineering methodology, talent pod integration, and technical stacks.
            </p>
          </div>

          {/* Corporate Transparency Callout */}
          <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-muted/40 border border-border/80 flex items-start gap-3.5 max-w-4xl mx-auto">
            <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Corporate Transparency Commitment:</strong> The scenarios presented on this page are architectural capability models and delivery frameworks developed by our engineering and staffing practices. For proprietary client engagements governed by mutual non-disclosure agreements (NDAs), verified commercial references and sanitized architectural briefings are provided directly to enterprise procurement teams upon request.
            </div>
          </div>

          {/* Sector Overview Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { label: "Energy & Utilities", focus: "Grid Telemetry & Cloud Pods" },
              { label: "BFSI & Fintech", focus: "Parsing & Compliance Pods" },
              { label: "Healthcare & Life Sciences", focus: "Clinical Data Gateways" },
              { label: "Enterprise Software & SaaS", focus: "Full-Stack MVP Pods" },
            ].map((s, idx) => (
              <div key={idx} className="p-4 bg-card border border-border/70 rounded-xl text-center shadow-soft">
                <div className="font-bold text-sm text-foreground mb-1">{s.label}</div>
                <div className="text-xs text-primary font-medium">{s.focus}</div>
              </div>
            ))}
          </div>

          {/* Detailed Solution Scenarios Grid */}
          <div className="space-y-8 mb-12">
            {solutionScenarios.map((scenario) => (
              <Card key={scenario.id} className="p-8 lg:p-10 border-border/80 hover:shadow-medium transition-all rounded-3xl bg-card">
                
                {/* Scenario Header */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6 pb-6 border-b border-border/60">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs bg-primary/5 text-primary border-primary/20">
                        {scenario.scenarioType}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {scenario.sector}
                      </Badge>
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">{scenario.title}</h2>
                    <p className="text-xs text-muted-foreground mt-1">
                      {scenario.overview}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 lg:justify-end">
                    {scenario.capabilitiesIntegrated.map((cap, cIdx) => (
                      <span key={cIdx} className="text-xs bg-muted px-2.5 py-1 rounded-md text-foreground font-medium border border-border/60">
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Scenario Details */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xs uppercase tracking-wider text-primary font-bold mb-1.5 flex items-center gap-1.5">
                        <Briefcase className="h-3.5 w-3.5" /> Domain Challenge Context
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {scenario.businessContext}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs uppercase tracking-wider text-accent font-bold mb-1.5 flex items-center gap-1.5">
                        <Layers className="h-3.5 w-3.5" /> Solution Framework &amp; Staffing
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {scenario.solutionFramework}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs uppercase tracking-wider text-foreground font-bold mb-1.5 flex items-center gap-1.5">
                        <FileCheck2 className="h-3.5 w-3.5 text-primary" /> Delivery Methodology
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {scenario.deliveryMethodology}
                      </p>
                    </div>
                  </div>

                  {/* Key Deliverables & Tech Stack */}
                  <div className="space-y-4 bg-muted/20 p-6 rounded-2xl border border-border/60 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xs uppercase tracking-wider text-foreground font-bold mb-3 flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4 text-primary" /> Solution Architecture Deliverables
                      </h3>
                      <div className="space-y-2.5 mb-6">
                        {scenario.deliverables.map((del, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border/60">
                      <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Technologies &amp; Frameworks
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {scenario.technologies.map((tech, tIdx) => (
                          <span key={tIdx} className="text-xs bg-card px-2.5 py-1 rounded-md border border-border/60 font-mono text-muted-foreground">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Scenario Footer */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border/40 text-xs text-muted-foreground">
                  <span className="italic">{scenario.transparencyNote}</span>
                  <Button size="sm" asChild>
                    <Link to="/contact">
                      Request Custom Technical Proposal <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Enterprise Consultation Callout */}
          <section className="bg-gradient-hero text-white rounded-3xl p-10 lg:p-14 text-center shadow-large">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 tracking-tight">Need a Solution Tailored to Your Architecture?</h2>
              <p className="text-base text-white/90 mb-8 max-w-xl mx-auto leading-relaxed">
                Our technology architects and talent directors will collaborate with your engineering leads to scope customized software pods, dedicated staffing pipelines, or corporate upskilling programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">Request Technical Discovery Call</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10" asChild>
                  <Link to="/services">Explore Enterprise Solutions</Link>
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