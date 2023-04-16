// This service completely hides the data store from the rest of the app.
// No other part of the app knows how the data is stored. If anyone wants
// to read or write data, they have to go through this service.

import { db } from '../firebaseConfig.js'
import {
  collection,
  query,
  getDocs,
  addDoc,
  orderBy,
  limit,
  Timestamp,
  setDoc,
} from 'firebase/firestore'

const USER_COLLECTION_NAME = 'user'

export async function createUser(obj) {
  const data = { uid: obj.uid, displayName: obj.displayName, date: Timestamp.now() }

  console.log('DATA: ', data)

  // const docRef = await addDoc(collection(db, USER_COLLECTION_NAME), data)
  // return { id: docRef.id, ...data }

  await setDoc(doc(db, USER_COLLECTION_NAME, obj.uid), data)
}

// NOT FINISHED: This only gets the first 20 articles. In a real app,
// you implement pagination.
export async function fetchArticles() {
  const snapshot = await getDocs(
    query(collection(db, USER_COLLECTION_NAME), orderBy('date', 'desc'), limit(20))
  )
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }))
}
