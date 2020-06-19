import React from 'react';
import ReactDOM from 'react-dom';

const AppHeader = () => {
  return  <h1>ToDo List App</h1>;
}

const InputSearch = () => {
  const searchInfo = 'Type here to find';
  const searchStyle = {
    fontSize: '20px'
  };
  return     <input type="text" style={searchStyle} placeholder={searchInfo}/> ;
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