/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import 'babel/polyfill';
import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import express from 'express';
import React from 'react';
import Router from 'react-router';
import routes from './routes';

const server = express();

server.set('port', (process.env.PORT || 5000));
server.use(express.static(path.join(__dirname, 'public')));

// The top-level React component + HTML template for it
const templateFile = path.join(__dirname, 'templates/index.html');
const template = _.template(fs.readFileSync(templateFile, 'utf8'));

server.get('*', function(req, res, next) {
  try {
    let data = { description: '' };
    /* @todo - figure out how we inject CSS */
    let css = [];
    Router.run(routes, req.url, function(Handler) {
      let app = (<Handler
        context={{
          onSetTitle: value => data.title = value,
          onSetMeta: (key, value) => data[key] = value
        }} />
      );
      data.body = React.renderToString(app);
      data.css = css.join('');
      let html = template(data);
      res.send(html);
    });
  } catch (err) {
    next(err);
  }
});

//
// Launch the server
// -----------------------------------------------------------------------------
server.listen(server.get('port'), () => {
  if (process.send) {
    process.send('online');
  } else {
    console.log('The server is running at http://localhost:' + server.get('port'));
  }
});
