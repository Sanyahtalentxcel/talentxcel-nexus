import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ExternalLink,
  ChevronDown,
  Cpu,
  GraduationCap,
  MessageSquare,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

const talentxcelLogo = "/talentxcel-assets/5b681ba5-58bf-4aae-8bef-3ba691eef586.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ecosystemOpen, setEcosystemOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setEcosystemOpen(false);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setEcosystemOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navigation = [
    { name: "About", href: "/about" },
    { name: "Solutions", href: "/services" },
    { name: "Leadership", href: "/team" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Partnerships", href: "/partnerships" },
    { name: "Careers", href: "/careers" },
  ];

  const ecosystemProducts = [
    {
      title: "TalentXcel Platform",
      tag: "talentxcel.in",
      desc: "AI-driven career matching & candidate discovery network.",
      href: "https://talentxcel.in",
      external: true,
      icon: Cpu,
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      title: "TalentXcel Learning",
      tag: "talentxcel.net",
      desc: "Workforce upskilling, academies & enterprise training.",
      href: "https://talentxcel.net",
      external: true,
      icon: GraduationCap,
      color: "text-amber-600",
      bg: "bg-amber-500/10",
    },
    {
      title: "CHATR Conversational AI",
      tag: "chatr.chat",
      desc: "Enterprise AI messaging & customer engagement infrastructure.",
      href: "/chatr",
      external: false,
      icon: MessageSquare,
      color: "text-emerald-600",
      bg: "bg-emerald-500/10",
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-soft border-b border-border/80"
          : "bg-white/90 backdrop-blur-md border-b border-border/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Brand Identity */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1"
              aria-label="TalentXcel Home"
            >
              <img
                className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
                src={talentxcelLogo}
                alt="TalentXcel Logo"
              />
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-brand-navy tracking-tight group-hover:text-primary transition-colors">
                  TalentXcel
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-brand-muted -mt-1 hidden sm:block">
                  Integrated Technology &amp; Talent
                </span>
              </div>
            </Link>
          </div>

          {/* Centre: Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
            {navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    active
                      ? "text-primary bg-primary/10 font-semibold shadow-xs"
                      : "text-brand-muted hover:text-brand-navy hover:bg-slate-100/70"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right: Ecosystem Access & Primary CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Ecosystem Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setEcosystemOpen(!ecosystemOpen)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setEcosystemOpen(false);
                }}
                className={`flex items-center space-x-1.5 px-3 py-2 text-sm font-medium rounded-md border border-border/70 transition-colors ${
                  ecosystemOpen
                    ? "bg-slate-100 text-brand-navy border-slate-300"
                    : "text-brand-muted hover:text-brand-navy hover:bg-slate-50"
                }`}
                aria-expanded={ecosystemOpen}
                aria-haspopup="true"
              >
                <span>Ecosystem</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    ecosystemOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {ecosystemOpen && (
                <div
                  className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-large border border-border/80 py-2 z-50 animate-in fade-in-50 zoom-in-95 duration-150"
                  role="menu"
                >
                  <div className="px-4 py-2 border-b border-border/50">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted">
                      Product Ecosystem
                    </p>
                  </div>
                  <div className="p-2 space-y-1">
                    {ecosystemProducts.map((p) => {
                      const Icon = p.icon;
                      if (p.external) {
                        return (
                          <a
                            key={p.title}
                            href={p.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                            role="menuitem"
                          >
                            <div className={`p-2 rounded-lg ${p.bg} ${p.color} mt-0.5`}>
                              <Icon className="h-4 w-4" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-semibold text-brand-navy group-hover:text-primary transition-colors">
                                  {p.title}
                                </span>
                                <ExternalLink className="h-3 w-3 text-brand-muted group-hover:text-primary transition-colors" />
                              </div>
                              <p className="text-xs text-brand-muted mt-0.5 line-clamp-1">
                                {p.desc}
                              </p>
                            </div>
                          </a>
                        );
                      }
                      return (
                        <Link
                          key={p.title}
                          to={p.href}
                          className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                          role="menuitem"
                        >
                          <div className={`p-2 rounded-lg ${p.bg} ${p.color} mt-0.5`}>
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-semibold text-brand-navy group-hover:text-primary transition-colors">
                                {p.title}
                              </span>
                              <ArrowRight className="h-3 w-3 text-brand-muted group-hover:text-primary transition-colors" />
                            </div>
                            <p className="text-xs text-brand-muted mt-0.5 line-clamp-1">
                              {p.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Contact CTA */}
            <Button
              asChild
              className="bg-primary hover:bg-primary-hover text-white font-semibold shadow-soft hover:shadow-medium transition-all px-4"
              size="sm"
            >
              <Link to="/contact">Talk to Our Team</Link>
            </Button>
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              asChild
              size="sm"
              className="bg-primary hover:bg-primary-hover text-white text-xs px-3"
            >
              <Link to="/contact">Contact</Link>
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-brand-navy hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-large animate-in slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto px-4 pt-4 pb-8 space-y-4">
            {/* Nav Links */}
            <div className="space-y-1">
              {navigation.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                      active
                        ? "text-primary bg-primary/10 font-semibold"
                        : "text-brand-navy hover:bg-slate-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Ecosystem Section */}
            <div className="pt-3 border-t border-border/70 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted px-3">
                Product Ecosystem
              </p>
              <div className="space-y-1.5">
                {ecosystemProducts.map((p) => {
                  const Icon = p.icon;
                  if (p.external) {
                    return (
                      <a
                        key={p.title}
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 border border-border/40 text-brand-navy"
                      >
                        <div className="flex items-center space-x-2.5">
                          <div className={`p-1.5 rounded-md ${p.bg} ${p.color}`}>
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <span className="text-sm font-semibold">{p.title}</span>
                            <span className="text-xs text-brand-muted block font-mono">
                              {p.tag}
                            </span>
                          </div>
                        </div>
                        <ExternalLink className="h-3.5 w-3.5 text-brand-muted" />
                      </a>
                    );
                  }
                  return (
                    <Link
                      key={p.title}
                      to={p.href}
                      className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 border border-border/40 text-brand-navy"
                    >
                      <div className="flex items-center space-x-2.5">
                        <div className={`p-1.5 rounded-md ${p.bg} ${p.color}`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <span className="text-sm font-semibold">{p.title}</span>
                          <span className="text-xs text-brand-muted block font-mono">
                            {p.tag}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="h-3.5 w-3.5 text-brand-muted" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Mobile Contact Button */}
            <div className="pt-2">
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary-hover text-white py-3 font-semibold shadow-soft"
              >
                <Link to="/contact">Talk to Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
