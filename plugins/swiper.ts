import { defineNuxtPlugin } from "#app";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default defineNuxtPlugin(() => {
  register();
});
