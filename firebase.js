import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyClJc0g6cZHLz5HlK2jzWZLpgNjmR6IvJg",
  authDomain: "facebook2-316b3.firebaseapp.com",
  projectId: "facebook2-316b3",
  storageBucket: "facebook2-316b3.appspot.com",
  messagingSenderId: "254695854465",
  appId: "1:254695854465:web:b2ee53ef849c5c7ead1880"
};




// const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

const storage = getStorage(app)
export {db , storage}