import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Users, Globe, TrendingUp, ArrowRight, ShieldCheck, Handshake, Briefcase } from "lucide-react";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import corporateOffice from "@/assets/corporate-office.jpg";

const CompanyOverview = () => {
  const highlights = [
    {
      icon: Building2,
      title: "Founded July 2024",
      description: "Noida headquarters & cross-market reach",
      link: "/about"
    },
    {
      icon: Users,
      title: "Leadership & Governance",
      description: "Practitioner-led executive team",
      link: "/team"
    },
    {
      icon: Briefcase,
      title: "Case Studies & Proof",
      description: "Proven client outcomes across sectors",
      link: "/case-studies"
    },
    {
      icon: Handshake,
      title: "Strategic Partnerships",
      description: "University MoUs & enterprise alliances",
      link: "/partnerships"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3 tracking-tight">Discover TalentXcel</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Learn more about our corporate story, leadership governance, cultural principles, and verified client outcomes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Company Story */}
          <div className="bg-card border border-border/60 rounded-3xl p-8 hover:shadow-medium transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <img 
                src={teamCollaboration} 
                alt="TalentXcel Corporate Story"
                className="w-24 h-24 object-cover rounded-2xl flex-shrink-0 border border-border/50"
                loading="lazy"
                decoding="async"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-foreground">Our Story &amp; Purpose</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  Founded in July 2024, TalentXcel integrates enterprise software engineering, AI automation, and workforce solutions into one dependable partner for global organizations.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/about">
                    Read Company Story
                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Culture */}
          <div className="bg-card border border-border/60 rounded-3xl p-8 hover:shadow-medium transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <img 
                src={corporateOffice} 
                alt="TalentXcel Corporate Culture"
                className="w-24 h-24 object-cover rounded-2xl flex-shrink-0 border border-border/50"
                loading="lazy"
                decoding="async"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-foreground">Our Culture &amp; Governance</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  A high-accountability engineering environment emphasizing continuous technical upskilling, practitioner ownership, transparent delivery, and ethical talent stewardship.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/culture">
                    Explore Culture &amp; Values
                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link 
                key={index}
                to={item.link}
                className="bg-card border border-border/60 rounded-2xl p-6 hover:shadow-medium hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="flex flex-col items-center text-center space-y-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-foreground mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="text-center">
                  <span className="inline-flex items-center text-xs font-semibold text-primary group-hover:underline">
                    View Details <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
