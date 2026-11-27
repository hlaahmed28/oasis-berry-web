import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEO, { SITE_URL } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { Check, ZoomIn, ArrowRight } from "lucide-react";

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Varieties & Products", path: "/products" },
];

const productsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Egyptian Export Strawberry Varieties",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Festival Strawberries",
        description:
          "Flagship Egyptian export strawberry variety with intense crimson color, glossy finish, sweet flavor, and extended shelf life for international cold-chain transport.",
        image: `${SITE_URL}/lovable-uploads/bf25374c-4ce7-4f81-b6fb-a50a53ff3bb0.png`,
        brand: { "@type": "Brand", name: "Strawberry Oasis" },
        countryOfOrigin: { "@type": "Country", name: "Egypt" },
        category: "Fresh Produce > Berries > Strawberries",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          businessFunction: "http://purl.org/goodrelations/v1#Sell",
          areaServed: ["Europe", "Middle East", "Asia", "United Kingdom"],
          url: `${SITE_URL}/products`,
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Florida Beauty Strawberries",
        description:
          "Early-harvest Egyptian strawberry variety prized for brilliant red color, uniform berry quality, and fast air-freight delivery to fresh retail markets.",
        image: `${SITE_URL}/lovable-uploads/421700b1-f980-46d0-9122-e2acfe70bc4f.png`,
        brand: { "@type": "Brand", name: "Strawberry Oasis" },
        countryOfOrigin: { "@type": "Country", name: "Egypt" },
        category: "Fresh Produce > Berries > Strawberries",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          businessFunction: "http://purl.org/goodrelations/v1#Sell",
          areaServed: ["Europe", "Middle East", "Asia", "United Kingdom"],
          url: `${SITE_URL}/products`,
        },
      },
    },
  ],
};

const varieties = [
  {
    name: "Festival Strawberries",
    badge: "Flagship Export Variety",
    image: "/lovable-uploads/bf25374c-4ce7-4f81-b6fb-a50a53ff3bb0.png",
    description:
      "Juicy, sweet, and firm with an intense crimson color and glossy finish. Extended post-harvest life makes it our flagship choice for long-haul international markets.",
    features: [
      "Intense red color with glossy finish",
      "Juicy, sweet flavor profile",
      "Extended shelf life for export",
      "Large, uniform berry size",
      "Excellent firmness for cold-chain transit",
    ],
    fit: "Ideal for international markets demanding premium quality and shelf life.",
  },
  {
    name: "Florida Beauty",
    badge: "Early Harvest Variety",
    image: "/lovable-uploads/421700b1-f980-46d0-9122-e2acfe70bc4f.png",
    description:
      "High-yield early-season variety prized for vibrant color, attractive uniform shape, and rapid delivery to fresh retail produce programs.",
    features: [
      "Early harvest capability starting November",
      "Brilliant uniform ruby coloration",
      "Fast air-freight market delivery",
      "Consistent grading and berry shape",
      "Crisp texture ideal for fresh consumption",
    ],
    fit: "Ideal for early-season programs and premium retail chains.",
  },
];

