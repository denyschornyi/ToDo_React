import React from 'react';

import TodoListItem from '../components/todo-list-item';

const TodoList = ({todos}) => {
    const elements = todos.map(item => {
        return (
            <li> 
                <TodoListItem important={item.important} label={item.label} />
            </li>
        );
    });
    return (
      <ul>
        {elements}
      </ul>
    );
  }


  export default TodoList;