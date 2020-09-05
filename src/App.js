import React from 'react';
import logo from './logo.svg';
import './App.css';

function Rect() {
  console.log('Rect rendered')
  return (
    <div style={{ background: 'blue' }}>A rect with background</div>
  )
}

function App() {
  console.log('App rendered')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Rect />
      </header>
    </div>
  );
}

export default App;
