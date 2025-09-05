import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl text-primary-foreground mb-6">
            GET IN <span className="text-secondary">TOUCH</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Ready to start your fitness journey? Contact us today for a free trial class or to learn more about our programs.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-display text-4xl mb-8">
                VISIT <span className="text-primary">US</span>
              </h2>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Location</h3>
                      <p className="text-muted-foreground">
                        933 Lejeune Blvd<br />
                        Jacksonville, NC 28540<br />
                        United States
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Phone</h3>
                      <a
                        href="tel:+19104677825"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +1 910-467-7825
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Hours</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Friday: 4:00 PM - 8:00 PM</p>
                        <p>Saturday: 11:00 AM - 3:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Email</h3>
                      <a
                        href="mailto:info@10roundsfitness.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@10roundsfitness.com
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-display text-4xl mb-8">
                SEND US A <span className="text-primary">MESSAGE</span>
              </h2>
              
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="(910) 555-0123"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="mt-1 min-h-[120px]"
                      placeholder="Tell us about your fitness goals..."
                    />
                  </div>

                  <Button type="submit" variant="default" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.6974517835!2d-77.43082!3d34.738576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a9116d0e8e7e61%3A0x0!2s933%20Lejeune%20Blvd%2C%20Jacksonville%2C%20NC%2028540!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="10 Rounds of Fitness Location"
          className="filter grayscale hover:grayscale-0 transition-all duration-300"
        />
      </section>
    </main>
  );
};

export default Contact;