import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginFacebook from './components/LoginFacebook';

function App() {
  return (
    <div className="App">
        <p>Facebook Authentication</p>
        <LoginFacebook/>
    </div>
  );
}

export default App;
