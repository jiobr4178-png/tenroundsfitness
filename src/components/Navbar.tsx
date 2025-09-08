import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/classes", label: "Classes" },
    { path: "/membership", label: "Membership" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 lg:container lg:mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-primary rounded-md p-2">
              <span className="text-primary-foreground font-display text-2xl font-bold">
                10R
              </span>
            </div>
            <div>
              <span className={`font-display text-xl ${!isScrolled && location.pathname === '/' ? 'text-white' : 'text-foreground'}`}>
                10 ROUNDS
              </span>
              <span className={`block text-xs uppercase tracking-wider ${!isScrolled && location.pathname === '/' ? 'text-white/80' : 'text-muted-foreground'}`}>
                of Fitness
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant="nav"
                  className={`${
                    location.pathname === link.path 
                      ? "text-primary" 
                      : !isScrolled && location.pathname === '/'
                        ? "text-white hover:text-white/80" 
                        : ""
                  }`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <Link to="/contact">
              <Button variant="default" className="ml-4">
                Join Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden ${!isScrolled && location.pathname === '/' ? 'text-white' : 'text-foreground'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 bg-background/95 backdrop-blur-md border-t border-border">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button
                    variant="ghost"
                    className={`w-full justify-start text-foreground ${
                      location.pathname === link.path ? "text-primary" : ""
                    }`}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="default" className="w-full">
                  Join Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;