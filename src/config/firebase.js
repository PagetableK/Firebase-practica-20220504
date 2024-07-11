import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxvMuKgElCUA4HohoybYBqVWujDBtBlhg",
  authDomain: "practica-firebase-202205-8eac6.firebaseapp.com",
  projectId: "practica-firebase-202205-8eac6",
  storageBucket: "practica-firebase-202205-8eac6.appspot.com",
  messagingSenderId: "1088054137442",
  appId: "1:1088054137442:web:2810ab325c88e4db84b73b"    
};

console.log("Valor de configuracion", firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (app) {
  console.log('Firebase initialized successfully');
} else {
  console.log('Firebase initialization failed');
}

const database = getFirestore(app);
if (database) {
  console.log('Firestore initialized correctly');
} else {
  console.log('Firestore initialization failed');
}

const storage = getStorage(app);

if (storage) {
  console.log('storage initialized correctly');
} else {
  console.log('storage initialization failed');
}

export { database,storage };