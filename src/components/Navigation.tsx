
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import LanguageSelector from "./LanguageSelector";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const getLocalizedPath = (path: string) => {
    const currentLang = i18n.language || 'en';
    return `/${currentLang}${path === '/' ? '' : path}`;
  };

  return (
    <nav className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to={getLocalizedPath('/')} className="flex items-center">
            <img 
              src="/lovable-uploads/9937b735-6e84-4902-9b1a-9ce2cb363f4f.png" 
              alt="Strawberry Oasis Logo" 
              className="h-12 w-auto"
              onError={(e) => {
                console.log('Logo failed to load:', e);
                console.log('Attempted to load:', e.currentTarget.src);
              }}
              onLoad={() => {
                console.log('Logo loaded successfully');
              }}
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to={getLocalizedPath('/')} className="text-foreground hover:text-primary transition-colors">
              {t('nav.home')}
            </Link>
            <Link to={getLocalizedPath('/about')} className="text-foreground hover:text-primary transition-colors">
              {t('nav.about')}
            </Link>
            <Link to={getLocalizedPath('/products')} className="text-foreground hover:text-primary transition-colors">
              {t('nav.products')}
            </Link>
            <Link to={getLocalizedPath('/farm')} className="text-foreground hover:text-primary transition-colors">
              {t('nav.farm')}
            </Link>
            <Link to={getLocalizedPath('/quality')} className="text-foreground hover:text-primary transition-colors">
              {t('nav.quality')}
            </Link>
            <Link to={getLocalizedPath('/export')} className="text-foreground hover:text-primary transition-colors">
              {t('nav.export')}
            </Link>
            <Link to={getLocalizedPath('/contact')} className="text-foreground hover:text-primary transition-colors">
              {t('nav.contact')}
            </Link>
          </div>

          {/* Language Selector and Mobile menu button */}
          <div className="flex items-center space-x-2">
            <LanguageSelector variant="header" />
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link to={getLocalizedPath('/')} className="py-2 text-foreground hover:text-primary transition-colors">
                {t('nav.home')}
              </Link>
              <Link to={getLocalizedPath('/about')} className="py-2 text-foreground hover:text-primary transition-colors">
                {t('nav.about')}
              </Link>
              <Link to={getLocalizedPath('/products')} className="py-2 text-foreground hover:text-primary transition-colors">
                {t('nav.products')}
              </Link>
              <Link to={getLocalizedPath('/farm')} className="py-2 text-foreground hover:text-primary transition-colors">
                {t('nav.farm')}
              </Link>
              <Link to={getLocalizedPath('/quality')} className="py-2 text-foreground hover:text-primary transition-colors">
                {t('nav.quality')}
              </Link>
              <Link to={getLocalizedPath('/export')} className="py-2 text-foreground hover:text-primary transition-colors">
                {t('nav.export')}
              </Link>
              <Link to={getLocalizedPath('/contact')} className="py-2 text-foreground hover:text-primary transition-colors">
                {t('nav.contact')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
