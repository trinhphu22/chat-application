import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFNX_nLhqxEKn4ZV54l_qjh07IK7yAYbo",
  authDomain: "happychat-225ff.firebaseapp.com",
  projectId: "happychat-225ff",
  storageBucket: "happychat-225ff.appspot.com",
  messagingSenderId: "595504754313",
  appId: "1:595504754313:web:ef6cf8ba67875970696058"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);