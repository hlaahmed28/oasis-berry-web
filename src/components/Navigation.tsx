
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
          <Link to="/" className="flex items-center gap-3 group hover-scale">
            <img 
              src="/lovable-uploads/9937b735-6e84-4902-9b1a-9ce2cb363f4f.png" 
              alt="Strawberry Oasis Logo" 
              className="h-16 w-auto transition-transform duration-300 group-hover:rotate-3"
            />
            <span className="text-base font-bold text-destructive transition-colors duration-300 group-hover:text-destructive/80">Strawberry Oasis</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-destructive hover:text-destructive/70 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-destructive hover:text-destructive/70 transition-colors">
              About Us
            </Link>
            <Link to="/products" className="text-destructive hover:text-destructive/70 transition-colors">
              Products
            </Link>
            <Link to="/farm" className="text-destructive hover:text-destructive/70 transition-colors">
              Our Farm
            </Link>
            <Link to="/quality" className="text-destructive hover:text-destructive/70 transition-colors">
              Quality
            </Link>
            <Link to="/export" className="text-destructive hover:text-destructive/70 transition-colors">
              Export
            </Link>
            <Link to="/contact" className="text-destructive hover:text-destructive/70 transition-colors">
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

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link to="/" className="py-2 text-destructive hover:text-destructive/70 transition-colors">
                Home
              </Link>
              <Link to="/about" className="py-2 text-destructive hover:text-destructive/70 transition-colors">
                About Us
              </Link>
              <Link to="/products" className="py-2 text-destructive hover:text-destructive/70 transition-colors">
                Products
              </Link>
              <Link to="/farm" className="py-2 text-destructive hover:text-destructive/70 transition-colors">
                Our Farm
              </Link>
              <Link to="/quality" className="py-2 text-destructive hover:text-destructive/70 transition-colors">
                Quality
              </Link>
              <Link to="/export" className="py-2 text-destructive hover:text-destructive/70 transition-colors">
                Export
              </Link>
              <Link to="/contact" className="py-2 text-destructive hover:text-destructive/70 transition-colors">
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
