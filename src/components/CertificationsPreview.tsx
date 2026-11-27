import { Link } from "react-router-dom";

const standards = [
  {
    title: "GLOBALG.A.P.",
    description:
      "Certified for safe, traceable, and responsible agricultural practices.",
  },
  {
    title: "ISO 22000",
    description:
      "Internationally recognized food safety management system.",
  },
  {
    title: "EU Compliant",
    description:
      "Fully compliant with European Union market requirements for fresh produce.",
  },
];

const CertificationsPreview = () => {
  return (
    <section className="bg-oasis-900 text-cream-50 py-14 md:py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
          {/* Left Heading Column */}
          <div className="lg:col-span-4 lg:pr-4">
            <span className="eyebrow text-cream-300/80 mb-2.5">Our Standards</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-[1.1]">
              Certified excellence you can trust.
            </h2>
            <Link
              to="/quality"
              className="inline-block mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-cream-200/80 hover:text-white border-b border-white/30 pb-0.5 transition-colors"
            >
              View quality protocol
            </Link>
          </div>

          {/* 3 Vertical-Ruled Certification Columns */}
          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x divide-white/20">
            {standards.map((item) => (
              <div key={item.title} className="sm:px-6 first:sm:pl-6 lg:first:pl-8">
                <h3 className="text-xl font-serif font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-cream-100/75 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsPreview;
