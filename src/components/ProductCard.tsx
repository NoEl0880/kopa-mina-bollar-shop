
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GolfBallModel, GolfBallGrade } from "@/lib/products";
import { useState } from "react";

interface ProductCardProps {
  product: GolfBallModel;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [selectedGrade, setSelectedGrade] = useState<GolfBallGrade>(
    product.prices.find(p => p.available)?.grade || 'A'
  );

  const currentPrice = product.prices.find(p => p.grade === selectedGrade)?.price || 0;
  
  return (
    <Card className="overflow-hidden border border-kmb-sand hover:shadow-md transition-shadow">
      <div className="aspect-square overflow-hidden bg-white flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-cover w-full h-full"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle>{product.name}</CardTitle>
        <CardDescription className="line-clamp-2">{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-4">
          {product.prices.map((price) => (
            price.available && (
              <Badge 
                key={price.grade}
                className={`cursor-pointer ${selectedGrade === price.grade ? 'grade-' + price.grade.toLowerCase() : 'bg-muted hover:bg-muted/80'}`}
                onClick={() => setSelectedGrade(price.grade)}
              >
                Grad {price.grade}
              </Badge>
            )
          ))}
        </div>
        <div className="text-2xl font-bold text-kmb-green">
          {currentPrice} kr
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-kmb-green hover:bg-kmb-light-green">
          Lägg i varukorgen
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
