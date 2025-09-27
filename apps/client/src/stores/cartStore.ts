import { CartStoreActionsType, CartStoreStateType } from '@/types'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware';

const useCartStore = create<CartStoreStateType & CartStoreActionsType>()
(
  persist((set) => ({
    cart: [],
    hasHydrated: false,
    addToCart: (product) => set((state) => {
      const existingProductIndex = state.cart.findIndex((item) => item.id === product.id && item.selectedSize === product.selectedSize && item.selectedColor === product.selectedColor);
      
      if (existingProductIndex !== -1) {
        const updatedCart = [...state.cart];

        if (updatedCart[existingProductIndex]) {
          updatedCart[existingProductIndex].quantity += product.quantity || 1;
        }
        
        return { cart: updatedCart };
      } else {
        return { cart: [...state.cart, product] };
      }
    }),
    removeFromCart: (product) => set((state) => ({ 
      cart: state.cart.filter((item) => !(
        item.id === product.id && 
        item.selectedSize === product.selectedSize && 
        item.selectedColor === product.selectedColor
      )) 
    })),
    clearCart: () =>  set({ cart: []})
  }), 
  {
    name: 'cart-storage', 
    storage: createJSONStorage(() => localStorage),
    onRehydrateStorage: () => (state) => {
      if (state) {
        state.hasHydrated = true;
      }
    }
  })
);

export default useCartStore; 