import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap, Target, ExternalLink } from "lucide-react";

const HeroSection = () => {
  const stats = [
    { number: "5K+", label: "Active Users" },
    { number: "100+", label: "Enterprise Clients" },
    { number: "95%", label: "Customer Retention" },
    { number: "$2.1B", label: "India TAM" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      {/* Apple-style Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(214,211,209,0.1),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Zap className="h-4 w-4" />
                <span>Founded July 2024</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  TalentXcel Home Plus
                </span>
                <br />
                <span className="text-foreground">Invest in the Future of Talent</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Building the world's most comprehensive career ecosystem. AI-first platform reimagining 
                discovery, engagement, and hiring in India's fast-evolving talent economy.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" variant="platform" className="group" asChild>
                <a
                  href="https://talentxcel.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <span>Launch Platform</span>
                  <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="services" asChild>
                <a
                  href="https://talentxcel.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <span>Explore Services</span>
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
            <div className="relative rounded-3xl bg-card/60 backdrop-blur-xl border border-border/50 p-10 shadow-glass">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Feature Cards */}
                <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-border/30 hover:shadow-medium transition-all duration-300">
                  <Users className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="font-semibold mb-3 text-foreground">Talent Matching</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">AI-powered matching between talent and opportunities</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-border/30 hover:shadow-medium transition-all duration-300">
                  <Target className="h-10 w-10 mb-4 text-accent" />
                  <h3 className="font-semibold mb-3 text-foreground">Career Growth</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Comprehensive tools for professional development</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-border/30 hover:shadow-medium transition-all duration-300 md:col-span-2">
                  <Zap className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="font-semibold mb-3 text-foreground">Enterprise Solutions</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Scalable solutions for corporations and institutions to manage and develop talent effectively</p>
                </div>
              </div>
            </div>
            
            {/* Apple-style floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="mt-24 pt-12 border-t border-border">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Explore TalentXcel Home Plus Ecosystem</h2>
            <p className="text-muted-foreground">Discover our comprehensive AI-first career platform and enterprise solutions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:shadow-glass hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-primary/10 rounded-2xl">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-bold mb-3 text-lg">TalentXcel.in</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">Main career platform with AI-powered tools, job matching, and professional development resources.</p>
              <Button variant="platform" size="sm" className="w-full" asChild>
                <a href="https://talentxcel.in" target="_blank" rel="noopener noreferrer">
                  Launch Platform
                </a>
              </Button>
            </div>

            <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:shadow-glass hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-accent/10 rounded-2xl">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-bold mb-3 text-lg">TalentXcel.net</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">Enterprise services, API integrations, and corporate solutions for talent management.</p>
              <Button variant="services" size="sm" className="w-full" asChild>
                <a href="https://talentxcel.net" target="_blank" rel="noopener noreferrer">
                  Explore Services
                </a>
              </Button>
            </div>

            <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:shadow-glass hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-muted/50 rounded-2xl">
                  <Zap className="h-8 w-8 text-foreground" />
                </div>
              </div>
              <h3 className="font-bold mb-3 text-lg">Corporate Hub</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">Learn about our company, team, culture, and opportunities to join our mission.</p>
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