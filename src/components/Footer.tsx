import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, ExternalLink, MessageSquare, ShieldCheck } from "lucide-react";

const talentxcelLogo = "/talentxcel-assets/5b681ba5-58bf-4aae-8bef-3ba691eef586.png";

const Footer = () => {
  const foundingYear = 2024;
  const currentYear = new Date().getFullYear();
  const copyrightYear = currentYear > foundingYear ? `${foundingYear}–${currentYear}` : `${foundingYear}`;

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Leadership & Governance", href: "/team" },
    { name: "Culture & Principles", href: "/culture" },
    { name: "Careers & Internships", href: "/careers" },
    { name: "Investor Relations", href: "/investors" },
  ];

  const serviceLinks = [
    { name: "IT Staffing & Pods", href: "/staffing-solutions" },
    { name: "Corporate AI & Training", href: "/corporate-training" },
    { name: "University Alliances", href: "/university-partnerships" },
    { name: "All Solutions Overview", href: "/services" },
  ];

  const proofLinks = [
    { name: "Case Studies & Outcomes", href: "/case-studies" },
    { name: "Strategic Partnerships", href: "/partnerships" },
    { name: "Enterprise Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-slate-50 border-t border-border/80 text-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Brand Column (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img
                className="h-10 w-auto"
                src={talentxcelLogo}
                alt="TalentXcel Logo"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-brand-navy tracking-tight">
                  TalentXcel
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-brand-muted -mt-0.5">
                  Integrated Technology &amp; Talent Solutions
                </span>
              </div>
            </Link>
            <p className="text-brand-muted text-sm leading-relaxed max-w-sm">
              TalentXcel brings together enterprise software engineering, artificial intelligence, specialized workforce recruitment, and continuous talent development into one coherent partner for global organizations.
            </p>
            <div className="flex items-center space-x-3 pt-1">
              <a
                href="https://in.linkedin.com/company/talentxcel-services-private-limited"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white border border-border/80 text-brand-muted hover:text-primary hover:border-primary transition-colors"
                aria-label="TalentXcel LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com/Talentxcel"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white border border-border/80 text-brand-muted hover:text-primary hover:border-primary transition-colors"
                aria-label="TalentXcel Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>

            <div className="pt-2 text-xs text-brand-muted flex items-center space-x-2">
              <ShieldCheck className="h-4 w-4 text-primary flex-shrink-0" />
              <span>DPDP Act (India) &amp; Enterprise SLA Compliant</span>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-brand-navy font-bold mb-4 text-xs uppercase tracking-wider">
              Business Pillars
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-brand-muted hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-brand-navy font-bold mb-4 text-xs uppercase tracking-wider">
              Organization
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-brand-muted hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Proof & Ecosystem Column */}
          <div>
            <h3 className="text-brand-navy font-bold mb-4 text-xs uppercase tracking-wider">
              Verification &amp; Proof
            </h3>
            <ul className="space-y-2.5 mb-6">
              {proofLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-brand-muted hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="space-y-2 pt-2 border-t border-border/60">
              <h4 className="text-brand-muted font-bold text-[11px] uppercase tracking-wider">
                Product Ecosystem
              </h4>
              <Link
                to="/chatr"
                className="flex items-center space-x-2 text-emerald-700 hover:text-emerald-600 transition-colors text-xs font-semibold"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>CHATR AI Layer</span>
              </Link>
              <a
                href="https://talentxcel.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-brand-muted hover:text-primary transition-colors text-xs"
              >
                <span>TalentXcel Platform</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href="https://talentxcel.net"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-brand-muted hover:text-primary transition-colors text-xs"
              >
                <span>TalentXcel Learning</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info Bar & Legal Links */}
        <div className="border-t border-border/80 mt-8 pt-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 text-xs text-brand-muted">
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:contact@talentxcel.co.in?cc=sanobar.jahan@talentxcel.co.in"
                  className="hover:text-primary transition-colors"
                >
                  contact@talentxcel.co.in
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 9717181609</span>
              </div>
              <a
                href="https://share.google/9XwBijGdqZx4s5NN1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-primary transition-colors"
                title="View on Google Maps"
              >
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Office 1917, 19th Floor, E-Square Building, Sector 96, Noida, UP 201301</span>
              </a>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 lg:pt-0">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <span>
                © {copyrightYear} TalentXcel Services Private Limited. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
