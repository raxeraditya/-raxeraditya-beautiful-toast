import { toast } from "sonner";
import { CustomToast } from "./custom-toast";

interface ToastOptions {
  message: string;
  variant?: "default" | "success" | "error" | "info";
  duration?: number;
  onUndo?: () => void;
  icon?: React.ReactNode;
}

export function showToast({ message, variant = "default", duration = 4000, onUndo, icon }: ToastOptions) {
  toast.custom((t) => (
    <CustomToast
      t={t}
      message={message}
      variant={variant}
      onUndo={onUndo}
      icon={icon}
    />
  ), {
    duration,
  });
}