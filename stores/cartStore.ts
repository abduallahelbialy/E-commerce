import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
  }),

  actions: {
    // sessionStorage
    loadCartFromSessionStorage() {
      if (process.client) {
        const savedCart = sessionStorage.getItem("cart");
        if (savedCart) {
          this.cart = JSON.parse(savedCart);
        }
      }
    },

    // sessionStorage
    saveCartToSessionStorage() {
      if (process.client) {
        sessionStorage.setItem("cart", JSON.stringify(this.cart));
      }
    },

    // addToCart
    addToCart(product) {
      // quantity
      const productWithQuantity = { ...product, quantity: 1 };
      this.cart.push(productWithQuantity);
      this.saveCartToSessionStorage(); // save after eid is updated
    },

    //  removeFromCart
    removeFromCart(index) {
      this.cart.splice(index, 1);
      this.saveCartToSessionStorage(); // save after eid is updated
    },

    //increaseQuantity
    increaseQuantity(index) {
      if (this.cart[index]) {
        this.cart[index].quantity++;
        this.saveCartToSessionStorage(); // save after eid is updated
      }
    },

    // decreaseQuantity
    decreaseQuantity(index) {
      if (this.cart[index] && this.cart[index].quantity > 1) {
        this.cart[index].quantity--;
        this.saveCartToSessionStorage(); // save after eid is updated
      }
    },
  },

  //   store    sessionStorage
  hydrate(state) {
    if (process.client) {
      const savedCart = sessionStorage.getItem("cart");
      if (savedCart) {
        state.cart = JSON.parse(savedCart);
      }
    }
  },
});
