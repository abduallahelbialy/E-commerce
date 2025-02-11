<template>
  <header class="padding-section">
    <div class="container-fluid">
      <div class="row">
        <div class="d-flex justify-content-center align-items-center">
          <div class="search-box d-flex align-items-center">
            <input type="text" :placeholder="$t('Search')" />
            <i class="pi pi-search color-icon"></i>
          </div>
        </div>
        <div class="bg-light mt-3 hero">
          <div class="container">
            <div class="row">
              <div class="d-flex align-items-center">
                <div class="col-lg-6">
                  <div class="text">
                    <h1 class="title">{{ $t("vantela") }}</h1>
                    <h2><strong>{{ $t("PUBLICT") }}</strong> {{ $t("PUBLIC") }}</h2>
                    <p>
                     {{ $t("des") }}
                    </p>
                  </div>
                  <div>
                    <button class="btn w-25">{{ $t("Shop") }}</button>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="shoce-phone">
                    <img :src="img" alt="shocs" loading="lazy" class="img-fluid" />
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <MostPopular/>
        <BannerPage/>
      </div>
    </div>
  </header>
</template>

<script>
import img from "../assets/images/0d8543ab-7748-4f41-9396-33a93bde4418-removebg-preview_waifu2x_photo_noise1_scale 1.png";
export default {
  data() {
    return {
      img: img,
    };
  },
};
</script>

<style scoped>
.hero {
  padding: 20px 0;
}
.text h2 {
  color: var(--secondary-color);
}
.text p {
  font-size: 12px;
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
@media (max-width:477px) {
    .shoce-phone{
        display: none;
    }
    .btn {
width: 120px !important;
    }
}
@media (max-width:799px) {
   
    .btn {
width: 120px !important;
    }
}
@media (max-width:992px) {
   
    .btn {
width: 120px !important;
    }
}
</style>
