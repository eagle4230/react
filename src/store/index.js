import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { profileReducer } from './profile/reducer';
import { messageReducer } from './messages/reducer';

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  profile: profileReducer,
  messages: messageReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
