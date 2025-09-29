import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import vertexLogo from "@/assets/vertex-logo.png";

const Footer = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Appointments", href: "/appointments" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Practice Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img 
                src={vertexLogo} 
                alt="Vertex Chiropractic Center" 
                className="h-20 w-auto sm:h-24 md:h-32 lg:h-36 brightness-0 invert"
              />
            </Link>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Dedicated to providing exceptional chiropractic care and helping our patients 
              achieve optimal health and wellness through natural, effective treatments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Unit A-2-8, Perdana, Plaza Arkadia<br />
                  3, Jalan Intisari, Desa Parkcity<br />
                  52200 Kuala Lumpur, Wilayah Persekutuan
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-secondary" />
                <span className="text-primary-foreground/80">012-828 6173</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-secondary" />
                <span className="text-primary-foreground/80">info@vertexchiro.com</span>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <Clock className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <div>Mon-Fri: 9:00 AM - 6:00 PM</div>
                  <div>Sat: 9:00 AM - 2:00 PM</div>
                  <div>Sun: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-6 pt-6 text-center text-sm text-primary-foreground/70">
          <p>© 2024 Vertex Chiropractic. All rights reserved. | Professional chiropractic care for optimal health.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;