
import { useState } from "react";
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
  Furniture,
  Motorcycle,
  Camera,
  Gift,
  Plus
} from "lucide-react";
import Header from "@/components/Header";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
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
                Your trusted marketplace for everything you need
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Cars</li>
                <li>Real Estate</li>
                <li>Electronics</li>
                <li>Furniture</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>About Us</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 Makancom. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
