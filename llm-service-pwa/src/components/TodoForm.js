import React from 'react';
import './TodoForm.css';

function TodoForm({ input, setInput, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="todo-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="할 일을 입력하세요..."
        className="todo-input"
      />
      <button type="submit" className="add-button">추가</button>
    </form>
  );
}

export default TodoForm;