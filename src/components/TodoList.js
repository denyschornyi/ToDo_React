import React from 'react';

import TodoListItem from './TodoListItem'

const TodoList = () => {
    return (
      <ul>
        <li><TodoListItem/></li>
        {/* <li>Learn React</li>
        <li>Be a PRO in React</li>
        <li>Start working at Netguru as Frontend developer in September</li> */}
      </ul>
    );
}

export default TodoList;