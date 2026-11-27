import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const highlights = [
  "Trained field harvesters picking at peak morning ripeness",
  "ISO 22000 hygiene-controlled sorting and clamshell packing",
  "Hand-graded by size, color, and firmness before pre-cooling",
];

const TeamSection = () => {
  return (
    <section className="py-14 md:py-20 bg-cream-100 border-t border-cream-400/70">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Editorial Copy */}
          <div className="lg:col-span-5 space-y-5">
            <span className="eyebrow text-berry-600">Our People &amp; Packing House</span>

            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-serif font-bold text-oasis-900 leading-[1.08]">
              Hand-selected with care and strict hygiene.
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed">
              Every punnet of Strawberry Oasis berries is harvested and packed by our trained
              agricultural and quality-control teams — combining careful manual handling in the
              field with strict food-safety protocols at our packing stations.
            </p>

            <ul className="space-y-2.5 pt-2 border-t border-cream-400/70">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-oasis-900/90"
                >
                  <Check className="h-4 w-4 text-berry-600 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Link
                to="/quality"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-oasis-900 hover:text-berry-600 transition-colors border-b border-oasis-900/40 hover:border-berry-600 pb-0.5"
              >
                See our quality &amp; hygiene standards
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Editorial Photography Duo */}
          <div className="lg:col-span-7 grid sm:grid-cols-12 gap-5 items-stretch">
            <figure className="sm:col-span-7 flex flex-col">
              <div className="overflow-hidden bg-cream-200 flex-1">
                <img
                  src="/lovable-uploads/58b3affa-8eca-4f3f-aa4d-2e667b1be6ad.png"
                  alt="Strawberry Oasis quality-control and packing team sorting fresh strawberries into export clamshells"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full min-h-[260px] object-cover"
                />
              </div>
              <figcaption className="text-xs text-muted-foreground mt-2.5">
                Hygiene-controlled sorting and export clamshell packing.
              </figcaption>
            </figure>

            <figure className="sm:col-span-5 flex flex-col">
              <div className="overflow-hidden bg-cream-200 flex-1">
                <img
                  src="/lovable-uploads/a9f9fa22-07e2-4305-bc8e-9af9cdccd5a0.png"
                  alt="Strawberry Oasis harvest workers in hygienic attire tending Egyptian strawberry field rows"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full min-h-[260px] object-cover"
                />
              </div>
              <figcaption className="text-xs text-muted-foreground mt-2.5">
                Field harvest teams across our Egyptian farms.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
