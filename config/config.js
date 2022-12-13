import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBFXMbUln4ogVkBzczyBd0DoAyR-jNFTtw",
  authDomain: "zillriddhi-ass4-ecommerce.firebaseapp.com",
  projectId: "zillriddhi-ass4-ecommerce",
  storageBucket: "zillriddhi-ass4-ecommerce.appspot.com",
  messagingSenderId: "683432502696",
  appId: "1:683432502696:web:e48deda5b506952c1ea99d",
  measurementId: "G-ZXQZ3309E1"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const auth = firebaseApp.auth();
const fs = firebaseApp.firestore();
const storage = firebase.storage();

export { auth, fs ,storage};

  
