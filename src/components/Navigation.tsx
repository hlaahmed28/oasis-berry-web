import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Varieties", to: "/products" },
  { label: "Quality", to: "/quality" },
  { label: "Export", to: "/export" },
  { label: "FAQ", to: "/#faq" },
  { label: "Contact", to: "/contact" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname, hash]);

  const handleFaqClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (pathname === "/") {
      const el = document.getElementById("faq");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    navigate("/");
    setTimeout(() => {
      document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
    }, 120);
  };

  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-cream-100/95 backdrop-blur-md border-b border-cream-300/90">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-[74px]">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="h-12 w-12 rounded-full bg-white p-0.5 ring-1 ring-cream-400/70 shadow-sm overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <img
                src="/lovable-uploads/9937b735-6e84-4902-9b1a-9ce2cb363f4f.png"
                alt="Strawberry Oasis Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="font-serif text-xl font-bold tracking-tight text-oasis-900">
              Strawberry Oasis
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isFaq = link.to === "/#faq";
              const isActive = !isFaq && pathname === link.to;
              if (isFaq) {
                return (
                  <a
                    key={link.label}
                    href="/#faq"
                    onClick={handleFaqClick}
                    className="py-1 text-sm font-medium text-oasis-900/75 hover:text-oasis-900 transition-colors"
                  >
                    {link.label}
                  </a>
                );
              }
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`py-1 text-sm transition-colors ${
                    isActive
                      ? "text-oasis-900 font-semibold border-b-2 border-berry-600"
                      : "text-oasis-900/75 hover:text-oasis-900 font-medium"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Button
              asChild
              className="rounded-[3px] bg-berry-600 hover:bg-berry-700 text-cream-50 px-5 h-10 text-xs font-semibold tracking-wide shadow-none transition-colors"
            >
              <Link to="/contact" className="inline-flex items-center gap-2">
                Request a Quote
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden text-oasis-900 hover:bg-cream-200 rounded-[3px]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 pt-3 border-t border-cream-300 animate-fade-up">
            <nav aria-label="Mobile navigation" className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isFaq = link.to === "/#faq";
                const isActive = !isFaq && pathname === link.to;
                if (isFaq) {
                  return (
                    <a
                      key={link.label}
                      href="/#faq"
                      onClick={handleFaqClick}
                      className="px-3 py-2.5 text-base font-medium text-oasis-900/80 hover:bg-cream-200/70 hover:text-oasis-900"
                    >
                      {link.label}
                    </a>
                  );
                }
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`px-3 py-2.5 text-base transition-colors ${
                      isActive
                        ? "text-berry-600 font-semibold bg-cream-200/60"
                        : "text-oasis-900/80 hover:bg-cream-200/70 hover:text-oasis-900 font-medium"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-3">
                <Button
                  asChild
                  className="w-full rounded-[3px] bg-berry-600 hover:bg-berry-700 text-cream-50 h-11 font-semibold"
                >
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2">
                    Request a Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
