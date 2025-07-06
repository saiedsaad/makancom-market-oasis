export interface Product {
  id: number;
  title: string;
  price: number;
  location: string;
  image: string;
  category: string;
  featured?: boolean;
  views?: number;
  likes?: number;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Luxury Villa in Dubai Marina",
    price: 2500000,
    location: "Damascus, Syria",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
    category: "realEstate",
    featured: true,
    views: 245,
    likes: 12,
  },
  {
    id: 2,
    title: "BMW X5 2023 - Perfect Condition",
    price: 180000,
    location: "Aleppo, Syria",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
    category: "cars",
    featured: true,
    views: 189,
    likes: 8,
  },
  {
    id: 3,
    title: "iPhone 15 Pro Max - Latest Model",
    price: 4500,
    location: "Homs, Syria",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
    category: "phones",
    featured: true,
    views: 156,
    likes: 15,
  },
  {
    id: 4,
    title: "Modern Office Furniture Set",
    price: 8500,
    location: "Latakia, Syria",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    category: "furniture",
    featured: true,
    views: 98,
    likes: 6,
  },
];
