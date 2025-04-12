
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-kmb-cream py-12">
        <div className="text-center max-w-md px-4">
          <h1 className="text-5xl font-bold text-kmb-green mb-4">404</h1>
          <img 
            src="/lovable-uploads/3741fa3e-27ef-481f-870d-f1810313eab9.png"
            alt="Köp Mina Bollar Logo"
            className="h-20 mx-auto mb-6"
          />
          <p className="text-xl text-kmb-dark mb-6">
            Hoppsan! Den här sidan verkar ha hamnat i vattenhindret.
          </p>
          <Button asChild size="lg" className="bg-kmb-green hover:bg-kmb-light-green">
            <Link to="/">Tillbaka till hemsidan</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
