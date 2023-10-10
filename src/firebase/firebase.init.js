// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVtVrsjLKCer1ZmZIhM3SttX1-7jFQTQE",
  authDomain: "educational-event-managenet.firebaseapp.com",
  projectId: "educational-event-managenet",
  storageBucket: "educational-event-managenet.appspot.com",
  messagingSenderId: "1014937386728",
  appId: "1:1014937386728:web:906e8bc23dcb6263d3135d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;