import { Link } from "react-router-dom";
import { Award, Globe2, Leaf, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    icon: Leaf,
    badge: "Sustainable Agriculture",
    title: "GLOBALG.A.P",
    description:
      "Certified for safe, traceable, and environmentally responsible farming practices across every cultivated acre.",
    accent: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  },
  {
    icon: Award,
    badge: "Food Safety",
    title: "ISO 22000",
    description:
      "Internationally recognized Food Safety Management System ensuring strict hygiene from harvest to cold storage.",
    accent: "text-sun-400 bg-sun-400/10 border-sun-400/20",
  },
  {
    icon: Globe2,
    badge: "Trade Ready",
    title: "EU Compliant",
    description:
      "Full compliance with European Union MRL thresholds, phytosanitary testing, and export documentation.",
    accent: "text-berry-200 bg-berry-500/15 border-berry-200/20",
  },
];

const CertificationsPreview = () => {
  return (
    <section className="relative py-20 md:py-28 bg-oasis-950 text-white overflow-hidden">
      {/* Subtle organic lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-96 w-[42rem] rounded-full bg-oasis-600/20 blur-3xl"
      />

      <div className="relative container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow text-emerald-400 mb-3">
            <ShieldCheck className="h-3.5 w-3.5" />
            Verified Standards
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-white leading-[1.1] mb-4">
            Certified Excellence You Can Trust
          </h2>
          <p className="text-base md:text-lg text-white/70 leading-relaxed">
            Every shipment is backed by international food safety certifications and official
            Ministry of Agriculture laboratory testing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {certifications.map(({ icon: Icon, badge, title, description, accent }) => (
            <div
              key={title}
              className="rounded-3xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 p-8 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <div
                  className={`h-12 w-12 rounded-2xl border flex items-center justify-center ${accent}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium text-white/55 uppercase tracking-[0.14em]">
                  {badge}
                </span>
              </div>

              <h3 className="text-2xl font-serif font-semibold text-white mb-3">{title}</h3>
              <p className="text-sm md:text-base text-white/70 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full bg-white/10 hover:bg-white/20 border-white/25 text-white hover:text-white px-7 h-11"
          >
            <Link to="/quality" className="inline-flex items-center gap-2">
              View Our Quality Assurance Process
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CertificationsPreview;
