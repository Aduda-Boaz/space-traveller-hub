import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rockets, { getRocketAPI } from './rockets';
import missions, { getMissionAPI } from './missions';

const reducer = combineReducers({
  rockets,
  missions,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

store.dispatch(getRocketAPI());
store.dispatch(getMissionAPI());

export default store;
