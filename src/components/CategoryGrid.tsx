
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { 
  Car,
  Building,
  Phone,
  Sofa,
  Bike,
  Camera,
  Gift,
  Search,
  Bell,
  Plus,
  User,
  Home,
  ShoppingCart
} from "lucide-react";

const categories = [
  { key: 'cars', icon: Car, count: '2,341', featured: true },
  { key: 'realEstate', icon: Building, count: '1,823', featured: true },
  { key: 'phones', icon: Phone, count: '1,245', featured: true },
  { key: 'furniture', icon: Sofa, count: '892', featured: true },
  { key: 'motorcycles', icon: Bike, count: '567', featured: false },
  { key: 'carRentals', icon: Car, count: '234', featured: false },
  { key: 'marineEquipment', icon: ShoppingCart, count: '156', featured: false },
  { key: 'spareParts', icon: Search, count: '445', featured: false },
  { key: 'heavyEquipment', icon: Building, count: '123', featured: false },
  { key: 'events', icon: Gift, count: '234', featured: false },
  { key: 'gardening', icon: Home, count: '167', featured: false },
  { key: 'business', icon: User, count: '345', featured: false },
  { key: 'menSupplies', icon: User, count: '567', featured: false },
  { key: 'womenSupplies', icon: User, count: '678', featured: false },
  { key: 'kidsSupplies', icon: Gift, count: '234', featured: false },
  { key: 'flowers', icon: Gift, count: '189', featured: false },
  { key: 'jobs', icon: Search, count: '456', featured: false },
  { key: 'electronics', icon: Phone, count: '789', featured: false },
  { key: 'homeAppliances', icon: Home, count: '345', featured: false },
  { key: 'cameras', icon: Camera, count: '123', featured: false },
];

const CategoryGrid = () => {
  const { t } = useTranslation();
  const featuredCategories = categories.filter(cat => cat.featured);
  const otherCategories = categories.filter(cat => !cat.featured);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Featured Categories */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('categories.popular')}</h2>
          <p className="text-muted-foreground text-lg">{t('categories.popularSubtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {featuredCategories.map((category, index) => (
            <Link
              to={`/categories/${category.key}`}
              key={category.key}
              className="group"
            >
              <Card className="category-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <category.icon className="category-icon mx-auto group-hover:text-accent transition-colors" />
                  <h3 className="font-semibold text-lg mb-2">{t(`categories.list.${category.key}`)}</h3>
                  <p className="text-muted-foreground">{category.count} {t('categories.items')}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* All Categories */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">{t('categories.all')}</h3>
          <p className="text-muted-foreground">{t('categories.allSubtitle')}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {otherCategories.map(category => (
            <Link
              to={`/categories/${category.key}`}
              key={category.key}
              className="group"
            >
              <Card className="category-card text-center p-4 hover:border-primary/50">
                <CardContent className="p-2">
                  <category.icon className="w-8 h-8 text-accent mx-auto mb-2 group-hover:text-accent transition-colors" />
                  <h4 className="font-medium text-sm mb-1">{t(`categories.list.${category.key}`)}</h4>
                  <p className="text-xs text-muted-foreground">{category.count}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
