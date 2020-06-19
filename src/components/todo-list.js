import React from 'react';

import TodoListItem from '../components/todo-list-item';
import './todo-list.css';

const TodoList = ({todos}) => {
    
    const elements = todos.map(item => {
        const {id, ...ItemProps} = item
        return (
            <li key={id} className="list-group-item">  
                <TodoListItem {...ItemProps} />
            </li>
        );
    });
    return (
      <ul className="list-group todo-list">
        {elements}
      </ul>
    );
  }


  export default TodoList;