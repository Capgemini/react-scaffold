import React from 'react';
import Header from './Header';
import TodoStore from '../../stores/TodoStore';
import MainSection from './MainSection';

/**
 * Retrieve the current TODO data from the TodoStore
 */
export function getTodoState() {
  return {
    allTodos: TodoStore.getAll(),
    areAllComplete: TodoStore.areAllComplete()
  };
}

class TodoApp extends React.Component {

  constructor(props){
    super(props);
    this.state = getTodoState();
  }

  componentDidMount() {
    TodoStore.addChangeListener(this.onChange.bind(this));
  }

  componentWillUnmount() {
    TodoStore.removeChangeListener(this.onChange.bind(this));
  }

  onChange() {
    this.setState(getTodoState());
  }

  render() {
    return (
      <div>
        <Header />
        <MainSection
          allTodos={this.state.allTodos}
          areAllComplete={this.state.areAllComplete}
        />
      </div>
    );
  }

}

export default TodoApp;
