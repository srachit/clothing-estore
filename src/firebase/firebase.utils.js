import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyA0kQ5ubMUrGC4UiB4W4Vg07bJ_UIa7Pq0",
    authDomain: "estore-db-82e89.firebaseapp.com",
    projectId: "estore-db-82e89",
    storageBucket: "estore-db-82e89.appspot.com",
    messagingSenderId: "880620392836",
    appId: "1:880620392836:web:a7fb041067c3cdb8868dd1",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
