import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtpsJlMZRMLeY-IDwW5PhvHN0Va4tNCvA",
  authDomain: "diamond-jaytee.firebaseapp.com",
  databaseURL: "https://diamond-jaytee.firebaseio.com",
  projectId: "diamond-jaytee",
  storageBucket: "diamond-jaytee.appspot.com",
  messagingSenderId: "362149158777",
  appId: "1:362149158777:web:dc813d862b6cb7477f19a8",
  measurementId: "G-F6Y2RJ8ME8",
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();

export default firebase;
