import { app } from "../../../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";


export const loginRequest = (auth, email, password) =>
  signInWithEmailAndPassword(auth, email, password);
