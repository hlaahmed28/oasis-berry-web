import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEO, { SITE_URL } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
    alt: "Farm workers tending the strawberry fields in Egypt",
    description:
      "Our skilled farmers and agronomists ensure each crop receives attentive, daily care — from nursery planting to peak-ripeness harvest.",
  },
  {
    step: "02",
    category: "Nutrition",
    title: "Organic Fertilizers",
    image: "/lovable-uploads/bf25374c-4ce7-4f81-b6fb-a50a53ff3bb0.png",
    alt: "Flowering strawberry plants in fertile Egyptian beds",
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
    <div className="min-h-screen bg-cream-100 overflow-x-hidden flex flex-col">
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
          eyebrow="Our Farms"
          title="Where quality begins."
          description="Spanning fertile acres across Egypt's premier agricultural regions, engineered for sustainable cultivation and export excellence."
          breadcrumbs={breadcrumbs}
        />

        <section className="py-14 md:py-20">
          <div className="container mx-auto">
            {/* Panoramic Farm Image */}
            <div className="overflow-hidden bg-cream-200 mb-14">
              <img
                src="/lovable-uploads/4fd05db0-df8c-4f3d-a995-035533f5c47b.png"
                alt="Strawberry Oasis cultivated rows at golden hour"
                className="w-full h-72 sm:h-96 md:h-[460px] object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-10 lg:gap-12 mb-16">
              {farmPractices.map((item) => (
                <article key={item.title} className="flex flex-col">
                  <div className="overflow-hidden bg-cream-200 mb-4">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full aspect-[16/10] object-cover"
                    />
                  </div>
                  <span className="eyebrow text-berry-600 mb-1.5">
                    {item.step} &mdash; {item.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-oasis-900 mb-2">
                    {item.title}
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            {/* Farm Excellence Band */}
            <div className="bg-oasis-900 text-cream-50 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-2xl space-y-3">
                <span className="eyebrow text-cream-300/80">Farm Excellence</span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  Grown with precision, harvested for the world.
                </h3>
                <p className="text-cream-100/80 leading-relaxed text-sm md:text-base">
                  Every stage of our farming process is designed with one purpose: producing the
                  finest strawberries that satisfy international retail standards while respecting
                  our land and community.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="rounded-[3px] bg-cream-50 hover:bg-white text-oasis-900 px-6 h-11 text-sm font-semibold shadow-none shrink-0"
              >
                <Link to="/export" className="inline-flex items-center gap-2">
                  Export Logistics
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Farm;
