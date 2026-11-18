import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ExternalLink } from "lucide-react";

const talentxcelLogo = "/talentxcel-assets/5b681ba5-58bf-4aae-8bef-3ba691eef586.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "About Us", href: "/about" },
    { name: "Solutions", href: "/services" },
    { name: "Leadership", href: "/team" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Partnerships", href: "/partnerships" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/85 backdrop-blur-xl shadow-soft sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img
                className="h-10 w-auto"
                src={talentxcelLogo}
                alt="TalentXcel Logo"
              />
              <span className="text-2xl font-bold text-foreground tracking-tight">
                TalentXcel
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-2.5 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-primary bg-primary/5 font-semibold"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* External / Product Links */}
            <div className="flex items-center space-x-2.5 ml-4 pl-4 border-l border-border">
              <Button variant="chatr" size="sm" asChild>
                <Link to="/chatr">
                  CHATR
                </Link>
              </Button>
              <Button variant="platform" size="sm" asChild>
                <a
                  href="https://talentxcel.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1"
                >
                  <span>Platform</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
              <Button variant="services" size="sm" asChild>
                <a
                  href="https://talentxcel.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1"
                >
                  <span>Learning</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-primary p-2 focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border shadow-medium">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-primary bg-primary/5 font-semibold"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 border-t border-border mt-4 space-y-2.5">
              <Button variant="chatr" size="sm" className="w-full" asChild>
                <Link to="/chatr" onClick={() => setIsOpen(false)}>
                  CHATR AI
                </Link>
              </Button>
              <Button variant="platform" size="sm" className="w-full" asChild>
                <a
                  href="https://talentxcel.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2"
                >
                  <span>TalentXcel Platform</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
              <Button variant="services" size="sm" className="w-full" asChild>
                <a
                  href="https://talentxcel.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2"
                >
                  <span>Learning Portal</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
