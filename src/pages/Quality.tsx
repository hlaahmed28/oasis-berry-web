import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEO, { SITE_URL } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Leaf,
  Award,
  Globe2,
  ClipboardCheck,
  Microscope,
  Snowflake,
  FileCheck2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Quality & Certifications", path: "/quality" },
];

const qualitySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Quality Assurance & Certifications — GLOBALG.A.P & ISO 22000",
  url: `${SITE_URL}/quality`,
  description:
    "GLOBALG.A.P certified, ISO 22000 certified, and EU export compliant Egyptian strawberries backed by four-stage cold-chain quality assurance.",
};

const certifications = [
  {
    icon: Leaf,
    badge: "Sustainable Farming",
    title: "GLOBALG.A.P Certified",
    description:
      "Our farms meet rigorous international benchmarks for safe, traceable, and environmentally sustainable agricultural production.",
    iconColor: "bg-oasis-50 text-oasis-700 border-oasis-200/80",
  },
  {
    icon: Award,
    badge: "Food Safety",
    title: "ISO 22000 Certified",
    description:
      "Full Food Safety Management System certification guaranteeing strict hygiene, hazard control, and traceability across our entire supply chain.",
    iconColor: "bg-amber-50 text-sun-600 border-amber-200/80",
  },
  {
    icon: Globe2,
    badge: "Export Readiness",
    title: "EU Export Compliant",
    description:
      "Complete adherence to European Union import standards, MRL residue testing, and phytosanitary clearance documentation.",
    iconColor: "bg-berry-50 text-berry-700 border-berry-200/80",
  },
];

const qaSteps = [
  {
    step: "01",
    icon: ClipboardCheck,
    title: "Pre-Harvest Inspections",
    description:
      "Continuous field monitoring for Brix sweetness levels, uniform coloration, and phytosanitary health prior to picking.",
  },
  {
    step: "02",
    icon: Microscope,
    title: "Post-Harvest Testing & Grading",
    description:
      "Strict sorting by size and firmness alongside official Ministry of Agriculture laboratory residue screening.",
  },
  {
    step: "03",
    icon: Snowflake,
    title: "Cold Chain Verification",
    description:
      "Rapid forced-air pre-cooling and uninterrupted temperature logging from packing house to airport or port departure.",
  },
  {
    step: "04",
    icon: FileCheck2,
    title: "Final Export Certification",
    description:
      "Complete phytosanitary certificates, EUR.1/origin documentation, and batch traceability sign-off prior to dispatch.",
  },
];

const Quality = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden flex flex-col">
      <SEO
        title="Quality & Certifications — GLOBALG.A.P, ISO 22000 & EU Compliant"
        description="Learn how Strawberry Oasis guarantees safe, residue-tested Egyptian strawberries through GLOBALG.A.P, ISO 22000, EU MRL compliance, and 4-stage cold-chain quality assurance."
        path="/quality"
        keywords="GLOBALG.A.P Egyptian strawberries, ISO 22000 food safety strawberries, EU compliant Egyptian produce, strawberry quality assurance cold chain"
        breadcrumbs={breadcrumbs}
        structuredData={qualitySchema}
      />
      <Navigation />

      <main className="flex-1">
        <PageHeader
          eyebrow="Quality & Compliance"
          title="Certified Excellence You Can Trust"
          description="We proudly adhere to the highest international food safety and export standards — verified at every step from soil to shipment."
          breadcrumbs={breadcrumbs}
        />

        <section className="py-16 md:py-24">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto">
              {/* Certifications Grid */}
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
                {certifications.map(({ icon: Icon, badge, title, description, iconColor }) => (
                  <div
                    key={title}
                    className="rounded-3xl bg-card border border-border/80 p-8 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col"
                  >
                    <div
                      className={`h-12 w-12 rounded-2xl border flex items-center justify-center mb-6 ${iconColor}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2">
                      {badge}
                    </span>
                    <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">
                      {title}
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {description}
                    </p>
                  </div>
                ))}
              </div>

              {/* 4-Step Quality Assurance Process */}
              <div className="rounded-3xl bg-oasis-950 text-white p-8 md:p-12 mb-16 relative overflow-hidden">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-berry-600/20 blur-3xl"
                />

                <div className="relative">
                  <div className="max-w-2xl mb-10">
                    <span className="eyebrow text-emerald-400 mb-3">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      Four-Stage Protocol
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-3">
                      Quality Assurance Process
                    </h2>
                    <p className="text-white/75 text-base leading-relaxed">
                      Each shipment undergoes rigorous multi-point verification to guarantee
                      freshness, hygiene, and consistency from our fields to your destination port.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {qaSteps.map(({ step, icon: Icon, title, description }) => (
                      <div
                        key={step}
                        className="rounded-2xl bg-white/[0.05] border border-white/10 p-6 flex items-start gap-4"
                      >
                        <div className="h-11 w-11 rounded-xl bg-white/10 text-sun-400 flex items-center justify-center shrink-0">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50 mb-1">
                            Stage {step}
                          </div>
                          <h3 className="text-lg font-serif font-semibold text-white mb-1.5">
                            {title}
                          </h3>
                          <p className="text-sm text-white/70 leading-relaxed">{description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Trust Closing Block */}
              <div className="text-center rounded-3xl bg-white border border-border/80 p-9 md:p-12 shadow-soft">
                <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
                  Trust in Every Berry
                </h2>
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-7">
                  Our commitment to quality extends beyond certificates on a wall. We stand behind
                  full batch transparency, cold-chain accountability, and long-term buyer
                  partnerships.
                </p>
                <div className="flex flex-wrap justify-center gap-3.5">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-berry-600 hover:bg-berry-700 text-white px-7 h-12 shadow-berry"
                  >
                    <Link to="/contact" className="inline-flex items-center gap-2">
                      Request Quality Documentation
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-full px-7 h-12"
                  >
                    <Link to="/products">View Ministry Certificate</Link>
                  </Button>
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

export default Quality;
