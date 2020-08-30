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
    ],
    term: ''
  }

  createTodoItem (label) {
    return {
      label,
      important: false,
      done: false,
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
    if(text.trim()){
      const newItem = this.createTodoItem(text);
      this.setState( ({todoData}) => {
      const newArr = [...todoData, newItem];

      return {
        todoData : newArr
      }
    });
    }
  }

  onToggle = (id, property) => {
    this.setState( ({todoData}) => {
      const idx = todoData.findIndex( el => el.id === id)

      const oldItem = todoData[idx];
      const newItem = {...oldItem, [property]: !oldItem[property] };
      const newArr = [...todoData.slice(0, idx) , newItem, ...todoData.slice(idx + 1)]
      return {
        todoData: newArr
      }
    });
  }

  onToggleImportant = (id) =>{
    this.onToggle(id, 'important');
  }

  onToggleDone = (id) => {
    this.onToggle(id, 'done');
  }

  search = (items, term) => {
    if(term.length === 0 ){
      return items;
    }
    return items.filter(el => el.label.indexOf(term) > -1)
  }

  onSearchChange = (term) => {
    this.setState({term});
  }

  render(){
    const {todoData, term} = this.state;
    const visibleData = this.search(todoData, term);
    
    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <TodoHeader todo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange}/>
          <ItemStatusFilter />
        </div>

        <TodoList todos={visibleData}
                  onDeleted={ this.deleteItem} 
                  onToggleImportant={this.onToggleImportant}
                  onToggleDone={this.onToggleDone}/>

        <ItemAddForm onAdded={this.addItem}/>
      </div>
    );
  }
}
