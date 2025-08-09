import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, Globe, Target, Users, Award, TrendingUp, Heart, Shield, Lightbulb, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import corporateOffice from "@/assets/corporate-office.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import globalNetwork from "@/assets/global-network.jpg";
import modernWorkspace from "@/assets/modern-workspace.jpg";
import conferenceRoom from "@/assets/conference-room.jpg";
const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously evolving our solutions to meet the changing needs of the talent ecosystem through cutting-edge AI technology."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Building trust through transparency, honesty, and ethical practices in everything we do across all our services."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Striving for excellence in every interaction, product, and service we deliver to our clients and candidates."
    },
    {
      icon: Shield,
      title: "Adaptability",
      description: "Embracing change and continuously adapting to market demands and emerging technologies."
    },
    {
      icon: Users,
      title: "Diversity & Inclusion",
      description: "Fostering an inclusive environment that celebrates diversity and promotes equal opportunities for all."
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Committed to sustainable business practices that benefit our stakeholders and the environment."
    }
  ];

  const timeline = [
    {
      year: "2024",
      title: "Foundation",
      description: "Talentxcel was founded in July 2024 with a vision to revolutionize workforce solutions through AI-first technology."
    },
    {
      year: "Late 2024",
      title: "Platform Launch",
      description: "Beta platform launched with early traction across metros, focusing on AI-powered talent matching."
    },
    {
      year: "2025",
      title: "Rapid Growth",
      description: "Achieved significant milestones: 5,000+ active users, 100+ enterprise clients, and substantial revenue growth."
    },
    {
      year: "Future",
      title: "Global Expansion",
      description: "Positioning for Series A funding while expanding operations across India, Europe, and the Middle East."
    }
  ];

  const stats = [
    { number: "5,000+", label: "Active Users", growth: "+150% YoY" },
    { number: "100+", label: "Enterprise Clients", growth: "+200% YoY" },
    { number: "95%", label: "Customer Retention", growth: "+5% YoY" },
    { number: "$2.1B", label: "India TAM", growth: "15% CAGR" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <Helmet>
          <title>About | Talentxcel Global Workforce & IT</title>
          <meta name="description" content="Learn about Talentxcel's global workforce solutions and AI-first IT services. Discover our mission, values, and growth." />
          <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
        </Helmet>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(214,211,209,0.1),transparent_50%)]" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    <Building2 className="h-4 w-4" />
                    <span>Founded July 2024</span>
                  </div>
                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                    About <span className="bg-gradient-primary bg-clip-text text-transparent">Talentxcel</span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    We blend workforce solutions and IT services for businesses and job seekers alike, 
                    creating a comprehensive AI-first career ecosystem.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-large">
                  <img 
                    src={corporateOffice} 
                    alt="Talentxcel Corporate Office"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">Noida Headquarters</h3>
                    <p className="text-sm opacity-90">Plot C, ESquare Building, Sector-45</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-14 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Company Snapshot</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Key metrics demonstrating our rapid growth and market impact since our founding in 2024.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="p-8 text-center hover:shadow-medium transition-all duration-300">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-foreground font-medium mb-2">{stat.label}</div>
                  <div className="text-sm text-accent font-medium">{stat.growth}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <Card className="p-8 hover:shadow-medium transition-shadow duration-300">
                  <Target className="h-12 w-12 text-primary mb-6" />
                  <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To be a global leader in integrated workforce and IT solutions, empowering both 
                    businesses and professionals through agile, scalable, and personalized services 
                    across India, Europe, and the Middle East.
                  </p>
                </Card>
                
                <Card className="p-8 hover:shadow-medium transition-shadow duration-300">
                  <Zap className="h-12 w-12 text-accent mb-6" />
                  <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To revolutionize workforce solutions through AI-first technology, delivering 
                    comprehensive services from staffing and training to IT consulting, creating 
                    value for businesses and career growth opportunities for professionals.
                  </p>
                </Card>
              </div>
              
              <div className="relative">
                <img 
                  src={teamCollaboration} 
                  alt="Team Collaboration"
                  className="w-full h-96 object-cover rounded-3xl shadow-large"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Apple-inspired image gallery */}
        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="relative group rounded-3xl overflow-hidden shadow-glass hover:shadow-large transition-all duration-500">
                  <img 
                    src={modernWorkspace} 
                    alt="Modern Workspace Culture"
                    className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-semibold mb-2">Innovation Culture</h3>
                    <p className="text-sm opacity-90">Where creativity meets technology</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="relative group rounded-3xl overflow-hidden shadow-glass hover:shadow-large transition-all duration-500">
                  <img 
                    src={conferenceRoom} 
                    alt="Collaboration Spaces"
                    className="w-full h-36 lg:h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="font-semibold text-sm">Strategic Meetings</h4>
                  </div>
                </div>
                
                <div className="relative group rounded-3xl overflow-hidden shadow-glass hover:shadow-large transition-all duration-500">
                  <img 
                    src={teamCollaboration} 
                    alt="Team Collaboration"
                    className="w-full h-36 lg:h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="font-semibold text-sm">Team Synergy</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-14 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These values guide every decision we make and every interaction we have 
                with our community of professionals and partners.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-8 text-center hover:shadow-medium transition-all duration-300 group">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-lg mb-4">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Global Reach */}
        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src={globalNetwork} 
                  alt="Global Network"
                  className="w-full h-80 object-cover rounded-3xl shadow-large"
                />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl font-bold mb-4">Global Reach</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With headquarters in Noida, India, we serve clients across multiple continents, 
                  focusing on industries such as Energy, BFSI, Technology, and Healthcare.
                </p>
                
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { region: "India", desc: "Primary Market" },
                    { region: "Europe", desc: "Expanding Operations" },
                    { region: "Middle East", desc: "Strategic Partnerships" }
                  ].map((region, index) => (
                    <div key={index} className="text-center">
                      <div className="text-lg font-semibold text-primary">{region.region}</div>
                      <div className="text-sm text-muted-foreground">{region.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section className="py-14 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From founding to rapid growth, here's how we've evolved to become 
                a leading player in the talent ecosystem.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/20 h-full hidden lg:block"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className="lg:w-1/2 lg:px-8">
                      <Card className="p-8 hover:shadow-medium transition-shadow duration-300">
                        <div className="flex items-center mb-4">
                          <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                            {item.year}
                          </div>
                        </div>
                        <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
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

        {/* CTA Section */}
        <section className="py-14 bg-gradient-hero text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Mission?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Whether you're a professional looking to grow your career or an organization 
              seeking comprehensive workforce solutions, we're here to help you succeed.
            </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/careers">Explore Careers</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;