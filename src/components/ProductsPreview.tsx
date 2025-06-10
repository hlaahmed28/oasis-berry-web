
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ProductsPreview = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Freshness You Can Taste
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a variety of strawberry types cultivated with care and precision. 
            Our crops are ideal for fresh consumption, retail, and large-scale exports.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 hover:border-red-200 transition-colors">
            <CardHeader>
              <img 
                src="/lovable-uploads/bf25374c-4ce7-4f81-b6fb-a50a53ff3bb0.png" 
                alt="Festival Strawberries"
                className="w-full h-32 object-cover rounded-lg mb-4"
                onError={(e) => {
                  console.log('Festival strawberries image failed to load');
                  e.currentTarget.style.display = 'none';
                }}
              />
              <CardTitle className="text-red-600">Festival Strawberries</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Juicy and sweet, with an intense red color. Great shelf life and ideal for export.
                Perfect for international markets demanding premium quality.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:border-red-200 transition-colors">
            <CardHeader>
              <img 
                src="/lovable-uploads/421700b1-f980-46d0-9122-e2acfe70bc4f.png" 
                alt="Florida Beauty Strawberries"
                className="w-full h-32 object-cover rounded-lg mb-4"
                onError={(e) => {
                  console.log('Florida Beauty strawberries image failed to load');
                  e.currentTarget.style.display = 'none';
                }}
              />
              <CardTitle className="text-red-600">Florida Beauty</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Known for early harvest and vibrant color. Perfect for markets that demand 
                freshness and speed. Excellent for fresh consumption.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
