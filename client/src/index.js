import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AppWrapper from './App';
import rootReducer from './store/reducers';

const store = createStore(rootReducer);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
