// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCSfrWCjcJd71pmXCm-MmvaIx2tSG7CVQs",
    authDomain: "todo-app-mg-95f82.firebaseapp.com",
    projectId: "todo-app-mg-95f82",
    storageBucket: "todo-app-mg-95f82.appspot.com",
    messagingSenderId: "10958030423",
    appId: "1:10958030423:web:4ab06819d9b2fd52d38512",
    measurementId: "G-72HK7DLXKX",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;