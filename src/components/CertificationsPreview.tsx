
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CertificationsPreview = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certified Excellence You Can Trust
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We proudly adhere to the highest international standards for food safety and quality.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center border-2 hover:border-green-200 transition-colors">
            <CardHeader>
              <div className="text-4xl mb-2">🌿</div>
              <CardTitle className="text-green-600">GLOBALG.A.P</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Certified for safe and sustainable agricultural practices
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-2 hover:border-blue-200 transition-colors">
            <CardHeader>
              <div className="text-4xl mb-2">🏅</div>
              <CardTitle className="text-blue-600">ISO 22000</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Food Safety Management System certified
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-2 hover:border-purple-200 transition-colors">
            <CardHeader>
              <div className="text-4xl mb-2">🚚</div>
              <CardTitle className="text-purple-600">EU Compliant</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Fully compliant with European Union export regulations
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CertificationsPreview;
