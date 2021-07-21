import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const fire = firebase.initializeApp({
    apiKey: "AIzaSyD3NjoO4b6mRJZirRVMGtoRcR37oYNb4mk",
    authDomain: "mywebsite-9c65c.firebaseapp.com",
    projectId: "mywebsite-9c65c",
    storageBucket: "mywebsite-9c65c.appspot.com",
    messagingSenderId: "745549831552",
    appId: "1:745549831552:web:f832f45583407fc7ab7565"
});

export const auth = fire.auth();
export const db = fire.firestore();
export default {
  fire,
};