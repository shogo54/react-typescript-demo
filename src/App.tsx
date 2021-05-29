import React from 'react';

import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

function App() {
  const todos = [{ id: 't1', text: 'Finish the course' }];
  return (
    <div className="App">
      <NewTodo />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
