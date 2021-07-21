import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyATyQBD_nEa_M3HLswOwUUbMWi0aWrTMSU",
    authDomain: "spaceapp-f4a78.firebaseapp.com",
    projectId: "spaceapp-f4a78",
    storageBucket: "spaceapp-f4a78.appspot.com",
    messagingSenderId: "384931564595",
    appId: "1:384931564595:web:5166ad277d987599126746"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {
    firebase
}