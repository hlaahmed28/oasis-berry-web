import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEO, { SITE_URL } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sprout } from "lucide-react";

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Our Farm", path: "/farm" },
];

const farmSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Our Egyptian Strawberry Farm",
  url: `${SITE_URL}/farm`,
  description:
    "Explore Strawberry Oasis's sustainable Egyptian strawberry farms, organic fertilizers, precision irrigation, and ISO-grade packing house.",
};

const farmPractices = [
  {
    step: "01",
    category: "Agronomy",
    title: "Expert Care",
    image: "/lovable-uploads/a9f9fa22-07e2-4305-bc8e-9af9cdccd5a0.png",
    alt: "Farm workers tending the strawberry fields",
    description:
      "Our skilled farmers and agronomists ensure each crop receives attentive, daily care — from nursery planting to peak-ripeness harvest.",
  },
  {
    step: "02",
    category: "Nutrition",
    title: "Organic Fertilizers",
    image: "/lovable-uploads/bf25374c-4ce7-4f81-b6fb-a50a53ff3bb0.png",
    alt: "Flowering strawberry plants in fertile beds",
    description:
      "We rely on safe, certified organic fertilizers and responsible crop protection that preserve soil biodiversity and enhance natural berry sweetness.",
  },
  {
    step: "03",
    category: "Packing House",
    title: "Quality Control",
    image: "/lovable-uploads/58b3affa-8eca-4f3f-aa4d-2e667b1be6ad.png",
    alt: "Hygiene-controlled sorting and packing team",
    description:
      "Dedicated hygiene-controlled packing stations and real-time grading track every punnet from field selection to rapid pre-cooling.",
  },
  {
    step: "04",
    category: "Compliance",
    title: "Certified Quality",
    image: "/lovable-uploads/ebbd049e-f09e-4e09-8516-c049141a9d6d.png",
    alt: "Certified export-ready strawberries",
    description:
      "Every harvest lot meets strict international food safety certifications and residue testing to ensure complete confidence on arrival.",
  },
];

const Farm = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden flex flex-col">
      <SEO
        title="Our Egyptian Strawberry Farm & Sustainable Cultivation"
        description="Tour our fertile Egyptian strawberry farms featuring precision irrigation, organic fertilizers, hygiene-controlled packing stations, and certified quality control."
        path="/farm"
        keywords="Egyptian strawberry farm, organic strawberry cultivation Egypt, precision irrigation strawberries, strawberry packing house Egypt"
        image="/lovable-uploads/4fd05db0-df8c-4f3d-a995-035533f5c47b.png"
        imageAlt="Strawberry Oasis fertile Egyptian strawberry farm rows"
        breadcrumbs={breadcrumbs}
        structuredData={farmSchema}
      />
      <Navigation />

      <main className="flex-1">
        <PageHeader
          eyebrow="Our Farm"
          title="Where Quality Begins"
          description="Spanning fertile acres across Egypt's premier agricultural regions, engineered for sustainable cultivation and export excellence."
          breadcrumbs={breadcrumbs}
        />

        <section className="py-16 md:py-24">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto">
              {/* Panoramic Farm Image */}
              <div className="overflow-hidden rounded-3xl shadow-elevated border border-border/70 mb-14 bg-card">
                <img
                  src="/lovable-uploads/4fd05db0-df8c-4f3d-a995-035533f5c47b.png"
                  alt="Strawberry Oasis cultivated rows at golden hour"
                  className="w-full h-72 sm:h-96 md:h-[460px] object-cover"
                />
              </div>

              <p className="text-xl md:text-2xl font-serif text-foreground leading-relaxed text-center max-w-3xl mx-auto mb-16">
                Our farm spans fertile acres of rich, arable land in Egypt&apos;s most productive
                growing zones — uniting modern precision agriculture with environmental stewardship.
              </p>

              {/* 2x2 Visual Story Cards */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {farmPractices.map((item) => (
                  <article
                    key={item.title}
                    className="group rounded-3xl overflow-hidden bg-card border border-border/80 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col"
                  >
                    <div className="relative overflow-hidden aspect-[16/10] bg-muted">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-oasis-950/80 text-white backdrop-blur-sm">
                          {item.step} &bull; {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-7 flex-1 flex flex-col">
                      <h2 className="text-2xl font-serif font-semibold text-foreground mb-2.5">
                        {item.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              {/* Farm Excellence Callout */}
              <div className="rounded-3xl bg-oasis-950 text-white p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="max-w-2xl space-y-3">
                  <span className="eyebrow text-emerald-400">
                    <Sprout className="h-3.5 w-3.5" />
                    Farm Excellence
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif font-semibold text-white">
                    Grown with precision, harvested for the world
                  </h3>
                  <p className="text-white/75 leading-relaxed text-sm md:text-base">
                    Every stage of our farming process is designed with one purpose: producing the
                    finest strawberries that satisfy international retail standards while respecting
                    our land and community.
                  </p>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-berry-600 hover:bg-berry-700 text-white px-7 h-12 shadow-berry shrink-0"
                >
                  <Link to="/export" className="inline-flex items-center gap-2">
                    Explore Export Logistics
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Farm;
