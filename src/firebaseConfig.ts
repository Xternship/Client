import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAk-ZI0Z1dMmVSODnIAdmyckZNH3kKYbRc",
    authDomain: "xternship-auth.firebaseapp.com",
    projectId: "xternship-auth",
    storageBucket: "xternship-auth.appspot.com",
    messagingSenderId: "1067733209908",
    appId: "1:1067733209908:web:1ffe4f03c3b9b09ac98b61",
    measurementId: "G-5JL89C5FCW"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  export { auth };