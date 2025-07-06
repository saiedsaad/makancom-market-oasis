
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Share2, Eye } from "lucide-react";
import ProductModal from "./ProductModal";

const featuredProducts = [
  {
    id: 1,
    title: "Luxury Villa in Dubai Marina",
    price: "SYP 2,500,000",
    location: "Damascus, Syria",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
    category: "Real Estate",
    featured: true,
    views: 245,
    likes: 12
  },
  {
    id: 2,
    title: "BMW X5 2023 - Perfect Condition",
    price: "SYP 180,000",
    location: "Aleppo, Syria",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
    category: "Cars",
    featured: true,
    views: 189,
    likes: 8
  },
  {
    id: 3,
    title: "iPhone 15 Pro Max - Latest Model",
    price: "SYP 4,500",
    location: "Homs, Syria",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
    category: "Phones",
    featured: true,
    views: 156,
    likes: 15
  },
  {
    id: 4,
    title: "Modern Office Furniture Set",
    price: "SYP 8,500",
    location: "Latakia, Syria",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    category: "Furniture",
    featured: true,
    views: 98,
    likes: 6
  }
];

const FeaturedProducts = () => {
  const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('featured.title')}</h2>
          <p className="text-muted-foreground text-lg">{t('featured.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                />
                <Badge className="absolute top-3 left-3 bg-accent text-black">
                  {product.category}
                </Badge>
                <div className="absolute top-3 right-3 flex gap-2">
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="bg-white/90 hover:bg-white"
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <Heart 
                      className="w-4 h-4" 
                      fill={favorites.includes(product.id) ? "red" : "none"}
                      color={favorites.includes(product.id) ? "red" : "currentColor"}
                    />
                  </Button>
                  <Button size="icon" variant="ghost" className="bg-white/90 hover:bg-white">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
                {product.featured && (
                  <div className="absolute bottom-3 left-3">
                    <Badge className="bg-primary text-primary-foreground">{t('featured.featuredBadge')}</Badge>
                  </div>
                )}
              </div>
              
              <CardContent className="p-4">
                <h3 
                  className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  {product.title}
                </h3>
                <p className="text-2xl font-bold text-primary mb-2">{product.price}</p>
                <p className="text-muted-foreground text-sm mb-3">{product.location}</p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {product.views}
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    {product.likes}
                  </div>
                </div>
                
                <Button
                  className="w-full mt-4 bg-primary hover:bg-primary/90"
                  onClick={() => setSelectedProduct(product)}
                >
                  {t('featured.viewDetails')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            {t('featured.viewAll')}
          </Button>
        </div>

        <ProductModal 
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      </div>
    </section>
  );
};

export default FeaturedProducts;
