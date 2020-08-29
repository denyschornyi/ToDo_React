import React from 'react';

import TodoListItem from '../TodoListItem/'

import './TodoList.css';
const TodoList = ({todos, onDeleted}) => {

  
    const elements = todos.map(el => {
        const {id, ...otherProps} = el;
        return(
            <li key={id} className="list-group-item">
                <TodoListItem 
                  {...otherProps}
                  onDeleted={() => onDeleted(id)}/>
            </li>);
    });

    return (
      <ul className="list-group todo-list">
        {elements}
      </ul>
    );
}

export default TodoList;