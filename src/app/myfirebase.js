import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDNBcBRan3LmLiiLY9IMtD37HaXKrYHsNs",
    authDomain: "cs353-ca3de.firebaseapp.com",
    databaseURL: "https://cs353-ca3de.firebaseio.com",
    projectId: "cs353-ca3de",
    storageBucket: "cs353-ca3de.appspot.com",
    messagingSenderId: "86827310912",
    appId: "1:86827310912:web:4b6cf168b0454c38ebe4a5",
    measurementId: "G-X1G9XXM2QF"
};
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()
// class Firebase {
//     constructor() {
//         app.initializeApp(firebaseConfig);
//         this.auth = app.auth();
//     }
//
//
//     doCreateUserWithEmailAndPassword = (email, password) =>
//         this.auth.createUserWithEmailAndPassword(email, password);
//
//     doSignInWithEmailAndPassword = (email, password) =>
//         this.auth.signInWithEmailAndPassword(email, password);
//
//     doSignOut = () => this.auth.signOut();
//
//     doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
//
//     doPasswordUpdate = password =>
//         this.auth.currentUser.updatePassword(password);
// }

export  {db,auth} ;
