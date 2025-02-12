<template>
  <section class="padding-section">
    <div class="container">
      <div class="row">
        <div class="banner">
          <div class="d-flex justify-content-between align-items-center">
            <h3>On sale</h3>
            <div class="d-flex gap-2 align-items-center">
              <i class="pi pi-arrow-circle-left fs-3 swiper-arror-prevTwo"></i>
              <i class="pi pi-arrow-circle-right fs-3 swiper-arror-nextTwo"></i>
            </div>
          </div>
        </div>
        <Swiper 
          :navigation="{
            nextEl: '.swiper-arror-nextTwo',
            prevEl: '.swiper-arror-prevTwo',
          }"
          :spaceBetween="20"
          :breakpoints="{
            0: {
              slidesPerView: 1,
            },
            477: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }"
        >
          <swiper-slide v-for="item in Onsale" :key="item.id">
            <div class="d-flex justify-content-between gap-3 mt-5 align-items-stretch">
              <div class="discount-badge"> {{ item.Disc }}</div>
              <div class="card ">
                <div class="d-flex  justify-content-between">
                  <img :src="item.img" alt="product" loading="lazy" class="img-fluid m-auto" />
                </div>
                <div class="text d-flex flex-column">
                  <h2 v-html="item.text"></h2>
                  <span>Rp {{ item.price }}</span>
                  <div class="d-flex justify-content-between align-items-center mb-3">
                    <span><i class="pi pi-star rank"></i> {{ item.rank }}</span>
                   <nuxt-link :to="`/products/${item.id}`" class="btn w-50">
                      {{ $t("Shop") }}
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script>

import 'swiper/css';
import 'swiper/css/navigation';
import OnSla from '~/mixins/OnSla';

export default {
  mixins:[OnSla],
 
};
</script>

<style scoped>
h3 {
  color: var(--main-color);
  font-weight: bold;
}
i {
  cursor: pointer;
  outline: none;
}
.card{
 width: 320px;
  min-height: 450px; 
  border: 2px solid #F4F4F4;
  border-radius: 4px;
  transition: border-color 0.3s ease;
  padding: 10px;
  margin: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
position: relative;
}
.card:hover{
  /* transform: scale(1.05); */
  border: 5px  solid #ddd;
}

.discount-badge {
  position: absolute;
  top: 53px;
  right: 10px;
  background-color: var(--secondary-color);
  color: black;
  font-size: 14px;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 4px;
  z-index: 2;
}
.rank{
  color: var(--secondary-color);
}
.text h2{
  font-size: 18px;
}
</style>