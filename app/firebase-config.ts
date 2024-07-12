// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtyM3CQkb34E4iUd1yK6dgWM9zZYuHV5E",
  authDomain: "linguoboost-15031.firebaseapp.com",
  projectId: "linguoboost-15031",
  storageBucket: "linguoboost-15031.appspot.com",
  messagingSenderId: "140752650934",
  appId: "1:140752650934:web:054088394b813ad7215c17",
  measurementId: "G-2BY891QYME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);