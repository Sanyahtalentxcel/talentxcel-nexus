import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Clock, 
  Users, 
  Briefcase, 
  ArrowRight, 
  Search, 
  CheckCircle2, 
  Mail, 
  ExternalLink,
  ShieldCheck,
  FileCheck2,
  Sparkles,
  Info
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import modernWorkspace from "@/assets/modern-workspace.jpg";
import trainingSession from "@/assets/training-session.jpg";

const Careers = () => {
  const careerPillars = [
    {
      title: "Practitioner Ownership",
      desc: "Work on genuine client challenges, production cloud architectures, and modern AI deployments with real operational responsibility.",
    },
    {
      title: "Integrated Capability",
      desc: "Cross-functional exposure spanning enterprise software engineering, specialized technical staffing, and corporate learning academies.",
    },
    {
      title: "Merit-Based Growth",
      desc: "Clear career roadmaps focused on technical mastery, delivery excellence, and transparent professional advancement.",
    },
    {
      title: "Learning & Upward Mobility",
      desc: "Continuous technical upskilling with direct access to our internal bootcamps and live-project labs.",
    },
  ];

  const focusRoles = [
    {
      id: "tech-recruiter",
      title: "Technical Recruitment Specialist",
      department: "Talent Solutions Practice",
      location: "Noida Sector 96 / Hybrid",
      type: "Full-Time",
      experience: "2–4 Years",
      skills: ["IT Sourcing", "Architect-Level Screening", "Technical Vetting", "Client Coordination"],
      description: "Manage end-to-end recruitment pipelines for enterprise clients across software engineering, cloud DevOps, and AI/ML specializations.",
    },
    {
      id: "fullstack-eng",
      title: "Full-Stack Software Engineer (React / Node.js)",
      department: "Technology & AI Practice",
      location: "Noida Sector 96 / Hybrid",
      type: "Full-Time",
      experience: "2–5 Years",
      skills: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS"],
      description: "Design and build production web applications, automated workflow engines, and enterprise integrations powering the TalentXcel ecosystem.",
    },
    {
      id: "ai-engineer",
      title: "Applied AI / Python Software Engineer",
      department: "Technology & AI Practice",
      location: "Noida Sector 96 / Hybrid",
      type: "Full-Time",
      experience: "2–5 Years",
      skills: ["Python", "FastAPI", "PyTorch", "LangChain / RAG", "Vector DBs"],
      description: "Develop enterprise retrieval-augmented generation (RAG) pipelines, intelligent document parsers, and custom model integrations.",
    },
    {
      id: "campus-alliances",
      title: "Campus Relations & Institutional Alliances Manager",
      department: "Academies & University MoUs",
      location: "Delhi-NCR / Regional Travel",
      type: "Full-Time",
      experience: "2–5 Years",
      skills: ["University MoUs", "Placement Directorate Relations", "Campus Hackathons", "FDPs"],
      description: "Cultivate institutional partnerships with engineering universities and colleges, coordinating employability tracks and campus hiring drives.",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Careers & Professional Opportunities | TalentXcel Corporate</title>
        <meta
          name="description"
          content="Explore genuine career opportunities and technical talent pipelines at TalentXcel Services Private Limited. Join our software engineering, staffing, and academy practices."
        />
        <meta
          name="keywords"
          content="TalentXcel careers, software engineering jobs Noida, IT recruitment jobs Noida, tech staffing careers, campus manager jobs"
        />
        <link rel="canonical" href="https://talentxcel.co.in/careers" />
      </Helmet>
      
      <Navbar />

      <main className="flex-1 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 6.3 Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/20">
              <Briefcase className="h-4 w-4" /> Careers &amp; Team Culture
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground leading-[1.15]">
              Build Your Career with <br className="hidden sm:inline" />
              <span className="bg-gradient-primary bg-clip-text text-transparent">TalentXcel</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
              We bring together technology engineering, enterprise workforce solutions, and continuous learning. Explore active focus openings across our practices or submit your credentials to our corporate talent bench.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-medium" asChild>
                <a href="#openings">Explore Active Openings <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a 
                  href="https://talentxcel.in/?utm_source=talentxcel_corp&utm_medium=referral&utm_campaign=careers_job_board" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span>TalentXcel Candidate Job Board</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* 6.1 Why Work with TalentXcel */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-3 tracking-tight text-foreground">Our Workplace Culture</h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                An environment designed for engineers, recruiters, and educators who value practical execution and ethical stewardship.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {careerPillars.map((p, index) => (
                <Card key={index} className="p-6 border-border/70 hover:shadow-soft transition-all rounded-2xl bg-card">
                  <div className="p-2.5 bg-primary/10 rounded-xl w-fit mb-4">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-base mb-2">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* 6.1 Active Focus Openings */}
          <div id="openings" className="mb-20 scroll-mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 pb-6 border-b border-border/60">
              <div>
                <Badge variant="outline" className="text-xs mb-2 bg-primary/5 text-primary border-primary/20">
                  Verified Requisitions
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">Active Focus Openings</h2>
                <p className="text-muted-foreground text-sm mt-1">
                  Verified hiring requisitions currently accepting applications at our Noida headquarters.
                </p>
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground bg-muted/40 p-3 rounded-xl border border-border/60">
                Direct resume submissions: <a href="mailto:careers@talentxcel.co.in" className="text-primary font-semibold hover:underline">careers@talentxcel.co.in</a>
              </div>
            </div>

            <div className="grid gap-6">
              {focusRoles.map((role) => (
                <Card key={role.id} className="p-6 lg:p-8 border-border/70 hover:shadow-medium transition-all rounded-2xl bg-card">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="space-y-3 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-bold text-foreground">{role.title}</h3>
                        <Badge variant="secondary" className="text-xs">{role.experience}</Badge>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5 font-medium text-foreground">
                          <Briefcase className="h-3.5 w-3.5 text-primary" /> {role.department}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-primary" /> {role.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 text-primary" /> {role.type}
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {role.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {role.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="text-xs bg-muted px-2.5 py-1 rounded-md text-foreground font-medium border border-border/50">
                            {skill}
                          </span>
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
                        <a 
                          href="https://talentxcel.in/?utm_source=talentxcel_corp&utm_medium=referral&utm_campaign=careers_role_card" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          View on Portal <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* General Profile Submission Box */}
            <div className="mt-12 p-8 bg-muted/30 rounded-3xl border border-border/70 text-center max-w-3xl mx-auto shadow-soft">
              <h3 className="font-bold text-xl text-foreground mb-2">Don't see your specific role above?</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed max-w-xl mx-auto">
                We are always interested in connecting with talented software engineers, technical recruiters, and educational program managers. Share your profile for future opportunities.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button asChild>
                  <a href="mailto:careers@talentxcel.co.in?subject=General%20Candidate%20Profile%20Submission">
                    Submit Your Profile to Talent Desk <Mail className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact">Contact Corporate Office</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* 6.1 Application Process & Candidate Privacy Information */}
          <div className="mb-20 bg-card rounded-3xl p-8 sm:p-12 border border-border/70 shadow-soft">
            <div className="max-w-2xl mb-8">
              <h2 className="text-2xl font-bold mb-2 text-foreground">Application Process &amp; Candidate Privacy</h2>
              <p className="text-muted-foreground text-sm">
                Transparent evaluation standards and statutory data protection for all prospective team members.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="p-5 bg-muted/20 rounded-2xl border border-border/60">
                <div className="text-xs font-bold text-primary mb-1">Step 01. Review</div>
                <h4 className="font-bold text-sm text-foreground mb-2">Profile &amp; Code Review</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Submissions are reviewed directly by practicing team leads and software architects—never discarded by blunt automated filters.
                </p>
              </div>
              <div className="p-5 bg-muted/20 rounded-2xl border border-border/60">
                <div className="text-xs font-bold text-primary mb-1">Step 02. Technical Dialogue</div>
                <h4 className="font-bold text-sm text-foreground mb-2">Practical Assessment</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  A collaborative 45-minute technical conversation focusing on real-world system debugging, architecture trade-offs, and culture.
                </p>
              </div>
              <div className="p-5 bg-muted/20 rounded-2xl border border-border/60">
                <div className="text-xs font-bold text-primary mb-1">Step 03. Offer &amp; Onboard</div>
                <h4 className="font-bold text-sm text-foreground mb-2">Transparent Offer</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Clear, formalized offer with competitive compensation, professional growth support, and structured onboarding.
                </p>
              </div>
            </div>

            {/* Candidate Privacy Notice under DPDP Act */}
            <div className="p-4 bg-muted/40 rounded-xl border border-border/60 flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="text-xs text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Candidate Data Privacy Notice:</strong> In compliance with the Digital Personal Data Protection Act, 2023 (DPDP Act, India), your resume, portfolio, and contact details are collected strictly for evaluating employment suitability with TalentXcel Services Private Limited. Your data is never sold, shared with unauthorized third parties, or retained beyond the necessary hiring evaluation lifecycle without affirmative consent.
              </div>
            </div>
          </div>

          {/* Genuine Workspace Context */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-3xl overflow-hidden shadow-medium border border-border/60 aspect-[16/10]">
              <img
                src={modernWorkspace}
                alt="TalentXcel Professional Workspace Environment"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-medium border border-border/60 aspect-[16/10]">
              <img
                src={trainingSession}
                alt="TalentXcel Training & Professional Development"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;