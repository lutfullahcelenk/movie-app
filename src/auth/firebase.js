import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAf51lohCjQkeirgN90hvbXl0lkZFX03go",
    authDomain: "movie-app-3974d.firebaseapp.com",
    projectId: "movie-app-3974d",
    storageBucket: "movie-app-3974d.appspot.com",
    messagingSenderId: "587415340905",
    appId: "1:587415340905:web:800e92d9905180aa63dff8"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  

export const createUser = async (email, password, displayName) => {
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        // var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // ..
      });

    const currentUser = firebase.auth().currentUser;
    await currentUser.updateProfile({ displayName });
  } catch (error) {
    alert(
      "There exists an account with this email. Please login with your password or continue with Google!"
    );
  }
};


// export const signIn = (email, password) => {
//   firebase
//     .auth()
//     .signInWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       // Signed in
//       // var user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//       // var errorCode = error.code;
//       // var errorMessage = error.message;
//       alert("The password is invalid or the user does not have a password!");
//     });
// };
// export const signOut = () => {
//   firebase.auth().signOut();
// };
// export const userObserver = async (setCurrentUser) => {
//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       setCurrentUser(user);
//     } else {
//       // User is signed out
//       setCurrentUser(null);
//     }
//   });
// };
// export const signUpProvider = () => {
//   var provider = new firebase.auth.GoogleAuthProvider();
//   provider.setCustomParameters({ prompt: "select_account" });
//   firebase.auth().signInWithPopup(provider);
// };
// export const forgotPassword = (email) => {
//   firebase.auth().sendPasswordResetEmail(email);
//   alert("Please check your mail box!");
// };
export default firebaseApp;