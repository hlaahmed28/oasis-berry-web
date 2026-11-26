import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-oasis-950 text-white overflow-hidden">
      {/* Subtle decorative radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-berry-600/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-oasis-600/20 blur-3xl"
      />

      <div className="relative container mx-auto pt-16 pb-10">
        {/* Top CTA strip */}
        <div className="rounded-3xl bg-white/[0.04] border border-white/10 p-8 md:p-10 mb-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="eyebrow text-sun-400 mb-2">
              <ShieldCheck className="h-3.5 w-3.5" />
              Global Export Partners
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-white">
              Ready to source Egypt&apos;s finest strawberries?
            </h3>
            <p className="text-white/70 mt-2 max-w-xl text-sm md:text-base">
              Connect directly with our export desk for seasonal allocations, air &amp; sea freight schedules, and custom retail packaging.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-berry-600 hover:bg-berry-700 text-white px-7 h-12 shadow-berry shrink-0"
          >
            <Link to="/contact" className="inline-flex items-center gap-2">
              Start an Inquiry
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="h-12 w-12 rounded-full bg-white p-0.5 shadow-sm overflow-hidden">
                <img
                  src="/lovable-uploads/9937b735-6e84-4902-9b1a-9ce2cb363f4f.png"
                  alt="Strawberry Oasis Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <div className="font-serif text-xl font-semibold text-white">
                  Strawberry Oasis
                </div>
                <div className="text-[11px] uppercase tracking-[0.16em] text-white/60">
                  Premium Egyptian Export
                </div>
              </div>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              Cultivating and exporting certified Egyptian strawberries worldwide with uncompromised cold-chain integrity and sustainable agricultural standards.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {["GLOBALG.A.P", "ISO 22000", "EU Compliant"].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.06] border border-white/10 text-white/85"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-white/50 mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "About Us", to: "/about" },
                { label: "Our Varieties", to: "/products" },
                { label: "Our Farm", to: "/farm" },
                { label: "Quality & Certs", to: "/quality" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-white/75 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Export Links */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-white/50 mb-5">
              Trade &amp; Export
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Export Logistics", to: "/export" },
                { label: "Custom Packaging", to: "/products" },
                { label: "Request a Quote", to: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-white/75 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-white/50 mb-5">
              Direct Export Desk
            </h4>
            <div className="space-y-4 text-sm text-white/75">
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-berry-500 mt-0.5 shrink-0" />
                <div className="space-y-1">
                  <a
                    href="tel:+201554833334"
                    className="block hover:text-white transition-colors"
                  >
                    +20 155 483 3334 <span className="text-white/45">(Ahmed El Afifi)</span>
                  </a>
                  <a
                    href="tel:+201003887243"
                    className="block hover:text-white transition-colors"
                  >
                    +20 100 388 7243 <span className="text-white/45">(Mohamed Fahmy)</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-berry-500 mt-0.5 shrink-0" />
                <div className="space-y-1 break-all">
                  <a
                    href="mailto:ahmedelafifi@strawberryoasis.com"
                    className="block hover:text-white transition-colors"
                  >
                    ahmedelafifi@strawberryoasis.com
                  </a>
                  <a
                    href="mailto:Mohamed.fahmy@strawberryoasis.com"
                    className="block hover:text-white transition-colors"
                  >
                    Mohamed.fahmy@strawberryoasis.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-berry-500 mt-0.5 shrink-0" />
                <a
                  href="https://maps.app.goo.gl/b5RoWeXWRueUGMrV8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-white/85 hover:text-sun-400 transition-colors"
                >
                  Agricultural Zone, Egypt — View on Google Maps
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>&copy; {currentYear} Strawberry Oasis. All rights reserved.</p>
          <p>Grown in Egypt &bull; Exported Worldwide</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
