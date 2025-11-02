import React from 'react';
import './Header.css';

function Header({ isOnline }) {
  return (
    <header className="App-header">
      <h1>📝 할 일 관리</h1>
      <div className={`status ${isOnline ? 'online' : 'offline'}`}>
        {isOnline ? '🟢 온라인' : '🔴 오프라인 모드'}
      </div>
    </header>
  );
}

export default Header;