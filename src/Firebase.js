import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyCkx31blDT7mVQAZkJQIw-Zeoo_n-Fsk80",
  authDomain: "reactfiredb-6126d.firebaseapp.com",
  databaseURL: "https://reactfiredb-6126d-default-rtdb.firebaseio.com",
  projectId: "reactfiredb-6126d",
  storageBucket: "reactfiredb-6126d.appspot.com",
  messagingSenderId: "808810664119",
  appId: "1:808810664119:web:a4e61a232bbd7b541c3d32"
};

// Initialize Firebase
const Firebase= firebase.initializeApp(firebaseConfig);
export default Firebase.database().ref()