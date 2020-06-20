import React, {Component} from 'react';

import AppHeader from '../app-header/';
import InputSearch from '../input-search';
import TodoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'

import './app.css';

export default class App extends Component{
  
  state = {
    todoData: [
      {label: 'Drink Coffe', important: false, id: 1},
      {label: 'Make awesome react app', important: true, id: 2},
      {label: 'Have a lunch', important: false, id: 3}
    ]
  }
  
  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex( (el) =>  el.id === id);

      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArray
      };
    });
  }

  render(){
    return (
      <div className="todo-app">
  
        <AppHeader toDo={3} done={1} />
        
        <div className="top-panel d-flex">
          <InputSearch />
          <ItemStatusFilter />
        </div>
        
        <TodoList 
          todos={this.state.todoData}
          onDeleted={ this.deleteItem}/>
    </div>
    );
  }
};
