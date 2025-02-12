<template>
    <div>
<NavBar/>
<NuxtPage/>
<Footer/>
    </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { NavBar, Footer }, 
  mounted() {
    import("bootstrap/dist/js/bootstrap.bundle.min.js").then(() => {
      console.log("Bootstrap Loaded!");
    });

  }
};
</script>


<style lang="scss" scoped>

</style>