import React from 'react';
import App from './App';
import Carousels from './Carousels';
import { HashRouter, Route, Switch } from 'react-router-dom';

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/carousels" component={Carousels}/>
        </Switch>
    </HashRouter>
);

export default BasicRoute;