import React, { Component } from 'react';
import './App.css';
import Discussion from './Discussion/Discussion';

class App extends Component {
  state = {
    show: false,
    allowComments: false
  };
  handleClick = () => {
    this.setState(prevState => ({ show: !prevState.show }));
    this.handleRequest('firstRequest');
  };
  handleRequest = type => {
    console.log('type', type);
  };

  handleCommentSwitch = () => {
    this.setState(prevState => ({ show: !prevState.allowComments }));
  };

  render() {
    return (
      <div className="App">
        <Discussion
          value={this.state.allowComments}
          title="Zaznacz ten wazny input"
        />
      </div>
    );
  }
}

export default App;
