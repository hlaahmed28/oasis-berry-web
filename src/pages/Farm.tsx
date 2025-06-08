
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Farm = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
              Where Quality Begins
            </h1>
            
            <div className="mb-12">
              <img 
                src="/lovable-uploads/9ddb10db-7a75-46d3-9e84-0bb44c9e5a04.png" 
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
                  <h3 className="text-xl font-semibold text-foreground mb-3">🚿 Drip Irrigation Systems</h3>
                  <p>
                    Efficient water usage through precision irrigation technology that delivers water 
                    directly to plant roots, minimizing waste and maximizing growth.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold text-foreground mb-3">🌿 Organic Fertilizers</h3>
                  <p>
                    We use only safe, organic fertilizers and pesticides that protect both our crops 
                    and the environment while ensuring the best possible flavor.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold text-foreground mb-3">🌡️ Climate Monitoring</h3>
                  <p>
                    Advanced climate monitoring systems ensure optimal growth conditions, tracking 
                    temperature, humidity, and soil conditions in real-time.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold text-foreground mb-3">👨‍🌾 Expert Care</h3>
                  <p>
                    Our skilled farmers and agronomists ensure each crop receives expert care — 
                    from planting to harvest, guaranteeing premium quality.
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
