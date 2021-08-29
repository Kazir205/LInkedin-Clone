import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCxHSkhfYtICMyOSMK9SVK9hwYRFXQX4cI",
    authDomain: "linkedin-fb51d.firebaseapp.com",
    projectId: "linkedin-fb51d",
    storageBucket: "linkedin-fb51d.appspot.com",
    messagingSenderId: "479384773052",
    appId: "1:479384773052:web:594b3f256a5e0cb5cd8bb9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); //initializing or coonecting project to firebase
  const db = firebaseApp.firestore(); //connecting firebase database
  const auth = firebase.auth(); //firebase authentication

  export { db, auth };