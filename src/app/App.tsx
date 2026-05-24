import { RouterProvider } from "react-router";
import { Toaster } from "sonner";
import { router } from "./routes";
import { CartProvider } from "./contexts/cart-context";

export default function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </CartProvider>
  );
}
