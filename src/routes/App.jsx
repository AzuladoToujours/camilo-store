import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Layout from '../components/Layout';
import ProductDetails from '../components/ProductDetails';
import NotFound from '../containers/NotFound';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/product/:id">
          <ProductDetails />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  </BrowserRouter>

);

export default App;
