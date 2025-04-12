
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, PiggyBank, Recycle } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-kmb-sand/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Miljövänliga golfbollar</h2>
          <p className="text-kmb-dark/70 max-w-2xl mx-auto">
            Genom att återanvända golfbollar av hög kvalitet sparar vi både miljön och din plånbok.
            Varje boll är handplockad och noggrant tvättad och graderad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-kmb-sand flex flex-col items-center text-center">
            <div className="bg-kmb-cream p-4 rounded-full mb-4">
              <Leaf className="h-8 w-8 text-kmb-green" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Bättre för miljön</h3>
            <p className="text-kmb-dark/70">
              Genom att återanvända golfbollar minskar vi behovet av nya, vilket minskar klimatpåverkan och resursförbrukningen.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-kmb-sand flex flex-col items-center text-center">
            <div className="bg-kmb-cream p-4 rounded-full mb-4">
              <PiggyBank className="h-8 w-8 text-kmb-green" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Prisvärt val</h3>
            <p className="text-kmb-dark/70">
              Spara upp till 60% jämfört med nya bollar utan att kompromissa med kvaliteten. Perfekt för både nybörjare och erfarna spelare.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-kmb-sand flex flex-col items-center text-center">
            <div className="bg-kmb-cream p-4 rounded-full mb-4">
              <Recycle className="h-8 w-8 text-kmb-green" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Noggrant sorterade</h3>
            <p className="text-kmb-dark/70">
              Alla våra bollar är handplockade och sorterade i tre kvalitetsgrader så att du kan välja rätt bollkvalitet för ditt spel.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-kmb-green hover:bg-kmb-light-green">
            <Link to="/about">Läs mer om vår process</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
