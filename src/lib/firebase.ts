import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUj2zc_DuGo1IoE8AWyjZIpGP-1yXP7RI",
  authDomain: "makancom-ef0c3.firebaseapp.com",
  projectId: "makancom-ef0c3",
  storageBucket: "makancom-ef0c3.appspot.com",
  messagingSenderId: "1097514377896",
  appId: "1:1097514377896:web:3204519c9570636fa5589d",
  measurementId: "G-CZRQHGSCBZ",
};

// Initialize Firebase app only once
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
