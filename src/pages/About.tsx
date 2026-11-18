import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, Globe, Target, Users, Award, Heart, Shield, Lightbulb, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import corporateOffice from "@/assets/corporate-office.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import globalNetwork from "@/assets/global-network.jpg";
import modernWorkspace from "@/assets/modern-workspace.jpg";
import conferenceRoom from "@/assets/conference-room.jpg";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation & Agility",
      description: "Continuously evolving our solutions to meet the demands of modern technology and engineering ecosystems."
    },
    {
      icon: Heart,
      title: "Integrity & Transparency",
      description: "Building lasting trust through honest communication, ethical staffing, and reliable enterprise delivery."
    },
    {
      icon: Award,
      title: "Engineering Excellence",
      description: "Striving for high technical standards across software delivery, AI pipelines, and talent curation."
    },
    {
      icon: Shield,
      title: "Security & Governance",
      description: "Committed to robust data protection, regulatory compliance, and responsible technology stewardship."
    },
    {
      icon: Users,
      title: "Collaborative Partnerships",
      description: "Fostering close, synergistic relationships with clients, institutions, and candidate communities."
    },
    {
      icon: Globe,
      title: "Ecosystem Synergy",
      description: "Seamlessly connecting enterprise engineering needs with dynamic workforce and learning opportunities."
    }
  ];

  const timeline = [
    {
      year: "2024",
      title: "Corporate Foundation",
      description: "TalentXcel was established in July 2024 with a vision to integrate enterprise technology engineering and specialized talent solutions under one corporate roof."
    },
    {
      year: "Late 2024",
      title: "Platform & Practice Rollout",
      description: "Launched beta platforms, initialized IT staffing practices, and introduced specialized recruitment services across major metropolitan hubs."
    },
    {
      year: "2025",
      title: "Operational Expansion",
      description: "Expanded enterprise technology capabilities, launched live-project internship tracks, and deepened industry delivery across key sectors."
    },
    {
      year: "2026 & Beyond",
      title: "Global Ecosystem Integration",
      description: "Deepening cross-border delivery across India, Europe, and the Middle East while scaling AI-driven communication and workforce tools."
    }
  ];

  const snapshotMetrics = [
    { number: "3", label: "Integrated Pillars", note: "Technology, Talent & Learning" },
    { number: "4+", label: "Focus Sectors", note: "Energy, BFSI, Tech, Healthcare" },
    { number: "100%", label: "Delivery Focus", note: "SLA-Driven Outcomes" },
    { number: "2024", label: "Founded", note: "Noida Headquarters" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <Helmet>
          <title>About Us | TalentXcel — Integrated Solutions</title>
          <meta
            name="description"
            content="Learn about TalentXcel: Our corporate story, mission, and vision bringing together enterprise technology solutions, workforce expertise, and talent development."
          />
          <meta
            name="keywords"
            content="About TalentXcel, corporate identity, technology solutions company, IT staffing company, Noida headquarters, talent ecosystem"
          />
          <link rel="canonical" href="https://talentxcel.co.in/about" />
          
          {/* Open Graph */}
          <meta property="og:title" content="About Us | TalentXcel — Integrated Solutions" />
          <meta
            property="og:description"
            content="Blending enterprise software engineering, AI automation, and workforce solutions for modern organizations."
          />
          <meta property="og:url" content="https://talentxcel.co.in/about" />
          <meta property="og:type" content="website" />
          
          {/* Twitter */}
          <meta name="twitter:title" content="About Us | TalentXcel" />
          <meta
            name="twitter:description"
            content="Technology That Moves Business Forward. Talent That Makes It Possible."
          />
          
          {/* Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "mainEntity": {
                "@type": "Organization",
                "name": "TalentXcel",
                "foundingDate": "2024-07",
                "description": "TalentXcel brings together technology solutions, workforce expertise, and talent development to help organizations build, scale, and transform.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Office 1917, 19th Floor, E-Square Building, Sector 96",
                  "addressLocality": "Noida",
                  "addressRegion": "Uttar Pradesh",
                  "postalCode": "201301",
                  "addressCountry": "India"
                },
                "hasMap": "https://share.google/9XwBijGdqZx4s5NN1",
                "sameAs": [
                  "https://in.linkedin.com/company/talentxcel-services-private-limited",
                  "https://talentxcel.in",
                  "https://talentxcel.net",
                  "https://chatr.chat"
                ],
                "knowsAbout": [
                  "Enterprise Software Development",
                  "Artificial Intelligence",
                  "IT Staffing & Recruitment",
                  "Workforce Management",
                  "Technical Upskilling"
                ]
              }
            })}
          </script>
        </Helmet>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(214,211,209,0.1),transparent_50%)]" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                  <Building2 className="h-4 w-4" />
                  <span>Founded July 2024</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
                  About <span className="bg-gradient-primary bg-clip-text text-transparent">TalentXcel</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We blend enterprise technology solutions and workforce expertise to build a comprehensive ecosystem for businesses and professionals alike.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">
                      Connect with Our Team <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/team">Meet Founder &amp; Leadership</Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-large border border-border/60">
                  <img 
                    src={corporateOffice} 
                    alt="TalentXcel Corporate Headquarters"
                    className="w-full h-96 object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h2 className="text-xl font-semibold mb-1">Noida Headquarters</h2>
                    <a 
                      href="https://share.google/9XwBijGdqZx4s5NN1" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm opacity-90 hover:underline hover:text-white transition-colors inline-block"
                    >
                      Office 1917, 19th Floor, E-Square Building, Sector 96, Noida, Uttar Pradesh, India ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Snapshot */}
        <section className="py-10 lg:py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-2 tracking-tight">Company Snapshot</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Core dimensions reflecting our institutional focus, capabilities, and geographic delivery.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {snapshotMetrics.map((stat, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-medium transition-all duration-300">
                  <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-foreground font-semibold mb-1 text-base">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.note}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-10 lg:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Card className="p-8 hover:shadow-medium transition-shadow duration-300 border-border/60">
                  <Target className="h-10 w-10 text-primary mb-4" />
                  <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    To be a trusted global leader in integrated technology and talent solutions, enabling organizations 
                    to accelerate their engineering capabilities while cultivating resilient, highly skilled workforce pipelines.
                  </p>
                </Card>
                
                <Card className="p-8 hover:shadow-medium transition-shadow duration-300 border-border/60">
                  <Zap className="h-10 w-10 text-accent mb-4" />
                  <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    To deliver scalable enterprise software, intelligent automation, and specialized workforce services 
                    that bridge the divide between technology development, human capability, and career readiness.
                  </p>
                </Card>
              </div>
              
              <div className="relative">
                <img 
                  src={teamCollaboration} 
                  alt="TalentXcel Team Collaboration"
                  className="w-full h-96 object-cover rounded-3xl shadow-large border border-border/60"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Workplace & Innovation Spaces */}
        <section className="py-10 lg:py-12 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="relative group rounded-3xl overflow-hidden shadow-glass border border-border/60">
                  <img 
                    src={modernWorkspace} 
                    alt="TalentXcel Modern Workspace"
                    className="w-full h-80 lg:h-96 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-semibold mb-1">Collaborative Engineering Culture</h3>
                    <p className="text-sm opacity-90">Where problem-solving meets modern technology architectures</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="relative group rounded-3xl overflow-hidden shadow-glass border border-border/60">
                  <img 
                    src={conferenceRoom} 
                    alt="Executive Strategy Space"
                    className="w-full h-36 lg:h-44 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <h4 className="font-semibold text-sm">Strategic Governance</h4>
                  </div>
                </div>
                
                <div className="relative group rounded-3xl overflow-hidden shadow-glass border border-border/60">
                  <img 
                    src={teamCollaboration} 
                    alt="Engineering Team Dynamics"
                    className="w-full h-36 lg:h-44 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <h4 className="font-semibold text-sm">Cross-Functional Delivery</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-10 lg:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-2 tracking-tight">Our Core Operating Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Principles that guide our daily client engagements, technology choices, and workforce practices.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-medium transition-all duration-300 border-border/60">
                  <value.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Geographic Delivery */}
        <section className="py-10 lg:py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src={globalNetwork} 
                  alt="TalentXcel Geographic Network"
                  className="w-full h-80 object-cover rounded-3xl shadow-large border border-border/60"
                  loading="lazy"
                />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">Cross-Market Engagement</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Headquartered in Noida, India, TalentXcel supports enterprises and institutions with cross-market technology delivery and specialized workforce sourcing.
                </p>
                
                <div className="grid grid-cols-3 gap-4 pt-2">
                  {[
                    { region: "India", desc: "Core Engineering & Staffing Hub" },
                    { region: "Europe", desc: "Expanding Solutions Engagements" },
                    { region: "Middle East", desc: "Enterprise & Tech Partnerships" }
                  ].map((region, index) => (
                    <div key={index} className="p-4 bg-card rounded-xl border border-border/60 text-center">
                      <div className="text-base font-bold text-primary mb-1">{region.region}</div>
                      <div className="text-xs text-muted-foreground">{region.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Journey */}
        <section className="py-10 lg:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-2 tracking-tight">Corporate Milestones</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Key progression points establishing our integrated technology and workforce capabilities.
              </p>
            </div>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <Card key={index} className="p-6 border-border/60 hover:shadow-soft transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <span className="text-sm font-bold text-primary uppercase tracking-wider">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 lg:py-14 bg-gradient-hero text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-3 tracking-tight">Explore Enterprise Solutions with TalentXcel</h2>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Whether you require specialized IT staffing, custom software engineering, or corporate upskilling programs, our teams are ready to collaborate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Discuss a Solution</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10" asChild>
                <Link to="/services">View Capabilities</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
