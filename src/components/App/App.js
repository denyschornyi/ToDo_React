import React, { Component } from 'react';

import ItemStatusFilter from '../ItemStatusFilter';
import TodoHeader from '../TodoHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';

import './App.css';

export default class App extends Component{

  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 }
    ]
  }

  deleteItem = (id) =>{
    this.setState( ({todoData}) => {
      const idx = todoData.findIndex(el => el.id === id);
      
      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);

      const newArr = [...before, ...after];

      return {
        todoData : newArr
      }
    });
  }

  render(){
    const {todoData} = this.state;
    return (
      <div className="todo-app">
        <TodoHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList todos={todoData}
                  onDeleted={ this.deleteItem} />
      </div>
    );
  }
}
