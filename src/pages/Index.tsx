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
  Calendar,
  Stethoscope,
  Activity,
  Shield,
  Clock,
  Baby
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-chiropractic-new.jpg";
import doctorImage from "@/assets/leh.jpg";
import clinicImage1 from "@/assets/IMG_0726.jpg";
import clinicImage2 from "@/assets/IMG_7368.jpg";
import clinicImage3 from "@/assets/IMG_1598.jpg";
import clinicImage4 from "@/assets/IMG_3013.jpg";
import clinicImage5 from "@/assets/IMG_3441.jpg";
import clinicImage6 from "@/assets/IMG_5537.jpg";
import clinicImage7 from "@/assets/IMG_3014.jpg";
import clinicImage8 from "@/assets/IMG_7366.jpg";

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
      text: "The Dr's hands truly magical, with just one treatment, I started coming in with crutches and pain and after getting the first treatment I went back without needing crutches again...It's Amazing & 10 Star for Vertex Chiropractic Center.",
      author: "Hasbullah Mokthsim",
      rating: 5
    },
    {
      text: "I had neck pain, knee pain, back pain. Neck pain relieved after first session which is amazing as i had confition similar as frozen shoulder. After 3-4 sessions with dc eanhou my back and knee getting better and better. I did chiropractic treatment and dry needling.",
      author: "Yean Alysser",
      rating: 5
    },
    {
      text: "喜愛跑步，導致膝蓋疼痛，來了Vertex Chiropractic Center，膝蓋疼痛改善了很多。。謝謝。。",
      author: "Nic Jin",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Professional chiropractic care at Vertex Chiropractic"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Your Path to 
              <span className="block text-secondary"> Pain-Free Living</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl">
              Experience professional chiropractic care that focuses on healing, wellness, and getting you back to the activities you love. Our expert team is here to help you achieve optimal health naturally.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                variant="light"
                className="text-lg px-8 py-4 h-auto"
                asChild
              >
                <Link to="/appointments">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Link>
              </Button>
              <Button 
                variant="hero" 
                size="lg"
                className="text-lg px-8 py-4 h-auto"
                asChild
              >
                <a href="https://wa.me/60128286173?text=Hello%2C%20I%20would%20like%20to%20contact%20Vertex%20Chiropractic" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp 012-828 6173
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 text-white/90">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">10+</div>
                <div className="text-sm uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">5000+</div>
                <div className="text-sm uppercase tracking-wide">Patients Treated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">98%</div>
                <div className="text-sm uppercase tracking-wide">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From pain relief to wellness programs, we offer specialized chiropractic treatments 
              designed to address your unique health needs and restore your quality of life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center shadow-soft hover:shadow-primary transition-smooth border-border/50 group">
              <CardHeader>
                <div className="w-16 h-16 gradient-healing rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                  <Stethoscope className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">Adults Chiropractic</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Comprehensive chiropractic care for adult patients to address various musculoskeletal conditions.
                </CardDescription>
                <ul className="text-sm text-muted-foreground space-y-1 text-left">
                  <li>• Spinal adjustments</li>
                  <li>• Posture correction</li>
                  <li>• Pain relief</li>
                  <li>• Improved mobility</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-primary transition-smooth border-border/50 group">
              <CardHeader>
                <div className="w-16 h-16 gradient-healing rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                  <Baby className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">Kids Chiropractic</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Gentle, specialized chiropractic care designed specifically for children and adolescents.
                </CardDescription>
                <ul className="text-sm text-muted-foreground space-y-1 text-left">
                  <li>• Pediatric adjustments</li>
                  <li>• Gentle techniques</li>
                  <li>• Growth support</li>
                  <li>• Injury prevention</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-primary transition-smooth border-border/50 group">
              <CardHeader>
                <div className="w-16 h-16 gradient-healing rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">Prenatal Chiropractic</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Safe and effective chiropractic care for expectant mothers throughout pregnancy.
                </CardDescription>
                <ul className="text-sm text-muted-foreground space-y-1 text-left">
                  <li>• Pregnancy support</li>
                  <li>• Pelvic alignment</li>
                  <li>• Labor preparation</li>
                  <li>• Postpartum care</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-primary transition-smooth border-border/50 group">
              <CardHeader>
                <div className="w-16 h-16 gradient-healing rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                  <Activity className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">Dry Needling Therapy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Advanced technique using thin needles to target trigger points and muscle tension.
                </CardDescription>
                <ul className="text-sm text-muted-foreground space-y-1 text-left">
                  <li>• Trigger point release</li>
                  <li>• Muscle relaxation</li>
                  <li>• Pain reduction</li>
                  <li>• Improved function</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-primary transition-smooth border-border/50 group">
              <CardHeader>
                <div className="w-16 h-16 gradient-healing rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">Flexion Distraction Therapy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Non-surgical treatment for disc problems and spinal conditions using specialized equipment.
                </CardDescription>
                <ul className="text-sm text-muted-foreground space-y-1 text-left">
                  <li>• Disc decompression</li>
                  <li>• Spinal mobilization</li>
                  <li>• Non-invasive treatment</li>
                  <li>• Pain relief</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-primary transition-smooth border-border/50 group">
              <CardHeader>
                <div className="w-16 h-16 gradient-healing rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">Physiotherapy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Rehabilitation therapy to restore movement and function after injury or illness.
                </CardDescription>
                <ul className="text-sm text-muted-foreground space-y-1 text-left">
                  <li>• Exercise therapy</li>
                  <li>• Strength training</li>
                  <li>• Movement restoration</li>
                  <li>• Functional improvement</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="gradient-primary border-0 text-primary-foreground shadow-primary hover:scale-105 transition-bounce"
              asChild
            >
              <Link to="/services">
                View All Services & Pricing
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
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

      {/* Photo Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Clinic Gallery
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take a look inside our modern facility and see the professional environment where healing happens.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Clinic Photos */}
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-soft">
              <img 
                src={clinicImage1} 
                alt="Dr. Lim providing pediatric chiropractic care"
                className="w-full h-full object-cover hover:scale-105 transition-smooth"
              />
            </div>
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-soft">
              <img 
                src={clinicImage2} 
                alt="Professional chiropractic adjustment treatment"
                className="w-full h-full object-cover hover:scale-105 transition-smooth"
              />
            </div>
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-soft">
              <img 
                src={clinicImage3} 
                alt="Spinal anatomy consultation and education"
                className="w-full h-full object-cover hover:scale-105 transition-smooth"
              />
            </div>
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-soft">
              <img 
                src={clinicImage4} 
                alt="Manual therapy and spinal adjustment"
                className="w-full h-full object-cover hover:scale-105 transition-smooth"
              />
            </div>
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-soft">
              <img 
                src={clinicImage5} 
                alt="Patient consultation and examination"
                className="w-full h-full object-cover hover:scale-105 transition-smooth"
              />
            </div>
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-soft">
              <img 
                src={clinicImage6} 
                alt="Advanced chiropractic treatment techniques"
                className="w-full h-full object-cover hover:scale-105 transition-smooth"
              />
            </div>
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-soft">
              <img 
                src={clinicImage7} 
                alt="Therapeutic chiropractic care"
                className="w-full h-full object-cover hover:scale-105 transition-smooth"
              />
            </div>
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-soft">
              <img 
                src={clinicImage8} 
                alt="Happy patient with Dr. Lim at Vertex Chiropractic"
                className="w-full h-full object-cover hover:scale-105 transition-smooth"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="bg-accent py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
              Meet Our Professional Team
            </h2>
            <p className="text-lg text-accent-foreground/80 max-w-2xl mx-auto">
              Our experienced team of chiropractors and healthcare professionals are dedicated to your wellness journey.
            </p>
          </div>

          <div className="flex justify-center">
            <Card className="text-center shadow-soft max-w-sm">
              <CardContent className="p-6">
                <div className="aspect-[3/4] rounded-lg mb-4 overflow-hidden shadow-soft">
                  <img 
                    src={doctorImage} 
                    alt="Dr. Lim - Lead Chiropractor at Vertex Chiropractic"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-accent-foreground mb-2">Dr. Lim</h3>
                <p className="text-accent-foreground/70 mb-3">Lead Chiropractor</p>
                <p className="text-sm text-accent-foreground/80">Specialized in adults, kids, and prenatal chiropractic care, dry needling therapy, and flexion distraction therapy with extensive experience in helping patients achieve optimal health.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-soft">
              <img 
                src={clinicImage3} 
                alt="Dr. Lim explaining spinal health at Vertex Chiropractic clinic"
                className="w-full h-full object-cover"
              />
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
              <a href="https://wa.me/60128286173?text=Hello%2C%20I%20would%20like%20to%20contact%20Vertex%20Chiropractic" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp 012-828 6173
              </a>
            </Button>
          </div>

          <p className="text-primary-foreground/70 mt-6 text-sm">
            WhatsApp consultations available • Insurance accepted • Free consultation
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;