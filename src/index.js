import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import InputSearch from './components/input-search';
import TodoList from './components/todo-list'
import ItemStatusFilter from './components/item-status-filter'

const App = () =>{
const todoData = [
  {label: 'Drink Coffe', important: false, id: 1},
  {label: 'Make awesome react app', important: true, id: 2},
  {label: 'Have a lunch', important: false, id: 3}
];
  return (
    <div>
      <AppHeader />
      <InputSearch />
      <ItemStatusFilter />
      <TodoList todos={todoData}/>
  </div>
  );
};

ReactDOM.render( <App /> , document.querySelector('#root'));