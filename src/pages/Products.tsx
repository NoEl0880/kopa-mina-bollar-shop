
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { golfBallModels, getGradeDescription } from "@/lib/products";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="bg-kmb-cream border-b border-kmb-sand py-8">
        <div className="container">
          <h1 className="text-3xl font-bold">Våra golfbollar</h1>
        </div>
      </div>
      
      <main className="flex-grow bg-white py-12">
        <div className="container">
          <Alert className="mb-8 bg-kmb-sand border border-kmb-green/20">
            <AlertCircle className="h-4 w-4 text-kmb-green" />
            <AlertTitle>Vårt graderingssystem</AlertTitle>
            <AlertDescription className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="flex items-start gap-2">
                <span className="inline-block px-2 py-1 text-xs rounded-md grade-a">Grad A</span>
                <span>{getGradeDescription('A')}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="inline-block px-2 py-1 text-xs rounded-md grade-b">Grad B</span>
                <span>{getGradeDescription('B')}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="inline-block px-2 py-1 text-xs rounded-md grade-c">Grad C</span>
                <span>{getGradeDescription('C')}</span>
              </div>
            </AlertDescription>
          </Alert>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {golfBallModels.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <Separator className="my-12" />
          
          <div className="md:flex gap-8">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">Varför handplockade golfbollar?</h2>
              <p className="mb-4 text-kmb-dark/80">
                Det finns flera fördelar med att välja återanvända golfbollar. Förutom den uppenbara miljöfördelen 
                så får du även premiumbollar till en bråkdel av priset jämfört med nya.
              </p>
              <p className="text-kmb-dark/80">
                Alla våra bollar är handplockade från svenska golfbanor och genomgår en noggrann 
                tvättning och sorteringsprocess för att säkerställa kvaliteten.
              </p>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Vanliga frågor</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium flex gap-2 items-center">
                    Påverkar ålder och slitage golfbollens prestanda?
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="h-4 w-4 text-kmb-green/70" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">Modern forskning visar att golfbollar behåller sina prestanda under lång tid.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </h3>
                  <p className="text-kmb-dark/80">
                    Moderna golfbollar är mycket hållbara. Så länge det inte finns synliga skador
                    behåller de i stort sett alla sina ursprungliga egenskaper.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium">Hur många bollar får jag?</h3>
                  <p className="text-kmb-dark/80">
                    Priset är per boll. Du kan beställa exakt så många du behöver av varje modell och grad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
