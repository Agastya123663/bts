import firebase from 'firebase'
require("@firebase/firestore")


var firebaseConfig = {
    apiKey: "AIzaSyAvj7dVNQ5IDM9IqVJJe9n0FiAWOjqN85U",
    authDomain: "phub1-7f606.firebaseapp.com",
    projectId: "phub1-7f606",
    storageBucket: "phub1-7f606.appspot.com",
    messagingSenderId: "182968344816",
    appId: "1:182968344816:web:52f103513af0550a3b2235"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore()