import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js"
import { getFirestore} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js"

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
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)


