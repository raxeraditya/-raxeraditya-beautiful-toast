import { Toaster } from "sonner";
import { showToast } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";

function App() {
  const handleSuccess = () => {
    showToast({
      message: "Successfully saved!",
      variant: "success",
      onUndo: () => console.log("Undo clicked"),
    });
  };

  const handleError = () => {
    showToast({
      message: "Something went wrong!",
      variant: "error",
    });
  };

  const handleInfo = () => {
    showToast({
      message: "New update available",
      variant: "info",
    });
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Toast Examples</h1>
        <div className="flex gap-4">
          <Button onClick={handleSuccess}>Show Success Toast</Button>
          <Button variant="destructive" onClick={handleError}>Show Error Toast</Button>
          <Button variant="secondary" onClick={handleInfo}>Show Info Toast</Button>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;