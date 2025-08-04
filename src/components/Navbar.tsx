import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ExternalLink } from "lucide-react";
import talentxcelLogo from "@/assets/talentxcel-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Services", href: "/services" },
    { name: "Culture", href: "/culture" },
    { name: "Careers", href: "/careers" },
    { name: "Investors", href: "/investors" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-soft sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img
                className="h-8 w-auto"
                src={talentxcelLogo}
                alt="TalentXcel"
              />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                TalentXcel
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* External Links */}
            <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-border">
              <Button variant="outline" size="sm" asChild>
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
              <Button variant="hero" size="sm">
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-primary p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-medium">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 border-t border-border mt-4 space-y-2">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a
                  href="https://talentxcel.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1"
                >
                  <span>Platform</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
              <Button variant="hero" size="sm" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;