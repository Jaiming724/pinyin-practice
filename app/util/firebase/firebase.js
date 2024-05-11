// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBxu3VZNe8CG5bj2phHohPfWIlqGNmdMnE",
    authDomain: "pinyin-b7190.firebaseapp.com",
    projectId: "pinyin-b7190",
    storageBucket: "pinyin-b7190.appspot.com",
    messagingSenderId: "886431679573",
    appId: "1:886431679573:web:501fdbaf07cb16a80940dc",
    measurementId: "G-HT0XSZX8JH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
