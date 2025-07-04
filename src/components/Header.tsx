
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  User, 
  Bell, 
  ShoppingCart,
  Sun,
  Moon,
  Globe
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState('en');

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-2 text-sm border-b border-border/50">
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">Welcome to Makancom</span>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? 'العربية' : 'English'}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold text-primary">Makancom</h1>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search for anything..."
                className="pl-10 pr-4 py-3 text-lg rounded-full border-2 border-primary/20 focus:border-primary"
              />
              <Button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full px-6 bg-primary hover:bg-primary/90"
              >
                Search
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <Badge className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 bg-destructive text-xs">
                3
              </Badge>
            </Button>
            
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <Badge className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 bg-accent text-xs">
                2
              </Badge>
            </Button>

            <div className="flex items-center gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Sign In
              </Button>
              <Button className="bg-primary hover:bg-primary/90">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
