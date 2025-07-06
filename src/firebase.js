import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB1wWLIHv6zRGPN7DknInMkI4KoOJYaLg4",
  authDomain: "makancom-v2.firebaseapp.com",
  projectId: "makancom-v2",
  storageBucket: "makancom-v2.appspot.com",
  messagingSenderId: "420353145270",
  appId: "1:420353145270:web:5bad867226757302706917",
  measurementId: "G-HY5KJSJCQM"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
export default app;

