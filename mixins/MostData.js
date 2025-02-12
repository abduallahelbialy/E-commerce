

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import products from "../FakeDate/products"
const MostData = {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      modules: [Navigation],
      products: products.productMost
    };
  },
};
export default MostData;
