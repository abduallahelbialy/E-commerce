

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import Onsale from "../FakeDate/products";
const OnSla = {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      modules: [Navigation],
      Onsale: Onsale.onSale,
     
    };
  },
};
export default OnSla;
