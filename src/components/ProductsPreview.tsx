import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const varieties = [
  {
    name: "Festival Strawberries",
    tag: "Flagship Export",
    image: "/lovable-uploads/bf25374c-4ce7-4f81-b6fb-a50a53ff3bb0.png",
    description:
      "Juicy and sweet, with an intense crimson color and glossy finish. Exceptional firmness and extended shelf life make it our top choice for long-haul international markets.",
    traits: ["Intense Sweet Flavor", "Extended Shelf Life", "Firm Export Grade"],
  },
  {
    name: "Florida Beauty",
    tag: "Early Harvest",
    image: "/lovable-uploads/421700b1-f980-46d0-9122-e2acfe70bc4f.png",
    description:
      "Prized for early-season availability and vibrant ruby color. Engineered for markets demanding rapid speed-to-shelf, consistent sizing, and crisp fresh consumption.",
    traits: ["Early Season Supply", "Vibrant Uniform Color", "Retail & Air-Freight Ready"],
  },
];

const ProductsPreview = () => {
  return (
    <section className="py-20 md:py-28 bg-white border-y border-border/60">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="eyebrow text-berry-600 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-berry-600" />
              Signature Varieties
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-foreground leading-[1.1]">
              Freshness You Can Taste
            </h2>
            <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
              We cultivate premium strawberry varieties with precision and care — tailored for
              fresh retail, foodservice, and large-scale international exports.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border-border hover:border-berry-600 hover:text-berry-700 px-6 h-11 self-start md:self-auto"
          >
            <Link to="/products" className="inline-flex items-center gap-2">
              View All Products &amp; Packaging
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Product Showcase Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {varieties.map((variety) => (
            <article
              key={variety.name}
              className="group rounded-3xl overflow-hidden bg-background border border-border/80 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[16/10] bg-muted">
                <img
                  src={variety.image}
                  alt={`${variety.name} — Egyptian export quality strawberries`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold bg-white/95 text-berry-700 shadow-sm backdrop-blur-sm">
                    {variety.tag}
                  </span>
                </div>
              </div>

              <div className="p-7 md:p-8 flex flex-col flex-1">
                <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-3 group-hover:text-berry-700 transition-colors">
                  {variety.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                  {variety.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-5 border-t border-border/70">
                  {variety.traits.map((trait) => (
                    <span
                      key={trait}
                      className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-white border border-border/80 text-foreground/85"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-oasis-600" />
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-berry-600 hover:bg-berry-700 text-white px-8 h-12 shadow-berry"
          >
            <Link to="/products" className="inline-flex items-center gap-2">
              Explore Varieties &amp; Certifications
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
