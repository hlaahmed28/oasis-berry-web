
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Quality = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
              Certified Excellence You Can Trust
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-xl leading-relaxed text-center mb-12">
                We proudly adhere to the highest international standards for food safety and quality. 
                Our strawberries undergo rigorous testing and certification processes to ensure they 
                meet global export requirements.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 my-12">
                <div className="bg-white p-6 rounded-lg shadow-lg border text-center">
                  <div className="text-4xl mb-4">🌿</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">GLOBALG.A.P Certified</h3>
                  <p>
                    Our farm meets international standards for safe and sustainable agricultural practices, 
                    ensuring responsible farming methods.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg border text-center">
                  <div className="text-4xl mb-4">🏅</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">ISO 22000 Certified</h3>
                  <p>
                    Food Safety Management System certification guaranteeing the highest standards 
                    of hygiene and safety throughout our supply chain.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg border text-center">
                  <div className="text-4xl mb-4">🚚</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">EU Export Compliant</h3>
                  <p>
                    Full compliance with European Union export regulations, meeting all requirements 
                    for international trade and food safety.
                  </p>
                </div>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
                <h3 className="text-xl font-semibold text-red-800 mb-2">Quality Assurance Process</h3>
                <p className="text-red-700 mb-4">
                  Each shipment undergoes strict quality control and testing to guarantee freshness, 
                  hygiene, and consistency from farm to destination.
                </p>
                <ul className="text-red-700 space-y-2">
                  <li>• Pre-harvest quality inspections</li>
                  <li>• Post-harvest testing and grading</li>
                  <li>• Cold chain management verification</li>
                  <li>• Final quality certification before export</li>
                </ul>
              </div>
              
              <div className="text-center mt-12">
                <h3 className="text-2xl font-bold text-foreground mb-4">Trust in Every Berry</h3>
                <p className="text-lg">
                  Our commitment to quality extends beyond certification. We believe in transparency, 
                  traceability, and delivering strawberries that exceed expectations every time.
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

export default Quality;
