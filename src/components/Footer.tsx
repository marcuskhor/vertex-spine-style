import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, BookOpen } from "lucide-react";
import vertexLogo from "@/assets/vertex-logo-final.png";
import govCert from "@/assets/gov_cert.png";
import acmCert from "@/assets/acm.png";
import icpaCert from "@/assets/icpa.png";
import gemtCert from "@/assets/gemt.png";

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
                  Unit A-2-8, Plaza Arkadia<br />
                  No. 3 Jalan Intisari Perdana<br />
                  Desa Parkcity<br />
                  52200 Kuala Lumpur
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

        {/* Certifications */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="text-center mb-4">
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide mb-4">
              Licensed & Certified
            </h4>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            <img 
              src={govCert} 
              alt="Malaysian Traditional and Complementary Medicine Certification"
              className="h-16 md:h-20 w-auto opacity-60 hover:opacity-100 transition-smooth"
            />
            <img 
              src={acmCert} 
              alt="Association of Chiropractic Malaysia"
              className="h-16 md:h-20 w-auto opacity-60 hover:opacity-100 transition-smooth"
            />
            <img 
              src={icpaCert} 
              alt="ICPA Supporting Member"
              className="h-16 md:h-20 w-auto opacity-60 hover:opacity-100 transition-smooth"
            />
            <img 
              src={gemtCert} 
              alt="Global Education of Manual Therapists"
              className="h-16 md:h-20 w-auto opacity-60 hover:opacity-100 transition-smooth"
            />
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Vertex Chiropractic. All rights reserved. | Professional chiropractic care for optimal health.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;