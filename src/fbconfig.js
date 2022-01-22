import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8TfHgo7ANL_f9vpwzM3veNlbtjmweAR0",
  authDomain: "mypallet-765f7.firebaseapp.com",
  databaseURL: "https://mypallet-765f7-default-rtdb.firebaseio.com",
  projectId: "mypallet-765f7",
  storageBucket: "mypallet-765f7.appspot.com",
  messagingSenderId: "358129721426",
  appId: "1:358129721426:web:cddc5bfdfb17d147b37f8b",
  measurementId: "G-1DCLBRRDDG"
};

let firebaseApp;
try {
  firebaseApp = getApp();
} catch (e) {
  firebaseApp = initializeApp(firebaseConfig);
}

const db = getFirestore(firebaseApp, {});
export { db };
