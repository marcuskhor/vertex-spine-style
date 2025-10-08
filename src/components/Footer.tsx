import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, BookOpen } from "lucide-react";
import vertexLogo from "@/assets/vertex-logo-final.png";

const Footer = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Appointments", href: "/appointments" },
  ];

  return (
    <footer className="bg-white text-foreground border-t border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Practice Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img 
                src={vertexLogo} 
                alt="Vertex Chiropractic Center" 
                className="h-32 w-auto"
              />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Dedicated to providing exceptional chiropractic care and helping our patients 
              achieve optimal health and wellness through natural, effective treatments.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61569316016767" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="https://www.instagram.com/vertexchiro/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="https://www.xiaohongshu.com/user/profile/64298e810000000012013dea?xsec_token=&xsec_source=pc_note" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-smooth"
                aria-label="RedNote"
              >
                <BookOpen className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-muted-foreground hover:text-foreground transition-smooth text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  Unit A-2-8, Perdana, Plaza Arkadia<br />
                  3, Jalan Intisari, Desa Parkcity<br />
                  52200 Kuala Lumpur, Wilayah Persekutuan
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">012-828 6173</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">vertexchiro@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <Clock className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <div className="text-muted-foreground">
                  <div>Everyday: 10:00 AM - 7:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-4 pt-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Vertex Chiropractic. All rights reserved. | Professional chiropractic care for optimal health.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;