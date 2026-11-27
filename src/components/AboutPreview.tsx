import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutPreview = () => {
  return (
    <section className="py-12 md:py-16 bg-cream-100">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Panoramic Farm Photograph */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden bg-cream-200">
              <img
                src="/lovable-uploads/4fd05db0-df8c-4f3d-a995-035533f5c47b.png"
                alt="Sunlit rows of Egyptian strawberry plants at Strawberry Oasis farms"
                loading="lazy"
                decoding="async"
                className="w-full aspect-[16/10] object-cover"
              />
            </div>
          </div>

          {/* Right Editorial Copy */}
          <div className="lg:col-span-5 space-y-4">
            <span className="eyebrow text-berry-600">Our Farms</span>

            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-serif font-bold text-oasis-900 leading-[1.08]">
              A legacy rooted in quality.
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed pt-1">
              At Strawberry Oasis, we cultivate premium strawberries in Egypt&apos;s most fertile
              agricultural zones, combining modern farming practices with a long-standing
              commitment to quality, freshness, and food safety.
            </p>

            <div className="pt-2 flex items-center gap-6">
              <Link
                to="/farm"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-oasis-900 hover:text-berry-600 transition-colors border-b border-oasis-900/40 hover:border-berry-600 pb-0.5"
              >
                Explore our farm
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-oasis-900 transition-colors"
              >
                About us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
