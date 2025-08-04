import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Lightbulb, Award, Coffee, Globe, Star, Quote } from "lucide-react";

const Culture = () => {
  const values = [
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "We believe in sustainable success that doesn't compromise personal well-being.",
      color: "text-red-500"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Great things happen when diverse minds come together with a shared purpose.",
      color: "text-blue-500"
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description: "We invest in our team's growth through learning opportunities and skill development.",
      color: "text-yellow-500"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "We celebrate achievements, both big and small, and recognize exceptional contributions.",
      color: "text-green-500"
    },
    {
      icon: Globe,
      title: "Diversity & Inclusion",
      description: "We embrace different perspectives and create an inclusive environment for everyone.",
      color: "text-purple-500"
    },
    {
      icon: Coffee,
      title: "Open Communication",
      description: "Transparent, honest communication is the foundation of our collaborative culture.",
      color: "text-orange-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Head of Product",
      department: "Product",
      quote: "TalentXcel has been an incredible place to grow my career. The support from leadership and the collaborative environment have allowed me to take on challenges I never thought possible.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "David Chen",
      role: "Senior AI Engineer",
      department: "Engineering",
      quote: "Working here feels like being part of a family that's also building the future. The technical challenges are exciting, and the team support is unmatched.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Lisa Wang",
      role: "Head of Marketing",
      department: "Marketing",
      quote: "The diversity of thought and inclusive culture here has made me a better professional and person. Every voice is heard and valued.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=face"
    }
  ];

  const benefits = [
    "Flexible working hours and remote work options",
    "Comprehensive health insurance for you and your family",
    "Professional development budget for courses and conferences",
    "Mental health support and wellness programs",
    "Stock options and performance bonuses",
    "Unlimited paid time off policy",
    "Modern office spaces with collaboration areas",
    "Regular team building activities and company retreats",
    "Learning stipend for books, courses, and certifications",
    "Gym membership and fitness reimbursements"
  ];

  const initiatives = [
    {
      title: "Women in Tech Program",
      description: "Supporting female professionals in technology through mentorship and leadership opportunities.",
      impact: "40% female leadership"
    },
    {
      title: "Green Office Initiative",
      description: "Sustainable practices in our offices including renewable energy and zero-waste policies.",
      impact: "Carbon neutral since 2023"
    },
    {
      title: "Community Outreach",
      description: "Regular volunteering activities and partnerships with local educational institutions.",
      impact: "500+ hours volunteered"
    },
    {
      title: "Skills Development",
      description: "Internal workshops, guest speakers, and skill-sharing sessions for continuous learning.",
      impact: "95% completion rate"
    }
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
                Our <span className="bg-gradient-primary bg-clip-text text-transparent">Culture</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                At TalentXcel, we've built more than just a company—we've created a 
                community where innovation thrives, people grow, and success is shared.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">What Drives Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our core values shape every interaction, decision, and initiative at TalentXcel.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300 group">
                  <value.icon className={`h-10 w-10 mb-4 group-hover:scale-110 transition-transform ${value.color}`} />
                  <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Testimonials */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">What Our Team Says</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hear directly from our team members about their experiences working at TalentXcel.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-8 hover:shadow-medium transition-all duration-300">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <Badge variant="outline" className="text-xs mt-1">{testimonial.department}</Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits & Perks */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Benefits & Perks</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We believe in taking care of our team with comprehensive benefits that support 
                both professional growth and personal well-being.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <Star className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-xl font-semibold mb-6">What We Offer</h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </Card>

              <div className="space-y-6">
                <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
                  <h3 className="font-semibold text-lg mb-3">Work Environment</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our modern offices are designed for collaboration and creativity, with flexible 
                    spaces that adapt to different working styles. Plus, our hybrid work model 
                    gives you the freedom to work where you're most productive.
                  </p>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-secondary/5 to-accent/5">
                  <h3 className="font-semibold text-lg mb-3">Growth Opportunities</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We're committed to your professional development with mentorship programs, 
                    internal mobility opportunities, and support for further education and 
                    skill development.
                  </p>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-accent/5 to-primary/5">
                  <h3 className="font-semibold text-lg mb-3">Community Impact</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Be part of meaningful work that impacts millions of careers while contributing 
                    to community initiatives and sustainability efforts.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Initiatives */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Initiatives</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're actively working to create positive change within our company and community.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {initiatives.map((initiative, index) => (
                <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-3">{initiative.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {initiative.description}
                    </p>
                    <Badge variant="secondary" className="text-xs">
                      {initiative.impact}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Be Part of Our Story?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join a team that values your growth, celebrates your achievements, 
              and empowers you to make a meaningful impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                View Open Positions
              </Button>
              <Button size="lg" variant="corporate">
                Learn More About Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Culture;