import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
  }),
  actions: {
    addToCart(product: any) {
      this.cart.push({ ...product });
    },
    removeFromCart(index: number) {
      this.cart.splice(index, 1);
    },
  },
});
