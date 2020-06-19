import React from 'react';
import ReactDOM from 'react-dom';

const el = (
  <div>
    <h1>ToDo List App</h1>
    <input type="text" placeholder="Search"/>
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  </div>
);
console.log(el);
ReactDOM.render(el, document.querySelector('#root'));