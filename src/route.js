import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Register from './components/Register';
import Login from './components/Login';
import BootCollection from './components/BootCollection';
import AddBoot from './components/AddBoot';

export default (
    <Switch>
        <Route exact path="/" component={BootCollection}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route path="/add" component={AddBoot}/>
    </Switch>
)