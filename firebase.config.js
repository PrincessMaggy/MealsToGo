import { initializeApp } from "firebase/app";

import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCK-ORyceH3LYHZQH2Oa2tBKky223pAgyQ",
  authDomain: "test-e2904.firebaseapp.com",
  projectId: "test-e2904",
  storageBucket: "test-e2904.appspot.com",
  messagingSenderId: "501766033365",
  appId: "1:501766033365:web:5a5888c707240f03d6f75c",
  measurementId: "G-20F7XFK887",
};

 export const app = initializeApp(firebaseConfig);
 export const auth = initializeAuth(app, {
   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
 });

