import React, { Component } from 'react';
import Modal from 'react-modal';
import './App.css';

import Dog from '../components/Dog';
import Instructions from '../components/Instructions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className="App">
        <h1>Dog Show Game</h1>
        <button className="instructionsButton" onClick={this.openModal}>?</button>
        <Dog name="Dandy"
            kennel="Precious Hounds"
            intelligence="5"
            friendliness="4"
            athleticism="2"
            />
      
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Instructions">
          <button onClick={this.closeModal}>X</button>
          <Instructions/>
        </Modal>
      </div>

    );
  }
}

export default App;
