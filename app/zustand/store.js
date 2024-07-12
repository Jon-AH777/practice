import { create } from "zustand";

// Create a Zustand store
export const useStore = create((set) => ({
  products: [],
  addToCart: (item) =>
    set((state) => {
      const updatingProduct = state.products?.findIndex(
        (p) => p.id === item.id
      );

      if (updatingProduct > -1) {
        return {
          products: state.products.map((each, index) => {
            if (index !== updatingProduct) {
              return each;
            } else {
              return {
                ...each,
                quantity: each.quantity + item.quantity,
              };
            }
          }),
        };
      } else {
        return {
          products: [...state.products, item],
        };
      }
    }),
  increaseQuantity: (itemId) => {
    set((state) => {
      const updatedProducts = state.products.map((p) => {
        if (p.id === itemId) {
          return { ...p, quantity: p.quantity + 1 };
        }
        return p;
      });
      return { products: updatedProducts };
    });
  },
  decreaseQuantity: (itemId) => {
    set((state) => {
      const updatedProducts = state.products.map((p) => {
        if (p.id === itemId && p.quantity > 1) {
          return { ...p, quantity: p.quantity - 1 };
        }
        return p;
      });
      return { products: updatedProducts };
    });
  },

  removeFromCart: (productId) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== productId),
    })),
  clearCart: () => set({ products: [] }),
}));
