import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Checkout from '../containers/Checkout';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </Layout>
  </BrowserRouter>

);

export default App;
