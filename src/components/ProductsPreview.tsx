import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const varieties = [
  {
    name: "Festival Strawberries",
    image: "/lovable-uploads/bf25374c-4ce7-4f81-b6fb-a50a53ff3bb0.png",
    description:
      "Juicy, sweet, and firm with excellent color and post-harvest life. A popular choice for fresh retail, export, and long-haul markets.",
  },
  {
    name: "Florida Beauty",
    image: "/lovable-uploads/421700b1-f980-46d0-9122-e2acfe70bc4f.png",
    description:
      "A high-yield variety known for its vibrant color, attractive shape, and consistent quality — ideal for fresh export and premium retail.",
  },
];

const ProductsPreview = () => {
  return (
    <section className="py-12 md:py-16 bg-cream-100">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="eyebrow text-berry-600 mb-2">Our Varieties</span>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-serif font-bold text-oasis-900 leading-[1.08]">
              Meet the harvest.
            </h2>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-oasis-900 hover:text-berry-600 transition-colors border-b border-oasis-900/40 hover:border-berry-600 pb-0.5 self-start sm:self-auto"
          >
            Varieties &amp; packaging
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {varieties.map((variety) => (
            <Link
              key={variety.name}
              to="/products"
              className="group block"
            >
              <div className="overflow-hidden bg-cream-200 mb-4">
                <img
                  src={variety.image}
                  alt={`${variety.name} — Egyptian export quality strawberries`}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold text-oasis-900 group-hover:text-berry-600 transition-colors mb-2">
                {variety.name}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {variety.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
