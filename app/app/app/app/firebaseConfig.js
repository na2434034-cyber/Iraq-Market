import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "YOUR-API",
  authDomain: "YOUR-APP.firebaseapp.com",
  projectId: "YOUR-ID",
  storageBucket: "YOUR.appspot.com",
  messagingSenderId: "ID",
  appId: "APP-ID"
};

const app = initializeApp(firebaseConfig);

export default app;
