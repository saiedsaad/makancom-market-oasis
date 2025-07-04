
import { Button } from "@/components/ui/button";
import { Search, Plus } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Find Everything
            <span className="block text-accent">You Need</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Your trusted marketplace connecting buyers and sellers across all categories
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-black font-semibold px-8 py-4 text-lg rounded-full"
            >
              <Search className="w-5 h-5 mr-2" />
              Start Shopping
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg rounded-full"
            >
              <Plus className="w-5 h-5 mr-2" />
              Sell Your Item
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">10K+</div>
              <div className="text-white/80">Active Listings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">5K+</div>
              <div className="text-white/80">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">25+</div>
              <div className="text-white/80">Categories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
