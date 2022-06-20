import { compose, createStore, combineReducers } from 'redux';
import { profileReducer } from './profile/reducer';
import { messageReducer } from './messages/reducer';

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    profile: profileReducer,
    messages: messageReducer,
  }),
  composeEnhancers()
);
