
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero-pattern py-16 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Premium golfbollar till bättre priser
          </h1>
          <p className="text-lg md:text-xl mb-8 text-kmb-dark/80 max-w-2xl">
            Handplockade och noggrant sorterade kvalitetsbollar från svenska golfbanor.
            Ett mer hållbart och prisvärt sätt att spela golf på.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-kmb-green hover:bg-kmb-light-green">
              <Link to="/products">Se våra golfbollar</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-kmb-green text-kmb-green hover:bg-kmb-sand">
              <Link to="/about">Läs mer om oss</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
