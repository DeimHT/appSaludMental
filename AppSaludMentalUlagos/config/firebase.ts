import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyALfQSvvue5Ac5Y5BcDjFMT3gH1ZY-jt3A",
    authDomain: "saludmentalulagos-8c709.firebaseapp.com",
    projectId: "saludmentalulagos-8c709",
    storageBucket: "saludmentalulagos-8c709.appspot.com",
    messagingSenderId: "124872146335",
    appId: "1:124872146335:web:4b45c837ff9ee55de511aa",
    measurementId: "G-LL092BXT1R",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Auth y Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
