import imgOne from "../assets/images/65fded46-4fed-42c6-971c-9cf92abc2490.png";
import imgTwo from "../assets/images/7fa70f4b-9a6f-47ea-9992-048865ba4b08.png";
import imgThree from "../assets/images/492a7d45-f13f-4386-aa13-bfa7ab569128.png";
import imgFour from "../assets/images/65fded46-4fed-42c6-971c-9cf92abc2490.png";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
const MostData = {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      modules: [Navigation],
      productMost: [
        {
          id: 1,
          img: imgOne,
          text: "Vantela Public Low<br/> Black Natural",
          price: "205.000",
          rank: "4.5 / 4",
        },
        {
          id: 2,
          img: imgTwo,
          text: "Vantela New Public<br/> White low",
          price: "299.000",
          rank: "4.5 / 5",
        },
        {
          id: 3,
          img: imgThree,
          text: "Vantela Republic Low <br/>Black Natural",
          price: "300.000",
          rank: "4.5 / 4",
        },
        {
          id: 4,
          img: imgFour,
          text: "Vantela Public Low <br/>Black Natural",
          price: "205.000",
          rank: "4.5 / 4",
        },
        {
          id: 5,
          img: imgFour,
          text: "Vantela Public Low Black Natural",
          price: "205.000",
          rank: "4.5 / 4",
        },
        {
          id: 6,
          img: imgFour,
          text: "Vantela Public Low Black Natural",
          price: "205.000",
          rank: "4.5 / 4",
        },
      ],
    };
  },
};
export default MostData;
