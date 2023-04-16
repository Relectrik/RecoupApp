// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCK4yqLnvqzu7g4VT38-G0kd12OkgoDrKo',
  authDomain: 'recoup-f5eb8.firebaseapp.com',
  projectId: 'recoup-f5eb8',
  storageBucket: 'recoup-f5eb8.appspot.com',
  messagingSenderId: '153121833482',
  appId: '1:153121833482:web:258bd80f8ac06f442b55f3',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
