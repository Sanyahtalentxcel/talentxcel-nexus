import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Code2,
  Users2,
  GraduationCap,
  Globe2,
  Cpu,
  MessageSquare,
  FileText,
  Rocket,
  Building2,
  UserSearch,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Briefcase
} from "lucide-react";

const capabilities = [
  {
    icon: Code2,
    title: "Technology & AI Solutions",
    tagline: "Engineering scalable software, modern AI systems & cloud foundations.",
    items: [
      "Custom Enterprise SaaS Platforms",
      "Applied AI & Process Automation",
      "Cloud Infrastructure & DevOps",
      "Architecture & Systems Modernization"
    ],
    accent: "primary",
    link: "/services/it-consulting-managed-services"
  },
  {
    icon: Users2,
    title: "Talent & Workforce Solutions",
    tagline: "Vetted engineering talent, contingent staffing & RPO at scale.",
    items: [
      "Contingent & Contract IT Staffing",
      "Executive Search & Direct Hire",
      "Recruitment Process Outsourcing (RPO)",
      "Technical Pre-Screening & Code Vetting"
    ],
    accent: "accent",
    link: "/services/staffing-recruitment"
  },
  {
    icon: GraduationCap,
    title: "Learning & Talent Development",
    tagline: "Bridging academia and enterprise production through live project tracks.",
    items: [
      "Enterprise Technical Upskilling",
      "University MoUs & Campus Academies",
      "Live-Project Internship Tracks",
      "Hands-On AI & Full-Stack Curricula"
    ],
    accent: "primary",
    link: "/services/training-education"
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Delivery & Governance",
    tagline: "Rigorous SLAs, compliance adherence & high-accountability execution.",
    items: [
      "DPDP Act & Data Privacy Adherence",
      "Strict Service Level Agreements (SLAs)",
      "Multi-Sector Delivery Experience",
      "Cross-Market Reach: India, EU, ME"
    ],
    accent: "accent",
    link: "/case-studies"
  },
];

const products = [
  {
    icon: Cpu,
    name: "TalentXcel Platform",
    domain: "talentxcel.in",
    desc: "AI talent matching, reverse candidate discovery, and direct recruitment tools.",
    href: "https://talentxcel.in",
  },
  {
    icon: MessageSquare,
    name: "CHATR Technology",
    domain: "chatr.chat",
    desc: "Conversational AI layer, real-time messaging, and voice integration infrastructure.",
    href: "https://chatr.chat",
    chatr: true,
  },
  {
    icon: FileText,
    name: "TalentXcel Learning",
    domain: "talentxcel.net",
    desc: "Curated learning tracks, resume optimization, and career readiness mentorship.",
    href: "https://talentxcel.net",
  },
];

const useCases = [
  { icon: Rocket, title: "High-Growth Startups", desc: "Rapid MVP build, AI features, and on-demand tech pods." },
  { icon: Building2, title: "Established Enterprises", desc: "Large-scale IT staffing, RPO, and cloud modernization." },
  { icon: GraduationCap, title: "Universities & Colleges", desc: "Live-project internships and campus placement pipelines." },
  { icon: UserSearch, title: "Corporate Talent Teams", desc: "Pre-screened, code-vetted engineering hires with fast turnaround." },
];

const comparison = [
  { trad: "Generic keyword resume searches", us: "Practitioner-led technical vetting & code benchmarks" },
  { trad: "Unpredictable contingent fill rates", us: "Dedicated engineering pods & SLA-backed RPO" },
  { trad: "Isolated staffing disconnected from software", us: "Integrated technology and talent capabilities" },
  { trad: "Theoretical academic education", us: "Live-project academy tracks on production codebases" },
];

