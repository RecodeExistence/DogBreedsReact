import React from 'react'; 
import './searchbox.style.css'; 

export const SearchBox = ({ placeholder, handleSearchValueChange}) => (
    <input
        className="search"
          type="search"
          placeholder={placeholder}
          onChange={handleSearchValueChange}
    />
); 

