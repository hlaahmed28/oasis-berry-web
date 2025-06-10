
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const Hero = () => {
  const [api, setApi] = useState<any>();
  
  const bannerImages = [
    "/lovable-uploads/4fd05db0-df8c-4f3d-a995-035533f5c47b.png",
    "/lovable-uploads/bf25374c-4ce7-4f81-b6fb-a50a53ff3bb0.png",
    "/lovable-uploads/ebbd049e-f09e-4e09-8516-c049141a9d6d.png",
    "/lovable-uploads/58b3affa-8eca-4f3f-aa4d-2e667b1be6ad.png"
  ];

  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section className="relative bg-gradient-to-r from-green-50 to-red-50 py-20 px-4">
      <div className="absolute inset-0 bg-black/20"></div>
      <Carousel 
        className="absolute inset-0"
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {bannerImages.map((image, index) => (
            <CarouselItem key={index}>
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('${image}')`
                }}
              ></div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
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
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white border-white">
            <Link to="/export">View Export Options</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
