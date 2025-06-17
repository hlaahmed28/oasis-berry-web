
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import ProductsPreview from "@/components/ProductsPreview";
import CertificationsPreview from "@/components/CertificationsPreview";
import ContactMethods from "@/components/ContactMethods";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutPreview />
      <ProductsPreview />
      <CertificationsPreview />
      <ContactMethods />
      <Footer />
    </div>
  );
};

export default Index;
