import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css'
import FirebaseContext from './context/FirebaseContext'
import Firebase from './backend/firebaseConfig'


ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Router>
      <App />
    </Router>
  </FirebaseContext.Provider>, 
document.getElementById('root'));
