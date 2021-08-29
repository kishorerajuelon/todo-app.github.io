import React from 'react'
import './App.css';
import Logo from './components/Logo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
    <Logo/>
   <TodoList/>
    </div>
  );
}

export default App;


