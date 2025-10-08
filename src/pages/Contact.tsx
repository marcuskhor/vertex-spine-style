import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { MapPin, Phone, Mail, Clock, Send, CalendarIcon, Facebook, Instagram, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const services = [
    "Initial Consultation",
    "Adults Chiropractic",
    "Kids Chiropractic",
    "Prenatal Chiropractic",
    "Dry Needling Therapy",
    "Flexion Distraction Therapy",
    "Physiotherapy"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          type: "contact",
          ...formData,
          service: selectedService,
          preferredDateTime: selectedDate && selectedTime 
            ? `${format(selectedDate, "MMMM dd, yyyy")} at ${selectedTime}`
            : undefined,
        },
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setSelectedService("");
      setSelectedDate(undefined);
      setSelectedTime("");
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Ready to take the first step towards better health? Get in touch with our team 
            to schedule your appointment or ask any questions you may have.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter your first name"
                        className="border-border focus:ring-secondary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter your last name"
                        className="border-border focus:ring-secondary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="border-border focus:ring-secondary"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="border-border focus:ring-secondary"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In</Label>
                    <Select value={selectedService} onValueChange={setSelectedService}>
                      <SelectTrigger className="border-border focus:ring-secondary">
                        <SelectValue placeholder="Select a service (optional)" />
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

                  <div className="space-y-2">
                    <Label>Preferred Appointment Date & Time (Optional)</Label>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="justify-start text-left font-normal border-border"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {selectedDate ? format(selectedDate, "MMM dd, yyyy") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            initialFocus
                            disabled={(date) => date < new Date()}
                          />
                        </PopoverContent>
                      </Popover>
                      
                      <Select value={selectedTime} onValueChange={setSelectedTime}>
                        <SelectTrigger className="border-border focus:ring-secondary">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                          <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                          <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                          <SelectItem value="12:00 PM">12:00 PM</SelectItem>
                          <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                          <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                          <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                          <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                          <SelectItem value="5:00 PM">5:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      className="border-border focus:ring-secondary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your needs..."
                      rows={5}
                      className="border-border focus:ring-secondary"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gradient-primary border-0 text-primary-foreground shadow-primary hover:scale-105 transition-bounce"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Visit Our Clinic</CardTitle>
                  <CardDescription>
                    We're conveniently located in the heart of the city with easy parking.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-healing rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Address</h4>
                      <p className="text-muted-foreground">
                        Unit A-2-8, Perdana, Plaza Arkadia<br />
                        3, Jalan Intisari, Desa Parkcity<br />
                        52200 Kuala Lumpur, Wilayah Persekutuan
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-healing rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                      <p className="text-muted-foreground">
                        Main: 012-828 6173<br />
                        WhatsApp: 012-828 6173
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-healing rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground">
                        General: info@vertexchiro.com<br />
                        Appointments: appointments@vertexchiro.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-healing rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Hours</h4>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a 
                        href="https://www.facebook.com/profile.php?id=61569316016767" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 gradient-healing hover:scale-110 rounded-lg flex items-center justify-center transition-smooth"
                        aria-label="Facebook"
                      >
                        <Facebook className="w-5 h-5 text-primary" />
                      </a>
                      <a 
                        href="https://www.instagram.com/vertexchiro/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 gradient-healing hover:scale-110 rounded-lg flex items-center justify-center transition-smooth"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-5 h-5 text-primary" />
                      </a>
                      <a 
                        href="https://www.xiaohongshu.com/user/profile/64298e810000000012013dea?xsec_token=&xsec_source=pc_note" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 gradient-healing hover:scale-110 rounded-lg flex items-center justify-center transition-smooth"
                        aria-label="RedNote"
                      >
                        <BookOpen className="w-5 h-5 text-primary" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="shadow-soft bg-accent">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-accent-foreground mb-4">
                    Need Immediate Care?
                  </h3>
                  <p className="text-accent-foreground/80 mb-6">
                    For urgent matters, message us on WhatsApp for immediate assistance.
                  </p>
                  <Button 
                    className="gradient-primary border-0 text-primary-foreground shadow-primary hover:scale-105 transition-bounce w-full"
                    asChild
                  >
                    <a href="https://wa.me/60128286173?text=Hello%2C%20I%20have%20an%20urgent%20matter%20and%20would%20like%20to%20contact%20Vertex%20Chiropractic" target="_blank" rel="noopener noreferrer">
                      <Phone className="w-4 h-4 mr-2" />
                      WhatsApp Us
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;