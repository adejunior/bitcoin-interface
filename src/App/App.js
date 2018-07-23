import React, { Component } from 'react';
import './App.css';
import { Summary } from '../_components'

export class App extends Component{
    render(){
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to Quote Trades BitCoin</h1>
          </header>          
          <Summary/>           
        </div>
        );
      }
}

