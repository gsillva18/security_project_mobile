import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAvVOb2toR6RuQOryh5W8waoQ0ExMgKs2I",
    authDomain: "securityproject-42f21.firebaseapp.com",
    projectId: "securityproject-42f21",
    storageBucket: "securityproject-42f21.firebasestorage.app",
    messagingSenderId: "419620961447",
    appId: "1:419620961447:web:daffaf84cc25471a652f82",
    measurementId: "G-JZVY0CX102"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta a instância do Auth, para que possamos autenticar os usuários do sistema
export const auth = getAuth(app);
