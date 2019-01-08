import React, { Component } from 'react';
import './app.css';

import BoxA from './components/box-a';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BoxA></BoxA>
      </div>
    );
  }
}

export default App;
