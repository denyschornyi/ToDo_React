import React from 'react';

import TodoListItem from './TodoListItem'


const TodoList = ({todos}) => {

    const elements = todos.map(el => {
        const {id, ...otherProps} = el;
        return(
            <li key={id}>
                <TodoListItem {...otherProps}/>
            </li>);
    });

    return (
      <ul>
        {elements}
      </ul>
    );
}

export default TodoList;