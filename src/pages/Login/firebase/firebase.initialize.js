// Import the functions 
import { initializeApp } from "firebase/app";

// import firebase config from another file.
import firebaseConfig from "./firebase.config";

const initializeAuthentication = ()=> {
    initializeApp(firebaseConfig)
}

export default initializeAuthentication;