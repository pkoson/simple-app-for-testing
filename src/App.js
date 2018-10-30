import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    show: false
  };
  handleClick = () => {
    this.setState(prevState => ({ show: !prevState.show }));
    this.handleRequest('firstRequest');
  };
  handleRequest = type => {
    console.log('type', type);
  };
  render() {
    return (
      <div className="App">
        <button className="red-button" onClick={this.handleClick}>
          Click me
        </button>
        {this.state.show && <div className="section-two">SECTION TWO</div>}
      </div>
    );
  }
}

export default App;
