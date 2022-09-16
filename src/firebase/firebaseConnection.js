// Import the functions you need from the SDKs you need
import firebase from "firebase/app";

import 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvRnJUmlotDDlklDj6zmXnWa-4XA7_PtI",
  authDomain: "etecct-pam.firebaseapp.com",
  databaseURL: "https://etecct-pam-default-rtdb.firebaseio.com",
  projectId: "etecct-pam",
  storageBucket: "etecct-pam.appspot.com",
  messagingSenderId: "38619412804",
  appId: "1:38619412804:web:8ab5ce5082995340e27f11",
  measurementId: "G-ZS64ZDJFM4"
};

// Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
export default firebase;