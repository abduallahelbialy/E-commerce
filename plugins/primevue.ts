import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import "primeicons/primeicons.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue);
});
