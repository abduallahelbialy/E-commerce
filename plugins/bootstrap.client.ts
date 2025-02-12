// plugins/bootstrap.client.ts
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(() => {
  // استيراد مكتبة Bootstrap
  import("bootstrap/dist/js/bootstrap.bundle.min.js");
});
