import React from 'react';
import "../../src/styles/App.css";


function SearchBar({ handleSearchChange, handleFormSubmit }) {
    return(
        <div className="searchbar">
            <form className="form-inline">
                <input 
                className="form-control"
                type="search"
                placeholder="Enter Employee Name"
                onChange={
                    e => handleSearchChange(e)
                }>
                </input>
            </form>
        </div>
    )
}


export default SearchBar;