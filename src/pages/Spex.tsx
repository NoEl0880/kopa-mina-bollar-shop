
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, Award, Gift } from "lucide-react";

const Spex = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-kmb-cream">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 text-kmb-green">Specialbollar</h1>
              <p className="text-kmb-dark/70 max-w-2xl mx-auto">
                Upptäck vår unika samling av specialbollar som sticker ut på banan.
                Perfekt för den som vill lägga till lite personlighet i sitt spel.
              </p>
              <div className="mt-4 py-2 px-4 bg-orange-100 border border-orange-300 rounded-md inline-block">
                <p className="text-orange-800 font-semibold">Beställ för över 300 kr och få en valfri specialboll på köpet!</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-kmb-sand">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-kmb-sand p-3 rounded-full">
                    <Sparkles className="h-6 w-6 text-kmb-green" />
                  </div>
                  <h2 className="text-xl font-semibold">Limiterade utgåvor</h2>
                </div>
                <p className="text-kmb-dark/70 mb-4">
                  Vi samlar på specialutgåvor och limiterade golfbollar från kända märken. 
                  Perfekt för samlaren eller för att fira speciella tillfällen.
                </p>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <img src="/placeholder.svg" alt="Limited Edition Golf Ball" className="rounded-lg w-full aspect-square object-cover" />
                  <img src="/placeholder.svg" alt="Limited Edition Golf Ball" className="rounded-lg w-full aspect-square object-cover" />
                  <img src="/placeholder.svg" alt="Limited Edition Golf Ball" className="rounded-lg w-full aspect-square object-cover" />
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-kmb-sand">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-kmb-sand p-3 rounded-full">
                    <Award className="h-6 w-6 text-kmb-green" />
                  </div>
                  <h2 className="text-xl font-semibold">Färgade bollar</h2>
                </div>
                <p className="text-kmb-dark/70 mb-4">
                  Ett brett urval av färgglada golfbollar som är både roliga och synliga på banan.
                  Populära bland spelare som vill ha hjälp att hitta sina bollar eller bara addera lite färg.
                </p>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <img src="/placeholder.svg" alt="Colored Golf Ball" className="rounded-lg w-full aspect-square object-cover" />
                  <img src="/placeholder.svg" alt="Colored Golf Ball" className="rounded-lg w-full aspect-square object-cover" />
                  <img src="/placeholder.svg" alt="Colored Golf Ball" className="rounded-lg w-full aspect-square object-cover" />
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-kmb-sand">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-kmb-sand p-3 rounded-full">
                    <Gift className="h-6 w-6 text-kmb-green" />
                  </div>
                  <h2 className="text-xl font-semibold">Bonusbollar</h2>
                </div>
                <p className="text-kmb-dark/70 mb-4">
                  Handla för över 300 kr och få en gratis specialboll från vår samling! 
                  Varje boll är unik och kan vara allt från en sällsynt designutgåva till en rolig novelty-boll.
                </p>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <img src="/placeholder.svg" alt="Bonus Golf Ball" className="rounded-lg w-full aspect-square object-cover" />
                  <img src="/placeholder.svg" alt="Bonus Golf Ball" className="rounded-lg w-full aspect-square object-cover" />
                  <img src="/placeholder.svg" alt="Bonus Golf Ball" className="rounded-lg w-full aspect-square object-cover" />
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6 text-center">Denna månads unika bollar</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-white p-4 rounded-lg shadow-sm border border-kmb-sand">
                    <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                      <img src="/placeholder.svg" alt={`Special Golf Ball ${item}`} className="rounded-lg w-full h-full object-cover" />
                    </div>
                    <h3 className="font-medium">Specialboll #{item}</h3>
                    <p className="text-sm text-kmb-dark/70 mt-1">Limiterad utgåva</p>
                    <p className="text-kmb-green font-semibold mt-2">35 kr</p>
                  </div>
                ))}
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
