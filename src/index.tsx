import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';

import App from './App';
import { checkboxReducer } from './store/reducer';

const composeEnhancers =
  //@ts-ignore
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? //@ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

function loggerMiddleware(store: any) {
  return function (next: any) {
    return function (action: any) {
      const result = next(action);
      console.log('middleware', store.getState());
      return result;
    };
  };
}

const store = createStore(checkboxReducer, composeEnhancers(applyMiddleware(loggerMiddleware, thunk)));

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
