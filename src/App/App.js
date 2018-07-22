import React from 'react';
import './App.css';
import { Summary } from '../_components'

export const App = () => {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Quote BitCoin</h1>
        </header>
        
        <Summary/>   
         
      </div>
    );
}

