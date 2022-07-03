import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { ref, getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDVSSS5ESoVWRR8sXp-yzQ7tbaxFew6wqQ',
  authDomain: 'gb-1992-griva.firebaseapp.com',
  projectId: 'gb-1992-griva',
  storageBucket: 'gb-1992-griva.appspot.com',
  messagingSenderId: '300385558059',
  appId: '1:300385558059:web:25b9e15dcfc6452021d46e',
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

export const signUp = async (email, password) =>
  await createUserWithEmailAndPassword(firebaseAuth, email, password);

export const logIn = async (email, password) =>
  await signInWithEmailAndPassword(firebaseAuth, email, password);

export const logOut = async () => await signOut(firebaseAuth);

const db = getDatabase(app);

export const userRef = ref(db, 'user');
export const messagesRef = ref(db, 'messages');

export const getChatById = (chatId) => ref(db, `messages/${chatId}`);
