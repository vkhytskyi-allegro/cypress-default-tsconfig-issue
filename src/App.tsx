import React from 'react';
import logo from './logo.svg';
import './App.css';

const enum Enumeration {
  FOO = 'foo',
  BAR = 'bar',
  BAZ = 'baz',
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Here goes enumeration:
          <ul>
            <li>{Enumeration.FOO}</li>
            <li>{Enumeration.BAR}</li>
            <li>{Enumeration.BAZ}</li>
          </ul>
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
