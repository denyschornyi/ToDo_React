import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import InputSearch from './components/input-search';
import TodoList from './components/todo-list'
import ItemStatusFilter from './components/item-status-filter'

import './index.css';

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

ReactDOM.render( <App /> , document.querySelector('#root'));