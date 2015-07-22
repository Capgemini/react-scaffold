import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';

import NotFound from './components/NotFoundPage';
import Home from './components/Home';
import About from './components/About';
import App from './components/App';

export default (
  <Route name="app" path="/" handler={ App }>
    <Route name="about" path="/about" handler={ About }/>
    <DefaultRoute handler={ Home } />
    <NotFoundRoute handler={ NotFound } />
  </Route>
);
