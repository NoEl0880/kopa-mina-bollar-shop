
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="bg-kmb-cream border-b border-kmb-sand py-8">
        <div className="container">
          <h1 className="text-3xl font-bold">Om Köp Mina Bollar</h1>
        </div>
      </div>
      
      <main className="flex-grow bg-white py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-green max-w-none">
              <p className="text-lg font-medium text-kmb-dark">
                Köp Mina Bollar grundades 2023 med en enkel vision: att erbjuda högkvalitativa golfbollar 
                till ett rimligt pris, samtidigt som vi bidrar till en mer hållbar golfsport.
              </p>
              
              <h2>Vår historia</h2>
              <p>
                Allt började när jag själv spelade golf och insåg hur många bollar som ligger oanvända på golfbanor 
                runt om i Sverige. Jag såg en möjlighet att både göra en miljöinsats och erbjuda golfare 
                kvalitetsbollar till bättre priser än vad de nya kostar i butik.
              </p>
              <p>
                Varje boll som säljs via Köp Mina Bollar är handplockad från svenska golfbanor, noggrant
                tvättad och sorterad efter kvalitet. På så sätt får du som kund exakt vad du förväntar dig 
                när du beställer från oss.
              </p>
              
              <h2>Miljömedvetenhet</h2>
              <p>
                Golfbollar som hamnar i naturen kan ta hundratals år att brytas ned. Genom att återanvända 
                bollar bidrar vi till minskad miljöpåverkan och mindre resursförbrukning. Varje boll du köper 
                från oss är en boll som inte behöver nytillverkas.
              </p>

              <h2>Vårt graderingssystem</h2>
              <p>Vi har ett enkelt men effektivt graderingssystem:</p>
              <ul>
                <li>
                  <strong>Grad A:</strong> Nästan nya bollar med minimal användning och minimal kosmetisk slitning. 
                  Ser nästan nya ut och är perfekta för turneringar och viktiga rundor.
                </li>
                <li>
                  <strong>Grad B:</strong> Bra spelkvalitet med viss kosmetisk slitning. Perfekt för vardagsrundor 
                  och regelbunden träning.
                </li>
                <li>
                  <strong>Grad C:</strong> Spelar bra men med synlig användning. Utmärkta träningsbollar 
                  som är idealiska för övningsfältet eller högriskslag.
                </li>
              </ul>
              
              <h2>Framtidsvisioner</h2>
              <p>
                Vi planerar att fortsätta växa och förbättra vårt erbjudande. Vårt mål är att bli 
                det självklara valet för svenska golfare som söker ett mer hållbart och ekonomiskt 
                alternativ för sina golfbollar.
              </p>
              
              <div className="bg-kmb-sand/50 p-6 rounded-lg my-8 border border-kmb-sand">
                <h3 className="text-kmb-green font-semibold mb-2">Kontakta oss</h3>
                <p className="mb-0">
                  Har du frågor eller vill veta mer om våra produkter? Tveka inte att höra av dig till oss via 
                  e-post på <a href="mailto:info@kopmina.se" className="text-kmb-green underline">info@kopmina.se</a> eller 
                  ring oss på <a href="tel:+46701234567" className="text-kmb-green underline">070-123 45 67</a>.
                </p>
              </div>
            </div>
            
            <Separator className="my-12" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-kmb-green">Vår process</h3>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <span className="bg-kmb-green text-white h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Insamling</strong>
                      <p className="text-kmb-dark/80">Alla bollar samlas in manuellt från svenska golfbanor.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-kmb-green text-white h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Tvätt</strong>
                      <p className="text-kmb-dark/80">Varje boll tvättas noggrant för att återställa dess ursprungliga utseende.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-kmb-green text-white h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Sortering</strong>
                      <p className="text-kmb-dark/80">Bollarna sorteras efter märke, modell och kvalitetsgrad.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-kmb-green text-white h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Kvalitetskontroll</strong>
                      <p className="text-kmb-dark/80">Varje boll inspekteras för att säkerställa att den uppfyller våra kvalitetskrav.</p>
                    </div>
                  </li>
                </ol>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-kmb-green">Vårt miljöengagemang</h3>
                <div className="space-y-4 text-kmb-dark/80">
                  <p>
                    Genom att köpa återanvända golfbollar bidrar du till:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Minskad resursförbrukning för nytillverkning</li>
                    <li>Minskat avfall i naturen</li>
                    <li>Minskade koldioxidutsläpp från produktion och transport</li>
                    <li>En mer hållbar golfsport</li>
                  </ul>
                  <p>
                    Vi arbetar ständigt för att minimera vår miljöpåverkan i alla led av verksamheten, 
                    från insamling till förpackning och leverans.
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

export default About;
