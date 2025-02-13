import { defineStore } from "pinia";

export const useFavStore = defineStore("fav", {
  state: () => ({
    favorites: [],
  }),

  actions: {
    loadFavoritesFromLocalStorage() {
      if (process.client) {
        const savedFavorites = localStorage.getItem("favorites");
        if (savedFavorites) {
          this.favorites = JSON.parse(savedFavorites);
        }
      }
    },

    saveFavoritesToLocalStorage() {
      if (process.client) {
        localStorage.setItem("favorites", JSON.stringify(this.favorites));
      }
    },

    addToFavorites(product: { id: any }) {
      const exists = this.favorites.some((item) => item.id === product.id);
      if (!exists) {
        this.favorites.push(product);
        this.saveFavoritesToLocalStorage();
      }
    },

    removeFromFavorites(productId) {
      this.favorites = this.favorites.filter((item) => item.id !== productId);
      this.saveFavoritesToLocalStorage();
    },
  },

  hydrate(state) {
    if (process.client) {
      const savedFavorites = localStorage.getItem("favorites");
      if (savedFavorites) {
        state.favorites = JSON.parse(savedFavorites);
      }
    }
  },
});
