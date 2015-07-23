import React, { PropTypes } from 'react';
import TodoActions from '../../actions/TodoActions';
import TodoTextInput from './TodoTextInput';

import cx from 'react/lib/cx';

class TodoItem extends React.Component {

  constructor() {
    super();
    this.state = {
      isEditing: false
    };
  }

  onToggleComplete() {
    TodoActions.toggleComplete(this.props.todo);
  }

  onDoubleClick() {
    this.setState({isEditing: true});
  }

  /**
   * Event handler called within TodoTextInput.
   * Defining this here allows TodoTextInput to be used in multiple places
   * in different ways.
   * @param  {string} text
   */
  onSave(text) {
    TodoActions.updateText(this.props.todo.id, text);
    this.setState({isEditing: false});
  }

  onDestroyClick() {
    TodoActions.destroy(this.props.todo.id);
  }

  render() {
    var todo = this.props.todo;

    var input;
    if (this.state.isEditing) {
      input = (
        <TodoTextInput
          className="edit"
          onSave={this.onSave}
          value={todo.text}
        />);
    }

    // List items should get the class 'editing' when editing
    // and 'completed' when marked as completed.
    // Note that 'completed' is a classification while 'complete' is a state.
    // This differentiation between classification and state becomes important
    // in the naming of view actions toggleComplete() vs. destroyCompleted().
    return (
      <li
        className={cx({
          'completed': todo.complete,
          'editing': this.state.isEditing
        })}
        key={todo.id}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.complete}
            onChange={this.onToggleComplete.bind(this)}
          />
          <label onDoubleClick={this.onDoubleClick.bind(this)}>
            {todo.text}
          </label>
          <button className="destroy" onClick={this.onDestroyClick.bind(this)} />
        </div>
        {input}
      </li>
    );
  }

}

TodoItem.propTypes = {
   todo: PropTypes.object.isRequired
};

export default TodoItem;
