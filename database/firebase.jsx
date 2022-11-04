import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDGARW6u5a0SpboIuDlgLZ7aGR-nTanWx0",
  authDomain: "loginreactnative-e75d1.firebaseapp.com",
  projectId: "loginreactnative-e75d1",
  storageBucket: "loginreactnative-e75d1.appspot.com",
  messagingSenderId: "200542830914",
  appId: "1:200542830914:web:78bdcea0a38241ac19c8db",
  measurementId: "G-88SXVKMDHQ"
};
if (firebase.app.length) {
  firebase.initializeApp(firebaseConfig)
}
export { firebase };
