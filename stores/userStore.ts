import { defineStore } from "pinia";

interface UserData {
  fullName: string;
  username: string;
  dateOfBirth: string;
  email: string;
  password: string;
  confirmPassword: string;
  address: string;
  rtRw: string;
  kelurahan: string;
  city: string;
  kecamatan: string;
}

interface State {
  userData: UserData | null;
  isLoggedIn: boolean;
}

export const useUserStore = defineStore("user", {
  state: (): State => ({
    userData: null,
    isLoggedIn: false,
  }),

  actions: {
    // تسجيل مستخدم جديد
    registerUser(data: UserData) {
      this.userData = { ...data };
      this.isLoggedIn = true;

      // حفظ بيانات المستخدم في localStorage
      if (process.client) {
        localStorage.setItem("userData", JSON.stringify(data));
      }
    },

    // تسجيل الدخول
    loginUser({
      email,
      password,
    }: {
      email: string;
      password: string;
    }): boolean {
      // استرجاع بيانات المستخدم من localStorage
      if (process.client) {
        const storedUserData = localStorage.getItem("userData");

        if (storedUserData) {
          const userData = JSON.parse(storedUserData);

          if (userData.email === email && userData.password === password) {
            this.userData = userData;
            this.isLoggedIn = true;
            return true;
          }
        }
      }

      return false;
    },

    // تسجيل الخروج
    logout() {
      this.userData = null;
      this.isLoggedIn = false;

      // حذف بيانات المستخدم من localStorage
      if (process.client) {
        localStorage.removeItem("userData");
      }
    },

    // استعادة حالة المستخدم من localStorage
    initializeUser() {
      if (process.client) {
        const storedUserData = localStorage.getItem("userData");

        if (storedUserData) {
          const userData = JSON.parse(storedUserData);
          this.userData = userData;
          this.isLoggedIn = true;
        }
      }
    },
  },
});
