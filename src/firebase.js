import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getDatabase} from "firebase/database";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyBWG_oGtCxUuiIf5vI43kSCQZQ34Lan5_M",
  authDomain: "store-7e34d.firebaseapp.com",
  projectId: "store-7e34d",
  storageBucket: "store-7e34d.appspot.com",
  messagingSenderId: "43494984028",
  appId: "1:43494984028:web:3680a7be062be0ca239999",
  databaseURL: "https://store-7e34d-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
export const storage = getStorage();
