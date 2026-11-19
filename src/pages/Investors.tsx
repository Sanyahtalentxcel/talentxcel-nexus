import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  Building2, 
  Globe, 
  Target, 
  Award, 
  ArrowUpRight,
  Brain,
  Shield,
  Zap,
  ArrowRight
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import businessStrategy from "@/assets/business-strategy.jpg";
import financialGrowth from "@/assets/financial-growth.jpg";
import recruitmentProcess from "@/assets/recruitment-process.jpg";
import digitalMarketing from "@/assets/digital-marketing.jpg";
import customerService from "@/assets/customer-service.jpg";

const Investors = () => {
  const strategicPillars = [
    { metric: "3", label: "Integrated Business Pillars", growth: "Tech, Talent & Learning", icon: Brain },
    { metric: "4+", label: "Focus Industry Sectors", growth: "Energy, BFSI, Tech, Healthcare", icon: Building2 },
    { metric: "3", label: "Target Operational Regions", growth: "India, Europe, Middle East", icon: Globe },
    { metric: "2024", label: "Founded & Incorporated", growth: "Noida Headquarters", icon: Shield }
  ];

  const competitiveAdvantages = [
    {
      icon: Brain,
      title: "Dual Engineering & Workforce Stack",
      description: "Unlike traditional staffing agencies or software-only consultancies, TalentXcel combines production software engineering with an in-house recruitment and talent academy engine."
    },
    {
      icon: Globe,
      title: "Multi-Platform Ecosystem",
      description: "Synergistic relationship between corporate enterprise delivery (talentxcel.co.in), recruitment platform (talentxcel.in), learning hub (talentxcel.net), and AI communications (chatr.chat)."
    },
    {
      icon: TrendingUp,
      title: "Practitioner-Led Execution",
      description: "Disciplined operational management focusing on SLA delivery, client retention, and capital-efficient expansion across key metropolitan centers."
    },
    {
      icon: Shield,
      title: "Rigorous Corporate Governance",
      description: "Commitment to statutory compliance, transparent reporting, and institutional data protection standards under Indian and international regulations."
    }
  ];

  const timeline = [
    {
      period: "Jul 2024",
      title: "Corporate Foundation",
      description: "Incorporated with a mandate to bridge enterprise technology services and modern workforce solutions."
    },
    {
      period: "Late 2024",
      title: "Practice & Platform Alpha",
      description: "Validated recruitment and enterprise technology practices across metropolitan tech corridors."
    },
    {
      period: "2025",
      title: "Operational Acceleration",
      description: "Formalized three distinct business pillars, launched client engineering tracks, and expanded campus academies."
    },
    {
      period: "2026 & Beyond",
      title: "Regional & Product Expansion",
      description: "Deepening enterprise client relationships across India, Europe, and the Middle East while scaling proprietary AI products."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <Helmet>
          <title>Investor Relations & Corporate Strategy | TalentXcel</title>
          <meta
            name="description"
            content="TalentXcel Investor Relations: Explore our corporate strategy, operating fundamentals, market opportunity, and governance in integrated technology and talent solutions."
          />
          <meta
            name="keywords"
            content="TalentXcel investors, corporate growth strategy, technology solutions investment, HR tech India, enterprise workforce market, Noida"
          />
          <link rel="canonical" href="https://talentxcel.co.in/investors" />
          
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
                  "name": "Investor Relations",
                  "item": "https://talentxcel.co.in/investors"
                }
              ]
            })}
          </script>
          
          <meta property="og:title" content="Investor Relations & Corporate Strategy | TalentXcel" />
          <meta
            property="og:description"
            content="Capital efficiency, dual engineering & workforce capability, and multi-market expansion."
          />
          <meta property="og:url" content="https://talentxcel.co.in/investors" />
          <meta property="og:type" content="website" />
        </Helmet>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30 py-10 lg:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                <TrendingUp className="h-4 w-4" /> Corporate Strategy & Investment
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-4">
                Investing in the Convergence of <span className="bg-gradient-primary bg-clip-text text-transparent">Technology & Talent</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                As artificial intelligence and distributed engineering reshape global business, organizations require both advanced technical infrastructure and the skilled human capital to operate it. TalentXcel is built to capture this convergence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Connect with Investor Relations <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/about">About TalentXcel</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Pillars Grid */}
        <section className="py-10 lg:py-14 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-2 tracking-tight">Strategic Dimensions</h2>
              <p className="text-muted-foreground">
                Fundamental operational pillars positioning TalentXcel for durable, long-term enterprise value creation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {strategicPillars.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="p-6 text-center hover:shadow-medium transition-all duration-300 border-border/60">
                    <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-primary mb-1">{item.metric}</div>
                    <div className="text-foreground font-semibold text-sm mb-1">{item.label}</div>
                    <Badge variant="secondary" className="text-xs">{item.growth}</Badge>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Competitive Edge */}
        <section className="py-10 lg:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-2 tracking-tight">Our Competitive Advantage</h2>
              <p className="text-muted-foreground">
                Core differentiators driving client retention and operational leverage across our service verticals.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {competitiveAdvantages.map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <Card key={index} className="p-8 hover:shadow-medium transition-all duration-300 border-border/60">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">{advantage.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{advantage.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-10 lg:py-14 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-2 tracking-tight">Corporate Progression</h2>
              <p className="text-muted-foreground">
                Methodical expansion from foundation to multi-market solutions delivery.
              </p>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <Card key={index} className="p-6 border-border/60 hover:shadow-soft transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <span className="text-sm font-bold text-primary uppercase tracking-wider">
                      {item.period}
                    </span>
                    <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Visual Showcase */}
        <section className="py-10 lg:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
              <div className="rounded-3xl overflow-hidden shadow-large border border-border/60">
                <img 
                  src={businessStrategy} 
                  alt="Strategic Business Planning"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-large border border-border/60">
                <img 
                  src={financialGrowth} 
                  alt="Corporate Value Creation"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Investor Contact */}
        <section className="py-10 lg:py-14 bg-gradient-hero text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-3 tracking-tight">Connect with Investor Relations</h2>
            <p className="text-lg mb-6 opacity-90 max-w-xl mx-auto">
              For corporate governance inquiries, institutional briefings, or strategic partnership discussions, reach out to our corporate office.
            </p>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 max-w-xl mx-auto text-left border border-white/20">
              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-white/70 text-xs uppercase tracking-wider mb-1">Corporate Email</div>
                  <a href="mailto:investors@talentxcel.co.in?cc=sanobar.jahan@talentxcel.co.in" className="font-semibold text-white hover:underline block">
                    investors@talentxcel.co.in / contact@talentxcel.co.in
                  </a>
                </div>
                <div>
                  <div className="text-white/70 text-xs uppercase tracking-wider mb-1">Direct Telephone</div>
                  <div className="font-semibold text-white">+91 9717181609</div>
                </div>
                <div>
                  <div className="text-white/70 text-xs uppercase tracking-wider mb-1">Corporate Headquarters</div>
                  <a 
                    href="https://share.google/9XwBijGdqZx4s5NN1" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-semibold text-white hover:underline block"
                  >
                    Office 1917, 19th Floor, E-Square Building, Sector 96, Noida, UP 201301, India (Google Maps ↗)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Investors;
