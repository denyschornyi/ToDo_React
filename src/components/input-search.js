import React from 'react';

import './input-search.css'

const InputSearch = () => {
    const searchInfo = 'Type here to find';
    const searchStyle = {
      fontSize: '20px'
    };
    return     <input type="text" className="input-search" style={searchStyle} placeholder={searchInfo}/> ;
}

export default InputSearch;

