import React, { Component } from 'react';
import TodoActions from '../../actions/TodoActions';
import TodoTextInput from './TodoTextInput';

export default class Header extends Component {

  /**
   * Event handler called within TodoTextInput.
   * Defining this here allows TodoTextInput to be used in multiple places
   * in different ways.
   * @param {string} text
   */
  onSave(text) {
    if (text.trim()){
      TodoActions.create(text);
    }
  }

  render() {
    return (
      <header id="header">
        <h1>todos</h1>
        <TodoTextInput
          id="new-todo"
          placeholder="What needs to be done?"
          onSave={this.onSave}
        />
      </header>
    );
  }

}
