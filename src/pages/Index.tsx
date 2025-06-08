
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import ProductsPreview from "@/components/ProductsPreview";
import CertificationsPreview from "@/components/CertificationsPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <AboutPreview />
      <ProductsPreview />
      <CertificationsPreview />
      <Footer />
    </div>
  );
};

export default Index;
