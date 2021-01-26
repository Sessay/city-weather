import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter basename='/'>
    <Route path={`/`} component={App}></Route>
  </BrowserRouter>,
  document.getElementById('root')
)
