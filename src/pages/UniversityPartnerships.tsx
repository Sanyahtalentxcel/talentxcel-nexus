import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import {
  GraduationCap,
  Building2,
  CheckCircle2,
  ArrowRight,
  Handshake,
  Award,
  BookOpen,
  Briefcase,
  Layers,
  Sparkles,
  Users2
} from "lucide-react";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import trainingSession from "@/assets/training-session.jpg";

const UniversityPartnerships = () => {
  const models = [
    {
      title: "Campus Employability & Job Readiness Track",
      scope: "Final & Pre-Final Year Engineering / MCA Students",
      desc: "Comprehensive 60-120 hour technical, algorithmic, and professional communication bootcamp preparing students to clear top enterprise hiring bars.",
      features: [
        "Data structures, algorithmic problem solving & system design basics",
        "Full-Stack Web & Cloud immersion on live production codebases",
        "Technical whiteboard practice & realistic mock interview panels",
        "Resume portfolio development & direct corporate interview pipelines"
      ]
    },
    {
      title: "Live-Project Internship Incubator",
      scope: "Semester-Long Credit-Aligned Project Track",
      desc: "Students work in managed developer pods under direct mentorship from active software engineering practitioners, delivering real software features.",
      features: [
        "Weekly Agile sprint ceremonies, Jira workflows, and code reviews",
        "Direct experience with Git, PR workflows, CI/CD, and automated testing",
        "Formal internship completion certificates and verified GitHub portfolios",
        "Direct pre-placement offer (PPO) evaluation for high performers"
      ]
    },
    {
      title: "AI & Emerging Technologies Student Academy",
      scope: "Co-Branded Campus Center of Excellence (CoE)",
      desc: "Establishing a physical or virtual AI center of excellence on campus, delivering cutting-edge curricula in Applied Generative AI, PyTorch, and Data Systems.",
      features: [
        "State-of-the-art curriculum aligned with current enterprise technology needs",
        "Access to cloud sandbox environments and modern AI development frameworks",
        "Hackathons, technical symposiums, and practitioner guest lectures",
        "Joint institutional certification co-branded with TalentXcel"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>University Partnerships & Campus Employability | TalentXcel</title>
        <meta
          name="description"
          content="Institutional MoUs and campus employability academies for engineering colleges and universities. Bridging the gap between academic syllabi and enterprise production engineering."
        />
        <meta
          name="keywords"
          content="University partnerships, campus placement training, institutional MoU engineering colleges, student internship academy, TPO partnership Noida Delhi NCR"
        />
        <link rel="canonical" href="https://talentxcel.co.in/university-partnerships" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://talentxcel.co.in"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://talentxcel.co.in/services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "University Partnerships",
                "item": "https://talentxcel.co.in/university-partnerships"
              }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOccupationalProgram",
            "@id": "https://talentxcel.co.in/university-partnerships#campus-employability",
            "name": "Campus-to-Corporate Employability & Job Readiness Program",
            "programType": "University Employability Program",
            "description": "Institutional MoUs and campus employability academies bridging the gap between theoretical academic syllabi and enterprise software production engineering.",
            "provider": {
              "@type": "Organization",
              "@id": "https://talentxcel.co.in/#organization",
              "name": "TalentXcel Services Private Limited",
              "url": "https://talentxcel.co.in"
            },
            "occupationalCategory": "Software Engineering & Technology",
            "offers": {
              "@type": "Offer",
              "category": "Institutional Partnership",
              "price": "0",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": "https://talentxcel.co.in/university-partnerships"
            }
          })}
        </script>
      </Helmet>

      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-brand-soft pt-10 pb-12 lg:pt-12 lg:pb-14 border-b border-border/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                  <Handshake className="h-3.5 w-3.5" />
                  <span>Institutional Alliances &amp; Campus MoUs</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy leading-tight tracking-tight">
                  Empowering Universities to Produce{" "}
                  <span className="text-primary block sm:inline">Day-One Billable Engineers.</span>
                </h1>

                <p className="text-base sm:text-lg text-brand-muted leading-relaxed max-w-xl">
                  TalentXcel collaborates with universities, deans, and placement directors through structured MoUs to upgrade student employability and bridge academic learning with enterprise software production.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Button size="lg" asChild className="bg-primary hover:bg-primary-hover text-white font-semibold shadow-soft">
                    <a href="#mou-form">Discuss an Institutional MoU</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-slate-300 text-brand-navy hover:bg-white">
                    <a href="#partnership-models">View Partnership Frameworks</a>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="rounded-2xl overflow-hidden shadow-large border border-border/80 bg-white">
                  <img
                    src={trainingSession}
                    alt="University Campus Training and Hackathon"
                    className="w-full h-80 sm:h-96 object-cover"
                    loading="eager"
                  />
                  <div className="p-5 bg-white border-t border-border/70">
                    <div className="text-xs font-bold uppercase text-primary tracking-wider mb-1">
                      Academic Excellence Framework
                    </div>
                    <div className="text-sm font-semibold text-brand-navy">
                      Structured Institutional MoUs with Verified Delivery Outcomes
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Models */}
        <section id="partnership-models" className="py-10 lg:py-14 bg-white border-b border-border/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight mb-3">
                Structured Institutional Partnership Models
              </h2>
              <p className="text-base text-brand-muted leading-relaxed">
                Designed to fit seamlessly into semester academic calendars and placement schedules.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {models.map((m) => (
                <div
                  key={m.title}
                  className="p-8 rounded-2xl bg-brand-soft border border-border/80 shadow-soft hover:shadow-large hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                      {m.scope}
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy mb-3">{m.title}</h3>
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-6">{m.desc}</p>

                    <div className="space-y-2.5 mb-6">
                      {m.features.map((f) => (
                        <div key={f} className="flex items-start space-x-2 text-xs sm:text-sm text-brand-navy">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/60">
                    <Button asChild variant="outline" size="sm" className="w-full border-slate-300">
                      <a href="#mou-form">Request MoU Syllabus</a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section id="mou-form" className="py-10 lg:py-14 bg-brand-soft">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <LeadCaptureForm
              initialCategory="university_partnership"
              title="Initiate a University Partnership or Campus MoU"
              subtitle="Connect directly with our Academies & Institutional Partnerships directorate."
              buttonText="Submit Partnership Inquiry"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UniversityPartnerships;
