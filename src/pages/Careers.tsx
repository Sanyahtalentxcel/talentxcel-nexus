import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Briefcase, ArrowRight, Search, Filter } from "lucide-react";
import { Helmet } from "react-helmet-async";
import teamSuccess from "@/assets/team-success.jpg";
import modernWorkspace from "@/assets/modern-workspace.jpg";
import trainingSession from "@/assets/training-session.jpg";

const Careers = () => {
  const jobOpenings = [
    {
      title: "HR Manager",
      department: "Human Resources",
      location: "Noida, India",
      type: "Full-time",
      experience: "4-6 years",
      skills: ["Talent Acquisition", "Employee Relations", "HRIS"],
      description: "Lead our human resources initiatives including talent acquisition, employee engagement, performance management, and organizational development. Drive HR strategy to support business growth.",
      posted: "2 days ago",
      responsibilities: [
        "Develop and implement HR strategies and initiatives aligned with overall business strategy",
        "Manage the recruitment and selection process",
        "Support current and future business needs through development, engagement, motivation and preservation of human capital",
        "Develop and monitor overall HR strategies, systems, tactics and procedures across the organization",
        "Nurture a positive working environment",
        "Oversee and manage a performance appraisal system that drives high performance"
      ],
      requirements: [
        "Proven working experience as HR Manager or other HR Executive",
        "People-oriented and results-driven",
        "Demonstrable experience with Human Resources metrics",
        "Knowledge of HR systems and databases",
        "In-depth knowledge of labor law and HR best practices",
        "Degree in Human Resources or related field"
      ]
    },
    {
      title: "Campus Manager",
      department: "Operations",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "3-5 years",
      skills: ["Campus Relations", "Student Engagement", "Event Management"],
      description: "Build and maintain relationships with top universities and educational institutions. Drive campus recruitment initiatives and manage internship programs to attract fresh talent.",
      posted: "1 day ago",
      responsibilities: [
        "Develop and maintain relationships with universities, colleges, and educational institutions",
        "Organize campus recruitment drives and job fairs",
        "Manage internship programs and student engagement initiatives",
        "Coordinate with academic institutions for collaboration opportunities",
        "Represent Talentxcel at various campus events and career fairs",
        "Build talent pipeline through campus partnerships"
      ],
      requirements: [
        "Experience in campus recruitment or educational partnerships",
        "Strong communication and relationship-building skills",
        "Event management and coordination experience",
        "Understanding of academic calendar and campus dynamics",
        "Bachelor's degree in relevant field",
        "Willingness to travel for campus visits"
      ]
    },
    {
      title: "Corporate Sales Executive",
      department: "Sales",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "2-4 years",
      skills: ["B2B Sales", "Client Relationship", "Sales Strategy"],
      description: "Drive revenue growth by acquiring new enterprise clients and expanding relationships with existing accounts. Focus on selling our comprehensive talent management solutions to corporations.",
      posted: "3 days ago",
      responsibilities: [
        "Identify and pursue new business opportunities with corporate clients",
        "Develop and execute sales strategies to meet revenue targets",
        "Build and maintain strong relationships with key decision makers",
        "Present Talentxcel solutions to prospective clients",
        "Negotiate contracts and close deals",
        "Collaborate with internal teams to ensure client success"
      ],
      requirements: [
        "Proven track record in B2B sales, preferably in HR/talent management solutions",
        "Strong communication and presentation skills",
        "Experience with CRM systems and sales processes",
        "Understanding of corporate hiring needs",
        "Bachelor's degree in Business or related field",
        "Target-driven mindset with ability to work independently"
      ]
    },
    {
      title: "Admin Executive",
      department: "Administration",
      location: "Noida, India",
      type: "Full-time",
      experience: "2-3 years",
      skills: ["Office Management", "Coordination", "Documentation"],
      description: "Manage day-to-day administrative operations ensuring smooth functioning of office activities. Handle office management, vendor coordination, and administrative support to various departments.",
      posted: "1 week ago",
      responsibilities: [
        "Manage daily office operations and administrative tasks",
        "Coordinate with vendors and service providers",
        "Maintain office supplies and equipment",
        "Handle documentation and filing systems",
        "Support various departments with administrative needs",
        "Manage office facilities and ensure proper maintenance"
      ],
      requirements: [
        "Experience in office administration or similar role",
        "Strong organizational and multitasking skills",
        "Proficiency in MS Office suite",
        "Good communication skills",
        "Attention to detail and problem-solving abilities",
        "Graduate in any discipline"
      ]
    },
    {
      title: "Finance Manager",
      department: "Finance",
      location: "Noida, India",
      type: "Full-time",
      experience: "5-7 years",
      skills: ["Financial Planning", "Budget Management", "Financial Analysis"],
      description: "Lead financial planning, analysis, and reporting functions. Manage budgets, financial forecasting, and ensure compliance with financial regulations while supporting business growth initiatives.",
      posted: "4 days ago",
      responsibilities: [
        "Prepare and analyze financial statements and reports",
        "Manage budgeting and forecasting processes",
        "Ensure compliance with financial regulations and standards",
        "Oversee cash flow management and financial planning",
        "Support strategic decision-making with financial insights",
        "Manage relationships with banks, auditors, and financial institutions"
      ],
      requirements: [
        "CA/CMA qualification or MBA in Finance",
        "Strong experience in financial management and analysis",
        "Knowledge of accounting software and ERP systems",
        "Understanding of taxation and regulatory compliance",
        "Strong analytical and problem-solving skills",
        "Experience in startup or growing company environment preferred"
      ]
    },
    {
      title: "Sales Representative",
      department: "Sales",
      location: "Delhi NCR",
      type: "Full-time",
      experience: "1-3 years",
      skills: ["Sales", "Customer Relations", "Lead Generation"],
      description: "Generate leads and convert prospects into clients for our talent management services. Focus on building relationships with small to medium enterprises and growing our customer base.",
      posted: "5 days ago",
      responsibilities: [
        "Generate leads through various channels including cold calling, networking, and referrals",
        "Conduct product demonstrations and presentations to potential clients",
        "Manage sales pipeline and follow up with prospects",
        "Achieve monthly and quarterly sales targets",
        "Build and maintain customer relationships",
        "Provide feedback to product and marketing teams"
      ],
      requirements: [
        "Experience in sales or business development",
        "Strong communication and interpersonal skills",
        "Self-motivated with a results-driven approach",
        "Ability to work independently and as part of a team",
        "Knowledge of sales processes and CRM systems",
        "Bachelor's degree preferred"
      ]
    },
    {
      title: "Marketing Executive",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      experience: "2-4 years",
      skills: ["Digital Marketing", "Content Marketing", "Brand Management"],
      description: "Execute marketing campaigns across digital channels to increase brand awareness and generate leads. Manage content creation, social media, and marketing analytics to drive growth.",
      posted: "6 days ago",
      responsibilities: [
        "Plan and execute digital marketing campaigns across various channels",
        "Create engaging content for website, social media, and marketing materials",
        "Manage social media accounts and online community engagement",
        "Analyze marketing performance and optimize campaigns",
        "Coordinate with design and content teams",
        "Support brand building and awareness initiatives"
      ],
      requirements: [
        "Experience in digital marketing and campaign management",
        "Knowledge of marketing tools and analytics platforms",
        "Strong content creation and copywriting skills",
        "Understanding of SEO, SEM, and social media marketing",
        "Creative thinking and problem-solving abilities",
        "Bachelor's degree in Marketing or related field"
      ]
    },
    {
      title: "Social Media Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      experience: "2-4 years",
      skills: ["Social Media Marketing", "Content Strategy", "Community Management"],
      description: "Develop and execute social media strategy to build brand presence and engage with our community. Create compelling content and manage our social media platforms to drive engagement and growth.",
      posted: "1 week ago",
      responsibilities: [
        "Develop and implement comprehensive social media strategies",
        "Create and curate engaging content for all social media platforms",
        "Manage day-to-day social media activities and community engagement",
        "Monitor social media trends and competitor activities",
        "Analyze social media metrics and prepare performance reports",
        "Collaborate with marketing team on integrated campaigns"
      ],
      requirements: [
        "Proven experience in social media management and marketing",
        "Strong understanding of all major social media platforms",
        "Excellent content creation and storytelling skills",
        "Knowledge of social media analytics tools",
        "Creative mindset with attention to detail",
        "Bachelor's degree in Marketing, Communications, or related field"
      ]
    },
    {
      title: "Customer Service Representative",
      department: "Customer Support",
      location: "Noida, India",
      type: "Full-time",
      experience: "1-2 years",
      skills: ["Customer Support", "Communication", "Problem Solving"],
      description: "Provide exceptional customer support to our users through various channels. Handle inquiries, resolve issues, and ensure customer satisfaction while maintaining high service standards.",
      posted: "3 days ago",
      responsibilities: [
        "Respond to customer inquiries via phone, email, and chat",
        "Resolve customer issues and complaints in a timely manner",
        "Provide information about products and services",
        "Maintain accurate records of customer interactions",
        "Escalate complex issues to appropriate teams",
        "Contribute to customer satisfaction and retention efforts"
      ],
      requirements: [
        "Excellent communication skills in English and Hindi",
        "Customer service experience preferred",
        "Strong problem-solving and multitasking abilities",
        "Patience and empathy in dealing with customers",
        "Basic computer skills and familiarity with support tools",
        "High school diploma or equivalent"
      ]
    },
    {
      title: "Career Coach",
      department: "Services",
      location: "Remote",
      type: "Full-time",
      experience: "3-5 years",
      skills: ["Career Counseling", "Coaching", "Psychology"],
      description: "Provide career guidance and coaching to job seekers and professionals. Help individuals identify career paths, develop skills, and achieve their professional goals through personalized coaching sessions.",
      posted: "2 days ago",
      responsibilities: [
        "Conduct one-on-one career coaching sessions with clients",
        "Assess client strengths, interests, and career goals",
        "Develop personalized career development plans",
        "Provide guidance on job search strategies and interview preparation",
        "Help clients build professional networks and personal branding",
        "Track client progress and success metrics"
      ],
      requirements: [
        "Certification in career coaching or counseling",
        "Experience in career guidance or human resources",
        "Strong interpersonal and communication skills",
        "Understanding of job market trends and career development",
        "Empathy and ability to motivate others",
        "Bachelor's degree in Psychology, HR, or related field"
      ]
    },
    {
      title: "Resume Writing Specialist",
      department: "Services",
      location: "Remote",
      type: "Full-time",
      experience: "2-3 years",
      skills: ["Resume Writing", "Content Writing", "Career Services"],
      description: "Create compelling resumes and professional documents for job seekers. Provide resume writing, LinkedIn optimization, and career document services to help clients present their best professional image.",
      posted: "1 day ago",
      responsibilities: [
        "Write and edit professional resumes, cover letters, and LinkedIn profiles",
        "Conduct client consultations to understand career goals and background",
        "Optimize resumes for ATS systems and industry standards",
        "Provide guidance on personal branding and professional presentation",
        "Stay updated with resume trends and best practices",
        "Maintain high quality standards and quick turnaround times"
      ],
      requirements: [
        "Proven experience in professional writing and resume creation",
        "Strong understanding of various industries and job markets",
        "Excellent writing and editing skills",
        "Knowledge of ATS systems and keyword optimization",
        "Attention to detail and ability to work with deadlines",
        "Bachelor's degree in English, Communications, or related field"
      ]
    },
    {
      title: "Marketing Intern",
      department: "Marketing",
      location: "Noida, India",
      type: "Internship",
      experience: "0-1 years",
      skills: ["Social Media", "Content Creation", "Market Research"],
      description: "Join our marketing team as an intern to gain hands-on experience in digital marketing, content creation, and brand building. Perfect opportunity for students and recent graduates to kickstart their marketing career.",
      posted: "1 week ago",
      responsibilities: [
        "Assist with social media content creation and scheduling",
        "Support marketing campaigns and promotional activities",
        "Conduct market research and competitor analysis",
        "Help with event planning and coordination",
        "Create marketing materials and presentations",
        "Learn and apply digital marketing best practices"
      ],
      requirements: [
        "Currently pursuing or recently completed degree in Marketing, Communications, or related field",
        "Basic understanding of social media platforms",
        "Strong written communication skills",
        "Creative thinking and eagerness to learn",
        "Proficiency in MS Office suite",
        "Enthusiastic and proactive attitude"
      ]
    }
  ];

  const departments = ["All", "Human Resources", "Operations", "Sales", "Administration", "Finance", "Marketing", "Customer Support", "Services"];
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
        <Helmet>
          <title>Careers at Talentxcel - Join India's AI-First Talent Platform | HR, Sales, Tech Jobs | Noida</title>
          <meta name="description" content="Explore careers at Talentxcel: HR Manager, Campus Manager, Sales Executive, Finance Manager, Marketing, Customer Service, Career Coach positions. Founded 2024 | Noida, Bangalore, Mumbai, Remote. Join 5K+ users revolution. Apply today on TalentXcel.in/job" />
          <meta name="keywords" content="Talentxcel careers, HR manager jobs, campus manager, corporate sales, admin executive, finance manager, marketing jobs, social media manager, customer service, career coach, resume specialist, internships, Noida jobs, Bangalore jobs, Mumbai jobs, remote jobs, startup careers" />
          <link rel="canonical" href="https://talentxcel.co.in/careers" />
          
          {/* Open Graph */}
          <meta property="og:title" content="Careers at Talentxcel - Join India's AI Talent Platform" />
          <meta property="og:description" content="Hiring across HR, Sales, Tech, Marketing. Noida, Bangalore, Mumbai, Remote. Join our growth story." />
          <meta property="og:url" content="https://talentxcel.co.in/careers" />
          <meta property="og:type" content="website" />
          
          {/* Twitter */}
          <meta name="twitter:title" content="Careers at Talentxcel" />
          <meta name="twitter:description" content="Join India's AI-first talent platform. Multiple openings across departments." />
          
          {/* Structured Data - JobPosting */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JobPosting",
              "title": "Multiple Positions Available at Talentxcel",
              "description": "Join Talentxcel's mission to transform careers. Multiple openings including HR Manager, Campus Manager, Sales Executive, and more",
              "hiringOrganization": {
                "@type": "Organization",
                "name": "Talentxcel",
                "sameAs": "https://talentxcel.co.in",
                "logo": "https://talentxcel.co.in/lovable-uploads/5b681ba5-58bf-4aae-8bef-3ba691eef586.png"
              },
              "jobLocation": [
                {
                  "@type": "Place",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Noida",
                    "addressRegion": "Uttar Pradesh",
                    "addressCountry": "India"
                  }
                },
                {
                  "@type": "Place",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Bangalore",
                    "addressRegion": "Karnataka",
                    "addressCountry": "India"
                  }
                },
                {
                  "@type": "Place",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Mumbai",
                    "addressRegion": "Maharashtra",
                    "addressCountry": "India"
                  }
                }
              ],
              "employmentType": ["FULL_TIME", "INTERN"],
              "datePosted": "2025-01-15",
              "validThrough": "2025-12-31",
              "applicationContact": {
                "@type": "ContactPoint",
                "url": "https://talentxcel.in/job",
                "email": "careers@talentxcel.co.in"
              },
              "industry": "Human Resources and Talent Management"
            })}
          </script>
        </Helmet>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(214,211,209,0.1),transparent_50%)]" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Join <span className="bg-gradient-primary bg-clip-text text-transparent">Talentxcel</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Be part of a team that's transforming careers and empowering talent worldwide. 
                  Find your next opportunity to make a meaningful impact.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="platform" asChild>
                    <a href="https://talentxcel.in/jobs" target="_blank" rel="noopener noreferrer">View All Positions</a>
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn About Our Culture
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-large">
                  <img 
                    src={teamSuccess} 
                    alt="Team Success at Talentxcel"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">Join Our Success Story</h3>
                    <p className="text-sm opacity-90">Building the future of talent together</p>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
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
                      <Button 
                        variant="outline" 
                        className="group w-full lg:w-auto"
                        onClick={() => window.open('https://talentxcel.in/jobs', '_blank')}
                      >
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

        {/* Work Environment Visual */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 mb-20">
              <div className="relative group">
                <div className="rounded-3xl overflow-hidden shadow-glass hover:shadow-large transition-all duration-500">
                  <img 
                    src={modernWorkspace} 
                    alt="Modern Office Environment"
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">Modern Workspace</h3>
                    <p className="text-sm opacity-90">State-of-the-art facilities designed for collaboration and innovation</p>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="rounded-3xl overflow-hidden shadow-glass hover:shadow-large transition-all duration-500">
                  <img 
                    src={trainingSession} 
                    alt="Professional Development"
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
                    <p className="text-sm opacity-90">Professional development opportunities and skill enhancement programs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-muted/30">
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
              <Button size="lg" variant="secondary" asChild>
                <a href="https://talentxcel.in/jobs" target="_blank" rel="noopener noreferrer">Browse All Jobs</a>
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