import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rockets, { getRocketAPI } from './rockets';

const reducer = combineReducers({
  rockets,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

store.dispatch(getRocketAPI());

export default store;
