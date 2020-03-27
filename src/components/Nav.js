import React from "react";
import SearchBar from "./SearchBar";
import Header from "./Header";

function Nav({handleSearchChange}) {
    return (
       <div>
           <Header />

           <SearchBar handleSearchChange = { handleSearchChange } />
       </div>
    )
}

export default Nav;