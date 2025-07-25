
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import GoldStars from "./GoldStars";
import SignInModal from "./SignInModal";
import { useNavigate } from "react-router-dom";
import NotificationsModal from "./NotificationsModal";
import { useAuth } from "@/context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { 
  Search, 
  User, 
  Bell,
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
  const { t, i18n } = useTranslation();
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState(i18n.language || 'en');
  const [isSignInOpen, setSignInOpen] = useState(false);
  const navigate = useNavigate();
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b transition-colors">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-2 text-sm border-b border-border/50">
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">{t('header.welcome')}</span>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? t('language.arabic') : t('language.english')}
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
              <h1 className="text-3xl font-bold text-accent">Makancom</h1>
              <GoldStars size={24} />
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder={t('header.searchPlaceholder')}
                className="pl-10 pr-4 py-3 text-lg rounded-full border-2 border-primary/20 focus:border-primary"
              />
              <Button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full px-6 bg-primary hover:bg-primary/90"
              >
                {t('header.search')}
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="relative cursor-pointer"
              onClick={() => setNotificationsOpen(true)}
            >
              <Bell className="w-5 h-5" />
              <Badge className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 bg-destructive text-xs">
                3
              </Badge>
            </Button>

            <div className="flex items-center gap-2">
              {user ? (
                <>
                  <Button variant="outline" onClick={() => navigate('/account')}>
                    <User className="w-4 h-4 mr-1" /> My Account
                  </Button>
                  <Button
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => signOut(auth)}
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => setSignInOpen(true)}
                  >
                    <User className="w-4 h-4" />
                    {t('header.signIn')}
                  </Button>
                  <Button
                    className="bg-primary hover:bg-primary/90 cursor-pointer"
                    onClick={() => navigate('/login')}
                  >
                    {t('header.signUp')}
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <SignInModal open={isSignInOpen} onOpenChange={setSignInOpen} />
      <NotificationsModal open={isNotificationsOpen} onOpenChange={setNotificationsOpen} />
    </header>
  );
};

export default Header;
