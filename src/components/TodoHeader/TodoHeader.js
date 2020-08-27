import React from 'react';

import './TodoHeader.css'

const TodoHeader = ({todo, done}) => {
    return(
        <div className="app-header d-flex">
            <h1>My Todo App</h1>
            <h2>{todo} more to do, {done} done</h2>
        </div>
    );
}
export default TodoHeader;