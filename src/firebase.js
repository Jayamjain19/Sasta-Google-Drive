// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAgofJHC4PiXQBk5YR61WyIUOUE9I8g8xI",
  authDomain: "drive-9a161.firebaseapp.com",
  projectId: "drive-9a161",
  storageBucket: "drive-9a161.appspot.com",
  messagingSenderId: "499469868538",
  appId: "1:499469868538:web:a9a9c0b263ee0f87d65843",
  measurementId: "G-ML4K5Q00WC"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider };
export default firebase;
