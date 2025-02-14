import { createI18n } from "vue-i18n";

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "en",
    fallbackLocale: "en",
    messages: {
      en: {
        welcome: "Welcome to our website",
        language: "Language",
        Home: "Home",
        Sneakers: "Sneakers",
        SlipOn: "Slip On",
        Sandals: "Sandals",
        Contact: "Contact",
        vantela: "vantela",
        PUBLIC: "PUBLIC HIGH",
        PUBLICT: "GUM NATURAL",
        Shop: "Shop Now",
        des: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing",
        SignUp: "Sign Up",
        SignIn: "Sign In",
        Search: "Search ...",
        Subscribe: "Subscribe to our newsletter ...",
      },
      ar: {
        welcome: "مرحبًا بك في موقعنا",
        language: "اللغة",
        Home: "الرئيسية",
        Sneakers: "أحذية رياضية",
        SlipOn: "سهل الارتداء",
        Sandals: "صنادل",
        Contact: "اتصل بنا",
        vantela: "فانتيلا",
        PUBLIC: "عالية الجودة",
        PUBLICT: "خامة طبيعية",
        Shop: "تسوق الآن",
        des: "تم ترويجها في الستينيات مع إصدار أوراق Letraset التي تحتوي على مقاطع من Lorem Ipsum، ومؤخرًا مع النشر المكتبي.",
        SignUp: "اشتراك",
        SignIn: "تسجيل الدخول",
        Search: "بحث ...",
      },
    },
  });

  nuxtApp.vueApp.use(i18n);
});
