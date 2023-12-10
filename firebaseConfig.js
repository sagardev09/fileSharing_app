// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAgZY_kpQRBZsx-YH1z5JyxNxZ4zEDHYHI",
    authDomain: "fileshare-78e34.firebaseapp.com",
    projectId: "fileshare-78e34",
    storageBucket: "fileshare-78e34.appspot.com",
    messagingSenderId: "335401107821",
    appId: "1:335401107821:web:dc3b14d0ac087ea583da64",
    measurementId: "G-6KYYKFKHN4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);