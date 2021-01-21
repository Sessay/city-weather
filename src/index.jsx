import ReactDOM from 'react-dom';
import React from 'react';
// import App from './App.jsx';
import Test from './test';
// import Carousels from './Carousels';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    {/* <Route exact path="/" component={App} /> */}
    <Route exact path="/" component={Test} />
    <div></div>
  </BrowserRouter>,
  // <BrowserRouter>
  //   <Switch>
  //     <Route exact path="/carousels" component={Carousels} />
  //   </Switch>
  // </BrowserRouter>,
  document.getElementById('root')
)
