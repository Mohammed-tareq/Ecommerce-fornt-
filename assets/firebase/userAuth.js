

import { app ,analytics } from "./dataconfig.js";
import { getAuth , onAuthStateChanged ,createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut , GoogleAuthProvider ,signInWithPopup
} from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();


//============================signup =========================

const registerEmail = document.getElementById("registerEmail");
const registerPassword = document.getElementById("registerPassword");
const registerBtn = document.getElementById("registerBtn");


// =====================================login ==========================

const email = document.getElementById("email");
const password = document.getElementById("password");
const logSubmit = document.getElementById("logSubmit");

const googleLog = document.getElementById("googleLog");


// =====================================loginOut ==========================

const logOutBtn = document.getElementById("logOutBtn");
//=========================== onclick event  ======================================

registerBtn.addEventListener("click",createUserSignup);
logSubmit.addEventListener("click",loginUser);
logOutBtn.addEventListener("click",logOut);
googleLog.addEventListener("click",loginWithGoogle);



//========================check user status======================================


onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("user is logged in");
        const uid = user.uid;
    } else {
        console.log("user is logged out");
    }
});



//================ createUserWithEmailAndPassword==========================

function createUserSignup(e){
    e.preventDefault();

    createUserWithEmailAndPassword(auth, registerEmail.value, registerPassword.value)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log("user => " , user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });

    registerEmail.value = "";
    registerPassword.value = "";
}


//===============================login==================================

function loginUser(e){
    e.preventDefault();
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("user => " , user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });

    email.value = "";
    password.value = "";
}

// ============================Google login===========================


function loginWithGoogle(e){
    e.preventDefault();

    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            window.location.href = "index.html";
        }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
    });

}
//===============================logOut==================================

function logOut(e){
    e.preventDefault();

    signOut(auth).then(() => {
        console.log("user logged out");
    }).catch((error) => {
        console.log(error);
    });
}

//===========================================================================