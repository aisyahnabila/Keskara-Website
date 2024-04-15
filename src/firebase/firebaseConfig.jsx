// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtOZc-IBMp8-WCsAkxuIhC6FKVAVc75Zw",
  authDomain: "keskara-aaa1d.firebaseapp.com",
  databaseURL: "https://keskara-aaa1d-default-rtdb.firebaseio.com",
  projectId: "keskara-aaa1d",
  storageBucket: "keskara-aaa1d.appspot.com",
  messagingSenderId: "317397068974",
  appId: "1:317397068974:web:07d23adbcad594d3bbd13f",
  measurementId: "G-P4ZESXDP1M"
};

export default firebaseConfig;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);