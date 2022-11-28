import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAWXA218SDFgDKpDzX3QpqaKfEjmJTimIo",
  authDomain: "nuxt3-pinia-products-cart.firebaseapp.com",
  projectId: "nuxt3-pinia-products-cart",
  storageBucket: "nuxt3-pinia-products-cart.appspot.com",
  messagingSenderId: "797084818377",
  appId: "1:797084818377:web:af5086b454a21cea596618"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export {
  db,
  auth,
  storage
}