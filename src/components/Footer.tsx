import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, ExternalLink } from "lucide-react";
// Use uploaded logo instead
const talentxcelLogo = "/lovable-uploads/5b681ba5-58bf-4aae-8bef-3ba691eef586.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Culture", href: "/culture" },
    { name: "Careers", href: "/careers" },
  ];

  const serviceLinks = [
    { name: "Resume Building", href: "/services" },
    { name: "AI Career Tools", href: "/services" },
    { name: "Corporate Training", href: "/services" },
    { name: "Mentorship", href: "/services" },
  ];

  const resourceLinks = [
    { name: "Investors", href: "/investors" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
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
                alt="TalentXcel"
              />
              <span className="text-xl font-bold text-foreground">
                TalentXcel
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering Talent. Accelerating Growth. Building the future of career development through innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Company</h3>
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

          {/* Services Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Services</h3>
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

          {/* Contact & Resources */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 mb-6">
              {resourceLinks.map((link) => (
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
            <div className="space-y-2">
              <h4 className="text-foreground font-medium text-sm">Our Platforms</h4>
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
                <span>Services Portal</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@talentxcel.co.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 12345 67890</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Bangalore, India</span>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              © {currentYear} TalentXcel. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;