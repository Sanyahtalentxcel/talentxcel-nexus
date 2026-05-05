import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Code2,
  Bot,
  Link2,
  Globe2,
  Cpu,
  MessageSquare,
  FileText,
  Rocket,
  Building2,
  GraduationCap,
  UserSearch,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const capabilities = [
  {
    icon: Code2,
    title: "Software Development",
    tagline: "We don't just build software. We build scalable digital infrastructure.",
    items: ["Custom SaaS Platforms", "Web & Mobile Apps", "API & Backend Systems", "Enterprise Systems"],
    accent: "primary",
  },
  {
    icon: Bot,
    title: "AI Solutions",
    tagline: "AI that drives decisions, not just conversations.",
    items: ["AI Chatbots (Chatr)", "AI Hiring Systems", "Resume AI + Matching Engine", "Voice AI Systems"],
    accent: "accent",
  },
  {
    icon: Link2,
    title: "Blockchain & Web3",
    tagline: "Trustless systems for the future of work.",
    items: ["Smart Contracts", "Web3 Applications", "Decentralized Identity", "Tokenized Ecosystems"],
    accent: "primary",
  },
  {
    icon: Globe2,
    title: "Talent Infrastructure",
    tagline: "From talent discovery to deployment — fully automated.",
    items: ["AI Job Matching", "Reverse Hiring", "Global Talent Pool", "Workforce Scaling"],
    accent: "accent",
  },
];

const products = [
  {
    icon: Cpu,
    name: "TalentXcel Platform",
    desc: "AI hiring, reverse job search, and career tools.",
    href: "https://talentxcel.in",
  },
  {
    icon: MessageSquare,
    name: "Chatr",
    desc: "Voice AI, real-time chat, and AI assistants.",
    href: "https://chatr.chat",
    chatr: true,
  },
  {
    icon: FileText,
    name: "Resume + Career AI",
    desc: "Resume builder, mock interviews, skill gap analysis.",
    href: "https://talentxcel.net",
  },
];

const useCases = [
  { icon: Rocket, title: "Startups", desc: "MVP build & rapid scaling" },
  { icon: Building2, title: "Enterprises", desc: "AI transformation at scale" },
  { icon: GraduationCap, title: "Universities", desc: "Talent pipeline programs" },
  { icon: UserSearch, title: "Recruiters", desc: "Quality, AI-matched hiring" },
];

const comparison = [
  { trad: "Resume-based", us: "Skill + AI-based" },
  { trad: "Manual screening", us: "Automated matching" },
  { trad: "Job search", us: "Reverse hiring" },
  { trad: "Static platforms", us: "Dynamic ecosystem" },
];

