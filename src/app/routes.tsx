import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "category/gpu", Component: CategoryPage },
      { path: "category/cpu", Component: CategoryPage },
      { path: "category/ram", Component: CategoryPage },
      { path: "category/motherboard", Component: CategoryPage },
      { path: "category/keyboard", Component: CategoryPage },
      { path: "category/mouse", Component: CategoryPage },
      { path: "product/:id", Component: ProductDetails },
      { path: "cart", Component: Cart },
      { path: "*", Component: NotFound },
    ],
  },
]);
