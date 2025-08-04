import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Twitter, Mail, Users } from "lucide-react";

const Team = () => {
  const leadership = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      department: "Leadership",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Visionary leader with 15+ years in HR tech and talent management. Former VP at leading recruitment firms.",
      linkedin: "#",
      twitter: "#",
      email: "rajesh@talentxcel.co.in"
    },
    {
      name: "Priya Sharma",
      role: "Chief Technology Officer",
      department: "Leadership",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5ad?w=300&h=300&fit=crop&crop=face",
      bio: "Tech innovator specializing in AI and machine learning. Previously led engineering teams at top tech companies.",
      linkedin: "#",
      twitter: "#",
      email: "priya@talentxcel.co.in"
    },
    {
      name: "Amit Patel",
      role: "Chief Operations Officer",
      department: "Leadership",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Operations expert with deep experience in scaling B2B platforms and building efficient processes.",
      linkedin: "#",
      twitter: "#",
      email: "amit@talentxcel.co.in"
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Head of Product",
      department: "Product",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Product strategist focused on user experience and AI-driven career solutions.",
      linkedin: "#"
    },
    {
      name: "David Chen",
      role: "Senior AI Engineer",
      department: "Engineering",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Machine learning expert building intelligent matching algorithms and career prediction models.",
      linkedin: "#"
    },
    {
      name: "Lisa Wang",
      role: "Head of Marketing",
      department: "Marketing",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&crop=face",
      bio: "Digital marketing leader driving brand growth and community engagement across platforms.",
      linkedin: "#"
    },
    {
      name: "Michael Brown",
      role: "Enterprise Solutions Lead",
      department: "Sales",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
      bio: "B2B sales expert helping enterprises transform their talent management strategies.",
      linkedin: "#"
    },
    {
      name: "Anita Singh",
      role: "Career Success Manager",
      department: "Customer Success",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
      bio: "Career counselor and coach dedicated to helping professionals achieve their goals.",
      linkedin: "#"
    },
    {
      name: "James Wilson",
      role: "Data Scientist",
      department: "Engineering",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=300&h=300&fit=crop&crop=face",
      bio: "Data analytics expert turning career insights into actionable intelligence for our platform.",
      linkedin: "#"
    }
  ];

  const departments = ["All", "Leadership", "Product", "Engineering", "Marketing", "Sales", "Customer Success"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Meet Our <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The passionate individuals behind TalentXcel who are dedicated to 
                transforming careers and empowering talent worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our experienced leaders bring decades of expertise in technology, 
                talent management, and business growth.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {leadership.map((member, index) => (
                <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300 group">
                  <div className="text-center">
                    <div className="relative mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/10 group-hover:border-primary/30 transition-colors"
                      />
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <Badge variant="secondary" className="mb-4">{member.department}</Badge>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      {member.bio}
                    </p>
                    
                    {/* Social Links */}
                    <div className="flex justify-center space-x-3">
                      <a
                        href={member.linkedin}
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a
                        href={member.twitter}
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Amazing Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The talented professionals who make TalentXcel's mission possible every day.
              </p>
            </div>

            {/* Department Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {departments.map((dept) => (
                <Badge
                  key={dept}
                  variant={dept === "All" ? "default" : "secondary"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {dept}
                </Badge>
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/10 group-hover:border-primary/30 transition-colors"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{member.name}</h3>
                      <p className="text-primary text-sm font-medium mb-1">{member.role}</p>
                      <Badge variant="outline" className="text-xs mb-3">{member.department}</Badge>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {member.bio}
                      </p>
                      <a
                        href={member.linkedin}
                        className="inline-flex items-center text-primary hover:text-primary-hover text-sm"
                      >
                        <Linkedin className="h-3 w-3 mr-1" />
                        Connect
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Users className="h-16 w-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Want to Join Our Team?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              We're always looking for passionate individuals who want to make a 
              difference in the world of talent and career development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                View Open Positions
              </Button>
              <Button size="lg" variant="corporate">
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

export default Team;