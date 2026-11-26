import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import type { BreadcrumbItem } from "@/components/SEO";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: ReactNode;
}

const PageHeader = ({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: PageHeaderProps) => {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-oasis-50/90 via-background to-background pt-12 pb-16 md:pt-16 md:pb-20">
      {/* Soft ambient organic accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-berry-100/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-oasis-100/70 blur-3xl"
      />

      <div className="relative container mx-auto">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="flex justify-center mb-6"
          >
            <ol className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              {breadcrumbs.map((crumb, idx) => {
                const isLast = idx === breadcrumbs.length - 1;
                return (
                  <li key={crumb.path} className="inline-flex items-center gap-1.5">
                    {idx > 0 && <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />}
                    {isLast ? (
                      <span aria-current="page" className="text-foreground font-semibold">
                        {crumb.name}
                      </span>
                    ) : (
                      <Link
                        to={crumb.path}
                        className="hover:text-berry-600 transition-colors"
                      >
                        {crumb.name}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        <div className="max-w-3xl mx-auto text-center">
          <span className="eyebrow text-berry-600 mb-4 px-3.5 py-1.5 rounded-full bg-berry-50 border border-berry-200/70">
            <span className="h-1.5 w-1.5 rounded-full bg-berry-600" />
            {eyebrow}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold text-foreground tracking-tight leading-[1.08] mb-5">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
