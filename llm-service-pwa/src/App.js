import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoPage from './views/TodoPage';
import './App.css';

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // 온라인/오프라인 감지
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className="App">
      <Header isOnline={isOnline} />
      <TodoPage />
    </div>
  );
}

export default App;