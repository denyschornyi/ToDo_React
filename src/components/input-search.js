import React from 'react';

const InputSearch = () => {
    const searchInfo = 'Type here to find';
    const searchStyle = {
      fontSize: '20px'
    };
    return     <input type="text" style={searchStyle} placeholder={searchInfo}/> ;
}

export default InputSearch;

