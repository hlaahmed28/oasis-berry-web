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
    <section className="border-b border-cream-300 bg-cream-100 pt-10 pb-12 md:pt-14 md:pb-16">
      <div className="container mx-auto">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              {breadcrumbs.map((crumb, idx) => {
                const isLast = idx === breadcrumbs.length - 1;
                return (
                  <li key={crumb.path} className="inline-flex items-center gap-1.5">
                    {idx > 0 && <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />}
                    {isLast ? (
                      <span aria-current="page" className="text-oasis-900 font-semibold">
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

        <div className="max-w-3xl">
          <span className="eyebrow text-berry-600 mb-3">{eyebrow}</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-oasis-900 tracking-tight leading-[1.05] mb-5">
            {title}
          </h1>
          {description && (
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
          {children && <div className="mt-7">{children}</div>}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
