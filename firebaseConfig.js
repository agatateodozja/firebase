// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import{ getDatabase} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-BVu2qC2Kzk4yKDEMl1eqxFdKT4p0HkE",
  authDomain: "zdfronpol10-todolist-09-22.firebaseapp.com",
  databaseURL: "https://zdfronpol10-todolist-09-22-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "zdfronpol10-todolist-09-22",
  storageBucket: "zdfronpol10-todolist-09-22.appspot.com",
  messagingSenderId: "919527882682",
  appId: "1:919527882682:web:283365a715eb1343e3a783",
  measurementId: "G-BN2LCWG48V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getDatabase(app);
