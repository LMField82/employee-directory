import React from 'react';
// import "css" files here

function Wrapper ({ children }) {
    return (
        <div className="wrapper">
            {children}
        </div>
    )
}

export default Wrapper;