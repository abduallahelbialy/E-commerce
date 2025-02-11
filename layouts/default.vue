<template>
    <div>
<NavBar/>
<NuxtPage/>
<Footer/>
    </div>
</template>

<script setup>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import { useUserStore } from "@/stores/userStore";
import { onMounted } from "vue";

// تعريف المتجر
const userStore = useUserStore();

// تحميل Bootstrap عند التحميل
onMounted(() => {
  import("bootstrap/dist/js/bootstrap.bundle.min.js").then(() => {
    console.log("Bootstrap Loaded!");
  });

  // استعادة حالة المستخدم
  userStore.initializeUser();
});
</script>


<style lang="scss" scoped>

</style>