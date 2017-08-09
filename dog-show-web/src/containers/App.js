import React, { Component } from 'react';
import Dog from '../components/Dog';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Dog Show Game</h1>
        <button className="instructionsButton">?</button>
        <Dog name="Dandy"
            kennel="Precious Hounds"
            intelligence="5"
            friendliness="4"
            athleticism="2"
            />
      </div>
    );
  }
}

export default App;
