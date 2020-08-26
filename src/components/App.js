import React from 'react';

import TodoList from './TodoList';
import SearchPanel from './SearchPanel';
import TodoHeader from './TodoHeader';

const App = () => {
return (
    <div>
      <TodoHeader/>
      <SearchPanel/>
      <TodoList/>
    </div>
  );
}

export default App;