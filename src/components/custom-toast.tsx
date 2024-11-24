import { toast } from "sonner"; // Only import the toast function
import { cn } from "../lib/utils";
import { X, CheckCircle2, AlertCircle, Info } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

// Define toast variants
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-lg border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full",
  {
    variants: {
      variant: {
        default: "border-border bg-background text-foreground",
        success:
          "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950",
        error: "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950",
        info: "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// Define CustomToastProps with correct types for `t`
export interface CustomToastProps extends VariantProps<typeof toastVariants> {
  t: { id: string; dismiss: () => void }; // Using a basic object shape instead of `Toast`
  message: string;
  onUndo?: () => void;
  icon?: React.ReactNode;
}

// Get the appropriate icon based on the toast variant
const getIcon = (
  variant: "default" | "success" | "error" | "info" | null | undefined
) => {
  switch (variant) {
    case "success":
      return (
        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
      );
    case "error":
      return <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />;
    case "info":
      return <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />;
    default:
      return null;
  }
};

// CustomToast component to display the toast message with an undo button
export function CustomToast({
  t,
  message,
  onUndo,
  variant,
  icon,
}: CustomToastProps) {
  return (
    <div className={cn(toastVariants({ variant }))}>
      <div className="flex items-center gap-4">
        {icon || getIcon(variant)}
        <div className="flex-1">
          <p
            className={cn(
              "text-sm font-medium leading-none",
              variant === "success" && "text-green-900 dark:text-green-200",
              variant === "error" && "text-red-900 dark:text-red-200",
              variant === "info" && "text-blue-900 dark:text-blue-200"
            )}
          >
            {message}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {onUndo && (
          <button
            onClick={() => {
              onUndo();
              t.dismiss(); // Dismiss the toast
            }}
            className={cn(
              "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-secondary/80 h-8 px-3",
              variant === "success" &&
                "text-green-900 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-900",
              variant === "error" &&
                "text-red-900 dark:text-red-200 hover:bg-red-100 dark:hover:bg-red-900",
              variant === "info" &&
                "text-blue-900 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900"
            )}
          >
            Undo
          </button>
        )}

        <button
          onClick={() => t.dismiss()} // Dismiss the toast
          className={cn(
            "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-secondary/80 h-8 w-8",
            variant === "success" &&
              "text-green-900 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-900",
            variant === "error" &&
              "text-red-900 dark:text-red-200 hover:bg-red-100 dark:hover:bg-red-900",
            variant === "info" &&
              "text-blue-900 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900"
          )}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
