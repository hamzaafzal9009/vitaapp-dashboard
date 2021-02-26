import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBPs5Eyo9b6Gz-v0Xu2ivojwtQY6Xqx8iY",
    authDomain: "vite-application.firebaseapp.com",
    databaseURL: "https://vite-application.firebaseio.com",
    projectId: "vite-application",
    storageBucket: "gs://vite-application.appspot.com",
    messagingSenderId: "713446169049",
    appId: "1:713446169049:web:fa719d28aaf766568821c8",
    measurementId: "G-3F0DMYJ1D7"
  };
  if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
export default firebase;
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }
