import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyACcB2cbkapQBhAeYD8SriUXbwWdIts-7A",
  authDomain: "newton-photography.firebaseapp.com",
  databaseURL: "https://newton-photography.firebaseio.com",
  projectId: "newton-photography",
  storageBucket: "newton-photography.appspot.com",
  messagingSenderId: "613483285506",
  appId: "1:613483285506:web:88c6e7f50fb3e5a36deb1b",
  measurementId: "G-0ZE0HE24L2",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();
const projectAuth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, storage, projectAuth, timestamp };
