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
  Settings
} from "lucide-react";
import aiTechnology from "@/assets/ai-technology.jpg";
import modernWorkspace from "@/assets/modern-workspace.jpg";
import conferenceRoom from "@/assets/conference-room.jpg";
import remoteWork from "@/assets/remote-work.jpg";
import trainingSession from "@/assets/training-session.jpg";
import dataCenter from "@/assets/data-center.jpg";

const Services = () => {
  const organizationServices = [
    {
      icon: Users,
      title: "Staffing & Recruitment",
      description: "Comprehensive workforce solutions including contingent staffing, contract-to-hire, permanent placements, and recruitment process outsourcing (RPO).",
      features: [
        "Contingent Staffing",
        "Contract-to-Hire Solutions", 
        "Permanent Placements",
        "Recruitment Process Outsourcing",
        "Cultural & Skill-based Matching"
      ],
      industries: ["Energy", "BFSI", "Technology", "Healthcare"],
      popular: true
    },
    {
      icon: GraduationCap,
      title: "Training & Education",
      description: "Tailored training programs ranging from technical upskilling to leadership development, designed to keep teams competitive and future-ready.",
      features: [
        "Technical Upskilling Programs",
        "Leadership Development",
        "Custom Training Modules",
        "Performance Assessment",
        "Certification Programs"
      ],
      industries: ["All Industries"],
      popular: false
    },
    {
      icon: Server,
      title: "IT Consulting & Managed Services",
      description: "Expert guidance on infrastructure, cloud migration, cybersecurity, and end-to-end managed IT operations with proactive approach.",
      features: [
        "Infrastructure Consulting",
        "Cloud Migration Services",
        "Cybersecurity Solutions",
        "Managed IT Operations",
        "24/7 Proactive Support"
      ],
      industries: ["Technology", "BFSI", "Healthcare"],
      popular: false
    }
  ];

  const individualServices = [
    {
      icon: FileText,
      title: "AI-Powered Resume Builder",
      description: "Advanced resume creation tool with AI-powered templates that generate ATS-compatible bullet points and tailored resumes rapidly.",
      features: [
        "ATS-Compatible Templates",
        "AI-Generated Bullet Points",
        "Industry-Specific Formats",
        "Real-time Optimization",
        "Professional Formatting"
      ]
    },
    {
      icon: Search,
      title: "Job Matching & Tracking",
      description: "Built-in dashboard to search, apply, and manage responses for a wide range of job opportunities with intelligent matching algorithms.",
      features: [
        "Intelligent Job Matching",
        "Application Tracking",
        "Response Management",
        "Career Analytics",
        "Interview Scheduling"
      ]
    },
    {
      icon: Target,
      title: "One-click Applications & Expert Feedback",
      description: "Streamlined application submissions plus professional resume feedback to help candidates stand out in the competitive job market.",
      features: [
        "One-Click Apply",
        "Expert Resume Review",
        "Professional Feedback",
        "Interview Preparation",
        "Career Coaching"
      ]
    }
  ];

  const industries = [
    { name: "Energy", description: "Oil, Gas, Renewable Energy" },
    { name: "BFSI", description: "Banking, Financial Services, Insurance" },
    { name: "Technology", description: "IT, Software, Digital Services" },
    { name: "Healthcare", description: "Medical, Pharmaceutical, Biotech" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(214,211,209,0.1),transparent_50%)]" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    <Building2 className="h-4 w-4" />
                    <span>Comprehensive Solutions</span>
                  </div>
                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                    Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Blending workforce solutions and IT services for businesses and job seekers alike. 
                    Comprehensive AI-first solutions for the modern talent economy.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={aiTechnology} 
                  alt="AI Technology Services"
                  className="w-full h-96 object-cover rounded-3xl shadow-large"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Apple-inspired visual section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8 mb-20">
              <div className="relative group">
                <div className="rounded-3xl overflow-hidden shadow-glass hover:shadow-large transition-all duration-500">
                  <img 
                    src={modernWorkspace} 
                    alt="Modern Workspace"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold">Modern Workspace</h3>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="rounded-3xl overflow-hidden shadow-glass hover:shadow-large transition-all duration-500">
                  <img 
                    src={conferenceRoom} 
                    alt="Enterprise Solutions"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold">Enterprise Solutions</h3>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="rounded-3xl overflow-hidden shadow-glass hover:shadow-large transition-all duration-500">
                  <img 
                    src={dataCenter} 
                    alt="IT Infrastructure"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold">IT Infrastructure</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services for Organizations */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Building2 className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Services for Organizations</h2>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive workforce and IT solutions designed to help businesses thrive 
                in today's competitive landscape.
              </p>
            </div>
            
            <div className="space-y-8">
              {organizationServices.map((service, index) => (
                <Card key={index} className={`p-8 hover:shadow-medium transition-all duration-300 ${service.popular ? 'border-primary shadow-soft' : ''}`}>
                  {service.popular && (
                    <Badge className="absolute -top-3 left-8 bg-primary">
                      Most Popular
                    </Badge>
                  )}
                  
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <service.icon className="h-8 w-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-2xl mb-3">{service.title}</h3>
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <h4 className="font-medium mb-3">Key Features:</h4>
                          <div className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-accent" />
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-3">Industries Served:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.industries.map((industry, idx) => (
                              <Badge key={idx} variant="secondary">{industry}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col justify-center space-y-4">
                      <Button variant={service.popular ? "default" : "outline"} size="lg" className="w-full">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Individual Services Visual */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Empowering Individual Growth</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our AI-powered platform provides personalized tools and insights to accelerate your career journey, 
                  from resume optimization to job matching and professional development.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card/60 p-4 rounded-2xl">
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-sm text-muted-foreground">Resume Success Rate</div>
                  </div>
                  <div className="bg-card/60 p-4 rounded-2xl">
                    <div className="text-2xl font-bold text-accent">24h</div>
                    <div className="text-sm text-muted-foreground">Average Response Time</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-large">
                  <img 
                    src={remoteWork} 
                    alt="Remote Work Professional"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services for Job Seekers */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <UserCheck className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-bold">Services for Job Seekers</h2>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                AI-powered tools and expert assistance to enhance your job market presence 
                and accelerate your career growth.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {individualServices.map((service, index) => (
                <Card key={index} className="p-8 hover:shadow-medium transition-all duration-300 group">
                  <div className="text-center mb-6">
                    <div className="inline-flex p-4 bg-accent/10 rounded-2xl mb-4">
                      <service.icon className="h-10 w-10 text-accent" />
                    </div>
                    <h3 className="font-semibold text-xl mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Get Started
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Focus */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Industry Expertise</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We specialize in key industries where talent demand is highest and 
                digital transformation is most critical.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-medium transition-all duration-300 group">
                  <div className="text-2xl font-bold text-primary mb-2">{industry.name}</div>
                  <div className="text-sm text-muted-foreground">{industry.description}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Integration */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Integrated Platform Experience</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Access all our services through our comprehensive platform ecosystem 
                designed for seamless user experience.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 hover:shadow-medium transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">TalentXcel Platform</h3>
                  <ExternalLink className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground mb-6">
                  Access individual services, AI-powered career tools, job matching, 
                  and professional development resources through our main platform.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <Settings className="h-4 w-4 text-primary" />
                    <span className="text-sm">AI Career Tools</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <span className="text-sm">Resume Builder</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="text-sm">Job Matching</span>
                  </div>
                </div>
                <Button variant="platform" className="w-full" asChild>
                  <a href="https://talentxcel.in" target="_blank" rel="noopener noreferrer">
                    Visit TalentXcel.in
                  </a>
                </Button>
              </Card>

              <Card className="p-8 hover:shadow-medium transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Enterprise Portal</h3>
                  <ExternalLink className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground mb-6">
                  Enterprise clients access specialized workforce solutions, IT services, 
                  and advanced analytics through our dedicated business portal.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-accent" />
                    <span className="text-sm">Staffing Solutions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Server className="h-4 w-4 text-accent" />
                    <span className="text-sm">IT Services</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="h-4 w-4 text-accent" />
                    <span className="text-sm">Training Programs</span>
                  </div>
                </div>
                <Button variant="services" className="w-full" asChild>
                  <a href="https://talentxcel.net" target="_blank" rel="noopener noreferrer">
                    Visit TalentXcel.net
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Workforce Strategy?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Whether you need comprehensive workforce solutions or individual career services, 
              we have the expertise and technology to drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">Get In Touch</a>
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