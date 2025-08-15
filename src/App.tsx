
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Farm from "./pages/Farm";
import Quality from "./pages/Quality";
import Export from "./pages/Export";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const LanguageRoute = ({ children }: { children: React.ReactNode }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const path = window.location.pathname;
    const langFromPath = path.split('/')[1];
    
    if (langFromPath && ['en', 'ar'].includes(langFromPath)) {
      if (i18n.language !== langFromPath) {
        i18n.changeLanguage(langFromPath);
      }
    } else {
      // Redirect to language-prefixed URL
      const currentLang = i18n.language || 'en';
      window.history.replaceState({}, '', `/${currentLang}${path}`);
    }
  }, [i18n]);

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageRoute>
          <Routes>
            {/* Language-prefixed routes */}
            <Route path="/en" element={<Index />} />
            <Route path="/en/about" element={<About />} />
            <Route path="/en/products" element={<Products />} />
            <Route path="/en/farm" element={<Farm />} />
            <Route path="/en/quality" element={<Quality />} />
            <Route path="/en/export" element={<Export />} />
            <Route path="/en/contact" element={<Contact />} />
            
            <Route path="/ar" element={<Index />} />
            <Route path="/ar/about" element={<About />} />
            <Route path="/ar/products" element={<Products />} />
            <Route path="/ar/farm" element={<Farm />} />
            <Route path="/ar/quality" element={<Quality />} />
            <Route path="/ar/export" element={<Export />} />
            <Route path="/ar/contact" element={<Contact />} />
            
            {/* Redirect root to default language */}
            <Route path="/" element={<Navigate to="/en" replace />} />
            <Route path="/about" element={<Navigate to="/en/about" replace />} />
            <Route path="/products" element={<Navigate to="/en/products" replace />} />
            <Route path="/farm" element={<Navigate to="/en/farm" replace />} />
            <Route path="/quality" element={<Navigate to="/en/quality" replace />} />
            <Route path="/export" element={<Navigate to="/en/export" replace />} />
            <Route path="/contact" element={<Navigate to="/en/contact" replace />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LanguageRoute>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
