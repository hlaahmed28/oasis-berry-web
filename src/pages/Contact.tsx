import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEO, { SITE_URL } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm, ContactFormData } from "@/services/contactService";
import { Phone, Mail, MapPin, Clock, Send, ArrowUpRight } from "lucide-react";

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Strawberry Oasis Export Desk",
  url: `${SITE_URL}/contact`,
  description:
    "Contact Strawberry Oasis directly for Egyptian strawberry export quotes, CIF/FOB pricing, seasonal schedules, and custom packaging.",
};

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    country: "",
    message: "",
    website: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitContactForm(formData);

      if (result.success) {
        toast({
          title: "Inquiry sent successfully!",
          description: result.message,
        });

        setFormData({
          name: "",
          email: "",
          company: "",
          country: "",
          message: "",
          website: "",
        });
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast({
        variant: "destructive",
        title: "Could not send message",
        description:
          error instanceof Error
            ? error.message
            : "Please try again or reach us directly by email or phone.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden flex flex-col">
      <SEO
        title="Contact Export Desk — Request Egyptian Strawberry Quote"
        description="Request CIF/FOB pricing, seasonal availability, and custom packaging quotes directly from Strawberry Oasis's export directors in Egypt. Response within 24 hours."
        path="/contact"
        keywords="contact Egyptian strawberry exporter, request strawberry export quote, buy wholesale strawberries Egypt, Strawberry Oasis contact"
        breadcrumbs={breadcrumbs}
        structuredData={contactSchema}
      />
      <Navigation />

      <main className="flex-1">
        <PageHeader
          eyebrow="Contact Export Desk"
          title="Let's Work Together"
          description="Ready to import premium Egyptian strawberries? Reach out for seasonal pricing, specifications, and custom export programs."
          breadcrumbs={breadcrumbs}
        />

        <section className="py-16 md:py-24">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Contact Form Card */}
              <div className="lg:col-span-7 rounded-3xl bg-card border border-border/80 p-7 sm:p-10 shadow-soft">
                <div className="mb-8">
                  <span className="eyebrow text-berry-600 mb-2">Direct Inquiry</span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-foreground">
                    Send Us a Message
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1.5">
                    Share your destination market, preferred packaging, and approximate volume — our
                    team replies within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Hidden honeypot field to deter spam bots */}
                  <input
                    type="text"
                    name="website"
                    value={formData.website ?? ""}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                  />

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        className="h-11 rounded-xl bg-background/60"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="h-11 rounded-xl bg-background/60"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm font-medium">
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Company or distributor"
                        value={formData.company}
                        onChange={handleChange}
                        className="h-11 rounded-xl bg-background/60"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country" className="text-sm font-medium">
                        Country / Destination
                      </Label>
                      <Input
                        id="country"
                        name="country"
                        type="text"
                        placeholder="e.g. United Kingdom, UAE, Germany"
                        value={formData.country}
                        onChange={handleChange}
                        className="h-11 rounded-xl bg-background/60"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="min-h-[140px] rounded-xl bg-background/60 resize-y"
                      placeholder="Tell us about your requirements, preferred variety (Festival / Florida Beauty), quantities, packaging, and timeline..."
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-full bg-berry-600 hover:bg-berry-700 text-white h-12 text-base shadow-berry transition-all"
                    disabled={isSubmitting}
                  >
                    <Send className="h-4 w-4 mr-2" />
                    {isSubmitting ? "Sending Inquiry..." : "Send Inquiry"}
                  </Button>
                </form>
              </div>

              {/* Contact Details Column */}
              <div className="lg:col-span-5 space-y-5">
                <div className="rounded-3xl bg-card border border-border/80 p-6 shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="h-11 w-11 rounded-2xl bg-berry-50 border border-berry-200/70 text-berry-600 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-serif font-semibold text-foreground">
                        Phone Numbers
                      </h3>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <a
                          href="tel:+201554833334"
                          className="block hover:text-berry-600 transition-colors"
                        >
                          <span className="font-medium text-foreground">Ahmed El Afifi:</span> +20
                          155 483 3334
                        </a>
                        <a
                          href="tel:+201003887243"
                          className="block hover:text-berry-600 transition-colors"
                        >
                          <span className="font-medium text-foreground">Mohamed Fahmy:</span> +20
                          100 388 7243
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl bg-card border border-border/80 p-6 shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="h-11 w-11 rounded-2xl bg-berry-50 border border-berry-200/70 text-berry-600 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="space-y-1.5 min-w-0">
                      <h3 className="text-lg font-serif font-semibold text-foreground">
                        Email Addresses
                      </h3>
                      <div className="text-sm text-muted-foreground space-y-1 break-all">
                        <a
                          href="mailto:ahmedelafifi@strawberryoasis.com"
                          className="block hover:text-berry-600 transition-colors font-medium text-foreground/85"
                        >
                          ahmedelafifi@strawberryoasis.com
                        </a>
                        <a
                          href="mailto:Mohamed.fahmy@strawberryoasis.com"
                          className="block hover:text-berry-600 transition-colors font-medium text-foreground/85"
                        >
                          Mohamed.fahmy@strawberryoasis.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl bg-card border border-border/80 p-6 shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="h-11 w-11 rounded-2xl bg-oasis-50 border border-oasis-200/80 text-oasis-700 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-serif font-semibold text-foreground">
                        Farm Location
                      </h3>
                      <p className="text-sm text-muted-foreground">Agricultural Zone, Egypt</p>
                      <a
                        href="https://maps.app.goo.gl/b5RoWeXWRueUGMrV8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-oasis-700 hover:text-berry-600 transition-colors pt-1"
                      >
                        View on Google Maps
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl bg-oasis-950 text-white p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-11 w-11 rounded-2xl bg-white/10 text-sun-400 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <h3 className="text-lg font-serif font-semibold text-white">
                        Business Hours
                      </h3>
                      <div className="text-sm text-white/75 space-y-1">
                        <div className="flex justify-between gap-4">
                          <span>Mon – Fri</span>
                          <span className="text-white font-medium">8:00 AM – 6:00 PM (EET)</span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span>Saturday</span>
                          <span className="text-white font-medium">9:00 AM – 2:00 PM (EET)</span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span>Sunday</span>
                          <span className="text-white/50">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
