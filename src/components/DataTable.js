import React from "react";
import DataBody from "./DataBody";

// import css 

function DataTable({ headings, users, handleSort }) {
    return (
        <div>
            <table id="table">
                <thead>
                    <tr>
                       { headings.map(({ name, width }) => {
                           return (
                               <th className="col"
                               key={name}
                               style={{ width }}
                               onClick={() => {
                                   handleSort(name.toLowerCase());
                               }}
                               >
                                {name}
                                <span className="pointer"></span>
                               </th>
                           )
                       })} 
                    </tr>
                </thead>
                <DataBody users={users} />
            </table>
        </div>
    )
}

export default DataTable;
