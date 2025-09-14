import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo Space */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
              <span className="text-xs text-muted-foreground font-medium">LOGO</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Vertex Chiropractic</h1>
              <p className="text-sm text-muted-foreground">Professional Care</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-smooth text-sm font-medium ${
                  isActive(item.href)
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="default" 
              size="sm" 
              className="hidden sm:flex gradient-primary border-0 text-primary-foreground shadow-primary hover:scale-105 transition-bounce"
              asChild
            >
              <Link to="/appointments">
                <Phone className="w-4 h-4 mr-2" />
                Book Appointment
              </Link>
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-smooth"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-smooth text-sm font-medium py-2 ${
                    isActive(item.href)
                      ? "text-primary bg-accent px-4 rounded-lg"
                      : "text-foreground hover:text-primary px-4"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                variant="default" 
                size="sm" 
                className="mx-4 mt-2 gradient-primary border-0 text-primary-foreground shadow-primary"
                asChild
              >
                <Link to="/appointments" onClick={() => setIsMenuOpen(false)}>
                  <Phone className="w-4 h-4 mr-2" />
                  Book Appointment
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;