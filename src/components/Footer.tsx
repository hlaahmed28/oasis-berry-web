
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

const Footer = () => {
  const { t, i18n } = useTranslation();

  const getLocalizedPath = (path: string) => {
    const currentLang = i18n.language || 'en';
    return `/${currentLang}${path === '/' ? '' : path}`;
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">🍓 {t('footer.company')}</h3>
            <p className="text-gray-400 mb-4">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <div className="space-y-2">
              <Link to={getLocalizedPath('/about')} className="block text-gray-400 hover:text-white transition-colors">
                {t('nav.about')}
              </Link>
              <Link to={getLocalizedPath('/products')} className="block text-gray-400 hover:text-white transition-colors">
                {t('nav.products')}
              </Link>
              <Link to={getLocalizedPath('/farm')} className="block text-gray-400 hover:text-white transition-colors">
                {t('nav.farm')}
              </Link>
              <Link to={getLocalizedPath('/quality')} className="block text-gray-400 hover:text-white transition-colors">
                {t('nav.quality')}
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('nav.export')}</h4>
            <div className="space-y-2">
              <Link to={getLocalizedPath('/export')} className="block text-gray-400 hover:text-white transition-colors">
                {t('nav.export')}
              </Link>
              <Link to={getLocalizedPath('/contact')} className="block text-gray-400 hover:text-white transition-colors">
                {t('nav.contact')}
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer.contact')}</h4>
            <div className="space-y-2 text-gray-400">
              <div>
                <p>📞 +20 155 483 3334</p>
                <p>📞 +20 100 388 7243</p>
              </div>
              <div>
                <p>📧 ahmedelafifi@strawberryoasis.com</p>
                <p>📧 Mohamed.fahmy@strawberryoasis.com</p>
              </div>
              <p>📍 <a href="https://maps.app.goo.gl/b5RoWeXWRueUGMrV8" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">{t('contact.info.viewMap')}</a></p>
            </div>
            
            {/* Language Selector in Footer */}
            <div className="mt-6">
              <LanguageSelector variant="footer" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 {t('footer.company')}. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
