import React from 'react';
import './searchBox.styles.css'

function SearchBox({ placeholder, handleChange }) {

    return (
        <div className='search'>
            <input type="search" placeholder={placeholder} onChange={handleChange} />
        </div>
    )
}

export default SearchBox;