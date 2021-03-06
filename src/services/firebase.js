/* eslint-disable no-unused-vars */
import firebase from "firebase/app"
import firestore from "firebase/firestore"
import auth from "firebase/auth"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCCecSvuuHEttUySOX2aV9zL5GCzv1LryI",
  authDomain: "twitter-clone-daa0a.firebaseapp.com",
  projectId: "twitter-clone-daa0a",
  storageBucket: "twitter-clone-daa0a.appspot.com",
  messagingSenderId: "961315323222",
  appId: "1:961315323222:web:a5c2a50c108f7995bb6af7",
})

const db = firebaseApp.firestore()
const authentication = firebase.auth()

export { db, authentication as auth }
