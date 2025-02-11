import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("flatpickr", flatpickr);
});
