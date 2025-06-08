
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-green-50 to-red-50 py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Premium Egyptian Strawberries
        </h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
          Fresh from Our Farms to the World
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          Welcome to Strawberry Oasis, where nature meets excellence. We specialize in growing and 
          exporting the finest, fresh strawberries from the fertile lands of Egypt. Certified by 
          European and ISO standards, our strawberries are known for their rich flavor, vibrant color, 
          and exceptional quality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            <Link to="/farm">🌍 Explore Our Farm</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-red-600 text-red-600 hover:bg-red-50">
            <Link to="/export">📦 View Export Options</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
