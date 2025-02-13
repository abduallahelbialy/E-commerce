<template>
  <section class="padding-section">
    <div class="container">
      <div class="row">
        <div class="d-flex justify-content-start mb-3">
          <div class="d-flex gap-2 align-items-center">
            <nuxt-link to="/" class="start text-decoration-none">Home</nuxt-link>
            <i class="pi pi-angle-right start"></i>
            <span class="details fw-semibold">Product Detail</span>
          </div>
        </div>
        <div v-if="product">
          <div class="d-flex justify-content-between gap-3 flex-wrap align-items-center">
            <div class="flex-grow-1">
              <div class="border rounded-2">
                <div class="d-flex justify-center">
                  <img
                    :src="product.img"
                    alt="product"
                    loading="lazy"
                    class="w-75 m-auto"
                  />
                </div>
              </div>
            </div>
            <div class="flex-grow-1">
              <div class="d-flex justify-content-between">
                <div v-if="product.Disc">
                  <p class="discount-badge">{{ product.Disc }}</p>
                </div>
                <div class="d-flex gap-2">
<i
              class="pi pi-heart fs-2 cursor"
              :class="{ 'text-danger': favStore.favorites.some(item => item.id === product.id) }"
              @click="toggleFavorite(product)"
            ></i>                  <i class="pi pi-share-alt fs-2 cursor"></i>
                </div>
              </div>
              <div>
                <h2 class="text-start">{{ product.text }}</h2>
              </div>
              <div class="mb-3">
                <div class="fs-4 fw-semibold text-secondary"> Rank: {{ product.rank }}</div>
              </div>
              <div class="mb-3">
                <div class="details fs-2 fw-semibold">Rp {{ product.price }}</div>
              </div>
              <span>Select a size</span>
              <div class="d-flex gap-2 mt-2 mb-3">
                <div class="info" v-for="num in nums" :key="num.id">
                  {{ num.number }}
                </div>
              </div>
              <div class="d-flex gap-3">
                <div class="circal" @click="gochat">
                  <i class="pi pi-comments details"></i>
                </div>
                <div>
                  <button class="btnTwo w-100" @click="handleAddToCart(product)">+ Add to cart</button>
                </div>
                <div>
                  <button class="btn w-100" @click="handleBuyNow">Buy now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <p>Loading...</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import products from "../../FakeDate/products";
import Swal from 'sweetalert2';
import { ref, onMounted, computed } from 'vue'; // 
import { useCartStore } from "@/stores/cartStore";
import { useFavStore } from "@/stores/favStore";
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from "@/stores/userStore"; //     

export default {
  setup() {
    const cartStore = useCartStore();
    const favStore = useFavStore();
    const route = useRoute();
    const router = useRouter();
    const userStore = useUserStore();

    const product = ref(null);

    // 
    const isLoggedIn = computed(() => userStore.isLoggedIn);

    // "Buy Now"
    const handleBuyNow = () => {
      if (isLoggedIn.value) {
        router.push("/buy");
      } else {
        Swal.fire({
                icon: 'warning',
         title: 'You must be logged in!',
text: 'Please log in to continue your purchase.',
confirmButtonText: 'Log in',
          showCancelButton: true,
          cancelButtonText: 'Cancel',
        }).then((result) => {
          if (result.isConfirmed) {
            router.push("/SignIn");
          }
        });
      }
    };

    // handleAddToCart
    const handleAddToCart = (product) => {
      cartStore.addToCart(product);
      Swal.fire({
        icon: 'success',
      title: 'Added to cart',
text: 'The product has been successfully added to your cart!',
        timer: 3000,
        showConfirmButton: false,
      });
    };

    // toggleFavorite
    const toggleFavorite = (product) => {
      const isFavorite = favStore.favorites.some((item) => item.id === product.id);
      if (isFavorite) {
        favStore.removeFromFavorites(product.id);
        Swal.fire({
          icon: 'warning',
         title: 'Removed from favourites',
text: 'The product has been removed from favourites successfully!',
          timer: 3000,
          showConfirmButton: false,
        });
      } else {
        favStore.addToFavorites(product);
        Swal.fire({
          icon: 'success',
         title: 'Added to favourites',
text: 'The product has been added to the favourites list!',
          timer: 3000,
          showConfirmButton: false,
        });
      }
    };

    const gochat = () => {
      router.push("/chat");
    };

    onMounted(() => {
      const productId = route.params.id;
      product.value =
        products.productMost?.find((item) => item.id == productId) ||
        products.onSale?.find((item) => item.id == productId);
    });

    return {
      cartStore,
      favStore,
      product,
      handleAddToCart,
      handleBuyNow,
      isLoggedIn, 
      toggleFavorite,
      gochat,
      nums: ref([
        { id: 1, number: 25 },
        { id: 2, number: 30 },
        { id: 3, number: 35 },
        { id: 4, number: 40 },
        { id: 5, number: 45 },
      ]),
    };
  },
};
</script>


<style scoped>
.cursor {
  cursor: pointer;
}
.start {
  color: #858585;
}
.details {
  color: var(--main-color);
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
.info {
  width: 2/1rem;
  border-radius: 4px;
  border: 1px solid #858585;
  color: #858585;
  padding: 5px;
  cursor: pointer;
}
.info:hover{
  background-color: var(--main-color);
  color: white;
}
.circal {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid var(--main-color);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.circal:hover{
background-color: var(--secondary-color);
}
</style>
