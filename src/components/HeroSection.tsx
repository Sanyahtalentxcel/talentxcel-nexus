
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap, Target, ExternalLink, Play } from "lucide-react";
import { Link } from "react-router-dom";
import aiTechnology from "@/assets/ai-technology.jpg";

const HeroSection = () => {
  const stats = [
    { number: "5K+", label: "Active Users", change: "+12%" },
    { number: "100+", label: "Enterprise Clients", change: "+25%" },
    { number: "95%", label: "Customer Retention", change: "+3%" },
    { number: "$2.1B", label: "India TAM", change: "+18%" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(214,211,209,0.08),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium">
              <Zap className="h-3 w-3" />
              <span>Founded July 2024</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Talentxcel
              </span>
              <br />
              <span className="text-foreground">Future of Talent</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg">
              AI-first platform reimagining discovery, engagement, and hiring in India's evolving talent economy.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" variant="platform" className="group" asChild>
                <a
                  href="https://talentxcel.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <span>Launch Platform</span>
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services" className="flex items-center space-x-2">
                  <span>Explore Services</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-4 pt-2 text-sm">
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About Us →
              </Link>
              <Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                Careers →
              </Link>
              <Link to="/investors" className="text-muted-foreground hover:text-primary transition-colors">
                Investors →
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img 
                src={aiTechnology} 
                alt="AI Technology Platform"
                className="w-full h-80 lg:h-96 object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              
              {/* Floating Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button 
                  size="icon" 
                  variant="glass" 
                  className="w-16 h-16 rounded-full backdrop-blur-md"
                >
                  <Play className="h-6 w-6 ml-1" />
                </Button>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-4 right-4 grid grid-cols-2 gap-3">
              {stats.slice(0, 2).map((stat, index) => (
                <div key={index} className="bg-card/90 backdrop-blur-md border border-border/50 rounded-xl p-4 shadow-glass">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold text-primary">{stat.number}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                    <div className="text-xs text-accent font-medium">{stat.change}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10 lg:pt-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center lg:text-left">
              <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-accent font-medium">
                {stat.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
