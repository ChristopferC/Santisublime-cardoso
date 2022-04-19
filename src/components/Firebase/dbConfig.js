import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBl2LBjAbyBqutCdot0BWyw8ZwU2dcygZY",
  authDomain: "santisublime.firebaseapp.com",
  projectId: "santisublime",
  storageBucket: "santisublime.appspot.com",
  messagingSenderId: "513834420805",
  appId: "1:513834420805:web:2c9b32ec6cdabc896c712c"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app 
}