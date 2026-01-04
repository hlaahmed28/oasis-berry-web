import { Phone, Mail, MessageSquare } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ContactMethods = () => {
  const contactMethods = [
    {
      icon: <Phone className="h-8 w-8 text-red-600" />,
      title: "Direct Call",
      description:
        "Speak directly with our export team for immediate assistance and quotes",
      action: "Call Now",
      details: [
        "Ahmed El Afifi: +20 155 483 3334",
        "Mohamed Fahmy: +20 100 388 7243",
      ],
      href: "tel:+201554833334",
    },
    {
      icon: <Mail className="h-8 w-8 text-red-600" />,
      title: "Email Inquiry",
      description:
        "Send detailed requirements and receive comprehensive proposals",
      action: "Send Email",
      details: [
        "ahmedelafifi@strawberryoasis.com",
        "Mohamed.fahmy@strawberryoasis.com",
      ],
      href: "mailto:ahmedelafifi@strawberryoasis.com",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-red-600" />,
      title: "Contact Form",
      description:
        "Fill out our detailed form for structured communication and follow-up",
      action: "Fill Form",
      details: ["Quick response within 24 hours", "Structured inquiry process"],
      href: "/contact",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your preferred method to connect with our export team and
            start your strawberry import journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow h-full flex flex-col"
            >
              <CardHeader className="flex-1">
                <div className="flex justify-center mb-4">{method.icon}</div>
                <CardTitle className="text-xl mb-2">{method.title}</CardTitle>
                <CardDescription className="text-base">
                  {method.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col justify-end">
                <div className="space-y-2 mb-6 min-h-[3rem] flex flex-col justify-center">
                  {method.details.map((detail, idx) => (
                    <p
                      key={idx}
                      className="text-sm text-muted-foreground break-words"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
                <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                  {method.href.startsWith("/") ? (
                    <Link to={method.href}>{method.action}</Link>
                  ) : (
                    <a href={method.href}>{method.action}</a>
                  )}
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
