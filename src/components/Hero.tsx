
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import useEmblaCarousel from 'embla-carousel-react';

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  
  const bannerImages = [
    "/lovable-uploads/4fd05db0-df8c-4f3d-a995-035533f5c47b.png",
    "/lovable-uploads/bf25374c-4ce7-4f81-b6fb-a50a53ff3bb0.png", 
    "/lovable-uploads/421700b1-f980-46d0-9122-e2acfe70bc4f.png",
    "/lovable-uploads/58b3affa-8eca-4f3f-aa4d-2e667b1be6ad.png",
    "/lovable-uploads/a9f9fa22-07e2-4305-bc8e-9af9cdccd5a0.png"
  ];

  useEffect(() => {
    if (emblaApi) {
      const intervalId = setInterval(() => {
        emblaApi.scrollNext();
      }, 4000);

      return () => clearInterval(intervalId);
    }
  }, [emblaApi]);

  return (
    <section className="relative bg-gradient-to-r from-green-50 to-red-50 py-20 px-4 h-screen">
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {bannerImages.map((image, index) => (
            <div 
              key={index}
              className="flex-[0_0_100%] min-w-0"
            >
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('${image}')`
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative container mx-auto text-center flex flex-col justify-center h-full">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl [text-shadow:_2px_2px_4px_rgb(0_0_0_/_80%)]">
          Premium Egyptian Strawberries
        </h1>
        <h2 className="text-2xl md:text-3xl text-white mb-8 drop-shadow-2xl [text-shadow:_2px_2px_4px_rgb(0_0_0_/_80%)]">
          Fresh from Our Farms to the World
        </h2>
        <p className="text-lg text-white max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-2xl [text-shadow:_1px_1px_3px_rgb(0_0_0_/_80%)]">
          Welcome to Strawberry Oasis, where nature meets excellence. We specialize in growing and 
          exporting the finest, fresh strawberries from the fertile lands of Egypt. Certified by 
          European and ISO standards, our strawberries are known for their rich flavor, vibrant color, 
          and exceptional quality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white shadow-lg">
            <Link to="/farm">Explore Our Farm</Link>
          </Button>
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white shadow-lg">
            <Link to="/export">View Export Options</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
