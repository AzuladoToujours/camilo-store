import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ProductProvider from './providers/ProductProvider';
import App from './routes/App';
import reducer from './reducers';

import initialState from './initialState';

const store = createStore(reducer, initialState);

ReactDOM.render(
  <ProductProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ProductProvider>,
  document.getElementById('app'),
);
