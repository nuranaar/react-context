import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { TodoContext } from './contexts';
import { todoState } from './state/reduser';

function App() {
  return (
    <TodoContext.Provider value={todoState.todoList}>
      <Form />
      <TodoList />
    </TodoContext.Provider >
  );
}

export default App;