export const CoreCapabilities = () => (
  <section className="py-16 lg:py-20 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="h-3.5 w-3.5" /> Three Business Pillars
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold mb-3 tracking-tight">
          Integrated Capabilities for Enterprise Scaling
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base">
          Software engineering, AI automation, and workforce solutions operating as one coherent stack.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {capabilities.map((c) => (
          <div
            key={c.title}
            className="group bg-card border border-border/60 rounded-2xl p-8 hover:shadow-large hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className={`inline-flex p-3 rounded-xl mb-5 ${c.accent === "accent" ? "bg-accent/10" : "bg-primary/10"}`}>
                <c.icon className={`h-6 w-6 ${c.accent === "accent" ? "text-accent" : "text-primary"}`} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{c.title}</h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{c.tagline}</p>
              <ul className="space-y-2.5 mb-6">
                {c.items.map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground/90">
                    <CheckCircle2 className={`h-4 w-4 flex-shrink-0 ${c.accent === "accent" ? "text-accent" : "text-primary"}`} />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <Link to={c.link} className="inline-flex items-center text-sm font-semibold text-primary hover:underline">
                Explore Detailed Pillar Solutions <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ProductsEcosystem = () => (
  <section className="py-16 lg:py-20 bg-muted/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-3 tracking-tight">The TalentXcel Product Ecosystem</h2>
        <p className="text-muted-foreground text-sm sm:text-base">
          Synergistic platforms powering corporate workforce management, career discovery, and AI communications.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p.name}
            className="bg-card border border-border/60 rounded-2xl p-6 hover:shadow-medium hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <div className={`inline-flex p-3 rounded-xl mb-4 w-fit ${p.chatr ? "bg-chatr/10" : "bg-primary/10"}`}>
              <p.icon className={`h-6 w-6 ${p.chatr ? "text-chatr" : "text-primary"}`} />
            </div>
            <div className="text-xs font-mono text-muted-foreground mb-1">{p.domain}</div>
            <h3 className="text-lg font-bold mb-2 text-foreground">{p.name}</h3>
            <p className="text-sm text-muted-foreground mb-5 flex-1 leading-relaxed">{p.desc}</p>
            <Button variant={p.chatr ? "chatr" : "outline"} size="sm" asChild>
              <a href={p.href} target="_blank" rel="noopener noreferrer">
                Explore Platform <ArrowRight className="ml-1.5 h-3 w-3" />
              </a>
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const LiveProjects = () => (
  <section className="py-16 lg:py-20 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <GraduationCap className="h-3.5 w-3.5" /> Hands-On Talent Engine
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
            Build Real Products, Not Just Theoretical Skills
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Our internship and live-project academy tracks place emerging engineers onto production software codebases across AI, Full-Stack, and Cloud architectures with direct client mentorship.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {[
              "Real client project codebases",
              "AI, Full-Stack & Cloud tracks",
              "Production code review standards",
              "Direct enterprise placement pipeline"
            ].map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm text-foreground/90">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                <span>{t}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link to="/careers">
                Explore Internship Tracks <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/partnerships">University Alliances</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { track: "Applied AI & Automation", desc: "Python, PyTorch, LLMs, Vision AI" },
            { track: "Full-Stack SaaS", desc: "React, TypeScript, Node.js, Next.js" },
            { track: "Cloud & DevOps", desc: "AWS, Docker, Kubernetes, CI/CD" },
            { track: "Talent Operations", desc: "Technical Sourcing, Vetting, RPO" },
          ].map((item, idx) => (
            <div
              key={item.track}
              className={`bg-card border border-border/60 rounded-2xl p-6 shadow-soft ${idx % 2 ? "sm:translate-y-4" : ""}`}
            >
              <div className="text-xs uppercase tracking-wider text-primary font-bold mb-1">Track 0{idx + 1}</div>
              <div className="font-bold text-foreground text-base mb-1">{item.track}</div>
              <div className="text-xs text-muted-foreground">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const EnterpriseUseCases = () => (
  <section className="py-16 lg:py-20 bg-muted/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-3 tracking-tight">Structured for Every Organizational Stage</h2>
        <p className="text-muted-foreground text-sm sm:text-base">
          From fast-scaling venture startups to regulated multinational corporations and universities.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {useCases.map((u) => (
          <div
            key={u.title}
            className="bg-card border border-border/60 rounded-2xl p-6 hover:shadow-medium hover:-translate-y-1 transition-all duration-300"
          >
            <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-4 text-primary">
              <u.icon className="h-5 w-5" />
            </div>
            <h3 className="font-bold mb-1 text-foreground">{u.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{u.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const WhyTalentXcel = () => (
  <section className="py-16 lg:py-20 bg-background">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold mb-3 tracking-tight">Why Enterprise Leaders Choose TalentXcel</h2>
        <p className="text-muted-foreground text-sm sm:text-base">
          A modern operating model built to eliminate the divide between software engineering and talent acquisition.
        </p>
      </div>

      <div className="bg-card border border-border/60 rounded-2xl overflow-hidden shadow-soft">
        <div className="grid grid-cols-2 bg-muted/60 text-sm font-semibold">
          <div className="p-4 border-r border-border/60 text-muted-foreground">Traditional Segmented Model</div>
          <div className="p-4 text-primary font-bold">The TalentXcel Integrated Model</div>
        </div>
        {comparison.map((row, i) => (
          <div key={i} className="grid grid-cols-2 border-t border-border/60 text-sm">
            <div className="p-4 border-r border-border/60 flex items-center gap-2 text-muted-foreground">
              <XCircle className="h-4 w-4 text-destructive/70 flex-shrink-0" />
              <span>{row.trad}</span>
            </div>
            <div className="p-4 flex items-center gap-2 font-medium text-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
              <span>{row.us}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const BuildWithUs = () => (
  <section className="py-16 lg:py-20 bg-muted/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-3 tracking-tight">Engage With TalentXcel</h2>
        <p className="text-muted-foreground text-sm sm:text-base">Select the pathway aligned with your strategic goals.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Enterprise Technology", desc: "Custom software, AI automation & cloud pipelines.", to: "/services" },
          { title: "Specialized Staffing", desc: "Vetted developers & executive recruitment.", to: "/contact?tab=staffing" },
          { title: "Corporate Academies", desc: "Custom employee upskilling & university MoUs.", to: "/partnerships" },
          { title: "Leadership & Case Studies", desc: "Explore our governance & client outcomes.", to: "/case-studies" },
        ].map((b) => (
          <Link
            key={b.title}
            to={b.to}
            className="group bg-card border border-border/60 rounded-2xl p-6 hover:shadow-medium hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-bold mb-2 text-foreground">{b.title}</h3>
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{b.desc}</p>
            </div>
            <span className="inline-flex items-center text-xs text-primary font-semibold">
              Explore Pathway <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export const StrongCTA = () => (
  <section className="py-20 lg:py-24 bg-gradient-hero relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_60%)]" />
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
      <h2 className="text-3xl lg:text-5xl font-bold mb-4 tracking-tight">
        Let's Build Your Next Technology or Talent Solution.
      </h2>
      <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
        Connect with our enterprise solution architects to scope dedicated engineering pods, IT staffing, or institutional partnerships.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" variant="glass" asChild>
          <Link to="/contact">Discuss an Enterprise Solution</Link>
        </Button>
        <Button size="lg" variant="glass" asChild>
          <Link to="/case-studies">Explore Case Studies</Link>
        </Button>
        <Button size="lg" variant="glass" asChild>
          <Link to="/team">Meet Leadership</Link>
        </Button>
      </div>
    </div>
  </section>
);
