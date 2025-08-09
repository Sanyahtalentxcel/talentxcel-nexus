
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Users, Globe, TrendingUp, ArrowRight } from "lucide-react";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import corporateOffice from "@/assets/corporate-office.jpg";

const CompanyOverview = () => {
  const highlights = [
    {
      icon: Building2,
      title: "Founded 2024",
      description: "Built for the future of work",
      link: "/about"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "India, Europe & Middle East",
      link: "/about"
    },
    {
      icon: Users,
      title: "Join Our Team",
      description: "Shape the future of talent",
      link: "/careers"
    },
    {
      icon: TrendingUp,
      title: "Investor Relations",
      description: "Growth opportunities",
      link: "/investors"
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Discover Talentxcel</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn more about our company, culture, opportunities, and vision for the future of talent.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Company Story */}
          <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:shadow-glass transition-all duration-300">
            <div className="flex items-start space-x-6">
              <img 
                src={teamCollaboration} 
                alt="Team Collaboration"
                className="w-24 h-24 object-cover rounded-xl flex-shrink-0"
                loading="lazy"
                decoding="async"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Our Story</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  Founded in July 2024, we're building India's most comprehensive talent ecosystem. 
                  Our AI-first platform connects opportunities with talent across multiple industries.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/about">
                    Learn More
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Culture */}
          <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:shadow-glass transition-all duration-300">
            <div className="flex items-start space-x-6">
              <img 
                src={corporateOffice} 
                alt="Corporate Culture"
                className="w-24 h-24 object-cover rounded-xl flex-shrink-0"
                loading="lazy"
                decoding="async"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Our Culture</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  Innovation-driven culture focused on empowerment, excellence, and growth. 
                  We believe in creating meaningful impact through technology and human connection.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/culture">
                    Explore Culture
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, index) => (
            <Link 
              key={index}
              to={item.link}
              className="bg-card/40 backdrop-blur-sm border border-border/30 rounded-xl p-6 hover:shadow-medium hover:bg-card/60 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-8 pt-6 border-t border-border">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Whether you're looking to advance your career or find the perfect talent for your organization, 
            we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="platform" asChild>
              <a href="https://talentxcel.in" target="_blank" rel="noopener noreferrer">
                Launch Platform
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
