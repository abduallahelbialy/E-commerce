<template>
  <section class="padding-section">
    <div class="container">
      <div class="row">
        <div class="d-flex justify-content-center align-items-center">
          <div class="search-box d-flex align-items-center">
            <input
              type="text"
              :placeholder="$t('Search')"
              v-model="searchQuery"
              @input="searchProducts"
            />
            <i class="pi pi-search color-icon"></i>
          </div>
        </div>
        <div class="banner mt-4">
          <div class="d-flex justify-content-center align-items-center">
            <h3 class="text-center main fw-semibold">Kid’s sandals</h3>
          </div>
        </div>
        <div
          class="d-flex justify-content-between gap-2 mt-5 align-items-stretch flex-wrap"
        >
          <div class="m-auto" v-for="item in displayedSandals" :key="item.id">
            <div class="card mb-2 position-relative">
              <div v-if="item.Disc" class="discount-badge">{{ item.Disc }}</div>
              <div class="d-flex justify-content-between">
                <img
                  :src="item.img"
                  alt="product"
                  loading="lazy"
                  class="img-fluid m-auto"
                />
              </div>
              <div class="text d-flex flex-column">
                <h2 class="text-start">{{ item.text }}</h2>
                <span>Rp {{ item.price }}</span>
                <div
                  class="d-flex justify-content-between align-items-center mb-3"
                >
                  <span><i class="pi pi-star rank"></i> {{ item.rank }}</span>
                  <nuxt-link :to="`/products/${item.id}`" class="btn w-50">
                    {{ $t("Shop") }}
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center mt-3">
          <button class="btn w-auto" @click="loadMore">See More</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Kids from "../FakeDate/products";

export default {
  data() {
    return {
      Kids: Kids.Kids,
      displayedSandals: [],
      visibleItems: 4,
      searchQuery: "",
    };
  },
  mounted() {
    this.shuffleSandals();
    this.updateDisplayedSandals();
  },
  methods: {
    shuffleSandals() {
      this.Kids = this.Kids.sort(() => Math.random() - 0.5);
    },
    updateDisplayedSandals() {
      this.displayedSandals = this.Kids.slice(0, this.visibleItems);
    },
    loadMore() {
      this.visibleItems += 4;
      this.shuffleSandals();
      this.updateDisplayedSandals();
    },
    searchProducts() {
      if (this.searchQuery.trim() === "") {
        this.updateDisplayedSandals();
      } else {
        const query = this.searchQuery.toLowerCase();
        this.displayedSandals = this.Kids.filter((item) => {
          return (
            item.text.toLowerCase().includes(query) ||
            item.price.toString().includes(query)
          );
        }).slice(0, this.visibleItems);
      }
    },
  },
};
</script>

<style scoped>
.main {
  color: var(--main-color);
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
@media (max-width: 477px) {
  .btn {
    width: 120px !important;
  }
}
@media (max-width: 799px) {
  .btn {
    width: 120px !important;
  }
}
@media (max-width: 992px) {
  .btn {
    width: 120px !important;
  }
}
i {
  cursor: pointer;
  outline: none;
}
.card {
  width: 260px;
  min-height: 420px;
  border: 2px solid #f4f4f4;
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
.card:hover {
  /* transform: scale(1.05); */
  border: 5px solid #ddd;
}

.discount-badge {
  position: absolute;
  top: 7px;
  right: 10px;
  background-color: var(--secondary-color);
  color: black;
  font-size: 14px;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 4px;
  z-index: 2;
}
.rank {
  color: var(--secondary-color);
}
.text h2 {
  font-size: 18px;
}
</style>
