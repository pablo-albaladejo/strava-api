import React from 'react';
import { createStore, compose } from 'redux';

import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import rootReducer from '../reducers';
import { getVersionKey } from '../../utils/commons';

//Setup persistence
const persistConfig = {
  key: getVersionKey(),
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

//Apply Middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  //applyMiddleware(navigationMiddleware, sagaMiddleware)
);
//Create Redux Store
const store = createStore(
  persistedReducer,
  enhancer
);

//Create Store persistor
const persistor = persistStore(store);

const ReduxWrapper = ({ children }) =>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>

export default ReduxWrapper;
