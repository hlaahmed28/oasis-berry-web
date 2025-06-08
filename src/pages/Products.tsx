
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Freshness You Can Taste
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a variety of strawberry types cultivated with care and precision. 
              Our crops are ideal for fresh consumption, retail, and large-scale exports.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="border-2 border-red-200 hover:border-red-300 transition-colors">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">🍓</div>
                <CardTitle className="text-2xl text-red-600">Festival Strawberries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-lg">
                  Our flagship variety, Festival strawberries are renowned for their exceptional 
                  sweetness and vibrant red color that catches the eye and delights the palate.
                </CardDescription>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Key Features:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Intense red color with glossy finish</li>
                    <li>• Juicy, sweet flavor profile</li>
                    <li>• Extended shelf life for export</li>
                    <li>• Large, uniform berry size</li>
                    <li>• Excellent firmness for transport</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-red-800 font-medium">Perfect for international markets demanding premium quality</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-orange-200 hover:border-orange-300 transition-colors">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">🌟</div>
                <CardTitle className="text-2xl text-orange-600">Florida Beauty</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-lg">
                  Known for early harvest and exceptional vibrant color, Florida Beauty strawberries 
                  are perfect for markets that demand both freshness and speed to market.
                </CardDescription>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Key Features:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Early harvest capability</li>
                    <li>• Brilliant color development</li>
                    <li>• Fast market delivery</li>
                    <li>• Consistent berry quality</li>
                    <li>• Excellent for fresh consumption</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-orange-800 font-medium">Ideal for time-sensitive markets and fresh produce chains</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              Custom Packaging Options
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Available in multiple sizes and formats designed to meet the needs of global retailers and distributors.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                <div className="text-3xl mb-3">📦</div>
                <h3 className="font-semibold text-foreground mb-2">Clamshells</h3>
                <p className="text-muted-foreground">
                  Consumer-ready packaging in various sizes for retail markets
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                <div className="text-3xl mb-3">📋</div>
                <h3 className="font-semibold text-foreground mb-2">Cartons</h3>
                <p className="text-muted-foreground">
                  Export cartons designed for maximum protection during transport
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                <div className="text-3xl mb-3">🚚</div>
                <h3 className="font-semibold text-foreground mb-2">Bulk Crates</h3>
                <p className="text-muted-foreground">
                  Large volume packaging for wholesale and processing markets
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

export default Products;
