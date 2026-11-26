import { Phone, Mail, MessageSquare, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const contactMethods = [
  {
    icon: Phone,
    title: "Direct Call",
    description:
      "Speak directly with our export directors for immediate seasonal pricing and freight availability.",
    action: "Call Export Desk",
    details: [
      { label: "Ahmed El Afifi: +20 155 483 3334", href: "tel:+201554833334" },
      { label: "Mohamed Fahmy: +20 100 388 7243", href: "tel:+201003887243" },
    ],
    href: "tel:+201554833334",
  },
  {
    icon: Mail,
    title: "Email Inquiry",
    description:
      "Send your target volumes, packaging specs, and destination port to receive a tailored proposal.",
    action: "Send Email",
    details: [
      {
        label: "ahmedelafifi@strawberryoasis.com",
        href: "mailto:ahmedelafifi@strawberryoasis.com",
      },
      {
        label: "Mohamed.fahmy@strawberryoasis.com",
        href: "mailto:Mohamed.fahmy@strawberryoasis.com",
      },
    ],
    href: "mailto:ahmedelafifi@strawberryoasis.com",
  },
  {
    icon: MessageSquare,
    title: "Contact Form",
    description:
      "Submit your structured inquiry online and receive a dedicated response within 24 hours.",
    action: "Open Inquiry Form",
    details: [
      { label: "Guaranteed response within 24 hours" },
      { label: "Custom specs & sample requests" },
    ],
    href: "/contact",
  },
];

const ContactMethods = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow text-berry-600 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-berry-600" />
            Export Desk
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-foreground leading-[1.1] mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Choose your preferred channel to connect with our team and begin your strawberry
            import partnership.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {contactMethods.map(({ icon: Icon, title, description, action, details, href }) => (
            <div
              key={title}
              className="group rounded-3xl bg-card border border-border/80 p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="h-12 w-12 rounded-2xl bg-berry-50 border border-berry-200/70 text-berry-600 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="text-2xl font-serif font-semibold text-foreground mb-2.5">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {description}
              </p>

              <div className="space-y-2 py-4 border-y border-border/60 mb-6 text-sm">
                {details.map((detail) =>
                  detail.href ? (
                    <a
                      key={detail.label}
                      href={detail.href}
                      className="block text-foreground/85 hover:text-berry-600 transition-colors break-words font-medium"
                    >
                      {detail.label}
                    </a>
                  ) : (
                    <p key={detail.label} className="text-muted-foreground">
                      {detail.label}
                    </p>
                  )
                )}
              </div>

              <Button
                asChild
                className="w-full rounded-full bg-berry-600 hover:bg-berry-700 text-white h-11 shadow-berry"
              >
                {href.startsWith("/") ? (
                  <Link to={href} className="inline-flex items-center justify-center gap-1.5">
                    {action}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <a href={href} className="inline-flex items-center justify-center gap-1.5">
                    {action}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;
