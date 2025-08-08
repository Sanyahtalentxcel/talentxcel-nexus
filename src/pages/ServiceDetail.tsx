import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircle, ArrowRight, Building2, Users, Server, GraduationCap } from "lucide-react";
import modernWorkspace from "@/assets/modern-workspace.jpg";
import trainingSession from "@/assets/training-session.jpg";
import dataCenter from "@/assets/data-center.jpg";

const servicesData = {
  "staffing-recruitment": {
    title: "Staffing & Recruitment",
    icon: Users,
    image: modernWorkspace,
    description:
      "Comprehensive workforce solutions including contingent staffing, contract-to-hire, permanent hires, and RPO. We focus on cultural and skill-based fit across Energy, BFSI, Technology, and Healthcare.",
    features: [
      "Contingent Staffing",
      "Contract-to-Hire Solutions",
      "Permanent Placements",
      "Recruitment Process Outsourcing (RPO)",
      "Cultural & Skill-based Matching",
    ],
    industries: ["Energy", "BFSI", "Technology", "Healthcare"],
  },
  "training-education": {
    title: "Training & Education",
    icon: GraduationCap,
    image: trainingSession,
    description:
      "Tailored training programs from technical upskilling to leadership development—keeping teams competitive and future‑ready.",
    features: [
      "Technical Upskilling Programs",
      "Leadership Development",
      "Custom Training Modules",
      "Performance Assessment",
      "Certification Programs",
    ],
    industries: ["All Industries"],
  },
  "it-consulting-managed-services": {
    title: "IT Consulting & Managed Services",
    icon: Server,
    image: dataCenter,
    description:
      "Expert guidance on infrastructure, cloud migration, cybersecurity, and end‑to‑end managed IT operations with a proactive approach to minimize downtime and boost efficiency.",
    features: [
      "Infrastructure Consulting",
      "Cloud Migration Services",
      "Cybersecurity Solutions",
      "Managed IT Operations",
      "24/7 Proactive Support",
    ],
    industries: ["Technology", "BFSI", "Healthcare"],
  },
} as const;

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = slug ? (servicesData as any)[slug] : undefined;

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">The page you are looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/services">Back to Services</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{`${service.title} | Talentxcel Services`}</title>
        <meta
          name="description"
          content={`Talentxcel ${service.title} — ${service.description}`}
        />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
      </Helmet>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(214,211,209,0.1),transparent_50%)]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Building2 className="h-4 w-4" />
                <span>Talentxcel Services</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                {service.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild>
                  <Link to="/contact" className="group">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://talentxcel.in/jobs" target="_blank" rel="noopener noreferrer">
                    View Open Roles
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-large">
              <img
                src={service.image}
                alt={`${service.title} showcase image`}
                className="w-full h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </section>

        {/* Details */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <Card className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((f: string) => (
                    <div key={f} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <p className="text-muted-foreground">{f}</p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Industries We Serve</h2>
                <div className="flex flex-wrap gap-2">
                  {service.industries.map((ind: string) => (
                    <Badge key={ind} variant="secondary">{ind}</Badge>
                  ))}
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold">Why Talentxcel?</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>AI-first approach for precision and scale</li>
                  <li>Enterprise-grade delivery and SLAs</li>
                  <li>Deep domain expertise across industries</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Talk to an expert</h3>
                <p className="text-sm text-muted-foreground mb-4">Tell us about your requirements and we’ll tailor a solution.</p>
                <Button asChild className="w-full">
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
