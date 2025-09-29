import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight,
  CheckCircle,
  Star,
  Calendar,
  Phone
} from "lucide-react";
import { Link } from "react-router-dom";
import doctorImage from "@/assets/leh.jpg";

const Services = () => {
  const services = [
    {
      title: "Adults Chiropractic",
      description: "Comprehensive chiropractic care for adults addressing musculoskeletal conditions.",
      popular: false
    },
    {
      title: "Kids Chiropractic",
      description: "Gentle, specialized care designed for children and adolescents.",
      popular: false
    },
    {
      title: "Prenatal Chiropractic",
      description: "Safe and effective care for expectant mothers throughout pregnancy.",
      popular: true
    },
    {
      title: "Dry Needling Therapy",
      description: "Advanced technique targeting trigger points for pain relief.",
      popular: true
    },
    {
      title: "Flexion Distraction Therapy",
      description: "Non-surgical treatment for disc problems using specialized equipment.",
      popular: false
    },
    {
      title: "Physiotherapy",
      description: "Rehabilitation therapy to restore movement and function.",
      popular: false
    }
  ];

  const benefits = [
    "Licensed & Certified Expertise",
    "Personalized Treatment Plans", 
    "Modern Equipment & Techniques",
    "Proven Track Record"
  ];

  return (
    <div className="min-h-screen">
      {/* Clean Hero Section */}
      <section className="gradient-primary py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-primary-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Professional chiropractic treatments tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid - Clean Design */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {services.map((service, index) => (
              <Card key={index} className="relative group hover:shadow-primary transition-all duration-300">
                {service.popular && (
                  <Badge className="absolute -top-2 left-4 bg-secondary text-secondary-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-xl mb-3">{service.title}</CardTitle>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Single CTA */}
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Book?</h3>
            <p className="text-muted-foreground mb-6">
              Schedule your consultation with Dr. Lim today
            </p>
            <Button 
              size="lg"
              className="gradient-primary text-primary-foreground mb-4"
              asChild
            >
              <Link to="/appointments">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Link>
            </Button>
            <div className="text-sm text-muted-foreground">
              Call: <a href="tel:+60128286173" className="text-primary font-medium">012-828 6173</a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Simplified */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Why Choose Vertex Chiropractic?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-center text-center">
                  <div>
                    <CheckCircle className="w-6 h-6 text-secondary mx-auto mb-2" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-white rounded-lg shadow-soft flex items-center gap-6">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={doctorImage} 
                  alt="Dr. Lim - Chiropractor at Vertex Chiropractic"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-xl font-semibold mb-3">Dr. Lim</h3>
                <p className="text-muted-foreground mb-4">
                  Experienced chiropractor specializing in adults, kids, and prenatal care with advanced certifications in dry needling and flexion distraction therapy.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/about">
                    Learn More About Dr. Lim
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;