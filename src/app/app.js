import React, { Component } from 'react';
import './app.css';

import store from './redux-store';
import {Provider} from 'react-redux';
import Boxes from './components/boxes/boxes-index';

import {incrementAction, xxxAction} from './redux-actions';

class App extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      console.log('-a-');
      store.dispatch(incrementAction(124));
      console.log('stpre ', store.getState());
    }, 4000);

    setTimeout(() => {
      console.log('-===-');
      store.dispatch(xxxAction(124));
      console.log('xxx ', store.getState());
    }, 2000);
  }
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Boxes.BoxA></Boxes.BoxA>
          <Boxes.BoxB></Boxes.BoxB>
          <Boxes.BoxC></Boxes.BoxC>
        </div>
      </Provider>
    );
  }
}

export default App;
