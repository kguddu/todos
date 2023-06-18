
import React, { useState, useContext } from 'react';
import { TodoContext } from './TodoContext';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '') {
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a todo"
      />
      <button type="submit">Add Todo
      </button>
    </form>
  );
};

export default TodoForm;

