
import { Link } from "react-router-dom";
import { Mail, Phone, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-kmb-green text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/3741fa3e-27ef-481f-870d-f1810313eab9.png" 
                alt="Köp Mina Bollar Logo" 
                className="h-10 w-auto" 
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <span className="font-semibold text-lg">Köp Mina Bollar</span>
            </div>
            <p className="text-white/80 mb-4">
              Handplockade golfbollar av högsta kvalitet från svenska golfbanor.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-kmb-sand">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-kmb-sand">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Köp Mina Bollar</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white">Hem</Link>
              </li>
              <li>
                <Link to="/products" className="text-white/80 hover:text-white">Produkter</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white">Om oss</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white">Kontakt</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/grading" className="text-white/80 hover:text-white">Vårt graderingssystem</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-white/80 hover:text-white">Frakt & Leverans</Link>
              </li>
              <li>
                <Link to="/returns" className="text-white/80 hover:text-white">Returpolicy</Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/80 hover:text-white">Vanliga frågor</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontakta oss</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-white/70" />
                <a href="mailto:info@kopmina.se" className="text-white/80 hover:text-white">info@kopmina.se</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-white/70" />
                <a href="tel:+46701234567" className="text-white/80 hover:text-white">070-123 45 67</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 text-center text-white/70">
          <p>&copy; {new Date().getFullYear()} Köp Mina Bollar. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
