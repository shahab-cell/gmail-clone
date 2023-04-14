import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyBYogzcHI55cuv3q-BDW6NK0ll51LZ_hXg',
  authDomain: 'clone-dcc09.firebaseapp.com',
  projectId: 'clone-dcc09',
  storageBucket: 'clone-dcc09.appspot.com',
  messagingSenderId: '570769799590',
  appId: '1:570769799590:web:0c8b173d829cc023fdf767',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
