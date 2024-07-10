import { create } from 'zustand';

// Create a Zustand store
export const useStore = create((set) => ({
    products: [],
     addToCart: (item) => 
        set((state) => {
            const updatingProduct = state.products?.findIndex((p) => p.id === item.id);    
            
            if(updatingProduct > -1){
                return {
                    products: state.products.map((each, index) => {
                        if(index !== updatingProduct){
                            return each;
                        }
                        else{
                            return {
                                ...each,
                                quantity: each.quantity + item.quantity,
                            }
                        }
                    }),
                }
            } else {
                return {
                    products: [...state.products, item]
                }
            }
        }),
    /*
    increaseQuantity: (itemId) => {
        set((state) => {
            const item = state.products.find((p) => p._id === itemId);
            if (item) {
                item.quantity++;
                // Dispatch a success toast
            }
        });
    },
    decreaseQuantity: (itemId) => {
        set((state) => {
            const item = state.products.find((p) => p._id === itemId);
            if (item && item.quantity > 1) {
                item.quantity--;
                // Dispatch a success toast
            }
        });
    },
    deleteItem: (itemId) => {
        set((state) => {
            state.products = state.products.filter((p) => p._id !== itemId);
            // Dispatch a success toast
        });
    },
    resetCart: () => {
        set((state) => {
            state.products = [];
            // Dispatch a success toast
        });
    }, */

    /* addToCart: (product) => set((state) => ({products: [...state.products, product]})), */
    removeFromCart: (productId) => set((state) => ({products: state.products.filter(product => product.id !== productId)})),
    clearCart: () => set({products: []})
}));

