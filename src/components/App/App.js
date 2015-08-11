import React from 'react';
import { RouteHandler, Link } from 'react-router';
import withContext from '../../decorators/withContext';
import mui, { AppBar, IconButton } from 'material-ui';
let ThemeManager = new mui.Styles.ThemeManager();

@withContext
class App extends React.Component {

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  componentWillMount() {
    ThemeManager.setTheme(ThemeManager.types.DARK);
  }

  render() {
    let githubButton = (
      <IconButton
        iconClassName="muidocs-icon-custom-github"
        href="https://github.com/capgemini/react-scaffold"
        linkButton={true}
      />
    );
    return (
      <div>
        <header>
          <AppBar
            title="React Scaffold"
            iconElementRight={githubButton} />
        </header>
        <nav>
          <ul>
            <li><Link to="app">Home</Link></li>
            <li><Link to="about">About</Link></li>
          </ul>
        </nav>

        <section className="content">
          <RouteHandler {...this.props} />
        </section>

      </div>
    );
  }

}

export default App;