const packagingOptions = [
  {
    name: "Retail Clamshells",
    spec: "250g & 500g Punnets",
    image: "/lovable-uploads/26be9eea-2d56-46da-acf7-71ed755ae9e8.png",
    description:
      "Consumer-ready ventilated clamshells designed for supermarket display and extended retail freshness.",
  },
  {
    name: "Export Cartons",
    spec: "2kg & 5kg Master Boxes",
    image: "/lovable-uploads/1d6c3ca3-7ad4-4a53-899c-4ec4e9dbe9a8.png",
    description:
      "Heavy-duty ventilated export cartons engineered for pallet stability and maximum protection in transit.",
  },
  {
    name: "Premium Presentation",
    spec: "Private Label & Custom",
    image: "/lovable-uploads/0a99a92e-537b-4857-a681-2fa627083306.png",
    description:
      "Tailored gift-grade and branded packaging formats crafted for luxury retailers and specialty grocers.",
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-cream-100 overflow-x-hidden flex flex-col">
      <SEO
        title="Fresh Strawberry Varieties & Custom Export Packaging"
        description="Explore Festival and Florida Beauty fresh Egyptian strawberries, official Ministry of Agriculture lab certificates, and custom 250g/500g clamshells & 2kg/5kg export cartons."
        path="/products"
        keywords="Festival strawberries Egypt, Florida Beauty strawberries export, strawberry clamshells 250g 500g, export strawberry cartons, private label strawberries Egypt"
        image="/lovable-uploads/bf25374c-4ce7-4f81-b6fb-a50a53ff3bb0.png"
        imageAlt="Festival and Florida Beauty fresh Egyptian strawberries for export"
        breadcrumbs={breadcrumbs}
        structuredData={productsSchema}
      />
      <Navigation />

      <main className="flex-1">
        <PageHeader
          eyebrow="Our Varieties"
          title="Meet the harvest."
          description="Premium strawberry varieties cultivated with precision and packed to order for fresh retail, foodservice, and global exports."
          breadcrumbs={breadcrumbs}
        />

        {/* Varieties Section */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 pb-16 mb-16 border-b border-cream-400/80">
              {varieties.map((variety) => (
                <article key={variety.name} className="flex flex-col">
                  <div className="overflow-hidden bg-cream-200 mb-5">
                    <img
                      src={variety.image}
                      alt={`${variety.name} — fresh Egyptian strawberries`}
                      loading="lazy"
                      decoding="async"
                      className="w-full aspect-[16/10] object-cover"
                    />
                  </div>
                  <span className="eyebrow text-berry-600 mb-2">{variety.badge}</span>
                  <h2 className="text-3xl font-serif font-bold text-oasis-900 mb-3">
                    {variety.name}
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">
                    {variety.description}
                  </p>

                  <ul className="space-y-2.5 border-t border-cream-400/70 pt-5 mb-6 flex-1">
                    {variety.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-sm text-oasis-900/90"
                      >
                        <Check className="h-4 w-4 text-berry-600 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-oasis-900 border-l-2 border-berry-600 pl-3.5 py-1">
                    {variety.fit}
                  </p>
                </article>
              ))}
            </div>

            {/* Official Ministry of Agriculture Certificate */}
            <div className="bg-oasis-900 text-cream-50 p-8 md:p-12 mb-16">
              <div className="grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <span className="eyebrow text-cream-300/80">Official Lab Verification</span>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                    Ministry of Agriculture Test Certificate.
                  </h2>
                  <p className="text-cream-100/80 text-base leading-relaxed">
                    Our strawberries undergo rigorous residue and phytosanitary testing by the
                    Egyptian Ministry of Agriculture to verify full compliance with international
                    food safety benchmarks before export.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size="lg"
                          className="rounded-[3px] bg-cream-50 text-oasis-900 hover:bg-white px-6 h-11 text-sm font-semibold shadow-none"
                        >
                          <ZoomIn className="h-4 w-4 mr-2" />
                          Inspect Test Certificate
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl bg-cream-50 border-cream-300">
                        <DialogHeader>
                          <DialogTitle className="font-serif text-xl text-oasis-900">
                            Official Test Certificate — Egyptian Ministry of Agriculture
                          </DialogTitle>
                        </DialogHeader>
                        <div className="mt-2 overflow-hidden border border-cream-300">
                          <img
                            src="/lovable-uploads/18c523bf-d46c-47a8-99fe-2e5264f91ae6.png"
                            alt="Official Test Certificate from Egyptian Ministry of Agriculture"
                            className="w-full h-auto"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="rounded-[3px] bg-transparent hover:bg-white/10 border-white/30 text-white hover:text-white px-6 h-11 text-sm font-semibold"
                    >
                      <Link to="/quality">Quality Standards</Link>
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-5 flex justify-center">
                  <div className="max-w-xs w-full bg-cream-50 p-3">
                    <img
                      src="/lovable-uploads/18c523bf-d46c-47a8-99fe-2e5264f91ae6.png"
                      alt="Test Certificate from Ministry of Agriculture"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto border border-cream-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Packaging Options */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                <div>
                  <span className="eyebrow text-berry-600 mb-2">Export Packaging</span>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-oasis-900">
                    Custom packaging options.
                  </h2>
                </div>
                <Button
                  asChild
                  className="rounded-[3px] bg-berry-600 hover:bg-berry-700 text-cream-50 px-6 h-10 text-xs font-semibold self-start sm:self-auto shadow-none"
                >
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    Request Custom Packaging
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {packagingOptions.map((option) => (
                  <div key={option.name} className="flex flex-col">
                    <div className="overflow-hidden bg-cream-200 mb-4">
                      <img
                        src={option.image}
                        alt={`${option.name} — ${option.spec}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full aspect-[4/3] object-cover"
                      />
                    </div>
                    <span className="eyebrow text-berry-600 mb-1">{option.spec}</span>
                    <h3 className="text-2xl font-serif font-bold text-oasis-900 mb-2">
                      {option.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {option.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
