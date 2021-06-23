import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

import Layout from '../pages/_layout/dash';

interface RouteProps extends ReactDOMRouteProps {
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ component: Component, ...rest }) => (
  <ReactDOMRoute
    {...rest}
    // eslint-disable-next-line
    render={(props: any) => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

export default Route;
