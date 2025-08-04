import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Building, Award, Download, Mail, Phone, Calendar } from "lucide-react";

const Investors = () => {
  const metrics = [
    {
      value: "10,000+",
      label: "Active Users",
      growth: "+150% YoY",
      icon: Users
    },
    {
      value: "500+",
      label: "Enterprise Clients",
      growth: "+200% YoY",
      icon: Building
    },
    {
      value: "₹50Cr+",
      label: "Revenue Run Rate",
      growth: "+180% YoY",
      icon: TrendingUp
    },
    {
      value: "95%",
      label: "Customer Retention",
      growth: "+5% YoY",
      icon: Award
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Started with a vision to revolutionize career development through AI"
    },
    {
      year: "2021",
      title: "Product Launch",
      description: "Launched our first AI-powered career platform"
    },
    {
      year: "2022",
      title: "Series A Funding",
      description: "Raised ₹15 Cr Series A to expand our platform and team"
    },
    {
      year: "2023",
      title: "Enterprise Expansion",
      description: "Launched B2B solutions and reached 10,000+ users"
    },
    {
      year: "2024",
      title: "Market Leadership",
      description: "Established as leading career ecosystem in India"
    }
  ];

  const mediaLogos = [
    { name: "Economic Times", logo: "ET" },
    { name: "Business Standard", logo: "BS" },
    { name: "Mint", logo: "Mint" },
    { name: "Inc42", logo: "Inc42" },
    { name: "YourStory", logo: "YS" },
    { name: "TechCrunch", logo: "TC" }
  ];

  const teamHighlights = [
    "15+ years of combined experience in HR tech",
    "Former executives from top tech companies",
    "Deep expertise in AI/ML and talent management",
    "Proven track record of scaling B2B platforms"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Invest in the Future of <span className="bg-gradient-primary bg-clip-text text-transparent">Talent</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Join us in building the world's most comprehensive career ecosystem. 
                TalentXcel is transforming how talent connects with opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="hero">
                  <Download className="mr-2 h-5 w-5" />
                  Download Pitch Deck
                </Button>
                <Button size="lg" variant="outline">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Meeting
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Growing Fast, Growing Strong</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our key metrics demonstrate strong product-market fit and scalable growth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-medium transition-all duration-300 group">
                  <metric.icon className="h-10 w-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="text-muted-foreground mb-2">{metric.label}</div>
                  <Badge variant="secondary" className="text-xs">
                    {metric.growth}
                  </Badge>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Market Opportunity */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Massive Market Opportunity</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  The global talent management market is expected to reach $12.3 billion by 2026, 
                  with India representing one of the fastest-growing segments driven by digital transformation.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">$2.1B India Market</h3>
                      <p className="text-sm text-muted-foreground">Growing at 15% CAGR</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Users className="h-8 w-8 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">500M+ Workforce</h3>
                      <p className="text-sm text-muted-foreground">Underserved by existing solutions</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Building className="h-8 w-8 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">2M+ Companies</h3>
                      <p className="text-sm text-muted-foreground">Seeking digital talent solutions</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="p-8">
                <h3 className="text-xl font-semibold mb-6">Our Competitive Advantage</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <h4 className="font-medium mb-1">AI-First Platform</h4>
                      <p className="text-sm text-muted-foreground">Advanced ML algorithms for precise talent matching</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                    <div>
                      <h4 className="font-medium mb-1">Multi-Platform Ecosystem</h4>
                      <p className="text-sm text-muted-foreground">Comprehensive solution from individual to enterprise</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    <div>
                      <h4 className="font-medium mb-1">Strong Network Effects</h4>
                      <p className="text-sm text-muted-foreground">Platform becomes more valuable with each user</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <h4 className="font-medium mb-1">Experienced Team</h4>
                      <p className="text-sm text-muted-foreground">Deep domain expertise and proven execution</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From startup to market leader, here's how we've built TalentXcel.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/20 h-full hidden lg:block"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className="lg:w-1/2 lg:px-8">
                      <Card className="p-6 hover:shadow-medium transition-shadow duration-300">
                        <Badge className="mb-3">{milestone.year}</Badge>
                        <h3 className="font-semibold text-lg mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </Card>
                    </div>
                    
                    <div className="hidden lg:flex items-center justify-center w-12 h-12 bg-primary rounded-full border-4 border-background shadow-medium z-10">
                      <Award className="h-5 w-5 text-primary-foreground" />
                    </div>
                    
                    <div className="lg:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Media Coverage */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">In the News</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                TalentXcel has been featured in leading publications and recognized by industry experts.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {mediaLogos.map((media, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-primary text-sm">{media.logo}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{media.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Highlights */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">World-Class Team</h2>
                <div className="space-y-4">
                  {teamHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <p className="text-muted-foreground">{highlight}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="mt-6">
                  Meet Our Team
                </Button>
              </Card>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">Ready to Partner with Us?</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  We're looking for strategic investors who share our vision of transforming 
                  the talent ecosystem and can add value beyond capital.
                </p>
                
                <div className="space-y-4">
                  <Card className="p-4 hover:shadow-soft transition-shadow duration-300">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Investor Relations</p>
                        <p className="text-sm text-muted-foreground">investors@talentxcel.co.in</p>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-4 hover:shadow-soft transition-shadow duration-300">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Direct Line</p>
                        <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Let's Build the Future Together</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join us in our mission to empower talent and transform careers. 
              Let's discuss how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Download className="mr-2 h-5 w-5" />
                Download Materials
              </Button>
              <Button size="lg" variant="outline">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Call
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Investors;