
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-kmb-cream border-b border-kmb-sand py-4 shadow-sm">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/3741fa3e-27ef-481f-870d-f1810313eab9.png" 
              alt="Köp Mina Bollar Logo" 
              className="h-10 w-auto" 
            />
            <span className="text-kmb-green font-semibold text-lg hidden sm:block">Köp Mina Bollar</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-kmb-green hover:text-kmb-light-green transition-colors">Hem</Link>
          <Link to="/products" className="text-kmb-green hover:text-kmb-light-green transition-colors">Produkter</Link>
          <Link to="/spex" className="text-kmb-green hover:text-kmb-light-green transition-colors">Spex</Link>
          <Link to="/about" className="text-kmb-green hover:text-kmb-light-green transition-colors">Om oss</Link>
          <Link to="/contact" className="text-kmb-green hover:text-kmb-light-green transition-colors">Kontakt</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-kmb-green hover:text-kmb-light-green hover:bg-kmb-sand">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-kmb-green hover:text-kmb-light-green hover:bg-kmb-sand"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-kmb-cream border-b border-kmb-sand shadow-md">
          <nav className="flex flex-col py-4 px-6 gap-4">
            <Link 
              to="/" 
              className="text-kmb-green hover:text-kmb-light-green transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Hem
            </Link>
            <Link 
              to="/products" 
              className="text-kmb-green hover:text-kmb-light-green transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Produkter
            </Link>
            <Link 
              to="/spex" 
              className="text-kmb-green hover:text-kmb-light-green transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Spex
            </Link>
            <Link 
              to="/about" 
              className="text-kmb-green hover:text-kmb-light-green transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Om oss
            </Link>
            <Link 
              to="/contact" 
              className="text-kmb-green hover:text-kmb-light-green transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
