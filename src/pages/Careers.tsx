import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Briefcase, ArrowRight, Search, Filter } from "lucide-react";

const Careers = () => {
  const jobOpenings = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "3-5 years",
      skills: ["React", "TypeScript", "Node.js"],
      description: "Join our engineering team to build cutting-edge career development tools that impact millions of professionals.",
      posted: "2 days ago"
    },
    {
      title: "AI/ML Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "4-6 years",
      skills: ["Python", "TensorFlow", "ML Ops"],
      description: "Help us build intelligent algorithms that power our career matching and recommendation systems.",
      posted: "1 week ago"
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "5-7 years",
      skills: ["Product Strategy", "Analytics", "User Research"],
      description: "Lead product initiatives that shape the future of career development and talent management.",
      posted: "3 days ago"
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Hybrid",
      type: "Full-time",
      experience: "3-5 years",
      skills: ["Figma", "Design Systems", "User Research"],
      description: "Create intuitive and beautiful experiences for our career platform used by thousands daily.",
      posted: "1 day ago"
    },
    {
      title: "Enterprise Sales Manager",
      department: "Sales",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "5-8 years",
      skills: ["B2B Sales", "SaaS", "Relationship Management"],
      description: "Drive enterprise adoption of our talent management solutions across various industries.",
      posted: "5 days ago"
    },
    {
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      experience: "2-4 years",
      skills: ["Digital Marketing", "Content Strategy", "SEO"],
      description: "Help us grow our brand and reach professionals looking to advance their careers.",
      posted: "1 week ago"
    }
  ];

  const departments = ["All", "Engineering", "Product", "Design", "Sales", "Marketing"];
  const locations = ["All", "Bangalore", "Mumbai", "Remote", "Hybrid"];

  const benefits = [
    "Competitive salary and equity packages",
    "Flexible working hours and remote options",
    "Health insurance for you and your family",
    "Professional development budget",
    "Unlimited PTO policy",
    "Modern office with great amenities"
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
                Join <span className="bg-gradient-primary bg-clip-text text-transparent">TalentXcel</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Be part of a team that's transforming careers and empowering talent worldwide. 
                Find your next opportunity to make a meaningful impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="hero">
                  View All Positions
                </Button>
                <Button size="lg" variant="outline">
                  Learn About Our Culture
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Work at TalentXcel?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join a mission-driven company where your work directly impacts millions of careers.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center hover:shadow-medium transition-shadow duration-300">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Meaningful Impact</h3>
                <p className="text-muted-foreground">
                  Your work directly helps professionals advance their careers and organizations build better teams.
                </p>
              </Card>
              
              <Card className="p-8 text-center hover:shadow-medium transition-shadow duration-300">
                <Briefcase className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Growth Opportunities</h3>
                <p className="text-muted-foreground">
                  Fast-growing company with endless opportunities to learn, grow, and take on new challenges.
                </p>
              </Card>
              
              <Card className="p-8 text-center hover:shadow-medium transition-shadow duration-300">
                <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Work-Life Balance</h3>
                <p className="text-muted-foreground">
                  Flexible schedules, remote work options, and a culture that values your well-being.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find the perfect role that matches your skills and career goals.
              </p>
            </div>

            {/* Filters */}
            <div className="mb-8">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  <Badge className="cursor-pointer">
                    <Search className="h-3 w-3 mr-1" />
                    All Departments
                  </Badge>
                  {departments.slice(1).map((dept) => (
                    <Badge key={dept} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                      {dept}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline" className="cursor-pointer">
                    <Filter className="h-3 w-3 mr-1" />
                    Location
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer">
                    Experience
                  </Badge>
                </div>
              </div>
            </div>
            
            <div className="grid gap-6">
              {jobOpenings.map((job, index) => (
                <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300 group">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{job.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span className="flex items-center">
                              <Briefcase className="h-4 w-4 mr-1" />
                              {job.department}
                            </span>
                            <span className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {job.location}
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {job.type}
                            </span>
                          </div>
                        </div>
                        <Badge variant="outline">{job.experience}</Badge>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {job.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">Posted {job.posted}</span>
                      </div>
                    </div>
                    
                    <div className="lg:ml-6">
                      <Button variant="outline" className="group w-full lg:w-auto">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Don't see the perfect role? We're always looking for exceptional talent.
              </p>
              <Button variant="outline">
                Send Us Your Resume
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  We believe in taking care of our team with comprehensive benefits 
                  that support both your professional growth and personal well-being.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <p className="text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">10+</div>
                  <p className="text-sm text-muted-foreground">Countries with remote team members</p>
                </Card>
                <Card className="p-6 text-center">
                  <div className="text-2xl font-bold text-secondary mb-2">95%</div>
                  <p className="text-sm text-muted-foreground">Employee satisfaction rate</p>
                </Card>
                <Card className="p-6 text-center">
                  <div className="text-2xl font-bold text-accent mb-2">₹50K</div>
                  <p className="text-sm text-muted-foreground">Annual learning budget</p>
                </Card>
                <Card className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-sm text-muted-foreground">Flexible working hours</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join our mission to transform careers and be part of building the future of work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Browse All Jobs
              </Button>
              <Button size="lg" variant="outline">
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;