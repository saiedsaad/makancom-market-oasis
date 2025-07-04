
import { Card, CardContent } from "@/components/ui/card";
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
  { name: "Cars", icon: Car, count: "2,341", featured: true },
  { name: "Real Estate", icon: Building, count: "1,823", featured: true },
  { name: "Phones", icon: Phone, count: "1,245", featured: true },
  { name: "Furniture", icon: Sofa, count: "892", featured: true },
  { name: "Motorcycles", icon: Bike, count: "567", featured: false },
  { name: "Car Rentals", icon: Car, count: "234", featured: false },
  { name: "Marine Equipment", icon: ShoppingCart, count: "156", featured: false },
  { name: "Spare Parts", icon: Search, count: "445", featured: false },
  { name: "Heavy Equipment", icon: Building, count: "123", featured: false },
  { name: "Events & Occasions", icon: Gift, count: "234", featured: false },
  { name: "Gardening & Agriculture", icon: Home, count: "167", featured: false },
  { name: "Business Services", icon: User, count: "345", featured: false },
  { name: "Men's Supplies", icon: User, count: "567", featured: false },
  { name: "Women's Supplies", icon: User, count: "678", featured: false },
  { name: "Kids' Supplies", icon: Gift, count: "234", featured: false },
  { name: "Flowers & Gifts", icon: Gift, count: "189", featured: false },
  { name: "Job Vacancies", icon: Search, count: "456", featured: false },
  { name: "Electronics", icon: Phone, count: "789", featured: false },
  { name: "Home Appliances", icon: Home, count: "345", featured: false },
  { name: "Cameras & Video", icon: Camera, count: "123", featured: false },
];

const CategoryGrid = () => {
  const featuredCategories = categories.filter(cat => cat.featured);
  const otherCategories = categories.filter(cat => !cat.featured);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Featured Categories */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Popular Categories</h2>
          <p className="text-muted-foreground text-lg">Discover what's trending in our marketplace</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {featuredCategories.map((category, index) => (
            <Card key={category.name} className="category-card group" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-6 text-center">
                <category.icon className="category-icon mx-auto group-hover:text-primary transition-colors" />
                <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                <p className="text-muted-foreground">{category.count} items</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All Categories */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">All Categories</h3>
          <p className="text-muted-foreground">Browse through our complete collection</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {otherCategories.map((category, index) => (
            <Card key={category.name} className="category-card text-center p-4 hover:border-primary/50">
              <CardContent className="p-2">
                <category.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                <h4 className="font-medium text-sm mb-1">{category.name}</h4>
                <p className="text-xs text-muted-foreground">{category.count}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
