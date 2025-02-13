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
    // registerUser
    registerUser(data: UserData) {
      this.userData = { ...data };
      this.isLoggedIn = true;

      // sessionStorage
      if (process.client) {
        sessionStorage.setItem("userData", JSON.stringify(data));
      }
    },

    //  loginUser
    loginUser({
      email,
      password,
    }: {
      email: string;
      password: string;
    }): boolean {
      // sessionStorage
      if (process.client) {
        const storedUserData = sessionStorage.getItem("userData");

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

    //  logout
    logout() {
      this.userData = null;
      this.isLoggedIn = false;

      // sessionStorage
      // if (process.client) {
      //   sessionStorage.removeItem("userData");
      // }
    },

    // initializeUser
    initializeUser() {
      if (process.client) {
        const storedUserData = sessionStorage.getItem("userData");

        if (storedUserData) {
          const userData = JSON.parse(storedUserData);
          this.userData = userData;
          this.isLoggedIn = true;
        }
      }
    },
  },
});
