
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, GraduationCap, Server, ArrowRight, CheckCircle } from "lucide-react";
import modernWorkspace from "@/assets/modern-workspace.jpg";

const ServicesPreview = () => {
  const services = [
    {
      icon: Users,
      title: "Staffing & Recruitment",
      description: "End-to-end workforce solutions",
      features: ["Contingent Staffing", "Permanent Placements", "RPO Services"],
      popular: true
    },
    {
      icon: GraduationCap,
      title: "Training & Education",
      description: "Upskilling and development programs",
      features: ["Technical Training", "Leadership Development", "Certification"]
    },
    {
      icon: Server,
      title: "IT Consulting & Services",
      description: "Technology infrastructure solutions",
      features: ["Cloud Migration", "Cybersecurity", "Managed Services"]
    }
  ];

  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-10">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Enterprise-Grade Solutions
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Comprehensive workforce and technology solutions designed for modern enterprises 
              across Energy, BFSI, Technology, and Healthcare sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/services">
                  Explore All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={modernWorkspace} 
              alt="Modern Workspace"
              className="w-full h-80 object-cover rounded-2xl shadow-large"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-card/60 backdrop-blur-sm border rounded-2xl p-6 hover:shadow-medium hover:-translate-y-1 transition-all duration-300 ${
                service.popular ? 'border-primary/50 bg-primary/5' : 'border-border/50'
              }`}
            >
              {service.popular && (
                <div className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full w-fit mb-4">
                  Most Popular
                </div>
              )}
              
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2 rounded-lg ${service.popular ? 'bg-primary/20' : 'bg-muted'}`}>
                  <service.icon className={`h-6 w-6 ${service.popular ? 'text-primary' : 'text-foreground'}`} />
                </div>
                <h3 className="font-semibold text-lg">{service.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-4">{service.description}</p>
              
              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-accent flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                variant={service.popular ? "default" : "outline"} 
                size="sm" 
                className="w-full"
                asChild
              >
                <Link to="/services">Learn More</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
