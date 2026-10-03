import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem, Product } from "../types";

interface CartState {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, quantity = 1) => {
        set((state) => {
          const existingItem = state.items.find((item) => item.id === product.id);
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }
          return { items: [...state.items, { ...product, quantity }] };
        });
      },
      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        }));
      },
      updateQuantity: (productId, quantity) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
          ),
        }));
      },
      clearCart: () => set({ items: [] }),
      getCartTotal: () => {
        const { items } = get();
        return items.reduce(
          (total, item) =>
            total + item.price * (1 - item.discountPercentage / 100) * item.quantity,
          0
        );
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
