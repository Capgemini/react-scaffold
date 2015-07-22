import React from 'react';
import { RouteHandler, Link } from 'react-router';
import withContext from '../../decorators/withContext';

@withContext
class App extends React.Component {

  render() {
    return (
      <div>
      <h1>Hello world</h1>
      <nav>
        <ul>
          <li><Link to="app">Home</Link></li>
          <li><Link to="about">About</Link></li>
        </ul>
      </nav>
      <RouteHandler {...this.props} />
      </div>
    );
  }

}

export default App;
