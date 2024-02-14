import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {

  apiKey: "AIzaSyCvs_E4ecB02OskpDiGuAabLI_Dod9mYkE",

  authDomain: "policeproject-8a883.firebaseapp.com",

  projectId: "policeproject-8a883",

  storageBucket: "policeproject-8a883.appspot.com",

  messagingSenderId: "238512676695",

  appId: "1:238512676695:web:0e73d9b0e57495525be812"

};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth}