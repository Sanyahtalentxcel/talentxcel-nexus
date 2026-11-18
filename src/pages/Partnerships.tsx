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
  Sparkles
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const partnershipTiers = [
  {
    icon: GraduationCap,
    title: "University & Academic Alliances",
    subtitle: "Bridging Higher Education & Production Engineering",
    description: "We partner with leading universities, engineering institutes, and technical colleges across India to provide students with real-world project exposure, hands-on AI and cloud curricula, and verified placement pipelines.",
    initiatives: [
      "Curriculum alignment with modern React, TypeScript, Python & Cloud stacks",
      "Live-project internships with direct client code reviews",
      "Campus recruitment drives and pre-placement hackathons",
      "Faculty development programs and industry guest lectures"
    ],
    ctaText: "Explore University MoU",
    ctaLink: "/contact?tab=training"
  },
  {
    icon: Cpu,
    title: "Enterprise Technology Alliances",
    subtitle: "Accelerating Digital & Cloud Modernization",
    description: "Collaborating with enterprise technology leaders and cloud providers to design and deploy scalable solutions across Energy, BFSI, Healthcare, and SaaS sectors.",
    initiatives: [
      "Joint solution architecture and enterprise POC execution",
      "Cloud migration frameworks (AWS, Azure, Multi-cloud)",
      "Co-developed AI automation microservices and workflows",
      "Enterprise SLA-backed implementation and managed support"
    ],
    ctaText: "Discuss Technology Alliance",
    ctaLink: "/contact?tab=enterprise-tech"
  },
  {
    icon: Users2,
    title: "Workforce & Recruitment Alliances",
    subtitle: "Strategic Staffing & Channel Distribution",
    description: "Teaming up with specialized sourcing networks, professional bodies, and enterprise procurement departments to streamline contingent staffing and executive search.",
    initiatives: [
      "Master Vendor and Primary Staffing Supplier agreements",
      "Recruitment Process Outsourcing (RPO) SLA partnerships",
      "Specialized diversity hiring and cross-border talent relocation",
      "Rigorous technical pre-screening and skill verification"
    ],
    ctaText: "Explore Staffing Partnership",
    ctaLink: "/contact?tab=staffing"
  }
];

const ecosystemEntities = [
  {
    name: "TalentXcel Corporate",
    domain: "talentxcel.co.in",
    role: "Parent Corporate Identity",
    description: "Enterprise software engineering, AI automation, IT staffing, corporate governance, and investor relations.",
    href: "https://talentxcel.co.in",
    isInternal: true,
    badge: "Current Site"
  },
  {
    name: "TalentXcel Platform",
    domain: "talentxcel.in",
    role: "Career & Candidate Marketplace",
    description: "AI-powered job matching, candidate discovery, reverse hiring, and direct talent acquisition tools.",
    href: "https://talentxcel.in",
    isInternal: false,
    badge: "Job Platform"
  },
  {
    name: "TalentXcel Learning",
    domain: "talentxcel.net",
    role: "Skill & Education Ecosystem",
    description: "Technical upskilling tracks, mock interviews, resume optimization tools, and professional mentorship.",
    href: "https://talentxcel.net",
    isInternal: false,
    badge: "Learning Hub"
  },
  {
    name: "CHATR Technology",
    domain: "chatr.chat",
    role: "Conversational AI & Messaging Layer",
    description: "Real-time communication, voice AI capabilities, assistant integration, and digital transaction flows.",
    href: "https://chatr.chat",
    isInternal: false,
    badge: "AI Product"
  }
];

const Partnerships = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Strategic Partnerships &amp; Ecosystem | TalentXcel</title>
        <meta
          name="description"
          content="Explore TalentXcel strategic partnerships: University MoUs, enterprise technology alliances, workforce networks, and our integrated digital product ecosystem."
        />
        <meta
          name="keywords"
          content="TalentXcel partnerships, university MoU, campus recruitment alliance, technology partner, enterprise staffing alliance, CHATR"
        />
        <link rel="canonical" href="https://talentxcel.co.in/partnerships" />
      </Helmet>
      
      <Navbar />

      <main className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              <Handshake className="h-4 w-4" /> Strategic Alliances &amp; Ecosystem
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Collaborating to Build <span className="bg-gradient-primary bg-clip-text text-transparent">Long-Term Value</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe meaningful corporate impact is born from enduring partnerships. TalentXcel collaborates with academic institutions, enterprise technology providers, and recruitment leaders to drive mutual growth.
            </p>
          </div>

          {/* Three Partnership Pillars */}
          <div className="space-y-10 mb-20">
            {partnershipTiers.map((tier, idx) => {
              const Icon = tier.icon;
              return (
                <Card key={idx} className="p-8 lg:p-10 border-border/80 hover:shadow-medium transition-all">
                  <div className="grid lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-5 space-y-3">
                      <div className="p-3 bg-primary/10 rounded-2xl w-fit text-primary mb-2">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">{tier.title}</h2>
                      <p className="text-xs uppercase tracking-wider text-primary font-semibold">
                        {tier.subtitle}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed pt-2">
                        {tier.description}
                      </p>
                      <div className="pt-3">
                        <Button asChild>
                          <Link to={tier.ctaLink}>
                            {tier.ctaText} <ArrowRight className="ml-1.5 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>

                    <div className="lg:col-span-7 bg-muted/20 p-6 lg:p-8 rounded-2xl border border-border/50 space-y-3">
                      <h3 className="text-xs uppercase tracking-wider text-foreground font-bold mb-3 flex items-center gap-1.5">
                        <Sparkles className="h-4 w-4 text-primary" /> Key Alliance Initiatives
                      </h3>
                      <div className="space-y-3">
                        {tier.initiatives.map((item, iIdx) => (
                          <div key={iIdx} className="flex items-start gap-3 text-sm text-foreground/90">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Product Ecosystem Architecture */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-3 tracking-tight">The TalentXcel Product Ecosystem</h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                An integrated matrix of digital platforms, specialized applications, and communication layers serving enterprise buyers, candidates, and learners.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ecosystemEntities.map((entity, eIdx) => (
                <Card key={eIdx} className="p-6 border-border/60 hover:shadow-medium hover:-translate-y-1 transition-all flex flex-col justify-between">
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
                        <Link to="/">Current Corporate Home</Link>
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <a href={entity.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5">
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

          {/* Partnership CTA */}
          <section className="bg-gradient-hero text-white rounded-3xl p-10 lg:p-14 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 tracking-tight">Become an Official Institutional Partner</h2>
              <p className="text-base text-white/90 mb-8 max-w-xl mx-auto leading-relaxed">
                Connect with our strategic partnerships team to explore university MoUs, technology integration, or enterprise delivery agreements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">Inquire About Strategic Alliances</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10" asChild>
                  <Link to="/case-studies">Explore Case Studies</Link>
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

export default Partnerships;
