import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import ProductsPreview from "@/components/ProductsPreview";
import CertificationsPreview from "@/components/CertificationsPreview";
import ExportFAQ, { exportFaqJsonLd } from "@/components/ExportFAQ";
import ContactMethods from "@/components/ContactMethods";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden flex flex-col">
      <SEO
        title="Strawberry Oasis — Premium Egyptian Strawberries for Global Export"
        description="Leading Egyptian strawberry grower and exporter. GLOBALG.A.P and ISO 22000 certified Festival and Florida Beauty fresh strawberries shipped worldwide via cold-chain air and sea freight."
        path="/"
        keywords="Egyptian strawberries export, fresh strawberries Egypt, Festival strawberries exporter, Florida Beauty strawberries, GLOBALG.A.P certified strawberries, ISO 22000 strawberry supplier, wholesale Egyptian strawberries"
        structuredData={exportFaqJsonLd}
      />
      <Navigation />
      <main className="flex-1">
        <Hero />
        <AboutPreview />
        <ProductsPreview />
        <CertificationsPreview />
        <ExportFAQ />
        <ContactMethods />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
