
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            🍓 Strawberry Oasis
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Link to="/products" className="text-foreground hover:text-primary transition-colors">
              Products
            </Link>
            <Link to="/farm" className="text-foreground hover:text-primary transition-colors">
              Our Farm
            </Link>
            <Link to="/quality" className="text-foreground hover:text-primary transition-colors">
              Quality
            </Link>
            <Link to="/export" className="text-foreground hover:text-primary transition-colors">
              Export
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link to="/" className="py-2 text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="py-2 text-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/products" className="py-2 text-foreground hover:text-primary transition-colors">
                Products
              </Link>
              <Link to="/farm" className="py-2 text-foreground hover:text-primary transition-colors">
                Our Farm
              </Link>
              <Link to="/quality" className="py-2 text-foreground hover:text-primary transition-colors">
                Quality
              </Link>
              <Link to="/export" className="py-2 text-foreground hover:text-primary transition-colors">
                Export
              </Link>
              <Link to="/contact" className="py-2 text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
