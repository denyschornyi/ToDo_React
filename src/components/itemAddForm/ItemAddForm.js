import React, { Component } from 'react';

import './ItemAddForm.css'

export default class ItemAddForm extends Component{
    render(){
        const {onAdded} = this.props;
        return(
            <div className="ItemAddForm">
                <input type="text"/>
                <button 
                    className="btn btn-outline-secondary"
                    onClick={ () => onAdded('Hello world')}>
                    Add
                </button>
            </div>
        );
    }
}