import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export const exportFaqs = [
  {
    question: "When is the fresh Egyptian strawberry export season?",
    answer:
      "Our main export season runs from November through May each year, with early-harvest Florida Beauty strawberries starting in November and peak Festival strawberry volumes shipping weekly from December through April.",
  },
  {
    question: "Which strawberry varieties does Strawberry Oasis export?",
    answer:
      "We specialize in two premier export varieties: Festival strawberries (prized for deep crimson color, high sweetness, firmness, and extended shelf life) and Florida Beauty strawberries (known for early-season availability and vibrant glossy appearance).",
  },
  {
    question: "What food safety certifications do your strawberries hold?",
    answer:
      "Our farms and packing facilities are GLOBALG.A.P and ISO 22000 certified, fully compliant with European Union MRL and phytosanitary regulations, and backed by official Egyptian Ministry of Agriculture laboratory test certificates.",
  },
  {
    question: "What packaging formats and private-label options are available?",
    answer:
      "We pack to order in retail-ready ventilated clamshells (250g and 500g), export master cartons (2kg and 5kg), and custom bulk crates. Private-label supermarket branding and specialty presentation packaging are available upon request.",
  },
  {
    question: "How do you ship fresh strawberries internationally?",
    answer:
      "We maintain an unbroken cold chain from forced-air pre-cooling at our packing house to destination arrival, offering express air freight for time-sensitive fresh retail programs and temperature-controlled sea freight for bulk orders across Europe, the UK, the Middle East, and Asia.",
  },
];

export const exportFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: exportFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const ExportFAQ = () => {
  return (
    <section className="py-20 md:py-24 bg-white border-t border-border/60">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow text-oasis-700 mb-3">
              <HelpCircle className="h-3.5 w-3.5" />
              Importer Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground leading-tight mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Key details on Egyptian strawberry harvest schedules, certifications, packaging, and
              international cold-chain shipping.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {exportFaqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="rounded-2xl border border-border/80 bg-background/60 px-6 data-[state=open]:bg-background data-[state=open]:shadow-soft transition-all"
              >
                <AccordionTrigger className="text-left font-serif text-lg font-medium text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm md:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ExportFAQ;
