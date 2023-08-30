import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  const firebaseConfig = {
    apiKey: "AIzaSyBfwaoC8fBOF2Bmi82VozN79J78Ca0S8w4",
    authDomain: "c36-balao.firebaseapp.com",
    databaseURL: "https://c36-balao-default-rtdb.firebaseio.com",
    projectId: "c36-balao",
    storageBucket: "c36-balao.appspot.com",
    messagingSenderId: "85316434405",
    appId: "1:85316434405:web:50bf33425cd55c885b970c"
  };
  
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