export const CoreCapabilities = () => (
  <section className="py-16 lg:py-20 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-4">
          <Sparkles className="h-3 w-3" /> Core Capabilities
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold mb-3 tracking-tight">
          AI-powered infrastructure for modern businesses
        </h2>
        <p className="text-muted-foreground">
          Software, AI, Blockchain & Talent — engineered as one integrated stack.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {capabilities.map((c) => (
          <div
            key={c.title}
            className="group bg-card border border-border/60 rounded-2xl p-8 hover:shadow-large hover:-translate-y-1 transition-all duration-300"
          >
            <div className={`inline-flex p-3 rounded-xl mb-5 ${c.accent === "accent" ? "bg-accent/10" : "bg-primary/10"}`}>
              <c.icon className={`h-6 w-6 ${c.accent === "accent" ? "text-accent" : "text-primary"}`} />
            </div>
            <h3 className="text-xl font-bold mb-2">{c.title}</h3>
            <p className="text-sm text-muted-foreground italic mb-5">"{c.tagline}"</p>
            <ul className="space-y-2">
              {c.items.map((i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className={`h-4 w-4 flex-shrink-0 ${c.accent === "accent" ? "text-accent" : "text-primary"}`} />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
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
        <h2 className="text-3xl lg:text-4xl font-bold mb-3 tracking-tight">Products Ecosystem</h2>
        <p className="text-muted-foreground">An integrated ecosystem powering careers and companies.</p>
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
            <h3 className="text-lg font-bold mb-2">{p.name}</h3>
            <p className="text-sm text-muted-foreground mb-5 flex-1">{p.desc}</p>
            <Button variant={p.chatr ? "chatr" : "outline"} size="sm" asChild>
              <a href={p.href} target="_blank" rel="noopener noreferrer">
                Explore <ArrowRight className="h-3 w-3" />
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
            Build Real Products, Not Just Skills
          </h2>
          <p className="text-muted-foreground mb-6">
            Our internship & live-project engine puts engineers on real client work across AI, Full Stack and Blockchain — with certification and a placement pipeline.
          </p>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {["Real client projects", "AI / Full Stack / Web3 tracks", "Industry certification", "Placement pipeline"].map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>{t}</span>
              </div>
            ))}
          </div>
          <Button size="lg" asChild>
            <Link to="/careers">Join Program <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            {["AI", "Full Stack", "Blockchain", "Cloud"].map((t, i) => (
              <div
                key={t}
                className={`bg-card border border-border/60 rounded-2xl p-6 ${i % 2 ? "translate-y-6" : ""}`}
              >
                <div className="text-xs text-muted-foreground mb-1">Track</div>
                <div className="text-lg font-bold">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const EnterpriseUseCases = () => (
  <section className="py-16 lg:py-20 bg-muted/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-3 tracking-tight">Built for every stage</h2>
        <p className="text-muted-foreground">From early-stage startups to global enterprises.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {useCases.map((u) => (
          <div
            key={u.title}
            className="bg-card border border-border/60 rounded-2xl p-6 hover:shadow-medium hover:-translate-y-1 transition-all duration-300"
          >
            <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-4">
              <u.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-bold mb-1">{u.title}</h3>
            <p className="text-sm text-muted-foreground">{u.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const WhyTalentXcel = () => (
  <section className="py-16 lg:py-20 bg-background">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl lg:text-4xl font-bold mb-3 tracking-tight">Why TalentXcel</h2>
        <p className="text-muted-foreground">A different operating model for hiring & building.</p>
      </div>
      <div className="bg-card border border-border/60 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-2 bg-muted/50 text-sm font-semibold">
          <div className="p-4 border-r border-border/60">Traditional Hiring</div>
          <div className="p-4 text-primary">TalentXcel</div>
        </div>
        {comparison.map((row, i) => (
          <div key={i} className="grid grid-cols-2 border-t border-border/60 text-sm">
            <div className="p-4 border-r border-border/60 flex items-center gap-2 text-muted-foreground">
              <XCircle className="h-4 w-4 text-destructive/70" /> {row.trad}
            </div>
            <div className="p-4 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent" /> {row.us}
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
        <h2 className="text-3xl lg:text-4xl font-bold mb-3 tracking-tight">Build With Us</h2>
        <p className="text-muted-foreground">Pick the path that fits your goal.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Hire Developers", desc: "AI-vetted engineers, on-demand.", to: "/contact" },
          { title: "Build Your Startup", desc: "Product, design, AI engineering.", to: "/services" },
          { title: "Partner With Us", desc: "Enterprise & university partnerships.", to: "/contact" },
          { title: "Join as Talent", desc: "Get placed on real projects.", to: "/careers" },
        ].map((b) => (
          <Link
            key={b.title}
            to={b.to}
            className="group bg-card border border-border/60 rounded-2xl p-6 hover:shadow-medium hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <h3 className="font-bold mb-2">{b.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 flex-1">{b.desc}</p>
            <span className="inline-flex items-center text-sm text-primary font-medium">
              Get started <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
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
        Ready to build, hire, or scale?
      </h2>
      <p className="text-lg text-white/85 mb-8 max-w-2xl mx-auto">
        Join the next generation of companies running on AI-powered talent infrastructure.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button size="lg" variant="glass" asChild>
          <Link to="/contact">Get Started</Link>
        </Button>
        <Button size="lg" variant="glass" asChild>
          <Link to="/contact">Book Demo</Link>
        </Button>
        <Button size="lg" variant="glass" asChild>
          <a href="https://talentxcel.in" target="_blank" rel="noopener noreferrer">
            Explore Platform
          </a>
        </Button>
      </div>
    </div>
  </section>
);