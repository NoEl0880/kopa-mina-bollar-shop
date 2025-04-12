
import { golfBallModels } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProductSection = () => {
  // Show only the first 4 products on the home page
  const featuredProducts = golfBallModels.slice(0, 4);
  
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Våra populäraste bollar</h2>
          <p className="text-kmb-dark/70 max-w-2xl mx-auto">
            Alla våra bollar är noggrant sorterade efter kvalitet och tillstånd. 
            Välj mellan olika grader för att hitta den perfekta bollen för din spelstil.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild variant="outline" className="border-kmb-green text-kmb-green hover:bg-kmb-sand">
            <Link to="/products">Se alla golfbollar</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
