import React from 'react';
import App from './App';
import Carousels from './Carousels';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const BasicRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/carousels" component={Carousels} />
    </Switch>
  </BrowserRouter>
);

export default BasicRoute;