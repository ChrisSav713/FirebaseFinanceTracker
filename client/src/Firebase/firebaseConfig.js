import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDA-exfqrqBWXCOkQw_aggOcLOlt8VsYkA',
  authDomain: 'fir-money-3e0a8.firebaseapp.com',
  projectId: 'fir-money-3e0a8',
  storageBucket: 'fir-money-3e0a8.appspot.com',
  messagingSenderId: '820532878255',
  appId: '1:820532878255:web:8b49ec9c40ab91eb7f6d5a'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
