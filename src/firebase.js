import firebase from "firebase";

const  firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyACNMgOKk8TPt5BMz_IhYAxn7ZQI7LwAJk",
    authDomain: "instagram-clone-react-1bc58.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-1bc58.firebaseio.com",
    projectId: "instagram-clone-react-1bc58",
    storageBucket: "instagram-clone-react-1bc58.appspot.com",
    messagingSenderId: "72347473581",
    appId: "1:72347473581:web:5da48d602742a0277ad824",
    measurementId: "G-SBB7GHVK34"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage} 