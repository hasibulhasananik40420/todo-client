// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAto8rGcsvaANmXWBFa32YkZRk1ewkVNnQ",
  authDomain: "todo-list-1ee75.firebaseapp.com",
  projectId: "todo-list-1ee75",
  storageBucket: "todo-list-1ee75.appspot.com",
  messagingSenderId: "117338151786",
  appId: "1:117338151786:web:23917c2ffb4cfab0626313"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth