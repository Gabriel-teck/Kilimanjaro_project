// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALb2EKIDmqfFDC2yO4t8-kYOgVTMQHNVM",
  authDomain: "kilimanjaro-project-24994.firebaseapp.com",
  projectId: "kilimanjaro-project-24994",
  storageBucket: "kilimanjaro-project-24994.appspot.com",
  messagingSenderId: "314913424525",
  appId: "1:314913424525:web:ed9bf2101e9eedc4f44ec4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;