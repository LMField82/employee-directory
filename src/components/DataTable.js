import React from "react";
import DataBody from "./DataBody";
import "../../src/styles/App.css";


function DataTable({ headings, users, handleSort }) {
    return (
        <div>
            <table id="table" className="table table-striped">
                <thead>
                    <tr>
                       { headings.map(({ name, width }) => {
                           return (
                               <th className="col"
                               key={name}
                               style={{ width }}
                               onClick={() => {
                                   handleSort(name.toLowerCase())
                               }}scope="col"><i className="fas fa-arrows-alt-v"></i>
                                {name}
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
