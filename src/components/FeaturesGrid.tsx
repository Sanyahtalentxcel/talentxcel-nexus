
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Target, Zap, Building2, UserCheck, Server, ArrowRight } from "lucide-react";

const FeaturesGrid = () => {
  return (
    <section className="py-16 lg:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Complete Talent Ecosystem</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for individuals and organizations in the modern talent economy.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* For Individuals */}
          <div className="lg:row-span-2 bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:shadow-glass hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 bg-accent/10 rounded-2xl">
                <UserCheck className="h-8 w-8 text-accent" />
              </div>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                View All →
              </Link>
            </div>
            <h3 className="text-xl font-bold mb-4">For Job Seekers</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Target className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm">AI-Powered Resume Builder</span>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm">Intelligent Job Matching</span>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm">Expert Career Coaching</span>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <a href="https://talentxcel.in" target="_blank" rel="noopener noreferrer">
                Launch Platform
              </a>
            </Button>
          </div>

          {/* For Organizations - Top */}
          <div className="lg:col-span-2 bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:shadow-glass hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 bg-primary/10 rounded-2xl">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Learn More →
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">For Organizations</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Users className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">Staffing & Recruitment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Server className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">IT Consulting & Services</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">Training & Development</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Industries We Serve</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-muted text-xs rounded-md">Energy</span>
                  <span className="px-2 py-1 bg-muted text-xs rounded-md">BFSI</span>
                  <span className="px-2 py-1 bg-muted text-xs rounded-md">Technology</span>
                  <span className="px-2 py-1 bg-muted text-xs rounded-md">Healthcare</span>
                </div>
              </div>
            </div>
          </div>

          {/* Platform Access */}
          <div className="lg:col-span-2 bg-gradient-to-r from-primary/5 to-accent/5 border border-border/50 rounded-2xl p-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Access Our Platforms</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive ecosystem for talent and enterprise solutions
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="platform" size="sm" asChild>
                    <a href="https://talentxcel.in" target="_blank" rel="noopener noreferrer">
                      TalentXcel.in
                    </a>
                  </Button>
                  <Button variant="services" size="sm" asChild>
                    <a href="https://talentxcel.net" target="_blank" rel="noopener noreferrer">
                      TalentXcel.net
                    </a>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
