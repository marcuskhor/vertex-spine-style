import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight,
  CheckCircle,
  Star,
  Calendar,
  Phone,
  Users,
  Baby,
  Heart,
  Target,
  Zap,
  Activity,
  Award,
  Shield,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";
import doctorImage from "@/assets/leh.jpg";

const Services = () => {
  const services = [
    {
      title: "Adults Chiropractic Treatment",
      description: "At Vertex Chiropractic, we focus on identifying the root cause of your discomfort, not just the symptoms. Using gentle, targeted adjustments, we help restore proper spinal alignment and function so your body can heal and perform at its best.",
      popular: false,
      icon: Users,
      features: ["Root Cause Focus", "Spinal Alignment", "Optimal Function"]
    },
    {
      title: "Paediatrics Chiropractic Adjustment",
      description: "We use gentle, safe and specific chiropractic adjustments to help support healthy development, improve posture, and address common childhood issues in a natural way specifically for babies, toddlers and growing kids.",
      popular: false,
      icon: Baby,
      features: ["Healthy Development", "Gentle & Safe", "Natural Care"]
    },
    {
      title: "Pregnancy Chiropractic Adjustment",
      description: "We offer specialised prenatal chiropractic care using the Webster Technique—a gentle method designed to balance the pelvis and reduce tension in the surrounding muscles and ligaments. This can help relieve pain, improve mobility, and create more space for baby to move and grow.",
      popular: true,
      icon: Heart,
      features: ["Webster Technique", "Pelvic Balance", "Pain Relief"]
    },
    {
      title: "Postpartum Chiropractic Adjustment",
      description: "We provide gentle, effective care to help new mothers regain balance, reduce pain, and restore strength after childbirth. We understand that your body has just done something incredible—and now it's adjusting to a new routine of holding, feeding, and carrying your baby.",
      popular: false,
      icon: Heart,
      features: ["Postpartum Recovery", "Balance Restoration", "Pain Reduction"]
    },
    {
      title: "Physiotherapy",
      description: "Physiotherapy focuses on restoring movement, reducing pain, and helping your body recover from injury or dysfunction. It's a science-based approach that uses targeted exercises, manual therapy, and education to improve strength, mobility, and function.",
      popular: false,
      icon: Activity,
      features: ["Movement Restoration", "Pain Reduction", "Strength Building"]
    },
    {
      title: "Dry Needling Therapy",
      description: "Dry needling is a highly effective technique used to relieve muscular pain and tension by targeting tight knots or \"trigger points\" within the muscles. It involves inserting fine, sterile needles into specific areas to release tension, improve blood flow, and restore normal muscle function.",
      popular: true,
      icon: Target,
      features: ["Trigger Point Release", "Tension Relief", "Muscle Recovery"]
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Licensed Expertise",
      description: "Certified professionals with advanced training"
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Treatment plans tailored to your needs"
    },
    {
      icon: Sparkles,
      title: "Modern Technology",
      description: "Latest equipment and proven techniques"
    },
    {
      icon: Shield,
      title: "Proven Results",
      description: "Track record of successful outcomes"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Modern Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              <Sparkles className="w-4 h-4 mr-2" />
              Professional Healthcare Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your 
              <span className="text-secondary block">Health Journey</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              Experience expert chiropractic care with personalized treatment plans designed to restore your mobility and enhance your quality of life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-lg text-lg px-8 py-6"
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
                className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
                asChild
              >
                <a href="https://wa.me/60128286173?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20Vertex%20Chiropractic" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp us now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Enhanced Design */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Specialized Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive care solutions tailored to meet your unique health needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index} 
                  className="group relative overflow-hidden border-2 hover:border-primary/20 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-br from-background to-muted/20"
                >
                  {service.popular && (
                    <div className="absolute -top-3 -right-3 z-10 animate-fade-in">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary rounded-full blur-sm opacity-75 animate-pulse"></div>
                        <Badge className="relative bg-gradient-to-r from-secondary to-primary text-white shadow-xl px-4 py-1.5 rounded-full font-semibold border-2 border-white/20">
                          <Star className="w-3.5 h-3.5 mr-1.5 fill-current animate-pulse" />
                          Popular
                        </Badge>
                      </div>
                    </div>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button 
                        size="sm" 
                        className="w-full group-hover:shadow-md transition-shadow"
                        asChild
                      >
                        <Link to="/appointments">
                          Book Now
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Vertex Chiropractic?</h2>
              <p className="text-muted-foreground text-lg">
                Experience the difference with our comprehensive approach to healthcare
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white/80">
                    <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </Card>
                );
              })}
            </div>

            {/* Enhanced Doctor Section */}
            <Card className="p-8 bg-gradient-to-r from-white to-muted/30 border-2 border-primary/10 shadow-xl">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg flex-shrink-0">
                  <img 
                    src={doctorImage} 
                    alt="Dr. Lim - Lead Chiropractor at Vertex Chiropractic"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <h3 className="text-2xl font-bold">Dr. Lim</h3>
                    <Badge className="bg-primary/10 text-primary">Lead Chiropractor</Badge>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    With over 10 years of experience, Dr. Lim specializes in comprehensive chiropractic care for all ages. 
                    Certified in advanced techniques including dry needling and flexion distraction therapy, 
                    providing evidence-based treatment for optimal patient outcomes.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button asChild>
                      <Link to="/about">
                        Learn More About Dr. Lim
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/appointments">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book with Dr. Lim
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Healing Journey?
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Take the first step towards better health. Our expert team is ready to provide 
              personalized care that addresses your specific needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
                asChild
              >
                <Link to="/appointments">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Appointment
                </Link>
              </Button>
              <div className="flex items-center justify-center gap-2 text-white">
                <Phone className="w-5 h-5" />
                <span className="text-lg">
                  Or WhatsApp: <a href="https://wa.me/60128286173?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Vertex%20Chiropractic" target="_blank" rel="noopener noreferrer" className="font-semibold underline hover:no-underline">012-828 6173</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;