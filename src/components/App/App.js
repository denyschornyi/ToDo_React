import React, { Component } from 'react';

import ItemStatusFilter from '../ItemStatusFilter';
import TodoHeader from '../TodoHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemAddForm from '../itemAddForm';

import './App.css';

export default class App extends Component{
  maxId = 100;

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

  addItem = (text) => {
    //generate id
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    }
    //add item

    this.setState( ({todoData}) => {
      const newArr = [...todoData, newItem];

      return {
        todoData : newArr
      }
    });
  }

  render(){
    const {todoData} = this.state;
    return (
      <div className="todo-app">
        <TodoHeader todo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList todos={todoData}
                  onDeleted={ this.deleteItem} />
        <ItemAddForm onAdded={this.addItem}/>
      </div>
    );
  }
}
