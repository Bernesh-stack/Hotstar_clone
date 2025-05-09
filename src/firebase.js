import firebase from "firebase/compat/app";
import "firebase/compat/auth"; // Import for auth
import "firebase/compat/firestore"; // Import for Firestore
import "firebase/compat/storage"; // Import for storage

const firebaseConfig = {
  apiKey: "AIzaSyARpm_eNFZu9a3Cgx4HcHuWVzWQHheAVpM",
  authDomain: "hot-videos-6f14d.firebaseapp.com",
  projectId: "hot-videos-6f14d",
  storageBucket: "hot-videos-6f14d.appspot.com",
  messagingSenderId: "53141303110",
  appId: "1:53141303110:web:bf3617dadd164a95883f47",
  measurementId: "G-YMZV6R0FWG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;