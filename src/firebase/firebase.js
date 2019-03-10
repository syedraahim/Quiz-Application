import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCSynStyKGX_mwurasiANKNnb5ckYB02zA",
    authDomain: "quiz-application-3bad7.firebaseapp.com",
    databaseURL: "https://quiz-application-3bad7.firebaseio.com",
    projectId: "quiz-application-3bad7",
    storageBucket: "quiz-application-3bad7.appspot.com",
    messagingSenderId: "296984371492"
};
var fire = firebase.initializeApp(config);
export default fire;