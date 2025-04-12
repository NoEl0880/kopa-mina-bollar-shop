
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import AboutSection from "@/components/AboutSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProductSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
