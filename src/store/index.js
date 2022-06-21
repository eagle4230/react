import { compose, createStore, combineReducers } from 'redux';
import { profileReducer } from './profile/reducer';
import { messageReducer } from './messages/reducer';

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  profile: profileReducer,
  messages: messageReducer,
});

export const store = createStore(rootReducer, composeEnhancers());
