// TodoItem.js
import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

const TodoItem = ({ todo }) => {
  const { deleteTodo, updateTodo } = useContext(TodoContext);

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleUpdate = (e) => {
    const newTitle = e.target.value;
    updateTodo(todo.id, newTitle);
  };

  return (
    <div>
      <input
        type="text"
        value={todo.title}
        onChange={handleUpdate}
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
