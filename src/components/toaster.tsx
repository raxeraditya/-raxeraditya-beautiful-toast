import { toast } from "sonner"; // No need to import Toast directly from sonner
import { CustomToast } from "./custom-toast";

export interface ToastOptions {
  message: string;
  variant?: "default" | "success" | "error" | "info";
  duration?: number;
  onUndo?: () => void;
  icon?: React.ReactNode;
}

export function showToast({
  message,
  variant = "default",
  duration = 4000,
  onUndo,
  icon,
}: ToastOptions) {
  toast.custom(
    (
      t: any // You can type 't' as 'any' or 'unknown' if you want
    ) => (
      <CustomToast
        t={t}
        message={message}
        variant={variant}
        onUndo={onUndo}
        icon={icon}
      />
    ),
    {
      duration, // Toast duration (optional)
    }
  );
}
