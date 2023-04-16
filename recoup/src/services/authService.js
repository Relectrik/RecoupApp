import { useState, useEffect } from 'react'
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { auth } from '../firebaseConfig.js'
import { db } from '../firebaseConfig.js'
import { createUser } from './userService.js'
// import { collection, query, getDocs, addDoc, orderBy, limit } from 'firebase/firestore'
export function SignIn() {
  return <button onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}>Sign In</button>
}

export function SignOut() {
  return (
    <div>
      Hello, {auth.currentUser.displayName} &nbsp;
      <button onClick={() => signOut(auth)}>Sign Out</button>
    </div>
  )
}

export function useAuthentication() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    return auth.onAuthStateChanged(async user => {
      if (user) {
        console.log('USER FOUND: ', user)
        setUser(user)
        await createUser(user)
      } else {
        setUser(null)
      }
    })
  }, [])
  return user
}
