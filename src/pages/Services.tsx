import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  Activity, 
  Shield, 
  Users, 
  Clock, 
  Heart,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Adults Chiropractic",
      description: "Comprehensive chiropractic care for adult patients to address various musculoskeletal conditions.",
      features: ["Spinal adjustments", "Posture correction", "Pain relief", "Improved mobility"]
    },
    {
      icon: Users,
      title: "Kids Chiropractic",
      description: "Gentle, specialized chiropractic care designed specifically for children and adolescents.",
      features: ["Pediatric adjustments", "Gentle techniques", "Growth support", "Injury prevention"]
    },
    {
      icon: Heart,
      title: "Prenatal Chiropractic",
      description: "Safe and effective chiropractic care for expectant mothers throughout pregnancy.",
      features: ["Pregnancy support", "Pelvic alignment", "Labor preparation", "Postpartum care"]
    },
    {
      icon: Activity,
      title: "Dry Needling Therapy",
      description: "Advanced technique using thin needles to target trigger points and muscle tension.",
      features: ["Trigger point release", "Muscle relaxation", "Pain reduction", "Improved function"]
    },
    {
      icon: Shield,
      title: "Flexion Distraction Therapy",
      description: "Non-surgical treatment for disc problems and spinal conditions using specialized equipment.",
      features: ["Disc decompression", "Spinal mobilization", "Non-invasive treatment", "Pain relief"]
    },
    {
      icon: Clock,
      title: "Physiotherapy",
      description: "Rehabilitation therapy to restore movement and function after injury or illness.",
      features: ["Exercise therapy", "Strength training", "Movement restoration", "Functional improvement"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Comprehensive chiropractic care tailored to your unique needs. We offer a full range 
            of services to help you achieve optimal health and wellness.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-soft hover:shadow-primary transition-smooth border-border/50">
                <CardHeader>
                  <div className="w-12 h-12 gradient-healing rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <ArrowRight className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                    asChild
                  >
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-accent-foreground mb-4">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-lg text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
            Don't let pain hold you back. Contact us today to schedule your consultation 
            and take the first step towards better health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="gradient-primary border-0 text-primary-foreground shadow-primary hover:scale-105 transition-bounce"
              asChild
            >
              <Link to="/appointments">Book Appointment</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent transition-smooth"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;