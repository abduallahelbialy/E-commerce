const FooterDat = {
  data() {
    return {
      Links: {
        Goup: [
          {
            id: 1,
            name: "Company",
          },
          {
            id: 2,
            name: "Help",
          },
          {
            id: 3,
            name: "Social Media",
          },
        ],
        mainLinks: [
          { id: 1, path: "/", name: "About Us" },
          { id: 2, path: "/", name: "Our store" },
          { id: 3, path: "/", name: "News" },
        ],
        TwoLinks: [
          { id: 1, path: "/", name: "FAQ" },
          { id: 2, path: "/", name: "Help" },
          { id: 3, path: "/", name: "Terms" },
        ],
        TreeLinks: [
          { id: 1, path: "/", name: "Facebook", icon: "pi pi-facebook" },
          { id: 2, path: "/", name: "Tiktok", icon: "pi pi-tiktok" },
          { id: 3, path: "/", name: "Instagram", icon: "pi pi-instagram" },
        ],
        FourLinks: [
          { id: 1, name: "Sukaasih, Kota Tangerang, Banten 15111" },
          { id: 2, name: "Phone : 01028924906", path: "tel: 01028924906" },
          {
            id: 3,
            name: "Mail :abduallahelbialy@gmail.com",
            path: "mailto:abduallahelbialy@gmail.com",
          },
        ],
      },
    };
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
export default FooterDat