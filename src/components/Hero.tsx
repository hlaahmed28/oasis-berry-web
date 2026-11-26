import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, ChevronLeft, ChevronRight, Globe2, Snowflake, Calendar, Award } from "lucide-react";

const bannerSlides = [
  {
    src: "/lovable-uploads/4fd05db0-df8c-4f3d-a995-035533f5c47b.png",
    caption: "Fertile Egyptian Strawberry Fields",
  },
  {
    src: "/lovable-uploads/bf25374c-4ce7-4f81-b6fb-a50a53ff3bb0.png",
    caption: "Sun-Ripened Flowering Crops",
  },
  {
    src: "/lovable-uploads/421700b1-f980-46d0-9122-e2acfe70bc4f.png",
    caption: "Export-Ready Clamshell Grading",
  },
  {
    src: "/lovable-uploads/58b3affa-8eca-4f3f-aa4d-2e667b1be6ad.png",
    caption: "ISO 22000 Hygiene & Packing",
  },
  {
    src: "/lovable-uploads/a9f9fa22-07e2-4305-bc8e-9af9cdccd5a0.png",
    caption: "Dedicated Agronomy & Harvest Team",
  },
];

const stats = [
  { icon: Globe2, value: "50+", label: "Export Markets" },
  { icon: Award, value: "1,000+", label: "Tons Annually" },
  { icon: Calendar, value: "Nov – May", label: "Harvest Window" },
  { icon: Snowflake, value: "100%", label: "Cold Chain Control" },
];

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 5500);

    return () => {
      clearInterval(intervalId);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-oasis-950 text-white">
      {/* Carousel background */}
      <div className="absolute inset-0 overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {bannerSlides.map((slide, index) => (
            <div key={slide.src} className="flex-[0_0_100%] min-w-0 relative h-full">
              <div
                className={`w-full h-full bg-cover bg-center transition-transform ease-out ${
                  selectedIndex === index ? "scale-105" : "scale-100"
                }`}
                style={{
                  backgroundImage: `url('${slide.src}')`,
                  transitionDuration: "6000ms",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Layered editorial gradient scrims for effortless readability */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-oasis-950/90 via-oasis-950/65 to-oasis-950/25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-oasis-950/90 via-transparent to-oasis-950/40"
      />

      {/* Main Content */}
      <div className="relative container mx-auto pt-32 pb-12 md:pt-40 md:pb-16 flex-1 flex items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-[0.16em] text-white/95 mb-7">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            GLOBALG.A.P &amp; ISO 22000 Certified &bull; Egypt
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-semibold text-white leading-[1.05] tracking-tight mb-5">
            Premium Egyptian{" "}
            <span className="italic font-normal text-berry-200">Strawberries</span>
          </h1>

          <p className="text-xl md:text-2xl font-serif text-white/90 mb-5">
            Fresh from Our Farms to the World.
          </p>

          <p className="text-base md:text-lg text-white/80 max-w-2xl leading-relaxed mb-9">
            Welcome to Strawberry Oasis, where nature meets excellence. We cultivate and export
            the finest fresh strawberries from Egypt&apos;s fertile agricultural zones — prized for
            rich flavor, vibrant color, and European-certified quality.
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-berry-600 hover:bg-berry-700 text-white px-7 h-12 text-base shadow-berry transition-all duration-200 hover:-translate-y-0.5"
            >
              <Link to="/farm" className="inline-flex items-center gap-2">
                Explore Our Farm
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border-white/30 text-white hover:text-white px-7 h-12 text-base transition-all duration-200"
            >
              <Link to="/export">View Export Options</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Trust Bar & Carousel Controls */}
      <div className="relative container mx-auto pb-8 md:pb-10">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-end justify-between gap-6">
          {/* Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 rounded-2xl bg-oasis-950/60 backdrop-blur-xl border border-white/15 px-5 py-4 sm:px-7 sm:py-5 flex-1 max-w-3xl">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-sun-400">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-serif font-semibold text-white leading-tight">
                    {value}
                  </div>
                  <div className="text-xs text-white/65 mt-0.5">{label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Slide Navigation */}
          <div className="flex items-center justify-between lg:justify-end gap-4">
            <span className="text-xs font-medium text-white/75 hidden sm:inline">
              {bannerSlides[selectedIndex]?.caption}
            </span>
            <div className="flex items-center gap-1.5">
              {bannerSlides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    selectedIndex === index
                      ? "w-7 bg-white"
                      : "w-2 bg-white/35 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                aria-label="Previous slide"
                onClick={() => emblaApi?.scrollPrev()}
                className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next slide"
                onClick={() => emblaApi?.scrollNext()}
                className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 flex items-center justify-center transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
