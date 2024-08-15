// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfFhr-KyMGLZIBY0wemrPqkA-mLAWD3bw",
  authDomain: "store-site-d68a9.firebaseapp.com",
  projectId: "store-site-d68a9",
  storageBucket: "store-site-d68a9.appspot.com",
  messagingSenderId: "944787331193",
  appId: "1:944787331193:web:31c48a44dca0f855585ca8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth
export const auth = getAuth(app);
