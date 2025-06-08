
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Export = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
              Exporting Egyptian Excellence Worldwide
            </h1>
            
            <p className="text-xl leading-relaxed text-center mb-12 text-muted-foreground">
              Looking to import high-quality Egyptian strawberries? We export to Europe, the Middle East, 
              Asia, and beyond with flexible logistics solutions and premium packaging options.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold text-foreground mb-4">📅 Export Seasons</h3>
                <p className="mb-2"><strong>Main Season:</strong> November to May</p>
                <p className="text-muted-foreground">
                  Our peak harvest season ensures consistent supply and optimal quality 
                  during the international demand period.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold text-foreground mb-4">📦 Packaging Options</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Clamshells (250g, 500g)</li>
                  <li>• Export cartons (2kg, 5kg)</li>
                  <li>• Bulk crates (custom sizes)</li>
                  <li>• Customizable branding available</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold text-foreground mb-4">🚛 Logistics Solutions</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Cold chain logistics maintained</li>
                  <li>• Air freight for premium delivery</li>
                  <li>• Sea freight for bulk orders</li>
                  <li>• Temperature-controlled storage</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold text-foreground mb-4">📏 Minimum Orders</h3>
                <p className="mb-2"><strong>Flexible quantities for bulk orders</strong></p>
                <p className="text-muted-foreground">
                  We accommodate various order sizes to meet the needs of different 
                  markets and distribution channels.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-red-50 p-8 rounded-lg text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Import?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Get in touch with our export team for detailed quotes, shipping schedules, 
                and custom packaging solutions tailored to your market needs.
              </p>
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                <Link to="/contact">📩 Contact Us for a Quote</Link>
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600">50+</div>
                <p className="text-muted-foreground">Countries Served</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">1000+</div>
                <p className="text-muted-foreground">Tons Exported Annually</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">99%</div>
                <p className="text-muted-foreground">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Export;
