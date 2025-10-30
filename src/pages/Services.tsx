
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  GraduationCap,
  Server,
  Brain,
  FileText,
  Search,
  Target,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Building2,
  UserCheck,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import aiTechnology from "@/assets/ai-technology.jpg";
import modernWorkspace from "@/assets/modern-workspace.jpg";
import trainingSession from "@/assets/training-session.jpg";

const Services = () => {
  const organizationServices = [
    {
      icon: Users,
      title: "Staffing & Recruitment",
      slug: "staffing-recruitment",
      description: "Complete workforce solutions including contingent staffing, permanent placements, and RPO services.",
      features: ["Contingent Staffing", "Contract-to-Hire", "Permanent Placements", "RPO Services"],
      industries: ["Energy", "BFSI", "Technology", "Healthcare"],
      popular: true,
      image: modernWorkspace
    },
    {
      icon: GraduationCap,
      title: "Training & Education",
      slug: "training-education",
      description: "Comprehensive training programs from technical upskilling to leadership development.",
      features: ["Technical Upskilling", "Leadership Development", "Custom Training", "Certification"],
      industries: ["All Industries"],
      popular: false,
      image: trainingSession
    },
    {
      icon: Server,
      title: "IT Consulting & Managed Services",
      slug: "it-consulting-managed-services",
      description: "Expert IT infrastructure, cloud migration, cybersecurity, and managed operations.",
      features: ["Infrastructure Consulting", "Cloud Migration", "Cybersecurity", "24/7 Support"],
      industries: ["Technology", "BFSI", "Healthcare"],
      popular: false,
      image: aiTechnology
    }
  ];

  const individualServices = [
    {
      icon: FileText,
      title: "AI Resume Builder",
      description: "ATS-compatible resumes with AI-generated content",
      features: ["ATS Templates", "AI Content", "Real-time Optimization"]
    },
    {
      icon: Search,
      title: "Job Matching",
      description: "Intelligent job search and application tracking",
      features: ["Smart Matching", "Application Tracking", "Interview Prep"]
    },
    {
      icon: Target,
      title: "Career Coaching",
      description: "Expert guidance and professional development",
      features: ["Resume Review", "Interview Prep", "Career Planning"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <Helmet>
          <title>Services - Staffing, Training, IT Consulting | Talentxcel Enterprise & Career Solutions</title>
          <meta name="description" content="Talentxcel services: Enterprise staffing & recruitment, IT consulting & managed services, training & education programs. Individual services: AI resume builder, job matching, career coaching. Serving India, Europe, Middle East." />
          <meta name="keywords" content="Talentxcel services, staffing solutions, recruitment services, IT consulting, managed IT services, training programs, AI resume builder, job matching, career coaching, RPO services, corporate training, talent management" />
          <link rel="canonical" href="https://talentxcel.co.in/services" />
          
          {/* Open Graph */}
          <meta property="og:title" content="Services - Enterprise & Career Solutions | Talentxcel" />
          <meta property="og:description" content="Comprehensive workforce solutions: Staffing, IT consulting, training. AI-powered career services: Resume builder, job matching, coaching." />
          <meta property="og:url" content="https://talentxcel.co.in/services" />
          <meta property="og:type" content="website" />
          
          {/* Twitter */}
          <meta name="twitter:title" content="Services - Enterprise & Career Solutions | Talentxcel" />
          <meta name="twitter:description" content="Staffing, IT consulting, training & AI-powered career services." />
          
          {/* Structured Data - Service */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Talent Management and Workforce Solutions",
              "provider": {
                "@type": "Organization",
                "name": "Talentxcel",
                "url": "https://talentxcel.co.in"
              },
              "areaServed": ["India", "Europe", "Middle East"],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Talentxcel Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Staffing & Recruitment",
                      "description": "Complete workforce solutions including contingent staffing, permanent placements, and RPO services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "IT Consulting & Managed Services",
                      "description": "Expert IT infrastructure, cloud migration, cybersecurity, and 24/7 managed operations"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Training & Education",
                      "description": "Comprehensive training programs from technical upskilling to leadership development"
                    }
                  }
                ]
              }
            })}
          </script>
          
          {/* Breadcrumb */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://talentxcel.co.in/"},
                {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://talentxcel.co.in/services"}
              ]
            })}
          </script>
        </Helmet>

        {/* Hero Section - Compact */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Building2 className="h-3 w-3" />
                <span>Comprehensive Solutions</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                AI-first solutions for businesses and job seekers across India, Europe, and Middle East.
              </p>
              
              {/* Quick Navigation */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Button variant="outline" size="sm" asChild>
                  <Link to="#organizations">For Organizations</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link to="#individuals">For Job Seekers</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/about">About Us</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services for Organizations - Compact Grid */}
        <section id="organizations" className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Services for Organizations</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive workforce and IT solutions for modern enterprises.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {organizationServices.map((service, index) => (
                <Card key={index} className={`overflow-hidden hover:shadow-large transition-all duration-300 group ${service.popular ? 'border-primary' : ''}`}>
                  {service.popular && (
                    <div className="bg-primary text-primary-foreground text-xs px-3 py-1 text-center">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="relative h-48">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <service.icon className="h-8 w-8 text-white mb-2" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-3 w-3 text-accent flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {service.industries.map((industry, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">{industry}</Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1" asChild>
                        <Link to="/contact">Get Started</Link>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <Link to={`/services/${service.slug}`}>Details</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Enterprise CTA */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Enterprise Solutions</h3>
              <p className="text-muted-foreground mb-6">
                Custom solutions for large organizations. Contact our enterprise team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link to="/contact">Contact Enterprise Team</Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://talentxcel.net" target="_blank" rel="noopener noreferrer">
                    Visit Enterprise Portal
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services for Job Seekers - Compact */}
        <section id="individuals" className="py-12 lg:py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <UserCheck className="h-6 w-6 text-accent" />
                <h2 className="text-3xl font-bold">Services for Job Seekers</h2>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                AI-powered tools and expert assistance for career advancement.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {individualServices.map((service, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-medium transition-all duration-300 group">
                  <div className="inline-flex p-3 bg-accent/10 rounded-2xl mb-4">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" asChild>
                    <a href="https://talentxcel.in" target="_blank" rel="noopener noreferrer">
                      Get Started
                    </a>
                  </Button>
                </Card>
              ))}
            </div>

            {/* Platform CTA */}
            <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Launch Your Career</h3>
              <p className="text-muted-foreground mb-6">
                Access all individual services through our comprehensive career platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="platform" asChild>
                  <a href="https://talentxcel.in" target="_blank" rel="noopener noreferrer">
                    Launch TalentXcel Platform
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/careers">Join Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-12 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-bold mb-6 text-center">Explore More</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col space-y-2" asChild>
                <Link to="/about">
                  <Building2 className="h-5 w-5" />
                  <span>About Us</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col space-y-2" asChild>
                <Link to="/culture">
                  <Users className="h-5 w-5" />
                  <span>Our Culture</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col space-y-2" asChild>
                <Link to="/careers">
                  <Target className="h-5 w-5" />
                  <span>Careers</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col space-y-2" asChild>
                <Link to="/investors">
                  <TrendingUp className="h-5 w-5" />
                  <span>Investors</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
