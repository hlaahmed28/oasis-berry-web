import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Page Not Found"
        description="The page you requested could not be found on Strawberry Oasis."
        path={location.pathname}
        noindex
      />
      <Navigation />
      <main className="flex-1 flex items-center justify-center px-4 py-24">
        <div className="text-center max-w-md mx-auto">
          <span className="eyebrow text-berry-600 mb-3">Error 404</span>
          <h1 className="text-6xl font-serif font-semibold text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            The page you are looking for doesn&apos;t exist or may have moved.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-berry-600 hover:bg-berry-700 text-white px-7 h-11 shadow-berry"
          >
            <Link to="/" className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Return to Home
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
