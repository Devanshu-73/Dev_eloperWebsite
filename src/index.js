import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyA4KRl-Ki8ZMQDx880WWHheEYS3OPeoyCU',
  authDomain: 'dev-eloper',
  projectId: 'developer-database-732',
  storageBucket: 'gs://developer-database-732.appspot.com',
  messagingSenderId: '232071454403',
  appId: 'YOUR_APP_ID',
};

firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
