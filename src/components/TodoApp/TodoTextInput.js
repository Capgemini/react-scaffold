import React, { Component, PropTypes } from 'react';
import { RaisedButton } from 'material-ui';

class TodoTextInput extends Component {

  /**
   * Invokes the callback passed in as onSave, allowing this component to be
   * used in different ways.
   */
  save() {
    var newTodo = this.refs.todo.getDOMNode().value;
    this.refs.todo.getDOMNode().value = '';
    this.props.onSave(newTodo);
  }

  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          id={this.props.id}
          className={this.props.className}
          ref="todo"
          placeholder={this.props.placeholder}
          autoFocus={true}
        />
        <RaisedButton primary={true} label="Submit" onClick={this.save.bind(this)} />
      </div>
    );
  }

}

TodoTextInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onSave: PropTypes.func.isRequired
};

export default TodoTextInput;
