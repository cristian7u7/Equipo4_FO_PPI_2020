import firebase from 'firebase'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAqHgaqdp8LdfLMRPbF-GNAsdc3c5xedUM",
    authDomain: "politiqueando-ando.firebaseapp.com",
    databaseURL: "https://politiqueando-ando.firebaseio.com",
    projectId: "politiqueando-ando",
    storageBucket: "politiqueando-ando.appspot.com",
    messagingSenderId: "961134549590",
    appId: "1:961134549590:web:42522a7d211a6090b9f9f7"
  };
  // Initialize Firebase
 const fire = firebase.initializeApp(firebaseConfig);

 export default fire