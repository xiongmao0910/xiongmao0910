import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const appConfig = {
    apiKey: "AIzaSyCM9Hn4D-iT51iXQ5NtmRoMUgVK6NfdtbA",
    authDomain: "portfolio-6e6c8.firebaseapp.com",
    projectId: "portfolio-6e6c8",
    storageBucket: "portfolio-6e6c8.appspot.com",
    messagingSenderId: "117893124641",
    appId: "1:117893124641:web:6da8535a44566a7ff98960",
    measurementId: "G-6V3PLL2R6Y",
};

const app = initializeApp(appConfig);

export const db = getFirestore(app);
