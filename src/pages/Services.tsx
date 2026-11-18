import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  GraduationCap,
  Server,
  Brain,
  Building2,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Briefcase,
  Layers,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Mail,
  School
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import modernWorkspace from "@/assets/modern-workspace.jpg";
import trainingSession from "@/assets/training-session.jpg";
import dataCenter from "@/assets/data-center.jpg";

const Services = () => {
  const threePillars = [
    {
      id: "staffing",
      category: "Workforce Solutions",
      title: "Staffing & Recruitment Solutions",
      description: "End-to-end talent acquisition and flexible staffing models evaluated by practicing software architects to ensure immediate delivery readiness.",
      image: modernWorkspace,
      imageAlt: "Professional technology recruitment and team collaboration",
      icon: Users,
      badgeColor: "bg-primary/10 text-primary border-primary/20",
      ctaText: "Hire Talent",
      ctaLink: "/staffing-solutions",
      capabilities: [
        "Specialized IT Staffing & Developer Augmentation",
        "Permanent Recruitment & Technical Sourcing",
        "Contract Staffing (Subject to operational readiness)",
        "Executive Search & Leadership Appointments",
        "Recruitment Process Outsourcing (RPO)",
        "Dedicated Managed Agile Engineering Pods"
      ],
      detailLink: "/services/staffing-recruitment"
    },
    {
      id: "training",
      category: "Workforce Learning & Academies",
      title: "Corporate Training & Education",
      description: "Live, practitioner-led corporate bootcamps, executive AI workshops, and university finishing school tracks designed around production technology stacks.",
      image: trainingSession,
      imageAlt: "Live corporate technical training and workshop session",
      icon: GraduationCap,
      badgeColor: "bg-amber-500/10 text-amber-600 border-amber-500/20",
      ctaText: "Train Your Workforce",
      ctaLink: "/corporate-training",
      capabilities: [
        "Corporate AI & Generative AI Enablement",
        "Applied LLM Engineering & Agentic Workflows",
        "Modern Full-Stack & Cloud-Native Engineering",
        "Data Engineering, Analytics & MLOps",
        "Next-Gen Quality Engineering & Automation",
        "University Employability & MoU Programmes"
      ],
      detailLink: "/services/training-education"
    },
    {
      id: "technology",
      category: "Enterprise Engineering & Consulting",
      title: "Technology & AI Solutions",
      description: "Custom software engineering, intelligent process automation, and cloud infrastructure consulting built with security, scalability, and measurable ROI.",
      image: dataCenter,
      imageAlt: "Enterprise cloud data center and software systems architecture",
      icon: Server,
      badgeColor: "bg-blue-500/10 text-blue-600 border-blue-500/20",
      ctaText: "Explore Technology Solutions",
      ctaLink: "/services/it-consulting-managed-services",
      capabilities: [
        "Enterprise Software & SaaS Engineering",
        "Custom Artificial Intelligence & ML Integration",
        "Intelligent Workflow Automation & RPA",
        "Cloud Migration & Infrastructure Modernization",
        "API Gateway & Microservices Architecture",
        "Strategic Technology & Architecture Consulting"
      ],
      detailLink: "/services/it-consulting-managed-services"
    }
  ];

  const commercialPathways = [
    {
      icon: Users,
      question: "Need to hire?",
      headline: "Staffing & Talent Acquisition",
      desc: "Source pre-vetted engineers, technical leads, and executive talent with a 90-day replacement warranty.",
      cta: "Staffing Enquiry",
      link: "/staffing-solutions",
      color: "primary"
    },
    {
      icon: GraduationCap,
      question: "Need to upskill employees?",
      headline: "Corporate Training & Bootcamps",
      desc: "Upskill technical cohorts and executive teams with 100% live, lab-driven curriculum and pilot workshops.",
      cta: "Training Enquiry",
      link: "/corporate-training",
      color: "amber"
    },
    {
      icon: Cpu,
      question: "Need technology support?",
      headline: "Enterprise Engineering & AI",
      desc: "Architect resilient software, automate core workflows, and modernize cloud infrastructure.",
      cta: "Technology Consultation",
      link: "/contact",
      color: "blue"
    },
    {
      icon: School,
      question: "Represent a university?",
      headline: "Institutional Partnerships & MoUs",
      desc: "Implement industry-aligned employability tracks, student AI academies, and campus placement pipelines.",
      cta: "Partnership Enquiry",
      link: "/university-partnerships",
      color: "emerald"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Integrated Solutions & Capabilities | TalentXcel Corporate</title>
        <meta
          name="description"
          content="TalentXcel brings together technology expertise, workforce solutions, and learning capabilities to help organisations solve business challenges and build future-ready teams."
        />
        <meta
          name="keywords"
          content="TalentXcel solutions, IT staffing, corporate training, generative ai training, enterprise software engineering, executive search, university partnerships Noida"
        />
        <link rel="canonical" href="https://talentxcel.co.in/services" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Integrated Solutions & Capabilities | TalentXcel" />
        <meta
          property="og:description"
          content="Solutions That Help Businesses Hire, Develop and Transform. TalentXcel brings together technology, workforce, and learning."
        />
        <meta property="og:url" content="https://talentxcel.co.in/services" />
        <meta property="og:type" content="website" />

        {/* Structured Data: Service Catalog */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "TalentXcel Integrated Technology & Talent Solutions",
            "provider": {
              "@type": "Organization",
              "name": "TalentXcel Services Private Limited",
              "url": "https://talentxcel.co.in"
            },
            "areaServed": ["India", "Global"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Commercial Corporate Solutions",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Staffing & Recruitment Solutions",
                    "url": "https://talentxcel.co.in/staffing-solutions"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Corporate Training & Education",
                    "url": "https://talentxcel.co.in/corporate-training"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Technology & AI Solutions",
                    "url": "https://talentxcel.co.in/services/it-consulting-managed-services"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <Navbar />
      
      <main className="flex-1 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 3.1 Hero Section — Harmonized Global Layout */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/20">
              <Building2 className="h-4 w-4" /> Integrated Technology &amp; Talent Solutions
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground leading-[1.15]">
              Solutions That Help Businesses <br className="hidden sm:inline" />
              <span className="bg-gradient-primary bg-clip-text text-transparent">Hire, Develop and Transform</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
              TalentXcel brings together technology expertise, workforce solutions, and learning capabilities to help organisations solve complex business challenges and build future-ready engineering teams.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="w-full sm:w-auto shadow-medium" asChild>
                <Link to="/contact">
                  Discuss Your Business Requirements <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-border/80" asChild>
                <a href="#pillars">Explore Our Capabilities</a>
              </Button>
            </div>
          </div>

          {/* 3.2 & 3.3 Three Primary Service Pillars */}
          <div id="pillars" className="mb-24 scroll-mt-28">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-foreground">
                Three Pillars of Enterprise Capability
              </h2>
              <p className="text-muted-foreground text-base">
                Discover our three interconnected disciplines designed to scale technical organizations sustainably.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {threePillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <Card 
                    key={pillar.id} 
                    className="overflow-hidden border-border/70 hover:shadow-large transition-all duration-300 flex flex-col justify-between rounded-3xl bg-card group"
                  >
                    <div>
                      {/* Image Header with 16:10 Consistent Ratio */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                        <img 
                          src={pillar.image} 
                          alt={pillar.imageAlt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-card/90 border border-border/60 text-foreground`}>
                            {pillar.category}
                          </span>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                          <div className="p-2.5 bg-primary/90 rounded-xl backdrop-blur-sm">
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Content Body */}
                      <div className="p-6 sm:p-8">
                        <h3 className="font-bold text-2xl mb-3 text-foreground tracking-tight group-hover:text-primary transition-colors">
                          {pillar.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                          {pillar.description}
                        </p>

                        <div className="space-y-2.5 mb-6 pt-4 border-t border-border/60">
                          <div className="text-xs font-semibold uppercase tracking-wider text-foreground">
                            Key Capabilities:
                          </div>
                          {pillar.capabilities.map((cap, idx) => (
                            <div key={idx} className="flex items-start gap-2.5">
                              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-xs text-muted-foreground leading-snug">{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div className="p-6 sm:p-8 pt-0 space-y-3">
                      <Button className="w-full shadow-soft" asChild>
                        <Link to={pillar.ctaLink}>
                          {pillar.ctaText} <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full text-xs text-muted-foreground hover:text-foreground" asChild>
                        <Link to={pillar.detailLink}>View Technical Details &rarr;</Link>
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* 3.4 Commercial Pathways: "What does your organisation need?" */}
          <section id="pathways" className="mb-24 scroll-mt-28 bg-gradient-to-br from-card via-card to-muted/30 rounded-3xl p-8 sm:p-12 lg:p-16 border border-border/70 shadow-medium">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
                <Briefcase className="h-3.5 w-3.5" /> Direct Commercial Pathways
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-foreground">
                What does your organisation need?
              </h2>
              <p className="text-muted-foreground text-base">
                Select your immediate corporate priority to connect with the appropriate practice directorate.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {commercialPathways.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx} 
                    className="p-6 rounded-2xl bg-card border border-border/80 hover:border-primary/50 hover:shadow-medium transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                        {item.question}
                      </div>
                      <div className="p-3 bg-primary/10 rounded-xl text-primary inline-block mb-4">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-bold text-lg text-foreground mb-2">{item.headline}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                        {item.desc}
                      </p>
                    </div>

                    <Button variant="outline" size="sm" className="w-full border-border/80 group" asChild>
                      <Link to={item.link}>
                        {item.cta} <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Enterprise Consultation Banner */}
          <section className="bg-gradient-hero text-white rounded-3xl p-10 lg:p-14 text-center shadow-large">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
                Partner with an Integrated Technology &amp; Talent Leader
              </h2>
              <p className="text-base text-white/90 mb-8 max-w-xl mx-auto leading-relaxed">
                Whether scaling an engineering team in Noida, executing an enterprise AI upskilling cohort, or modernizing legacy software systems, our leadership desk is ready to advise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">
                    <Mail className="h-4 w-4 mr-2" /> Request Enterprise Consultation
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10" asChild>
                  <Link to="/case-studies">Explore Solution Scenarios</Link>
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

export default Services;