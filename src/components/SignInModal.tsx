import { useTranslation } from "react-i18next";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface SignInModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SignInModal = ({ open, onOpenChange }: SignInModalProps) => {
  const { t } = useTranslation();
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('header.signIn')}</DialogTitle>
          <DialogDescription>
            This is a placeholder sign in modal.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <Button className="w-full" onClick={() => onOpenChange(false)}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;
