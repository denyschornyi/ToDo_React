import React from 'react';

const TodoList = () => {

    const item  = ['Learn React', 'Build awesome app'];
  
    return (
      <ul>
        <li>{item[0]}</li>
        <li>{item[1]}</li>
      </ul>
    );
  }

  export default TodoList;