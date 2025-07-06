import { useTranslation } from "react-i18next";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface SignUpModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SignUpModal = ({ open, onOpenChange }: SignUpModalProps) => {
  const { t } = useTranslation();
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('header.signUp')}</DialogTitle>
          <DialogDescription>
            This is a placeholder sign up modal.
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

export default SignUpModal;
