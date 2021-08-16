import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'



const config = {
    apiKey: "AIzaSyBPlhyYTtJwZWDPgS5d8ZLBSEftRQqMzR8",
    authDomain: "royale-retail.firebaseapp.com",
    projectId: "royale-retail",
    storageBucket: "royale-retail.appspot.com",
    messagingSenderId: "120326915515",
    appId: "1:120326915515:web:c6ee2cad3fe2ca22bdf09e",
    measurementId: "G-D220YCM57M"
  }


  firebase.initializeApp(config)


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const googleProvider = new firebase.auth.GoogleAuthProvider()
  export const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider).then((res) => {
      console.log(res.user)
    }).catch((error) => {
      console.log(error.message)
    })
  }
 

  export default firebase;