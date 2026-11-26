import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEO, { SITE_URL } from "@/components/SEO";
import ExportFAQ, { exportFaqJsonLd } from "@/components/ExportFAQ";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Calendar,
  Package,
  Plane,
  Boxes,
  CheckCircle2,
  ArrowRight,
  Globe2,
} from "lucide-react";

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Global Export", path: "/export" },
];

const exportServiceSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fresh Egyptian Strawberry International Export",
    provider: { "@id": `${SITE_URL}/#organization` },
    serviceType: "Agricultural Produce Export & Cold-Chain Logistics",
    areaServed: ["Europe", "United Kingdom", "Middle East", "Asia"],
    description:
      "Seasonal export of fresh Festival and Florida Beauty Egyptian strawberries from November to May with retail clamshells, export cartons, and air or sea cold-chain freight.",
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
    icon: Calendar,
    title: "Export Seasons",
    subtitle: "Main Season: November to May",
    description:
      "Our peak harvest window aligns seamlessly with winter and spring demand across Europe, the Gulf, and Asia — delivering consistent weekly supply.",
    items: [
      "Early harvest starting November",
      "Peak volume December through April",
      "Consistent weekly flight & vessel allocations",
    ],
  },
  {
    icon: Package,
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
    icon: Plane,
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
    icon: Boxes,
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
  { value: "50+", label: "Countries Served", accent: "text-emerald-400" },
  { value: "1,000+", label: "Tons Exported Annually", accent: "text-berry-200" },
  { value: "99%", label: "Customer Satisfaction", accent: "text-sun-400" },
];

const Export = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden flex flex-col">
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
          title="Exporting Egyptian Excellence Worldwide"
          description="Delivering fresh Egyptian strawberries to Europe, the Middle East, Asia, and beyond with flexible logistics and custom packaging."
          breadcrumbs={breadcrumbs}
        />

        <section className="py-16 md:py-24">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto">
              {/* Hero Photo */}
              <div className="overflow-hidden rounded-3xl shadow-elevated border border-border/70 mb-14 bg-card">
                <img
                  src="/lovable-uploads/276ce224-c924-49b2-b6bb-4b3b332bb863.png"
                  alt="Export-ready strawberry clamshells packed in master cartons"
                  className="w-full h-72 sm:h-96 md:h-[440px] object-cover"
                />
              </div>

              {/* Seasonality Visual Calendar */}
              <div className="rounded-3xl bg-card border border-border/80 p-7 md:p-9 shadow-soft mb-12">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                  <div>
                    <span className="eyebrow text-berry-600 mb-1.5">Harvest Calendar</span>
                    <h2 className="text-2xl font-serif font-semibold text-foreground">
                      Fresh Strawberry Export Window
                    </h2>
                  </div>
                  <div className="inline-flex items-center gap-4 text-xs font-medium text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-berry-600" />
                      Active Export (Nov – May)
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-muted border border-border" />
                      Off-Season Prep
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-2">
                  {months.map((m) => (
                    <div
                      key={m.label}
                      className={`rounded-xl py-3 text-center text-xs font-semibold transition-colors ${
                        m.active
                          ? "bg-berry-600 text-white shadow-sm"
                          : "bg-muted/70 text-muted-foreground border border-border/60"
                      }`}
                    >
                      {m.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* 2x2 Capabilities Grid */}
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
                {capabilities.map(({ icon: Icon, title, subtitle, description, items }) => (
                  <div
                    key={title}
                    className="rounded-3xl bg-card border border-border/80 p-7 md:p-8 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col"
                  >
                    <div className="flex items-center gap-3.5 mb-5">
                      <div className="h-12 w-12 rounded-2xl bg-oasis-50 border border-oasis-200/80 text-oasis-700 flex items-center justify-center shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-serif font-semibold text-foreground">
                          {title}
                        </h3>
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-berry-600">
                          {subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                      {description}
                    </p>

                    <ul className="space-y-2 pt-4 border-t border-border/60 mt-auto">
                      {items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2.5 text-sm text-foreground/85"
                        >
                          <CheckCircle2 className="h-4 w-4 text-oasis-600 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Global Metrics + CTA */}
              <div className="rounded-3xl bg-oasis-950 text-white p-8 md:p-12 overflow-hidden relative">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-berry-600/20 blur-3xl"
                />

                <div className="relative">
                  <div className="grid sm:grid-cols-3 gap-6 pb-10 mb-10 border-b border-white/10 text-center">
                    {metrics.map((metric) => (
                      <div key={metric.label}>
                        <div
                          className={`text-4xl md:text-5xl font-serif font-semibold ${metric.accent}`}
                        >
                          {metric.value}
                        </div>
                        <p className="text-sm text-white/70 mt-2">{metric.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="max-w-xl">
                      <span className="eyebrow text-emerald-400 mb-2">
                        <Globe2 className="h-3.5 w-3.5" />
                        Ready to Import?
                      </span>
                      <h3 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-2">
                        Partner with our export desk for this season
                      </h3>
                      <p className="text-white/75 text-sm md:text-base">
                        Get tailored CIF/FOB quotes, shipping schedules, and custom packaging
                        specifications for your market.
                      </p>
                    </div>
                    <Button
                      asChild
                      size="lg"
                      className="rounded-full bg-berry-600 hover:bg-berry-700 text-white px-7 h-12 shadow-berry shrink-0"
                    >
                      <Link to="/contact" className="inline-flex items-center gap-2">
                        Contact Us for a Quote
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
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
