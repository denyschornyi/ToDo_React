import React from 'react';

import AppHeader from '../app-header/';
import InputSearch from '../input-search';
import TodoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'

import './app.css';

const App = () =>{
  const todoData = [
    {label: 'Drink Coffe', important: false, id: 1},
    {label: 'Make awesome react app', important: true, id: 2},
    {label: 'Have a lunch', important: false, id: 3}
  ];
  return (
    <div className="todo-app">
      <AppHeader toDo={3} done={1} />
      <div className="top-panel d-flex">
        <InputSearch />
        <ItemStatusFilter />
      </div>
      
      <TodoList todos={todoData}/>
  </div>
  );
};

export default App;