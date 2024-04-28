// Import the functions you need from the SDKs you need
import { firebase } from "firebase/app";
import { getFireStore } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChjv_1BTqcMpE7UXarrP3mvnwakjJQ2gM",
  authDomain: "mad-project-6cacf.firebaseapp.com",
  projectId: "mad-project-6cacf",
  storageBucket: "mad-project-6cacf.appspot.com",
  messagingSenderId: "379003136604",
  appId: "1:379003136604:web:ec16591878efef38f61499",
  measurementId: "G-MC38JRR95W"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = getFireStore(app);
export { db };