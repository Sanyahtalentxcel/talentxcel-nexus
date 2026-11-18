import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Lightbulb, Award, Coffee, Globe, Shield, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import modernWorkspace from "@/assets/modern-workspace.jpg";

const Culture = () => {
  const culturalPillars = [
    {
      icon: Lightbulb,
      title: "Practitioner-Led Innovation",
      description: "We encourage engineers and talent specialists to experiment with new frameworks, tools, and methodologies that generate tangible business impact.",
    },
    {
      icon: Shield,
      title: "Accountability & Transparency",
      description: "Open communication, honest timelines, and peer accountability form the bedrock of how we operate with colleagues and clients.",
    },
    {
      icon: Users,
      title: "Empathetic Collaboration",
      description: "Complex software engineering and workforce challenges require diverse perspectives, active listening, and collective problem-solving.",
    },
    {
      icon: Award,
      title: "Continuous Learning",
      description: "In an AI-accelerated economy, adaptability is everything. We support continuous skill development, certifications, and technical mastery.",
    },
    {
      icon: Coffee,
      title: "Sustainable Performance",
      description: "We value outcomes over presenteeism, advocating for disciplined, focused work while respecting personal well-being.",
    },
    {
      icon: Globe,
      title: "Inclusion & Equal Opportunity",
      description: "A merit-based, welcoming environment where talent from all backgrounds is respected, mentored, and empowered to excel.",
    },
  ];

  const workPrinciples = [
    {
      title: "Outcome-Driven Work",
      description: "We judge contributions by quality of code, accuracy of talent matching, and client satisfaction—not arbitrary hours.",
    },
    {
      title: "Cross-Functional Synergy",
      description: "Software developers, AI engineers, and recruitment consultants collaborate closely, ensuring technological insights directly enrich our talent solutions.",
    },
    {
      title: "Radical Candor & Feedback",
      description: "Regular, constructive feedback loops help every team member understand their trajectory, strengths, and areas for growth.",
    },
    {
      title: "Ethical Stewardship",
      description: "Strict respect for candidate privacy, corporate confidentiality, and ethical recruitment practices across every engagement.",
    },
  ];

  const developmentOfferings = [
    "Flexible, outcome-oriented work environment",
    "Continuous learning support for technical certifications",
    "Mentorship from experienced enterprise software architects",
    "Hands-on exposure to production AI and cloud architectures",
    "Structured career pathways across technology and workforce practices",
    "Collaborative, modern workspace equipped with top engineering tools",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Culture & Principles | Life at TalentXcel</title>
        <meta
          name="description"
          content="Explore the culture and working principles at TalentXcel: Practitioner-led innovation, accountability, continuous learning, and inclusive collaboration."
        />
        <meta
          name="keywords"
          content="TalentXcel culture, life at TalentXcel, engineering principles, workplace values, talent development, tech culture Noida"
        />
        <link rel="canonical" href="https://talentxcel.co.in/culture" />
      </Helmet>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30 py-10 lg:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="h-4 w-4" /> Work Principles & Values
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-4">
                Culture Built on <span className="bg-gradient-primary bg-clip-text text-transparent">Excellence & Empathy</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                At TalentXcel, we bring together passionate software engineers, AI practitioners, and workforce strategists. 
                Our culture is grounded in transparency, continuous learning, and measurable execution.
              </p>
            </div>
          </div>
        </section>

        {/* Culture Pillars */}
        <section className="py-10 lg:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-2 tracking-tight">Our Cultural Pillars</h2>
              <p className="text-muted-foreground">
                The standards that define how we build products, serve enterprise clients, and treat one another.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {culturalPillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <Card key={index} className="p-6 border-border/60 hover:shadow-medium transition-all">
                    <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{pillar.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Operating Principles */}
        <section className="py-10 lg:py-14 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-3 tracking-tight">How We Work</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We reject corporate bureaucracy and vanity metrics in favor of clear goals, high individual autonomy, and rigorous technical standards.
                </p>

                <div className="space-y-4">
                  {workPrinciples.map((item, index) => (
                    <div key={index} className="p-4 bg-card rounded-xl border border-border/60">
                      <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-3xl overflow-hidden shadow-large border border-border/60">
                  <img
                    src={modernWorkspace}
                    alt="TalentXcel Collaborative Workspace"
                    className="w-full h-80 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Offerings */}
        <section className="py-10 lg:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-6">
              <h2 className="text-3xl font-bold mb-2 tracking-tight">Growth & Development</h2>
              <p className="text-muted-foreground">
                We invest in our people so they can tackle challenging enterprise problems with confidence.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {developmentOfferings.map((offering, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-muted/20 border border-border/50 rounded-xl">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/90">{offering}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 lg:py-14 bg-gradient-hero text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-3 tracking-tight">Want to Build With Us?</h2>
            <p className="text-lg mb-6 opacity-90 max-w-xl mx-auto">
              Explore open positions, internship programs, and opportunities to shape the future of technology and talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/careers">
                  View Career Opportunities <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10" asChild>
                <Link to="/about">About TalentXcel</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Culture;
