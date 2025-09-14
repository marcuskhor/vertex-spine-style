import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Heart, 
  Users, 
  Award, 
  Phone, 
  ArrowRight, 
  CheckCircle,
  Star,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-chiropractic.jpg";

const Index = () => {
  const services = [
    {
      icon: Heart,
      title: "Pain Relief",
      description: "Effective treatment for back pain, neck pain, and chronic conditions using proven chiropractic techniques."
    },
    {
      icon: Users,
      title: "Family Care",
      description: "Comprehensive chiropractic care for patients of all ages, from children to seniors."
    },
    {
      icon: Award,
      title: "Sports Medicine",
      description: "Specialized treatment for athletic injuries and performance optimization for active individuals."
    }
  ];

  const benefits = [
    "Non-invasive treatment options",
    "Personalized care plans",
    "Insurance accepted",
    "Flexible scheduling",
    "Experienced professionals",
    "State-of-the-art facility"
  ];

  const testimonials = [
    {
      text: "Vertex Chiropractic changed my life! After years of back pain, I'm finally pain-free and active again.",
      author: "Michael Chen",
      rating: 5
    },
    {
      text: "The team is incredibly professional and caring. They truly listen and create treatment plans that work.",
      author: "Sarah Johnson",
      rating: 5
    },
    {
      text: "I was skeptical about chiropractic care, but the results speak for themselves. Highly recommended!",
      author: "David Rodriguez",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Your Path to 
                <span className="block text-secondary"> Pain-Free Living</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl">
                Experience professional chiropractic care that focuses on healing, wellness, and getting you back to the activities you love. Our expert team is here to help you achieve optimal health naturally.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary-light text-secondary-foreground border-0 shadow-secondary hover:scale-105 transition-bounce"
                  asChild
                >
                  <Link to="/appointments">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Appointment
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-smooth"
                  asChild
                >
                  <Link to="/contact">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (555) 123-4567
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center lg:justify-start space-x-6 mt-8 text-primary-foreground/80">
                <div className="text-center">
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">5000+</div>
                  <div className="text-sm">Patients Treated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-sm">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Professional chiropractic care at Vertex Chiropractic - Modern medical office with chiropractor treating patient"
                className="w-full h-96 object-cover rounded-2xl shadow-primary"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Chiropractic Care
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer a full range of chiropractic services designed to address your unique health needs 
              and help you achieve lasting wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-primary transition-smooth border-border/50">
                <CardHeader>
                  <div className="w-16 h-16 gradient-healing rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              asChild
            >
              <Link to="/services">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-accent py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-accent-foreground/5 rounded-2xl p-8 h-80 flex items-center justify-center border-2 border-dashed border-accent-foreground/20">
              <span className="text-accent-foreground/60 font-medium">Practice Photo</span>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-accent-foreground mb-6">
                Why Choose Vertex Chiropractic?
              </h2>
              <p className="text-lg text-accent-foreground/80 mb-8">
                We're committed to providing exceptional care that goes beyond just treating symptoms. 
                Our holistic approach focuses on understanding and addressing the root cause of your pain.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-accent-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                className="gradient-primary border-0 text-primary-foreground shadow-primary hover:scale-105 transition-bounce"
                asChild
              >
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what real patients have to say about their 
              experience at Vertex Chiropractic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex text-secondary mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-foreground/90 mb-4 italic">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="text-muted-foreground font-medium">
                    - {testimonial.author}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Don't let pain control your life any longer. Take the first step towards a healthier, 
            more active you with professional chiropractic care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary-light text-secondary-foreground border-0 shadow-secondary hover:scale-105 transition-bounce"
              asChild
            >
              <Link to="/appointments">
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Consultation
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-smooth"
              asChild
            >
              <Link to="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Call (555) 123-4567
              </Link>
            </Button>
          </div>

          <p className="text-primary-foreground/70 mt-6 text-sm">
            Emergency appointments available • Insurance accepted • Free consultation
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;