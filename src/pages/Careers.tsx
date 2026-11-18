import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Briefcase, ArrowRight, Search, CheckCircle2, Mail, ExternalLink } from "lucide-react";
import { Helmet } from "react-helmet-async";
import modernWorkspace from "@/assets/modern-workspace.jpg";
import trainingSession from "@/assets/training-session.jpg";
import { Link } from "react-router-dom";

const Careers = () => {
  const careerPillars = [
    {
      title: "Real Client Engagements",
      desc: "Work on live enterprise systems, modern web architectures, and production AI applications.",
    },
    {
      title: "Cross-Disciplinary Learning",
      desc: "Bridge engineering, recruitment technology, and product management under one roof.",
    },
    {
      title: "Merit-Based Growth",
      desc: "Transparent career roadmaps with continuous mentorship from senior practitioners.",
    },
    {
      title: "Internship & Academy Tracks",
      desc: "Specialized live-project tracks designed to transition emerging engineers into full-time roles.",
    },
  ];

  const focusRoles = [
    {
      title: "Technical Recruitment Specialist",
      department: "Talent Solutions",
      location: "Noida / Hybrid",
      type: "Full-time",
      experience: "2-4 years",
      skills: ["IT Sourcing", "Candidate Screening", "Technical Vetting"],
      description: "Drive end-to-end recruitment pipelines for enterprise clients across software engineering, AI, and cloud infrastructure.",
    },
    {
      title: "Full-Stack Software Engineer",
      department: "Technology & AI",
      location: "Noida / Remote",
      type: "Full-time",
      experience: "2-5 years",
      skills: ["React", "TypeScript", "Node.js", "Cloud Services"],
      description: "Build robust SaaS products, customer portals, and internal automated workforce engines powering the TalentXcel ecosystem.",
    },
    {
      title: "Campus & Academic Relations Lead",
      department: "Learning & Academies",
      location: "Delhi NCR / Travel",
      type: "Full-time",
      experience: "2-4 years",
      skills: ["University Partnerships", "Internship Drives", "Event Coordination"],
      description: "Manage relationships with engineering colleges and universities, coordinating hackathons, training tracks, and campus recruitment.",
    },
    {
      title: "Enterprise Solutions Account Executive",
      department: "Business Development",
      location: "Noida / Bangalore / Hybrid",
      type: "Full-time",
      experience: "3-6 years",
      skills: ["B2B Sales", "Staffing Solutions", "IT Services"],
      description: "Engage enterprise leadership across Energy, BFSI, and Technology sectors to scope corporate staffing and engineering services.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Careers & Opportunities | TalentXcel</title>
        <meta
          name="description"
          content="Explore career opportunities and internship tracks at TalentXcel. Join an integrated technology and talent solutions team building the future of work."
        />
        <meta
          name="keywords"
          content="TalentXcel careers, IT jobs Noida, tech staffing careers, software engineering jobs, campus manager jobs, tech internships"
        />
        <link rel="canonical" href="https://talentxcel.co.in/careers" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Careers & Opportunities | TalentXcel" />
        <meta
          property="og:description"
          content="Join an integrated technology and talent solutions team. Explore active openings in engineering, recruitment, and campus partnerships."
        />
        <meta property="og:url" content="https://talentxcel.co.in/careers" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Careers & Opportunities | TalentXcel" />
        <meta
          name="twitter:description"
          content="Explore career and internship pathways with TalentXcel."
        />
        
        {/* Clean Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Careers at TalentXcel",
            "url": "https://talentxcel.co.in/careers",
            "description": "Career opportunities, internship pipelines, and recruitment pathways at TalentXcel.",
            "publisher": {
              "@type": "Organization",
              "name": "TalentXcel",
              "url": "https://talentxcel.co.in"
            }
          })}
        </script>
      </Helmet>
      
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30 py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                <Briefcase className="h-4 w-4" /> Career Opportunities
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
                Build Your Future with <span className="bg-gradient-primary bg-clip-text text-transparent">TalentXcel</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                We are building the future of integrated technology delivery and workforce mobility. 
                Whether you are an experienced technologist, a talent acquisition specialist, or an aspiring intern, find your place in our growing team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href="#openings">View Open Positions</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://talentxcel.in/jobs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <span>TalentXcel Job Portal</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-16 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-3 tracking-tight">Why Build Your Career at TalentXcel</h2>
              <p className="text-muted-foreground">
                A work environment designed around practitioner ownership, skill acceleration, and genuine teamwork.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {careerPillars.map((p, index) => (
                <Card key={index} className="p-6 border-border/60 hover:shadow-soft transition-all">
                  <div className="p-2.5 bg-primary/10 rounded-xl w-fit mb-4">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-base mb-2">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Focus Openings */}
        <section id="openings" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-2">Active Focus Openings</h2>
                <p className="text-muted-foreground">
                  Current talent priorities across our technology, workforce, and campus practices.
                </p>
              </div>
              <div className="text-sm text-muted-foreground">
                Direct resumes to: <a href="mailto:careers@talentxcel.co.in" className="text-primary font-semibold hover:underline">careers@talentxcel.co.in</a>
              </div>
            </div>

            <div className="grid gap-6">
              {focusRoles.map((role, index) => (
                <Card key={index} className="p-6 lg:p-8 border-border/60 hover:shadow-medium transition-all">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="space-y-3 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-bold text-foreground">{role.title}</h3>
                        <Badge variant="outline" className="text-xs">{role.experience}</Badge>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-3.5 w-3.5" /> {role.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" /> {role.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" /> {role.type}
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {role.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {role.skills.map((skill, sIdx) => (
                          <Badge key={sIdx} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex-shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
                      <Button asChild>
                        <a href={`mailto:careers@talentxcel.co.in?subject=Application:%20${encodeURIComponent(role.title)}`}>
                          Apply via Email <Mail className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href="https://talentxcel.in/jobs" target="_blank" rel="noopener noreferrer">
                          Apply on Portal
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-8 bg-muted/30 rounded-2xl border border-border/60 text-center max-w-2xl mx-auto">
              <h3 className="font-bold text-lg mb-2">Looking for Internship & Early Career Programs?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                We regularly induct emerging talent into our Live Project and Engineering Academy tracks across Full-Stack, AI, and Cloud development.
              </p>
              <Button variant="outline" asChild>
                <Link to="/contact">Inquire About Internship Tracks</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Work Environment */}
        <section className="py-16 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="rounded-3xl overflow-hidden shadow-large border border-border/60">
                <img
                  src={modernWorkspace}
                  alt="TalentXcel Workspace Environment"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-large border border-border/60">
                <img
                  src={trainingSession}
                  alt="TalentXcel Training & Skill Development"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
