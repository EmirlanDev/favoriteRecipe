import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbEV0p52c0FyJzstngDnbqOjLRWymCW6w",
  authDomain: "recipe-deb01.firebaseapp.com",
  projectId: "recipe-deb01",
  storageBucket: "recipe-deb01.appspot.com",
  messagingSenderId: "830643232618",
  appId: "1:830643232618:web:6f104085205cdaa4bc0f13",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
