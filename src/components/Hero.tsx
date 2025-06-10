
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-green-50 to-red-50 py-20 px-4">
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/lovable-uploads/4fd05db0-df8c-4f3d-a995-035533f5c47b.png')"
        }}
      ></div>
      <div className="relative container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Premium Egyptian Strawberries
        </h1>
        <h2 className="text-2xl md:text-3xl text-white mb-8 drop-shadow-md">
          Fresh from Our Farms to the World
        </h2>
        <p className="text-lg text-white max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-md">
          Welcome to Strawberry Oasis, where nature meets excellence. We specialize in growing and 
          exporting the finest, fresh strawberries from the fertile lands of Egypt. Certified by 
          European and ISO standards, our strawberries are known for their rich flavor, vibrant color, 
          and exceptional quality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            <Link to="/farm">Explore Our Farm</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-600">
            <Link to="/export">View Export Options</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
