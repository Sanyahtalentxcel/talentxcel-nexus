import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { 
  Handshake, 
  GraduationCap, 
  Cpu, 
  Users2, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink, 
  Building2, 
  Layers, 
  Globe2,
  Sparkles,
  ShieldCheck,
  Award,
  Clock,
  Info,
  School
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";

const partnershipOpportunities = [
  {
    icon: School,
    id: "universities",
    category: "Academic & Institutional",
    title: "University & Academic Alliances",
    subtitle: "Credit-Bearing Employability Tracks & Campus MoUs",
    description: "Collaborate with university leadership, engineering deans, and placement directorates to deploy industry-aligned AI and full-stack finishing school curricula with direct corporate hiring pathways.",
    initiatives: [
      "Semester-long credit-bearing electives in GenAI & Cloud-Native Engineering",
      "TalentXcel Co-Branded Campus Innovation Labs & Hackathons",
      "Direct candidate profiling and hiring drives on talentxcel.in",
      "Faculty Development Programs (FDPs) led by practicing tech architects"
    ],
    ctaText: "Explore University MoU",
    ctaLink: "/university-partnerships"
  },
  {
    icon: Cpu,
    id: "technology",
    category: "Technology & Software",
    title: "Technology & Innovation Alliances",
    subtitle: "Cloud, AI & Software Co-Development",
    description: "Partner with enterprise technology providers, independent software vendors (ISVs), and cloud ecosystems to build scalable AI microservices, enterprise integrations, and secure communications.",
    initiatives: [
      "Joint proof-of-concept (POC) design and enterprise software delivery",
      "Cloud migration frameworks (AWS, Azure, Multi-cloud environments)",
      "Secure enterprise communications integration via CHATR Enterprise",
      "Co-marketing and technical architecture whitepapers"
    ],
    ctaText: "Discuss Tech Alliance",
    ctaLink: "#partnership-form"
  },
  {
    icon: Users2,
    id: "employers",
    category: "Corporate & Staffing",
    title: "Employer & Recruitment Partnerships",
    subtitle: "Preferred Vendor & Dedicated Pod Agreements",
    description: "Establish primary staffing supplier agreements, master service agreements (MSAs), and dedicated managed engineering pods with enterprise HR leaders and procurement teams.",
    initiatives: [
      "Preferred Vendor List (PVL) and Master Supplier contracting",
      "90-Day warranty-backed contingent permanent recruitment",
      "Enterprise Recruitment Process Outsourcing (RPO) tiered models",
      "Dedicated agile software pods for rapid digital scaling"
    ],
    ctaText: "Explore Staffing Alliances",
    ctaLink: "/staffing-solutions"
  },
  {
    icon: GraduationCap,
    id: "training",
    category: "Learning & Upskilling",
    title: "Corporate Training & Delivery Partnerships",
    subtitle: "Practitioner-Led Workforce Development Alliances",
    description: "Team up with corporate L&D leaders, specialized domain instructors, and industry training bodies to co-deliver cutting-edge upskilling bootcamps across India and global hubs.",
    initiatives: [
      "Co-delivered 2-Day Executive AI Strategy Workshops",
      "Custom enterprise bootcamps aligned to client repository stacks",
      "Standardized skills rubrics and pre/post training competency benchmarking",
      "Digital credentialing and practitioner certificate issuance"
    ],
    ctaText: "Explore Training Alliances",
    ctaLink: "/corporate-training"
  }
];

const partnerBenefits = [
  {
    icon: ShieldCheck,
    title: "Institutional Credibility",
    desc: "Partner with a registered corporate entity (CIN: U85500UP2024PTC206390) maintaining strict statutory and contractual governance."
  },
  {
    icon: Users2,
    title: "Ecosystem Distribution",
    desc: "Gain visibility across our multi-platform digital ecosystem (talentxcel.in candidate portal and talentxcel.net employer pool)."
  },
  {
    icon: Cpu,
    title: "Practitioner Execution",
    desc: "Work directly with active technology architects and seasoned workforce strategists rather than detached sales intermediaries."
  },
  {
    icon: Award,
    title: "Measurable Impact",
    desc: "Every partnership is anchored in clear, agreed performance metrics—whether student placement rates, sprint velocity, or training ROI."
  }
];

const ecosystemEntities = [
  {
    name: "TalentXcel Corporate",
    domain: "talentxcel.co.in",
    role: "Parent Corporate Headquarters",
    description: "Enterprise software engineering, AI automation, IT staffing, corporate governance, and commercial contracts.",
    href: "https://talentxcel.co.in",
    isInternal: true,
    badge: "Corporate HQ"
  },
  {
    name: "TalentXcel Platform",
    domain: "talentxcel.in",
    role: "Candidate Career Portal",
    description: "AI-powered job matching, candidate discovery, resume evaluation, and direct employment applications.",
    href: "https://talentxcel.in",
    isInternal: false,
    badge: "Job Platform"
  },
  {
    name: "TalentXcel Employer Platform",
    domain: "talentxcel.net",
    role: "Recruiter & Employer Suite",
    description: "Direct talent pool search, applicant tracking, candidate shortlisting, and hiring pipeline management.",
    href: "https://talentxcel.net",
    isInternal: false,
    badge: "Employer Suite"
  },
  {
    name: "CHATR Enterprise",
    domain: "chatr.chat",
    role: "Secure Business Communications",
    description: "Zero-trust encrypted team messaging, customer interaction channels, and enterprise communication infrastructure.",
    href: "/chatr",
    isInternal: true,
    badge: "Enterprise AI"
  }
];

const Partnerships = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Strategic Partnerships & Alliances | TalentXcel Corporate</title>
        <meta
          name="description"
          content="Explore TalentXcel strategic partnerships: University MoUs, enterprise technology alliances, employer networks, and our integrated digital product ecosystem."
        />
        <meta
          name="keywords"
          content="TalentXcel partnerships, university MoU, campus recruitment alliance, technology partner, enterprise staffing alliance Noida"
        />
        <link rel="canonical" href="https://talentxcel.co.in/partnerships" />
      </Helmet>
      
      <Navbar />

      <main className="flex-1 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 5.2 Hero */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/20">
              <Handshake className="h-4 w-4" /> Strategic Alliances &amp; Ecosystem
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground leading-[1.15]">
              Building Partnerships That <br className="hidden sm:inline" />
              <span className="bg-gradient-primary bg-clip-text text-transparent">Create Lasting Value</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
              We welcome collaborations with institutions, employers and technology organisations to develop skills, solve business challenges and create meaningful opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-medium" asChild>
                <a href="#partnership-opportunities">Explore Partnership Opportunities <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#partnership-form">Submit Partnership Inquiry</a>
              </Button>
            </div>
          </div>

          {/* 5.1 Section A: Verified Partnerships Transparency */}
          <div className="mb-20">
            <Card className="p-8 lg:p-10 border-border/80 bg-muted/20 rounded-3xl">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-border/60">
                <div>
                  <Badge variant="outline" className="text-xs mb-2 bg-primary/5 text-primary border-primary/20">
                    Governance &amp; Publication Protocol
                  </Badge>
                  <h2 className="text-2xl font-bold text-foreground">Verified Institutional Partnerships</h2>
                </div>
                <div className="inline-flex items-center gap-2 text-xs text-muted-foreground bg-card px-3.5 py-1.5 rounded-full border border-border/60">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <span>Verified Bilateral Agreements Only</span>
                </div>
              </div>

              <div className="pt-6 space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  In alignment with our corporate governance policy, TalentXcel publishes names, institutional crests, and commercial details of partner universities, technology providers, and corporate clients exclusively upon mutual written consent and formal agreement execution.
                </p>
                <div className="p-4 bg-card rounded-2xl border border-dashed border-border flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <Info className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">
                      Active partner MoUs and enterprise agreements are currently documented under our internal corporate verification register.
                    </span>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#partnership-form">Initiate Bilateral MoU Discussion</a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* 5.1 & 5.2 Section B: Partnership Opportunities (4 Pillars) */}
          <div id="partnership-opportunities" className="mb-24 scroll-mt-28">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-foreground">
                Partnership Opportunities Across 4 Sectors
              </h2>
              <p className="text-muted-foreground text-base">
                We invite universities, technology companies, training organizations, and corporate employer networks to collaborate with TalentXcel.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {partnershipOpportunities.map((tier) => {
                const Icon = tier.icon;
                return (
                  <Card key={tier.id} className="p-8 border-border/70 hover:shadow-medium transition-all rounded-3xl bg-card flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                          <Icon className="h-6 w-6" />
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {tier.category}
                        </Badge>
                      </div>

                      <h3 className="text-2xl font-bold text-foreground mb-1">{tier.title}</h3>
                      <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-3">
                        {tier.subtitle}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {tier.description}
                      </p>

                      <div className="space-y-2.5 pt-4 border-t border-border/60 mb-6">
                        <div className="text-xs font-semibold uppercase tracking-wider text-foreground">
                          Collaboration Initiatives:
                        </div>
                        {tier.initiatives.map((item, iIdx) => (
                          <div key={iIdx} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full shadow-soft" asChild>
                      <Link to={tier.ctaLink}>
                        {tier.ctaText} <ArrowRight className="ml-1.5 h-4 w-4" />
                      </Link>
                    </Button>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Section C: Partner Benefits */}
          <div className="mb-24 bg-gradient-to-br from-card via-card to-muted/30 rounded-3xl p-8 sm:p-12 border border-border/70 shadow-soft">
            <div className="max-w-2xl mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-foreground">Why Partner with TalentXcel?</h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Core advantages delivered to our institutional, corporate, and technology partners.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnerBenefits.map((b, idx) => {
                const Icon = b.icon;
                return (
                  <div key={idx} className="p-6 bg-card rounded-2xl border border-border/70 shadow-soft">
                    <Icon className="h-6 w-6 text-primary mb-3" />
                    <h3 className="font-bold text-base text-foreground mb-2">{b.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Product Ecosystem Gateway */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-3 tracking-tight text-foreground">The TalentXcel Product Ecosystem</h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                A connected multi-domain network serving enterprise buyers, candidates, and engineering learners.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ecosystemEntities.map((entity, eIdx) => (
                <Card key={eIdx} className="p-6 border-border/60 hover:shadow-medium hover:-translate-y-1 transition-all flex flex-col justify-between rounded-2xl bg-card">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="text-[11px]">
                        {entity.badge}
                      </Badge>
                      <span className="text-[11px] font-mono text-muted-foreground">{entity.domain}</span>
                    </div>

                    <h3 className="font-bold text-lg text-foreground mb-1">{entity.name}</h3>
                    <div className="text-xs text-primary font-semibold mb-3">{entity.role}</div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                      {entity.description}
                    </p>
                  </div>

                  <div>
                    {entity.isInternal ? (
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link to={entity.href}>Explore Corporate Hub</Link>
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <a 
                          href={`${entity.href}/?utm_source=talentxcel_corp&utm_medium=referral&utm_campaign=partnerships_ecosystem`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center justify-center gap-1.5"
                        >
                          <span>Visit Platform</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* 5.3 Partnership Enquiry Form */}
          <div id="partnership-form" className="scroll-mt-28 mb-16">
            <LeadCaptureForm 
              initialCategory="university_partnership"
              title="Official Partnership & Institutional Inquiry"
              subtitle="Connect with our Strategic Alliances Directorate at our Noida corporate headquarters to explore university MoUs, technology integration, or employer alliances."
              buttonText="Submit Partnership Inquiry"
            />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Partnerships;