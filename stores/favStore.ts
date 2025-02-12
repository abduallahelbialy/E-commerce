import { defineStore } from "pinia";

export const useFavStore = defineStore("fav", {
  state: () => ({
    favorites: [],
  }),
  actions: {
    addToFavorites(product: { id: any; }) {
      const exists = this.favorites.some((item) => item.id === product.id);
      if (!exists) {
        this.favorites.push(product);
      }
    },
    removeFromFavorites(productId) {
      this.favorites = this.favorites.filter((item) => item.id !== productId);
    },
  },
});
