import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.19.0/firebase-app.js';
import { 
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut 
} from 'https://www.gstatic.com/firebasejs/9.19.0/firebase-auth.js';


const firebaseConfig = {
  apiKey: "AIzaSyB542bTWrtl7pmjPEcMh3G8EzRKjDWWksU",
  authDomain: "descloudg2.firebaseapp.com",
  projectId: "descloudg2",
  storageBucket: "descloudg2.appspot.com",
  messagingSenderId: "1000104076665",
  appId: "1:1000104076665:web:bcd5b5a64e420c95f83ba8",
  measurementId: "G-RYNJ3MJMXT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export const createuser = (email, password) => {

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert('Usuario registrado' + user)
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Usuario NO registrado' + errorMessage)
    // ..
    });
}

export const login_user = (email, password) =>{
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert('Usuario autenticado' + user)
        window.location.href="../Templates/nueva.html"
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Usuario NO autenticado' + errorMessage)
    });
}

export const logout=()=>signOut(auth);

export function userstate() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          console.log(uid)
          // ...
        } else {
          // User is signed out
          // ...
          window.location.href="../indes.html"
        }
      });
}