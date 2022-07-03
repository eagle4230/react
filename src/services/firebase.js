import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDVSSS5ESoVWRR8sXp-yzQ7tbaxFew6wqQ',
  authDomain: 'gb-1992-griva.firebaseapp.com',
  projectId: 'gb-1992-griva',
  storageBucket: 'gb-1992-griva.appspot.com',
  messagingSenderId: '300385558059',
  appId: '1:300385558059:web:25b9e15dcfc6452021d46e',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
