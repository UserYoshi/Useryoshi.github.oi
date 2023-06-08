import { initializeApp } 
from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js';
import { 
          getAuth,
          signInWithEmailAndPassword, 
          createUserWithEmailAndPassword,
          GoogleAuthProvider,
          signInWithPopup 
        } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';

import { 
          getFirestore,
          collection, 
          addDoc,
          getDocs,
          doc, 
          setDoc,
          getDoc 
        } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js';

/////////////////////////////////////
const firebaseConfig = {
  apiKey: "AIzaSyBrroEaPE_h3aAw-weTVZWWIrhgJcwK0kw",
  authDomain: "finalprojetc.firebaseapp.com",
  databaseURL: "https://finalprojetc-default-rtdb.firebaseio.com",
  projectId: "finalprojetc",
  storageBucket: "finalprojetc.appspot.com",
  messagingSenderId: "523524000078",
  appId: "1:523524000078:web:c6c723b88f0224ccf6f61f"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore();
//////////////////////////////////////////////
export const loginvalidation=(email,password)=>
  signInWithEmailAndPassword(auth, email, password)

export const useregister =(email,password)=>
  createUserWithEmailAndPassword(auth, email, password)

export const servicegoogle =()=>
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

  export const addcollection=(nit,nombre,posicion,cel)=>
    addDoc(collection(db, "users"),{
      nit,
      nombre,
      posicion,
      cel
    });

export const readcollection=()=>
  getDocs(collection(db, "users"));

export const adduser=(cedula,nombre,direction,cel,imagen)=>
  setDoc(doc(db, "usuario", cedula), {
    cedula,
    nombre,
    direction,
    cel,
    imagen
  });

export const readuser=(cedula)=>
  getDoc(doc(db, "usuario", cedula));