// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI3fGUGnC384vp3dG30a66GlGIKlfJz2M",
  authDomain: "tpfinal-1d39e.firebaseapp.com",
  projectId: "tpfinal-1d39e",
  storageBucket: "tpfinal-1d39e.appspot.com",
  messagingSenderId: "417584544594",
  appId: "1:417584544594:web:667598aacd6fd87978d88b",
  measurementId: "G-X2Z118Z2CH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
