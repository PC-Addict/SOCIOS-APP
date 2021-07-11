import firebase from "firebase";

const  firebaseConfig = {
  apiKey: "AIzaSyCT4Cr640dJxOKrJynv5H3K51XDuZPZToM",
  authDomain: "socios-app-3370e.firebaseapp.com",
  projectId: "socios-app-3370e",
  storageBucket: "socios-app-3370e.appspot.com",
  messagingSenderId: "1062127451673",
  appId: "1:1062127451673:web:5dcd4a84da0b3cebd3b488"
};
  // Initialize Firebase
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { db, auth, provider, storage };