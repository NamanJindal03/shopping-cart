import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase'
import 'firebase/firestore';


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBVWkRpDDC3PwogUV-p3koLQdfO8KCSPIE",
    authDomain: "cart-c48c1.firebaseapp.com",
    databaseURL: "https://cart-c48c1.firebaseio.com",
    projectId: "cart-c48c1",
    storageBucket: "cart-c48c1.appspot.com",
    messagingSenderId: "781967206946",
    appId: "1:781967206946:web:54414fe4d42a524409787b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
