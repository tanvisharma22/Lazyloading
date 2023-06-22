// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCppcuFkqMkaSH907v42mWsZsyYFo2RR88",
  authDomain: "lazyloading-ad466.firebaseapp.com",
  projectId: "lazyloading-ad466",
  storageBucket: "lazyloading-ad466.appspot.com",
  messagingSenderId: "381645115868",
  appId: "1:381645115868:web:4e8f506bf4a835f9c87f19",
  measurementId: "G-GFF4H64E87"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();