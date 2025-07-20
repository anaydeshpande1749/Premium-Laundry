import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import{getFirestore, getDoc, doc} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyAizRqyG_j2Mi7BX5ar5B-6trVfSdDbZpw",
    authDomain: "login-form-d4cb2.firebaseapp.com",
    projectId: "login-form-d4cb2",
    storageBucket: "login-form-d4cb2.appspot.com",
    messagingSenderId: "311807225742",
    appId: "1:311807225742:web:82d07438897a11bd7b7edf"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth=getAuth();
  const db=getFirestore();

  onAuthStateChanged(auth, (user)=>{
    const loggedInUserId=localStorage.getItem('loggedInUserId');
    if(loggedInUserId){
        console.log(user);
        const docRef = doc(db, "users", loggedInUserId);
        getDoc(docRef)
        .then((docSnap)=>{
            if(docSnap.exists()){
                const userData=docSnap.data();
                document.getElementById('loggedUserFName').innerText=userData.firstName;
                document.getElementById('loggedUserEmail').innerText=userData.email;
                document.getElementById('loggedUserLName').innerText=userData.lastName;

            }
            else{
                console.log("no document found matching id")
            }
        })
        .catch((error)=>{
            console.log("Error getting document");
        })
    }
    else{
        console.log("User Id not Found in Local storage")
    }
  })

  const logoutButton=document.getElementById('logout');

  logoutButton.addEventListener('click',()=>{
    localStorage.removeItem('loggedInUserId');
    signOut(auth)
    .then(()=>{
        window.location.href='index.html';
    })
    .catch((error)=>{
        console.error('Error Signing out:', error);
    })
  })

  document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".nav");
const currentPage = window.location.pathname.split("/").pop(); // Get the current page

links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active"); // Add 'active' class to the current page link
    }
});
});
