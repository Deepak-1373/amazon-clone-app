import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOeJSda2XrBH_gI5PC6fwqkAOrIjyZqvc",
  authDomain: "clone-app-ea228.firebaseapp.com",
  databaseURL: "https://clone-app-ea228.firebaseio.com",
  projectId: "clone-app-ea228",
  storageBucket: "clone-app-ea228.appspot.com",
  messagingSenderId: "754263898836",
  appId: "1:754263898836:web:72442c42876390d7425941",
  measurementId: "G-HZK4HSQYEJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };