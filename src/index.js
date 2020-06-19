import React from 'react';
import ReactDOM from 'react-dom';

const AppHeader = () => {
  return  <h1>ToDo List App</h1>;
}

const InputSearch = () => {
  return     <input type="text" placeholder="Search"/> ;
}



const TodoList = () => {

  const item  = ['Learn React', 'Build awesome app'];

  return (
    <ul>
      <li>{item[0]}</li>
      <li>{item[1]}</li>
    </ul>
  );
}
const App = () =>{
  return (
    <div>
      <AppHeader />
      <InputSearch />
      <TodoList />
  </div>
  );
};

ReactDOM.render( <App /> , document.querySelector('#root'));