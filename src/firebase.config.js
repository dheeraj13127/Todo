import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBy51gkkJTw-Nrrs4p8DP0LI6eWXQpMz4M",
  authDomain: "todo-d73b6.firebaseapp.com",
  projectId: "todo-d73b6",
  storageBucket: "todo-d73b6.appspot.com",
  messagingSenderId: "353786764897",
  appId: "1:353786764897:web:6135cab7d3a43f62d85420"
};
firebase.initializeApp(firebaseConfig)
const db=firebase.firestore()
export {db}