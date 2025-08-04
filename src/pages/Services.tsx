import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Brain, GraduationCap, Code, Users, Zap, ArrowRight, Check, ExternalLink } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Resume Building & Optimization",
      description: "AI-powered resume creation and optimization tools that help professionals craft compelling resumes that stand out to employers.",
      features: ["ATS-Optimized Templates", "Industry-Specific Formats", "Real-time Feedback", "Professional Review"],
      category: "Individual",
      price: "Starting at ₹999",
      popular: false
    },
    {
      icon: Brain,
      title: "AI Career Tools",
      description: "Intelligent career guidance platform using machine learning to provide personalized career recommendations and job matching.",
      features: ["Career Path Analysis", "Skill Gap Assessment", "Job Matching Algorithm", "Salary Benchmarking"],
      category: "Individual",
      price: "₹1,999/month",
      popular: true
    },
    {
      icon: GraduationCap,
      title: "Corporate Training Programs",
      description: "Comprehensive training solutions for organizations looking to upskill their workforce and improve talent retention.",
      features: ["Custom Curriculum", "Skills Assessment", "Progress Tracking", "Certification Programs"],
      category: "Enterprise",
      price: "Custom Pricing",
      popular: false
    },
    {
      icon: Code,
      title: "SaaS API for Institutions",
      description: "Scalable API solutions that allow educational institutions and corporations to integrate our talent management tools.",
      features: ["RESTful APIs", "Custom Integration", "Real-time Analytics", "24/7 Support"],
      category: "Enterprise",
      price: "Contact Sales",
      popular: false
    },
    {
      icon: Users,
      title: "Mentorship & Coaching",
      description: "One-on-one career coaching and mentorship programs connecting professionals with industry experts.",
      features: ["Expert Mentors", "Personalized Sessions", "Goal Setting", "Progress Monitoring"],
      category: "Individual",
      price: "₹2,999/session",
      popular: false
    },
    {
      icon: Zap,
      title: "Enterprise Solutions",
      description: "End-to-end talent management solutions for large organizations, including recruitment, onboarding, and development.",
      features: ["Talent Pipeline", "Performance Analytics", "Employee Development", "Retention Strategies"],
      category: "Enterprise",
      price: "Custom Pricing",
      popular: true
    }
  ];

  const categories = ["All", "Individual", "Enterprise"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Comprehensive solutions designed to empower individuals and organizations 
                in their talent development and career growth journey.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From individual career guidance to enterprise-wide talent solutions, 
                we provide tools and services that drive real results.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex justify-center gap-2 mb-12">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === "All" ? "default" : "secondary"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
                >
                  {category}
                </Badge>
              ))}
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className={`p-8 hover:shadow-medium transition-all duration-300 group relative ${service.popular ? 'border-primary shadow-soft' : ''}`}>
                  {service.popular && (
                    <Badge className="absolute -top-3 left-6 bg-primary">
                      Most Popular
                    </Badge>
                  )}
                  
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-xl">{service.title}</h3>
                        <Badge variant="outline">{service.category}</Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-secondary" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <div>
                      <p className="text-sm text-muted-foreground">Starting from</p>
                      <p className="text-lg font-semibold text-primary">{service.price}</p>
                    </div>
                    <Button variant={service.popular ? "hero" : "outline"} className="group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our streamlined process ensures you get the most value from our services, 
                whether you're an individual or an organization.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Assessment",
                  description: "We analyze your current situation, goals, and requirements to create a personalized plan."
                },
                {
                  step: "02",
                  title: "Strategy",
                  description: "Our experts develop a customized strategy tailored to your specific needs and objectives."
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "We execute the plan using our proven tools, technologies, and methodologies."
                },
                {
                  step: "04",
                  title: "Success",
                  description: "Track progress, measure results, and achieve your career or organizational goals."
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Integration */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Integrated Platform Experience</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                All our services are seamlessly integrated across the TalentXcel ecosystem 
                for a unified experience.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 hover:shadow-medium transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">TalentXcel Platform</h3>
                  <ExternalLink className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground mb-6">
                  Access all individual services through our main platform at TalentXcel.in. 
                  Get personalized career guidance, AI tools, and professional development resources.
                </p>
                <Button variant="outline" className="w-full" asChild>
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
                  Enterprise clients can access specialized tools and services through 
                  our dedicated portal with advanced analytics and management features.
                </p>
                <Button variant="outline" className="w-full" asChild>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career Journey?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Whether you're an individual looking to advance your career or an organization 
              seeking to empower your team, we have the right solution for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Get Started Today
              </Button>
              <Button size="lg" variant="outline">
                Schedule Consultation
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