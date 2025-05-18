import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
    apiKey: "AIzaSyBz9T0Ui3Ek-Gjc4Mfr4hz_P9w30-hc4gU",
    authDomain: "ecommerc-3555b.firebaseapp.com",
    projectId: "ecommerc-3555b",
    storageBucket: "ecommerc-3555b.firebasestorage.app",
    messagingSenderId: "976350544430",
    appId: "1:976350544430:web:7956ecb91116550e5495bf",
    measurementId: "G-VZPVFM4BM6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export {app, analytics};