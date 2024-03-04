import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { useSettings } from "../../store/use-settings";
import { Label } from "../ui/label";
import { ModeToggle } from "./ModeToggle";

const SettingsModal = () => {
  const settings = useSettings();
  return (
    <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium font-sans">My Settings</h2>
        </DialogHeader>
        <div
          className="
        flex items-center justify-between"
        >
          <div className="flex flex-col gap-y-1">
            <Label className="font-sans">Appearance</Label>
            <span className="text-[0.8rem] text-muted-foreground font-sans">
              Customize the appearance of the Search bar
            </span>
          </div>
        </div>
        <div
          className="
        flex items-center justify-between"
        >
          <div className="flex flex-col gap-y-1">
            <Label className="font-sans">Font</Label>
            <span className="text-[0.8rem] text-muted-foreground font-sans">
              Customize the font size and style
            </span>
            <ModeToggle />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsModal;
