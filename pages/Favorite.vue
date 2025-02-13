

<template>
  <section class="padding-section">
    <div class="container">
      <div class="row">
    <h2 class=" text-start mb-3">Favorite</h2>

    <div v-if="favStore.favorites.length > 0">
      <div v-for="(product, index) in favStore.favorites" :key="index" class="cart-item d-flex justify-content-between mt-2 flex-wrap">
        <div
                class="d-flex justify-content-between align-items-center flex-wrap"
              >
               
                <div>
                  <img :src="product.img" alt="صورة المنتج" class="cart-img" />
                </div>
              </div>
              <div class="d-flex flex-column flex-grow-1">
                <div class="d-flex gap-2 flex-wrap align-items-center">
                  <h3 class="text-start textt">{{ product.text }}</h3>
                  <div v-if="product.Disc">
                    <p class="discount-badge">{{ product.Disc }}</p>
                  </div>
                </div>
                <p class="main fw-semibold">Rp {{ product.price }}</p>
              </div>
              <div
                class="d-flex flex-column align-items-center flex-grow-1 gap-3"
              >
               
                <div class="d-flex gap-1 align-items-center flex-wrap">
                  
                  <button @click="removeItem(product.id)">
                    <i class="pi pi-trash"></i>
                  </button>
                </div>
              </div>
      </div>
    </div>

<p v-else class="text-center fs-3">The list is empty</p>
      </div>
    </div>

  </section>
</template>
<script setup>
import { useFavStore } from "~/stores/favStore";

const favStore = useFavStore();

const removeItem = (productId) => {
  favStore.removeFromFavorites(productId);
};
</script>
<style scoped ></style>
