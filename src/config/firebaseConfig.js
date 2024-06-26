import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// import env from '../.env'



const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_apikey,
  authDomain: import.meta.env.VITE_REACT_APP_authDomain,
  projectId: import.meta.env.VITE_REACT_APP_projectId,
  storageBucket: import.meta.env.VITE_REACT_APP_storageBucket,
  messagingSenderId: import.meta.env.VITE_REACT_APP_messagingSenderId,
  appId: import.meta.env.VITE_REACT_APP_appId
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);