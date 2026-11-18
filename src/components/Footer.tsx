import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, ExternalLink, MessageCircle } from "lucide-react";

const talentxcelLogo = "/talentxcel-assets/5b681ba5-58bf-4aae-8bef-3ba691eef586.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Leadership & Governance", href: "/team" },
    { name: "Culture & Principles", href: "/culture" },
    { name: "Careers & Internships", href: "/careers" },
  ];

  const serviceLinks = [
    { name: "Staffing & Recruitment", href: "/services/staffing-recruitment" },
    { name: "Training & Education", href: "/services/training-education" },
    { name: "IT Consulting & Cloud", href: "/services/it-consulting-managed-services" },
    { name: "All Solutions Overview", href: "/services" },
  ];

  const proofLinks = [
    { name: "Case Studies & Outcomes", href: "/case-studies" },
    { name: "Strategic Partnerships", href: "/partnerships" },
    { name: "Investor Relations", href: "/investors" },
    { name: "Contact & Inquiries", href: "/contact" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img
                className="h-10 w-auto"
                src={talentxcelLogo}
                alt="TalentXcel Logo"
              />
              <span className="text-xl font-bold text-foreground">
                TalentXcel
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Integrated Technology &amp; Talent Solutions. Blending enterprise software engineering, AI automation, workforce solutions, and talent development.
            </p>
            <div className="flex space-x-4 pt-1">
              <a
                href="https://www.linkedin.com/company/talentxcel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="TalentXcel LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/Talentxcel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="TalentXcel Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">Solutions</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Proof & Ecosystem */}
          <div>
            <h3 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">Enterprise &amp; Proof</h3>
            <ul className="space-y-2 mb-6">
              {proofLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* External Platform Links */}
            <div className="space-y-2 pt-2 border-t border-border/50">
              <h4 className="text-foreground font-medium text-xs uppercase tracking-wider text-muted-foreground">Product Ecosystem</h4>
              <Link
                to="/chatr"
                className="flex items-center space-x-2 text-green-600 hover:text-green-500 transition-colors text-sm font-medium"
              >
                <MessageCircle className="h-4 w-4" />
                <span>CHATR AI Layer</span>
              </Link>
              <a
                href="https://talentxcel.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <span>TalentXcel Platform</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href="https://talentxcel.net"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <span>Learning &amp; Career Hub</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info Bar & Legal Links */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@talentxcel.co.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 9717181609</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Plot C, ESquare Building, Sector-45, Noida, UP 201301</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-primary transition-colors text-xs">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors text-xs">
                Terms of Service
              </Link>
              <span className="text-xs">
                © {currentYear} TalentXcel. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
