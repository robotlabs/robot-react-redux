import {createStore, combineReducers} from 'redux';
import {countReducers, appStateReducers} from './reducers';

const combinedReducers = combineReducers({
  'countReducers': countReducers,
  'appStateReducers': appStateReducers
});

const store = createStore(combinedReducers);

export default store;