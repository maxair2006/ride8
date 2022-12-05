import firebase from "firebase";


//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAmuGJmaSAOycoZuNTLQo2nhKdgQdoOEFA",
    authDomain: "rideapp-305b8.firebaseapp.com",
    projectId: "rideapp-305b8",
    storageBucket: "rideapp-305b8.appspot.com",
    messagingSenderId: "209140299129",
    appId: "1:209140299129:web:d29c42061fdca2d0cd6ba8"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
