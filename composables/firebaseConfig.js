import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAziyB0P7OFgrxXxsCQLdxMNWHeWm2xtm8",
  authDomain: "e-commerc-95b5c.firebaseapp.com",
  projectId: "e-commerc-95b5c",
  storageBucket: "e-commerc-95b5c.appspot.com",
  messagingSenderId: "668711367584",
  appId: "110005790718804139361",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
