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
  UserCheck,
  CheckCircle2,
  MapPin,
  Calendar
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import sanobarJahanFounder from "@/assets/sanobar-jahan-founder.jpg";

const departmentalDivisions = [
  {
    icon: Code2,
    dept: "Technology & Software Engineering",
    head: "Practice Directorate — Technology & AI",
    mandate: "Directing enterprise software architecture, full-stack application development, AI/ML pipeline deployment, and cloud infrastructure modernization.",
    focus: ["Enterprise SaaS Architecture", "Applied AI & Automation", "Cloud DevOps & Posture", "Quality Engineering"],
  },
  {
    icon: Users2,
    dept: "Talent Acquisition & Workforce Solutions",
    head: "Practice Directorate — Talent Solutions",
    mandate: "Overseeing contingent IT staffing, permanent recruitment, executive search, and Recruitment Process Outsourcing (RPO) frameworks.",
    focus: ["Contingent & Contract Staffing", "Executive & Leadership Search", "Enterprise RPO Engagements", "Practitioner Code-Vetting"],
  },
  {
    icon: GraduationCap,
    dept: "Learning & Talent Development",
    head: "Practice Directorate — Academies & Partnerships",
    mandate: "Leading corporate technical training, university alliances, student live-project tracks, and institutional talent incubation pipelines.",
    focus: ["Corporate Technical Upskilling", "University MoUs & Hackathons", "Live-Project Internships", "Employability Curricula"],
  },
  {
    icon: ShieldCheck,
    dept: "Business Operations & Governance",
    head: "Directorate of Operations & Compliance",
    mandate: "Managing statutory Indian regulatory compliance, contractual SLAs, client data protection under DPDP Act, and institutional accounting.",
    focus: ["Statutory Regulatory Filings", "Contractual MSAs & NDAs", "Data Privacy & Governance", "Financial Operations"],
  },
  {
    icon: Globe2,
    dept: "Strategic Alliances & Partnerships",
    head: "Directorate of Global Partnerships",
    mandate: "Developing cross-market client engagements across India, Europe, and the Middle East, alongside academic institution MoUs.",
    focus: ["Cross-Border Client Delivery", "Institutional Alliances", "Platform Ecosystem Synergy", "Channel Partnerships"],
  },
  {
    icon: UserCheck,
    dept: "Customer Success & Enterprise Delivery",
    head: "Lead Enterprise Delivery Directorate",
    mandate: "Ensuring day-to-day execution, client onboarding, talent retention metrics, and strict service-level agreement adherence.",
    focus: ["SLA Benchmark Adherence", "Client Account Management", "Candidate Retention", "Quality Assurance Audits"],
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
    desc: "Absolute rejection of synthetic people, fabricated employee profiles, or inflated marketing claims.",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Leadership & Founder | TalentXcel Corporate</title>
        <meta
          name="description"
          content="Meet Sanobar Jahan, Founder of TalentXcel Services Private Limited, and explore the corporate governance and practice directorates guiding our integrated technology and talent solutions."
        />
        <meta
          name="keywords"
          content="Sanobar Jahan, TalentXcel Founder, corporate governance, executive team, IT staffing leadership, technology consulting directors Noida"
        />
        <link rel="canonical" href="https://talentxcel.co.in/team" />

        {/* Structured Data: Founder & Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Sanobar Jahan",
            "jobTitle": "Founder",
            "worksFor": {
              "@type": "Organization",
              "name": "TalentXcel Services Private Limited",
              "url": "https://talentxcel.co.in"
            },
            "description": "Founder of TalentXcel Services Private Limited, leading integrated technology, talent acquisition, and workforce learning solutions."
          })}
        </script>
      </Helmet>
      
      <Navbar />

      <main className="flex-1 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/20">
              <ShieldCheck className="h-4 w-4" /> Founder &amp; Corporate Governance
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-foreground">
              Leadership Built on <span className="bg-gradient-primary bg-clip-text text-transparent">Purpose &amp; Integrity</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              TalentXcel was established to bridge the structural divide between enterprise technology engineering and human talent mobility. Meet our Founder and explore our corporate leadership architecture.
            </p>
          </div>

          {/* Genuine Founder Profile Spotlight */}
          <div className="mb-20">
            <Card className="p-8 lg:p-12 border-border/80 bg-gradient-to-br from-card via-card to-muted/20 shadow-large relative overflow-hidden rounded-3xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
              
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Left Column: Authentic Founder Portrait */}
                <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-large border-2 border-border/80 mb-6 bg-muted">
                    <img 
                      src={sanobarJahanFounder} 
                      alt="Sanobar Jahan — Founder, TalentXcel Services Private Limited" 
                      className="w-full h-auto aspect-[4/5] object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                    />
                    <div className="absolute bottom-3 left-3 right-3 bg-card/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-border/60 flex items-center justify-between">
                      <span className="text-xs font-semibold text-foreground">Sanobar Jahan</span>
                      <span className="text-[11px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">Founder</span>
                    </div>
                  </div>

                  <Badge variant="outline" className="text-xs mb-2 border-primary/30 text-primary bg-primary/5">
                    Founder &amp; Corporate Leadership
                  </Badge>
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Sanobar Jahan</h2>
                  <p className="text-sm font-semibold text-primary mb-3">Founder, TalentXcel</p>

                  <div className="w-full space-y-2 pt-2 border-t border-border/60 text-xs text-muted-foreground text-left">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                      <span>TalentXcel Services Private Limited</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                      <span>E-Square Building, Sector 96, Noida, UP</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                      <span>Incorporated: July 2024 (CIN: U85500UP2024PTC206390)</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Verified Biography, Vision & Leadership Context */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                      <Sparkles className="h-3.5 w-3.5" /> Founder's Vision &amp; Philosophy
                    </div>
                    <h3 className="text-2xl font-bold text-foreground tracking-tight mb-4">
                      Bridging Technology Engineering and Human Capability
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-4">
                      TalentXcel was conceived on a foundational conviction: modern enterprise technology cannot succeed in a silo, detached from the talent that creates, implements, and operates it. As organizations navigate the profound transition toward cloud-native architectures and artificial intelligence, the defining bottleneck is rarely the software itself—it is the availability of verified practitioners capable of delivering in production.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      Under Sanobar Jahan's founding vision, TalentXcel integrates three traditionally disconnected business pillars into one cohesive operating system: <strong className="text-foreground">Technology &amp; AI Engineering</strong>, <strong className="text-foreground">Specialized IT Staffing</strong>, and <strong className="text-foreground">Practitioner-Led Workforce Learning</strong>.
                    </p>
                  </div>

                  {/* Brand Promise Callout */}
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border border-primary/20">
                    <div className="text-xs uppercase tracking-wider text-primary font-bold mb-1">
                      TalentXcel Brand Promise
                    </div>
                    <div className="text-base sm:text-lg font-bold text-foreground italic">
                      "Technology That Moves Business Forward. Talent That Makes It Possible."
                    </div>
                  </div>

                  {/* Core Leadership Priorities */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">
                      Strategic Leadership Priorities
                    </h4>
                    <div className="grid sm:grid-cols-3 gap-3">
                      <div className="p-4 bg-muted/40 rounded-xl border border-border/60">
                        <div className="text-xs font-bold text-primary mb-1">01. Integrated Solutions</div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Delivering software consulting, talent acquisition, and workforce upskilling under one accountable commercial framework.
                        </p>
                      </div>
                      <div className="p-4 bg-muted/40 rounded-xl border border-border/60">
                        <div className="text-xs font-bold text-accent mb-1">02. Practitioner Standards</div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Insisting on technical evaluation conducted by active software architects rather than transactional keyword screening.
                        </p>
                      </div>
                      <div className="p-4 bg-muted/40 rounded-xl border border-border/60">
                        <div className="text-xs font-bold text-emerald-600 mb-1">03. Institutional Governance</div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Upholding rigorous compliance under the Indian Companies Act, DPDP Act 2023, and verified commercial SLAs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-4 text-xs text-muted-foreground border-t border-border/60 pt-4">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Verified Founder Identity
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Registered Corporate Entity
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> MCA Registered: U85500UP2024PTC206390
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Departmental Management & Practice Directorate */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground mb-3">
                <Users2 className="h-3.5 w-3.5" /> Functional Leadership Structure
              </div>
              <h2 className="text-3xl font-bold mb-3 tracking-tight text-foreground">Practice Directorates &amp; Management</h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Operational execution is structured across six dedicated practice directorates to deliver end-to-end service reliability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departmentalDivisions.map((division, idx) => {
                const Icon = division.icon;
                return (
                  <Card key={idx} className="p-6 border-border/60 hover:shadow-medium hover:-translate-y-1 transition-all flex flex-col justify-between rounded-2xl bg-card">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary">
                          <Icon className="h-6 w-6" />
                        </div>
                        <Badge variant="secondary" className="text-[11px]">
                          Directorate {idx + 1}
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
                          Governance: Maintained Under Verification Register
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
              <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-foreground">Corporate Governance Commitments</h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                How our leadership upholds institutional trust, statutory discipline, and client confidentiality.
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
            <h3 className="text-lg font-bold mb-2 text-foreground">Team Verification Register Protocol</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              In strict adherence to corporate governance, individual biographical profiles and executive appointments are published on this website only after verification and authorization in our internal register. We do not use synthetic personas or unauthorized personnel records.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="outline" size="sm" asChild>
                <Link to="/about">About TalentXcel</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link to="/careers">Explore Career Opportunities</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link to="/contact">Contact Corporate Office</Link>
              </Button>
            </div>
          </div>

          {/* Executive CTA */}
          <section className="bg-gradient-hero text-white rounded-3xl p-10 lg:p-14 text-center shadow-large">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 tracking-tight">Engage Directly with Our Leadership Office</h2>
              <p className="text-base text-white/90 mb-8 max-w-xl mx-auto leading-relaxed">
                For strategic enterprise partnerships, corporate staffing agreements, or institutional university alliances, connect with our leadership desk at our Noida corporate headquarters.
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