import React from 'react';

import TodoListItem from './TodoListItem'


const TodoList = ({todos}) => {

    const elements = todos.map(el => <li><TodoListItem label={el.label} important={el.important}/></li>)

    return (
      <ul>
        {elements}
      </ul>
    );
}

export default TodoList;