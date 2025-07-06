import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useTranslation } from "react-i18next";

interface CartSidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CartSidebar = ({ open, onOpenChange }: CartSidebarProps) => {
  const { t } = useTranslation();
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-80 sm:max-w-sm">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>
        <div className="mt-4 text-sm text-muted-foreground">
          {t('header.welcome')} - Cart placeholder.
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;
