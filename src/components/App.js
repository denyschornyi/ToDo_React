import React from 'react';

import TodoList from './TodoList';
import SearchPanel from './SearchPanel';
import TodoHeader from './TodoHeader';

const todoData = [
    {label: 'Learn React', important: true, id: 1},
    {label: 'Be a PRO in Reac', important: false, id: 2},
    {label: 'Start working at Netguru as Frontend developer in Septembert', important: true, id: 3},
]

const App = () => {
return (
    <div>
      <TodoHeader/>
      <SearchPanel/>
      <TodoList todos={todoData}/>
    </div>
  );
}

export default App;