<template>
  <div>
    <h2>🛒 سلة المشتريات</h2>

    <div v-if="cartStore.cart.length > 0">
      <div v-for="(product, index) in cartStore.cart" :key="index" class="cart-item">
        <img :src="product.image" alt="صورة المنتج" />
        <div>
          <h3>{{ product.name }}</h3>
          <p>السعر: {{ product.price }} جنيه</p>
          <button @click="removeItem(index)">إزالة</button>
        </div>
      </div>
    </div>

    <p v-else class=" text-center fs-3">السلة فارغة</p>
  </div>
</template>

<script setup>
import { useCartStore } from "~/stores/cartStore";

const cartStore = useCartStore();

// دالة لإزالة المنتج من السلة
const removeItem = (index) => {
  cartStore.removeFromCart(index);
};
</script>

<style>
h2 {
  text-align: center;
}

.cart-item {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
}

.cart-item img {
  width: 80px;
  height: 80px;
  border-radius: 10px;
  margin-right: 10px;
}

button {
  background: red;
  color: white;
  border: none;
  padding: 7px;
  cursor: pointer;
  border-radius: 5px;
}
</style>
