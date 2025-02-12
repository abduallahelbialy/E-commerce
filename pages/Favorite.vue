

<template>
  <div>
    <h2>❤️ قائمة المفضلة</h2>

    <div v-if="favStore.favorites.length > 0">
      <div v-for="(product, index) in favStore.favorites" :key="index" class="cart-item">
        <img :src="product.img" alt="صورة المنتج" />
        <div>
          <h3>{{ product.text }}</h3>
          <p>السعر: {{ product.price }} جنيه</p>
          <button @click="removeItem(product.id)">إزالة من المفضلة</button>
        </div>
      </div>
    </div>

    <p v-else class="text-center fs-3">القائمة فارغة</p>
  </div>
</template>
<script setup>
import { useFavStore } from "~/stores/favStore";

const favStore = useFavStore();

// دالة لإزالة المنتج من المفضلة
const removeItem = (productId) => {
  favStore.removeFromFavorites(productId);
};
</script>
