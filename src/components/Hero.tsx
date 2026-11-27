import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const metaItems = [
  { label: "Harvest season", value: "November — May" },
  { label: "Origin", value: "Egypt" },
  { label: "Supply", value: "Fresh & Frozen export" },
];

const Hero = () => {
  return (
    <section className="relative bg-cream-100 overflow-hidden">
      {/* Full-bleed Hero with Crate Image in Background (Mobile & Desktop) */}
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/hero-crate.jpg"
            alt="Wooden harvest crate brimming with fresh glossy Egyptian strawberries"
            fetchPriority="high"
            className="w-full h-full object-cover object-right"
          />
          {/* Mobile readability veil */}
          <div
            aria-hidden="true"
            className="lg:hidden absolute inset-0 bg-gradient-to-r from-cream-100/90 via-cream-100/75 to-cream-100/35"
          />
          {/* Desktop left-side cream feather so crate stays vibrant on the right */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-cream-100/95 via-cream-100/75 to-transparent"
          />
        </div>

        <div className="relative container mx-auto">
          <div className="grid lg:grid-cols-12 items-center min-h-[420px] sm:min-h-[470px] md:min-h-[540px]">
            {/* Editorial Copy */}
            <div className="lg:col-span-6 py-14 sm:py-16 md:py-20 lg:pr-8">
              <h1 className="text-5xl sm:text-6xl md:text-[74px] font-serif font-bold text-oasis-900 leading-[0.98] tracking-[-0.025em] mb-6">
                Egyptian
                <br />
                strawberries.
              </h1>

              <p className="text-xl sm:text-2xl font-serif text-oasis-900/90 mb-8 leading-snug">
                Fresh from our farms to the world.
              </p>

              <Button
                asChild
                size="lg"
                className="rounded-[3px] bg-berry-600 hover:bg-berry-700 text-cream-50 px-7 h-12 text-sm font-semibold tracking-wide shadow-none transition-colors"
              >
                <Link to="/contact" className="inline-flex items-center gap-2.5">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom 3-Column Editorial Metadata Strip */}
      <div className="container mx-auto pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 border-y border-cream-400/80 divide-y sm:divide-y-0 sm:divide-x divide-cream-400/80">
          {metaItems.map((item) => (
            <div
              key={item.label}
              className="py-4 sm:px-6 first:sm:pl-0 last:sm:pr-0 flex items-baseline justify-between sm:justify-start gap-3"
            >
              <span className="text-xs sm:text-sm text-muted-foreground font-normal">
                {item.label}
              </span>
              <span className="font-serif text-base sm:text-lg font-bold text-oasis-900">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
