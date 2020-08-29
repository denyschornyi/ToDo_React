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
      this.createTodoItem('Be a Pro in React'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Work at Netguru in September'),
    ]
  }

  createTodoItem (label) {
    return {
      label,
      important: false,
      id: this.maxId++
    }
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
    const newItem = this.createTodoItem(text);
    this.setState( ({todoData}) => {
      const newArr = [...todoData, newItem];

      return {
        todoData : newArr
      }
    });
  }
  onToggleImportant = (id) =>{
    console.log('Important', id)
  }

  onToggleDone = (id) =>{
    console.log('Done', id);
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
                  onDeleted={ this.deleteItem} 
                  onToggleImportant={this.onToggleImportant}
                  onToggleDone={this.onToggleDone}/>

        <ItemAddForm onAdded={this.addItem}/>
      </div>
    );
  }
}
