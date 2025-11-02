import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content" onClick={() => onToggle(todo.id)}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => {}}
          className="todo-checkbox"
        />
        <div className="todo-text">
          <span>{todo.text}</span>
          <small className="todo-time">{todo.createdAt}</small>
        </div>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="delete-button"
      >
        🗑️
      </button>
    </li>
  );
}

export default TodoItem;