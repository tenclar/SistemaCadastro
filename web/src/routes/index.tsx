import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import { Dashboard } from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
  </Switch>
);

export default Routes;
