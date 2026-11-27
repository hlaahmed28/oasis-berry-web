import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEO, { SITE_URL } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
    badge: "Sustainable Agriculture",
    title: "GLOBALG.A.P.",
    description:
      "Our farms meet rigorous international benchmarks for safe, traceable, and environmentally sustainable agricultural production.",
  },
  {
    badge: "Food Safety",
    title: "ISO 22000",
    description:
      "Full Food Safety Management System certification guaranteeing strict hygiene, hazard control, and traceability across our supply chain.",
  },
  {
    badge: "Export Readiness",
    title: "EU Compliant",
    description:
      "Complete adherence to European Union import standards, MRL residue testing, and phytosanitary clearance documentation.",
  },
];

const qaSteps = [
  {
    step: "01",
    title: "Pre-Harvest Inspections",
    description:
      "Continuous field monitoring for Brix sweetness levels, uniform coloration, and phytosanitary health prior to picking.",
  },
  {
    step: "02",
    title: "Post-Harvest Testing & Grading",
    description:
      "Strict sorting by size and firmness alongside official Ministry of Agriculture laboratory residue screening.",
  },
  {
    step: "03",
    title: "Cold Chain Verification",
    description:
      "Rapid forced-air pre-cooling and uninterrupted temperature logging from packing house to airport or port departure.",
  },
  {
    step: "04",
    title: "Final Export Certification",
    description:
      "Complete phytosanitary certificates, EUR.1/origin documentation, and batch traceability sign-off prior to dispatch.",
  },
];

const Quality = () => {
  return (
    <div className="min-h-screen bg-cream-100 overflow-x-hidden flex flex-col">
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
          eyebrow="Our Standards"
          title="Certified excellence you can trust."
          description="We adhere to the highest international food safety and export standards — verified at every step from soil to shipment."
          breadcrumbs={breadcrumbs}
        />

        {/* Certifications Strip */}
        <section className="bg-oasis-900 text-cream-50 py-14 md:py-16">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-white/20">
              {certifications.map((cert) => (
                <div key={cert.title} className="md:px-8 first:md:pl-0 last:md:pr-0">
                  <span className="eyebrow text-cream-300/75 mb-2">{cert.badge}</span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
                    {cert.title}
                  </h2>
                  <p className="text-sm md:text-base text-cream-100/80 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Four-Stage QA Protocol */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto">
            <div className="max-w-2xl mb-10">
              <span className="eyebrow text-berry-600 mb-2">Four-Stage Protocol</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-oasis-900 mb-3">
                Quality assurance process.
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Each shipment undergoes rigorous multi-point verification to guarantee freshness,
                hygiene, and consistency from our fields to your destination port.
              </p>
            </div>

            <div className="grid md:grid-cols-2 border-t border-cream-400/80 mb-14">
              {qaSteps.map((item) => (
                <div
                  key={item.step}
                  className="py-7 md:pr-10 border-b border-cream-400/80"
                >
                  <span className="text-xs font-bold tracking-[0.18em] text-berry-600">
                    STAGE {item.step}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-oasis-900 mt-1.5 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3.5">
              <Button
                asChild
                size="lg"
                className="rounded-[3px] bg-berry-600 hover:bg-berry-700 text-cream-50 px-7 h-11 text-sm font-semibold shadow-none"
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
                className="rounded-[3px] border-oasis-900/30 text-oasis-900 hover:bg-cream-200 px-7 h-11 text-sm font-semibold"
              >
                <Link to="/products">View Ministry Certificate</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Quality;
