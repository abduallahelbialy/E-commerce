import { defineStore } from "pinia";

export const useCartStore = defineStore("cartStore", {
  state: () => ({
    cart: [] as any[],
  }),
  getters: {
    cartCount: (state) => state.cart.length, 
  },
  actions: {
    addToCart(product: any) {
      this.cart.push(product);
    },
    removeFromCart(index: number) {
      this.cart.splice(index, 1);
    },
  },
});
