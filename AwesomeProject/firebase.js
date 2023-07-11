// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBmUJoaZo0z1fN8YmhTnS1mnQH9x3ZsMM8',
  authDomain: 'market-2402b.firebaseapp.com',
  projectId: 'market-2402b',
  storageBucket: 'market-2402b.appspot.com',
  messagingSenderId: '710533264798',
  appId: '1:710533264798:web:01f6342e4c2db9fba2128f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
