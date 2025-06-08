
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPreview = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Legacy Rooted in Quality
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Strawberry Oasis, we've been cultivating premium strawberries with dedication and expertise. 
              Located in Egypt's most fertile agricultural zones, our farm blends tradition with innovation.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From sustainable farming practices to state-of-the-art irrigation systems, we ensure that 
              every berry meets the highest standards of taste and nutrition.
            </p>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-red-100 rounded-lg p-8 text-center">
            <div className="text-6xl mb-4">🌱</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Sustainable Excellence</h3>
            <p className="text-muted-foreground">
              Modern agricultural practices meeting environmental responsibility
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
