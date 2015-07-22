import React, { PropTypes } from 'react';

class About extends React.Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'About';
    this.context.onSetTitle(title);
    return (
      <div className="AboutPage">
        <div className="AboutPage-container">
          <h1>{title}</h1>
          <p>...</p>
        </div>
      </div>
    );
  }

}

export default About;
