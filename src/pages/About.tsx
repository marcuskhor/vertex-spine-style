import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Users, 
  Heart, 
  Target,
  CheckCircle,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with empathy, understanding, and genuine concern for their wellbeing."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in chiropractic care through continuous education and best practices."
    },
    {
      icon: Users,
      title: "Patient-Centered",
      description: "Your individual needs and goals guide every treatment plan we create."
    },
    {
      icon: Target,
      title: "Results-Focused",
      description: "We're committed to helping you achieve measurable improvements in your health and quality of life."
    }
  ];

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "5000+", label: "Patients Treated" },
    { number: "98%", label: "Success Rate" },
    { number: "24/7", label: "Emergency Support" }
  ];

  const certifications = [
    "Doctor of Chiropractic (D.C.)",
    "Licensed Chiropractic Physician",
    "Certified in Sports Medicine",
    "Advanced Spinal Manipulation",
    "Physical Therapy Certification",
    "Nutritional Counseling"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            About Vertex Chiropractic
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Dedicated to providing exceptional chiropractic care and helping our patients 
            achieve optimal health through natural, effective treatments.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Vertex Chiropractic, we believe that everyone deserves to live a life free from pain 
                and full of vitality. Our mission is to provide comprehensive, personalized chiropractic 
                care that addresses not just symptoms, but the root cause of your health concerns.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We combine time-tested chiropractic techniques with modern therapeutic approaches to 
                deliver the most effective treatment possible. Our goal is to help you achieve optimal 
                health and maintain it for life.
              </p>
              <Button 
                size="lg" 
                className="gradient-primary border-0 text-primary-foreground shadow-primary hover:scale-105 transition-bounce"
                asChild
              >
                <Link to="/appointments">Start Your Journey</Link>
              </Button>
            </div>
            <div className="bg-muted rounded-2xl p-8 h-80 flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
              <span className="text-muted-foreground font-medium">Doctor/Clinic Photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-accent py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-accent-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-accent-foreground/80 max-w-2xl mx-auto">
              These principles guide everything we do and ensure you receive the highest quality care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-soft border-accent-dark/20">
                <CardHeader>
                  <div className="w-16 h-16 gradient-healing rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground/80">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Track Record</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and patient satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Professional Credentials</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our team maintains the highest level of professional qualifications and continues 
                to advance their knowledge through ongoing education and training.
              </p>
              
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Star className="w-8 h-8 text-secondary" />
                  <div>
                    <CardTitle className="text-xl">Patient Testimonial</CardTitle>
                    <CardDescription>What our patients say about us</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-lg text-card-foreground/90 mb-4 italic">
                  "The care I received at Vertex Chiropractic was exceptional. Dr. [Name] took the time 
                  to understand my condition and created a treatment plan that got me back to my active 
                  lifestyle. I couldn't be happier with the results."
                </blockquote>
                <div className="flex items-center space-x-2">
                  <div className="flex text-secondary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-muted-foreground">- Sarah Johnson</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Experience the Vertex Difference?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of patients who have found relief and improved their quality of life 
            through our comprehensive chiropractic care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="gradient-primary border-0 text-primary-foreground shadow-primary hover:scale-105 transition-bounce"
              asChild
            >
              <Link to="/appointments">Book Consultation</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              asChild
            >
              <Link to="/contact">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;