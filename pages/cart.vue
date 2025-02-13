<template>
  <section class="padding-section">
    <div class="container">
      <div class="row">
        <h2 class="text-start">Shopping Cart</h2>
        <div class="border-bottom mb-4"></div>
        <div class="col-xl-8 col-lg-12">
          <div v-if="cartStore.cart.length > 0">
            <div
              v-for="(product, index) in cartStore.cart"
              :key="index"
              class="cart-item"
            >
              <div
                class="d-flex justify-content-between align-items-center flex-wrap"
              >
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="product.selected"
                    @change="updateTotal"
                  />
                </div>
                <div>
                  <img :src="product.img" alt="صورة المنتج" class="cart-img" />
                </div>
              </div>
              <div class="d-flex flex-column flex-grow-1">
                <div class="d-flex gap-2 flex-wrap">
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
                <div class="d-flex gap-3">
                  <button
                    @click="decreaseQuantity(index)"
                    class="munis bg-transparent"
                  >
                    -
                  </button>
                  <span class="bg-light main fs-5">{{ product.quantity }}</span>
                  <button
                    @click="increaseQuantity(index)"
                    class="plus bg-transparent"
                  >
                    +
                  </button>
                </div>
                <div class="d-flex gap-1 align-items-center flex-wrap">
                  <div class="main">Add note ...</div>
                  <div class="text-black-50">|</div>
                  <button @click="removeItem(index)">
                    <i class="pi pi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <p v-else class="text-center fs-3">Cart is empty</p>
        </div>
        <div class="col-xl-4 col-lg-12">
          <div class="Order border rounded-2 py-3 px-3">
            <h2 class="text-start">Order Summary</h2>
            <span class="main">Promo Code</span>
            <div class="box d-flex align-items-center mb-3">
              <input
                type="text"
                v-model="promoCode"
                placeholder="Enter promo code..."
              />
              <button @click="applyPromoCode">Apply</button>
            </div>
            <div class="border-bottom mb-2"></div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="main">Item : {{ totalItems }}</span>
              <span class="main">Rp {{ subtotal.toFixed(2) }}</span>
            </div>
            <div class="border-bottom mb-2"></div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="main">Subtotal</span>
              <span class="main">Rp {{ subtotal.toFixed(2) }}</span>
            </div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="main">Promo</span>
              <span class="main">- Rp {{ discount.toFixed(2) }}</span>
            </div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="main">Total :</span>
              <span class="main">Rp {{ total.toFixed(2) }}</span>
            </div>
            <div
              class="d-flex justify-content-center align-items-center mb-2 mt-2"
            >
              <button class="btn w-100 rounded-2" @click="handleBuyNow">
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useCartStore } from "@/stores/cartStore";
import Swal from "sweetalert2"; //  SweetAlert2
import { useRoute, useRouter } from "vue-router";
import { useOrderStore } from '@/stores/orderStore'; // استيراد orderStore

import { useUserStore } from "@/stores/userStore";
const cartStore = useCartStore();
const orderStore = useOrderStore();
const router = useRouter();
const userStore = useUserStore();
const route = useRoute();
const promoCode = ref("");
const isLoggedIn = computed(() => userStore.isLoggedIn);
// Functions to handle quantity changes
const increaseQuantity = (index) => {
  cartStore.cart[index].quantity++;
  updateTotal();
};

const decreaseQuantity = (index) => {
  if (cartStore.cart[index].quantity > 1) {
    cartStore.cart[index].quantity--;
    updateTotal();
  }
};

// Function to remove item from cart
const removeItem = (index) => {
  cartStore.removeFromCart(index);
  updateTotal();
};

const handleBuyNow = () => {
  if (isLoggedIn.value) {
    // orderStore
    orderStore.updateOrderSummary({
      items: cartStore.cart.filter((item) => item.selected),
      subtotal: subtotal.value,
      discount: discount.value,
      total: total.value,
    });

    router.push("/buy");
  } else {
    Swal.fire({
      icon: "warning",
      title: "You must be logged in!",
      text: "Please log in to continue your purchase.",
      confirmButtonText: "Log in",
      showCancelButton: true,
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        router.push("/SignIn");
      }
    });
  }
};
// Function to apply promo code
const applyPromoCode = () => {
  if (promoCode.value.toLowerCase() === "عبدالله") {
    discount.value = subtotal.value * 0.05;
    Swal.fire({
      icon: "success",
      title: "Coupon applied successfully",
      text: "5% discount applied to order!",
      timer: 3000,
      showConfirmButton: false,
    });
  } else {
    discount.value = 0;
    Swal.fire({
      icon: "error",
      title: "Invalid coupon",
      text: "The coupon you entered is invalid.",
      timer: 3000,
      showConfirmButton: false,
    });
  }
  updateTotal();
};

// Computed properties for total calculations
const totalItems = computed(() => {
  return cartStore.cart.reduce((total, product) => total + product.quantity, 0);
});

const subtotal = computed(() => {
  return cartStore.cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
});

const discount = ref(0);

const total = computed(() => {
  return subtotal.value - discount.value;
});

// Function to update total when items change
const updateTotal = () => {
  // This function is called whenever the cart changes
};
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.cart-img {
  width: 80px;
  height: 80px;
  object-fit: cover;
}
</style>

<style>
h2 {
  text-align: center;
}
.main {
  color: var(--main-color);
}
.cart-item {
  display: flex;
  align-items: center;
  border-bottom: 2px solid #ddd;
  margin-bottom: 10px;
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
.discount-badge {
  background-color: var(--secondary-color);
  color: black;
  font-size: 18px;
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 20px;
  width: 100px;
}
.plus,
.munis {
  width: 25px;
  height: 25px;
  border: 2px solid var(--main-color);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  color: var(--main-color);
  font-weight: bold;
}
.Order h2 {
  font-size: 16px;
}
.box {
  position: relative;
  width: 380px;
  height: 50px;
  background: #f2f2f2;
  border-radius: 4px;
  margin: auto;
  padding: 0 15px;
}

.box input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  padding-right: 30px;
}
.box button {
  background-color: var(--main-color);
}

[dir="rtl"].box button {
  position: absolute;
  right: 15px;
  color: var(--main-color);
  cursor: pointer;
}
[dir="ltr"].box button {
  position: absolute;
  right: 15px;
  color: var(--main-color);
  cursor: pointer;
}
.textt {
  font-size: 20px;
}
@media (max-width: 477px) {
  .box {
    width: 305px;
  }
  .textt {
    font-size: 15px;
  }
  .discount-badge {
    font-size: 14px;
    width: 80px;
  }
}
</style>
