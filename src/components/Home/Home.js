import React, { PropTypes } from 'react';
import TodoApp from '../../components/TodoApp/TodoApp';

class Home extends React.Component {
  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'Home';
    this.context.onSetTitle(title);
    return (
      <div className="HomePage">
        <div className="HomePage-container">
          <h1>{title}</h1>
          <TodoApp />
        </div>
      </div>
    );
  }

}

export default Home;
