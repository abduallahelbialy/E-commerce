<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <nuxt-link to="/" class="navbar-brand title"
        ><img src="../assets/images/vantela.png" alt="logo" class="img-fluid"
      /></nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <nuxt-link to="/" class="nav-link">{{ $t("Home") }}</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/Sneakers" class="nav-link">{{
              $t("Sneakers")
            }}</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/SlipOn" class="nav-link">{{
              $t("SlipOn")
            }}</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/Sandals" class="nav-link">{{
              $t("Sandals")
            }}</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/Other" class="nav-link">{{
              $t("Other")
            }}</nuxt-link>
          </li>
        </ul>
        <div class="d-flex align-items-center gap-3 mx-3 group-icon">
          <div>
            <button @click="toggleLocale" class="border-0 bg-transparent">
              <i class="pi pi-globe color-icon"></i>
            </button>
          </div>
          <div @click="Gochat">
            <i class="pi pi-comments color-icon"></i>
          </div>
          <div class="F-icon"  @click="goToFavorites">
            <i
              class="pi pi-heart  color-icon"
              :class="{ 'text-danger': favStore.favorites.length > 0 }"
             
            ></i>
            <span
              v-if="favStore.favorites.length > 0"
              class="cart-badgeF"
              >{{ favStore.favorites.length }}</span
            >
          </div>
          <div class="cart-icon" @click="goToCart">
            <i class="pi pi-shopping-bag"></i>

            <span v-if="cartCount > 0" class="cart-badge">
              {{ cartCount }}
            </span>
          </div>
          <div v-if="!userStore.isLoggedIn">
            <button class="btn" @click="Gocreate">{{ $t("SignUp") }}</button>
          </div>
          <div v-if="!userStore.isLoggedIn">
            <button class="btnTwo" @click="Gosignin">{{ $t("SignIn") }}</button>
          </div>

          <div v-if="userStore.isLoggedIn" class="user-profile">
            <div class="profile-dropdown" @click="tog">
              <img
                src="../assets/images/80433h2f2.png"
                alt="User Avatar"
                class="user-avatar"
              />
              <span class="username"
                >Hello, {{ userStore.userData?.username }}</span
              >
              <div class="dropdown-content" v-show="hidden">
                <button @click="logout" class="logout-button">
                  تسجيل الخروج
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref, watch } from "vue";
import { useUserStore } from "../stores/userStore";
import { useFavStore } from "~/stores/favStore";
import { useI18n } from "vue-i18n";
import { useHead } from "#imports";
import { useCartStore } from "@/stores/cartStore";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const favStore = useFavStore();
const { locale } = useI18n();
const cartStore = useCartStore();
const cartCount = computed(() => cartStore.cart.length);
const router = useRouter();
const hidden = ref(false);

watch(
  () => userStore.isLoggedIn,
  (newValue, oldValue) => {
    console.log("تغيرت حالة تسجيل الدخول:", newValue);
    if (newValue) {
      console.log("تم تسجيل الدخول بنجاح");
    } else {
      console.log("تم تسجيل الخروج");
    }
  }
);

const toggleLocale = () => {
  locale.value = locale.value === "en" ? "ar" : "en";
};

useHead({
  htmlAttrs: {
    dir: () => (locale.value === "ar" ? "rtl" : "ltr"),
    lang: () => locale.value,
  },
});

const tog = () => {
  hidden.value = !hidden.value;
};

const goToCart = () => {
  router.push("/cart");
};

const Gosignin = () => {
  router.push("/SignIn");
};

const Gocreate = () => {
  router.push("/CreateAccount");
};
const goToFavorites = () => {
  router.push("/Favorite");
};
const Gochat = () => {
  router.push("/chat");
};
const logout = () => {
  userStore.logout();
};
</script>
<style>
.navbar-nav li {
  margin: 0 12px;
}
.cart-icon {
  position: relative;
  cursor: pointer;
  font-size: 18px;
  color: var(--main-color);
}
.F-icon {
  position: relative;
  cursor: pointer;
  font-size: 18px;
  color: var(--main-color);
}

.cart-badgeF {
  position: absolute;
  top: -14px;
  right: -14px;
  background: var(--secondary-color);
  color: white;
  font-size: 14px;
  padding: 3px 3px;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  text-align: center;
}
.cart-badge {
  position: absolute;
  top: -14px;
  right: -14px;
 background: var(--secondary-color);
  color: white;
  font-size: 14px;
  padding: 3px 3px;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  text-align: center;
}

.user-profile {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}

.username {
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

.profile-dropdown {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
}

.dropdown-content {
  position: absolute;
  top: 50px;
  right: 0;
  background-color: #f9f9f9;
  min-width: 120px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 4px;
  overflow: hidden;
}

.logout-button {
  width: 100%;
  padding: 8px 16px;
  text-align: left;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: #333;
}

.logout-button:hover {
  background-color: #f1f1f1;
}
/* .pi-heart {
  position: relative;
  cursor: pointer;
  transition: color 0.3s ease;
} */

.pi-heart.text-danger {
  color: red; 
}


</style>
