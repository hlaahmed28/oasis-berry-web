import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Sprout, Sun } from "lucide-react";

const highlights = [
  {
    icon: Sun,
    title: "Egyptian Sun & Soil",
    text: "Cultivated in Egypt's most fertile agricultural zones",
  },
  {
    icon: Droplets,
    title: "Precision Irrigation",
    text: "Modern water-efficient systems for optimal sweetness",
  },
  {
    icon: Sprout,
    title: "Sustainable Farming",
    text: "Eco-conscious practices protecting land and nutrition",
  },
];

const AboutPreview = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            <span className="eyebrow text-oasis-700">
              <span className="h-1.5 w-1.5 rounded-full bg-oasis-700" />
              Our Heritage
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-foreground leading-[1.1]">
              A Legacy Rooted in{" "}
              <span className="italic font-normal text-berry-600">Quality</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              At Strawberry Oasis, we have been cultivating premium strawberries with dedication
              and agricultural expertise. Located in Egypt&apos;s most fertile agricultural zones,
              our farm blends time-honored tradition with modern agritech innovation.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              From sustainable farming practices to state-of-the-art irrigation systems, we ensure
              that every berry meets the highest international standards of flavor, firmness, and
              nutrition.
            </p>

            {/* Compact Feature Grid */}
            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              {highlights.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-2xl bg-card border border-border/70 p-4 shadow-soft"
                >
                  <div className="h-9 w-9 rounded-xl bg-oasis-50 text-oasis-700 flex items-center justify-center mb-3">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="font-semibold text-sm text-foreground">{title}</div>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-oasis-700 hover:bg-oasis-800 text-white px-7 h-12 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Link to="/about" className="inline-flex items-center gap-2">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-oasis-100/80 via-transparent to-berry-100/70 -z-10"
              />
              <div className="overflow-hidden rounded-3xl shadow-elevated border border-border/60 bg-card group">
                <img
                  src="/lovable-uploads/adfdf2fb-5b20-4bce-af35-2651768c9a60.png"
                  alt="Freshly hand-picked Egyptian strawberries from Strawberry Oasis farm"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Floating Editorial Badge */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-left-6 rounded-2xl glass-panel px-5 py-4 max-w-xs">
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-berry-600">
                  Direct From Field
                </div>
                <div className="font-serif text-base font-semibold text-foreground mt-1">
                  Hand-harvested daily at peak ripeness for international export
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
