import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, Phone, CheckCircle } from "lucide-react";

const Appointments = () => {
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const services = [
    "Initial Consultation",
    "Adults Chiropractic",
    "Kids Chiropractic", 
    "Prenatal Chiropractic",
    "Dry Needling Therapy",
    "Flexion Distraction Therapy",
    "Physiotherapy"
  ];

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
    "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"
  ];

  const benefits = [
    "Free initial consultation",
    "Comprehensive health assessment",
    "Personalized treatment plan",
    "Insurance accepted",
    "Flexible scheduling",
    "Emergency appointments available"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Book Your Appointment
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Take the first step towards better health. Schedule your consultation with our 
            experienced chiropractic team today.
          </p>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Appointment Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Schedule Your Visit</CardTitle>
                  <CardDescription>
                    Fill out the form below to book your appointment. We'll confirm your booking within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground flex items-center">
                        <User className="w-5 h-5 mr-2 text-secondary" />
                        Personal Information
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input 
                            id="firstName" 
                            placeholder="Enter your first name"
                            className="border-border focus:ring-secondary"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input 
                            id="lastName" 
                            placeholder="Enter your last name"
                            className="border-border focus:ring-secondary"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="Enter your email"
                            className="border-border focus:ring-secondary"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input 
                            id="phone" 
                            type="tel" 
                            placeholder="Enter your phone number"
                            className="border-border focus:ring-secondary"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Appointment Details */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground flex items-center">
                        <Calendar className="w-5 h-5 mr-2 text-secondary" />
                        Appointment Details
                      </h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Type *</Label>
                        <Select value={selectedService} onValueChange={setSelectedService}>
                          <SelectTrigger className="border-border focus:ring-secondary">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="date">Preferred Date *</Label>
                          <Input 
                            id="date" 
                            type="date" 
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="border-border focus:ring-secondary"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="time">Preferred Time *</Label>
                          <Select value={selectedTime} onValueChange={setSelectedTime}>
                            <SelectTrigger className="border-border focus:ring-secondary">
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((time) => (
                                <SelectItem key={time} value={time.toLowerCase().replace(/\s+/g, '-')}>
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Additional Information</h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="reason">Reason for Visit</Label>
                        <Textarea 
                          id="reason" 
                          placeholder="Briefly describe your symptoms or reason for the visit..."
                          rows={4}
                          className="border-border focus:ring-secondary"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="insurance">Insurance Provider (Optional)</Label>
                        <Input 
                          id="insurance" 
                          placeholder="Enter your insurance provider"
                          className="border-border focus:ring-secondary"
                        />
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full gradient-primary border-0 text-primary-foreground shadow-primary hover:scale-105 transition-bounce"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Appointment
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-secondary" />
                    Need Help?
                  </CardTitle>
                  <CardDescription>
                    WhatsApp us directly to schedule or ask questions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-foreground">012-828 6173</p>
                      <p className="text-sm text-muted-foreground">Main Office</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">012-828 6173</p>
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                    </div>
                    <Button 
                      className="w-full gradient-primary border-0 text-primary-foreground shadow-primary"
                      asChild
                    >
                      <a href="https://wa.me/60128286173?text=Hello%2C%20I%20would%20like%20to%20schedule%20an%20appointment%20at%20Vertex%20Chiropractic" target="_blank" rel="noopener noreferrer">
                        <Phone className="w-4 h-4 mr-2" />
                        WhatsApp Us
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-secondary" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday:</span>
                      <span className="text-foreground font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday:</span>
                      <span className="text-foreground font-medium">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday:</span>
                      <span className="text-foreground font-medium">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="shadow-soft bg-accent">
                <CardHeader>
                  <CardTitle className="text-xl text-accent-foreground">Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-accent-foreground text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointments;