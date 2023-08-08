// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC1nBBI1BDDCfojY6DxJOTtwpwQ-bEoGB0',
  authDomain: 'todoist-clone-2ab1a.firebaseapp.com',
  projectId: 'todoist-clone-2ab1a',
  storageBucket: 'todoist-clone-2ab1a.appspot.com',
  messagingSenderId: '810970926557',
  appId: '1:810970926557:web:dd157bebec92f8dd78ba34'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
