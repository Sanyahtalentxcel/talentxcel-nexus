import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  Building2, 
  Globe, 
  Target, 
  Award, 
  ArrowUpRight,
  Download,
  Calendar,
  Zap,
  Brain,
  Shield,
  ExternalLink
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import businessStrategy from "@/assets/business-strategy.jpg";
import financialGrowth from "@/assets/financial-growth.jpg";
import recruitmentProcess from "@/assets/recruitment-process.jpg";
import digitalMarketing from "@/assets/digital-marketing.jpg";
import customerService from "@/assets/customer-service.jpg";

const Investors = () => {
  const keyMetrics = [
    { metric: "5,000+", label: "Active Users", growth: "+150% YoY", icon: Users },
    { metric: "100+", label: "Enterprise Clients", growth: "+200% YoY", icon: Building2 },
    { metric: "95%", label: "Customer Retention", growth: "+5% YoY", icon: Target },
    { metric: "$2.3B", label: "India TAM 2033", growth: "7.9% CAGR", icon: Globe }
  ];

  const competitiveAdvantages = [
    {
      icon: Brain,
      title: "AI-First Matching",
      description: "Proprietary ML models for higher-quality fits, not just keyword/recency matching"
    },
    {
      icon: Globe,
      title: "End-to-End Platform",
      description: "Candidate discovery → resume/cover letter tools → assessments → employer hiring workflows"
    },
    {
      icon: TrendingUp,
      title: "Network Effects",
      description: "More users → stronger data flywheel → better matches → lower CAC"
    },
    {
      icon: Shield,
      title: "Execution Discipline",
      description: "Fast GTM in India proven scaling in highly competitive markets"
    }
  ];

  const timeline = [
    {
      period: "Jul 2024",
      title: "Company Founded",
      description: "Founded with AI-first talent mission to empower India's talent ecosystem"
    },
    {
      period: "Late 2024",
      title: "Beta Launch",
      description: "Strong metro traction with AI-powered talent matching platform"
    },
    {
      period: "2025 YTD",
      title: "Rapid Growth",
      description: "5,000+ users, 100+ clients, rapid revenue growth trajectory"
    },
    {
      period: "Present",
      title: "Series A Ready",
      description: "Ready to accelerate growth distribution, product depth, and employer integrations"
    }
  ];

  const mediaOutlets = [
    "Economic Times (ET)",
    "Business Standard (BS)",
    "Mint",
    "Inc42",
    "YourStory",
    "TechCrunch"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <Helmet>
          <title>Investors | Talentxcel Investment Opportunity</title>
          <meta name="description" content="Invest in Talentxcel: AI-first career ecosystem with strong growth, enterprise traction, and scalable business model." />
          <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
        </Helmet>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(214,211,209,0.1),transparent_50%)]" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <TrendingUp className="h-4 w-4" />
                <span>Investment Opportunity</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-8">
                Invest in the Future of <span className="bg-gradient-primary bg-clip-text text-transparent">Talent</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Building the world's most comprehensive career ecosystem. 
                AI-first platform reimagining discovery, engagement, and hiring in India's fast-evolving talent economy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="default" className="group">
                  <Download className="mr-2 h-5 w-5" />
                  Download Pitch Deck
                  <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="group">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Meeting
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Company Snapshot */}
        <section className="py-14 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Company Snapshot</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Key fundamentals and metrics demonstrating our market position and growth trajectory.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Founded</div>
                    <div className="text-xl font-semibold">July 2024</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Headquarters</div>
                    <div className="text-xl font-semibold">Noida, India</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Business Model</div>
                    <div className="text-xl font-semibold">AI-first Career Ecosystem</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Core Product</div>
                    <div className="text-xl font-semibold">Talentxcel Platform</div>
                  </div>
                </div>
              </div>
              
              <Card className="p-8 hover:shadow-medium transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4">Market Opportunity (2025)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Global TMS Market</span>
                    <span className="font-semibold">$10B → $22.7-25B by 2030</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">India HR Tech TAM</span>
                    <span className="font-semibold">$1.12B → $2.3B by 2033</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Labor Force</span>
                    <span className="font-semibold">608M+ people</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Addressable Enterprises</span>
                    <span className="font-semibold">2.81M companies</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Formalized MSMEs</span>
                    <span className="font-semibold">6.4-6.7 crore</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyMetrics.map((item, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-medium transition-all duration-300 group">
                  <item.icon className="h-10 w-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold text-primary mb-2">{item.metric}</div>
                  <div className="text-foreground font-medium mb-2">{item.label}</div>
                  <Badge variant="secondary" className="text-xs">{item.growth}</Badge>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Competitive Edge */}
        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Competitive Edge</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our unique advantages that position us for sustained growth and market leadership.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {competitiveAdvantages.map((advantage, index) => (
                <Card key={index} className="p-8 hover:shadow-medium transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <advantage.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-xl mb-3">{advantage.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Macro Tailwinds & Why Now */}
        <section className="py-14 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Macro Tailwinds & Why Now</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Perfect timing with India's structural transformation driving unprecedented demand for HR tech solutions.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="p-8 hover:shadow-medium transition-shadow duration-300">
                  <h3 className="text-xl font-semibold mb-6">Global Capability Centers (GCCs)</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">GCCs in India</span>
                      <span className="font-semibold">1,700-1,950+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Employment</span>
                      <span className="font-semibold">1.9M+ employees</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Tech Adoption</span>
                      <span className="font-semibold">Modern HR stacks</span>
                    </div>
                  </div>
                </Card>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Why Now?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold mb-1">Formalization Wave</h4>
                        <p className="text-muted-foreground text-sm">MSMEs adopting digital HR faster than ever, creating massive demand</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold mb-1">GCC Growth</h4>
                        <p className="text-muted-foreground text-sm">MNCs localizing with India-first HR tech needs</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold mb-1">Labor Force Depth</h4>
                        <p className="text-muted-foreground text-sm">600M+ talent pool underserved in discovery & opportunity access</p>
                      </div>
                    </div>
                  </div>
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
                From founding to rapid growth - key milestones in our path to becoming a market leader.
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
                          <Badge className="bg-primary text-primary-foreground">
                            {item.period}
                          </Badge>
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

        {/* Business Operations Visual */}
        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Business Operations</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See how Talentxcel operates across different business functions to deliver exceptional results.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="relative group">
                <div className="rounded-3xl overflow-hidden shadow-glass hover:shadow-large transition-all duration-500">
                  <img 
                    src={businessStrategy} 
                    alt="Strategic Business Operations"
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">Strategic Planning</h3>
                    <p className="text-sm opacity-90">Data-driven business strategies and market analysis</p>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="rounded-3xl overflow-hidden shadow-glass hover:shadow-large transition-all duration-500">
                  <img 
                    src={financialGrowth} 
                    alt="Financial Analytics"
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">Financial Growth</h3>
                    <p className="text-sm opacity-90">Strong financial performance and growth metrics</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="relative group">
                <div className="rounded-2xl overflow-hidden shadow-glass hover:shadow-large transition-all duration-500">
                  <img 
                    src={recruitmentProcess} 
                    alt="Talent Acquisition"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold mb-1">Talent Acquisition</h4>
                    <p className="text-xs opacity-90">Expert recruitment services</p>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="rounded-2xl overflow-hidden shadow-glass hover:shadow-large transition-all duration-500">
                  <img 
                    src={digitalMarketing} 
                    alt="Digital Marketing"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold mb-1">Digital Marketing</h4>
                    <p className="text-xs opacity-90">Strategic brand building</p>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="rounded-2xl overflow-hidden shadow-glass hover:shadow-large transition-all duration-500">
                  <img 
                    src={customerService} 
                    alt="Customer Support"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold mb-1">Customer Excellence</h4>
                    <p className="text-xs opacity-90">24/7 support services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Partner with Us */}
        <section className="py-14 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Partner with Us?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're looking for visionary investors to join us on our mission to redefine India's career ecosystem.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Capital + Strategic Support</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Beyond funding, we seek partners who can provide access to hiring networks, 
                    product development guidance, and growth mentorship to accelerate our mission.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Access to hiring networks and enterprise clients</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Product development and technology mentorship</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Strategic guidance for market expansion</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Industry expertise and domain knowledge</span>
                  </div>
                </div>
              </div>
              
                <Card className="p-8 hover:shadow-medium transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-6">Investment Highlights (2025)</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">India TAM</span>
                    <span className="font-semibold">$2.3B by 2033</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Active Users</span>
                    <span className="font-semibold">5,000+ (+150% YoY)</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Enterprise Clients</span>
                    <span className="font-semibold">100+ (+200% YoY)</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-muted-foreground">Retention Rate</span>
                    <span className="font-semibold">95% (+5% YoY)</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Invest in the Future?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join us in building the world's most comprehensive career ecosystem. 
              Get in touch to learn more about our investment opportunity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" variant="secondary" className="group">
                <Download className="mr-2 h-5 w-5" />
                Download Pitch Deck
              </Button>
              <Button size="lg" variant="outline" className="group">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Meeting
              </Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <div className="text-sm opacity-80 mb-1">Investor Relations</div>
                  <div className="font-medium">investors@talentxcel.co.in</div>
                </div>
                <div>
                  <div className="text-sm opacity-80 mb-1">Direct Line</div>
                  <div className="font-medium">+91 9717181609</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Investors;