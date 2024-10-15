import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDCW2UFa9gGKikTqA7lKvbu_BhgJyOZi94",
    authDomain: "nodeflix-1859b.firebaseapp.com",
    projectId: "nodeflix-1859b",
    storageBucket: "nodeflix-1859b.appspot.com",
    messagingSenderId: "771881883463",
    appId: "1:771881883463:web:7d213cf7133eb417375e62",
    measurementId: "G-6J8JK96V0N"
  };

  firebase.initializeApp(firebaseConfig)
  const storage = firebase.storage();

  export default storage;