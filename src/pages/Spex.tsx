
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleDollarSign, Sparkles, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

const specialBalls = [
  {
    id: "limited-titleist",
    name: "Titleist Pro V1 - Limited Edition",
    description: "Limiterad upplaga av Titleist Pro V1 med särskild märkning.",
    price: 45,
    category: "limited",
    image: "/placeholder.svg"
  },
  {
    id: "color-callaway",
    name: "Callaway Chrome Soft - Gul",
    description: "Callaway Chrome Soft i gul färg för bättre synlighet.",
    price: 35,
    category: "color",
    image: "/placeholder.svg"
  },
  {
    id: "limited-taylormade",
    name: "TaylorMade TP5 - Signerad",
    description: "TaylorMade TP5 signerad av professionell golfare.",
    price: 55,
    category: "limited",
    image: "/placeholder.svg"
  },
  {
    id: "color-bridgestone",
    name: "Bridgestone Tour B RX - Röd",
    description: "Röd Bridgestone Tour B RX för spelare som vill synas.",
    price: 40,
    category: "color",
    image: "/placeholder.svg"
  },
  {
    id: "bonus-srixon",
    name: "Srixon Z-Star - Bonus",
    description: "Gratis bonus Srixon Z-Star vid köp över 300 kr.",
    price: 0,
    category: "bonus",
    image: "/placeholder.svg"
  }
];

const SpecialBallCard = ({ ball }: { ball: typeof specialBalls[0] }) => {
  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "limited":
        return <Sparkles className="h-5 w-5" />;
      case "color":
        return <Palette className="h-5 w-5" />;
      case "bonus":
        return <CircleDollarSign className="h-5 w-5" />;
      default:
        return null;
    }
  };
  
  const getCategoryText = (category: string) => {
    switch(category) {
      case "limited":
        return "Limiterad utgåva";
      case "color":
        return "Färgad boll";
      case "bonus":
        return "Bonusboll";
      default:
        return "";
    }
  };

  return (
    <Card className="overflow-hidden border border-kmb-sand hover:shadow-md transition-shadow">
      <div className="aspect-square overflow-hidden bg-white flex items-center justify-center">
        <img 
          src={ball.image} 
          alt={ball.name} 
          className="object-cover w-full h-full"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{ball.name}</CardTitle>
          <Badge className="bg-kmb-green flex items-center gap-1">
            {getCategoryIcon(ball.category)} {getCategoryText(ball.category)}
          </Badge>
        </div>
        <CardDescription className="line-clamp-2">{ball.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-kmb-green">
          {ball.price > 0 ? `${ball.price} kr` : "Gratis"}
        </div>
      </CardContent>
      <CardFooter>
        {ball.category !== "bonus" ? (
          <Button className="w-full bg-kmb-green hover:bg-kmb-light-green">
            Lägg i varukorgen
          </Button>
        ) : (
          <Button variant="outline" className="w-full border-kmb-green text-kmb-green">
            Gratis vid köp över 300 kr
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const Spex = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-kmb-cream">
          <div className="container">
            <div className="mb-10 text-center">
              <h1 className="text-4xl font-bold mb-4">Specialbollar</h1>
              <p className="text-kmb-dark/70 max-w-2xl mx-auto">
                Här hittar du våra unika och speciella golfbollar, från limiterade utgåvor till färgade varianter för bättre synlighet.
              </p>
            </div>
            
            <div className="bg-kmb-green text-white p-6 rounded-lg mb-10">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold mb-2">Få en gratis specialboll!</h3>
                  <p>Lägg till en valfri bonusboll i din varukorg när du handlar för över 300 kr.</p>
                </div>
                <Button variant="outline" className="border-white text-white hover:bg-kmb-light-green">
                  Se bonusbollar
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {specialBalls.map((ball) => (
                <SpecialBallCard key={ball.id} ball={ball} />
              ))}
            </div>
            
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6 text-center">Månadens unika bollar</h2>
              <div className="bg-white rounded-lg p-6 border border-kmb-sand">
                <p className="text-center text-kmb-dark/70 mb-4">
                  Varje månad erbjuder vi unika golfbollar med speciella egenskaper.
                  Kom tillbaka regelbundet för att se våra senaste specialerbjudanden!
                </p>
                <div className="flex justify-center">
                  <Button variant="outline" className="border-kmb-green text-kmb-green hover:bg-kmb-sand">
                    Prenumerera på nyhetsbrev
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Spex;
