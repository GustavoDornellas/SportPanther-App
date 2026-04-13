import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDdeYfBMo_gQxq3d62-YJhPiYsGNv45KOU",
    authDomain: "sportpanther-1773e.firebaseapp.com",
    databaseURL: "https://sportpanther-1773e-default-rtdb.firebaseio.com",
    projectId: "sportpanther-1773e",
    storageBucket: "sportpanther-1773e.appspot.com",
    messagingSenderId: "1034943759222",
    appId: "1:1034943759222:web:968310864c05407e173057",
    measurementId: "https://sportpanther-1773e-default-rtdb.firebaseio.com",  
};

export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);

export default auth;