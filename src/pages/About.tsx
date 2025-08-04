import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, Eye, Heart, Lightbulb, Award, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description: "We build trust through transparency, honesty, and ethical practices in everything we do."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously evolve our solutions to meet the changing needs of the talent ecosystem."
    },
    {
      icon: Target,
      title: "Impact",
      description: "We measure success by the positive change we create in people's careers and organizations."
    },
    {
      icon: TrendingUp,
      title: "Excellence",
      description: "We strive for excellence in every interaction, product, and service we deliver."
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Foundation",
      description: "TalentXcel was founded with a vision to revolutionize career development through technology."
    },
    {
      year: "2021",
      title: "Platform Launch",
      description: "Launched our first AI-powered career platform serving 1,000+ professionals."
    },
    {
      year: "2022",
      title: "Corporate Expansion",
      description: "Expanded to serve enterprises with our B2B solutions and corporate training programs."
    },
    {
      year: "2023",
      title: "Scale & Growth",
      description: "Reached 10,000+ users and launched advanced AI tools for personalized career guidance."
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description: "Established ourselves as the leading career ecosystem with multi-platform integration."
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
                About <span className="bg-gradient-primary bg-clip-text text-transparent">TalentXcel</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We are on a mission to transform how talent connects with opportunities, 
                creating a world where every professional can achieve their full potential.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="p-8 hover:shadow-medium transition-shadow duration-300">
                <Eye className="h-12 w-12 text-primary mb-6" />
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become the world's most trusted career ecosystem that empowers every individual 
                  to discover, develop, and achieve their professional aspirations while helping 
                  organizations build exceptional teams.
                </p>
              </Card>
              
              <Card className="p-8 hover:shadow-medium transition-shadow duration-300">
                <Target className="h-12 w-12 text-secondary mb-6" />
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To revolutionize career development through innovative technology, personalized guidance, 
                  and comprehensive solutions that bridge the gap between talent and opportunity in the 
                  modern workforce.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These values guide every decision we make and every interaction we have 
                with our community of professionals and partners.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-medium transition-all duration-300 group">
                  <value.icon className="h-10 w-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From a simple idea to a comprehensive career ecosystem, 
                here's how we've grown and evolved over the years.
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/20 h-full hidden lg:block"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className="lg:w-1/2 lg:px-8">
                      <Card className="p-6 hover:shadow-medium transition-shadow duration-300">
                        <div className="flex items-center mb-3">
                          <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                            {item.year}
                          </div>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </Card>
                    </div>
                    
                    {/* Timeline Dot */}
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
        <section className="py-20 bg-gradient-hero text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Mission?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Whether you're a professional looking to grow your career or an organization 
              seeking to empower your team, we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Explore Careers
              </Button>
              <Button size="lg" variant="corporate">
                Contact Us
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