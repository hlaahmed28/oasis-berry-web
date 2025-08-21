
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Farm = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
              Where Quality Begins
            </h1>
            
            <div className="mb-12">
              <img 
                src="/lovable-uploads/4fd05db0-df8c-4f3d-a995-035533f5c47b.png" 
                alt="Our strawberry farm"
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-xl leading-relaxed">
                Our farm spans over fertile acres of rich, arable land in Egypt's most productive regions. 
                We employ modern agricultural practices that ensure the highest quality strawberries while 
                maintaining environmental sustainability.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <img 
                    src="/lovable-uploads/a9f9fa22-07e2-4305-bc8e-9af9cdccd5a0.png" 
                    alt="Farm workers in the field"
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-foreground mb-3">Expert Care</h3>
                  <p>
                    Our skilled farmers and agronomists ensure each crop receives expert care — 
                    from planting to harvest, guaranteeing premium quality.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <img 
                    src="/lovable-uploads/bf25374c-4ce7-4f81-b6fb-a50a53ff3bb0.png" 
                    alt="Strawberry plants with flowers"
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-foreground mb-3">Organic Fertilizers</h3>
                  <p>
                    We use only safe, organic fertilizers and pesticides that protect both our crops 
                    and the environment while ensuring the best possible flavor.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <img 
                    src="/lovable-uploads/58b3affa-8eca-4f3f-aa4d-2e667b1be6ad.png" 
                    alt="Quality control and packaging"
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-foreground mb-3">Quality Control</h3>
                  <p>
                    Advanced quality monitoring systems ensure optimal conditions, tracking 
                    every step from harvest to packaging with rigorous standards.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <img 
                    src="/lovable-uploads/ebbd049e-f09e-4e09-8516-c049141a9d6d.png" 
                    alt="Quality certification"
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-foreground mb-3">Certified Quality</h3>
                  <p>
                    Our strawberries meet international quality standards with full certification 
                    and testing to ensure safety and excellence in every shipment.
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
                <h3 className="text-xl font-semibold text-green-800 mb-2">Farm Excellence</h3>
                <p className="text-green-700">
                  Every aspect of our farming process is designed with one goal in mind: producing 
                  the finest strawberries that meet international quality standards while respecting 
                  our environment and community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Farm;
