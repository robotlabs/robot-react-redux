import React, { Component } from 'react';
import './app.css';

import store from './redux/store';
import {Provider} from 'react-redux';
import Boxes from './components/boxes/boxes-index';

import * as actions from './redux/actions';

class App extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      store.dispatch(actions.incrementAction(124));
    }, 100);
    setTimeout(() => {
      store.dispatch(actions.incrementAction(24));
    }, 3000);

    //** random update app state */
    setTimeout(() => {
      store.dispatch(actions.messageAction('Ciao bella'));
    }, 500);
    setTimeout(() => {
      store.dispatch(actions.randomAppState());
    }, 4000);
  }
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Boxes.BoxA
            actions={actions}>
          </Boxes.BoxA>
          <Boxes.BoxB></Boxes.BoxB>
          <Boxes.BoxC></Boxes.BoxC>
        </div>
      </Provider>
    );
  }
}

export default App;
