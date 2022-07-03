import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCLu_u2QE3kLo38KbKg9sGhzzD8j8yngMc",
    authDomain: "voting-2f5d5.firebaseapp.com",
    databaseURL: "https://voting-2f5d5-default-rtdb.firebaseio.com",
    projectId: "voting-2f5d5",
    storageBucket: "voting-2f5d5.appspot.com",
    messagingSenderId: "560673260001",
    appId: "1:560673260001:web:59f87c46339a7dc4f252a0",
    measurementId: "G-5VKCLSZLY8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();