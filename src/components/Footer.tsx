import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = [
  { label: "About", to: "/about" },
  { label: "Varieties", to: "/products" },
  { label: "Our Farm", to: "/farm" },
  { label: "Quality", to: "/quality" },
  { label: "Export", to: "/export" },
  { label: "FAQ", to: "/#faq" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      {/* Crimson Full-Bleed Export CTA Band */}
      <section className="bg-berry-600 text-cream-50 py-11 md:py-14">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-10">
            <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight shrink-0">
                Talk to our export team.
              </h2>
              <p className="text-sm sm:text-base text-cream-50/90 max-w-md md:border-l md:border-white/25 md:pl-8 leading-relaxed">
                Send your inquiry to receive availability, specifications, and a tailored
                quotation for your market.
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="rounded-[3px] bg-cream-50 hover:bg-white text-oasis-900 px-6 h-11 text-sm font-semibold shadow-none shrink-0"
            >
              <Link to="/contact" className="inline-flex items-center gap-2">
                Send an Inquiry
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Editorial Warm Cream Footer Bar */}
      <div className="bg-cream-100 border-t border-cream-300">
        <div className="container mx-auto py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-cream-300">
            {/* Brand */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <div className="h-12 w-12 rounded-full bg-white p-0.5 ring-1 ring-cream-400/70 shadow-sm overflow-hidden">
                <img
                  src="/lovable-uploads/9937b735-6e84-4902-9b1a-9ce2cb363f4f.png"
                  alt="Strawberry Oasis Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <div className="font-serif text-xl font-bold text-oasis-900 leading-none">
                  Strawberry Oasis
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-oasis-900/65 mt-1">
                  Egyptian Strawberry Exporter
                </div>
              </div>
            </Link>

            {/* Navigation */}
            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap items-center gap-x-7 gap-y-2 md:border-l md:border-cream-400/80 md:pl-8"
            >
              {footerLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="text-sm font-medium text-oasis-900/80 hover:text-berry-600 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Direct Contact & Copyright Row */}
          <div className="pt-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 text-xs text-muted-foreground">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <a
                href="tel:+201554833334"
                className="inline-flex items-center gap-1.5 hover:text-oasis-900 transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-berry-600" />
                +20 155 483 3334
              </a>
              <a
                href="tel:+201003887243"
                className="inline-flex items-center gap-1.5 hover:text-oasis-900 transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-berry-600" />
                +20 100 388 7243
              </a>
              <a
                href="mailto:ahmedelafifi@strawberryoasis.com"
                className="inline-flex items-center gap-1.5 hover:text-oasis-900 transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-berry-600" />
                ahmedelafifi@strawberryoasis.com
              </a>
              <a
                href="https://maps.app.goo.gl/b5RoWeXWRueUGMrV8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-oasis-900 transition-colors"
              >
                <MapPin className="h-3.5 w-3.5 text-berry-600" />
                Agricultural Zone, Egypt
              </a>
            </div>
            <p className="shrink-0">
              &copy; {currentYear} Strawberry Oasis. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
