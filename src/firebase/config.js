import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzE9Imi_IZr642AgjX6WpMG45tx5onA8M",
  authDomain: "amaliyot-c015c.firebaseapp.com",
  projectId: "amaliyot-c015c",
  storageBucket: "amaliyot-c015c.firebasestorage.app",
  messagingSenderId: "448099001848",
  appId: "1:448099001848:web:68f6fe3ba07cee0f24220d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
