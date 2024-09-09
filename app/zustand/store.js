import { create } from "zustand";
import { persist } from "zustand/middleware";

// Create a Zustand store

export const useStore = create(
  persist(
    (set) => ({
      products: [],
      addToCart: (item) =>
        set((state) => {
          const updatingProduct = state.products.findIndex((p) => p.id === item.id);

          if (updatingProduct > -1) {
            return {
              products: state.products.map((each, index) =>
                index === updatingProduct
                  ? { ...each, quantity: each.quantity + item.quantity }
                  : each
              ),
            };
          } else {
            return {
              products: [...state.products, item],
            };
          }
        }),
      increaseQuantity: (itemId) =>
        set((state) => ({
          products: state.products.map((p) =>
            p.id === itemId ? { ...p, quantity: p.quantity + 1 } : p
          ),
        })),
      decreaseQuantity: (itemId) =>
        set((state) => ({
          products: state.products
            .map((p) =>
              p.id === itemId
                ? p.quantity > 1
                  ? { ...p, quantity: p.quantity - 1 }
                  : null
                : p
            )
            .filter(Boolean),
        })),
      removeFromCart: (productId) =>
        set((state) => ({
          products: state.products.filter((product) => product.id !== productId),
        })),
      clearCart: () => set({ products: [] }),
    }),
    { name: "cart-storage" }
  )
);
