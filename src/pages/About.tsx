import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEO, { SITE_URL } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sprout, Cpu, Users, Globe2, ArrowRight, Sparkles } from "lucide-react";

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
    icon: Sprout,
    title: "Sustainable Practices",
    description:
      "We employ environmentally responsible farming methods that protect soil fertility and conserve water resources for future generations.",
  },
  {
    icon: Cpu,
    title: "Agricultural Innovation",
    description:
      "Our farms utilize modern agritech, from precision drip irrigation to micro-climate monitoring, ensuring optimal sweetness and yield.",
  },
  {
    icon: Users,
    title: "Expert Agronomists",
    description:
      "Our skilled farmers and agronomy specialists bring decades of field experience and dedicated care to every harvest cycle.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    description:
      "We export fresh Egyptian strawberries across Europe, Asia, and the Middle East with reliable cold-chain logistics.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden flex flex-col">
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
          title="A Legacy Rooted in Quality"
          description="Blending Egypt's rich agricultural heritage with modern farming innovation to deliver world-class strawberries across continents."
          breadcrumbs={breadcrumbs}
        />

        <section className="py-16 md:py-24">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto">
              {/* Hero Photo */}
              <div className="overflow-hidden rounded-3xl shadow-elevated border border-border/70 mb-14 bg-card">
                <img
                  src="/lovable-uploads/adfdf2fb-5b20-4bce-af35-2651768c9a60.png"
                  alt="Fresh strawberries harvested from our farm"
                  className="w-full h-72 sm:h-96 md:h-[460px] object-cover"
                />
              </div>

              {/* Editorial Narrative */}
              <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16">
                <div className="md:col-span-5">
                  <span className="eyebrow text-oasis-700 mb-3">Who We Are</span>
                  <h2 className="text-3xl font-serif font-semibold text-foreground leading-snug">
                    Cultivating excellence from fertile Egyptian soil.
                  </h2>
                </div>
                <div className="md:col-span-7 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    At Strawberry Oasis, we&apos;ve been cultivating premium strawberries for years,
                    building a reputation for excellence that spans continents. Located in
                    Egypt&apos;s most fertile agricultural zones, our farm represents the ideal
                    blend of traditional farming wisdom and cutting-edge agricultural innovation.
                  </p>
                  <p>
                    From sustainable farming practices to state-of-the-art irrigation systems, we
                    ensure that every berry meets the highest standards of taste, firmness, and
                    nutrition. Our commitment goes beyond growing strawberries — we&apos;re
                    cultivating a sustainable future for global produce trade.
                  </p>
                </div>
              </div>

              {/* Mission Banner */}
              <div className="rounded-3xl bg-oasis-950 text-white p-8 md:p-12 mb-16 relative overflow-hidden">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-berry-600/20 blur-3xl"
                />
                <div className="relative max-w-3xl">
                  <span className="eyebrow text-sun-400 mb-3">
                    <Sparkles className="h-3.5 w-3.5" />
                    Our Mission
                  </span>
                  <blockquote className="text-2xl md:text-3xl font-serif font-medium leading-snug text-white">
                    &ldquo;Deliver superior Egyptian strawberries that exceed international quality
                    benchmarks while protecting the environment and empowering local farming
                    communities.&rdquo;
                  </blockquote>
                </div>
              </div>

              {/* What Sets Us Apart */}
              <div className="mb-14">
                <div className="mb-10">
                  <span className="eyebrow text-berry-600 mb-2">Why Strawberry Oasis</span>
                  <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
                    What Sets Us Apart
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {pillars.map(({ icon: Icon, title, description }) => (
                    <div
                      key={title}
                      className="rounded-3xl bg-card border border-border/80 p-7 shadow-soft hover:shadow-elevated transition-all duration-300"
                    >
                      <div className="h-12 w-12 rounded-2xl bg-oasis-50 border border-oasis-200/70 text-oasis-700 flex items-center justify-center mb-5">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-serif font-semibold text-foreground mb-2.5">
                        {title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-white border border-border/80 p-7 md:p-9 shadow-soft">
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-foreground">
                    See how we grow every harvest
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base mt-1">
                    Explore our farm practices, organic care, and export packing workflow.
                  </p>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-berry-600 hover:bg-berry-700 text-white px-7 h-12 shadow-berry"
                >
                  <Link to="/farm" className="inline-flex items-center gap-2">
                    Tour Our Farm
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

export default About;
