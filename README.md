## Beautiful Toast

A beautiful, modern toast component for React applications with TailwindCSS.

### Installation

```bash
npm install @raxeraditya/beautiful-toast
```

### Usage

1. First, ensure you have TailwindCSS set up in your project and add the following to your tailwind.config.js:

```js
module.exports = {
  content: [
    // ... your content configuration
    "./node_modules/@raxeraditya/beautiful-toast/**/*.{js,ts,jsx,tsx}",
  ],
};
```

2. Import and use the toast component:

```tsx
import { showToast } from "@raxeraditya/beautiful-toast";

// Show a success toast
showToast({
  message: "Successfully saved!",
  variant: "success",
  onUndo: () => console.log("Undo clicked"),
});

// Show an error toast
showToast({
  message: "Something went wrong!",
  variant: "error",
});

// Show an info toast
showToast({
  message: "New update available",
  variant: "info",
});
```

3. Add the Toaster component to your app:

```tsx
import { Toaster } from "sonner";

function App() {
  return (
    <>
      {/* Your app content */}
      <Toaster position="bottom-right" />
    </>
  );
}
```

### API

#### showToast Options

| Property | Type                                        | Default    | Description              |
| -------- | ------------------------------------------- | ---------- | ------------------------ |
| message  | string                                      | (required) | Toast message content    |
| variant  | 'default' \| 'success' \| 'error' \| 'info' | 'default'  | Toast variant style      |
| duration | number                                      | 4000       | Duration in milliseconds |
| onUndo   | () => void                                  | undefined  | Optional undo callback   |
| icon     | React.ReactNode                             | undefined  | Optional custom icon     |

### License

MIT
