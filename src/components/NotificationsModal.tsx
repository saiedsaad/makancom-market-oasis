import { useTranslation } from "react-i18next";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface NotificationsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NotificationsModal = ({ open, onOpenChange }: NotificationsModalProps) => {
  const { t } = useTranslation();
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Notifications</DialogTitle>
          <DialogDescription>
            This is a placeholder notifications panel.
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

export default NotificationsModal;
