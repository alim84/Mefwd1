// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm_pETqjGchtegNV6jnUktXRStyl8zf8o",
  authDomain: "mefwd-5a977.firebaseapp.com",
  databaseURL: "https://mefwd-5a977-default-rtdb.firebaseio.com",
  projectId: "mefwd-5a977",
  storageBucket: "mefwd-5a977.appspot.com",
  messagingSenderId: "172766771872",
  appId: "1:172766771872:web:9346dba47717ce1b5667c5",
  measurementId: "G-5HLHDGV0X3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;