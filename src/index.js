import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from '../src/components/app-header';
import InputSearch from '../src/components/input-search';
import TodoList from '../src/components/todo-list'

const App = () =>{
const todoData = [
  {label: 'Drink Coffe', important: false},
  {label: 'Make awesome react app', important: true},
  {label: 'Have a lunch', important: false}
];
  return (
    <div>
      <AppHeader />
      <InputSearch />
      <TodoList todos={todoData}/>
  </div>
  );
};

ReactDOM.render( <App /> , document.querySelector('#root'));