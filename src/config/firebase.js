import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBPAeUb5LuEs3qXURKf5TIibqeUarJK1X8",
  authDomain: "olx-app-pk.firebaseapp.com",
  databaseURL: "https://olx-app-pk.firebaseio.com",
  projectId: "olx-app-pk",
  storageBucket: "olx-app-pk.appspot.com",
  messagingSenderId: "623544289707",
  appId: "1:623544289707:web:bb7e60213fc9ebf6512aee"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };