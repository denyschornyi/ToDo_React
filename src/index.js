import React from 'react';
import ReactDOM from 'react-dom';

const el = (
  <div>
    <h1>My Todo App</h1>
    <input placeholder="search"/>
    <ul>
      <li>Learn React</li>
      <li>Be a PRO in React</li>
      <li>Start working at Netguru as Frontend developer in September</li>
    </ul>
  </div>
);

ReactDOM.render(el , document.getElementById('root'));