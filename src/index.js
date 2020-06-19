import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from '../src/components/app-header';
import InputSearch from '../src/components/input-search';
import TodoList from '../src/components/todo-list'

const App = () =>{
  let isLoggedIn = true;
  const login = <span>Login please</span>;
  const welcomeBox = <span>Welcome to our page</span>
  return (
    <div>
      {isLoggedIn ? welcomeBox : login}
      <AppHeader />
      <InputSearch />
      <TodoList />
  </div>
  );
};

ReactDOM.render( <App /> , document.querySelector('#root'));