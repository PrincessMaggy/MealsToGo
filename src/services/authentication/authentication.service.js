import * as firebase from "firebase/app";

export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);
