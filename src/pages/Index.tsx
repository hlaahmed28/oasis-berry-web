import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import ProductsPreview from "@/components/ProductsPreview";
import TeamSection from "@/components/TeamSection";
import CertificationsPreview from "@/components/CertificationsPreview";
import ExportFAQ, { exportFaqJsonLd } from "@/components/ExportFAQ";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream-100 overflow-x-hidden flex flex-col">
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
        <TeamSection />
        <CertificationsPreview />
        <ExportFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
