
// App.js
import React from 'react';
import { TodoProvider } from './TodoContext';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import "./App.css"

const App = () => {
  return (
    <TodoProvider>
      <div className="App">
        <h1>Todo App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
