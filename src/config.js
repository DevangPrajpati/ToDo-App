import * as firebase from 'firebase';


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD6-11TAl2fnwUYuF2LIw1-RubNZRMnO6s",
  authDomain: "rntodo-firebase.firebaseapp.com",
  databaseURL: "https://rntodo-firebase.firebaseio.com",
  projectId: "rntodo-firebase",
  storageBucket: "rntodo-firebase.appspot.com",
};

firebase.initializeApp(firebaseConfig);