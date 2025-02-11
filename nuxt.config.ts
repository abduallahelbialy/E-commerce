// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "E Commerce",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "project products with api",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  // إضافة Bootstrap CSS
  css: ["bootstrap/dist/css/bootstrap.min.css", "assets/main.css"],

  // إضافة مكون إضافي لتشغيل Bootstrap JavaScript (إن كنت بحاجة له)
  plugins: [],
  modules: ["@pinia/nuxt"],
  compatibilityDate: "2025-02-08",
  devtools: { enabled: true },
});
