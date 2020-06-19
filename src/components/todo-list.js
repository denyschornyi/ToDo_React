import React from 'react';

import TodoListItem from '../components/todo-list-item';
const TodoList = () => {
    return (
      <ul>
        <li><TodoListItem label="Drink Coffe"/></li>
        <li><TodoListItem important label="Learn React" /></li>
      </ul>
    );
  }

  export default TodoList;