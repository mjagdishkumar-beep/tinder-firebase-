import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBTls-xjV5Tx_JnUVLQTJ94-p2UTzvQ0_M",
  authDomain: "tinder-firebase-mj.firebaseapp.com",
  projectId: "tinder-firebase-mj",
  storageBucket: "tinder-firebase-mj.appspot.com",
  messagingSenderId: "881800469420",
  appId: "1:881800469420:web:ec24d2f4287e611a273809"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db