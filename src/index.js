import React from 'react';
import ReactDOM from 'react-dom';

const TodoHeader = () => <h1>My Todo App</h1>;

const SearchPanel = () => <input placeholder="search"/>;

const TodoList = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Be a PRO in React</li>
      <li>Start working at Netguru as Frontend developer in September</li>
    </ul>
  );
}

const App = () => {
return (
    <div>
      <TodoHeader/>
      <SearchPanel/>
      <TodoList/>
    </div>
  );
}
ReactDOM.render(<App/> , document.getElementById('root'));