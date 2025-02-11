import imgOne from "../assets/images/Frame 34.png";
import imgTwo from "../assets/images/Frame 34.png";
import imgThree from "../assets/images/Frame 34.png";
import imgFour from "../assets/images/balck.png";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
const OnSla = {
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
          Disc: "50%",
        },
        {
          id: 2,
          img: imgTwo,
          text: "Vantela New Public<br/> White low",
          price: "299.000",
          rank: "4.5 / 5",
          Disc: "60%",
        },
        {
          id: 3,
          img: imgThree,
          text: "Vantela Republic Low <br/>Black Natural",
          price: "300.000",
          rank: "4.5 / 4",
          Disc: "40%",
        },
        {
          id: 4,
          img: imgFour,
          text: "Vantela Public Low <br/>Black Natural",
          price: "205.000",
          rank: "4.5 / 4",
          Disc: "50%",
        },
        {
          id: 5,
          img: imgFour,
          text: "Vantela Public Low Black Natural",
          price: "205.000",
          rank: "4.5 / 4",
          Disc: "55%",
        },
        {
          id: 6,
          img: imgFour,
          text: "Vantela Public Low Black Natural",
          price: "205.000",
          rank: "4.5 / 4",
          Disc: "45%",
        },
      ],
    };
  },
};
export default OnSla;
