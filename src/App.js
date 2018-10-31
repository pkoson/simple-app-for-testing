import React, { Component } from 'react';
import './App.css';
import VeryImportant from './VeryImportant/VeryImportant';

class App extends Component {
  handleRequest = type => {
    console.log('type', type);
  };

  handleCommentSwitch = () => {
    this.setState(prevState => ({ show: !prevState.allowComments }));
  };

  render() {
    return (
      <div className="App">
        <VeryImportant />
      </div>
    );
  }
}

export default App;
