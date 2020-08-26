import React from 'react';

import TodoListItem from './TodoListItem'

const TodoList = () => {
    return (
      <ul>
        <li><TodoListItem label='Learn React'/></li>
        <li><TodoListItem label='Be a PRO in React'/></li>
        <li><TodoListItem label='Start working at Netguru as Frontend developer in Septembert'/></li>
      </ul>
    );
}

export default TodoList;