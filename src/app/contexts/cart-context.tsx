import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const STORAGE_KEY = "shopping_cart";

type CartItem = {
  id: string;
  name: string;
  price: number;
  imageQuery: string;
  quantity: number;
};

type CartItemInput = Omit<CartItem, "quantity">;

type CartContextValue = {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  addItem: (item: CartItemInput) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  removeItem: (id: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const parseCartItems = (raw: string | null): CartItem[] => {
  if (!raw) {
    return [];
  }

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.flatMap((item) => {
      if (!isObject(item)) {
        return [];
      }

      const { id, name, price, imageQuery, quantity } = item;

      if (
        typeof id !== "string" ||
        typeof name !== "string" ||
        typeof price !== "number" ||
        typeof imageQuery !== "string"
      ) {
        return [];
      }

      const safeQuantity =
        typeof quantity === "number" && Number.isFinite(quantity)
          ? Math.max(1, Math.floor(quantity))
          : 1;

      return [
        {
          id,
          name,
          price,
          imageQuery,
          quantity: safeQuantity,
        },
      ];
    });
  } catch {
    return [];
  }
};

const getInitialItems = (): CartItem[] => {
  if (typeof window === "undefined") {
    return [];
  }

  return parseCartItems(window.localStorage.getItem(STORAGE_KEY));
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(getInitialItems);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((item: CartItemInput) => {
    setItems((prev) => {
      const existing = prev.find((cartItem) => cartItem.id === item.id);
      if (!existing) {
        return [...prev, { ...item, quantity: 1 }];
      }

      return prev.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem,
      );
    });
  }, []);

  const increment = useCallback((id: string) => {
    setItems((prev) =>
      prev.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem,
      ),
    );
  }, []);

  const decrement = useCallback((id: string) => {
    setItems((prev) =>
      prev.flatMap((cartItem) => {
        if (cartItem.id !== id) {
          return [cartItem];
        }

        if (cartItem.quantity <= 1) {
          return [];
        }

        return [{ ...cartItem, quantity: cartItem.quantity - 1 }];
      }),
    );
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((cartItem) => cartItem.id !== id));
  }, []);

  const clear = useCallback(() => {
    setItems([]);
  }, []);

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  );

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  const value = useMemo(
    () => ({
      items,
      totalItems,
      subtotal,
      addItem,
      increment,
      decrement,
      removeItem,
      clear,
    }),
    [
      items,
      totalItems,
      subtotal,
      addItem,
      increment,
      decrement,
      removeItem,
      clear,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider.");
  }

  return context;
}

export type { CartItem, CartItemInput };
