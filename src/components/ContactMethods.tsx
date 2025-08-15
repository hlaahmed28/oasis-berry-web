
import { Phone, Mail, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const ContactMethods = () => {
  const { t, i18n } = useTranslation();

  const getLocalizedPath = (path: string) => {
    const currentLang = i18n.language || 'en';
    return `/${currentLang}${path === '/' ? '' : path}`;
  };
  const contactMethods = [
    {
      icon: <Phone className="h-8 w-8 text-red-600" />,
      title: t('contact.methods.call.title'),
      description: t('contact.methods.call.description'),
      action: t('contact.methods.call.action'),
      details: ["Ahmed El Afifi: +20 155 483 3334", "Mohamed Fahmy: +20 100 388 7243"],
      href: "tel:+201554833334"
    },
    {
      icon: <Mail className="h-8 w-8 text-red-600" />,
      title: t('contact.methods.email.title'),
      description: t('contact.methods.email.description'),
      action: t('contact.methods.email.action'),
      details: ["ahmedelafifi@strawberryoasis.com", "Mohamed.fahmy@strawberryoasis.com"],
      href: "mailto:ahmedelafifi@strawberryoasis.com"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-red-600" />,
      title: t('contact.methods.form.title'),
      description: t('contact.methods.form.description'),
      action: t('contact.methods.form.action'),
      details: [t('contact.methods.form.response'), t('contact.methods.form.process')],
      href: getLocalizedPath('/contact')
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('contact.methods.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contact.methods.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader className="flex-1">
                <div className="flex justify-center mb-4">
                  {method.icon}
                </div>
                <CardTitle className="text-xl mb-2">{method.title}</CardTitle>
                <CardDescription className="text-base">
                  {method.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col justify-end">
                <div className="space-y-2 mb-6 min-h-[3rem] flex flex-col justify-center">
                  {method.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground break-words">
                      {detail}
                    </p>
                  ))}
                </div>
                <Button 
                  asChild 
                  className="w-full bg-red-600 hover:bg-red-700"
                >
                  <a href={method.href}>
                    {method.action}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;
