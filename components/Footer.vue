<template>
  <footer>
    <div class="container">
      <div class="row py-5 px-0">
        <div
          class="d-flex justify-content-between align-items-center mb-5 flex-wrap gap-3"
        >
          <div>
            <img src="../assets/images/vantelaWhite.png" alt="" />
          </div>
          <div class="search-box d-flex align-items-center">
            <input type="text" :placeholder="$t('Subscribe')" />
            <i class="pi pi-arrow-right color-icon"></i>
          </div>
        </div>
        <div
          class="col-lg-3 col-md-6 mb-3"
          v-for="link in Links.Goup"
          :key="link.id"
        >
          <div class="text-white fw-medium fs-3 title-link">
            {{ link.name }}
          </div>
          <div class="d-flex flex-column align-items-start group-link">
            <div
              v-for="link in Links.mainLinks"
              :key="link.id"
              class="mt-3 color-white"
            >
              <nuxt-link :to="link.path">{{ link.name }}</nuxt-link>
            </div>
          </div>
        </div>
       
       
        <div class="col-lg-3 col-md-6">
          <div class="text-white fw-medium fs-3 title-link">Contact</div>
          <div class="d-flex flex-column align-items-start group-link">
            <div
              v-for="link in Links.FourLinks"
              :key="link.id"
              class="mt-3 color-white"
            >
              <a :href="link.path" class="color-white text-decoration-none">{{
                link.name
              }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
         <div class="container-fluid">
      <div class="row">
        <div class="Cap padding-section mt-3 text-center">
         <span class="text-white text-center">
    Copyright {{ currentYear }}. All Right Abduallah El Bialy
  </span>
        </div>
      </div>
    </div>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterDat from '~/mixins/FooterDat';

export default {
mixins:[FooterDat]
};
</script>

<style scoped>
footer {
  background-color: #1f3e97;
  background-size: cover;
  
}
.Cap {
  background-color: #18378f;
}
.search-box {
  position: relative;
  width: 400px;
  height: 45px;
  background: #f2f2f2;
  border-radius: 20px;

  padding: 0 15px;
}

.search-box input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  padding-right: 30px;
}

[dir="rtl"].search-box i {
  position: absolute;
  right: 15px;
  color: var(--main-color);
  cursor: pointer;
}
[dir="ltr"].search-box i {
  position: absolute;
  right: 15px;
  color: var(--main-color);
  cursor: pointer;
}

.color-white a {
  color: #ffff;
  font-family: normal;
}
</style>
