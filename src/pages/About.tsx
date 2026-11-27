import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEO, { SITE_URL } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Strawberry Oasis",
  url: `${SITE_URL}/about`,
  description:
    "Learn about Strawberry Oasis, our sustainable Egyptian strawberry farms, expert agronomy team, and global export mission.",
};

const pillars = [
  {
    number: "01",
    title: "Sustainable Practices",
    description:
      "We employ environmentally responsible farming methods that protect soil fertility and conserve water resources for future generations.",
  },
  {
    number: "02",
    title: "Agricultural Innovation",
    description:
      "Our farms utilize precision drip irrigation and micro-climate monitoring to achieve consistent berry sweetness and yield.",
  },
  {
    number: "03",
    title: "Expert Agronomists",
    description:
      "Our skilled farmers and agronomy specialists bring decades of field experience and dedicated care to every harvest cycle.",
  },
  {
    number: "04",
    title: "Global Reach",
    description:
      "We export fresh Egyptian strawberries across Europe, Asia, and the Middle East with reliable cold-chain logistics.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-cream-100 overflow-x-hidden flex flex-col">
      <SEO
        title="About Us — Egyptian Strawberry Growers & Exporters"
        description="Discover Strawberry Oasis: decades of agricultural expertise growing sustainable, certified Egyptian strawberries for European, Middle Eastern, and Asian export markets."
        path="/about"
        keywords="about Strawberry Oasis, Egyptian strawberry grower, sustainable strawberry farming Egypt, agricultural export company Egypt"
        breadcrumbs={breadcrumbs}
        structuredData={aboutSchema}
      />
      <Navigation />

      <main className="flex-1">
        <PageHeader
          eyebrow="Our Story"
          title="A legacy rooted in quality."
          description="Blending Egypt's rich agricultural heritage with modern farming innovation to deliver world-class strawberries across continents."
          breadcrumbs={breadcrumbs}
        />

        <section className="py-14 md:py-20">
          <div className="container mx-auto">
            {/* Editorial Hero Image */}
            <div className="overflow-hidden bg-cream-200 mb-14">
              <img
                src="/lovable-uploads/adfdf2fb-5b20-4bce-af35-2651768c9a60.png"
                alt="Freshly hand-picked strawberries harvested from our Egyptian farm"
                className="w-full h-72 sm:h-96 md:h-[460px] object-cover"
              />
            </div>

            {/* Editorial Narrative */}
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 pb-14 mb-14 border-b border-cream-400/80">
              <div className="lg:col-span-5">
                <span className="eyebrow text-berry-600 mb-2.5">Who We Are</span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-oasis-900 leading-[1.1]">
                  Cultivating excellence from fertile Egyptian soil.
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-5 text-base text-muted-foreground leading-relaxed">
                <p>
                  At Strawberry Oasis, we&apos;ve been cultivating premium strawberries for years,
                  building a reputation for excellence that spans continents. Located in
                  Egypt&apos;s most fertile agricultural zones, our farm represents the ideal blend
                  of traditional farming wisdom and cutting-edge agricultural innovation.
                </p>
                <p>
                  From sustainable farming practices to state-of-the-art irrigation systems, we
                  ensure that every berry meets the highest standards of taste, firmness, and
                  nutrition. Our commitment goes beyond growing strawberries — we&apos;re
                  cultivating a sustainable future for global produce trade.
                </p>
              </div>
            </div>

            {/* Mission Band */}
            <div className="bg-oasis-900 text-cream-50 p-8 md:p-12 mb-16">
              <span className="eyebrow text-cream-300/80 mb-3">Our Mission</span>
              <blockquote className="text-2xl sm:text-3xl font-serif font-semibold leading-snug text-white max-w-3xl">
                &ldquo;Deliver superior Egyptian strawberries that exceed international quality
                benchmarks while protecting the environment and empowering local farming
                communities.&rdquo;
              </blockquote>
            </div>

            {/* Pillars Grid */}
            <div className="mb-14">
              <span className="eyebrow text-berry-600 mb-2">Why Strawberry Oasis</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-oasis-900 mb-10">
                What sets us apart.
              </h2>

              <div className="grid md:grid-cols-2 border-t border-cream-400/80">
                {pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="py-7 md:pr-10 border-b border-cream-400/80"
                  >
                    <span className="text-xs font-bold tracking-[0.18em] text-berry-600">
                      {pillar.number}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-oasis-900 mt-1.5 mb-2.5">
                      {pillar.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="rounded-[3px] bg-berry-600 hover:bg-berry-700 text-cream-50 px-7 h-11 text-sm font-semibold shadow-none"
            >
              <Link to="/farm" className="inline-flex items-center gap-2">
                Explore Our Farm
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
