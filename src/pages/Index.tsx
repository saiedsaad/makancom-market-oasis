
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  User, 
  Bell, 
  ShoppingCart,
  Car,
  Building,
  Phone,
  Sofa,
  Bike,
  Camera,
  Gift,
  Plus
} from "lucide-react";
import Header from "@/components/Header";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import HeroSection from "@/components/HeroSection";
import SearchFilters from "@/components/SearchFilters";

const Index = () => {
  const { t } = useTranslation();
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    // TODO: Implement search functionality
  };

  const handleCategoryFilter = (category: string) => {
    if (category !== "All Categories") {
      setActiveFilters(prev => [...prev.filter(f => !f.startsWith("Category:")), `Category: ${category}`]);
    }
  };

  const handleLocationFilter = (location: string) => {
    if (location !== "All Locations") {
      setActiveFilters(prev => [...prev.filter(f => !f.startsWith("Location:")), `Location: ${location}`]);
    }
  };

  const handlePriceFilter = (minPrice: string, maxPrice: string) => {
    const priceFilter = `Price: ${minPrice || '0'} - ${maxPrice || '∞'} AED`;
    setActiveFilters(prev => [...prev.filter(f => !f.startsWith("Price:")), priceFilter]);
  };

  const clearFilters = () => {
    setActiveFilters([]);
  };

  return (
    <div className="min-h-screen bg-background pt-28 md:pt-32">
      <Header />
      <HeroSection />
      
      {/* Search Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <SearchFilters
            onSearch={handleSearch}
            onCategoryFilter={handleCategoryFilter}
            onLocationFilter={handleLocationFilter}
            onPriceFilter={handlePriceFilter}
            activeFilters={activeFilters}
            onClearFilters={clearFilters}
          />
        </div>
      </section>

      <CategoryGrid />
      <FeaturedProducts />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-2xl font-bold">Makancom</h3>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                </div>
              </div>
              <p className="text-primary-foreground/80">
                {t('footer.trust')}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{t('footer.categories')}</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>{t('categories.list.cars')}</li>
                <li>{t('categories.list.realEstate')}</li>
                <li>{t('categories.list.electronics')}</li>
                <li>{t('categories.list.furniture')}</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{t('footer.support')}</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>{t('footer.helpCenter')}</li>
                <li>{t('footer.contactUs')}</li>
                <li>{t('footer.terms')}</li>
                <li>{t('footer.privacy')}</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{t('footer.connect')}</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>{t('footer.aboutUs')}</li>
                <li>{t('footer.blog')}</li>
                <li>{t('footer.careers')}</li>
                <li>{t('footer.press')}</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 Makancom. {t('footer.rights')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
