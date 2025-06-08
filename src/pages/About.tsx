
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
              A Legacy Rooted in Quality
            </h1>
            
            <div className="mb-12">
              <img 
                src="/lovable-uploads/9ddb10db-7a75-46d3-9001-c2b5ebbb9b84.png" 
                alt="Our strawberry farm"
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-xl leading-relaxed">
                At Strawberry Oasis, we've been cultivating premium strawberries for years, building 
                a reputation for excellence that spans continents. Located in Egypt's most fertile 
                agricultural zones, our farm represents the perfect blend of traditional farming 
                wisdom and cutting-edge agricultural innovation.
              </p>
              
              <p className="text-lg leading-relaxed">
                From sustainable farming practices to state-of-the-art irrigation systems, we ensure 
                that every berry meets the highest standards of taste and nutrition. Our commitment 
                goes beyond just growing strawberries – we're cultivating a sustainable future for 
                agriculture.
              </p>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
                <h3 className="text-xl font-semibold text-green-800 mb-2">Our Mission</h3>
                <p className="text-green-700">
                  Our mission is simple: deliver superior strawberries that meet international quality 
                  benchmarks while protecting the environment and supporting local communities.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">What Sets Us Apart</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold text-foreground mb-3">🌱 Sustainable Practices</h3>
                  <p>
                    We employ environmentally responsible farming methods that protect soil health 
                    and conserve water resources for future generations.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold text-foreground mb-3">🔬 Innovation</h3>
                  <p>
                    Our farm utilizes the latest agricultural technology, from climate monitoring 
                    systems to precision irrigation for optimal crop yield.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold text-foreground mb-3">👥 Expert Team</h3>
                  <p>
                    Our skilled farmers and agronomists bring decades of experience and passionate 
                    dedication to every aspect of strawberry cultivation.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold text-foreground mb-3">🌍 Global Reach</h3>
                  <p>
                    We export to markets across Europe, Asia, and the Middle East, bringing Egyptian 
                    agricultural excellence to the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
