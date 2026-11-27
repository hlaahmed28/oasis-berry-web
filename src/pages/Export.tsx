import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEO, { SITE_URL } from "@/components/SEO";
import ExportFAQ, { exportFaqJsonLd } from "@/components/ExportFAQ";
import { Check } from "lucide-react";

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Global Export", path: "/export" },
];

const exportServiceSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fresh & Frozen Egyptian Strawberry International Export",
    provider: { "@id": `${SITE_URL}/#organization` },
    serviceType: "Agricultural Produce Export & Cold-Chain Logistics",
    areaServed: ["Europe", "United Kingdom", "United States", "Middle East", "Asia"],
    description:
      "Seasonal fresh and year-round frozen export of Fortuna and Brilliance Egyptian strawberries (GLOBALG.A.P, ISO 22000, EU & FDA compliant) with retail clamshells, export cartons, and air or sea cold-chain freight.",
  },
  exportFaqJsonLd,
];

const months = [
  { label: "Jan", active: true },
  { label: "Feb", active: true },
  { label: "Mar", active: true },
  { label: "Apr", active: true },
  { label: "May", active: true },
  { label: "Jun", active: false },
  { label: "Jul", active: false },
  { label: "Aug", active: false },
  { label: "Sep", active: false },
  { label: "Oct", active: false },
  { label: "Nov", active: true },
  { label: "Dec", active: true },
];

const capabilities = [
  {
    title: "Export Seasons",
    subtitle: "Main Season: November — May",
    description:
      "Our peak harvest window aligns with winter and spring demand across Europe, the Gulf, and Asia — delivering consistent weekly supply.",
    items: [
      "Early harvest starting November",
      "Peak volume December through April",
      "Consistent weekly flight & vessel allocations",
    ],
  },
  {
    title: "Packaging Options",
    subtitle: "Retail & Wholesale Ready",
    description:
      "Precision-packed formats engineered for shelf appeal and safe international handling.",
    items: [
      "Clamshells (250g, 500g)",
      "Export cartons (2kg, 5kg)",
      "Bulk crates in custom weights",
      "Private-label & custom branding available",
    ],
  },
  {
    title: "Logistics Solutions",
    subtitle: "End-to-End Cold Chain",
    description:
      "Seamless air and sea freight coordination with strict temperature monitoring throughout transit.",
    items: [
      "Unbroken cold-chain management",
      "Express air freight for fresh retail programs",
      "Reefer sea freight for bulk volumes",
      "Temperature-controlled pre-cooling & storage",
    ],
  },
  {
    title: "Minimum Orders",
    subtitle: "Flexible Quantities for Bulk Orders",
    description:
      "We scale with your business — accommodating trial shipments, seasonal supermarket programs, and high-volume wholesale contracts.",
    items: [
      "Flexible pallet & container volumes",
      "Mixed-variety shipments on request",
      "Dedicated export documentation support",
    ],
  },
];

const metrics = [
  { value: "50+", label: "Countries Served" },
  { value: "1,000+", label: "Tons Exported Annually" },
  { value: "99%", label: "Customer Satisfaction" },
];

const Export = () => {
  return (
    <div className="min-h-screen bg-cream-100 overflow-x-hidden flex flex-col">
      <SEO
        title="Global Export & Cold-Chain Logistics — Nov to May Season"
        description="Import fresh Egyptian strawberries worldwide during our November–May harvest season. Flexible MOQs, custom retail clamshells, export cartons, and air or sea cold-chain freight."
        path="/export"
        keywords="import Egyptian strawberries, strawberry export season November to May, cold chain air freight strawberries Egypt, wholesale strawberry exporter Europe Middle East Asia"
        image="/lovable-uploads/276ce224-c924-49b2-b6bb-4b3b332bb863.png"
        imageAlt="Export-ready Egyptian strawberry clamshells in master cartons"
        breadcrumbs={breadcrumbs}
        structuredData={exportServiceSchema}
      />
      <Navigation />

      <main className="flex-1">
        <PageHeader
          eyebrow="Global Export"
          title="Exporting Egyptian excellence worldwide."
          description="Delivering fresh Egyptian strawberries to Europe, the Middle East, Asia, and beyond with flexible logistics and custom packaging."
          breadcrumbs={breadcrumbs}
        />

        <section className="py-14 md:py-20">
          <div className="container mx-auto">
            {/* Hero Photo */}
            <div className="overflow-hidden bg-cream-200 mb-14">
              <img
                src="/lovable-uploads/276ce224-c924-49b2-b6bb-4b3b332bb863.png"
                alt="Export-ready strawberry clamshells packed in master cartons"
                className="w-full h-72 sm:h-96 md:h-[440px] object-cover"
              />
            </div>

            {/* Seasonality Calendar */}
            <div className="border-y border-cream-400/80 py-8 mb-14">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
                <div>
                  <span className="eyebrow text-berry-600 mb-1.5">Harvest Calendar</span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-oasis-900">
                    Fresh strawberry export window.
                  </h2>
                </div>
                <div className="inline-flex items-center gap-5 text-xs font-medium text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2.5 w-2.5 bg-berry-600" />
                    Active Export (Nov — May)
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2.5 w-2.5 bg-cream-200 border border-cream-400" />
                    Off-Season Prep
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-2">
                {months.map((m) => (
                  <div
                    key={m.label}
                    className={`py-3 text-center text-xs font-semibold ${
                      m.active
                        ? "bg-berry-600 text-cream-50"
                        : "bg-cream-200/70 text-muted-foreground border border-cream-300"
                    }`}
                  >
                    {m.label}
                  </div>
                ))}
              </div>
            </div>

            {/* 2x2 Capabilities Grid */}
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 mb-16">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="border-t border-cream-400/80 pt-6 flex flex-col"
                >
                  <span className="eyebrow text-berry-600 mb-1.5">{cap.subtitle}</span>
                  <h3 className="text-2xl font-serif font-bold text-oasis-900 mb-2.5">
                    {cap.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                    {cap.description}
                  </p>
                  <ul className="space-y-2 mt-auto">
                    {cap.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm text-oasis-900/90"
                      >
                        <Check className="h-4 w-4 text-berry-600 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Metrics Band */}
            <div className="bg-oasis-900 text-cream-50 py-12 px-8">
              <div className="grid sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x divide-white/20 text-center">
                {metrics.map((metric) => (
                  <div key={metric.label} className="sm:px-6">
                    <div className="text-4xl md:text-5xl font-serif font-bold text-white">
                      {metric.value}
                    </div>
                    <p className="text-xs uppercase tracking-[0.16em] text-cream-200/75 mt-2">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ExportFAQ />
      </main>

      <Footer />
    </div>
  );
};

export default Export;
