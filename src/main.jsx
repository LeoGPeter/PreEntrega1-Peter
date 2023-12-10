import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC8vd_co9TtFVPlfGjUhm8fNlEjAkMEVjE",
  authDomain: "ecommerce-c3be1.firebaseapp.com",
  projectId: "ecommerce-c3be1",
  storageBucket: "ecommerce-c3be1.appspot.com",
  messagingSenderId: "483115849791",
  appId: "1:483115849791:web:f1a5395fa93cfb7475408a"
};


initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
