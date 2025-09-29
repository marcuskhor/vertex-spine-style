import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Stethoscope, 
  Activity, 
  Shield, 
  Users, 
  Clock, 
  Heart,
  ArrowRight,
  CheckCircle,
  Star,
  Calendar,
  Phone,
  Baby,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Adults Chiropractic",
      description: "Comprehensive chiropractic care for adult patients to address various musculoskeletal conditions and restore optimal health.",
      features: ["Spinal adjustments", "Posture correction", "Pain relief", "Improved mobility"],
      duration: "45-60 mins",
      price: "From RM 120",
      popular: false,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop"
    },
    {
      title: "Kids Chiropractic",
      description: "Gentle, specialized chiropractic care designed specifically for children and adolescents with growing bodies.",
      features: ["Pediatric adjustments", "Gentle techniques", "Growth support", "Injury prevention"],
      duration: "30-45 mins",
      price: "From RM 90",
      popular: false,
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&h=300&fit=crop"
    },
    {
      title: "Prenatal Chiropractic",
      description: "Safe and effective chiropractic care for expectant mothers throughout pregnancy and postpartum recovery.",
      features: ["Pregnancy support", "Pelvic alignment", "Labor preparation", "Postpartum care"],
      duration: "45-60 mins",
      price: "From RM 140",
      popular: true,
      image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=500&h=300&fit=crop"
    },
    {
      title: "Dry Needling Therapy",
      description: "Advanced technique using thin needles to target trigger points and muscle tension for pain relief.",
      features: ["Trigger point release", "Muscle relaxation", "Pain reduction", "Improved function"],
      duration: "30-45 mins",
      price: "From RM 100",
      popular: true,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop"
    },
    {
      title: "Flexion Distraction Therapy",
      description: "Non-surgical treatment for disc problems and spinal conditions using specialized equipment and techniques.",
      features: ["Disc decompression", "Spinal mobilization", "Non-invasive treatment", "Pain relief"],
      duration: "45-60 mins",
      price: "From RM 150",
      popular: false,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop"
    },
    {
      title: "Physiotherapy",
      description: "Rehabilitation therapy to restore movement and function after injury or illness through targeted exercises.",
      features: ["Exercise therapy", "Strength training", "Movement restoration", "Functional improvement"],
      duration: "60-90 mins",
      price: "From RM 110",
      popular: false,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-secondary opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Professional Services
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Experience comprehensive chiropractic care tailored to your unique needs. From adults to children, 
              we offer specialized treatments to help you achieve optimal health and wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
                asChild
              >
                <Link to="/appointments">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Consultation
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8"
                asChild
              >
                <Link to="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 012-828 6173
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Enhanced Design */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Specialized Treatment Options
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each service is designed with your specific health needs in mind, delivered by Dr. Lim with years of expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group relative overflow-hidden shadow-soft hover:shadow-primary transition-all duration-300 border-0">
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-secondary text-secondary-foreground font-semibold">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  </div>
                )}
                
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
            {services.map((service, index) => (
              <Card key={index} className="group relative overflow-hidden shadow-soft hover:shadow-primary transition-all duration-300 border-0">
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-secondary text-secondary-foreground font-semibold">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  </div>
                )}
                
                {/* Service Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={`${service.title} treatment at Vertex Chiropractic`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{service.price}</div>
                      <div className="text-sm text-muted-foreground">{service.duration}</div>
                    </div>
                  </div>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Single Book Now Section */}
          <div className="text-center">
            <div className="max-w-2xl mx-auto mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready to Book Your Treatment?
              </h3>
              <p className="text-lg text-muted-foreground">
                Choose any of our specialized services and take the first step towards better health. 
                Dr. Lim will create a personalized treatment plan just for you.
              </p>
            </div>
            <Button 
              size="lg"
              className="gradient-primary border-0 text-primary-foreground shadow-primary hover:scale-105 transition-transform px-12 py-4 text-lg"
              asChild
            >
              <Link to="/appointments">
                <Calendar className="w-6 h-6 mr-3" />
                Book Your Appointment Now
              </Link>
            </Button>
            <div className="mt-4 text-muted-foreground">
              Or call us directly: <a href="tel:+60128286173" className="text-primary font-semibold hover:underline">012-828 6173</a>
            </div>
          </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-accent-foreground mb-6">
                Why Choose Vertex Chiropractic?
              </h2>
              <p className="text-lg text-accent-foreground/80 mb-8">
                At Vertex Chiropractic, Dr. Lim combines years of specialized training and experience with 
                traditional chiropractic techniques and modern therapeutic approaches to provide the most effective treatment possible.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-healing rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent-foreground">Certified Expertise</h4>
                    <p className="text-accent-foreground/70">Licensed and certified in multiple therapeutic techniques</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-healing rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent-foreground">Personalized Care</h4>
                    <p className="text-accent-foreground/70">Treatment plans tailored to your specific condition and goals</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-healing rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent-foreground">Proven Results</h4>
                    <p className="text-accent-foreground/70">High success rate with satisfied patients across all age groups</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-primary border-0">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Ready to Start Your Treatment?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Book your consultation today and take the first step towards better health and wellness.
                  </p>
                  <div className="space-y-3">
                    <Button 
                      size="lg"
                      className="w-full gradient-primary border-0 text-primary-foreground shadow-primary hover:scale-105 transition-transform"
                      asChild
                    >
                      <Link to="/appointments">
                        <Calendar className="w-5 h-5 mr-2" />
                        Schedule Consultation
                      </Link>
                    </Button>
                    <div className="text-sm text-muted-foreground">
                      Call directly: <a href="tel:+60128286173" className="text-primary font-semibold hover:underline">012-828 6173</a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;