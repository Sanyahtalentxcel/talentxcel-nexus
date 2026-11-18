import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Users, GraduationCap, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";
import aiTechnology from "@/assets/ai-technology.jpg";

const HeroSection = () => {
  const capabilities = [
    {
      icon: Code2,
      title: "Technology & AI Solutions",
      subtitle: "Custom SaaS, AI/ML systems & cloud infrastructure",
    },
    {
      icon: Users,
      title: "Talent & Workforce Solutions",
      subtitle: "Specialized IT staffing, contract hires & RPO",
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      subtitle: "Enterprise training, upskilling & university pipelines",
    },
    {
      icon: Globe2,
      title: "Cross-Market Delivery",
      subtitle: "Focused engagements across India, Europe & Middle East",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(214,211,209,0.08),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
              <span>Integrated Technology & Talent Solutions</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
              Technology That Moves Business Forward.{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Talent That Makes It Possible.
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
              TalentXcel brings together technology solutions, workforce expertise, and talent development to help organizations build, scale, and transform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" variant="default" asChild>
                <Link to="/contact" className="flex items-center space-x-2">
                  <span>Discuss an Enterprise Solution</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services" className="flex items-center space-x-2">
                  <span>Explore Our Capabilities</span>
                </Link>
              </Button>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-5 pt-2 text-sm text-muted-foreground">
              <Link to="/team" className="hover:text-primary transition-colors font-medium">
                Leadership & Team →
              </Link>
              <Link to="/case-studies" className="hover:text-primary transition-colors font-medium">
                Case Studies →
              </Link>
              <Link to="/partnerships" className="hover:text-primary transition-colors font-medium">
                Partnerships →
              </Link>
              <Link to="/careers" className="hover:text-primary transition-colors font-medium">
                Careers →
              </Link>
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-large border border-border/50">
              <img 
                src={aiTechnology} 
                alt="TalentXcel Technology and Talent Ecosystem"
                className="w-full h-80 lg:h-96 object-cover"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-card/90 backdrop-blur-md border border-border/60 rounded-2xl p-4 shadow-glass">
                  <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-1">
                    Integrated Corporate Ecosystem
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    Software Engineering • AI Systems • Enterprise Staffing • Corporate Academies
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillar Capability Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-12 lg:pt-16">
          {capabilities.map((c, index) => {
            const Icon = c.icon;
            return (
              <div 
                key={index}
                className="bg-card/60 backdrop-blur-sm border border-border/60 rounded-2xl p-5 hover:shadow-soft transition-all"
              >
                <div className="p-2.5 bg-primary/10 rounded-xl w-fit mb-3">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="font-bold text-foreground text-base mb-1">
                  {c.title}
                </div>
                <div className="text-xs text-muted-foreground leading-relaxed">
                  {c.subtitle}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
