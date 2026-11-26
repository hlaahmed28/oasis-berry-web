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
import { CheckCircle2, ShieldCheck, ZoomIn, ArrowRight, Package } from "lucide-react";

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
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
      "Our flagship variety, Festival strawberries are renowned for their exceptional sweetness and vibrant red color that catches the eye and delights the palate.",
    features: [
      "Intense red color with glossy finish",
      "Juicy, sweet flavor profile",
      "Extended shelf life for export",
      "Large, uniform berry size",
      "Excellent firmness for transport",
    ],
    highlight: "Perfect for international markets demanding premium quality",
    highlightStyle: "bg-berry-50 border-berry-200/80 text-berry-800",
  },
  {
    name: "Florida Beauty",
    badge: "Early Season Specialist",
    image: "/lovable-uploads/421700b1-f980-46d0-9122-e2acfe70bc4f.png",
    description:
      "Known for early harvest and exceptional vibrant color, Florida Beauty strawberries are perfect for markets that demand both freshness and speed to market.",
    features: [
      "Early harvest capability",
      "Brilliant color development",
      "Fast market delivery",
      "Consistent berry quality",
      "Excellent for fresh consumption",
    ],
    highlight: "Ideal for time-sensitive markets and fresh produce chains",
    highlightStyle: "bg-oasis-50 border-oasis-200/80 text-oasis-800",
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
    <div className="min-h-screen bg-background overflow-x-hidden flex flex-col">
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
          eyebrow="Our Products"
          title="Freshness You Can Taste"
          description="Premium strawberry varieties cultivated with precision and packed to order for fresh retail, foodservice, and global exports."
          breadcrumbs={breadcrumbs}
        />

        {/* Varieties Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 mb-20">
              {varieties.map((variety) => (
                <article
                  key={variety.name}
                  className="rounded-3xl overflow-hidden bg-card border border-border/80 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col group"
                >
                  <div className="relative overflow-hidden aspect-[16/10] bg-muted">
                    <img
                      src={variety.image}
                      alt={variety.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full text-xs font-semibold bg-white/95 text-berry-700 shadow-sm">
                      {variety.badge}
                    </span>
                  </div>

                  <div className="p-7 md:p-9 flex flex-col flex-1">
                    <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-3">
                      {variety.name}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {variety.description}
                    </p>

                    <div className="mb-6 flex-1">
                      <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground mb-3.5">
                        Key Characteristics
                      </h3>
                      <ul className="space-y-2.5">
                        {variety.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2.5 text-sm md:text-base text-foreground/85"
                          >
                            <CheckCircle2 className="h-4 w-4 text-oasis-600 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className={`rounded-2xl border px-4 py-3.5 text-sm font-medium ${variety.highlightStyle}`}
                    >
                      {variety.highlight}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Official Ministry of Agriculture Certificate */}
            <div className="rounded-3xl bg-oasis-950 text-white p-8 md:p-12 mb-20 overflow-hidden relative">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-oasis-600/25 blur-3xl"
              />
              <div className="relative grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <span className="eyebrow text-emerald-400">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Official Lab Verification
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white">
                    Quality Certification
                  </h2>
                  <p className="text-white/75 text-base md:text-lg leading-relaxed">
                    Our strawberries undergo rigorous residue and phytosanitary testing by the
                    Egyptian Ministry of Agriculture to verify full compliance with international
                    food safety benchmarks before export.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size="lg"
                          className="rounded-full bg-white text-oasis-950 hover:bg-white/90 px-6 h-11"
                        >
                          <ZoomIn className="h-4 w-4 mr-2" />
                          Inspect Test Certificate
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="font-serif text-xl">
                            Official Test Certificate — Egyptian Ministry of Agriculture
                          </DialogTitle>
                        </DialogHeader>
                        <div className="mt-2 overflow-hidden rounded-xl border border-border">
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
                      className="rounded-full bg-white/10 hover:bg-white/20 border-white/25 text-white hover:text-white px-6 h-11"
                    >
                      <Link to="/quality">Quality Standards</Link>
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-5 flex justify-center">
                  <div className="max-w-xs w-full rounded-2xl bg-white p-3 shadow-elevated">
                    <img
                      src="/lovable-uploads/18c523bf-d46c-47a8-99fe-2e5264f91ae6.png"
                      alt="Test Certificate from Ministry of Agriculture"
                      className="w-full h-auto rounded-xl border border-border/60"
                    />
                    <p className="text-center text-xs text-muted-foreground mt-3 font-medium">
                      Egyptian Ministry of Agriculture Test Certificate
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Packaging Options */}
            <div>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="eyebrow text-berry-600 mb-3">
                  <Package className="h-3.5 w-3.5" />
                  Export Packaging
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-3">
                  Custom Packaging Options
                </h2>
                <p className="text-muted-foreground text-base md:text-lg">
                  Multiple formats and private-label options tailored to global retailers,
                  wholesalers, and distributors.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {packagingOptions.map((option) => (
                  <div
                    key={option.name}
                    className="group rounded-3xl overflow-hidden bg-card border border-border/80 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  >
                    <div className="overflow-hidden aspect-[4/3] bg-muted">
                      <img
                        src={option.image}
                        alt={option.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-berry-600 mb-1.5">
                        {option.spec}
                      </span>
                      <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                        {option.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {option.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-berry-600 hover:bg-berry-700 text-white px-8 h-12 shadow-berry"
                >
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    Request Custom Packaging Quote
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

export default Products;
