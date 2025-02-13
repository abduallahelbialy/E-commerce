// stores/orderStore.js
import { defineStore } from "pinia";

export const useOrderStore = defineStore("order", {
  state: () => ({
    orderSummary: {
      items: [],
      subtotal: 0,
      discount: 0,
      total: 0,
    },
  }),
  actions: {
    updateOrderSummary(payload) {
      this.orderSummary = payload;
    },
  },
});
