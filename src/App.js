import React, { Component } from 'react';
import TodoList from './todolist/TodoList'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <TodoList />
      </div>
    );
  }
}

export default App;
