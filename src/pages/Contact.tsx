
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm, ContactFormData } from "@/services/contactService";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    country: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await submitContactForm(formData);
      
      if (result.success) {
        toast({
          title: "Message sent successfully!",
          description: result.message,
        });
        
        // Clear form after successful submission
        setFormData({
          name: "",
          email: "",
          company: "",
          country: "",
          message: ""
        });
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly at ahmedelafifi@strawberryoasis.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Work Together
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to import premium Egyptian strawberries? Get in touch with our export team 
              for quotes, specifications, and partnership opportunities.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <Label htmlFor="country">Country</Label>
                  <Input
                    id="country"
                    name="country"
                    type="text"
                    value={formData.country}
                    onChange={handleChange}
                    className="mt-1"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 min-h-[120px]"
                    placeholder="Tell us about your requirements, quantities, and timeline..."
                    disabled={isSubmitting}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-red-600 hover:bg-red-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-sm font-semibold text-blue-800 mb-2">📧 Form Submissions</h3>
                <p className="text-blue-700 text-sm">
                  Currently form submissions are logged for testing. To receive actual emails, 
                  connect your project to Supabase using the green button in the top right.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">📞</span>
                    <h3 className="text-lg font-semibold text-foreground">Phone Numbers</h3>
                  </div>
                  <div className="text-muted-foreground space-y-1">
                    <p>Ahmed El Afifi: +20 155 483 3334</p>
                    <p>Mohamed Fahmy: +20 100 388 7243</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">📧</span>
                    <h3 className="text-lg font-semibold text-foreground">Email Addresses</h3>
                  </div>
                  <div className="text-muted-foreground space-y-1">
                    <p>ahmedelafifi@strawberryoasis.com</p>
                    <p>Mohamed.fahmy@strawberryoasis.com</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">📍</span>
                    <h3 className="text-lg font-semibold text-foreground">Location</h3>
                  </div>
                  <div className="text-muted-foreground">
                    <a 
                      href="https://maps.app.goo.gl/b5RoWeXWRueUGMrV8" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      View our farm location on Google Maps
                    </a>
                    <p className="mt-1">Agricultural Zone, Egypt</p>
                  </div>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Business Hours</h3>
                  <div className="text-green-700 space-y-1">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM (EET)</p>
                    <p>Saturday: 9:00 AM - 2:00 PM (EET)</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
