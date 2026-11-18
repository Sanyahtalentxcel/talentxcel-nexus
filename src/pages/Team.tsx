import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { 
  Users2, 
  ShieldCheck, 
  Briefcase, 
  Award, 
  Sparkles, 
  Building2, 
  Mail, 
  Code2, 
  GraduationCap, 
  Globe2, 
  FileCheck2,
  ExternalLink,
  ChevronRight,
  UserCheck
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const departmentalDivisions = [
  {
    icon: Code2,
    dept: "Technology & Software Engineering",
    head: "Practice Directorate — Technology & AI",
    mandate: "Directing enterprise software architecture, full-stack application development, AI/ML pipeline deployment, and multi-cloud infrastructure modernization.",
    focus: ["Enterprise SaaS Architecture", "Applied AI & Automation", "Cloud DevOps & Posture", "Quality Engineering"],
    color: "primary",
  },
  {
    icon: Users2,
    dept: "Talent Acquisition & Workforce Solutions",
    head: "Practice Directorate — Talent Solutions",
    mandate: "Overseeing contingent IT staffing, permanent recruitment, executive search, and Recruitment Process Outsourcing (RPO) frameworks.",
    focus: ["Contingent & Contract Staffing", "Executive & Leadership Search", "Enterprise RPO Engagements", "Rigorous Code-Vetting"],
    color: "accent",
  },
  {
    icon: GraduationCap,
    dept: "Learning & Talent Development",
    head: "Practice Directorate — Academies & Partnerships",
    mandate: "Leading corporate technical training, university alliances, student live-project tracks, and institutional talent incubation pipelines.",
    focus: ["Corporate Technical Upskilling", "University MoUs & Hackathons", "Live-Project Internships", "Employability Curricula"],
    color: "primary",
  },
  {
    icon: ShieldCheck,
    dept: "Business Operations & Governance",
    head: "Directorate of Operations & Compliance",
    mandate: "Managing statutory Indian regulatory compliance, contractual SLAs, client data protection under DPDP Act, and institutional accounting.",
    focus: ["Statutory Regulatory Filings", "Contractual MSAs & NDAs", "Data Privacy & Governance", "Financial Operations"],
    color: "accent",
  },
  {
    icon: Globe2,
    dept: "Strategic Alliances & Partnerships",
    head: "Directorate of Global Partnerships",
    mandate: "Developing cross-market client engagements across India, Europe, and the Middle East, alongside academic institution MoUs.",
    focus: ["Cross-Border Client Delivery", "Institutional Alliances", "Platform Ecosystem Synergy", "Channel Alliances"],
    color: "primary",
  },
  {
    icon: UserCheck,
    dept: "Customer Success & Enterprise Delivery",
    head: "Lead Enterprise Delivery Manager",
    mandate: "Ensuring flawless day-to-day execution, client onboarding, talent retention metrics, and strict service-level agreement adherence.",
    focus: ["SLA Benchmark Adherence", "Client Account Management", "Candidate Retention", "Quality Assurance Audits"],
    color: "accent",
  },
];

const governancePrinciples = [
  {
    icon: Briefcase,
    title: "Enterprise Integrity",
    desc: "Unwavering commitment to transparent commercial terms, ethical candidate representation, and strict statutory compliance.",
  },
  {
    icon: Sparkles,
    title: "Engineering-Led Leadership",
    desc: "Management with hands-on technical backgrounds who understand production code, systems design, and modern AI pipelines.",
  },
  {
    icon: Award,
    title: "Talent Stewardship",
    desc: "Fostering long-term career progression and continuous technical upskilling rather than treating professionals as transactional commodities.",
  },
  {
    icon: FileCheck2,
    title: "Evidence-First Publishing",
    desc: "Absolute rejection of synthetic people, fabricated employee profiles, or inflated marketing metrics.",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Leadership & Governance | TalentXcel Corporate</title>
        <meta
          name="description"
          content="Meet the leadership and organizational governance of TalentXcel. Guided by experienced technology architects, workforce strategists, and enterprise delivery leaders."
        />
        <meta
          name="keywords"
          content="TalentXcel leadership, corporate governance, executive team, managing director, IT staffing leadership, technology consulting directors Noida"
        />
        <link rel="canonical" href="https://talentxcel.co.in/team" />
      </Helmet>
      
      <Navbar />

      <main className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck className="h-4 w-4" /> Leadership &amp; Corporate Governance
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Leadership Anchored in <span className="bg-gradient-primary bg-clip-text text-transparent">Excellence &amp; Integrity</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              TalentXcel is guided by experienced technology architects, workforce strategists, and operations leaders dedicated to bridging enterprise engineering capability and human potential.
            </p>
          </div>

          {/* Founder & Executive Leadership Spotlight */}
          <div className="mb-20">
            <Card className="p-8 lg:p-12 border-border/80 bg-gradient-to-br from-card via-card to-muted/20 shadow-medium relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
              
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-4 text-center lg:text-left flex flex-col items-center lg:items-start">
                  <div className="w-36 h-36 rounded-3xl bg-gradient-primary flex items-center justify-center text-white shadow-large mb-4 border-4 border-background">
                    <span className="text-4xl font-bold tracking-wider">TX</span>
                  </div>
                  <Badge variant="outline" className="text-xs mb-2">
                    Corporate Leadership
                  </Badge>
                  <h2 className="text-2xl font-bold text-foreground">Office of the Managing Director</h2>
                  <p className="text-sm text-primary font-medium mb-3">Founder &amp; Managing Director</p>
                  <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/60 px-3 py-1 rounded-full border border-border/60">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    <span>Awaiting Authorised Portrait</span>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-4">
                  <h3 className="text-xl font-bold text-foreground">Leadership Philosophy &amp; Strategic Vision</h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    "TalentXcel was founded on a singular conviction: enterprise technology cannot succeed in a silo, detached from the talent that creates and operates it. Our mission is to provide organizations with both the engineering rigor to build modern AI and cloud systems, and the workforce mobility to scale them sustainably."
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 pt-3">
                    <div className="p-4 bg-muted/30 rounded-xl border border-border/50">
                      <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-1">
                        Technology Commitment
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Building scalable digital infrastructure with zero architectural compromises and deep security compliance.
                      </p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-xl border border-border/50">
                      <div className="text-xs uppercase tracking-wider text-accent font-semibold mb-1">
                        Talent Commitment
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Nurturing engineering talent through practical production exposure, ethical staffing, and measurable outcomes.
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-4 text-xs text-muted-foreground">
                    <span>• Headquarters: Noida, Uttar Pradesh</span>
                    <span>• Incorporated: July 2024</span>
                    <span>• Active Regional Focus: India, Europe, Middle East</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Departmental Management & Practice Directorate */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-3 tracking-tight">Management &amp; Practice Directorate</h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Operational leadership structured across six dedicated functions to deliver end-to-end enterprise service excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departmentalDivisions.map((division, idx) => {
                const Icon = division.icon;
                return (
                  <Card key={idx} className="p-6 border-border/60 hover:shadow-medium hover:-translate-y-1 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary">
                          <Icon className="h-6 w-6" />
                        </div>
                        <Badge variant="secondary" className="text-[11px]">
                          Department {idx + 1}
                        </Badge>
                      </div>

                      <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                        {division.dept}
                      </div>
                      <h3 className="font-bold text-lg text-foreground mb-3">{division.head}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                        {division.mandate}
                      </p>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-border/50">
                      <div className="text-[11px] font-semibold text-foreground uppercase tracking-wider">
                        Key Responsibilities
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {division.focus.map((item, fIdx) => (
                          <span key={fIdx} className="text-[11px] bg-muted px-2 py-0.5 rounded text-muted-foreground">
                            {item}
                          </span>
                        ))}
                      </div>
                      <div className="pt-2">
                        <span className="text-[10px] font-mono text-muted-foreground bg-muted/60 px-2 py-1 rounded inline-block">
                          Personnel Profiles: Staged for Verification
                        </span>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Governance Principles */}
          <div className="mb-20 bg-muted/20 rounded-3xl p-8 lg:p-12 border border-border/60">
            <div className="max-w-2xl mb-10">
              <h2 className="text-2xl lg:text-3xl font-bold mb-3">Corporate Governance Commitments</h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                How our board and management uphold institutional trust, financial discipline, and client confidentiality.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {governancePrinciples.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <div key={index} className="p-5 bg-card rounded-2xl border border-border/60 shadow-soft">
                    <Icon className="h-6 w-6 text-primary mb-3" />
                    <h3 className="font-bold text-base text-foreground mb-2">{principle.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{principle.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Verification Protocol Transparency */}
          <div className="p-8 rounded-2xl border border-dashed border-border bg-card/60 text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-lg font-bold mb-2">Team Verification Register Protocol</h3>
            <p className="text-sm text-muted-foreground mb-4">
              In strict adherence to corporate governance, individual biographical releases and verified professional profiles are documented in our internal register before publication.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="outline" size="sm" asChild>
                <Link to="/about">About TalentXcel</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link to="/contact">Contact Corporate Office</Link>
              </Button>
            </div>
          </div>

          {/* Executive CTA */}
          <section className="bg-gradient-hero text-white rounded-3xl p-10 lg:p-14 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 tracking-tight">Engage Directly with Our Leadership</h2>
              <p className="text-base text-white/90 mb-8 max-w-xl mx-auto leading-relaxed">
                For strategic enterprise partnerships, corporate staffing agreements, or institutional university alliances, connect with our leadership desk.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">
                    <Mail className="h-4 w-4 mr-2" /> Connect with Leadership Office
                  </Link>
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

export default Team;
