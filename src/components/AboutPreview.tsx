
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
          <div className="relative">
            <img 
              src="/lovable-uploads/b78afc77-ad03-4daf-b9b6-e1ba51bf4bd1.png" 
              alt="Fresh strawberries from our farm"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
