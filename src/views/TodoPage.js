import React, { useState, useEffect } from 'react';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';
import './TodoPage.css';

function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // 로컬 스토리지에서 할 일 불러오기
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // 할 일 저장
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: input,
        completed: false,
        createdAt: new Date().toLocaleString('ko-KR')
      }]);
      setInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <main className="todo-page">
      <TodoForm input={input} setInput={setInput} onSubmit={addTodo} />

      <div className="todo-stats">
        전체: {todos.length} | 완료: {todos.filter(t => t.completed).length} | 
        남은 일: {todos.filter(t => !t.completed).length}
      </div>

      <ul className="todo-list">
        {todos.length === 0 ? (
          <li className="empty-message">할 일이 없습니다. 새로운 할 일을 추가해보세요!</li>
        ) : (
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))
        )}
      </ul>

      <footer className="todo-footer">
        <p>💡 이 앱은 오프라인에서도 작동합니다!</p>
      </footer>
    </main>
  );
}

export default TodoPage;