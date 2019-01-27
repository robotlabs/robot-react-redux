import {createStore, combineReducers} from 'redux';
import {math, xxx} from './reducers/';
console.log('math ', math);

const combinedReducers = combineReducers({
  'a': math,
  'b': xxx
});

const store = createStore(combinedReducers);

export default store;