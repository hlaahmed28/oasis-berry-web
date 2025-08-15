import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' }
];

interface LanguageSelectorProps {
  variant?: 'header' | 'footer';
}

const LanguageSelector = ({ variant = 'header' }: LanguageSelectorProps) => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem('language', langCode);
    setIsOpen(false);
    
    // Update URL path
    const currentPath = window.location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(en|ar)/, '') || '/';
    const newPath = `/${langCode}${pathWithoutLang}`;
    window.history.pushState({}, '', newPath);
  };

  if (variant === 'footer') {
    return (
      <div className="flex flex-col space-y-2">
        <h3 className="text-sm font-semibold text-foreground">{t('nav.language')}</h3>
        <div className="space-y-1">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`flex items-center space-x-2 text-sm hover:text-primary transition-colors ${
                i18n.language === language.code ? 'text-primary font-medium' : 'text-muted-foreground'
              }`}
            >
              <span>{language.flag}</span>
              <span>{language.name}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center space-x-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLanguage.flag} {currentLanguage.name}</span>
          <span className="sm:hidden">{currentLanguage.flag}</span>
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-44 bg-background border shadow-lg z-50"
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className={`flex items-center space-x-2 cursor-pointer ${
              i18n.language === language.code ? 'bg-accent' : ''
            }`}
          >
            <span>{language.flag}</span>
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;