import React, { Component } from 'react';

import './ItemAddForm.css'

export default class ItemAddForm extends Component{
    state = {
        label: ''
    }

    onLabelChange = (event) => {
       this.setState({
           label: event.target.value
       })

    }

    onSubmit = (event) =>{
        event.preventDefault();
        this.props.onAdded(this.state.label)
        this.setState({
            label: '' 
        });
    }

    render(){
        return(
            <form className="ItemAddForm d-flex"
                    onSubmit={this.onSubmit}>
                <input type="text"
                        value={this.state.label}
                        className="form-control"
                        placeholder="What's need TODO?"
                        onChange={this.onLabelChange}/>
                <button 
                    className="btn btn-outline-secondary">
                    Add
                </button>
            </form>
        );
    }
}