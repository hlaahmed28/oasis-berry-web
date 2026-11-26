import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Our Farm", to: "/farm" },
  { label: "Quality", to: "/quality" },
  { label: "Export", to: "/export" },
  { label: "Contact", to: "/contact" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  const isHome = pathname === "/";
  const useLightSurface = !isHome || isScrolled || isMenuOpen;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`${
        isHome ? "fixed" : "sticky"
      } top-0 inset-x-0 z-50 transition-all duration-300 ${
        useLightSurface
          ? "bg-background/90 backdrop-blur-xl border-b border-border/80 shadow-soft"
          : "bg-oasis-950/30 backdrop-blur-md border-b border-white/10"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-20">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="h-12 w-12 rounded-full bg-white p-0.5 shadow-sm ring-1 ring-black/10 overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <img
                src="/lovable-uploads/9937b735-6e84-4902-9b1a-9ce2cb363f4f.png"
                alt="Strawberry Oasis Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`font-serif text-lg font-semibold tracking-tight transition-colors ${
                  useLightSurface ? "text-foreground" : "text-white"
                }`}
              >
                Strawberry Oasis
              </span>
              <span
                className={`text-[11px] font-medium tracking-[0.14em] uppercase mt-1 transition-colors ${
                  useLightSurface ? "text-muted-foreground" : "text-white/75"
                }`}
              >
                Egyptian Export
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? useLightSurface
                        ? "bg-berry-600/10 text-berry-700 font-semibold"
                        : "bg-white/20 text-white font-semibold"
                      : useLightSurface
                      ? "text-foreground/75 hover:text-foreground hover:bg-muted/80"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              className="rounded-full bg-berry-600 hover:bg-berry-700 text-white px-5 h-10 shadow-berry transition-all duration-200 hover:-translate-y-0.5"
            >
              <Link to="/contact" className="inline-flex items-center gap-1.5">
                Request Quote
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className={`lg:hidden rounded-full ${
              useLightSurface
                ? "text-foreground hover:bg-muted"
                : "text-white hover:bg-white/15 hover:text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 pt-2 border-t border-border/60 animate-fade-up">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? "bg-berry-600/10 text-berry-700 font-semibold"
                        : "text-foreground/80 hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-3 px-1">
                <Button
                  asChild
                  className="w-full rounded-full bg-berry-600 hover:bg-berry-700 text-white h-11 shadow-berry"
                >
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2">
                    Request Export Quote
                    <ArrowUpRight className="h-4 w-4" />
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
