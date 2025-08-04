import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap, Target, ExternalLink } from "lucide-react";

const HeroSection = () => {
  const stats = [
    { number: "10K+", label: "Professionals Empowered" },
    { number: "500+", label: "Companies Served" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Zap className="h-4 w-4" />
                <span>Empowering Talent Since 2020</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Empowering Talent.
                </span>
                <br />
                <span className="text-foreground">Accelerating Growth.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                TalentXcel is the comprehensive career ecosystem that connects talent with opportunities, 
                providing innovative solutions for professionals, corporations, and institutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="hero" className="group">
                Explore Our Platform
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="corporate" asChild>
                <a
                  href="https://talentxcel.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <span>Visit TalentXcel.in</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-primary">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative rounded-2xl bg-gradient-hero p-8 shadow-large">
              <div className="grid grid-cols-2 gap-6">
                {/* Feature Cards */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                  <Users className="h-8 w-8 mb-3" />
                  <h3 className="font-semibold mb-2">Talent Matching</h3>
                  <p className="text-sm opacity-90">AI-powered matching between talent and opportunities</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                  <Target className="h-8 w-8 mb-3" />
                  <h3 className="font-semibold mb-2">Career Growth</h3>
                  <p className="text-sm opacity-90">Comprehensive tools for professional development</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white col-span-2">
                  <Zap className="h-8 w-8 mb-3" />
                  <h3 className="font-semibold mb-2">Enterprise Solutions</h3>
                  <p className="text-sm opacity-90">Scalable solutions for corporations and institutions to manage and develop talent effectively</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="mt-24 pt-12 border-t border-border">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Explore TalentXcel Ecosystem</h2>
            <p className="text-muted-foreground">Discover our comprehensive suite of platforms and services</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border rounded-xl p-6 hover:shadow-medium transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-semibold mb-2">TalentXcel.in</h3>
              <p className="text-sm text-muted-foreground mb-4">Main career platform with AI-powered tools, job matching, and professional development resources.</p>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="https://talentxcel.in" target="_blank" rel="noopener noreferrer">
                  Visit Platform
                </a>
              </Button>
            </div>

            <div className="bg-card border rounded-xl p-6 hover:shadow-medium transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-secondary transition-colors" />
              </div>
              <h3 className="font-semibold mb-2">TalentXcel.net</h3>
              <p className="text-sm text-muted-foreground mb-4">Enterprise services, API integrations, and corporate solutions for talent management.</p>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="https://talentxcel.net" target="_blank" rel="noopener noreferrer">
                  View Services
                </a>
              </Button>
            </div>

            <div className="bg-card border rounded-xl p-6 hover:shadow-medium transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Corporate Hub</h3>
              <p className="text-sm text-muted-foreground mb-4">Learn about our company, team, culture, and opportunities to join our mission.</p>
              <Button variant="outline" size="sm" className="w-full">
                Explore Company
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;