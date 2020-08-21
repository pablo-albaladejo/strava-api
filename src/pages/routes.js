import React from 'react';

import { Switch, Route, HashRouter, Redirect } from 'react-router-dom';

import ErrorPage from './error';
import HomePage from './home';
import LoginPage from './login';
import TokenPage from './token';

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path='/' component={LoginPage} />
      <Route exact path='/token' component={TokenPage} />
      <Route exact path='/home' component={HomePage} />
      <Route exact path='/error' component={ErrorPage} />
      <Redirect to="/error" />
    </Switch>
  </HashRouter>
);

export default Routes;
