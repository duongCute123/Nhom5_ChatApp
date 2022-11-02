// database/firebaseDb.js
import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDGARW6u5a0SpboIuDlgLZ7aGR-nTanWx0",
    authDomain: "loginreactnative-e75d1.firebaseapp.com",
    projectId: "loginreactnative-e75d1",
    storageBucket: "loginreactnative-e75d1.appspot.com",
    messagingSenderId: "200542830914",
    appId: "1:200542830914:web:78bdcea0a38241ac19c8db",
    measurementId: "G-88SXVKMDHQ"
  };
firebase.initializeApp(firebaseConfig);
export default firebase;