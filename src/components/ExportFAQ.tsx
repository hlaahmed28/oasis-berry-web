import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export const exportFaqs = [
  {
    question: "When is the fresh Egyptian strawberry export season?",
    answer:
      "Our main export season runs from November through May each year, with early-harvest Brilliance strawberries starting in November and peak Fortuna strawberry volumes shipping weekly from December through April.",
  },
  {
    question: "Which strawberry varieties does Strawberry Oasis export?",
    answer:
      "We specialize in two premier export varieties: Fortuna strawberries (prized for bright glossy color, sweet balanced flavor, firmness, and extended shelf life) and Brilliance strawberries (known for early-season availability, uniform conical shape, and vibrant ruby appearance).",
  },
  {
    question: "What food safety certifications do your strawberries hold?",
    answer:
      "Our farms and packing facilities are GLOBALG.A.P. and ISO 22000 certified, EU and FDA compliant for fresh and frozen exports, and backed by official Egyptian Ministry of Agriculture laboratory test certificates.",
  },
  {
    question: "What packaging formats and private-label options are available?",
    answer:
      "We supply both fresh and frozen exports — packing fresh berries in retail-ready clamshells (250g and 500g) and export master cartons (2kg and 5kg), plus IQF frozen bulk cartons and private-label options upon request.",
  },
  {
    question: "How do you ship fresh and frozen strawberries internationally?",
    answer:
      "We maintain an unbroken cold chain from forced-air pre-cooling and IQF freezing to destination arrival, offering express air freight for fresh retail programs and temperature-controlled reefer sea freight for fresh and frozen bulk orders across Europe, the UK, North America, the Middle East, and Asia.",
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-20 bg-cream-100 scroll-mt-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Editorial Title */}
          <div className="lg:col-span-4">
            <span className="eyebrow text-berry-600 mb-2.5">For Importers</span>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-serif font-bold text-oasis-900 leading-[1.06]">
              Frequently asked questions.
            </h2>
          </div>

          {/* Right Minimal Hairline Accordion */}
          <div className="lg:col-span-8 border-t border-cream-400/80">
            {exportFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className="border-b border-cream-400/80"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full py-5 flex items-center justify-between gap-6 text-left group"
                  >
                    <span className="text-sm sm:text-base font-semibold text-oasis-900 group-hover:text-berry-600 transition-colors">
                      {faq.question}
                    </span>
                    <span className="shrink-0 text-oasis-900/70 group-hover:text-berry-600 transition-colors">
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-5 pr-8 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExportFAQ;
