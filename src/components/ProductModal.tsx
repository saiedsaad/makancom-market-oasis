
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Heart, Share2, Eye, MapPin, Calendar, Phone, Mail } from "lucide-react";

interface Product {
  id: number;
  title: string;
  price: string;
  location: string;
  image: string;
  category: string;
  views: number;
  likes: number;
  description?: string;
  seller?: string;
  postedDate?: string;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const [isFavorited, setIsFavorited] = useState(false);

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{product.title}</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image */}
          <div className="relative">
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
            <Badge className="absolute top-3 left-3 bg-accent text-black">
              {product.category}
            </Badge>
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div>
              <p className="text-3xl font-bold text-primary mb-2">{product.price}</p>
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin className="w-4 h-4" />
                {product.location}
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {product.views} views
              </div>
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                {product.likes} likes
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Posted 2 days ago
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Description</h3>
              <p className="text-muted-foreground">
                This is a premium quality item in excellent condition. Perfect for those looking for reliability and style. 
                Contact the seller for more details and to arrange a viewing.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Seller Information</h3>
              <p className="text-muted-foreground">Ahmed Al-Rashid</p>
              <p className="text-sm text-muted-foreground">Member since 2020</p>
            </div>

            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setIsFavorited(!isFavorited)}
                className={isFavorited ? "text-red-500 border-red-500" : ""}
              >
                <Heart className="w-4 h-4" fill={isFavorited ? "currentColor" : "none"} />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="w-4 h-4" />
              </Button>
              <Button className="flex-1 bg-primary hover:bg-primary/90">
                <Phone className="w-4 h-4 mr-2" />
                Call Seller
              </Button>
              <Button variant="outline" className="flex-1">
                <Mail className="w-4 h-4 mr-2" />
                Message
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
