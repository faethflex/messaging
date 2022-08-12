import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDefJwkSz1ZhK8TmfB1852MGIdvzyXm_ec",
    authDomain: "messaging-api-bd2f1.firebaseapp.com",
    projectId: "messaging-api-bd2f1",
    storageBucket: "messaging-api-bd2f1.appspot.com",
    messagingSenderId: "942477271357",
    appId: "1:942477271357:web:b481e790514361cf1ce554",
    measurementId: "G-VNLS23GCKM"
};

const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider()
export const auth = getAuth(app)
export const db = getFirestore(app)